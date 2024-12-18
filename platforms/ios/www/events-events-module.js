(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-events-module"],{

/***/ "./src/app/events/events.module.ts":
/*!*****************************************!*\
  !*** ./src/app/events/events.module.ts ***!
  \*****************************************/
/*! exports provided: EventsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageModule", function() { return EventsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events.page */ "./src/app/events/events.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");








var routes = [
    {
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"]
    }
];
var EventsPageModule = /** @class */ (function () {
    function EventsPageModule() {
    }
    EventsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            entryComponents: [],
            declarations: [_events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"]]
        })
    ], EventsPageModule);
    return EventsPageModule;
}());



/***/ }),

/***/ "./src/app/events/events.page.html":
/*!*****************************************!*\
  !*** ./src/app/events/events.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"{{back}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">\n      My Events\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card class=\"card-block\" (click)=\"gotoPage(event)\" *ngFor=\"let event of eventList\">\n    <ion-card-content class=\"main-content\">\n      <ion-card-title color=\"primary\" class=\"title\">{{event.event_name}}</ion-card-title>\n      <ion-card-subtitle class=\"sub-title\">{{formatDate(event.event_date)}}</ion-card-subtitle>\n      {{event.venue_city}}\n    </ion-card-content>\n  </ion-card>\n  <div class=\"no-events\" *ngIf=\"isDataReceived && eventList.length === 0\">\n    <p> You're not currently registered for any events. </p>\n    <a (click)=\"openUpcomingEvents()\">Click here</a> to view Upcoming Events.\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/events/events.page.scss":
/*!*****************************************!*\
  !*** ./src/app/events/events.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #fafafa;\n}\n\n.card-block {\n  margin: 10px;\n  background: #FFFFFF;\n  box-shadow: 0 2px 13px rgba(0, 0, 0, 0.04);\n}\n\n.card-block .main-content {\n  padding: 15px;\n}\n\n.card-block .main-content .title {\n  font-size: 18px;\n  letter-spacing: 0.5px;\n  font-weight: normal;\n}\n\n.card-block .main-content .sub-title {\n  margin-top: 4px;\n}\n\n.no-events {\n  padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL2V2ZW50cy9ldmVudHMucGFnZS5zY3NzIiwic3JjL2FwcC9ldmVudHMvZXZlbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQ0VGOztBRERFO0VBQ0UsYUFBQTtBQ0dKOztBREZJO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNJTjs7QURGSTtFQUNFLGVBQUE7QUNJTjs7QURBQTtFQUNFLGFBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9ldmVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuLmNhcmQtYmxvY2t7XG4gIG1hcmdpbjogMTBweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMCAycHggMTNweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAubWFpbi1jb250ZW50e1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgLnRpdGxle1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG4gICAgLnN1Yi10aXRsZXtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICB9XG4gIH1cbn1cbi5uby1ldmVudHN7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbi5jYXJkLWJsb2NrIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwIDJweCAxM3B4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG4uY2FyZC1ibG9jayAubWFpbi1jb250ZW50IHtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5jYXJkLWJsb2NrIC5tYWluLWNvbnRlbnQgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uY2FyZC1ibG9jayAubWFpbi1jb250ZW50IC5zdWItdGl0bGUge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5uby1ldmVudHMge1xuICBwYWRkaW5nOiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/events/events.page.ts":
/*!***************************************!*\
  !*** ./src/app/events/events.page.ts ***!
  \***************************************/
/*! exports provided: EventsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPage", function() { return EventsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_back_stack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/back-stack.service */ "./src/app/service/back-stack.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _event_detail_event_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../event-detail/event-detail.page */ "./src/app/event-detail/event-detail.page.ts");








var EventsPage = /** @class */ (function () {
    function EventsPage(backStack, iab, navCtrl, toastCtrl, loadingController, apiService, modalController, platform) {
        this.backStack = backStack;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.apiService = apiService;
        this.modalController = modalController;
        this.platform = platform;
        this.eventList = [];
        this.isLoading = false;
        this.isDataReceived = false;
        this.back = this.backStack.getBackStack('events');
    }
    EventsPage.prototype.ngOnInit = function () {
        this.getMyEventList();
    };
    EventsPage.prototype.presentModal = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _event_detail_event_detail_page__WEBPACK_IMPORTED_MODULE_7__["EventDetailPage"],
                            cssClass: 'my-custom-detail-modal',
                            componentProps: {
                                eventId: event.id,
                                isModal: true
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EventsPage.prototype.dismissModal = function () {
        this.modalController.dismiss({
            dismissed: true
        });
    };
    EventsPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'loading',
                                duration: 3000
                            })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        loading.onDidDismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventsPage.prototype.dismissLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('dismissed call');
                        this.isLoading = false;
                        return [4 /*yield*/, this.loadingController
                                .dismiss()
                                .then(function () { return console.log('dismissed'); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EventsPage.prototype.presentToast = function (msg) {
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
    EventsPage.prototype.formatDate = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(date).format('DD/MM/yy');
    };
    EventsPage.prototype.getMyEventList = function () {
        var _this = this;
        this.presentLoading();
        this.apiService.getMyEventList().subscribe(function (result) {
            _this.isDataReceived = true;
            if (result.status) {
                _this.eventList = result.events;
            }
            _this.dismissLoading();
        }, function (error) {
            _this.dismissLoading();
            if (error && error.error) {
                _this.presentToast(error.error.message);
            }
            if (error.status === 401) {
                _this.apiService.logout('/my-events');
            }
        });
    };
    EventsPage.prototype.openUpcomingEvents = function () {
        this.iab.create(localStorage.getItem('upcomingEventURL'), '_blank', {
            location: this.platform.is('android') ? 'yes' : 'no',
            hideurlbar: 'yes',
            hidenavigationbuttons: 'yes',
            closebuttoncaption: 'Back'
        });
    };
    EventsPage.prototype.gotoPage = function (data) {
        var navigationExtras = {
            queryParams: { id: data.id }
        };
        this.presentModal(data);
        // this.navCtrl.navigateForward('/event-detail', navigationExtras);
    };
    EventsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.page.html */ "./src/app/events/events.page.html"),
            styles: [__webpack_require__(/*! ./events.page.scss */ "./src/app/events/events.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_back_stack_service__WEBPACK_IMPORTED_MODULE_2__["BackStackService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], EventsPage);
    return EventsPage;
}());



/***/ })

}]);
//# sourceMappingURL=events-events-module.js.map