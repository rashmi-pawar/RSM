import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../../storage.service';
import {Events, Platform} from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ModalController, NavController, ToastController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { UnitHelper } from 'src/app/_helper/unitHelper';
import { DateFormat } from 'src/app/_helper/date-format';
import { SettingService } from 'src/app/service/setting.service';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { BackStackService } from 'src/app/service/back-stack.service';
import { PageTrack } from "../../decorators/page-track.decorator";
import { DisclaimerPopupComponent } from 'src/app/components/disclaimer-popup/disclaimer-popup.component';
import { ActionSheetController } from '@ionic/angular';
import {Base64} from '@ionic-native/base64/ngx';
import {FileTransfer} from '@ionic-native/file-transfer/ngx';
import {File} from '@ionic-native/file/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';
import {Camera} from '@ionic-native/camera/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

declare var google;
@Component({
  selector: 'app-logtrip',
  templateUrl: './logtrip.page.html',
  styleUrls: ['./logtrip.page.scss'],
})
@PageTrack("Log Trip Screen")
export class LogtripPage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  public onAddForm: FormGroup;
  public addVehicleForm: FormGroup;
  vehiclelist: any = [];
  autocompleteItems: any = [];
  autocompleteItems1: any = [];
  autocomplete: any;
  mode = 'DRIVING';
  unitvalue: any = '';
  showvehicle = false;
  map: any;
  isFav = false;
  editdata: any;
  gmarkers: any = [];
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
  GoogleAutocomplete: any = '';
  showButton = false;
  showdiv = false;
  distance: any;
  unit: any;
  icons: any;
  userid: any = '';
  latitude: any;
  marker: any;
  longitude: any;
  checkedit = 0;
  fulldistance: any;
  today = new Date().toJSON().split('T')[0];
  time = new Date().toLocaleTimeString();
  unitHelper = new UnitHelper();
  vehicleName;
  back;

  tripstartdate: any;
  tripenddate: any;
  correctPath: any = '';
  currentName: any = '';
  selectedImageStart: any = '';
  selectedImageEnd: any = '';
  viewImageStart: any = '';
  viewImageEnd: any = '';

  constructor(
    private geolocation: Geolocation,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private settingService: SettingService,
    public modalController: ModalController,
    public navCtrl: NavController,
    private backStack: BackStackService,
    public activatedRoute: ActivatedRoute,
    public toastCtrl: ToastController,
    private locationAccuracy: LocationAccuracy,
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
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { origininput: '', destinationinput: '' };
    this.autocompleteItems = [];
    this.autocompleteItems1 = [];
    this.onAddForm = this.formBuilder.group({
      distance: new FormControl('',
        Validators.compose([
          Validators.required,
        ])
      ),
      unit: new FormControl('', Validators.compose([Validators.required])),
      startdate: new FormControl('', Validators.compose([Validators.required])),
      starttime: new FormControl('', Validators.compose([Validators.required])),
      enddate: new FormControl('', Validators.compose([Validators.required])),
      endtime: new FormControl('', Validators.compose([Validators.required])),
      vehicle_type: new FormControl('', Validators.compose([Validators.required])),
      vehicle_name: new FormControl(this.vehicleName, Validators.compose([Validators.required])),
      notes: new FormControl('')
    });
    this.addVehicleForm = this.formBuilder.group({
      vname: new FormControl('', Validators.compose([Validators.required])),
      platenumber: new FormControl('', Validators.compose([Validators.required])),
    });
    this.events.subscribe('user:created', (time) => {
      this.userid = this.settingService.getUserId();
    });
    this.icons = {
      start: new google.maps.MarkerImage('assets/icon/loc_green.png'),
      end: new google.maps.MarkerImage('assets/icon/loc_blue.png')
    };
    this.back = this.backStack.getBackStack('logtrip');
  }

  async presentAddVehicleAlert(header, subHeader, message) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: [{
        text: 'Add',
        handler: () => {
          this.showvehicle = true;
        }
      }]
    });

    await alert.present();
  }

  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
        this.initMap();
      },
      error => alert('Error requesting location permissions ' + JSON.stringify(error))
    );
  }

  async presentAlert(header, subHeader, message) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
    this.userid = this.settingService.getUserId();
    this.viewVehicletype();
    if (JSON.parse(localStorage.getItem('edittrip')) !== undefined && JSON.parse(localStorage.getItem('edittrip'))) {
      this.editdata = JSON.parse(localStorage.getItem('edittrip'));
      this.showdiv = true;
      this.autocomplete = {
        origininput: this.editdata.origin,
        destinationinput: this.editdata.destination
      };
      // this.calculateAndDisplayRoute();
      this.vehicleName = this.editdata.vehicleName;
      this.distance = this.editdata.distance;
      this.unit = this.editdata.unit;
      this.onAddForm.patchValue({
        startdate: this.editdata.startdate,
        starttime: this.editdata.starttime,
        enddate: this.editdata.enddate,
        endtime: this.editdata.endtime,
        distance: this.editdata.distance,
        unit: this.editdata.unit,
        notes: this.editdata.notes,
        vehicle_name: this.editdata.vehicleName,
        vehicle_type: this.editdata.vehicleType,
      });
      this.tripstartdate = this.editdata.startdate;
      this.tripenddate = this.editdata.enddate;
      this.viewImageStart = this.editdata.viewStartImage;
      this.viewImageEnd = this.editdata.viewEndImage;
      this.checkedit = 1;
    } else {
      const currentDate = new Date().toISOString();
      this.tripstartdate = currentDate;
      this.tripenddate = currentDate;

      try {
        this.storageService.getLastVehicle().then(vehicle => {
          if (vehicle != undefined) {
            this.vehicleName = vehicle.rows.item(0).platenumber;
          }
        });
      } catch (e) { }
    }

    this.askToTurnOnGPS();
    this.getuserdata();
    this.createTable();
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
      quality: 40,
      sourceType,
      targetWidth: 500,
      targetHeight: 500,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false,
      allowEdit: this.platform.is('ios') ? true : false,
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
    if (!img) {
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
      if(this.platform.is('android')) {
        this.createDirectory(newFileName)
      }
  }

  // Create a new name for the image
  private createFileName() {
    const d = new Date(),
        n = d.getTime(),
        newFileName = n + '.jpg';
    return newFileName;
  }

  startErrorImage() {
    this.viewImageStart = '';
  }
  endErrorImage() {
    this.viewImageEnd = '';
  }

  getImgContent(imgFile): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imgFile);
  }
  createDirectory(refImageName) {
    this.file
      .checkDir(this.file.externalDataDirectory, 'RSMTRIP')
      .then(response => {
        this.file
          .copyFile(
            this.correctPath,
            this.currentName,
            this.file.externalDataDirectory + 'RSMTRIP/',
            refImageName
          )
          .then(
            success => {
              console.log('success', success);
            },
            error => {
              console.log('Error while storing file.');
            }
          );
      })
      .catch(err => {
        console.log('Directory doesn\'t exist' + JSON.stringify(err));
        this.file
          .createDir(this.file.externalDataDirectory, 'RSMTRIP', false)
          .then(response => {
            console.log('Directory create' + response);
            // Copy the image to a local folder
            this.file
              .copyFile(
                this.correctPath,
                this.currentName,
                this.file.externalDataDirectory + 'RSMTRIP',
                refImageName
              )
              .then(
                success => {
                  console.log('success', success);
                },
                error => {
                  console.log('Error while storing file.');
                }
              );
          })
          .catch(err => {
            console.log('Directory no create' + JSON.stringify(err));
          });
      });
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

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      mode: 'md',
      cssClass: 'customToast'
    });
    toast.present();
  }

  async presentAlertPrompt() {
    this.showvehicle = true;
  }

  addnewvehicle() {
    this.createTable();
    this.storageService
      .addVehicle(this.addVehicleForm.value.vname, null, this.addVehicleForm.value.platenumber, new Date(), this.userid)
      .then(res => {
        if (res.status === 0) {
          this.presentToast(res.message);
        } else {
          this.storageService.getVehicleById(res.data.insertId).then(vehicle => {
            this.vehicleName = vehicle.rows.item(0).platenumber;
          });

          this.showvehicle = false;
          this.addVehicleForm.reset();
          this.presentToast('Vehicle added successfully');
          this.viewVehicletype();
        }

      })
      .catch(error => {
        this.presentToast(error);
        console.log(error);
      });
  }

  viewVehicletype() {
    this.vehiclelist = [];
    this.storageService
      .viewVehicle(this.userid)
      .then(res => {
        console.log(res.rows.length);
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            this.vehiclelist.push({
              id: res.rows.item(i).id,
              name: res.rows.item(i).name,
              type: res.rows.item(i).type,
              platenumber: res.rows.item(i).platenumber,
              date: res.rows.item(i).date,
              userid: res.rows.item(i).userid,
            });
          }
        } else {
          this.vehiclelist = [];
          this.showvehicle = true;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  addedittrip() {
    if (this.checkedit === 0) {
      if (this.settingService.getDisclaimer()) {
        this.save();
      } else {
        this.presentDisclaimerModal();
      }
    } else {
      this.update();
    }
  }

  validate() {
    if (this.autocomplete.origininput === '') {
      this.presentToast('Please enter start location.');
    } else if (this.autocomplete.destinationinput === '') {
      this.presentToast('Please enter end location.');
    } else if (!this.onAddForm.valid) {
      this.showValidateMessage();
    } else if (!this.datetimeValidation()) {
      this.dateAlert();
    } else {
      this.addedittrip();
    }

  }
  showValidateMessage() {
    if (this.onAddForm.controls.startdate.errors != null) {
      this.presentToast('Please enter start date.');
    } else if (this.onAddForm.controls.starttime.errors != null) {
      this.presentToast('Please enter start time.');
    } else if (this.onAddForm.controls.enddate.errors != null) {
      this.presentToast('Please enter end date.');
    } else if (this.onAddForm.controls.endtime.errors != null) {
      this.presentToast('Please enter end time.');
    } else if (this.onAddForm.controls.distance.errors != null) {
      this.presentToast('Please enter approximate distance.');
    } else if (this.onAddForm.controls.unit.errors != null) {
      this.presentToast('Please enter unit.');
    } else if (this.onAddForm.controls.vehicle_type.errors != null) {
      this.presentToast('Please enter trip category.');
    } else if (this.onAddForm.controls.vehicle_name.errors != null) {
      this.presentToast('Please enter vehicle name.');
    }
  }

  async presentDisclaimerModal() {
    const modal = await this.modalController.create({
      component: DisclaimerPopupComponent,
    });

    modal.onDidDismiss()
      .then((data: any) => {
        if (data.data === true) {
          this.save();
        }
      });
    return await modal.present();
  }

  update() {
    this.storageService
      .createTable()
      .then(val => {
        this.storageService
          .editTrip(
            this.autocomplete.origininput,
            this.autocomplete.destinationinput,
            this.onAddForm.value.notes,
            this.onAddForm.value.distance,
            this.onAddForm.value.unit,
            this.onAddForm.value.vehicle_type,
            this.onAddForm.value.vehicle_name,
            this.onAddForm.value.startdate,
            this.onAddForm.value.enddate,
            this.onAddForm.value.starttime,
            this.onAddForm.value.endtime,
            this.userid,
            this.editdata.id,
            this.selectedImageStart ? this.selectedImageStart : this.editdata.photoStart,
            this.selectedImageEnd ? this.selectedImageEnd : this.editdata.photoEnd,
          )
          .then(val => {
            this.presentToast('Trip updated successfully.');
            localStorage.removeItem('edittrip');
            localStorage.removeItem('tripdata');
            this.checkedit = 0;
            localStorage.setItem('tripdata', JSON.stringify({
              destination: this.autocomplete.destinationinput,
              distance: this.onAddForm.value.distance,
              enddate: this.onAddForm.value.enddate,
              endtime: this.onAddForm.value.endtime,
              id: this.editdata.id,
              notes: this.onAddForm.value.notes,
              origin: this.autocomplete.origininput,
              startdate: this.onAddForm.value.startdate,
              starttime: this.onAddForm.value.starttime,
              unit: this.onAddForm.value.unit,
              userid: this.userid,
              vehicleName: this.onAddForm.value.vehicle_name,
              vehicleType: this.onAddForm.value.vehicle_type,
              viewStartImage: this.viewImageStart,
              viewEndImage: this.viewImageEnd,
              photoStart: this.editdata.photoStart,
              photoEnd: this.editdata.photoEnd
            }));
            // if(this.selectedImageStart){
            //   this.createDirectory(this.selectedImageStart);
            // }
            // if(this.selectedImageEnd){
            //   this.createDirectory(this.selectedImageEnd);
            // }
            this.navCtrl.navigateRoot('/viewtrip');
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  async dateAlert() {
    const alert = await this.alertController.create({
      message: 'End date time cannot be less than or equal to start date time',
      buttons: ['OK']
    });
    await alert.present();
  }

  datetimeValidation() {
    const dateFormat = new DateFormat();
    const enddate = this.onAddForm.value.enddate;
    const endtime = this.onAddForm.value.endtime;
    const startdate = this.onAddForm.value.startdate;
    const starttime = this.onAddForm.value.starttime;
    const startDateTime = dateFormat.dateFormatter(startdate, 'date') + ' ' + dateFormat.dateFormatter(starttime, 'time');
    const endDateTime = dateFormat.dateFormatter(enddate, 'date') + ' ' + dateFormat.dateFormatter(endtime, 'time');
    if (new Date(endDateTime) <= new Date(startDateTime)) {
      return false;
    } else {
      return true;
    }
  }

  save() {
    this.storageService
      .createTable()
      .then(val => {
        this.storageService
          .addTrip(
            this.autocomplete.origininput,
            this.autocomplete.destinationinput,
            this.onAddForm.value.notes,
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
            this.presentToast('Trip saved successfully.');
            this.showdiv = false;

            localStorage.removeItem('edittrip');
            localStorage.removeItem('tripdata');
            this.checkedit = 0;
            localStorage.setItem('tripdata', JSON.stringify({
              destination: this.autocomplete.destinationinput,
              distance: this.onAddForm.value.distance,
              enddate: this.onAddForm.value.enddate,
              endtime: this.onAddForm.value.endtime,
              id: val.insertId,
              notes: this.onAddForm.value.notes,
              origin: this.autocomplete.origininput,
              startdate: this.onAddForm.value.startdate,
              starttime: this.onAddForm.value.starttime,
              unit: this.onAddForm.value.unit,
              userid: this.userid,
              vehicleName: this.onAddForm.value.vehicle_name,
              vehicleType: this.onAddForm.value.vehicle_type,
              viewStartImage: this.viewImageStart,
              viewEndImage: this.viewImageEnd,
              photoStart: this.selectedImageStart,
              photoEnd: this.selectedImageEnd
            }));
            // if(this.selectedImageStart){
            //   this.createDirectory(this.selectedImageStart);
            // }
            // if(this.selectedImageEnd){
            //   this.createDirectory(this.selectedImageEnd);
            // }
            this.onAddForm.reset();
            this.navCtrl.navigateRoot('/viewtrip');
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
    this.navCtrl.navigateRoot('/' + path);
  }

  initMap() {
    this.geolocation.getCurrentPosition().then(resp => {
      const geocoder = new google.maps.Geocoder;
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      const latlng = { lat: resp.coords.latitude, lng: resp.coords.longitude };
      geocoder.geocode({ location: latlng }, (results, status) => {

        if (status === 'OK') {
          if (this.autocomplete.origininput === '') {
            this.autocomplete.origininput = results[0].formatted_address;
          }
        }
      });

      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 7,
        center: { lat: resp.coords.latitude, lng: resp.coords.longitude },
        styles: [
          { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
          { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
          { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#263c3f' }]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#6b9a76' }]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#38414e' }]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#212a37' }]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9ca5b3' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#746855' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#1f2835' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#f3d19c' }]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#2f3948' }]
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#17263c' }]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#515c6d' }]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#17263c' }]
          }
        ]
      });
      this.directionsDisplay.setMap(this.map);
      this.makeMarker(latlng, this.icons.start);
    });
  }

  startTripAgain() {
    this.addVehicleForm.reset();
    this.storageService
      .viewVehicle(this.userid)
      .then(res => {
        if (res.rows.length > 0) {
          this.showvehicle = false;
        } else {
          this.onAddForm.reset();
          this.showdiv = false;
          this.showvehicle = false;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  showAdd() {
    this.addVehicleForm.reset();
    this.onAddForm.reset();
    this.showdiv = true;
    this.viewVehicletype();
  }

  cancel() {
    if (this.checkedit === 1) {
      localStorage.removeItem('edittrip');
      this.checkedit = 0;
      this.navCtrl.navigateRoot('/viewtrip');
    }
    this.showdiv = false;
  }

  selectOriginSearchResult(item) {
    this.autocompleteItems1 = [];
    this.autocomplete = {
      origininput: item.description,
      destinationinput: this.autocomplete.destinationinput
    };
    if (this.autocomplete.destinationinput !== '') {

      this.calculateAndDisplayRoute();
    }
  }

  selectDestSearchResult(item) {
    this.autocompleteItems = [];
    this.autocomplete = {
      origininput: this.autocomplete.origininput,
      destinationinput: item.description
    };
    this.calculateAndDisplayRoute();
  }

  updateSearchDestResults() {
    if (this.autocomplete.destinationinput === '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions(
      {
        input: this.autocomplete.destinationinput,
        // types: ['(regions)'],
        componentRestrictions: {
          country: 'au'
        }
      },
      (predictions, status) => {
        this.autocompleteItems = [];
        predictions.forEach(prediction => {
          this.autocompleteItems.push(prediction);
          console.log(this.autocompleteItems);
        });
      }
    );
  }

  updateSearchResults() {
    if (this.autocomplete.origininput === '') {
      this.autocompleteItems1 = [];
      return;
    }

    this.GoogleAutocomplete.getPlacePredictions(
      {
        input: this.autocomplete.origininput,
        // types: ['(regions)'],
        componentRestrictions: {
          country: 'au'
        }
      },
      (predictions, status) => {
        this.autocompleteItems1 = [];
        predictions.forEach(prediction => {
          this.autocompleteItems1.push(prediction);
          console.log(this.autocompleteItems1);
        });
      }
    );
  }

  calculateAndDisplayRoute() {
    if (this.gmarkers.length > 0) {
      this.gmarkers.forEach((marker) => {
        marker.setMap(null);
        marker = null;
      });
      this.gmarkers = [];
    }
    this.directionsService.route(
      {
        origin: this.autocomplete.origininput,
        destination: this.autocomplete.destinationinput,
        travelMode: this.mode,
        unitSystem: google.maps.UnitSystem.IMPERIAL
      },
      (response, status) => {
        if (status === 'OK') {
          this.fulldistance = response.routes[0].legs[0].distance.text;
          this.distance = response.routes[0].legs[0].distance.value;
          if (this.unitvalue !== '') {
            if (this.unitvalue === 'km') {
              this.distance = this.unitHelper.meterToKm(this.distance);
              this.unit = 'km';
            } else if (this.unitvalue === 'mi') {
              this.distance = this.unitHelper.meterToMiles(this.distance);
              this.unit = 'mi';
            }
          } else {
            this.distance = this.unitHelper.meterToKm(this.distance);
            this.unit = 'km';
          }
          this.onAddForm.controls.distance.setValue(this.distance);
          this.onAddForm.controls.unit.setValue(this.unit);
          this.directionsDisplay.setDirections(response);
          const leg = response.routes[0].legs[0];

          this.makeMarker(leg.start_location, this.icons.start);
          this.makeMarker(leg.end_location, this.icons.end);
          this.showButton = true;

        }
      }
    );
  }

  getuserdata() {
    this.storageService.getbyid('usersettings', this.userid)
      .then(res => {
        if (res.rows.length > 0) {
          this.unitvalue = res.rows.item(0).unit;
        }
      });
  }

  makeMarker(position, icon) {
    const myMarker = new google.maps.Marker({
      position,
      icon,
      map: this.map
    });
    // replace marker with myMarker
    this.gmarkers.push(myMarker);
  }
}
