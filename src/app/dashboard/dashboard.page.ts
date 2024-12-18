import { Component, OnInit, ViewChild } from "@angular/core";
import {
  NavController,
  Events,
  Platform,
  MenuController,
  ToastController,
  LoadingController,
} from "@ionic/angular";
import { Router } from "@angular/router";
import { StorageService } from "../storage.service";
import { WebView } from "@ionic-native/ionic-webview/ngx";
import { File } from "@ionic-native/file/ngx";
import { PageTrack } from "../decorators/page-track.decorator";
import { IonSlides } from "@ionic/angular";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { AlertController } from "@ionic/angular";
import { SettingService } from "../service/setting.service";
import { BackStackService } from "../service/back-stack.service";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { ApiService } from "../api.service";
import { UnitHelper } from "../_helper/unitHelper";
import { FirebaseDynamicLinks } from "@ionic-native/firebase-dynamic-links/ngx";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { Location } from "@angular/common";
import * as _ from 'lodash';
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
@PageTrack("Dashboard Screen")
export class DashboardPage implements OnInit {
  @ViewChild("slides") slides: IonSlides;

  limit = 4;
  userid: any = "";
  favourites = [];
  isLoading = false;
  mainSlideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
    pager: true,
    autoplay: true,
    speed: 300,
    centeredSlides: true,
  };

  sliderOne: any;
  favouritesDefaultLength = 4;
  eventUrl: any = "";
  banner: any = {};
  bannerList: any = [];
  unitHelper = new UnitHelper();
  totalDistance: any = 0;
  totalReceipt: any = 0;
  isCurrentEvents = true;
  isExitDialogOpen = false;
  unreadNotificationCount = 0;
  constructor(
    private file: File,
    public navCtrl: NavController,
    private webview: WebView,
    public router: Router,
    public storageService: StorageService,
    public events: Events,
    private backStack: BackStackService,
    private iab: InAppBrowser,
    public alertController: AlertController,
    public settingService: SettingService,
    public platform: Platform,
    private menuCtrl: MenuController,
    private screenOrientation: ScreenOrientation,
    public toastCtrl: ToastController,
    private _location: Location,
    private firebaseDynamicLinks: FirebaseDynamicLinks,
    private barcodeScanner: BarcodeScanner,
    public loadingController: LoadingController,
    private apiService: ApiService
  ) {
    this.events.subscribe("user:created", (time) => {
      this.userid = this.settingService.getUserId();
      this.getfavourites();
    });

    this.events.subscribe("fav:created", (time) => {
      this.platform.ready().then((readySource) => {
        this.getfavourites();
      });
    });

    // this.sliderOne = {
    //   isBeginningSlide: true,
    //   isEndSlide: false,
    //   slidesItems: [
    //     {
    //       image: 'assets/img/home/slider/add-expense.svg',
    //       title: 'Click here to add expense',
    //       link: 'home'
    //     },
    //     {
    //       image: 'assets/img/home/slider/log-trip.svg',
    //       title: 'Click here to log trip',
    //       link: 'logtrip'
    //     },
    //     {
    //       image: 'assets/img/home/slider/calculator.svg',
    //       title: 'Click here for calculators',
    //       link: 'calculator'
    //     },
    //     {
    //       image: 'assets/img/home/slider/contact-us.svg',
    //       title: 'Click here to contact us',
    //       link: 'contactus'
    //     }
    //   ]
    // };
  }

  // nextSlide() {
  //   this.slides.slideNext();
  // }
  // prevSlide() {
  //   this.slides.slidePrev();
  // }
  // Stop the slide autoplay when the view will leave
  // public ionViewWillLeave() {
  //   this.slides.stopAutoplay();
  // }

  // Start the slide autoplay when the view will enter
  // public ionViewWillEnter() {
  //   this.slides.startAutoplay();
  //   this.slides.pager = true;
  //
  //   this.screenOrientation.onChange().subscribe(
  //     () => {
  //       this.slides.startAutoplay();
  //       this.slides.pager = true;
  //     }
  //   );
  // }

  // async presentFavAlert() {
  //   const alert = await this.alertController.create({
  //     message:
  //       'Add to your favourites by pressing the &#10084; icon you’ll find on tools, calculators and resources.',
  //     buttons: ['OK']
  //   });
  //
  //   await alert.present();
  // }

  ngOnInit() {
    this.userid = this.settingService.getUserId();
    // this.getfavourites();
    if (this.platform.is("android")) {
      this.platform.ready().then(() => {
        this.platform.backButton.subscribeWithPriority(9999, () => {
          console.log("Back press handler!");
          if (this._location.isCurrentPathEqualTo("/tabs/dashboard")) {
            // Show Exit Alert!
            console.log("Show Exit Alert!");
            if (!this.isExitDialogOpen) {
              this.showExitConfirm();
            }
          } else {
            // Navigate to back page
            console.log("Navigate to back page");
            this._location.back();
          }
        });
        this.platform.backButton.subscribeWithPriority(5, () => {
          console.log("Handler called to force close!");
          this.alertController
            .getTop()
            .then((r) => {
              if (r) {
                navigator["app"].exitApp();
              }
            })
            .catch((e) => {
              console.log(e);
            });
        });
      });
    }
  }

  ionViewDidEnter() {
    if (this.platform.is("android")) {
      navigator["app"].clearHistory();
    }
    this.getNotificationCount();
    this.getPayemntEventURL();
    this.getBannersURL();
    this.viewtrips();
    this.getOcrCount();
    this.getCurrentEventList();
  }

  showExitConfirm() {
    this.alertController.dismiss();
    this.isExitDialogOpen = true;
    this.alertController
      .create({
        header: "Exit Application",
        message: "Do you want to close the app?",
        backdropDismiss: false,
        buttons: [
          {
            text: "Stay",
            role: "cancel",
            handler: () => {
              console.log("Application exit prevented!");
              this.isExitDialogOpen = false;
            },
          },
          {
            text: "Exit",
            handler: () => {
              this.isExitDialogOpen = false;
              navigator["app"].exitApp();
            },
          },
        ],
      })
      .then((alert) => {
        alert.present();
      });
  }

  openQRScanner() {
    this.redirectToEventSignIn();
  }

  redirectToEventSignIn() {
    if (this.userid != undefined && this.userid) {
      this.presentLoading();
      this.apiService.getMyEventList().subscribe(result => {
        if (result.status) {
          this.navCtrl.navigateRoot("/event-sign-in");
        }
        this.dismissLoading();
      }, error => {
        this.dismissLoading();
        if (error && error.error) {
          this.presentToast(error.error.message);
        }
        if (error.status === 401) {
          this.apiService.logout('/event-sign-in');
        }
      })
    } else {
      this.apiService.logout('/event-sign-in');
    }
  }

  viewtrips() {
    this.storageService
      .viewTrip(this.userid)
      .then((res) => {
        if (res.rows.length > 0) {
          this.totalDistance = 0;
          for (let i = 0; i < res.rows.length; i++) {
            if (res.rows.item(i).unit === "km") {
              // tslint:disable-next-line:radix
              const distance = parseInt(res.rows.item(i).distance);
              this.totalDistance += _.isNaN(distance) ? 0 : distance;
            } else {
              const distance = this.unitHelper.kmTomiles(
                res.rows.item(i).distance
              );
              this.totalDistance += _.isNaN(distance) ? 0 : distance;
            }
          }
        }
      })
      .catch((e) => {
        console.log("viewtrips exception");
        console.log(e);
      });
  }

  getOcrCount() {
    this.storageService
      .getOcrCount(this.userid)
      .then((res) => {
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            console.log(res.rows.item(i));
            this.totalReceipt = res.rows.item(i).totalReceipt;
          }
        }
      })
      .catch((e) => {
        console.log("getOcrCount exception");
        console.log(e);
      });
  }

  goTo(url) {
    if (url.includes("http")) {
      this.gotourl(url);
    } else {
      this.backStack.setBackStack(url, "tabs/dashboard");
      this.navCtrl.navigateRoot("/" + url);
    }
  }
  goToEvent() {
    if (this.userid) {
      console.log(this.isCurrentEvents);
      if (this.isCurrentEvents) {
        this.backStack.setBackStack("current-events", "tabs/dashboard");
        this.navCtrl.navigateRoot("/current-events");
      } else {
        this.backStack.setBackStack("my-events", "tabs/dashboard");
        this.navCtrl.navigateRoot("/my-events");
      }
    } else {
      const url = this.isCurrentEvents ? '/current-events' : '/my-events';
      this.navCtrl.navigateRoot("/login", { queryParams: { nextURL: url }});
    }
  }
  goToUpdateprofile() {
    if (this.userid) {
      this.backStack.setBackStack("updateprofile", "tabs/dashboard");
      this.navCtrl.navigateRoot("/updateprofile");
    } else {
      this.navCtrl.navigateRoot("/login",  { queryParams: { nextURL: '/updateprofile' }});
    }
  }
  gotourl(url) {
    this.iab.create(url, "_blank", {
      location: this.platform.is("android") ? "yes" : "no",
      hideurlbar: "yes",
      hidenavigationbuttons: "yes",
      closebuttoncaption: "Back",
    });
  }
  openMenu() {
    this.menuCtrl.enable(true, "menu");
    this.menuCtrl.open("menu");
  }
  getCurrentEventList() {
    this.apiService.getCurrentEventList("Date", "desc").subscribe((result) => {
      if (result.status) {
        if (!result.events || result.events.length === 0) {
          this.isCurrentEvents = false;
        }
      }
    });
  }
  getfavourites() {
    this.favourites = [];
    this.storageService
      .favouritesList(this.userid)
      .then((res) => {
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            this.favourites.push({
              name: res.rows.item(i).name,
              url: res.rows.item(i).url,
              icon: "assets/img/home/favourites/" + res.rows.item(i).icon,
            });
          }
          this.addEmptyFavourites();
        } else {
          this.defaultfav();
        }
      })
      .catch((e) => {
        this.defaultfav();
        console.log(e);
      });
  }
  defaultfav() {
    this.favourites = [];
    this.addEmptyFavourites();
  }

  addEmptyFavourites() {
    if (this.favourites.length < this.favouritesDefaultLength) {
      const max = this.favouritesDefaultLength - this.favourites.length;
      for (let index = 0; index < max; index++) {
        this.favourites.push({
          name: "",
          icon: "assets/img/home/favourites/favourite.png",
        });
      }
    }
  }
  getPayemntEventURL() {
    this.apiService.getPaymenturls().subscribe((response: any) => {
      if (response.data) {
        const event = response.data.find((n) => n.title === "Event_API");
        if (event && event.content) {
          this.eventUrl = event.content;
        }
      }
    });
  }

  getBannersURL() {
    this.apiService.getBannerurls().subscribe((response: any) => {
      if (response.data) {
        this.bannerList = response.data;
        this.banner = response.data[0];
      }
    });
  }

  getNotificationCount() {
    this.apiService.getNotificationCount().subscribe((response: any) => {
      if (response.count) {
        this.unreadNotificationCount = response.count > 9 ? "9+" : response.count;
      }
    });
  }

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      mode: "md",
      cssClass: "customToast",
    });
    toast.present();
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
}
