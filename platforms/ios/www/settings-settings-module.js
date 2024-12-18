(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");







var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.page.html":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <ion-item lines=\"none\" no-padding>\n      <ion-icon name=\"locate\" color=\"primary\"> </ion-icon>\n      <ion-label style=\"margin-left: 10px;\" (click)=\"goTo('triphistory')\">Trip History</ion-label>\n      <ion-icon color=\"primary\" name=\"arrow-forward\" (click)=\"goTo('triphistory')\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"none\" no-padding>\n      <ion-icon name=\"locate\" color=\"primary\"> </ion-icon>\n      <ion-label style=\"margin-left: 10px;\" (click)=\"goTo('tripsetting')\">Trip Settings</ion-label>\n      <ion-icon color=\"primary\" name=\"arrow-forward\" (click)=\"goTo('tripsetting')\"></ion-icon>\n    </ion-item>\n    <ion-item *ngIf=\"userData != undefined && userData\" lines=\"none\" no-padding>\n      <ion-icon color=\"primary\" name=\"create\"></ion-icon>\n      <ion-label style=\"margin-left: 10px;\" (click)=\"goTo('updateprofile')\">Edit Profile</ion-label>\n      <ion-icon color=\"primary\" name=\"arrow-forward\" (click)=\"goTo('updateprofile')\"></ion-icon>\n    </ion-item>\n\n    <ion-item *ngIf=\"userData != undefined && userData\" lines=\"none\" no-padding>\n      <ion-icon color=\"primary\" name=\"cash\"></ion-icon>\n      <ion-label style=\"margin-left: 10px;\" (click)=\"goTo('subscription')\">Subscription</ion-label>\n      <ion-icon color=\"primary\" name=\"arrow-forward\" (click)=\"goTo('subscription')\"></ion-icon>\n    </ion-item>\n    <ion-item *ngIf=\"buttonItems.name == 'Logout'\" lines=\"none\" no-padding>\n      <ion-icon color=\"primary\" name=\"person\"></ion-icon>\n      <ion-label style=\"margin-left: 10px;\" (click)=\"goTo('updatepassword')\">Change Password</ion-label>\n      <ion-icon color=\"primary\" name=\"arrow-forward\" (click)=\"goTo('updatepassword')\"></ion-icon>\n    </ion-item>\n    <ion-item *ngIf=\"buttonItems.name == 'Logout'\" lines=\"none\" no-padding>\n      <ion-icon color=\"primary\" name=\"open\"></ion-icon>\n      <ion-label style=\"margin-left: 10px;\" (click)=\"logout()\">Logout</ion-label>\n      <ion-icon color=\"primary\" name=\"arrow-forward\" (click)=\"logout()\"></ion-icon>\n    </ion-item>\n    <ion-item *ngIf=\"buttonItems.name == 'Login'\" lines=\"none\" no-padding>\n      <ion-icon color=\"primary\" name=\"person\"></ion-icon>\n      <ion-label style=\"margin-left: 10px;\" (click)=\"goTo('login')\">Login</ion-label>\n      <ion-icon color=\"primary\" name=\"arrow-forward\" (click)=\"goTo('login')\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");





var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, events, toastCtrl, settingService, menuCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.settingService = settingService;
        this.menuCtrl = menuCtrl;
        this.buttonItems = {};
        this.menuCtrl.enable(false);
        this.userData = this.settingService.getUserData();
        var that = this;
        if (this.userData !== undefined && this.userData) {
            that.buttonItems = {
                name: 'Logout',
                icon: 'person'
            };
        }
        else {
            that.buttonItems = {
                name: 'Login',
                icon: 'person'
            };
        }
        events.subscribe('user:created', function (type) {
            _this.userData = _this.settingService.getUserData();
            if (type === 'logout') {
                that.buttonItems = {
                    name: 'Login',
                    icon: 'person'
                };
            }
            else {
                that.buttonItems = {
                    name: 'Logout',
                    icon: 'person'
                };
            }
        });
    }
    SettingsPage.prototype.ngOnInit = function () { };
    SettingsPage.prototype.goTo = function (path) {
        this.navCtrl.navigateRoot('/' + path);
    };
    SettingsPage.prototype.presentToast = function (msg) {
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
    SettingsPage.prototype.logout = function () {
        this.settingService.clear();
        this.events.publish('user:created', 'logout');
        this.presentToast('Logout Successfully');
        this.navCtrl.navigateRoot('/tabs/dashboard');
    };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.page.html */ "./src/app/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_3__["PageTrack"])('Settings Screen'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map