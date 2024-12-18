import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {
  Platform, ToastController, NavController, Events, MenuController, AlertController,
} from '@ionic/angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import {Push, PushObject, PushOptions} from '@ionic-native/push/ngx';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from './service/notification.service';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';
import { FirebaseCrashlytics } from '@ionic-native/firebase-crashlytics/ngx';
import { SettingService } from './service/setting.service';
import { BackStackService } from './service/back-stack.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Device } from '@ionic-native/device/ngx';
import {ApiService} from './api.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import {LaunchReview} from '@ionic-native/launch-review/ngx';
import * as LogRocket from 'logrocket';
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';
import { constant } from './_helper/constant';
LogRocket.init('znnyjh/rsm-australia');
if (JSON.parse(localStorage.getItem('userData')) !== undefined && JSON.parse(localStorage.getItem('userData'))) {
  const userData = JSON.parse(localStorage.getItem('userData'));
  // This is an example script - don't forget to change it!
  LogRocket.identify(localStorage.getItem('deviceId'), {
    ...(userData ? {
      name: userData.first_name + ' ' + userData.last_name,
      email: userData.email,
      userId: userData.id,
    } : {}),
    deviceID: localStorage.getItem('userData'),
  });
} else {
  LogRocket.identify(localStorage.getItem('deviceId'), {
    deviceID: localStorage.getItem('userData'),
  });
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  userData: any;
  deviceID: any;
  appPages: Array<{ title: string; url: any; icon: string }>;
  addEventCodeForm: FormGroup;
  showEventDialog = false;
  isGradWeekSubscribe = false;
  gradStatus: any = 'N';
  interval: any;
  intervalCount :number = 0;
  currentVersion: any;
  constructor(
    private platform: Platform,
    private device: Device,
    private router: Router,
    private iab: InAppBrowser,
    private googleAnalytics: GoogleAnalytics,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public events: Events,
    private backStack: BackStackService,
    private alertController: AlertController,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public menuCtrl: MenuController,
    private http: HttpClient,
    private uniqueDeviceID: UniqueDeviceID,
    private pushNotificationService: NotificationService,
    private settingService: SettingService,
    private firebaseCrashlytics: FirebaseCrashlytics,
    public location: Location,
    private formBuilder: FormBuilder,
    private push: Push,
    private apiService: ApiService,
    private androidPermissions: AndroidPermissions,
    private launchReview: LaunchReview,
    private firebaseDynamicLinks: FirebaseDynamicLinks
  ) {

    this.userData = this.settingService.getUserData();
    this.appPages = [
      {
        title: 'My subscriptions and notifications',
        url: 'https://experience.rsm.com.au/preference-center',
        icon: 'notifications'
      },
      {
        title: 'Contact us',
        url: 'contactus',
        icon: 'help'
      },
      {
        title: 'GPS Logbook Settings',
        url: 'tripsetting',
        icon: 'locate'
      },
      {
        title: 'RSM Insights',
        url: 'rss-feed',
        icon: 'logo-rss'
      },
    ];

    events.subscribe('user:created', (type) => {
      this.userData = this.settingService.getUserData();
    });
    events.subscribe('user:updated', (type) => {
      this.userData = this.settingService.getUserData();
    });
    events.subscribe('prifilepic:updated', (profile_pic) => {
      this.userData.profile_pic = profile_pic;
    });
    this.backStack.resetBackFromMenu();
    this.addEventCodeForm = this.formBuilder.group({
      event_code: new FormControl('', Validators.compose([Validators.required])),
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure want to exit from this app ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            navigator['app'].exitApp();
          }
        }
      ]
    });

    await alert.present();
  }

  async deleteAccount() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure want to delete account ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            const user_id = this.settingService.getUserId();
            const data = {
              auth_token: this.settingService.getToken()
            };
            this.apiService.deleteUser(data, user_id).subscribe(response => {
              console.log(response);
              if(response.status){
                this.presentToast("You have successfully deleted the account");
                this.logout()
              } else {
                this.presentToast("Error while delete user");  
              }
            }, error => {
              console.log(error);
              this.presentToast(error.error.message);
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async getDeviceIds(){
    this.deviceID = await this.getDeviceId(); // TODO: save this deviceID in local storage and retrieve everywhere insetad of refetching
    console.log('Device ID ----->',  this.deviceID);
    localStorage.setItem('deviceId', this.deviceID)
    this.getGradStatus(this.deviceID);
    clearInterval(this.interval);
  }

  checkDeviceId() {
    // Check if application having CALL PHONE permission
    // tslint:disable-next-line:max-line-length
    // this.androidPermissions.PERMISSION.CALL_PHONE was not working so read state confirm that there was not parallel process/permission going on
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(
      async (result : any) => {
        if (result.hasPermission) {
          // Store device id for showing to user and encrypt database
          this.getDeviceIds();
        } else {
          // if permission denied then handle interval
          console.log('No Permission Found',  this.intervalCount);
          this.intervalCount++;
          if(this.intervalCount == 3) {
            console.log('Force Permission in 3rd retry');
            this.getDeviceIds();
            this.intervalCount = 0;
          }
        }
      },
      err => {
        console.error('Error in checkPermission', err);
      }
    );
  }

  async initializeApp() {
    this.platform.ready().then(async () => {
      // let nav = this.navCtrl.getActiveNavs()[0];
      // code that is executed when the user pressed device the back button
      this.platform.backButton.subscribe(() => {
        console.log(' ------ subscribe-----');
        this.location.back();
      });
      // To prevent interference with ionic's own backbutton handling
      // you can subscribe with a low priority instead
      // this.platform.backButton.subscribeWithPriority(0, () => {
      //   console.log(' ------ subscribeWithPriority -----');
      //   this.navCtrl.pop();
      //   // code that is executed when the user pressed the back button
      //   // and ionic doesn't already know what to do (close modals etc...)
      // })

      if (this.platform.is('android')) {
        this.statusBar.styleLightContent();
        this.currentVersion = constant.androidVersion;
      } else {
        this.statusBar.styleDefault();
        this.currentVersion = constant.iosVersion;
      }
      setTimeout(() => {
        this.splashScreen.hide();
        localStorage.setItem('init', 'false');
      }, 3000);

      const options: PushOptions = {
        android: {
          vibrate: true,
          forceShow: true
        },
        ios: {
          alert: 'true',
          badge: true,
          sound: 'true'
        },
      };

      const pushObject: PushObject = this.push.init(options);

      pushObject.on('notification').subscribe((notification: any) => {
        console.log(notification);
        this.notificationClick({
          notification_title: notification.title,
          notification_id: notification.additionalData.notification_id
        });
        if (notification.additionalData.page_url) {
          this.goTo(notification.additionalData.page_url);
        } else if (notification.additionalData.web_url) {
          this.gotourl(notification.additionalData.web_url);
        }
        if (this.platform.is('ios') && notification.additionalData.foreground) {
          this.presentAlert(notification.title, notification.body);
        }
      });
      pushObject.on('registration').subscribe((registration: any) => {
        localStorage.setItem('fcm_token', registration.registrationId);
        console.log('Device registered >>>>>>>>>>>>>>>>>>', registration.registrationId);
        localStorage.setItem('registrationId', registration.registrationId);
        this.pushNotificationService.pushObject.subscribe('all');
        this.saveToken(registration.registrationId);
      });

      pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

      this.googleAnalytics
        .startTrackerWithId('UA-141131993-3')
        .then(() => {
          console.log('Google analytics is ready now');
        })
        .catch(error => {
          console.log('Error starting GoogleAnalytics', error);
        });
      if (localStorage.getItem('registrationId')) {
        this.saveToken(localStorage.getItem('registrationId'));
      }

      this.interval = setInterval(() => {
        console.log('get device id in interval');
        this.checkDeviceId();
      }, 5000);
      this.checkDeviceId();
      //Firebase deeplink start
      this.firebaseDynamicLinks.onDynamicLink()
      .subscribe((res: any) => {
        this.closeMenu();
        console.log(res)
        if(res){
          this.redirectToEventSignIn(res.deepLink)
        }

      }, (error:any) => {
        console.log(error)
      })
      this.firebaseDynamicLinks.getDynamicLink()
      .then((res: any) => {
        this.closeMenu();
        console.log(res)
        if(res){
          this.redirectToEventSignIn(res.deepLink)
        }
      }, (error:any) => {
        console.log(error)
      })
      //Firebase deeplink end

      setTimeout(() => {
        this.launchRatingDialog();
      }, 6000);
    });
    try {
      const crashlytics = this.firebaseCrashlytics.initialise();
      crashlytics.logException('my caught exception');
    } catch (error) {
      console.log('Error', error);
    }

    this.getPayemntEventURL();
  }
  redirectToEventSignIn(url){
    const queryParam = url.split('?');
    const urlParams: any = new URLSearchParams(queryParam[1]);
    const event_id = urlParams.get('event_id');
    if(event_id){
      if (this.userData == undefined || !this.userData) {
        this.navCtrl.navigateRoot('/login', { queryParams: { nextURL: '/event-sign-in?event_id=' + event_id } });
      } else {
        this.navCtrl.navigateRoot('/event-sign-in?event_id=' + event_id);
      }
    } else {
      this.presentToast('Invalid QR code');
    }
  }

  launchRatingDialog(){
    if(this.launchReview.isRatingSupported()){
      this.launchReview.rating()
          .toPromise()
          .then(() => {
            console.log('Successfully launched rating dialog')
          }).catch(e => {
        console.log(e);
        console.log('Launch error');
      });
    } else {
      console.log('Rating not supported');
    }
  }

  async notificationClick(postData){
    postData.device_id = await this.getDeviceId();
    console.log('postData');
    console.log(postData);
    this.apiService.deviceNotification(postData).subscribe(response => {
      console.log('response');
      console.log(response);
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

  async logoutConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure want to Logout?',
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
            this.logout();
            this.presentToast('You have successfully logged out.');
          }
        }
      ]
    });
    await alert.present();
  }

  logout() {
    this.settingService.clear();
    this.events.publish('user:created', 'logout');
    localStorage.setItem('init', 'false');
    this.navCtrl.navigateRoot('/tabs/dashboard');
  }

  menuHeaderClick() {
    if (this.userData == undefined || !this.userData) {
      this.goTo('login');
    } else {
      this.goTo('updateprofile');
    }
  }

  async saveToken(token: string) {
    const savedToken = this.settingService.getFirebaseToken();
    // if (savedToken !== token) {
    let id = await this.getDeviceId();
    this.apiService.updateDeviceToken({
        user_id: this.settingService.getUserId(),
        deviceID: id,
        userToken: token,
        deviceInfo: JSON.stringify({
          model: this.device.model,
          platform: this.device.platform,
          version: this.device.version,
          cordova: this.device.cordova,
          uuid: this.device.uuid,
          manufacturer: this.device.manufacturer,
          isVirtual: this.device.isVirtual,
          serial: this.device.serial
        })
    })
    .subscribe(response => {
      this.settingService.setFirebaseToken(token);
    }, error => {
      console.log(error);
    });
  }

  getPayemntEventURL() {
    this.apiService.getPaymenturls().subscribe((response: any) => {
      if (response.data) {
        const payment = response.data.find(n => n.title === 'Payment_API');
        const event = response.data.find(n => n.title === 'Event_API');
        localStorage.setItem('upcomingEventURL', event.content);
        if (payment && payment.content) {
          this.appPages.splice(2, 0, {
            title: 'Online Payment',
            url: payment.content,
            icon: 'logo-usd'
          });
        }
        // if (event && event.content) {
        //   this.appPages.splice(3, 0, {
        //     title: 'Upcoming Events',
        //     url: event.content,
        //     icon: 'md-calendar'
        //   });
        // }
      }
    });
  }


  async getDeviceId() {
    try {
      const uuid = await this.uniqueDeviceID
        .get();
      return uuid;
    } catch (error) {
      console.log('uniqueDeviceID error');
      console.log(error);
    }
  }

  goTo(url) {
    this.backStack.setBackFromMenu(url);
    if (url.includes('http') || url.includes('https')) {
      this.gotourl(url);
    } else {
      this.backStack.setBackStack(url, 'tabs/dashboard');
      if (url === 'login' && (this.userData === undefined || !this.userData)) {
        this.navCtrl.navigateRoot('/login');
      } else {
        this.navCtrl.navigateRoot('/' + url);
      }
    }
  }

  gotourl(url) {
    this.iab.create(url, '_blank', {
      location: this.platform.is('android') ? 'yes' : 'no',
      hideurlbar: 'yes',
      hidenavigationbuttons: 'yes',
      closebuttoncaption: 'Back'
    });
  }

  ngOnInit() {
    this.menuCtrl.enable(true, 'menu');
    if (localStorage.getItem('registrationId')) {
      this.saveToken(localStorage.getItem('registrationId'));
    }
    this.initializeApp();
  }

  getGradStatus(deviceID: any) {
    this.apiService.getGradStatus().subscribe((response: any) => {
      console.log(response);
      if (response.status){
        this.gradStatus = response.grad_status;
        if (this.gradStatus === 'Y') {
          this.getGradEvent(deviceID);
        }
      }
    });
  }

  getGradEvent(deviceID) {
    deviceID = deviceID || 'bafa706f-448d-f5d3-8697-830312657488';
    this.apiService.getGradEventDetail(deviceID).subscribe((response: any) => {
      if (response.response && response.response.length > 0) {
        console.log(response.response);
        if (response.response[0].status === 'Y') {
          this.isGradWeekSubscribe = true;
        }
      }
    });
  }

  async addEventCode() {
    if (this.addEventCodeForm.valid) {
      let id = await this.getDeviceId();
      this.addEventCodeForm.value.device_id = id ? id : '';
      this.addEventCodeForm.value.user_id = this.settingService.getUserId();
      this.apiService.addEventCode(this.addEventCodeForm.value).subscribe((response: any) => {
        this.presentToast(response.message);
        this.showEventDialog = false;
        if (response.response && response.response.length > 0) {
          this.isGradWeekSubscribe = true;
        }
      }, error => {
        this.presentToast(error.error.message);
      });
    }
  }
  async presentEventCodeDialog() {
    this.menuCtrl.enable(true);
    this.showEventDialog = true;
    this.addEventCodeForm.patchValue({ event_code: '' });
  }

  closeMenu() {
    this.menuCtrl.close('menu');
  }

  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
