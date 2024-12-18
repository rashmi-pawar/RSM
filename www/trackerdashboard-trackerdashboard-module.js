(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trackerdashboard-trackerdashboard-module"],{

/***/ "./src/app/trackerdashboard/trackerdashboard.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/trackerdashboard/trackerdashboard.module.ts ***!
  \*************************************************************/
/*! exports provided: TrackerdashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerdashboardPageModule", function() { return TrackerdashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trackerdashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trackerdashboard.page */ "./src/app/trackerdashboard/trackerdashboard.page.ts");







var routes = [
    {
        path: '',
        component: _trackerdashboard_page__WEBPACK_IMPORTED_MODULE_6__["TrackerdashboardPage"]
    }
];
var TrackerdashboardPageModule = /** @class */ (function () {
    function TrackerdashboardPageModule() {
    }
    TrackerdashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_trackerdashboard_page__WEBPACK_IMPORTED_MODULE_6__["TrackerdashboardPage"]]
        })
    ], TrackerdashboardPageModule);
    return TrackerdashboardPageModule;
}());



/***/ }),

/***/ "./src/app/trackerdashboard/trackerdashboard.page.html":
/*!*************************************************************!*\
  !*** ./src/app/trackerdashboard/trackerdashboard.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Trip Loogbook and Mileage Tracker\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-row>\n    <ion-col size=\"7\">\n      <ion-item no-padding lines=\"none\" class=\"trip-add-unit\">\n        <ion-label position=\"stacked\">Trip Category</ion-label>\n        <ion-select placeholder=\"Trip Category\" [(ngModel)]=\"vehicleType\">\n          <ion-select-option *ngFor=\"let vtype of vehiclelist \" value=\"{{vtype.name}}\">{{vtype.name}}\n          </ion-select-option>\n        </ion-select>\n\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"5\">\n      <button type=\"button\" class=\"add-vehicle-btn\" (click)=\"presentAlertPrompt()\">\n        <ion-icon name=\"add\"></ion-icon>Add Vehicle\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"trip-list\">\n    <ion-col size=\"3\" (click)=\"goTo('track')\">\n      <p>Start trip</p>\n    </ion-col>\n    <ion-col size=\"3\">\n      <p>Log trip</p>\n    </ion-col>\n    <ion-col size=\"3\">\n      <p>View trip</p>\n    </ion-col>\n    <ion-col size=\"3\">\n      <p>My settings</p>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/trackerdashboard/trackerdashboard.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/trackerdashboard/trackerdashboard.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.add-vehicle-btn {\n  background: #009cde;\n  color: #fff;\n  margin-top: 25px;\n  padding: 12px 0px;\n  width: 100%;\n}\n\n.trip-list p {\n  margin: 0;\n  font-size: 14px;\n  color: #2f2f2f;\n}\n\n.trip-list {\n  margin: 20px 0px;\n}\n\nbutton.add-vehicle-btn ion-icon {\n  vertical-align: bottom;\n}\n\n@media only screen and (max-width: 414px) {\n  button.add-vehicle-btn {\n    margin-top: 40px;\n  }\n}\n\n@media only screen and (max-width: 411px) {\n  button.add-vehicle-btn {\n    margin-top: 25px;\n  }\n}\n\n@media only screen and (max-width: 375px) {\n  button.add-vehicle-btn {\n    margin-top: 40px;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  button.add-vehicle-btn {\n    margin-top: 25px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  button.add-vehicle-btn {\n    margin-top: 39px;\n  }\n  .trip-list p {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3RyYWNrZXJkYXNoYm9hcmQvdHJhY2tlcmRhc2hib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3RyYWNrZXJkYXNoYm9hcmQvdHJhY2tlcmRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQUE7RUFFSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0Esc0JBQUE7QUNHQTs7QURFQTtFQUVJO0lBRUksZ0JBQUE7RUNETjtBQUNGOztBREtBO0VBRUk7SUFFSSxnQkFBQTtFQ0xOO0FBQ0Y7O0FEU0E7RUFFSTtJQUVJLGdCQUFBO0VDVE47QUFDRjs7QURhQTtFQUVJO0lBRUksZ0JBQUE7RUNiTjtBQUNGOztBRGlCQTtFQUVJO0lBRUksZ0JBQUE7RUNqQk47RURvQkU7SUFFSSxlQUFBO0VDbkJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90cmFja2VyZGFzaGJvYXJkL3RyYWNrZXJkYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLmFkZC12ZWhpY2xlLWJ0biB7XG4gICAgYmFja2dyb3VuZDogIzAwOWNkZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIHBhZGRpbmc6IDEycHggMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnRyaXAtbGlzdCBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMmYyZjJmO1xufVxuLnRyaXAtbGlzdFxue1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG59XG5idXR0b24uYWRkLXZlaGljbGUtYnRuIGlvbi1pY29ue1xudmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cblxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIFxue1xuICAgIGJ1dHRvbi5hZGQtdmVoaWNsZS1idG4ge1xuICAgICAgICBcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICBcbiAgICB9XG5cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDExcHgpIFxue1xuICAgIGJ1dHRvbi5hZGQtdmVoaWNsZS1idG4ge1xuICAgICAgICBcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICBcbiAgICB9XG5cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIFxue1xuICAgIGJ1dHRvbi5hZGQtdmVoaWNsZS1idG4ge1xuICAgICAgICBcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICBcbiAgICB9XG5cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIFxue1xuICAgIGJ1dHRvbi5hZGQtdmVoaWNsZS1idG4ge1xuICAgICAgICBcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICBcbiAgICB9XG5cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIFxue1xuICAgIGJ1dHRvbi5hZGQtdmVoaWNsZS1idG4ge1xuICAgICAgICBcbiAgICAgICAgbWFyZ2luLXRvcDogMzlweDtcbiAgICAgICBcbiAgICB9XG4gICAgLnRyaXAtbGlzdCBwXG4gICAge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG59IiwiYnV0dG9uLmFkZC12ZWhpY2xlLWJ0biB7XG4gIGJhY2tncm91bmQ6ICMwMDljZGU7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBwYWRkaW5nOiAxMnB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50cmlwLWxpc3QgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzJmMmYyZjtcbn1cblxuLnRyaXAtbGlzdCB7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG5cbmJ1dHRvbi5hZGQtdmVoaWNsZS1idG4gaW9uLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gIGJ1dHRvbi5hZGQtdmVoaWNsZS1idG4ge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDExcHgpIHtcbiAgYnV0dG9uLmFkZC12ZWhpY2xlLWJ0biB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICBidXR0b24uYWRkLXZlaGljbGUtYnRuIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIGJ1dHRvbi5hZGQtdmVoaWNsZS1idG4ge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgYnV0dG9uLmFkZC12ZWhpY2xlLWJ0biB7XG4gICAgbWFyZ2luLXRvcDogMzlweDtcbiAgfVxuICAudHJpcC1saXN0IHAge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/trackerdashboard/trackerdashboard.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/trackerdashboard/trackerdashboard.page.ts ***!
  \***********************************************************/
/*! exports provided: TrackerdashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerdashboardPage", function() { return TrackerdashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");







var TrackerdashboardPage = /** @class */ (function () {
    function TrackerdashboardPage(storageService, settingService, modalController, navCtrl, toastCtrl, alertController, router, events) {
        var _this = this;
        this.storageService = storageService;
        this.settingService = settingService;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.router = router;
        this.events = events;
        this.vehiclelist = [];
        this.vehicleType = '';
        this.userid = '';
        this.events.subscribe('user:created', function (time) {
            _this.userid = _this.settingService.getUserId();
        });
    }
    TrackerdashboardPage.prototype.presentAlertPrompt = function () {
        console.log('presentAlertPrompt');
    };
    TrackerdashboardPage.prototype.ngOnInit = function () {
        this.userid = this.settingService.getUserId();
        this.viewVehicletype();
    };
    TrackerdashboardPage.prototype.createTable = function () {
        this.storageService
            .createVehicleTable()
            .then(function (res) {
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    TrackerdashboardPage.prototype.presentToast = function (msg) {
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
    TrackerdashboardPage.prototype.viewVehicletype = function () {
        var _this = this;
        this.vehiclelist = [];
        this.storageService
            .viewVehicle(this.userid)
            .then(function (res) {
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.vehiclelist.push({
                        id: res.rows.item(i).id,
                        name: res.rows.item(i).name,
                        type: res.rows.item(i).type,
                        date: res.rows.item(i).date
                    });
                }
            }
            else {
                _this.vehiclelist = [];
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    TrackerdashboardPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Choose trip type',
                            buttons: [
                                {
                                    text: 'Buisness',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        _this.router.navigate(['/tracking'], {
                                            queryParams: {
                                                vehicleType: _this.vehicleType,
                                                tripType: 'Buisness'
                                            }
                                        });
                                    }
                                },
                                {
                                    text: 'Personal',
                                    handler: function (data) {
                                        _this.router.navigate(['/tracking'], {
                                            queryParams: {
                                                vehicleType: _this.vehicleType,
                                                tripType: 'Personal'
                                            }
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TrackerdashboardPage.prototype.goTo = function (param) {
        if (param === void 0) { param = 'track'; }
        if (this.vehicleType === '') {
            this.presentToast('Please select vechile');
        }
        else {
            this.presentAlert();
        }
    };
    TrackerdashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trackerdashboard',
            template: __webpack_require__(/*! ./trackerdashboard.page.html */ "./src/app/trackerdashboard/trackerdashboard.page.html"),
            styles: [__webpack_require__(/*! ./trackerdashboard.page.scss */ "./src/app/trackerdashboard/trackerdashboard.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_5__["PageTrack"])('Tracker Dashboard'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_6__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]])
    ], TrackerdashboardPage);
    return TrackerdashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=trackerdashboard-trackerdashboard-module.js.map