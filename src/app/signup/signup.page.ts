
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { ToastController, NavController, Platform } from '@ionic/angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { HttpClient } from '@angular/common/http';
import { PageTrack } from '../decorators/page-track.decorator';
import { SettingService } from '../service/setting.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

declare var google;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
@PageTrack('Signup Screen')
export class SignupPage implements OnInit {
  public onAddForm: FormGroup;
  deviceToken: any = '';
  data: any = '';
  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    private apiService: ApiService,
    private settingService: SettingService,
    public toastCtrl: ToastController,
    private uniqueDeviceID: UniqueDeviceID,
    public http: HttpClient,
    private iab: InAppBrowser,
    private platform: Platform,
  ) {
    this.onAddForm = this.formBuilder.group({

      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ])),
      firstname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('([\ A-Za-z]+)')
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('([\ A-Za-z]+)')
      ])),
      mobile_no: new FormControl('', Validators.compose([
        Validators.pattern('[0-9]{10}')
      ])),
      pincode: new FormControl('', Validators.compose([
        Validators.maxLength(4),
        Validators.pattern('[0-9]{4}')
      ])),
      privacyPolicy: new FormControl(false),
    });

    this.uniqueDeviceID.get()
      .then((uuid: any) => {
        this.deviceToken = uuid;
      })
      .catch((error: any) => {
        console.log(error);

      });
  }

  gotosignup(url) {
    this.settingService.setSignUpData(this.onAddForm.value);
    this.navCtrl.navigateRoot('/' + url);
  }
  goto(url) {
    this.settingService.unsetSignUpData();
    this.navCtrl.navigateRoot('/' + url);
  }

  openPrivacy(url){
    this.iab.create(url, '_blank', {
      location: this.platform.is('android') ? 'yes' : 'no',
      hideurlbar: 'yes',
      hidenavigationbuttons: 'yes',
      closebuttoncaption: 'Back'
    });
  }
  capitalize(name, text) {
    const val = text.value;
    if (val) {
      this.onAddForm.controls[name].setValue(val.charAt(0).toUpperCase() + val.slice(1));
    }
  }
  ngOnInit() {
    if (this.settingService.getSignUpData() !== undefined && this.settingService.getSignUpData()) {
      this.data = this.settingService.getSignUpData();
      this.onAddForm.patchValue({
        email: this.data.email,
        firstname: this.data.firstname,
        lastname: this.data.lastname,
        mobile_no: this.data.mobile_no,
        pincode: this.data.pincode
      });
    }

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
  getaddres(lat, lng) {
    const geocoder = new google.maps.Geocoder();
    const latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };
    geocoder.geocode({ location: latlng }, function (results, status) {
      if (status === 'OK') {
        if (results[0]) {

        } else {
          console.log('No results found');
        }
      } else {
        console.log('Geocoder failed due to: ', status);
      }
    });
  }
  changezip(event) {
    const geocoder = new google.maps.Geocoder();
    const address = event.value;
    geocoder.geocode({ address }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {

      } else {

      }
    });
  }
  checkemail() {
    const data = {
      email: this.onAddForm.value.email
    };
    this.apiService.checkemail(data).subscribe(res => {
      if (res.status === true) {
        this.gotosignup('signupstep2');
      } else {
        this.presentToast(res.message);
      }
    },
      err => {
        this.presentToast(err.error.message);
        console.log(err.error.message);
      }
    );
  }
}
