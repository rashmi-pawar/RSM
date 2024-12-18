(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favourite-favourite-module"],{

/***/ "./src/app/favourite/favourite.module.ts":
/*!***********************************************!*\
  !*** ./src/app/favourite/favourite.module.ts ***!
  \***********************************************/
/*! exports provided: FavouritePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritePageModule", function() { return FavouritePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _favourite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favourite.page */ "./src/app/favourite/favourite.page.ts");







var routes = [
    {
        path: '',
        component: _favourite_page__WEBPACK_IMPORTED_MODULE_6__["FavouritePage"]
    }
];
var FavouritePageModule = /** @class */ (function () {
    function FavouritePageModule() {
    }
    FavouritePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_favourite_page__WEBPACK_IMPORTED_MODULE_6__["FavouritePage"]]
        })
    ], FavouritePageModule);
    return FavouritePageModule;
}());



/***/ }),

/***/ "./src/app/favourite/favourite.page.html":
/*!***********************************************!*\
  !*** ./src/app/favourite/favourite.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"{{back}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">\n      My Favourites\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"favourites?.length\">\n    <ion-list lines=\"none\" class=\"calculate-list\" button detail=\"true\" detail-icon=\"ios-trash\">\n      <ion-item *ngFor=\"let favourite of favourites\">\n        <ion-img slot=\"start\" [src]=\"favourite.icon\" (click)=\"gotourl(favourite)\" (ionError)=\"onImageError(favourite)\"></ion-img>\n        <!-- <ion-img *ngIf=\"favourite.error\" slot=\"start\" src=\"assets/img/insight/default-rss.png\"></ion-img> -->\n        <ion-label (click)=\"gotourl(favourite)\">{{ favourite?.name }}</ion-label>\n        <ion-icon name=\"ios-trash\" (click)=\"removefavourites(favourite.url)\"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </div>\n  <p *ngIf=\"favourites?.length < 1 && isProgress\" style=\"padding: 20px;\">No data found</p>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/favourite/favourite.page.scss":
/*!***********************************************!*\
  !*** ./src/app/favourite/favourite.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #fafafa;\n}\n\nion-list {\n  padding: 10px;\n}\n\nion-item {\n  --ion-background-color: #fff;\n  --inner-padding-top: 15px !important;\n  --inner-padding-bottom: 15px !important;\n  padding: 2px;\n}\n\nion-img {\n  width: 40px;\n  height: 40px;\n}\n\nion-label {\n  font-size: 18px !important;\n  color: #62666b !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL2Zhdm91cml0ZS9mYXZvdXJpdGUucGFnZS5zY3NzIiwic3JjL2FwcC9mYXZvdXJpdGUvZmF2b3VyaXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7RUFDQSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZmF2b3VyaXRlL2Zhdm91cml0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4O1xufVxuXG5pb24taW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNjI2NjZiICFpbXBvcnRhbnQ7XG59XG4iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4O1xufVxuXG5pb24taW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNjI2NjZiICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/favourite/favourite.page.ts":
/*!*********************************************!*\
  !*** ./src/app/favourite/favourite.page.ts ***!
  \*********************************************/
/*! exports provided: FavouritePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritePage", function() { return FavouritePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_back_stack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/back-stack.service */ "./src/app/service/back-stack.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");







var FavouritePage = /** @class */ (function () {
    function FavouritePage(backStack, navCtrl, events, platform, storageService, settingService, apiService, toastCtrl) {
        var _this = this;
        this.backStack = backStack;
        this.navCtrl = navCtrl;
        this.events = events;
        this.platform = platform;
        this.storageService = storageService;
        this.settingService = settingService;
        this.apiService = apiService;
        this.toastCtrl = toastCtrl;
        this.feeds = [];
        this.isProgress = false;
        this.favourites = [];
        this.userid = "";
        this.back = this.backStack.getBackStack('favourite');
        this.events.subscribe("user:created", function (time) {
            _this.userid = _this.settingService.getUserId();
            _this.getfavourites();
        });
        this.events.subscribe("fav:created", function (time) {
            _this.platform.ready().then(function (readySource) {
                _this.getfavourites();
            });
        });
    }
    FavouritePage.prototype.ngOnInit = function () {
        this.rssFeedList();
        this.getfavourites();
    };
    FavouritePage.prototype.getfavourites = function () {
        var _this = this;
        this.favourites = [];
        this.isProgress = false;
        this.storageService
            .favouritesList(this.userid)
            .then(function (res) {
            console.log(res.rows);
            _this.isProgress = true;
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.favourites.push({
                        name: res.rows.item(i).name,
                        url: res.rows.item(i).url,
                        icon: "assets/img/home/favourites/" + res.rows.item(i).icon,
                    });
                }
                console.log(_this.favourites);
            }
            else {
                // this.defaultfav();
            }
        })
            .catch(function (e) {
            // this.defaultfav();
            _this.isProgress = true;
            console.log(e);
        });
    };
    FavouritePage.prototype.gotourl = function (data) {
        this.navCtrl.navigateForward(data.url);
    };
    FavouritePage.prototype.removefavourites = function (url) {
        var _this = this;
        console.log(url);
        this.storageService.removeFavourites(url, this.userid).then(function (res) {
            _this.getfavourites();
            _this.presentToast('Removed from favourites');
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    FavouritePage.prototype.presentToast = function (msg) {
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
    FavouritePage.prototype.rssFeedList = function () {
        var _this = this;
        this.isProgress = false;
        this.apiService.getRSSFeedList().subscribe(function (result) {
            _this.isProgress = true;
            if (result.status) {
                _this.feeds = result.data;
            }
        });
    };
    FavouritePage.prototype.onImageError = function (feed) {
        feed.error = true;
    };
    FavouritePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favourite',
            template: __webpack_require__(/*! ./favourite.page.html */ "./src/app/favourite/favourite.page.html"),
            styles: [__webpack_require__(/*! ./favourite.page.scss */ "./src/app/favourite/favourite.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_back_stack_service__WEBPACK_IMPORTED_MODULE_2__["BackStackService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_6__["SettingService"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], FavouritePage);
    return FavouritePage;
}());



/***/ })

}]);
//# sourceMappingURL=favourite-favourite-module.js.map