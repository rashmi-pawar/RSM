import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController, Events, Platform, ToastController } from '@ionic/angular';
import { StorageService } from '../../storage.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SettingService } from 'src/app/service/setting.service';
import { BackStackService } from 'src/app/service/back-stack.service';
import { PageTrack } from "../../decorators/page-track.decorator";


declare var google;
@Component({
  selector: 'app-tripsetting',
  templateUrl: './tripsetting.page.html',
  styleUrls: ['./tripsetting.page.scss'],
})

@PageTrack("Trip Settings Screen")
export class TripsettingPage implements OnInit {
  segmentfilter: any = 'vehicle';
  userid: any;
  status: any = 0;
  data: any = {};
  locationstatus: any = 0;
  addVehicleShow: any = false;
  vehiclelist = [];
  locationlist = [];
  unitvalue: any = '';
  GoogleAutocomplete: any = '';
  autocompleteItems1: any = [];
  autocomplete: any;
  id: any = '';
  editdata: any = '';
  locationShow: any = false;
  public addVehicleForm: FormGroup;
  public addlocationForm: FormGroup;
  vehicleFormStatus = 0;
  vehicleId;
  locationFormStatus = 0;
  locationId;
  lname;
  back;


  constructor(
    public events: Events,
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private settingService: SettingService,
    public toastCtrl: ToastController,
    private backStack: BackStackService,
    public platform: Platform,
    public alertController: AlertController,
    private geolocation: Geolocation) {
    this.addVehicleForm = this.formBuilder.group({
      vname: new FormControl('', Validators.compose([Validators.required])),
      platenumber: new FormControl('', Validators.compose([Validators.required])),
    });
    this.addlocationForm = this.formBuilder.group({
      lname: new FormControl('', Validators.compose([Validators.required])),
    });
    this.events.subscribe('user:created', (time) => {
      this.userid = this.settingService.getUserId();
    });
    this.back = this.backStack.getBackStack('tripsetting');
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { origininput: '' };
    this.autocompleteItems1 = [];
  }

  ngOnInit() {
    this.userid = this.settingService.getUserId();
    this.createTable();
    this.viewVehicletype();
    this.viewLocation();
    this.createSetting();
    this.getuserdata();
  }

  updateSearchResults() {
    if (this.autocomplete.origininput === '') {
      this.autocompleteItems1 = [];
      return;
    }

    this.GoogleAutocomplete.getPlacePredictions(
      { input: this.autocomplete.origininput },
      (predictions, status) => {
        this.autocompleteItems1 = [];

        predictions.forEach(prediction => {
          this.autocompleteItems1.push(prediction);
          // console.log(this.autocompleteItems1);
        });

      }
    );
  }

  currentLocation() {
    this.geolocation.getCurrentPosition().then(resp => {
      console.log(resp, 'res');
      const geocoder = new google.maps.Geocoder;
      console.log(geocoder);
      const latlng = { lat: resp.coords.latitude, lng: resp.coords.longitude };
      geocoder.geocode({ location: latlng }, (results, status) => {
        console.log(status);
        if (status === 'OK') {
          this.autocomplete = {
            origininput: ''
          };
          this.autocomplete = {
            origininput: results[0].formatted_address
          };
        }
      });
    });
  }

  selectOriginSearchResult(item) {
    this.autocompleteItems1 = [];
    this.autocomplete = {
      origininput: item.description
    };
  }

  createTable() {
    this.storageService
      .createVehicleTable()
      .then(res => {
      })
      .catch(error => {
        console.log(error);
      });

    this.storageService
      .createLocTable()
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

  viewLocation() {
    this.locationlist = [];
    this.storageService
      .viewLocation(this.userid)
      .then(res => {
        if (res && res.rows && res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            this.locationlist.push({
              id: res.rows.item(i).id,
              name: res.rows.item(i).name,
              address: res.rows.item(i).address,
              date: res.rows.item(i).date,
              userid: res.rows.item(i).userid,
            });
          }
        } else {
          this.locationlist = [];
        }
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
        if (res && res.rows && res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            this.vehiclelist.push({
              id: res.rows.item(i).id,
              name: res.rows.item(i).name,
              platenumber: res.rows.item(i).platenumber,
              date: res.rows.item(i).date,
              userid: res.rows.item(i).userid,
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


  // location section

  resetLocationForm() {
    this.locationShow = false;
    this.locationFormStatus = 0;
    this.addlocationForm.reset();
  }

  addNewLocation() {
    this.locationShow = true;
    this.locationFormStatus = 0;
    this.lname = '';
    this.addlocationForm.reset();
  }

  addLocation() {
    if(this.addlocationForm.valid && this.autocomplete.origininput){
      const newdata = {
        address: this.autocomplete.origininput,
        name: this.addlocationForm.value.lname,
        userid: this.userid,
        id: ''
      };
      this.storageService
        .addLocation(newdata).then(res => {
          if (res.status === 1) {
            this.autocomplete = {
              origininput: ''
            };
            this.presentToast(res.message);
            this.viewLocation();
            this.resetLocationForm();
          }
        })
        .catch(error => {
          this.presentToast(error);
          console.log(error);
        });
    }
    
  }

  editLocation(data) {
    this.locationFormStatus = 1;
    this.locationShow = true;
    this.locationId = data.id;
    this.editdata = data;
    this.lname = data.name;
    this.autocomplete = {
      origininput: data.address
    };
  }

  updateLocation() {
    const data = {
      address: this.autocomplete.origininput,
      name: this.addlocationForm.value.lname,
      id: this.locationId,
      userid: this.editdata.userid,
      date: this.editdata.date
    };
    this.storageService
      .addLocation(data).then(res => {
        if (res.status === 1) {
          this.autocomplete = {
            origininput: ''
          };
          this.presentToast(res.message);
          this.viewLocation();
          this.resetLocationForm();
        }
      })
      .catch(error => {
        this.presentToast(error);
        console.log(error);
      });
  }

  submitLocationForm() {
    if (this.locationFormStatus) {
      this.updateLocation();
    } else {
      this.addLocation();
    }
  }

  async deleteLocation(id) {
    const alert = await this.alertController.create({
      header: 'Delete location',
      message: 'Are you sure want to remove this location?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          handler: () => {
            this.storageService
            .removeLocation(id)
            .then(res => {
              this.resetLocationForm();
              this.presentToast('Location has been deleted successfully');
              this.viewLocation();
            })
            .catch(error => {
              this.presentToast(error);
              console.log(error);
            });
          }
        }
      ]
    });

    await alert.present();
  }

  // end vehicle section

  // vehicle section

  resetVehicleForm() {
    this.vehicleFormStatus = 0;
    this.addVehicleShow = false;
    this.addVehicleForm.reset();
  }

  addNewVehicle() {
    this.addVehicleShow = true;
    this.vehicleFormStatus = 0;
    this.addVehicleForm.reset();
  }

  addVehicle() {
    this.storageService
      .addVehicle(this.addVehicleForm.value.vname, null, this.addVehicleForm.value.platenumber, new Date(), this.userid)
      .then(res => {
        if (res.status === 0) {
          this.presentToast(res.message);
        } else {
          this.resetVehicleForm();
          this.presentToast('Vehicle added successfully');
          this.viewVehicletype();
        }
      })
      .catch(error => {
        this.presentToast(error);
        console.log(error);
      });
  }

  editVehicle(data) {
    this.vehicleFormStatus = 1;
    this.addVehicleShow = true;
    this.addVehicleForm.patchValue({
      vname: data.name,
      platenumber: data.platenumber
    });
    this.vehicleId = data.id;
  }

  updateVehicle() {
    this.data = {
      name: this.addVehicleForm.value.vname,
      platenumber: this.addVehicleForm.value.platenumber,
      id: this.vehicleId
    };

    this.storageService
      .updateVehicle(this.data).then(res => {
        if (res.status === 0) {
          this.presentToast(res.message);
        } else {
          this.resetVehicleForm();
          this.presentToast('Vehicle updated successfully');
          this.viewVehicletype();
        }
      })
      .catch(error => {
        this.presentToast(error);
        console.log(error);
      });
  }

  submitVehicleForm() {
    if(this.addVehicleForm.valid){
      if (this.vehicleFormStatus) {
        this.updateVehicle();
      } else {
        this.addVehicle();
      }
    }
  }

  async deleteVehicle(id) {
    const alert = await this.alertController.create({
      header: 'Delete vehicle',
      message: 'Are you sure want to remove this vehicle?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          handler: () => {
            this.storageService
            .removeVehicle(id)
            .then(res => {
              this.resetVehicleForm();
              this.presentToast('Vehicle has been deleted successfully');
              this.viewVehicletype();
            })
            .catch(error => {
              this.presentToast(error);
              console.log(error);
            });
          }
        }
      ]
    });

    await alert.present();
    
  }

  // end vehicle section

  getuserdata() {
    this.storageService.getbyid('usersettings', this.userid)
      .then(res => {
        if (res && res.rows && res.rows.length > 0) {
          this.unitvalue = res.rows.item(0).unit;
        } else {
          this.unitvalue = 'km';
        }
      });
  }

  selectunit(unit) {
    this.data = {
      userid: this.userid,
      unit
    };
    this.storageService
      .updateSettings(this.data)
      .then(res => {
      })
      .catch(error => {
      });
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  createSetting() {
    this.storageService.createSettingTable();
  }

  public openMapsApp(location: any) {
    if (this.platform.is('android')) {
      window.location.href = 'geo:0,0?q=' + location;
    } else {
      window.location.href = 'maps://?q=' + location;
    }
  }
}
