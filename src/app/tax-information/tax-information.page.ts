import { Component, OnInit } from '@angular/core';
import {BackStackService} from 'src/app/service/back-stack.service';
import {Events, NavController, ToastController} from '@ionic/angular';
import {NavigationExtras} from '@angular/router';
import {ApiService} from '../api.service';
import { StorageService } from '../storage.service';
import { SettingService } from '../service/setting.service';

@Component({
  selector: 'app-tax-information',
  templateUrl: './tax-information.page.html',
  styleUrls: ['./tax-information.page.scss'],
})
export class TaxInformationPage implements OnInit {
  back;
  taxes: any = [];
  isProgress = false;
  isFav: any;
  userid: any = '';
  constructor(
      private backStack: BackStackService,
      public navCtrl: NavController,
      private apiService: ApiService,
      public storageService: StorageService,
      public settingService: SettingService,
      private events: Events,
      public toastCtrl: ToastController,
  ) {
    this.back = this.backStack.getBackStack('tax-information');
    this.events.subscribe('user:created', () => {
      this.userid = this.settingService.getUserId();
    });
  }
  gotourl(data) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        title: data.title,
        id: data.id
      }
    };
    this.navCtrl.navigateForward('/tax-information-detail', navigationExtras);
  }

  ngOnInit() {
    this.taxInformationList();
    this.getfav();
  }
  taxInformationList() {
    this.isProgress = false;
    this.apiService.taxInformationList().subscribe(result => {
      this.isProgress = true;
      if (result.status) {
        this.taxes = result.data;
      }
    });
  }
    
  addToFavourites(pagename, url) {
    this.isFav = true;
    this.storageService
      .addFavourites(pagename, url, 'tax.png', this.userid, 1)
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
      .getfavourites('tax-information', this.userid)
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
