(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tracking-tracking-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/filter.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/filter */ "./node_modules/rxjs-compat/_esm5/operator/filter.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.filter = _operator_filter__WEBPACK_IMPORTED_MODULE_1__["filter"];
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/filter.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/filter.js ***!
  \***********************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function filter(predicate, thisArg) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(predicate, thisArg)(this);
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./src/app/tracking/tracking.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tracking/tracking.module.ts ***!
  \*********************************************/
/*! exports provided: TrackingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingPageModule", function() { return TrackingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tracking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tracking.page */ "./src/app/tracking/tracking.page.ts");







var routes = [
    {
        path: '',
        component: _tracking_page__WEBPACK_IMPORTED_MODULE_6__["TrackingPage"]
    }
];
var TrackingPageModule = /** @class */ (function () {
    function TrackingPageModule() {
    }
    TrackingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tracking_page__WEBPACK_IMPORTED_MODULE_6__["TrackingPage"]]
        })
    ], TrackingPageModule);
    return TrackingPageModule;
}());



/***/ }),

/***/ "./src/app/tracking/tracking.page.html":
/*!*********************************************!*\
  !*** ./src/app/tracking/tracking.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Live Tracking </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-button color=\"success\" (click)=\"startLiveTracking()\" mode=\"ios\">\n    <ion-icon name='pin' style=\"margin-right: 5px;\"></ion-icon> Start\n  </ion-button>\n  <ion-button color=\"danger\" (click)=\"stopLiveTracking()\" mode=\"ios\">\n    <ion-icon name='pin' style=\"margin-right: 5px;\"></ion-icon>Stop\n  </ion-button>\n  <p *ngIf=\"distance !=''\"><b>Distance : </b> {{distance}}</p>\n</ion-content>"

/***/ }),

/***/ "./src/app/tracking/tracking.page.scss":
/*!*********************************************!*\
  !*** ./src/app/tracking/tracking.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWNraW5nL3RyYWNraW5nLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tracking/tracking.page.ts":
/*!*******************************************!*\
  !*** ./src/app/tracking/tracking.page.ts ***!
  \*******************************************/
/*! exports provided: TrackingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingPage", function() { return TrackingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");






var TrackingPage = /** @class */ (function () {
    function TrackingPage(toastCtrl, geolocation) {
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.path = [];
        this.distance = "";
        this.path = [];
    }
    TrackingPage.prototype.ngOnInit = function () { };
    TrackingPage.prototype.presentToast = function (msg) {
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
    TrackingPage.prototype.startLiveTracking = function () {
        var _this = this;
        this.path = [];
        this.geolocation
            .getCurrentPosition()
            .then(function (resp) {
            _this.presentToast("Start tracking");
            _this.path.push({
                lat: resp.coords.latitude,
                lng: resp.coords.longitude
            });
        })
            .catch(function (error) {
            console.log("Error getting location", error);
        });
        var options = {
            frequency: 3000,
            enableHighAccuracy: true
        };
        this.watch = this.geolocation
            .watchPosition(options)
            .subscribe(function (position) {
            _this.path.push({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        });
    };
    TrackingPage.prototype.stopLiveTracking = function () {
        var total = 0;
        for (var i = 0; i < this.path.length - 1; i++) {
            var pos1 = new google.maps.LatLng(this.path[i].lat, this.path[i].lng);
            var pos2 = new google.maps.LatLng(this.path[i + 1].lat, this.path[i + 1].lng);
            total += google.maps.geometry.spherical.computeDistanceBetween(pos1, pos2);
            this.distance = (total / 1609.34).toFixed(1) + " mi";
        }
        this.watch.unsubscribe();
        navigator.geolocation.clearWatch(this.watch);
        this.presentToast("Stop tracking");
    };
    TrackingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-tracking",
            template: __webpack_require__(/*! ./tracking.page.html */ "./src/app/tracking/tracking.page.html"),
            styles: [__webpack_require__(/*! ./tracking.page.scss */ "./src/app/tracking/tracking.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_4__["PageTrack"])("Tracking Screen"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]])
    ], TrackingPage);
    return TrackingPage;
}());



/***/ })

}]);
//# sourceMappingURL=tracking-tracking-module.js.map