(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contactus-contactus-module"],{

/***/ "./src/app/contactus/contactus.module.ts":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.module.ts ***!
  \***********************************************/
/*! exports provided: ContactusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPageModule", function() { return ContactusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contactus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactus.page */ "./src/app/contactus/contactus.page.ts");







var routes = [
    {
        path: '',
        component: _contactus_page__WEBPACK_IMPORTED_MODULE_6__["ContactusPage"]
    }
];
var ContactusPageModule = /** @class */ (function () {
    function ContactusPageModule() {
    }
    ContactusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contactus_page__WEBPACK_IMPORTED_MODULE_6__["ContactusPage"]]
        })
    ], ContactusPageModule);
    return ContactusPageModule;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.page.html":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">\n      Contact us\n    </ion-title>\n    <ion-buttons slot=\"end\" class=\"heart-btn\">\n      <ion-icon name=\"heart\" (click)=\"addToFavourites('Contact us', 'contactus')\" *ngIf=\"isFav == false\">\n      </ion-icon>\n      <ion-icon name=\"heart\" (click)=\"removefavourites('contactus')\" *ngIf=\"isFav == true\" style=\"color: red\">\n      </ion-icon>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"none\">\n    <ion-item (click)=\"goTo('sendmessage')\">\n      <img src=\"assets/img/contact-us/mailing.png\" width=\"35\" />\n      <ion-label>Send us a message</ion-label>\n    </ion-item>\n    <ion-item (click)=\"goTo('findus')\">\n      <img src=\"assets/img/contact-us/find-us.png\" width=\"35\" />\n\n      <ion-label>Find us</ion-label>\n    </ion-item>\n    <ion-item (click)=\"goToURl('https://www.rsm.global/australia/')\">\n      <img src=\"assets/img/contact-us/website.png\" width=\"35\" />\n      <ion-label>Visit our website</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-col>\n        <div class=\"social-icons\">\n          <p class=\"social-title\">Connect with us</p>\n          <ion-icon class=\"social-icon\" src=\"assets/img/contact-us/linkedin.svg\"\n            (click)=\"openLinkedIn('rsm-australia')\"></ion-icon>\n          <ion-icon class=\"social-icon\" src=\"assets/img/contact-us/facebook.svg\"\n            (click)=\"openFacebook('1091977710817808')\"></ion-icon>\n          <ion-icon class=\"social-icon\" src=\"assets/img/contact-us/twitter.svg\" (click)=\"openTwitter('rsm_au')\">\n          </ion-icon>\n          <ion-icon class=\"social-icon\" src=\"assets/img/contact-us/instagram.svg\" (click)=\"openInstagram('rsm_au')\">\n          </ion-icon>\n          <ion-icon class=\"social-icon\" src=\"assets/img/contact-us/youtube.svg\"\n            (click)=\"openYoutube('UCgrHfT_epbTAaC55alX2Hzg')\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/contactus/contactus.page.scss":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #fafafa;\n}\n\nion-list {\n  padding: 10px;\n}\n\nion-item {\n  --ion-background-color: #fff;\n  --inner-padding-top: 15px !important;\n  --inner-padding-bottom: 15px !important;\n  padding: 1px;\n}\n\nion-label {\n  margin-left: 30px;\n  font-size: 22px !important;\n  color: #62666b !important;\n}\n\n.social-icons .social-title {\n  font-size: 22px;\n  color: #62666b !important;\n  margin: 1px;\n}\n\n.social-icons .social-icon {\n  margin-top: 25px;\n  margin-right: 10px;\n  width: 40px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL2NvbnRhY3R1cy9jb250YWN0dXMucGFnZS5zY3NzIiwic3JjL2FwcC9jb250YWN0dXMvY29udGFjdHVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0FDRUY7O0FEQUE7RUFDRSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUNHRjs7QURDRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNFSjs7QURBRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5pb24tbGlzdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24taXRlbSB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC0taW5uZXItcGFkZGluZy10b3A6IDE1cHggIWltcG9ydGFudDtcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxcHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM2MjY2NmIgIWltcG9ydGFudDtcbn1cblxuLnNvY2lhbC1pY29ucyB7XG4gIC5zb2NpYWwtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogIzYyNjY2YiAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMXB4O1xuICB9XG4gIC5zb2NpYWwtaWNvbiB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG59XG4iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMXB4O1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgZm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNjI2NjZiICFpbXBvcnRhbnQ7XG59XG5cbi5zb2NpYWwtaWNvbnMgLnNvY2lhbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICM2MjY2NmIgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxcHg7XG59XG4uc29jaWFsLWljb25zIC5zb2NpYWwtaWNvbiB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contactus/contactus.page.ts":
/*!*********************************************!*\
  !*** ./src/app/contactus/contactus.page.ts ***!
  \*********************************************/
/*! exports provided: ContactusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPage", function() { return ContactusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_app_availability_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/app-availability/ngx */ "./node_modules/@ionic-native/app-availability/ngx/index.js");
/* harmony import */ var _service_back_stack_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/back-stack.service */ "./src/app/service/back-stack.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");








var ContactusPage = /** @class */ (function () {
    function ContactusPage(toastCtrl, navCtrl, platform, iab, backStack, storageService, settingService, events, appAvailability) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.iab = iab;
        this.backStack = backStack;
        this.storageService = storageService;
        this.settingService = settingService;
        this.events = events;
        this.appAvailability = appAvailability;
        this.userid = '';
        this.events.subscribe('user:created', function () {
            _this.userid = _this.settingService.getUserId();
        });
    }
    ContactusPage.prototype.ngOnInit = function () {
        this.getfav();
    };
    ContactusPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 2000,
                            mode: 'md',
                            cssClass: 'customToast'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactusPage.prototype.goTo = function (url) {
        this.backStack.setBackStack(url, 'contactus');
        this.navCtrl.navigateRoot('/' + url);
    };
    ContactusPage.prototype.launchExternalApp = function (iosSchemaName, androidPackageName, appUrl, httpUrl, username) {
        var _this = this;
        var app;
        if (this.platform.is('ios')) {
            app = iosSchemaName;
        }
        // else if (this.platform.is('android')) {
        //   app = androidPackageName;
        // }
        else {
            var browser = this.iab.create(httpUrl + username, '_system', {
                location: this.platform.is('android') ? 'yes' : 'no',
                hideurlbar: 'yes',
                hidenavigationbuttons: 'yes',
                closebuttoncaption: 'Back'
            });
            return;
        }
        this.appAvailability.check(app).then(function (yes) {
            var browser = _this.iab.create(appUrl + username, '_system', {
                location: _this.platform.is('android') ? 'yes' : 'no',
                hideurlbar: 'yes',
                hidenavigationbuttons: 'yes',
                closebuttoncaption: 'Back'
            });
            console.log("browser success", browser);
        }, function (no) {
            var browser = _this.iab.create(httpUrl + username, '_system', {
                location: _this.platform.is('android') ? 'yes' : 'no',
                hideurlbar: 'yes',
                hidenavigationbuttons: 'yes',
                closebuttoncaption: 'Back'
            });
            console.log("browser error", browser);
        });
    };
    ContactusPage.prototype.openInstagram = function (username) {
        // this.launchExternalApp('instagram://', 'com.instagram.android', 'instagram://user?username=', 'https://www.instagram.com/', username);
        this.launchExternalApp('instagram://', 'com.instagram.android', 'http://instagram.com/_u/' + username, 'https://instagram.com/rsm_au?igshid=1dyzl5hmsj4jy', '');
    };
    ContactusPage.prototype.openTwitter = function (username) {
        this.launchExternalApp('twitter://', 'com.twitter.android', 'twitter://user?screen_name=', 'https://twitter.com/', username);
    };
    ContactusPage.prototype.openFacebook = function (username) {
        // this.launchExternalApp('fb://', 'com.facebook.katana', 'fb://page/', 'https://www.facebook.com/', username);
        this.launchExternalApp('fb://', 'com.facebook.katana', 'fb://facewebmodal/f?href=https://www.facebook.com/RSMAustralia.au', 'https://m.facebook.com/RSMAustralia.au/?refsrc=https%3A%2F%2Fm.facebook.com%2F1091977710817808&_rdr', '');
    };
    ContactusPage.prototype.openYoutube = function (username) {
        this.launchExternalApp('youtube://', 'com.google.android.youtube', 'https://www.youtube.com/channel/', 'https://www.youtube.com/channel/', username);
    };
    ContactusPage.prototype.openLinkedIn = function (username) {
        this.launchExternalApp('linkedin://', 'com.linkedin.android', 'https://www.linkedin.com/company/', 'https://www.linkedin.com/company/', username);
    };
    ContactusPage.prototype.goToURl = function (url) {
        var browser = this.iab.create(url, '_system', {
            location: this.platform.is('android') ? 'yes' : 'no',
            hideurlbar: 'yes',
            hidenavigationbuttons: 'yes',
            closebuttoncaption: 'Back'
        });
    };
    ContactusPage.prototype.addToFavourites = function (pagename, url) {
        var _this = this;
        this.isFav = true;
        this.storageService
            .addFavourites(pagename, url, 'phone-ringing.png', this.userid, 1)
            .then(function (val) {
            _this.presentToast('Added to favourites');
            _this.events.publish('fav:created', Date.now());
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ContactusPage.prototype.removefavourites = function (url) {
        var _this = this;
        this.storageService.removeFavourites(url, this.userid).then(function (res) {
            _this.getfav();
            _this.presentToast('Removed from favourites');
            _this.events.publish('fav:created', Date.now());
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    ContactusPage.prototype.getfav = function () {
        var _this = this;
        this.storageService
            .getfavourites('contactus', this.userid)
            .then(function (val) {
            if (val.rows.length > 0) {
                _this.isFav = true;
            }
            else {
                _this.isFav = false;
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ContactusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.page.html */ "./src/app/contactus/contactus.page.html"),
            styles: [__webpack_require__(/*! ./contactus.page.scss */ "./src/app/contactus/contactus.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"],
            _service_back_stack_service__WEBPACK_IMPORTED_MODULE_5__["BackStackService"],
            _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_7__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_native_app_availability_ngx__WEBPACK_IMPORTED_MODULE_4__["AppAvailability"]])
    ], ContactusPage);
    return ContactusPage;
}());



/***/ })

}]);
//# sourceMappingURL=contactus-contactus-module.js.map