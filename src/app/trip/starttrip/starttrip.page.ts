
import {Component, OnInit, ViewChild, ElementRef, NgZone} from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { StorageService } from '../../storage.service';
import {ActionSheetController, Events, Platform} from '@ionic/angular';
import {
  ModalController,
  NavController,
  ToastController,
  AlertController
} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { UnitHelper } from 'src/app/_helper/unitHelper';
import { SettingService } from 'src/app/service/setting.service';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { DateFormat } from 'src/app/_helper/date-format';
import { PageTrack } from "../../decorators/page-track.decorator";
import { DisclaimerPopupComponent } from 'src/app/components/disclaimer-popup/disclaimer-popup.component';
import {Base64} from '@ionic-native/base64/ngx';
import {FileTransfer} from '@ionic-native/file-transfer/ngx';
import {File} from '@ionic-native/file/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';
import {Camera} from '@ionic-native/camera/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import * as moment from 'moment';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';


declare var google;


@Component({
  selector: 'app-starttrip',
  templateUrl: './starttrip.page.html',
  styleUrls: ['./starttrip.page.scss'],
})

@PageTrack("Start Trip Screen")
export class StarttripPage implements OnInit {
  @ViewChild('map1') mapElement: ElementRef;
  public onAddForm: FormGroup;
  public addVehicleForm: FormGroup;
  watch: any;
  unit: any;
  totalTime;
  autocompleteItems: any = [];
  autocompleteItems1: any = [];
  autocomplete: any;
  mode = 'DRIVING';
  map: any;
  unitvalue: any;
  total: any;
  fulldistance: any;
  distance: any = '';
  userid: any = '';
  gmarkers: any = [];
  showvehicle = false;
  icons: any = '';
  vehiclelist = [];
  path = [];
  starttracking = 1;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
  GoogleAutocomplete: any = '';
  today = '';
  time = '';
  endtime;
  enddate;
  unitHelper = new UnitHelper();
  vehicleName;
  correctPath: any = '';
  currentName: any = '';
  selectedImageStart: any = '';
  selectedImageEnd: any = '';
  viewImageStart: any = '';
  viewImageEnd: any = '';
  isFormSubmit = false;

  constructor(
    private geolocation: Geolocation,
    private storageService: StorageService,
    private settingService: SettingService,
    public modalController: ModalController,
    public navCtrl: NavController,
    public activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private locationAccuracy: LocationAccuracy,
    public toastCtrl: ToastController,
    public alertController: AlertController,
    public events: Events,
    public actionSheetController: ActionSheetController,
    public platform: Platform,
    private base64: Base64,
    private socialSharing: SocialSharing,
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
    this.icons = {
      start: new google.maps.MarkerImage('assets/icon/locateblue.png',
        // (width,height)
        new google.maps.Size(44, 32),
        // The origin point (x,y)
        new google.maps.Point(0, 0),
        // The anchor point (x,y)
        new google.maps.Point(22, 32)
      ),
      end: new google.maps.MarkerImage('assets/icon/flag.png',
        // (width,height)
        new google.maps.Size(44, 32),
        // The origin point (x,y)
        new google.maps.Point(0, 0),
        // The anchor point (x,y)
        new google.maps.Point(22, 32)
      )
    };
    this.onAddForm = this.formBuilder.group({
      distance: new FormControl(''),
      unit: new FormControl(''),
      startdate: new FormControl('', Validators.compose([Validators.required])),
      starttime: new FormControl('', Validators.compose([Validators.required])),
      enddate: new FormControl(''),
      endtime: new FormControl(''),
      notes: new FormControl(''),
      vehicle_type: new FormControl('', Validators.compose([Validators.required])),
      vehicle_name: new FormControl(this.vehicleName, Validators.compose([Validators.required]))
    });
    this.today = new Date().toJSON().split('T')[0];
    this.time = new Date().toLocaleTimeString();
    this.onAddForm.patchValue({
      startdate: new Date(),
      starttime: new Date()
    });
    this.addVehicleForm = this.formBuilder.group({
      vname: new FormControl('', Validators.compose([Validators.required])),
      platenumber: new FormControl('', Validators.compose([Validators.required])),
    });
    this.events.subscribe('user:created', () => {
      this.userid = this.settingService.getUserId();
    });

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
    this.askToTurnOnGPS();
    this.createTable();
    this.viewVehicletype();

    this.storageService.getbyid('usersettings', this.userid)
      .then(res => {
        if (res.rows.length > 0) {
          this.unitvalue = res.rows.item(0).unit;
          this.unit = res.rows.item(0).unit;
        } else {
          this.unitvalue = 'km';
          this.unit = 'km';
        }
      });
    try {
      this.storageService.getLastVehicle().then(vehicle => {
        if (vehicle != undefined) {
          this.vehicleName = vehicle.rows.item(0).platenumber;
        }
      });
    } catch (e) { }
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
          localStorage.removeItem('edittrip');
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
        if (res && res.rows && res.rows.length > 0) {
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

  initMap() {
    this.geolocation.getCurrentPosition().then(resp => {
      const geocoder = new google.maps.Geocoder();
      const latlng = { lat: resp.coords.latitude, lng: resp.coords.longitude };
      geocoder.geocode({ location: latlng }, (results, status) => {

        if (status === 'OK') {
          this.autocomplete = {
            origininput: results[0].formatted_address,
            destinationinput: this.autocomplete.destinationinput
          };
        }
      });

      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 15,
        draggable: true,
        center: { lat: resp.coords.latitude, lng: resp.coords.longitude },
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: google.maps.ControlPosition.TOP_CENTER
        },
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER
        },
        scaleControl: true,
        streetViewControl: true,
        streetViewControlOptions: {
          position: google.maps.ControlPosition.LEFT_TOP
        },
        fullscreenControl: true,
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
      const options = {
        frequency: 3000,
        enableHighAccuracy: true
      };
      this.total = 0;
      this.watch = this.geolocation
        .watchPosition(options)
        .subscribe((position: Geoposition) => {

          this.path.push({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          for (let i = 0; i < this.path.length - 1; i++) {
            const pos1 = new google.maps.LatLng(this.path[i].lat, this.path[i].lng);
            const pos2 = new google.maps.LatLng(
              this.path[i + 1].lat,
              this.path[i + 1].lng
            );
            this.total += google.maps.geometry.spherical.computeDistanceBetween(
              pos1,
              pos2
            );
            // this.distance = (this.unitHelper.meterToKm(this.total)).toFixed(1);
            // this.unit = 'km';
          }
        });
    });
  }

  makeMarker(position, icon) {
    const myMarker = new google.maps.Marker({
      position,
      icon,
      map: this.map
    });
    this.gmarkers.push(myMarker);
  }

  stopLiveTracking() {
    this.starttracking = 0;
    this.enddate = new Date().toJSON().split('T')[0];
    this.endtime = new Date();
    this.onAddForm.controls.enddate.setValue(new Date());
    this.onAddForm.controls.endtime.setValue(new Date());

    const geocoder = new google.maps.Geocoder();
    const latlng = { lat: this.path[this.path.length - 1].lat, lng: this.path[this.path.length - 1].lng };
    geocoder.geocode({ location: latlng }, (results, status) => {

      if (status === 'OK') {
        this.autocomplete = {
          origininput: this.autocomplete.origininput,
          destinationinput: results[0].formatted_address
        };
        this.calculateAndDisplayRoute();
      }
    });
    this.watch.unsubscribe();
    navigator.geolocation.clearWatch(this.watch);
    this.presentToast('Stop tracking');

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
          this.fulldistance = isNaN(response.routes[0].legs[0].distance.text) ? 0 : response.routes[0].legs[0].distance.text;
          this.distance = isNaN(response.routes[0].legs[0].distance.value) ? 0 : response.routes[0].legs[0].distance.value;
          if (this.unitvalue !== '') {
            if (this.unitvalue === 'km') {
              this.distance = this.unitHelper.meterToKm(this.distance);
            } else if (this.unitvalue === 'mi') {
              this.distance = this.unitHelper.meterToMiles(this.distance);
            }
          } else {
            this.distance = this.unitHelper.meterToKm(this.distance);
          }
          // this.totalTime = 0;
          // this.totalTime = response.routes[0].legs[0].duration.value;
          const dateformat = new DateFormat();
          // tslint:disable-next-line: max-line-length
          this.totalTime = dateformat.getTimeDiff(this.onAddForm.value.startdate, this.onAddForm.value.starttime, this.onAddForm.value.enddate, this.onAddForm.value.endtime);

          this.onAddForm.controls.distance.setValue(this.distance);
          this.onAddForm.controls.unit.setValue(this.unit);
          this.directionsDisplay.setDirections(response);
          const leg = response.routes[0].legs[0];

          this.makeMarker(leg.start_location, this.icons.start);
          this.makeMarker(leg.end_location, this.icons.end);

        }
      }
    );

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

  finalSave() {
    this.isFormSubmit = true;
    if(this.onAddForm.valid){
      if (this.settingService.getDisclaimer()) {
        this.save();
      } else {
        this.presentDisclaimerModal();
      }
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
            this.selectedImageStart ? this.selectedImageStart : '',
            this.selectedImageEnd ? this.selectedImageEnd : ''
          )
          .then((val) => {
            this.presentToast('Trip saved successfully.');

            localStorage.removeItem('edittrip');
            localStorage.removeItem('tripdata');
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
              viewStartImage: this.webview.convertFileSrc(this.file.dataDirectory + this.selectedImageStart),
              viewEndImage: this.webview.convertFileSrc(this.file.dataDirectory + this.selectedImageEnd),
              photoStart: this.selectedImageStart,
              photoEnd: this.selectedImageEnd
            }));
            // this.screenShot(this.onAddForm.value);
            this.onAddForm.reset();
            this.today = '';
            this.time = '';
            this.navCtrl.navigateRoot('/viewtrip');
            // this.navCtrl.navigateRoot('/triplogbook');
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }
  async getStartImage(){
    if(this.platform.is('ios')){
      return this.viewImageStart ? await this.getBase64(this.viewImageStart) : '';
    }
    return this.selectedImageStart ? await this.getBase64(this.file.dataDirectory + this.selectedImageStart) : '';
  }
  async getEndImage(){
    if(this.platform.is('ios')){
      return this.viewImageEnd ? await this.getBase64(this.viewImageEnd) : ''
    }
    return this.selectedImageEnd ? await this.getBase64(this.file.dataDirectory + this.selectedImageEnd) : '';
  }
  async screenShot(data) {
    // context.presentLoading();
    const startBase64 = await this.getStartImage();
    const endBase64 = await this.getEndImage();
    const dateformat = new DateFormat();
    const totalTime = dateformat.getTimeDiff(data.startdate, data.starttime, data.enddate, data.endtime);
    // context.dismissLoading();
    this.socialSharing.share(
        `
          Time: ${totalTime}
          Distance: ${data.distance + data.unit}
          Origin: ${this.autocomplete.origininput}
          Start Date: ${moment(data.startdate).format('dd MMM yyyy HH:mm')}
          Destination: ${this.autocomplete.destinationinput}
          End Date: ${moment(data.enddate).format('dd MMM yyyy HH:mm')}
          Vehicle Name: ${data.vehicle_name}
          Trip Category: ${data.vehicle_type}
          Notes: ${data.notes ? data.notes : ''}
        `,
        'Trip Detail',
        [
          ...(startBase64 ? [startBase64] : []),
          ...(endBase64 ? [endBase64] : []),
        ],
    ).then((res) => {
      this.navCtrl.navigateRoot('/triplogbook');
      console.log("shareViaEmail then");
    }).catch(e => {
      console.log("shareViaEmail catch");
    }) ;
  }
  async getBase64(url){
    return this.base64.encodeFile(url).then(
        (base64Start: string) => {
          if (this.platform.is('android')) {
            const realData = base64Start.split(',')[1];
            return 'data:image/png;base64,' + realData;
          }
          return base64Start;
        },
        err => {
          console.log("getBase64", err);
          return null;
        }
    ).catch(e => {
      console.log("getBase64 Error", e);
    });
  }

  startTripAgain() {
    this.addVehicleForm.reset();
    this.storageService
      .viewVehicle(this.userid)
      .then(res => {
        if (res && res.rows && res.rows.length > 0) {
          this.showvehicle = false;
        } else {
          this.showvehicle = false;
          this.navCtrl.navigateRoot('/triplogbook');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

}
