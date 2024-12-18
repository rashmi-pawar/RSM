(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calculator-calculator-module"],{

/***/ "./src/app/calculator/calculator.module.ts":
/*!*************************************************!*\
  !*** ./src/app/calculator/calculator.module.ts ***!
  \*************************************************/
/*! exports provided: CalculatorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorPageModule", function() { return CalculatorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _calculator_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculator.page */ "./src/app/calculator/calculator.page.ts");







var routes = [
    {
        path: '',
        component: _calculator_page__WEBPACK_IMPORTED_MODULE_6__["CalculatorPage"]
    }
];
var CalculatorPageModule = /** @class */ (function () {
    function CalculatorPageModule() {
    }
    CalculatorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_calculator_page__WEBPACK_IMPORTED_MODULE_6__["CalculatorPage"]]
        })
    ], CalculatorPageModule);
    return CalculatorPageModule;
}());



/***/ }),

/***/ "./src/app/calculator/calculator.page.html":
/*!*************************************************!*\
  !*** ./src/app/calculator/calculator.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"{{back}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">\n      Calculators\n    </ion-title>\n    <ion-buttons slot=\"end\" class=\"heart-btn\">\n      <ion-icon name=\"heart\" (click)=\"addToFavourites('Calculators', 'calculator')\" *ngIf=\"isFav == false\"></ion-icon>\n      <ion-icon name=\"heart\" (click)=\"removefavourites('Calculators', 'calculator')\" *ngIf=\"isFav == true\"\n        style=\"color: red\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"calculators?.length\">\n    <ion-list lines=\"none\" class=\"calculate-list\">\n      <ion-item *ngFor=\"let calculator of calculators\" (click)=\"gotourl(calculator)\">\n        <ion-img src=\"assets/img/calculator/{{ calculator?.id }}.png\" slot=\"start\"></ion-img>\n        <ion-label text-wrap>{{ calculator?.title }}</ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/calculator/calculator.page.scss":
/*!*************************************************!*\
  !*** ./src/app/calculator/calculator.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #fafafa;\n}\n\nion-list {\n  padding: 10px;\n}\n\nion-item {\n  --ion-background-color: #fff;\n  --inner-padding-top: 15px !important;\n  --inner-padding-bottom: 15px !important;\n  padding: 1px;\n}\n\nion-img {\n  width: 40px;\n  height: 40px;\n}\n\nion-label {\n  font-size: 18px !important;\n  color: #62666b !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtBQ0VGOztBRENBO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNHRjs7QURBQTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5pb24tbGlzdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLS1pbm5lci1wYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDFweDtcbn1cbmlvbi1pbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM2MjY2NmIgIWltcG9ydGFudDtcbn1cblxuXG4iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMXB4O1xufVxuXG5pb24taW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNjI2NjZiICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/calculator/calculator.page.ts":
/*!***********************************************!*\
  !*** ./src/app/calculator/calculator.page.ts ***!
  \***********************************************/
/*! exports provided: CalculatorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorPage", function() { return CalculatorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");
/* harmony import */ var src_app_service_back_stack_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/back-stack.service */ "./src/app/service/back-stack.service.ts");








var CalculatorPage = /** @class */ (function () {
    function CalculatorPage(iab, toastCtrl, api, events, platform, storageService, backStack, settingService) {
        var _this = this;
        this.iab = iab;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.events = events;
        this.platform = platform;
        this.storageService = storageService;
        this.backStack = backStack;
        this.settingService = settingService;
        this.calculators = [];
        this.isFav = false;
        this.userid = '0';
        this.events.subscribe('user:created', function (time) {
            _this.userid = _this.settingService.getUserId();
            _this.getfav();
        });
        this.back = this.backStack.getBackStack('calculator');
    }
    CalculatorPage.prototype.ngOnInit = function () {
        var _this = this;
        this.api.calculatorlist().subscribe(function (res) {
            _this.calculators = res.data;
        });
        this.userid = this.settingService.getUserId();
        this.getfav();
    };
    CalculatorPage.prototype.gotourl = function (calculator) {
        this.iab.create(calculator.link, '_blank', {
            location: this.platform.is('android') ? 'yes' : 'no',
            hideurlbar: 'yes',
            hidenavigationbuttons: 'yes',
            closebuttoncaption: 'Back'
        });
    };
    CalculatorPage.prototype.getfav = function () {
        var _this = this;
        this.storageService
            .getfavourites('calculator', this.userid)
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
    CalculatorPage.prototype.addToFavourites = function (pagename, url) {
        var _this = this;
        this.isFav = true;
        this.storageService
            .addFavourites(pagename, url, 'calculator.png', this.userid, 1)
            .then(function (val) {
            _this.presentToast('Added to favourites');
            _this.events.publish('fav:created', Date.now());
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    CalculatorPage.prototype.removefavourites = function (pagename, url) {
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
    CalculatorPage.prototype.presentToast = function (msg) {
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
    CalculatorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(/*! ./calculator.page.html */ "./src/app/calculator/calculator.page.html"),
            styles: [__webpack_require__(/*! ./calculator.page.scss */ "./src/app/calculator/calculator.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            src_app_service_back_stack_service__WEBPACK_IMPORTED_MODULE_7__["BackStackService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_6__["SettingService"]])
    ], CalculatorPage);
    return CalculatorPage;
}());



/***/ })

}]);
//# sourceMappingURL=calculator-calculator-module.js.map