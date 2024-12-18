import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { StorageService } from "../storage.service";
import {ModalController, NavController, ToastController, AlertController, Events, ActionSheetController, Platform} from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";
import { PageTrack } from "../decorators/page-track.decorator";
import { SettingService } from '../service/setting.service';
import {Base64} from '@ionic-native/base64/ngx';
import {FileTransfer} from '@ionic-native/file-transfer/ngx';
import {File} from '@ionic-native/file/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';
import {Camera} from '@ionic-native/camera/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: "app-manualtrip",
  templateUrl: "./manualtrip.page.html",
  styleUrls: ["./manualtrip.page.scss"]
})
@PageTrack("Manual Trip Screen")
export class ManualtripPage implements OnInit {
  public onAddForm: FormGroup;
  vehiclelist: any = [];
  userid: any = '';
  correctPath: any = '';
  currentName: any = '';
  selectedImageStart: any = '';
  selectedImageEnd: any = '';
  viewImageStart: any = '';
  viewImageEnd: any = '';
  constructor(
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private settingService: SettingService,
    public modalController: ModalController,
    public navCtrl: NavController,
    public activatedRoute: ActivatedRoute,
    public toastCtrl: ToastController,
    public alertController: AlertController,
    public events: Events,
    public actionSheetController: ActionSheetController,
    public platform: Platform,
    private base64: Base64,
    private transfer: FileTransfer,
    private file: File,
    private filePath: FilePath,
    private camera: Camera,
    private webview: WebView,
    private sanitizer: DomSanitizer,
  ) {
    this.onAddForm = this.formBuilder.group({
      distance: new FormControl("",
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9](.[0-9]+)?")
        ])
      ),
      unit: new FormControl("", Validators.compose([Validators.required])),
      date: new FormControl("", Validators.compose([Validators.required])),
      vehicle_type: new FormControl("", Validators.compose([Validators.required]))
    });
    this.activatedRoute.queryParams.subscribe(params => {

      this.onAddForm.patchValue({
        distance: params.distance,
        unit: params.unit
      });
    });
    this.events.subscribe('user:created', (time) => {
      this.userid = this.settingService.getUserId();
    });
  }

  ngOnInit() {
    this.userid = this.settingService.getUserId();
    this.viewVehicletype();
  }
  async selectImage(type){
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Photo',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Capture Photo',
        handler: () => {
          console.log('Capture Photo');
          this.getPicture(this.camera.PictureSourceType.CAMERA, type);
        }
      }, {
        text: 'Select From Gallery',
        handler: () => {
          console.log('Select From Gallery');
          this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY, type);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  public getPicture(sourceType, type) {
    // Create options for the Camera Dialog
    const options = {
      quality: 60,
      sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    // Get the data of an image
    this.camera.getPicture(options).then(
        imagePath => {
          if (this.platform.is('android') && this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {

            this.filePath.resolveNativePath(imagePath).then(filePath => {

              this.correctPath = filePath.substr(
                  0,
                  filePath.lastIndexOf('/') + 1
              );
              this.currentName = imagePath.substring(
                  imagePath.lastIndexOf('/') + 1,
                  imagePath.lastIndexOf('?')
              );
              this.copyFileToLocalDir(
                  this.correctPath,
                  this.currentName,
                  this.createFileName(),
                  type
              );
            });

          } else {
            this.currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
            this.correctPath = imagePath.substr(
                0,
                imagePath.lastIndexOf('/') + 1
            );
            this.copyFileToLocalDir(
                this.correctPath,
                this.currentName,
                this.createFileName(),
                type
            );
          }
        },
        err => {
          console.log('Error while selecting image.');
        }
    );
  }
  // Always get the accurate path to your apps folder
  public pathForImage(img, type) {
    if (img === null) {
      return '';
    } else {
      if(type === 'start') {
        this.viewImageStart = this.webview.convertFileSrc(
            this.file.dataDirectory + img
        );
      } else {
        this.viewImageEnd = this.webview.convertFileSrc(
            this.file.dataDirectory + img
        );
      }
    }
    // this.uploadcamera = false;
  }


  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName, type) {
    this.file
        .copyFile(namePath, currentName, this.file.dataDirectory, newFileName)
        .then(
            success => {
              if(type === 'start'){
                this.selectedImageStart = newFileName;
                this.pathForImage(this.selectedImageStart, type);
              } else {
                this.selectedImageEnd = newFileName;
                this.pathForImage(this.selectedImageEnd, type);
              }
            },
            error => {
              console.log('Error while storing file.');
            }
        );
  }

  // Create a new name for the image
  private createFileName() {
    const d = new Date(),
        n = d.getTime(),
        newFileName = n + '.jpg';
    return newFileName;
  }

  getImgContent(imgFile): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imgFile);
  }
  presentAlertPrompt(){
    console.log('presentAlertPrompt');
  }
  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      mode: 'md',
      cssClass: 'customToast'
    });
    toast.present();
  }
  createTable() {
    this.storageService
      .createVehicleTable()
      .then(res => {
      })
      .catch(error => {
        console.log(error);
      });
  }

  viewVehicletype() {
    this.vehiclelist = [];
    this.storageService
      .viewVehicle(this.userid)
      .then(res => {
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            this.vehiclelist.push({
              id: res.rows.item(i).id,
              name: res.rows.item(i).name,
              type: res.rows.item(i).type,
              date: res.rows.item(i).date
            });
          }
        } else {
          this.vehiclelist = [];
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  save() {
    this.storageService
      .createTable()
      .then(val => {
        this.storageService
          .addTrip(
            "",
            "",
            "",
            this.onAddForm.value.distance,
            this.onAddForm.value.unit,
            this.onAddForm.value.vehicle_type,
            this.onAddForm.value.vehicle_name,
            this.onAddForm.value.startdate,
            this.onAddForm.value.enddate,
            this.onAddForm.value.starttime,
            this.onAddForm.value.endtime,
            this.userid,
            this.selectedImageStart,
            this.selectedImageEnd
          )
          .then(val => {
            this.presentToast("Trip saved successfully.");
            this.navCtrl.navigateRoot("/trips");
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }
  goTo(path) {
    this.navCtrl.navigateRoot("/" + path);
  }

}
