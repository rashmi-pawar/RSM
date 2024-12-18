(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscription-subscription-module"],{

/***/ "./src/app/subscription/subscription.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/subscription/subscription.module.ts ***!
  \*****************************************************/
/*! exports provided: SubscriptionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPageModule", function() { return SubscriptionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _subscription_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscription.page */ "./src/app/subscription/subscription.page.ts");







var routes = [
    {
        path: '',
        component: _subscription_page__WEBPACK_IMPORTED_MODULE_6__["SubscriptionPage"]
    }
];
var SubscriptionPageModule = /** @class */ (function () {
    function SubscriptionPageModule() {
    }
    SubscriptionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_subscription_page__WEBPACK_IMPORTED_MODULE_6__["SubscriptionPage"]]
        })
    ], SubscriptionPageModule);
    return SubscriptionPageModule;
}());



/***/ }),

/***/ "./src/app/subscription/subscription.page.html":
/*!*****************************************************!*\
  !*** ./src/app/subscription/subscription.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Subscription List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <div *ngIf=\"list?.length\">\n      <ion-item *ngFor=\"let listdata of list;let i = index\" lines=\"none\" no-padding>\n        <ion-label>{{listdata?.title}}<br>\n          <p>{{listdata?.details}}</p>\n        </ion-label>\n\n        <ion-checkbox slot=\"end\" [checked]=\"checkedlist.indexOf(listdata.id) >= 0\" (click)=\"checked(listdata.id,i)\">\n        </ion-checkbox>\n      </ion-item>\n    </div>\n    <div *ngIf=\"!list?.length && isshow\" class=\"nodata\"> No data found!</div>\n  </ion-list>\n  <ion-button color=\"primary\" expand=\"full\" (click)=\"subscribe()\" *ngIf=\"subscribeId.length>0\" mode=\"ios\">SAVE\n  </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/subscription/subscription.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/subscription/subscription.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/subscription/subscription.page.ts":
/*!***************************************************!*\
  !*** ./src/app/subscription/subscription.page.ts ***!
  \***************************************************/
/*! exports provided: SubscriptionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPage", function() { return SubscriptionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/notification.service */ "./src/app/service/notification.service.ts");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");







var SubscriptionPage = /** @class */ (function () {
    function SubscriptionPage(toastCtrl, apiService, events, loadingController, settingService, pushNotificationService) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.apiService = apiService;
        this.events = events;
        this.loadingController = loadingController;
        this.settingService = settingService;
        this.pushNotificationService = pushNotificationService;
        this.list = [];
        this.subscribeId = [];
        this.checkedlist = [];
        events.subscribe('sub:created', function (time) {
            _this.subscribeId = [];
            _this.checkedlist = [];
            _this.subscriptionList();
            _this.usersubscriptionlist();
        });
    }
    SubscriptionPage.prototype.ngOnInit = function () {
        this.subscriptionList();
        this.usersubscriptionlist();
        this.isshow = false;
    };
    SubscriptionPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'loading',
                            duration: 2000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SubscriptionPage.prototype.subscriptionList = function () {
        var _this = this;
        this.presentLoading();
        this.apiService.subscriptionlist(this.settingService.getToken()).subscribe(function (res) {
            if (res['status'] == true) {
                _this.list = res['data'];
            }
            else {
                _this.list = [];
            }
        }, function (err) {
            console.log(err.error.message);
        });
    };
    SubscriptionPage.prototype.usersubscriptionlist = function () {
        var _this = this;
        this.apiService
            .usersubscriptionlist(this.settingService.getToken())
            .subscribe(function (res) {
            if (res['status'] == true) {
                if (res['data'].length) {
                    for (var i = 0; i < res['data'].length; i++) {
                        _this.checkedlist.push(res['data'][i].id);
                        _this.subscribeId.push(res['data'][i].id);
                    }
                }
            }
            else {
            }
        }, function (err) {
            console.log(err.error.message);
        });
    };
    SubscriptionPage.prototype.firebaseTopicSubscription = function () {
        var _this = this;
        var unsubscribedTopicList = this.list.filter(function (x) {
            return _this.checkedlist.includes(x.id);
        });
        unsubscribedTopicList.forEach(function (item) {
            _this.pushNotificationService.pushObject.unsubscribe(item.title.replace(' ', ''));
        });
        var subscribedTopicList = this.list.filter(function (x) {
            return _this.subscribeId.includes(x.id);
        });
        subscribedTopicList.forEach(function (item) {
            _this.pushNotificationService.pushObject.subscribe(item.title.replace(' ', ''));
        });
    };
    SubscriptionPage.prototype.checked = function (value, index) {
        var push = 0;
        if (this.subscribeId.length > 0) {
            for (var i = 0; i < this.subscribeId.length; i++) {
                if (parseInt(this.subscribeId[i]) == parseInt(value)) {
                    this.subscribeId.splice(i, 1);
                    push = 1;
                }
            }
            if (push == 0) {
                this.subscribeId.push(value);
            }
        }
        else {
            this.subscribeId.push(value);
        }
    };
    SubscriptionPage.prototype.presentToast = function (msg) {
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
    SubscriptionPage.prototype.subscribe = function () {
        var _this = this;
        if (this.subscribeId.length > 0) {
            var data = {
                user_id: this.settingService.getUserId(),
                subscription_id: this.subscribeId
            };
            this.apiService.subscribe(data, this.settingService.getToken()).subscribe(function (res) {
                if (res['status'] == true) {
                    _this.firebaseTopicSubscription();
                    _this.presentToast(res['message']);
                }
                else {
                    _this.isshow = true;
                }
            }, function (err) {
                console.log(err.error.message);
            });
        }
        else {
            this.presentToast('First add subscription list');
        }
    };
    SubscriptionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subscription',
            template: __webpack_require__(/*! ./subscription.page.html */ "./src/app/subscription/subscription.page.html"),
            styles: [__webpack_require__(/*! ./subscription.page.scss */ "./src/app/subscription/subscription.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_5__["PageTrack"])('Subscription Screen'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_6__["SettingService"],
            _service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], SubscriptionPage);
    return SubscriptionPage;
}());



/***/ })

}]);
//# sourceMappingURL=subscription-subscription-module.js.map