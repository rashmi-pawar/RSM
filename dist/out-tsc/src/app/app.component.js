import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform, ToastController, NavController, Events, MenuController } from '@ionic/angular';
// import { FCM } from '@ionic-native/fcm/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from './service/notification.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, events, navCtrl, toastCtrl, menuCtrl, http, uniqueDeviceID, pushNotificationService) {
        var _this = this;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.events = events;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.uniqueDeviceID = uniqueDeviceID;
        this.pushNotificationService = pushNotificationService;
        this.initializeApp();
        this.user_data = JSON.parse(localStorage.getItem('userData'));
        this.appPages = [
            {
                title: 'Add Expense',
                url: '/home',
                icon: 'home'
            },
            {
                title: 'Trips',
                url: '/trips',
                icon: 'list'
            },
            {
                title: 'Settings',
                url: '/settings',
                icon: 'settings'
            },
            {
                title: 'Track',
                url: '/tracking',
                icon: 'walk'
            },
            {
                title: 'Favourites',
                url: '/addfavourites',
                icon: 'heart'
            },
            {
                title: 'Manage Receipt',
                url: '/viewreceipt',
                icon: 'home'
            },
            {
                title: 'Contact Us',
                url: '/contactus',
                icon: 'contact'
            }
        ];
        console.log(JSON.parse(localStorage.getItem('userData')));
        events.subscribe('user:created', function (time) {
            console.log(JSON.parse(localStorage.getItem('userData')));
            _this.user_data = JSON.parse(localStorage.getItem('userData'));
            if (_this.user_data != undefined || _this.user_data) {
                _this.appPages = [
                    {
                        title: 'Add Expense',
                        url: '/home',
                        icon: 'home'
                    },
                    {
                        title: 'Trips',
                        url: '/trips',
                        icon: 'list'
                    },
                    {
                        title: 'Settings',
                        url: '/settings',
                        icon: 'settings'
                    },
                    {
                        title: 'Track',
                        url: '/tracking',
                        icon: 'walk'
                    },
                    {
                        title: 'Favourites',
                        url: '/addfavourites',
                        icon: 'heart'
                    },
                    {
                        title: 'Manage Receipt',
                        url: '/viewreceipt',
                        icon: 'home'
                    }
                ];
            }
            else {
                _this.appPages = [
                    {
                        title: 'Add Expense',
                        url: '/home',
                        icon: 'home'
                    },
                    {
                        title: 'Trips',
                        url: '/trips',
                        icon: 'list'
                    },
                    {
                        title: 'Login',
                        url: '/login',
                        icon: 'contact'
                    },
                    {
                        title: 'Settings',
                        url: '/settings',
                        icon: 'settings'
                    },
                    {
                        title: 'Track',
                        url: '/tracking',
                        icon: 'walk'
                    },
                    {
                        title: 'Favourites',
                        url: '/addfavourites',
                        icon: 'heart'
                    },
                    {
                        title: 'Manage Receipt',
                        url: '/viewreceipt',
                        icon: 'home'
                    }
                ];
            }
        });
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            // this.fcm.getToken().then(token => {
            //   this.saveToken(token);
            //   console.log(token);
            // });
            // this.fcm.onNotification().subscribe(data => {
            //   console.log(data);
            //   if (data.wasTapped) {
            //     console.log('Notification Received in background');
            //   } else {
            //     console.log('Notification Received in foreground');
            //   }
            // });
            // this.fcm.onTokenRefresh().subscribe(token => {
            //   this.saveToken(token);
            //   console.log(token);
            // });
            // this.push.hasPermission()
            //   .then((res: any) => {
            //     if (res.isEnabled) {
            //       console.log('We have permission to send push notifications');
            //     } else {
            //       console.log('We do not have permission to send push notifications');
            //     }
            //   });
            // // Create a channel (Android O and above). You'll need to provide the id, description and importance properties.
            // this.push.createChannel({
            //   id: 'testchannel1',
            //   description: 'My first test channel',
            //   // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
            //   importance: 3
            // }).then(() => console.log('Channel created'));
            // // Delete a channel (Android O and above)
            // this.push.deleteChannel('testchannel1').then(() => console.log('Channel deleted'));
            // // Return a list of currently configured channels
            // this.push.listChannels().then((channels) => console.log('List of channels', channels))
            // // to initialize push notifications
            // const options: PushOptions = {
            //   android: {},
            //   ios: {
            //     alert: 'true',
            //     badge: true,
            //     sound: 'false'
            //   },
            //   windows: {},
            //   browser: {
            //     pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            //   }
            // };
            // const pushObject: PushObject = this.push.init(options);
            _this.pushNotificationService.pushObject.on('notification').subscribe(function (notification) {
                console.log('Received a notification', notification);
                if (!notification.additionalData.foreground) {
                    _this.navCtrl.navigateRoot('/viewreceipt');
                }
            });
            _this.pushNotificationService.pushObject.on('registration').subscribe(function (registration) {
                console.log('Device registered', registration.registrationId);
                _this.pushNotificationService.pushObject.subscribe('all');
                _this.saveToken(registration.registrationId);
            });
            _this.pushNotificationService.pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
        });
    };
    AppComponent.prototype.presentToast = function (msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.logout = function () {
        localStorage.clear();
        console.log(this.user_data);
        this.events.publish('user:created', Date.now());
        this.presentToast('Logout Successfully');
        this.menuCtrl.close();
        this.navCtrl.navigateRoot('/login');
    };
    AppComponent.prototype.saveToken = function (token) {
        var _this = this;
        var savedToken = localStorage.getItem('firebaseToken');
        console.log(savedToken);
        if (savedToken !== token) {
            this.getDeviceId().then(function (id) {
                console.log(id);
                _this.http.post('http://rsm.technowand.biz/api/device', {
                    deviceID: id,
                    userToken: token
                }).subscribe(function (response) {
                    localStorage.setItem('firebaseToken', token);
                    console.log(response);
                });
            });
        }
    };
    AppComponent.prototype.getDeviceId = function () {
        return this.uniqueDeviceID.get()
            .then(function (uuid) { return uuid; })
            .catch(function (error) { return console.log(error); });
    };
    AppComponent.prototype.goTo = function (url) {
        this.navCtrl.navigateRoot('/' + url);
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            Events,
            NavController,
            ToastController,
            MenuController,
            HttpClient,
            UniqueDeviceID,
            NotificationService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map