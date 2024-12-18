import { Component, OnInit } from '@angular/core';
import {BackStackService} from '../service/back-stack.service';
import {Events, NavController, ToastController} from '@ionic/angular';
import {ApiService} from '../api.service';
import {NavigationExtras} from '@angular/router';
import { StorageService } from '../storage.service';
import { SettingService } from '../service/setting.service';

@Component({
  selector: 'app-rss-feed',
  templateUrl: './rss-feed.page.html',
  styleUrls: ['./rss-feed.page.scss'],
})
export class RssFeedPage implements OnInit {
  back;
  feeds: any = [];
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
    this.back = this.backStack.getBackStack('rss-feed');
    this.events.subscribe('user:created', () => {
      this.userid = this.settingService.getUserId();
    });
  }

  ngOnInit() {
    this.rssFeedList();
    this.getfav();
  }

  gotourl(data) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        url: data.slug,
      }
    };
    this.navCtrl.navigateForward('/rss-feed-detail', navigationExtras);
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
  addToFavourites(pagename, url) {
    this.isFav = true;
    this.storageService
      .addFavourites(pagename, url, 'default-rss.png', this.userid, 1)
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
      .getfavourites('rss-feed', this.userid)
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
