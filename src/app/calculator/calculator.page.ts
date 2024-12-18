import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ApiService } from '../api.service';
import {Events, Platform, ToastController} from '@ionic/angular';
import { StorageService } from '../storage.service';
import { SettingService } from '../service/setting.service';
import { BackStackService } from 'src/app/service/back-stack.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  calculators: Array<any> = [];
  isFav: any = false;
  userid: any = '0';
  back;
  constructor(
    private iab: InAppBrowser,
    public toastCtrl: ToastController, private api: ApiService, private events: Events,
    public platform: Platform,
    private storageService: StorageService,
    private backStack: BackStackService,
    private settingService: SettingService,
  ) {
    this.events.subscribe('user:created', (time) => {
      this.userid = this.settingService.getUserId();
      this.getfav();
    });
    this.back = this.backStack.getBackStack('calculator');
  }

  ngOnInit() {
    this.api.calculatorlist().subscribe((res) => {
      this.calculators = res.data;
    });
    this.userid = this.settingService.getUserId();
    this.getfav();
  }

  gotourl(calculator: any) {
    this.iab.create(calculator.link, '_blank', {
      location: this.platform.is('android') ? 'yes' : 'no',
      hideurlbar: 'yes',
      hidenavigationbuttons: 'yes',
      closebuttoncaption: 'Back'
    });
  }
  getfav() {
    this.storageService
      .getfavourites('calculator', this.userid)
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

  addToFavourites(pagename, url) {
    this.isFav = true;
    this.storageService
      .addFavourites(pagename, url, 'calculator.png', this.userid, 1)
      .then(val => {
        this.presentToast('Added to favourites');
        this.events.publish('fav:created', Date.now());
      })
      .catch(err => {
        console.log(err);
      });
  }
  removefavourites(pagename, url) {
    this.storageService.removeFavourites(url, this.userid).then(res => {
      this.getfav();
      this.presentToast('Removed from favourites');
      this.events.publish('fav:created', Date.now());
    })
      .catch(e => {
        console.log(e);
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
}
