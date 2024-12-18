(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tax-information-tax-information-module"],{

/***/ "./src/app/tax-information/tax-information.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/tax-information/tax-information.module.ts ***!
  \***********************************************************/
/*! exports provided: TaxInformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxInformationPageModule", function() { return TaxInformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tax_information_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tax-information.page */ "./src/app/tax-information/tax-information.page.ts");







var routes = [
    {
        path: '',
        component: _tax_information_page__WEBPACK_IMPORTED_MODULE_6__["TaxInformationPage"]
    }
];
var TaxInformationPageModule = /** @class */ (function () {
    function TaxInformationPageModule() {
    }
    TaxInformationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tax_information_page__WEBPACK_IMPORTED_MODULE_6__["TaxInformationPage"]]
        })
    ], TaxInformationPageModule);
    return TaxInformationPageModule;
}());



/***/ }),

/***/ "./src/app/tax-information/tax-information.page.html":
/*!***********************************************************!*\
  !*** ./src/app/tax-information/tax-information.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"{{back}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">\n      Important Tax Information\n    </ion-title>\n    <ion-buttons slot=\"end\" class=\"heart-btn\">\n      <ion-icon name=\"heart\" (click)=\"addToFavourites('Important Tax Information', 'tax-information')\" *ngIf=\"isFav == false\">\n      </ion-icon>\n      <ion-icon name=\"heart\" (click)=\"removefavourites('tax-information')\" *ngIf=\"isFav == true\" style=\"color: red\">\n      </ion-icon>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"taxes?.length\">\n    <ion-list lines=\"none\" class=\"calculate-list\">\n      <ion-item *ngFor=\"let tax of taxes\" (click)=\"gotourl(tax)\">\n        <ion-img src=\"assets/img/tax/{{ tax?.id }}.png\" slot=\"start\"></ion-img>\n        <ion-label>{{ tax?.title }}</ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  <p *ngIf=\"taxes?.length < 1 && isProgress\">No data found</p>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tax-information/tax-information.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/tax-information/tax-information.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #fafafa;\n}\n\nion-list {\n  padding: 10px;\n}\n\nion-item {\n  --ion-background-color: #fff;\n  --inner-padding-top: 15px !important;\n  --inner-padding-bottom: 15px !important;\n  padding: 2px;\n}\n\nion-img {\n  width: 40px;\n  height: 40px;\n}\n\nion-label {\n  font-size: 18px !important;\n  color: #62666b !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3RheC1pbmZvcm1hdGlvbi90YXgtaW5mb3JtYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC90YXgtaW5mb3JtYXRpb24vdGF4LWluZm9ybWF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7RUFDQSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGF4LWluZm9ybWF0aW9uL3RheC1pbmZvcm1hdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4O1xufVxuXG5pb24taW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNjI2NjZiICFpbXBvcnRhbnQ7XG59XG4iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4O1xufVxuXG5pb24taW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNjI2NjZiICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/tax-information/tax-information.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/tax-information/tax-information.page.ts ***!
  \*********************************************************/
/*! exports provided: TaxInformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxInformationPage", function() { return TaxInformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_back_stack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/back-stack.service */ "./src/app/service/back-stack.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");







var TaxInformationPage = /** @class */ (function () {
    function TaxInformationPage(backStack, navCtrl, apiService, storageService, settingService, events, toastCtrl) {
        var _this = this;
        this.backStack = backStack;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.storageService = storageService;
        this.settingService = settingService;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.taxes = [];
        this.isProgress = false;
        this.userid = '';
        this.back = this.backStack.getBackStack('tax-information');
        this.events.subscribe('user:created', function () {
            _this.userid = _this.settingService.getUserId();
        });
    }
    TaxInformationPage.prototype.gotourl = function (data) {
        var navigationExtras = {
            queryParams: {
                title: data.title,
                id: data.id
            }
        };
        this.navCtrl.navigateForward('/tax-information-detail', navigationExtras);
    };
    TaxInformationPage.prototype.ngOnInit = function () {
        this.taxInformationList();
        this.getfav();
    };
    TaxInformationPage.prototype.taxInformationList = function () {
        var _this = this;
        this.isProgress = false;
        this.apiService.taxInformationList().subscribe(function (result) {
            _this.isProgress = true;
            if (result.status) {
                _this.taxes = result.data;
            }
        });
    };
    TaxInformationPage.prototype.addToFavourites = function (pagename, url) {
        var _this = this;
        this.isFav = true;
        this.storageService
            .addFavourites(pagename, url, 'tax.png', this.userid, 1)
            .then(function (val) {
            _this.presentToast('Added to favourites');
            _this.events.publish('fav:created', Date.now());
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    TaxInformationPage.prototype.removefavourites = function (url) {
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
    TaxInformationPage.prototype.getfav = function () {
        var _this = this;
        this.storageService
            .getfavourites('tax-information', this.userid)
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
    TaxInformationPage.prototype.presentToast = function (msg) {
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
    TaxInformationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tax-information',
            template: __webpack_require__(/*! ./tax-information.page.html */ "./src/app/tax-information/tax-information.page.html"),
            styles: [__webpack_require__(/*! ./tax-information.page.scss */ "./src/app/tax-information/tax-information.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_back_stack_service__WEBPACK_IMPORTED_MODULE_2__["BackStackService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_6__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], TaxInformationPage);
    return TaxInformationPage;
}());



/***/ })

}]);
//# sourceMappingURL=tax-information-tax-information-module.js.map