(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trips-trips-module"],{

/***/ "./src/app/trips/trips.module.ts":
/*!***************************************!*\
  !*** ./src/app/trips/trips.module.ts ***!
  \***************************************/
/*! exports provided: TripsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsPageModule", function() { return TripsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trips_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trips.page */ "./src/app/trips/trips.page.ts");







var routes = [
    {
        path: '',
        component: _trips_page__WEBPACK_IMPORTED_MODULE_6__["TripsPage"]
    }
];
var TripsPageModule = /** @class */ (function () {
    function TripsPageModule() {
    }
    TripsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_trips_page__WEBPACK_IMPORTED_MODULE_6__["TripsPage"]]
        })
    ], TripsPageModule);
    return TripsPageModule;
}());



/***/ }),

/***/ "./src/app/trips/trips.page.html":
/*!***************************************!*\
  !*** ./src/app/trips/trips.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title mode=\"md\">Trips</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf=\"items?.length\">\n\n    <div class=\"list-item\" *ngFor=\"let list of items\">\n      <ion-row>\n        <ion-col size=\"8\" no-padding>\n          <p>\n            <ion-icon name=\"pin\"></ion-icon> &nbsp; Distance :\n          </p>\n        </ion-col>\n        <ion-col size=\"4\" no-padding>\n          <p class=\"list-text\">{{list?.distance}} {{list?.unit}}</p>\n        </ion-col>\n        <ion-col size=\"8\" no-padding>\n          <p>\n            <ion-icon name=\"car\"></ion-icon> &nbsp; Vehicle Name :\n          </p>\n        </ion-col>\n        <ion-col size=\"4\" no-padding>\n          <p class=\"list-text\">{{list?.vehicleType}}</p>\n        </ion-col>\n        <ion-col size=\"8\" no-padding>\n          <p>\n            <ion-icon name=\"calendar\"></ion-icon> &nbsp; Date :\n          </p>\n        </ion-col>\n        <ion-col size=\"4\" no-padding>\n          <p class=\"list-text\">{{list?.date | date: 'dd/MM/yyyy'}}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div class=\"list-item\" *ngIf=\"!items.length\" class=\"nodata\"> No data found</div>\n\n  <ion-button (click)=\"export()\" color=\"primary\">Export Trips</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/trips/trips.page.scss":
/*!***************************************!*\
  !*** ./src/app/trips/trips.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-item {\n  box-shadow: 0px 0px 4px 1px #efebeb;\n  margin-bottom: 20px;\n  padding: 10px;\n}\n\n.list-item p {\n  margin: 0px;\n  line-height: 22px;\n  font-size: 14px;\n  color: #1b304c;\n}\n\n.text-icon {\n  font-size: 18px;\n  margin-right: 15px;\n  border-radius: 50%;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3RyaXBzL3RyaXBzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdHJpcHMvdHJpcHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNBSjs7QURFQTtFQUVJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFFSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3RyaXBzL3RyaXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWl0ZW1cbntcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAxcHggI2VmZWJlYjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4ubGlzdC1pdGVtIHBcbntcbiAgICBtYXJnaW46IDBweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMxYjMwNGM7XG59XG5cbi50ZXh0LWljb25cbntcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiAycHg7XG59IiwiLmxpc3QtaXRlbSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDFweCAjZWZlYmViO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubGlzdC1pdGVtIHAge1xuICBtYXJnaW46IDBweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMxYjMwNGM7XG59XG5cbi50ZXh0LWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/trips/trips.page.ts":
/*!*************************************!*\
  !*** ./src/app/trips/trips.page.ts ***!
  \*************************************/
/*! exports provided: TripsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsPage", function() { return TripsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite-porter/ngx */ "./node_modules/@ionic-native/sqlite-porter/ngx/index.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ "./node_modules/@ionic-native/firebase-analytics/ngx/index.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");











var TripsPage = /** @class */ (function () {
    function TripsPage(navCtrl, http, toastCtrl, storageService, settingService, sqlitePorter, file, sqlite, firebaseAnalytics, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storageService = storageService;
        this.settingService = settingService;
        this.sqlitePorter = sqlitePorter;
        this.file = file;
        this.sqlite = sqlite;
        this.firebaseAnalytics = firebaseAnalytics;
        this.events = events;
        this.items = [];
        this.userid = '';
        this.items = [];
        this.firebaseAnalytics.setCurrentScreen('tripsScreen');
        this.events.subscribe('user:created', function (time) {
            _this.userid = _this.settingService.getUserId();
        });
    }
    TripsPage.prototype.ngOnInit = function () {
        this.userid = this.settingService.getUserId();
        this.viewtrips();
    };
    TripsPage.prototype.goTo = function (path) {
        this.navCtrl.navigateRoot('/' + path);
    };
    TripsPage.prototype.shoHide = function () {
        var x = document.getElementById('loc');
        if (x.style.display === 'none') {
            x.style.display = 'block';
        }
        else {
            x.style.display = 'none';
        }
    };
    TripsPage.prototype.presentToast = function (msg) {
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
    TripsPage.prototype.viewtrips = function () {
        var _this = this;
        this.storageService
            .viewTrip(this.userid)
            .then(function (res) {
            _this.items = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.items.push({
                        id: res.rows.item(i).id,
                        origin: res.rows.item(i).origin,
                        destination: res.rows.item(i).destination,
                        mode: res.rows.item(i).mode,
                        distance: res.rows.item(i).distance,
                        unit: res.rows.item(i).unit,
                        vehicleType: res.rows.item(i).vehicleType,
                        date: res.rows.item(i).date
                    });
                }
            }
            else {
                _this.items = [];
            }
        })
            .catch(function (e) {
            _this.items = [];
            console.log(e);
        });
    };
    TripsPage.prototype.pressed = function (event) {
        console.log('event', event);
    };
    TripsPage.prototype.export = function () {
        var _this = this;
        var csv = this.convertToCSV();
        this.file
            .createFile(this.file.externalDataDirectory + 'RSM/', 'trips.csv', true)
            .then(function (success) {
            _this.file
                .writeFile(_this.file.externalDataDirectory + 'RSM/', 'trips.csv', csv)
                .then(function (success) { }, function (error) {
                console.log('rr', error);
            });
        }, function (error) { });
    };
    TripsPage.prototype.convertToCSV = function () {
        var csv = '';
        var line = '';
        var SpT = this.items[0].length;
        var anzahlTeams = this.items.length;
        // Header
        for (var i = 0; i < anzahlTeams; i++) {
            if (line != '') {
                line += ';';
            }
            line += 'Team ' + (i + 1);
        }
        csv += line + '\r\n';
        // Teams
        for (var i = 0; i < SpT; i++) {
            line = '';
            for (var j = 0; j < anzahlTeams; j++) {
                if (line != '') {
                    line += ';';
                }
                line += this.items[j][i];
            }
            csv += line + '\r\n';
        }
        console.log(csv);
        return csv;
    };
    TripsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trips',
            template: __webpack_require__(/*! ./trips.page.html */ "./src/app/trips/trips.page.html"),
            styles: [__webpack_require__(/*! ./trips.page.scss */ "./src/app/trips/trips.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_9__["PageTrack"])('Trips Screen'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_10__["SettingService"],
            _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLitePorter"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_6__["SQLite"],
            _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_8__["FirebaseAnalytics"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], TripsPage);
    return TripsPage;
}());



/***/ })

}]);
//# sourceMappingURL=trips-trips-module.js.map