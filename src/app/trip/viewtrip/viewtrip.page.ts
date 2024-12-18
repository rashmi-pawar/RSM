import {Component, NgZone, OnInit} from '@angular/core';
import { StorageService } from "../../storage.service";
import {Events, ToastController, NavController, MenuController, LoadingController, Platform, AlertController} from '@ionic/angular';
import { DateFormat } from 'src/app/_helper/date-format';
import { PageTrack } from "../../decorators/page-track.decorator";
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';
import {File} from '@ionic-native/file/ngx';
import {Base64} from '@ionic-native/base64/ngx';
import * as moment from 'moment';
import { SettingService } from 'src/app/service/setting.service';

@Component({
  selector: 'app-viewtrip',
  templateUrl: './viewtrip.page.html',
  styleUrls: ['./viewtrip.page.scss'],
})

@PageTrack("View Trip Screen")
export class ViewtripPage implements OnInit {
  data: any = '';
  totalTime;
  vehicle: any = '';
  isLoading = false;
  constructor(
    private file: File,
    public events: Events,
    private storageService: StorageService,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    private sanitizer: DomSanitizer,
    private socialSharing: SocialSharing,
    private zone: NgZone,
    private base64: Base64,
    public platform: Platform,
    public settingService: SettingService,
    public loadingController: LoadingController,
    private alertController: AlertController,
    public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
    this.data = JSON.parse(localStorage.getItem('tripdata'));


    const dateformat = new DateFormat();
    this.totalTime = dateformat.getTimeDiff(this.data.startdate, this.data.starttime, this.data.enddate, this.data.endtime);

    const context = this;
    this.storageService.getVehicleName(this.data.vehicleName).then(function (res) {
      if (res.rows.length > 0) {
        context.vehicle = res.rows.item(0).name;
      } else {
        context.vehicle = '';
      }
      context.vehicle = context.vehicle + '(' + context.data.vehicleName + ')';
    }).catch(function (error) {
      console.log(error);
    });
  }

  ngOnInit() {
    console.log(this.data);
  }
  async getStartImage(){
    if(this.platform.is('ios')){
      return this.data.photoStart ? await this.getBase64(this.data.viewStartImage) : '';
    }
    return this.data.photoStart ? await this.getBase64(this.file.dataDirectory + this.data.photoStart) : '';
  }
  async getEndImage(){
    if(this.platform.is('ios')){
      return this.data.photoEnd ? await this.getBase64(this.data.viewEndImage) : '';
    }
    return this.data.photoEnd ? await this.getBase64(this.file.dataDirectory + this.data.photoEnd) : '';
  }
  async screenShot() {
    const context = this;
    // context.presentLoading();
    const startBase64 = await this.getStartImage();
    const endBase64 = await this.getEndImage();
    const userData = this.settingService.getUserData();
    // context.dismissLoading();
    this.socialSharing.share(
        `
        Hi ${userData ? userData.first_name : ''},

        Please find below the trip details as requested:-

        Time: ${context.totalTime}

        Distance: ${context.data.distance + context.data.unit}
        
        Origin: ${context.data.origin}
        
        Start Date: ${moment(context.data.startdate).format('dddd DD MMM yyyy')} ${moment(context.data.starttime).format('HH:mm')}
        
        Destination: ${context.data.destination}
        
        End Date: ${moment(context.data.enddate).format('dddd DD MMM yyyy')} ${moment(context.data.endtime).format('HH:mm')}
        
        Vehicle Name: ${context.vehicle ? context.vehicle : ''}
        
        Trip Category: ${context.data.vehicleType ? context.data.vehicleType : ''}
        
        Notes: ${context.data.notes ? context.data.notes : ''}
        `,
        `Trip details for ${moment(context.data.startdate).format('DD/MM/YYYY')}`,
        [
          ...(startBase64 ? [startBase64] : []),
          ...(endBase64 ? [endBase64] : []),
        ],
    ).then((res) => {
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
  getImgContent(imgFile): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imgFile);
  }
  async presentLoading() {
    this.isLoading = true;
    const loading = await this.loadingController.create({
      message: 'loading',
      duration: 3000
    });
    loading.present();
    loading.onDidDismiss();
  }
  async dismissLoading() {
    console.log('dismissed call')
    this.isLoading = false;
    return await this.loadingController
        .dismiss()
        .then(() => console.log('dismissed'));
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

  async deleteTrip(id) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure want to delete the trip?',
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
            console.log('Confirm Okay');
            this.delete(id);
          }
        }
      ]
    });

    await alert.present();
  }

  delete(id) {
    this.storageService
      .removeTrip(id)
      .then(res => {
        this.presentToast("Trip has been deleted successfully");
        this.events.publish('trip:updated');
        this.navCtrl.navigateRoot('/triphistory');
      })
      .catch(error => {
        this.presentToast(error);
        console.log(error);
      });
  }
  edit(data) {
    localStorage.setItem('edittrip', JSON.stringify(data));
    this.navCtrl.navigateRoot('/logtrip');
  }
  back() {
    if (localStorage.getItem('backstatus') == "0") {
      this.navCtrl.navigateRoot('/triphistory');
    } else if (localStorage.getItem('backstatus') == "0") {
      this.navCtrl.navigateRoot('/tabs/dashboard');
    } else {
      this.navCtrl.navigateRoot('triplogbook');
    }
  }
}
