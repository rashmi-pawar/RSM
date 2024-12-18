import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, Platform, Events } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { BackStackService } from '../service/back-stack.service';
import { StorageService } from '../storage.service';
import { SettingService } from '../service/setting.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {
  isFav: any;
  userid: any = '';
  constructor(
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public platform: Platform,
    public iab: InAppBrowser,
    private backStack: BackStackService,
    public storageService: StorageService,
    public settingService: SettingService,
    private events: Events,
    public appAvailability: AppAvailability) {
      this.events.subscribe('user:created', () => {
        this.userid = this.settingService.getUserId();
      });
    }

  ngOnInit() {
    this.getfav();
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

  goTo(url) {
    this.backStack.setBackStack(url, 'contactus');
    this.navCtrl.navigateRoot('/' + url);
  }



  launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, username: string) {
    let app: string;

    if (this.platform.is('ios')) {
      app = iosSchemaName;
    }
    // else if (this.platform.is('android')) {
    //   app = androidPackageName;
    // }
    else {
      const browser = this.iab.create(httpUrl + username, '_system', {
        location: this.platform.is('android') ? 'yes' : 'no',
        hideurlbar: 'yes',
        hidenavigationbuttons: 'yes',
        closebuttoncaption: 'Back'
      });
      return;
    }

    this.appAvailability.check(app).then(
      (yes: boolean) => { // success callback
        const browser = this.iab.create(appUrl + username, '_system', {
          location: this.platform.is('android') ? 'yes' : 'no',
          hideurlbar: 'yes',
          hidenavigationbuttons: 'yes',
          closebuttoncaption: 'Back'
        });
        console.log("browser success", browser);
      },
      (no: boolean) => { // error callback
        const browser = this.iab.create(httpUrl + username, '_system', {
          location: this.platform.is('android') ? 'yes' : 'no',
          hideurlbar: 'yes',
          hidenavigationbuttons: 'yes',
          closebuttoncaption: 'Back'
        });
        console.log("browser error", browser);
      }
    );
  }

  openInstagram(username: string) {
    // this.launchExternalApp('instagram://', 'com.instagram.android', 'instagram://user?username=', 'https://www.instagram.com/', username);
    this.launchExternalApp('instagram://', 'com.instagram.android', 'http://instagram.com/_u/' + username, 'https://instagram.com/rsm_au?igshid=1dyzl5hmsj4jy', '');
  }

  openTwitter(username: string) {
    this.launchExternalApp('twitter://', 'com.twitter.android', 'twitter://user?screen_name=', 'https://twitter.com/', username);
  }

  openFacebook(username: string) {
    // this.launchExternalApp('fb://', 'com.facebook.katana', 'fb://page/', 'https://www.facebook.com/', username);
    this.launchExternalApp('fb://', 'com.facebook.katana', 'fb://facewebmodal/f?href=https://www.facebook.com/RSMAustralia.au', 'https://m.facebook.com/RSMAustralia.au/?refsrc=https%3A%2F%2Fm.facebook.com%2F1091977710817808&_rdr', '');
  }

  openYoutube(username: string) {
    this.launchExternalApp('youtube://', 'com.google.android.youtube', 'https://www.youtube.com/channel/', 'https://www.youtube.com/channel/', username);
  }

  openLinkedIn(username: string) {
    this.launchExternalApp('linkedin://', 'com.linkedin.android', 'https://www.linkedin.com/company/', 'https://www.linkedin.com/company/', username);

  }
  goToURl(url) {
    const browser = this.iab.create(url, '_system', {
      location: this.platform.is('android') ? 'yes' : 'no',
      hideurlbar: 'yes',
      hidenavigationbuttons: 'yes',
      closebuttoncaption: 'Back'
    });
  }

  addToFavourites(pagename, url) {
    this.isFav = true;
    this.storageService
      .addFavourites(pagename, url, 'phone-ringing.png', this.userid, 1)
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
      .getfavourites('contactus', this.userid)
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
}
