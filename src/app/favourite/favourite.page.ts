import { Component, OnInit } from '@angular/core';
import {BackStackService} from '../service/back-stack.service';
import {Events, NavController, Platform, ToastController} from '@ionic/angular';
import {ApiService} from '../api.service';
import {NavigationExtras} from '@angular/router';
import { StorageService } from '../storage.service';
import { SettingService } from '../service/setting.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {
  back;
  feeds: any = [];
  isProgress = false;
  favourites = [];
  userid: any = "";
  constructor(
      private backStack: BackStackService,
      public navCtrl: NavController,
      public events: Events,
      public platform: Platform,
      public storageService: StorageService,
      public settingService: SettingService,
      private apiService: ApiService,
      public toastCtrl: ToastController,
  ) {
    this.back = this.backStack.getBackStack('favourite');
    this.events.subscribe("user:created", (time) => {
      this.userid = this.settingService.getUserId();
      this.getfavourites();
    });
    this.events.subscribe("fav:created", (time) => {
      this.platform.ready().then((readySource) => {
        this.getfavourites();
      });
    });
  }
  ngOnInit() {
    this.rssFeedList();
    this.getfavourites();
  }

  getfavourites() {
    this.favourites = [];
    this.isProgress = false;
    this.storageService
      .favouritesList(this.userid)
      .then((res) => {
        console.log(res.rows);
        this.isProgress = true;
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            this.favourites.push({
              name: res.rows.item(i).name,
              url: res.rows.item(i).url,
              icon: "assets/img/home/favourites/" + res.rows.item(i).icon,
            });
          }
          console.log(this.favourites)
        } else {
          // this.defaultfav();
        }
      })
      .catch((e) => {
        // this.defaultfav();
        this.isProgress = true;
        console.log(e);
      });
  }

  gotourl(data) {
    this.navCtrl.navigateForward(data.url);
  }

  removefavourites(url) {
    console.log(url);
    this.storageService.removeFavourites(url, this.userid).then(res => {
      this.getfavourites();
      this.presentToast('Removed from favourites');
    })
      .catch(e => {
        console.log(e);
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

  rssFeedList() {
    this.isProgress = false;
    this.apiService.getRSSFeedList().subscribe(result => {
      this.isProgress = true;
      if (result.status) {
        this.feeds = result.data;
      }
    });
  }
  onImageError(feed) {
    feed.error = true;
  }

}
