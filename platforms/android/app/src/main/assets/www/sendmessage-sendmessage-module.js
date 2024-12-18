(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sendmessage-sendmessage-module"],{

/***/ "./src/app/sendmessage/sendmessage.module.ts":
/*!***************************************************!*\
  !*** ./src/app/sendmessage/sendmessage.module.ts ***!
  \***************************************************/
/*! exports provided: SendmessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendmessagePageModule", function() { return SendmessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sendmessage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sendmessage.page */ "./src/app/sendmessage/sendmessage.page.ts");







var routes = [
    {
        path: '',
        component: _sendmessage_page__WEBPACK_IMPORTED_MODULE_6__["SendmessagePage"]
    }
];
var SendmessagePageModule = /** @class */ (function () {
    function SendmessagePageModule() {
    }
    SendmessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sendmessage_page__WEBPACK_IMPORTED_MODULE_6__["SendmessagePage"]]
        })
    ], SendmessagePageModule);
    return SendmessagePageModule;
}());



/***/ }),

/***/ "./src/app/sendmessage/sendmessage.page.html":
/*!***************************************************!*\
  !*** ./src/app/sendmessage/sendmessage.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\" defaultHref=\"{{back}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">\n      Send us a message\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"onAddForm\">\n    <ion-item no-padding>\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input type=\"text\" formControlName=\"name\" [(ngModel)]=\"name\"></ion-input>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" *ngIf=\"\n        onAddForm.controls.name.hasError('required') &&\n        onAddForm.controls.name.touched\n      \">\n      <p class=\"text08\">Please enter name.</p>\n    </ion-item>\n    <ion-item lines=\"none\" no-padding *ngIf=\"\n        onAddForm.controls.name.hasError('pattern') &&\n        onAddForm.controls.name.touched\n      \">\n      <p class=\"text08\">Please enter only alphabets</p>\n    </ion-item>\n    <ion-item no-padding>\n      <ion-label position=\"floating\">Phone</ion-label>\n      <ion-input type=\"number\" formControlName=\"mobile_no\" [(ngModel)]=\"number\" pattern=\"[0-9]*\"></ion-input>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" *ngIf=\"\n        onAddForm.controls.mobile_no.hasError('required') &&\n        onAddForm.controls.mobile_no.touched\n      \">\n      <p class=\"text08\">Please enter mobile number.</p>\n    </ion-item>\n    <ion-item lines=\"none\" no-padding *ngIf=\"\n        onAddForm.controls.mobile_no.hasError('pattern') &&\n        onAddForm.controls.mobile_no.touched\n      \">\n      <p class=\"text08\">Please enter valid mobile number.</p>\n    </ion-item>\n    <ion-item no-padding>\n      <ion-label position=\"floating\">Email Address</ion-label>\n      <ion-input type=\"email\" formControlName=\"email\" [(ngModel)]=\"email\"></ion-input>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" *ngIf=\"\n        onAddForm.controls.email.hasError('required') &&\n        onAddForm.controls.email.touched\n      \">\n      <p class=\"text08\">Please enter email address.</p>\n    </ion-item>\n    <ion-item lines=\"none\" no-padding *ngIf=\"\n        onAddForm.controls.email.hasError('pattern') &&\n        onAddForm.controls.email.touched\n      \">\n      <p class=\"text08\">Please enter valid email address.</p>\n    </ion-item>\n    <ion-item no-padding>\n      <ion-label position=\"floating\">Message</ion-label>\n      <ion-textarea type=\"text\" rows=\"5\" formControlName=\"message\">\n      </ion-textarea>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" *ngIf=\"\n        onAddForm.controls.message.hasError('required') &&\n        onAddForm.controls.message.touched\n      \">\n      <p class=\"text08\">Please enter message.</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\">\n      <ion-col no-padding>\n        <ion-label>Disclaimer</ion-label>\n        <ion-item no-padding lines=\"none\">\n          <p text-wrap class=\"policy-txt\">\n            Information collected and used via these means is done so in\n            accordance with our\n            <a (click)=\"goTo('https://www.rsm.global/australia/privacy-policy')\">\n              Privacy Policy.\n            </a>\n          </p>\n        </ion-item>\n      </ion-col>\n    </ion-item>\n    <ion-button expand=\"full\" color=\"primary\" expand=\"block\" (click)=\"send()\" [disabled]=\"!onAddForm.valid\"\n      class=\"ion-float-right\">\n      Send Message</ion-button>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/sendmessage/sendmessage.page.scss":
/*!***************************************************!*\
  !*** ./src/app/sendmessage/sendmessage.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  padding: 0px !important;\n  margin-bottom: 10px !important;\n}\n\nion-label {\n  color: #62666b !important;\n}\n\n.policy-txt {\n  color: #62666b !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3NlbmRtZXNzYWdlL3NlbmRtZXNzYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VuZG1lc3NhZ2Uvc2VuZG1lc3NhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zZW5kbWVzc2FnZS9zZW5kbWVzc2FnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjNjI2NjZiICFpbXBvcnRhbnQ7XG59XG5cbi5wb2xpY3ktdHh0IHtcbiAgY29sb3I6ICM2MjY2NmIgIWltcG9ydGFudDtcbn1cbiIsImlvbi1pdGVtIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6ICM2MjY2NmIgIWltcG9ydGFudDtcbn1cblxuLnBvbGljeS10eHQge1xuICBjb2xvcjogIzYyNjY2YiAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/sendmessage/sendmessage.page.ts":
/*!*************************************************!*\
  !*** ./src/app/sendmessage/sendmessage.page.ts ***!
  \*************************************************/
/*! exports provided: SendmessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendmessagePage", function() { return SendmessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");
/* harmony import */ var _service_back_stack_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/back-stack.service */ "./src/app/service/back-stack.service.ts");









var SendmessagePage = /** @class */ (function () {
    function SendmessagePage(formBuilder, navCtrl, loadingController, apiService, backStack, platform, settingService, iab, toastCtrl) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.apiService = apiService;
        this.backStack = backStack;
        this.platform = platform;
        this.settingService = settingService;
        this.iab = iab;
        this.toastCtrl = toastCtrl;
        this.name = '';
        this.email = '';
        this.number = '';
        this.onAddForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')
            ])),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('([\ A-Za-z]+)')])),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            mobile_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{10,10}'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]))
        });
        this.back = this.backStack.getBackStack('sendmessage');
    }
    SendmessagePage.prototype.ngOnInit = function () {
        if (this.settingService.getUserData() !== undefined && this.settingService.getUserData()) {
            this.userData = this.settingService.getUserData();
            this.name = this.userData.first_name + ' ' + this.userData.last_name;
            this.email = this.userData.email;
            this.number = this.userData.mobile_no;
        }
        else {
            this.name = '';
            this.email = '';
            this.number = '';
        }
    };
    SendmessagePage.prototype.presentToast = function (msg) {
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
    SendmessagePage.prototype.send = function () {
        var _this = this;
        this.presentLoading();
        var data = {
            email: this.onAddForm.value.email,
            phone: this.onAddForm.value.mobile_no,
            name: this.onAddForm.value.name,
            message: this.onAddForm.value.message,
        };
        this.apiService.sendEmail(data).subscribe(function (res) {
            if (res['status'] == true) {
                _this.onAddForm.reset();
                _this.presentToast(res['message']);
                _this.navCtrl.navigateRoot('/contactus');
            }
            else {
                _this.presentToast('Somthing Went Wrong,Please try again');
            }
        }, function (err) {
            console.log(err.error.message);
            _this.presentToast('Somthing Went Wrong,Please try again');
        });
    };
    SendmessagePage.prototype.goTo = function (url) {
        this.iab.create(url, '_system', {
            location: this.platform.is('android') ? 'yes' : 'no',
            hideurlbar: 'yes',
            hidenavigationbuttons: 'yes',
            closebuttoncaption: 'Back'
        });
    };
    SendmessagePage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Sending message...',
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
    SendmessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sendmessage',
            template: __webpack_require__(/*! ./sendmessage.page.html */ "./src/app/sendmessage/sendmessage.page.html"),
            styles: [__webpack_require__(/*! ./sendmessage.page.scss */ "./src/app/sendmessage/sendmessage.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_5__["PageTrack"])('Send Message Screen'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _service_back_stack_service__WEBPACK_IMPORTED_MODULE_8__["BackStackService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_7__["SettingService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], SendmessagePage);
    return SendmessagePage;
}());



/***/ })

}]);
//# sourceMappingURL=sendmessage-sendmessage-module.js.map