(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-notification-module"],{

/***/ "./src/app/notification/notification.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.page */ "./src/app/notification/notification.page.ts");







var routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]
    }
];
var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());



/***/ }),

/***/ "./src/app/notification/notification.page.html":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"{{back}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">\n      Notification\n    </ion-title>\n    <ion-buttons slot=\"end\" class=\"more-btn\" (click)=\"presentPopover($event,data)\">\n      <ion-icon name=\"md-more\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"receipt-add\" padding *ngIf=\"showpop\" (click)=\"hidee($event.target)\">\n    <div class=\"pop-list-detail ion-padding-horizontal\" id=\"sh\">\n      <ul>\n        <li id=\"upload\" class=\"popup-li delete\" (click)=\"markAllAsRead()\">\n          Mark all as read\n        </li>\n        <li id=\"upload\" class=\"popup-li delete\" (click)=\"clearAll()\">\n          Clear all\n        </li>\n      </ul>\n    </div>\n  </div>\n  <ion-card *ngFor=\"let notification of notificationList\"  [style.background-color]=\"notification.is_message_viewed == 0 ? '#80808036' : null\">\n    <img src=\"{{notification.image}}\" />\n    <ion-card-header style=\"padding: 0 20px;\">\n      <h4 style=\"margin: 10px 0 0;\">{{notification.title}}</h4>\n    </ion-card-header>\n\n    <ion-card-content>\n      {{notification.message}}\n      <p class=\"notification-date\">{{formatDate(notification.schedule_date)}}</p>\n    </ion-card-content>\n  </ion-card>\n  <div class=\"no-events\" *ngIf=\"isProcessComplete && notificationList.length === 0\">\n    <p> No Notifications </p>\n  </div>\n  <ion-infinite-scroll threshold=\"50px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/notification/notification.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-events {\n  padding: 30px;\n}\n\n.receipt-add {\n  position: fixed;\n  width: 100%;\n  z-index: 99;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  padding-top: 5px;\n  padding-right: 5px;\n}\n\n.pop-list-detail {\n  width: 170px;\n  background-color: white;\n  right: 0;\n  float: right;\n  border-radius: 5px;\n}\n\n.pop-list-detail ul {\n  padding-left: 0px;\n}\n\n.pop-list-detail ul li {\n  list-style: none;\n  line-height: 25px;\n  color: #62666B;\n  font-size: 18px;\n  padding: 5px 0px;\n}\n\n.notification-date {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURFQTtFQUVFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURJQTtFQUNFLGlCQUFBO0FDREY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLWV2ZW50c3tcbiAgcGFkZGluZzogMzBweDtcbn1cbi5yZWNlaXB0LWFkZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjUpO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cblxuLnBvcC1saXN0LWRldGFpbFxue1xuICB3aWR0aDogMTcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICByaWdodDogMDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIFxufVxuXG4ucG9wLWxpc3QtZGV0YWlsIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4ucG9wLWxpc3QtZGV0YWlsIHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGNvbG9yOiAjNjI2NjZCO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG59XG4ubm90aWZpY2F0aW9uLWRhdGV7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSIsIi5uby1ldmVudHMge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4ucmVjZWlwdC1hZGQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLnBvcC1saXN0LWRldGFpbCB7XG4gIHdpZHRoOiAxNzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHJpZ2h0OiAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnBvcC1saXN0LWRldGFpbCB1bCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4ucG9wLWxpc3QtZGV0YWlsIHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGNvbG9yOiAjNjI2NjZCO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG59XG5cbi5ub3RpZmljYXRpb24tZGF0ZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/notification/notification.page.ts":
/*!***************************************************!*\
  !*** ./src/app/notification/notification.page.ts ***!
  \***************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_back_stack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/back-stack.service */ "./src/app/service/back-stack.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






var NotificationPage = /** @class */ (function () {
    function NotificationPage(backStack, apiService, loadingController) {
        this.backStack = backStack;
        this.apiService = apiService;
        this.loadingController = loadingController;
        this.notificationList = [];
        this.page = 1;
        this.isLoading = true;
        this.isProcessComplete = false;
        this.showpop = false;
        this.back = this.backStack.getBackStack('notification');
    }
    NotificationPage.prototype.ngOnInit = function () {
        this.loadData(null);
    };
    NotificationPage.prototype.presentPopover = function (ev, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.showpop = true;
                return [2 /*return*/];
            });
        });
    };
    NotificationPage.prototype.hidee = function () {
        this.showpop = false;
    };
    NotificationPage.prototype.formatDate = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_5__(date).format('DD MMM, yyyy');
    };
    NotificationPage.prototype.markAllAsRead = function () {
        var _this = this;
        this.hidee();
        this.presentLoading();
        this.apiService.markAllAsReadNotification().subscribe(function (res) {
            _this.isProcessComplete = true;
            if (res.status === true) {
                _this.notificationList = [];
                _this.page = 1;
                _this.loadData(null);
            }
            else {
                _this.dismissLoading();
            }
        });
    };
    NotificationPage.prototype.clearAll = function () {
        var _this = this;
        this.hidee();
        this.presentLoading();
        this.apiService.clearAllNotification().subscribe(function (res) {
            _this.isProcessComplete = true;
            if (res.status === true) {
                _this.notificationList = [];
                _this.page = 1;
                _this.loadData(null);
            }
            else {
                _this.dismissLoading();
            }
        });
    };
    NotificationPage.prototype.presentLoading = function () {
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
    NotificationPage.prototype.dismissLoading = function () {
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
    NotificationPage.prototype.loadData = function (event) {
        var _this = this;
        this.presentLoading();
        setTimeout(function () {
            _this.apiService.getNotificationList({ page: _this.page, limit: 10 }).subscribe(function (res) {
                var _a;
                _this.isProcessComplete = true;
                _this.dismissLoading();
                if (res.status === true) {
                    _this.page += 1;
                    (_a = _this.notificationList).push.apply(_a, res.data);
                    if (event && res.data.length < 10) {
                        event.target.disabled = true;
                    }
                    if (event) {
                        event.target.complete();
                    }
                }
            }, function (error) {
                _this.isProcessComplete = true;
            });
        }, 500);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
    ], NotificationPage.prototype, "infiniteScroll", void 0);
    NotificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.page.html */ "./src/app/notification/notification.page.html"),
            styles: [__webpack_require__(/*! ./notification.page.scss */ "./src/app/notification/notification.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_back_stack_service__WEBPACK_IMPORTED_MODULE_2__["BackStackService"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], NotificationPage);
    return NotificationPage;
}());



/***/ })

}]);
//# sourceMappingURL=notification-notification-module.js.map