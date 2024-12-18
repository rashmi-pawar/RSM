import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Facebook } from '@ionic-native/facebook/ngx';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { ToastController, NavController, Events, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, fb, toastCtrl, googlePlus, navCtrl, apiService, events, loadingController, router) {
        this.formBuilder = formBuilder;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.googlePlus = googlePlus;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.events = events;
        this.loadingController = loadingController;
        this.router = router;
        this.fbId = '';
        this.onAddForm = this.formBuilder.group({
            'email': new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')
            ])),
            'password': new FormControl('', Validators.compose([
                Validators.required
            ]))
        });
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.presentLoading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: "loading",
                            duration: 1000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.presentToast = function (msg) {
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
    LoginPage.prototype.fbLogin = function () {
        var _this = this;
        this.fb.login(['public_profile', 'email'])
            .then(function (res) {
            if (res.status == "connected") {
                _this.fbId = res.authResponse.userID;
                _this.fb.api('me?fields=id,name,email,first_name,last_name', []).then(function (profile) {
                    console.log('Logged into Facebook!', profile);
                    _this.signUp(profile, 'facebook');
                });
            }
            else {
                _this.presentToast(res['message']);
            }
        })
            .catch(function (e) {
            console.log('Error logging into Facebook', e);
            _this.presentToast(e.errorMessage);
        });
        // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    };
    LoginPage.prototype.googleLogin = function () {
        var _this = this;
        this.googlePlus.login({})
            .then(function (res) {
            console.log(res);
            _this.signUp(res, 'google');
        })
            .catch(function (err) {
            console.error('err', err);
            _this.presentToast(err);
        });
    };
    LoginPage.prototype.signIn = function () {
        var _this = this;
        this.presentLoading();
        var data = {
            email: this.onAddForm.value.email,
            password: this.onAddForm.value.password
        };
        this.apiService.login(data).subscribe(function (res) {
            console.log(res);
            if (res['status'] == true) {
                localStorage.setItem('userData', JSON.stringify(res['user']));
                localStorage.setItem('token', res['token']);
                _this.events.publish('user:created', Date.now());
                _this.presentToast('LoggedIn Successfully');
                _this.navCtrl.navigateRoot('/home');
            }
            else {
                _this.presentToast(res['message']);
            }
        }, function (err) {
            _this.presentToast(err.error.message);
            console.log(err.error.message);
        });
    };
    LoginPage.prototype.signUp = function (res, type) {
        var _this = this;
        this.presentLoading();
        var data = {};
        if (type == 'google') {
            data = {
                first_name: res.givenName,
                last_name: res.familyName,
                email: res.email,
                deviceId: "34343434dfeerer",
                mobile_no: '',
                googleId: res.userId
            };
        }
        else {
            data = {
                first_name: res.first_name,
                last_name: res.last_name,
                email: res.email,
                deviceId: "34343434dfeerer",
                mobile_no: '',
                facebookId: this.fbId
            };
        }
        this.apiService.signup(data).subscribe(function (res) {
            console.log(res);
            if (res['status'] == true) {
                localStorage.setItem('userData', JSON.stringify(res['user']));
                localStorage.setItem('token', res['token']);
                _this.events.publish('user:created', Date.now());
                _this.presentToast('LoggedIn Successfully');
                _this.navCtrl.navigateRoot('/home');
            }
            else {
                _this.presentToast(res['message']);
            }
        }, function (err) {
            console.log(err);
            _this.presentToast(err.error.message);
            console.log(err.error.message);
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            Facebook,
            ToastController,
            GooglePlus,
            NavController,
            ApiService,
            Events,
            LoadingController,
            Router])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map