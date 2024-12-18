(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-sign-in-event-sign-in-module"],{

/***/ "./src/app/event-sign-in/event-sign-in.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/event-sign-in/event-sign-in.module.ts ***!
  \*******************************************************/
/*! exports provided: EventSignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventSignInPageModule", function() { return EventSignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _event_sign_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-sign-in.page */ "./src/app/event-sign-in/event-sign-in.page.ts");







var routes = [
    {
        path: '',
        component: _event_sign_in_page__WEBPACK_IMPORTED_MODULE_6__["EventSignInPage"]
    }
];
var EventSignInPageModule = /** @class */ (function () {
    function EventSignInPageModule() {
    }
    EventSignInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_event_sign_in_page__WEBPACK_IMPORTED_MODULE_6__["EventSignInPage"]]
        })
    ], EventSignInPageModule);
    return EventSignInPageModule;
}());



/***/ }),

/***/ "./src/app/event-sign-in/event-sign-in.page.html":
/*!*******************************************************!*\
  !*** ./src/app/event-sign-in/event-sign-in.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">\n      Event Sign In\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf=\"isValidEnventId() && isNotregister\">\n    <form [formGroup]=\"onAddForm\" class=\"list-form\">\n      <ion-item lines=\"none\" no-padding class=\"log-data field-row\">\n        <ion-label position=\"stacked\">First Name</ion-label>\n        <ion-input placeholder=\"First Name\" class=\"login-inputt\" type=\"text\" formControlName=\"firstname\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\" no-padding class=\"checkbox-row\" *ngIf=\"onAddForm.value.is_agree_share_detail\">\n        <ion-checkbox formControlName=\"is_share_first_name\" mode=\"md\" class=\"checkbox\"></ion-checkbox>\n        <ion-label class=\"label\"> Share first name with other attendees?</ion-label>  \n      </ion-item>\n      <ion-item lines=\"none\" no-padding\n        *ngIf=\"onAddForm.controls.firstname.hasError('required') && onAddForm.controls.firstname.dirty\">\n        <p class=\"text08\">Sorry, field first name is required!</p>\n      </ion-item>\n      <ion-item lines=\"none\" no-padding class=\"log-data field-row\">\n        <ion-label position=\"stacked\">Last Name</ion-label>\n        <ion-input placeholder=\"Last Name\" class=\"login-inputt\" type=\"text\" formControlName=\"lastname\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"none\" no-padding class=\"checkbox-row\" *ngIf=\"onAddForm.value.is_agree_share_detail\">\n        <ion-checkbox formControlName=\"is_share_last_name\" mode=\"md\" class=\"checkbox\"></ion-checkbox>\n        <ion-label class=\"label\"> Share last name with other attendees?</ion-label>  \n      </ion-item>\n      <ion-item lines=\"none\" no-padding\n        *ngIf=\"onAddForm.controls.lastname.hasError('required') && onAddForm.controls.lastname.dirty\">\n        <p class=\"text08\">Sorry, field last name is required!</p>\n      </ion-item>\n      <ion-item lines=\"none\" no-padding class=\"log-data field-row\">\n        <ion-label position=\"stacked\">Email Address</ion-label>\n        <ion-input placeholder=\"Email\" class=\"login-inputt\" type=\"email\" formControlName=\"email\" [disabled]>\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"none\" no-padding class=\"checkbox-row\" *ngIf=\"onAddForm.value.is_agree_share_detail\">\n        <ion-checkbox formControlName=\"is_share_email\" mode=\"md\" class=\"checkbox\"></ion-checkbox>\n        <ion-label class=\"label\"> Share email with other attendees?</ion-label>  \n      </ion-item>\n      <ion-item lines=\" none\" no-padding\n        *ngIf=\"onAddForm.controls.email.hasError('required') && onAddForm.controls.email.dirty\">\n        <p class=\"text08\">Sorry, field Email is required!</p>\n      </ion-item>\n      <ion-item lines=\"none\" no-padding\n        *ngIf=\"onAddForm.controls.email.hasError('pattern') && onAddForm.controls.email.dirty\">\n        <p class=\"text08\">Enter valid email number</p>\n      </ion-item>\n      <ion-item lines=\"none\" no-padding class=\"log-data field-row\">\n        <ion-label position=\"stacked\">Mobile Number</ion-label>\n        <ion-input placeholder=\"Mobile Number\" class=\"login-inputt\" type=\"tel\" formControlName=\"mobile_no\"\n          pattern=\"[0-9]*\" minlength=\"10\" maxlength=\"10\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"none\" no-padding class=\"checkbox-row\" *ngIf=\"onAddForm.value.is_agree_share_detail\">\n        <ion-checkbox formControlName=\"is_share_mobile\" mode=\"md\" class=\"checkbox\"></ion-checkbox>\n        <ion-label class=\"label\"> Share mobile number with other attendees?</ion-label>  \n      </ion-item>\n      <ion-item lines=\" none\" no-padding\n        *ngIf=\"onAddForm.controls.mobile_no.hasError('required') && onAddForm.controls.mobile_no.dirty\">\n        <p class=\"text08\">Sorry, field Mobile Number is required!</p>\n      </ion-item>\n      <ion-item lines=\"none\" no-padding\n        *ngIf=\"(!onAddForm.controls.mobile_no.hasError('pattern') && (onAddForm.controls.mobile_no.hasError('minlength') || onAddForm.controls.mobile_no.hasError('maxlength'))) && onAddForm.controls.mobile_no.dirty\">\n        <p class=\"text08\">Mobile number should be of 10 digits</p>\n      </ion-item>\n  \n      <ion-item lines=\"none\" no-padding\n        *ngIf=\"onAddForm.controls.mobile_no.hasError('pattern') && onAddForm.controls.mobile_no.dirty\">\n        <p class=\"text08\">Enter valid mobile number</p>\n      </ion-item>\n      <ion-item lines=\"none\" no-padding class=\"log-data field-row\">\n        <ion-label position=\"stacked\">Post Code</ion-label>\n        <ion-input placeholder=\"Post Code\" class=\"login-inputt\" type=\"number\" formControlName=\"post_code\" pattern=\"[0-9]*\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"none\" no-padding class=\"checkbox-row\" *ngIf=\"onAddForm.value.is_agree_share_detail\">\n        <ion-checkbox formControlName=\"is_share_post_code\" mode=\"md\" class=\"checkbox\"></ion-checkbox>\n        <ion-label class=\"label\"> &nbsp;Share post code with other attendees?</ion-label>  \n      </ion-item>\n      <ion-item lines=\"none\" no-padding\n        *ngIf=\"onAddForm.controls.post_code.hasError('required') && onAddForm.controls.post_code.dirty\">\n        <p class=\"text08\">Sorry, field Postcode is required!</p>\n      </ion-item>\n      <ion-item lines=\"none\" no-padding\n        *ngIf=\"onAddForm.controls.post_code.hasError('pattern') && onAddForm.controls.post_code.dirty\">\n        <p class=\"text08\">Enter valid post code</p>\n      </ion-item>\n      <ion-item lines=\"none\" no-padding class=\"log-data field-row\">\n        <ion-label position=\"stacked\">LinkedIn Url</ion-label>\n        <ion-input placeholder=\"LinkedIn Url\" class=\"login-inputt\" type=\"text\" formControlName=\"linkedin_url\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"none\" no-padding class=\"checkbox-row\" *ngIf=\"onAddForm.value.is_agree_share_detail\">\n        <ion-checkbox formControlName=\"is_share_linkedin_url\" mode=\"md\" class=\"checkbox\"></ion-checkbox>\n        <ion-label class=\"label\"> &nbsp;Share linkedin Url with other attendees?</ion-label>  \n      </ion-item>\n      <ion-item lines=\"none\" no-padding class=\"checkbox-row\">\n        <ion-checkbox formControlName=\"is_agree_share_detail\" mode=\"md\" class=\"checkbox\"></ion-checkbox>\n        <ion-label class=\"label\"> I agree to share my details with other attendees in the event</ion-label>  \n      </ion-item>\n    </form>\n    <div>\n      <ion-button color=\"primary\" class=\"log-btn\" mode=\"ios\" icon-left size=\"medium\" expand=\"full\" (click)=\"update()\"\n        tappable>\n        SAVE\n      </ion-button>\n    </div>\n  </div>\n  <div *ngIf=\"!isValidEnventId() && isNotregister\">\n    <ion-button color=\"primary\" class=\"log-btn\" mode=\"ios\" icon-left size=\"medium\" expand=\"full\" (click)=\"scanQR()\"\n        tappable>\n        Scan QR\n      </ion-button>\n  </div>\n  \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/event-sign-in/event-sign-in.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/event-sign-in/event-sign-in.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-pic {\n  position: relative;\n}\n\nimg {\n  border-radius: 50px;\n  border: 2px solid #000000;\n}\n\nion-icon {\n  position: absolute;\n  bottom: 6px;\n  right: 0px;\n  font-size: 13px;\n  color: #ffffff;\n  background: #000000;\n  border-radius: 20px;\n  padding: 2px;\n}\n\n.field-row {\n  margin: 10px 0px 0px 0px;\n}\n\n.checkbox-row {\n  margin: 0;\n}\n\n.checkbox-row .checkbox {\n  margin-top: 8px;\n}\n\n.checkbox-row .label {\n  margin-top: 0;\n  white-space: normal;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL2V2ZW50LXNpZ24taW4vZXZlbnQtc2lnbi1pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2V2ZW50LXNpZ24taW4vZXZlbnQtc2lnbi1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNHRjs7QUREQTtFQUNFLHdCQUFBO0FDSUY7O0FERkE7RUFDRSxTQUFBO0FDS0Y7O0FESkU7RUFDRSxlQUFBO0FDTUo7O0FESkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvZXZlbnQtc2lnbi1pbi9ldmVudC1zaWduLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXBpY3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW1ne1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xufVxuaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNnB4O1xuICByaWdodDogMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAycHg7XG59XG4uZmllbGQtcm93e1xuICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHhcbn1cbi5jaGVja2JveC1yb3d7XG4gIG1hcmdpbjogMDtcbiAgLmNoZWNrYm94e1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxuICAubGFiZWx7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbn0iLCIucHJvZmlsZS1waWMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XG59XG5cbmlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDZweDtcbiAgcmlnaHQ6IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uZmllbGQtcm93IHtcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xufVxuXG4uY2hlY2tib3gtcm93IHtcbiAgbWFyZ2luOiAwO1xufVxuLmNoZWNrYm94LXJvdyAuY2hlY2tib3gge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uY2hlY2tib3gtcm93IC5sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/event-sign-in/event-sign-in.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/event-sign-in/event-sign-in.page.ts ***!
  \*****************************************************/
/*! exports provided: EventSignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventSignInPage", function() { return EventSignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");









var EventSignInPage = /** @class */ (function () {
    function EventSignInPage(formBuilder, navCtrl, apiService, settingService, toastCtrl, actionSheetController, events, webview, router, barcodeScanner, activatedRoute, loadingController) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.settingService = settingService;
        this.toastCtrl = toastCtrl;
        this.actionSheetController = actionSheetController;
        this.events = events;
        this.webview = webview;
        this.router = router;
        this.barcodeScanner = barcodeScanner;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.isLoading = false;
        this.isNotregister = false;
        this.event_id = '';
        this.userid = this.settingService.getUserId();
        this.events.subscribe("user:created", function (time) {
            _this.userid = _this.settingService.getUserId();
        });
        this.activatedRoute.queryParams.subscribe(function (params) {
            console.log(params);
            _this.event_id = params.event_id;
        });
        this.userData = this.settingService.getUserData();
        this.onAddForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            mobile_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            post_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            linkedin_url: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            is_agree_share_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](1),
            is_share_first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](1),
            is_share_last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](1),
            is_share_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](1),
            is_share_mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0),
            is_share_post_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0),
            is_share_linkedin_url: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0),
        });
        if (this.userData)
            this.onAddForm.patchValue({
                firstname: this.userData.first_name ? this.userData.first_name : '',
                lastname: this.userData.last_name ? this.userData.last_name : '',
                mobile_no: this.userData.mobile_no ? this.userData.mobile_no : '',
                email: this.userData.email ? this.userData.email : '',
                post_code: this.userData.zip ? this.userData.zip : '',
                is_share_first_name: this.userData.first_name ? 1 : 0,
                is_share_last_name: this.userData.last_name ? 1 : 0,
                is_share_mobile: this.userData.mobile_no ? 1 : 0,
                is_share_email: this.userData.email ? 1 : 0,
                is_share_post_code: this.userData.zip ? 1 : 0,
            });
    }
    EventSignInPage.prototype.presentToast = function (msg) {
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
    EventSignInPage.prototype.presentLoading = function () {
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
    EventSignInPage.prototype.dismissLoading = function () {
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
    EventSignInPage.prototype.isValidEnventId = function () { return Boolean(this.event_id) && this.event_id != 'null'; };
    EventSignInPage.prototype.ngOnInit = function () {
    };
    EventSignInPage.prototype.ionViewDidEnter = function () {
        if (this.isValidEnventId() && this.userid) {
            this.checkEventAttandieesStatus();
        }
        else {
            this.scanQR();
        }
    };
    EventSignInPage.prototype.scanQR = function () {
        var _this = this;
        if (!this.isValidEnventId()) {
            this.barcodeScanner
                .scan()
                .then(function (barcodeData) {
                console.log("Barcode data");
                console.log(barcodeData.text);
                if (barcodeData.text) {
                    var queryParam = barcodeData.text.split("?");
                    var urlParams = new URLSearchParams(queryParam[1]);
                    _this.event_id = urlParams.get("event_id");
                    // this.redirectToEventSignIn(barcodeData.text);
                    _this.checkEventAttandieesStatus();
                }
            })
                .catch(function (err) {
                console.log("Error", err);
            });
        }
        else {
            this.presentToast("Invalid event id");
            // this.router.navigate(["/"], { queryParams: { previosURL: '' }});
        }
    };
    EventSignInPage.prototype.checkEventAttandieesStatus = function () {
        var _this = this;
        this.presentLoading();
        this.apiService.getAttendeesStatusCheck(this.userid, this.event_id).subscribe(function (result) {
            console.log(result);
            _this.dismissLoading();
            if (result.data && result.data.length > 0) {
                _this.presentToast('Event Sign-in Successfull');
                _this.goTo('my-events');
            }
            else {
                // this.isNotregister = true;
                // this.scanQR(); 
                _this.update();
            }
        }, function (error) {
            console.log(error);
            _this.presentToast(error.error.message);
            _this.goTo('/tabs/dashboard');
            // this.isNotregister = true;
            _this.dismissLoading();
        });
    };
    EventSignInPage.prototype.update = function () {
        var _this = this;
        if (this.userData && this.userData.id) {
            this.presentLoading();
            var data = {
                user_id: this.userData.id,
                event_id: this.event_id,
                first_name: this.onAddForm.value.firstname,
                last_name: this.onAddForm.value.lastname,
                mobile_no: this.onAddForm.value.mobile_no,
                email: this.onAddForm.value.email,
                post_code: this.onAddForm.value.post_code,
                auth_token: this.settingService.getToken(),
                linkedin_url: this.onAddForm.value.linkedin_url,
                is_event_attended: 1
            };
            if (this.onAddForm.value.is_agree_share_detail) {
                data = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data, { is_agree_share_detail: this.onAddForm.value.is_agree_share_detail, is_share_first_name: this.onAddForm.value.is_share_first_name, is_share_last_name: this.onAddForm.value.is_share_last_name, is_share_email: this.onAddForm.value.is_share_email, is_share_mobile: this.onAddForm.value.is_share_mobile, is_share_post_code: this.onAddForm.value.is_share_post_code, is_share_linkedin_url: this.onAddForm.value.is_share_linkedin_url });
            }
            this.apiService.addEventAttendees(data).subscribe(function (res) {
                if (res.status === true) {
                    _this.presentToast('Event Sign-in Successfull');
                    _this.goTo('my-events');
                }
                else {
                    _this.presentToast(res.message);
                }
                _this.dismissLoading();
            }, function (err) {
                console.log(err);
                _this.dismissLoading();
                _this.presentToast(err.error.message);
                console.log(err.error.message);
            });
        }
        else {
            this.presentToast('Please login and try again');
        }
    };
    EventSignInPage.prototype.goTo = function (url) {
        this.navCtrl.navigateRoot('/' + url);
    };
    EventSignInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-sign-in',
            template: __webpack_require__(/*! ./event-sign-in.page.html */ "./src/app/event-sign-in/event-sign-in.page.html"),
            styles: [__webpack_require__(/*! ./event-sign-in.page.scss */ "./src/app/event-sign-in/event-sign-in.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_8__["BarcodeScanner"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], EventSignInPage);
    return EventSignInPage;
}());



/***/ })

}]);
//# sourceMappingURL=event-sign-in-event-sign-in-module.js.map