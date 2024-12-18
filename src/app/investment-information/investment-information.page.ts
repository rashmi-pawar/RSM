import { Component, OnInit } from '@angular/core';
import {BackStackService} from '../service/back-stack.service';
import {Events, NavController, Platform, ToastController} from '@ionic/angular';
import {ApiService} from '../api.service';
import {NavigationExtras} from '@angular/router';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import { StorageService } from '../storage.service';
import { SettingService } from '../service/setting.service';

@Component({
  selector: 'app-investment-information',
  templateUrl: './investment-information.page.html',
  styleUrls: ['./investment-information.page.scss'],
})
export class InvestmentInformationPage implements OnInit {
  back;
  investments: any = [];
  isProgress = false;
  isFav: any;
  userid: any = '';
  constructor(
      private iab: InAppBrowser,
      private backStack: BackStackService,
      public navCtrl: NavController,
      private apiService: ApiService,
      public platform: Platform,
      public storageService: StorageService,
      public settingService: SettingService,
      private events: Events,
      public toastCtrl: ToastController,
  ) {
    this.back = this.backStack.getBackStack('investment-information');
    this.events.subscribe('user:created', () => {
      this.userid = this.settingService.getUserId();
    });
  }
  gotourl(calculator: any) {
    this.iab.create(calculator.link, '_blank', {
      location: this.platform.is('android') ? 'yes' : 'no',
      hideurlbar: 'yes',
      hidenavigationbuttons: 'yes',
      closebuttoncaption: 'Back'
    });
  }

  ngOnInit() {
    this.investmentInformationList();
    this.getfav();
  }
  investmentInformationList() {
    this.isProgress = false;
    this.apiService.investmentsInformationList().subscribe(result => {
      this.isProgress = true;
      if (result.status) {
        this.investments = result.data;
      }
    });
  }
  addToFavourites(pagename, url) {
    this.isFav = true;
    this.storageService
      .addFavourites(pagename, url, 'payment.png', this.userid, 1)
      .then(val => {
        this.presentToast('Added to favourites');
        this.events.publish('fav:created', Date.now());
      })
      .catch(err => {
        console.log(err);
      });
  }

  removefavourites(url) {
    this.storageService.removeFavourites(url, this.userid).then(res => {
      this.getfav();
      this.presentToast('Removed from favourites');
      this.events.publish('fav:created', Date.now());
    })
      .catch(e => {
        console.log(e);
      });

  }

  getfav() {
    this.storageService
      .getfavourites('investment-information', this.userid)
      .then(val => {
        if (val.rows.length > 0) {
          this.isFav = true;
        } else {
          this.isFav = false;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  async presentToast(msg) {
    // this.dismissLoadingNew();
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      mode: 'md',
      cssClass: 'customToast'
    });
    toast.present();
  }
}
