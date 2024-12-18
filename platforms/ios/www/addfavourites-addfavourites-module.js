(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addfavourites-addfavourites-module"],{

/***/ "./src/app/addfavourites/addfavourites.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/addfavourites/addfavourites.module.ts ***!
  \*******************************************************/
/*! exports provided: AddfavouritesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddfavouritesPageModule", function() { return AddfavouritesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addfavourites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addfavourites.page */ "./src/app/addfavourites/addfavourites.page.ts");







var routes = [
    {
        path: '',
        component: _addfavourites_page__WEBPACK_IMPORTED_MODULE_6__["AddfavouritesPage"]
    }
];
var AddfavouritesPageModule = /** @class */ (function () {
    function AddfavouritesPageModule() {
    }
    AddfavouritesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_addfavourites_page__WEBPACK_IMPORTED_MODULE_6__["AddfavouritesPage"]]
        })
    ], AddfavouritesPageModule);
    return AddfavouritesPageModule;
}());



/***/ }),

/***/ "./src/app/addfavourites/addfavourites.page.html":
/*!*******************************************************!*\
  !*** ./src/app/addfavourites/addfavourites.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n    </ion-buttons>\n    <ion-title>\n      FAVOURITE LIST\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row *ngIf=\"favitems.length\">\n      <ion-col size=\"6\" *ngFor=\"let listdata of favitems ;let i = index \">\n        <div class=\"abc\" (click)=\"goTo(listdata.url)\" (press)=\"pressed($event)\">\n          <p style=\"padding-top: 17px;\">{{listdata.name}}</p><br>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"!favitems.length\" class=\"nodata\">\n      No data found!\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/addfavourites/addfavourites.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/addfavourites/addfavourites.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".abc {\n  align-self: center !important;\n  background-color: antiquewhite;\n  height: 50px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL2FkZGZhdm91cml0ZXMvYWRkZmF2b3VyaXRlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZGZhdm91cml0ZXMvYWRkZmF2b3VyaXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZGRmYXZvdXJpdGVzL2FkZGZhdm91cml0ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFiY3tcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIuYWJjIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/addfavourites/addfavourites.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/addfavourites/addfavourites.page.ts ***!
  \*****************************************************/
/*! exports provided: AddfavouritesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddfavouritesPage", function() { return AddfavouritesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");






var AddfavouritesPage = /** @class */ (function () {
    function AddfavouritesPage(navCtrl, storageService, settingService, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.settingService = settingService;
        this.events = events;
        this.list = [];
        this.favitems = [];
        this.events.subscribe('user:created', function (time) {
            _this.userid = _this.settingService.getUserId();
            _this.viewFav();
        });
        this.events.subscribe('fav:created', function (time) {
            _this.viewFav();
        });
    }
    AddfavouritesPage.prototype.ngOnInit = function () {
        this.userid = this.settingService.getUserId();
        this.viewFav();
    };
    AddfavouritesPage.prototype.viewFav = function () {
        var _this = this;
        this.favitems = [];
        this.storageService
            .favouritesList(this.userid)
            .then(function (res) {
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.favitems.push({
                        id: res.rows.item(i).id,
                        name: res.rows.item(i).name,
                        url: res.rows.item(i).url,
                        icon: res.rows.item(i).icon,
                    });
                }
            }
            else {
                _this.favitems = [];
            }
        })
            .catch(function (e) {
            _this.favitems = [];
            console.log(e);
        });
    };
    AddfavouritesPage.prototype.goTo = function (url) {
        this.navCtrl.navigateRoot("/" + url);
    };
    AddfavouritesPage.prototype.pressed = function (event) {
        console.log("presses");
        console.log(event);
    };
    AddfavouritesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-addfavourites",
            template: __webpack_require__(/*! ./addfavourites.page.html */ "./src/app/addfavourites/addfavourites.page.html"),
            styles: [__webpack_require__(/*! ./addfavourites.page.scss */ "./src/app/addfavourites/addfavourites.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_4__["PageTrack"])("Favourites Screen"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]])
    ], AddfavouritesPage);
    return AddfavouritesPage;
}());



/***/ })

}]);
//# sourceMappingURL=addfavourites-addfavourites-module.js.map