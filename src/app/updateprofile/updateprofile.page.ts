import { Component, OnInit } from '@angular/core';
import {ApiService, baseUrl} from '../api.service';
import {ToastController, NavController, Events, ActionSheetController, LoadingController, AlertController} from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PageTrack } from '../decorators/page-track.decorator';
import { SettingService } from '../service/setting.service';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {FileTransfer, FileTransferObject, FileUploadOptions} from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.page.html',
  styleUrls: ['./updateprofile.page.scss']
})
@PageTrack('Update Profile Screen')
export class UpdateprofilePage implements OnInit {
  public onAddForm: FormGroup;
  userData: any;
  showProfileViewer = false;
  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    private apiService: ApiService,
    private settingService: SettingService,
    public toastCtrl: ToastController,
    public actionSheetController: ActionSheetController,
    public events: Events,
    private transfer: FileTransfer,
    private camera: Camera,
    public webview: WebView,
    private alertController: AlertController,
    public loadingCtrl: LoadingController,
  ) {
    this.userData = this.settingService.getUserData();
    events.subscribe('user:updated', time => {
      this.userData = this.settingService.getUserData();
    });
    this.onAddForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ])),
      firstname: new FormControl('', Validators.compose([Validators.required])),
      lastname: new FormControl('', Validators.compose([Validators.required])),
      mobile_no: new FormControl('', Validators.compose([
        Validators.pattern('[0-9]{10}')
      ])),
      pincode: new FormControl('', Validators.compose([
        Validators.maxLength(4),
        Validators.pattern('[0-9]{4}')
      ]))
    });
    this.onAddForm.patchValue({
      firstname: this.userData.first_name,
      lastname: this.userData.last_name,
      mobile_no: this.userData.mobile_no,
      email: this.userData.email,
      pincode: this.userData.zip
    });
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
  ngOnInit() { }
  async editProfileClick() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Capture Camera',
        handler: () => {
          console.log('Camera clicked');
          this.getPicture('camera');
        }
      }, {
        text: 'Select From Gallery',
        handler: () => {
          console.log('Gallery clicked');
          this.getPicture('gallery');
        }
      },
      ...(this.userData.profile_pic ? [{
        text: 'View Profile Picture',
        handler: () => {
          console.log('View Profile Picture');
          // this.deletePicture();
          this.showProfileViewer = true;
        }
      },
      {
        text: 'Delete Profile Picture',
        handler: async () => {
          console.log('Delete Profile Picture');
          const alert = await this.alertController.create({
            header: 'Confirm!',
            message: 'Are you sure want to delete profile picture?',
            buttons: [
              {
                text: 'No',
                role: 'cancel',
                handler: (blah) => {
                  console.log('Confirm Cancel: blah');
                }
              }, {
                text: 'Yes',
                handler: () => {
                  console.log('Confirm Yes');
                  this.deletePicture();
                }
              }
            ]
          });
          await alert.present();
          
        }
      }] : []), {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  deletePicture() {
    console.log("Delete Click")
    const data = {
      auth_token: this.settingService.getToken()
    };
    this.apiService.deleteProfilePic(data, this.userData.id).subscribe(
      res => {
        if (res.status === true) {
          const temp = { ...this.userData };
          temp.profile_pic = null;
          this.settingService.setUserData(temp);
          this.events.publish('user:updated', Date.now());
          this.presentToast('Profile Pic Successfully');
        } else {
          this.presentToast(res.message);
        }
      },
      err => {
        console.log(err);
        if(err.status === 401) {
          this.settingService.logout();
          this.goTo('login');
        } else {
          this.goTo('tabs/dashboard');
        }
        
        this.presentToast(err.error.message);
        console.log(err.error.message);
      }
    );
  }

  getPicture(type) {
    const self = this;
    const options: CameraOptions = {
      quality: 100,
      sourceType: type === 'gallery' ? this.camera.PictureSourceType.PHOTOLIBRARY : this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI,
    };

    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData);
      self.uploadFile(imageData);
    }, (err) => {
      // Handle error
    });
  }

  async uploadFile(imageURI) {
    console.log('upload file call');
    const loader = await this.loadingCtrl.create({
      message: 'Uploading...'
    });
    await loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    const options: FileUploadOptions = {
      fileKey: 'userfile',
      fileName: 'profilepic',
      chunkedMode: false,
      mimeType: 'image/jpeg',
      headers: {
        Authorization: this.settingService.getToken()
      }
    };
    fileTransfer.upload(imageURI, baseUrl + '/user/profilepic/' + this.userData.id, options)
        .then((data) => {
          loader.dismiss();
          console.log(data.response);
          const res = JSON.parse(data.response);
          this.presentToast(res.message);
          if (res.user) {
            this.userData.profile_pic = res.user.profile_pic;
            this.settingService.setUserData(res.user);
          }
          this.events.publish('prifilepic:updated', (this.userData.profile_pic));
        }, (err) => {
          console.log(err);
          loader.dismiss();
          const error = JSON.parse(err.body);
          this.presentToast(error.message);
          if(err.status === 401) {
            this.settingService.logout();
            this.goTo('login');
          }
        });
  }

  update() {
    const data = {
      first_name: this.onAddForm.value.firstname,
      last_name: this.onAddForm.value.lastname,
      mobile_no: this.onAddForm.value.mobile_no,
      email: this.onAddForm.value.email,
      zip: this.onAddForm.value.pincode,
      auth_token: this.settingService.getToken()
    };
    this.apiService.updateprofile(data, this.userData.id).subscribe(
      res => {
        if (res.status === true) {
          this.settingService.setUserData(res.user);
          this.events.publish('user:updated', Date.now());
          this.presentToast('User Updated Successfully');
          // this.goTo('tabs/dashboard');
        } else {
          this.presentToast(res.message);
        }
      },
      err => {
        console.log(err);
        if(err.status === 401) {
          this.settingService.logout();
          this.goTo('login');
        } else {
          this.goTo('tabs/dashboard');
        }
        this.presentToast(err.error.message);
        console.log(err.error.message);
      }
    );
  }

  goTo(url) {
    this.navCtrl.navigateRoot('/' + url);
  }
}
