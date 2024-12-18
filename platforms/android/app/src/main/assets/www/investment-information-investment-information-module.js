(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["investment-information-investment-information-module"],{

/***/ "./src/app/investment-information/investment-information.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/investment-information/investment-information.module.ts ***!
  \*************************************************************************/
/*! exports provided: InvestmentInformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestmentInformationPageModule", function() { return InvestmentInformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _investment_information_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./investment-information.page */ "./src/app/investment-information/investment-information.page.ts");







var routes = [
    {
        path: '',
        component: _investment_information_page__WEBPACK_IMPORTED_MODULE_6__["InvestmentInformationPage"]
    }
];
var InvestmentInformationPageModule = /** @class */ (function () {
    function InvestmentInformationPageModule() {
    }
    InvestmentInformationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_investment_information_page__WEBPACK_IMPORTED_MODULE_6__["InvestmentInformationPage"]]
        })
    ], InvestmentInformationPageModule);
    return InvestmentInformationPageModule;
}());



/***/ }),

/***/ "./src/app/investment-information/investment-information.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/investment-information/investment-information.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"{{back}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">\n      Investment Information\n    </ion-title>\n    <ion-buttons slot=\"end\" class=\"heart-btn\">\n      <ion-icon name=\"heart\" (click)=\"addToFavourites('Investment Information', 'investment-information')\" *ngIf=\"isFav == false\">\n      </ion-icon>\n      <ion-icon name=\"heart\" (click)=\"removefavourites('investment-information')\" *ngIf=\"isFav == true\" style=\"color: red\">\n      </ion-icon>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"investments?.length\">\n    <ion-list lines=\"none\" class=\"calculate-list\">\n      <ion-item *ngFor=\"let tax of investments\" (click)=\"gotourl(tax)\">\n        <ion-img src=\"assets/img/tax/{{ tax?.id }}.png\" slot=\"start\"></ion-img>\n        <ion-label>{{ tax?.title }}</ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  <p *ngIf=\"investments?.length < 1 && isProgress\">No data found</p>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/investment-information/investment-information.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/investment-information/investment-information.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #fafafa;\n}\n\nion-list {\n  padding: 10px;\n}\n\nion-item {\n  --ion-background-color: #fff;\n  --inner-padding-top: 15px !important;\n  --inner-padding-bottom: 15px !important;\n  padding: 2px;\n}\n\nion-img {\n  width: 40px;\n  height: 40px;\n}\n\nion-label {\n  font-size: 18px !important;\n  color: #62666b !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL2ludmVzdG1lbnQtaW5mb3JtYXRpb24vaW52ZXN0bWVudC1pbmZvcm1hdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2ludmVzdG1lbnQtaW5mb3JtYXRpb24vaW52ZXN0bWVudC1pbmZvcm1hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2ludmVzdG1lbnQtaW5mb3JtYXRpb24vaW52ZXN0bWVudC1pbmZvcm1hdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4O1xufVxuXG5pb24taW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNjI2NjZiICFpbXBvcnRhbnQ7XG59XG4iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4O1xufVxuXG5pb24taW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNjI2NjZiICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/investment-information/investment-information.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/investment-information/investment-information.page.ts ***!
  \***********************************************************************/
/*! exports provided: InvestmentInformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestmentInformationPage", function() { return InvestmentInformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_back_stack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/back-stack.service */ "./src/app/service/back-stack.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");








var InvestmentInformationPage = /** @class */ (function () {
    function InvestmentInformationPage(iab, backStack, navCtrl, apiService, platform, storageService, settingService, events, toastCtrl) {
        var _this = this;
        this.iab = iab;
        this.backStack = backStack;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.platform = platform;
        this.storageService = storageService;
        this.settingService = settingService;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.investments = [];
        this.isProgress = false;
        this.userid = '';
        this.back = this.backStack.getBackStack('investment-information');
        this.events.subscribe('user:created', function () {
            _this.userid = _this.settingService.getUserId();
        });
    }
    InvestmentInformationPage.prototype.gotourl = function (calculator) {
        this.iab.create(calculator.link, '_blank', {
            location: this.platform.is('android') ? 'yes' : 'no',
            hideurlbar: 'yes',
            hidenavigationbuttons: 'yes',
            closebuttoncaption: 'Back'
        });
    };
    InvestmentInformationPage.prototype.ngOnInit = function () {
        this.investmentInformationList();
        this.getfav();
    };
    InvestmentInformationPage.prototype.investmentInformationList = function () {
        var _this = this;
        this.isProgress = false;
        this.apiService.investmentsInformationList().subscribe(function (result) {
            _this.isProgress = true;
            if (result.status) {
                _this.investments = result.data;
            }
        });
    };
    InvestmentInformationPage.prototype.addToFavourites = function (pagename, url) {
        var _this = this;
        this.isFav = true;
        this.storageService
            .addFavourites(pagename, url, 'payment.png', this.userid, 1)
            .then(function (val) {
            _this.presentToast('Added to favourites');
            _this.events.publish('fav:created', Date.now());
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    InvestmentInformationPage.prototype.removefavourites = function (url) {
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
    InvestmentInformationPage.prototype.getfav = function () {
        var _this = this;
        this.storageService
            .getfavourites('investment-information', this.userid)
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
    InvestmentInformationPage.prototype.presentToast = function (msg) {
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
    InvestmentInformationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-investment-information',
            template: __webpack_require__(/*! ./investment-information.page.html */ "./src/app/investment-information/investment-information.page.html"),
            styles: [__webpack_require__(/*! ./investment-information.page.scss */ "./src/app/investment-information/investment-information.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"],
            _service_back_stack_service__WEBPACK_IMPORTED_MODULE_2__["BackStackService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_7__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], InvestmentInformationPage);
    return InvestmentInformationPage;
}());



/***/ })

}]);
//# sourceMappingURL=investment-information-investment-information-module.js.map