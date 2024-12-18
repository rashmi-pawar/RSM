(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.html":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" defaultHref=\"login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"dark\">\n      Registration\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div class=\"ion-padding-horizontal\">\n    <form [formGroup]=\"onAddForm\">\n      <div class=\"register-data\">\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-item no-padding lines=\"none\">\n              <ion-label position=\"floating\">First Name</ion-label>\n              <ion-input type=\"text\" formControlName=\"firstname\"\n                (ionChange)=\"capitalize('firstname', onAddForm.controls.firstname)\"></ion-input>\n            </ion-item>\n            <ion-item lines=\"none\" no-padding\n              *ngIf=\"onAddForm.controls.firstname.hasError('required') && onAddForm.controls.firstname.touched\">\n              <p class=\"text08\">Please enter first name.</p>\n            </ion-item>\n            <ion-item lines=\"none\" no-padding *ngIf=\"\n                onAddForm.controls.firstname.hasError('pattern') &&\n                onAddForm.controls.firstname.touched\n              \">\n              <p class=\"text08\">Please enter only alphabets</p>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item no-padding lines=\"none\">\n              <ion-label position=\"floating\">Last Name</ion-label>\n              <ion-input type=\"text\" formControlName=\"lastname\"\n                (ionChange)=\"capitalize('lastname', onAddForm.controls.lastname)\"></ion-input>\n            </ion-item>\n            <ion-item lines=\"none\" no-padding\n              *ngIf=\"onAddForm.controls.lastname.hasError('required') && onAddForm.controls.lastname.touched\">\n              <p class=\"text08\">Please enter last name.</p>\n            </ion-item>\n            <ion-item lines=\"none\" no-padding *ngIf=\"\n                onAddForm.controls.lastname.hasError('pattern') &&\n                onAddForm.controls.lastname.touched\n              \">\n              <p class=\"text08\">Please enter only alphabets</p>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div class=\"border-cls\">\n        <ion-item class=\"email\" lines=\"none\" no-padding>\n          <ion-label position=\"floating\">Email Address</ion-label>\n          <ion-input type=\"email\" inputmode=\"email\" formControlName=\"email\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" no-padding\n          *ngIf=\"onAddForm.controls.email.hasError('required') && onAddForm.controls.email.touched\">\n          <p class=\"text08\">Please enter email address.</p>\n        </ion-item>\n        <ion-item lines=\"none\" no-padding\n          *ngIf=\"onAddForm.controls.email.hasError('pattern') && onAddForm.controls.email.touched\">\n          <p class=\"text08\">Enter valid email address</p>\n        </ion-item>\n        <ion-item class=\"mobile\" lines=\"none\" no-padding>\n          <ion-label position=\"floating\">Mobile Number</ion-label>\n          <ion-input type=\"tel\" formControlName=\"mobile_no\" pattern=\"[0-9]*\" minlength=\"10\" maxlength=\"10\">\n          </ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" no-padding\n          *ngIf=\"onAddForm.controls.mobile_no.hasError('required') && onAddForm.controls.mobile_no.touched\">\n          <p class=\"text08\">Please enter mobile number.</p>\n        </ion-item>\n        <ion-item lines=\"none\" no-padding\n          *ngIf=\"(!onAddForm.controls.mobile_no.hasError('pattern') && (onAddForm.controls.mobile_no.hasError('minlength') || onAddForm.controls.mobile_no.hasError('maxlength'))) && onAddForm.controls.mobile_no.touched\">\n          <p class=\"text08\">Enter valid mobile number</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" no-padding\n          *ngIf=\"onAddForm.controls.mobile_no.hasError('pattern') && onAddForm.controls.mobile_no.touched\">\n          <p class=\"text08\">Enter valid mobile number</p>\n        </ion-item>\n        <ion-item class=\"pcode\" lines=\"none\" no-padding>\n          <ion-label position=\"floating\">Post Code</ion-label>\n          <ion-input type=\"number\" formControlName=\"pincode\" pattern=\"[0-9]*\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" no-padding\n          *ngIf=\"onAddForm.controls.pincode.hasError('required') && onAddForm.controls.pincode.touched\">\n          <p class=\"text08\">Please enter postcode.</p>\n        </ion-item>\n        <ion-item lines=\"none\" no-padding\n          *ngIf=\"onAddForm.controls.pincode.hasError('pattern') && onAddForm.controls.pincode.touched\">\n          <p class=\"text08\">Enter valid postcode</p>\n        </ion-item>\n        <ion-item class=\"no-ripple\" lines=\"none\" style=\"--padding-start: 0;\">\n          <ion-row>\n            <ion-col size=\"1\" no-padding no-margin style=\"min-width: 34px;\">\n              <ion-item no-padding no-margin lines=\"none\" class=\"no-ripple\">\n                <ion-checkbox  mode=\"md\" class=\"no-ripple\" formControlName=\"privacyPolicy\" [checked]=\"false\" no-ripple></ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"10\" class=\"info-link\" no-padding no-margin>\n              <ion-item no-padding no-margin lines=\"none\" class=\"no-ripple\" rippleEffect=\"false\">\n                <ion-label style=\"white-space: normal;\" class=\"no-ripple\" rippleEffect=\"false\">\n                  Information collected and used via these means is done so in\n                  accordance with our<a (click)=\"openPrivacy('https://www.rsm.global/australia/legal/privacy-policy')\">\n                    Privacy Policy.\n                  </a>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-button color=\"primary\" expand=\"block\" mode=\"md\" (click)=\"checkemail()\" [disabled]=\"!onAddForm.valid || !onAddForm.value.privacyPolicy\">Next\n        </ion-button>\n        <div class=\"log-here  ion-padding-vertical\">\n          <p>Already have an account?<span class=\"blue-color\" (click)=\"goto('login')\">Login here </span></p>\n        </div>\n      </div>\n    </form>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-data ion-input {\n  border-bottom: 1px solid #d8d8d8;\n}\n\n.register-data ion-select {\n  padding: 10px;\n  border-bottom: 1px solid #d8d8d8;\n}\n\ninput.native-input {\n  padding-left: 10px !important;\n}\n\n.border-cls ion-input {\n  border-bottom: 1px solid #d8d8d8;\n}\n\n.bday ion-datetime {\n  border-bottom: 1px solid #d8d8d8;\n  padding-left: 0 !important;\n}\n\n.forgot-pass h1 {\n  color: #2f2f2f;\n  font-size: 24px;\n}\n\n.log-here {\n  text-align: center;\n}\n\n.log-here p {\n  color: #2f2f2f;\n}\n\n.log-here span {\n  padding-left: 20px;\n}\n\n.forgot-pass ion-icon {\n  font-size: 30px;\n}\n\n@media screen and (max-width: 360px) {\n  .forgot-pass ion-icon {\n    font-size: 26px;\n  }\n  .forgot-pass h1 {\n    font-size: 22px;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .forgot-pass ion-icon {\n    font-size: 24px;\n  }\n  .forgot-pass h1 {\n    font-size: 20px;\n  }\n  .log-here p {\n    font-size: 14px;\n  }\n}\n\n.info-link {\n  flex: 0 0 calc(11 / var(--ion-grid-columns, 12) * 100% - 35px) !important;\n  width: calc(11 / var(--ion-grid-columns, 12) * 100% - 35px) !important;\n  max-width: calc(11 / var(--ion-grid-columns, 12) * 100%) !important;\n}\n\n.no-ripple {\n  --ripple-color: transparent;\n  --background-hover: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdDQUFBO0FDQUo7O0FERUE7RUFDSSxhQUFBO0VBQ0EsZ0NBQUE7QUNDSjs7QURDQTtFQUNJLDZCQUFBO0FDRUo7O0FEQUE7RUFDSSxnQ0FBQTtBQ0dKOztBRERBO0VBQ0ksZ0NBQUE7RUFDQSwwQkFBQTtBQ0lKOztBREZBO0VBRUksY0FBQTtFQUNBLGVBQUE7QUNJSjs7QURGQTtFQUVJLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxjQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtBQ01KOztBREpBO0VBQ0ksZUFBQTtBQ09KOztBRExBO0VBRUk7SUFDSSxlQUFBO0VDT047RURMRTtJQUVBLGVBQUE7RUNNRjtBQUNGOztBREpBO0VBRUk7SUFDSSxlQUFBO0VDS047RURIRTtJQUVBLGVBQUE7RUNJRjtFREZGO0lBRUksZUFBQTtFQ0dGO0FBQ0Y7O0FEREE7RUFDSSx5RUFBQTtFQUNBLHNFQUFBO0VBQ0EsbUVBQUE7QUNHSjs7QUREQTtFQUNJLDJCQUFBO0VBQ0EsK0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucmVnaXN0ZXItZGF0YSBpb24taW5wdXQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xufVxuLnJlZ2lzdGVyLWRhdGEgaW9uLXNlbGVjdCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcbn1cbmlucHV0Lm5hdGl2ZS1pbnB1dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uYm9yZGVyLWNscyBpb24taW5wdXQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xufVxuLmJkYXkgaW9uLWRhdGV0aW1lIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cbi5mb3Jnb3QtcGFzcyBoMVxue1xuICAgIGNvbG9yOiAjMmYyZjJmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5sb2ctaGVyZVxue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2ctaGVyZSBwIHtcbiAgICBjb2xvcjogIzJmMmYyZjtcbn1cbi5sb2ctaGVyZSBzcGFuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uZm9yZ290LXBhc3MgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpXG57XG4gICAgLmZvcmdvdC1wYXNzIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgIH1cbiAgICAuZm9yZ290LXBhc3MgaDFcbntcbiAgICBmb250LXNpemU6IDIycHg7XG59XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjMyMHB4KVxue1xuICAgIC5mb3Jnb3QtcGFzcyBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gICAgLmZvcmdvdC1wYXNzIGgxXG57XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLmxvZy1oZXJlIHBcbntcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG59XG4uaW5mby1saW5re1xuICAgIGZsZXg6IDAgMCBjYWxjKGNhbGMoMTEgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSAtIDM1cHgpICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGNhbGMoY2FsYygxMSAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlIC0gMzVweCkgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IGNhbGMoY2FsYygxMSAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKSAhaW1wb3J0YW50O1xufVxuLm5vLXJpcHBsZXtcbiAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbn1cbiIsIi5yZWdpc3Rlci1kYXRhIGlvbi1pbnB1dCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xufVxuXG4ucmVnaXN0ZXItZGF0YSBpb24tc2VsZWN0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOGQ4ZDg7XG59XG5cbmlucHV0Lm5hdGl2ZS1pbnB1dCB7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWNscyBpb24taW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcbn1cblxuLmJkYXkgaW9uLWRhdGV0aW1lIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4uZm9yZ290LXBhc3MgaDEge1xuICBjb2xvcjogIzJmMmYyZjtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4ubG9nLWhlcmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2ctaGVyZSBwIHtcbiAgY29sb3I6ICMyZjJmMmY7XG59XG5cbi5sb2ctaGVyZSBzcGFuIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uZm9yZ290LXBhc3MgaW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5mb3Jnb3QtcGFzcyBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG4gIC5mb3Jnb3QtcGFzcyBoMSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAuZm9yZ290LXBhc3MgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAuZm9yZ290LXBhc3MgaDEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAubG9nLWhlcmUgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4uaW5mby1saW5rIHtcbiAgZmxleDogMCAwIGNhbGMoMTEgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikgKiAxMDAlIC0gMzVweCkgIWltcG9ydGFudDtcbiAgd2lkdGg6IGNhbGMoMTEgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikgKiAxMDAlIC0gMzVweCkgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiBjYWxjKDExIC8gdmFyKC0taW9uLWdyaWQtY29sdW1ucywgMTIpICogMTAwJSkgIWltcG9ydGFudDtcbn1cblxuLm5vLXJpcHBsZSB7XG4gIC0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ "./node_modules/@ionic-native/unique-device-id/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");










var SignupPage = /** @class */ (function () {
    function SignupPage(formBuilder, navCtrl, apiService, settingService, toastCtrl, uniqueDeviceID, http, iab, platform) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.settingService = settingService;
        this.toastCtrl = toastCtrl;
        this.uniqueDeviceID = uniqueDeviceID;
        this.http = http;
        this.iab = iab;
        this.platform = platform;
        this.deviceToken = '';
        this.data = '';
        this.onAddForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ])),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('([\ A-Za-z]+)')
            ])),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('([\ A-Za-z]+)')
            ])),
            mobile_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{10}')
            ])),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{4}')
            ])),
            privacyPolicy: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
        });
        this.uniqueDeviceID.get()
            .then(function (uuid) {
            _this.deviceToken = uuid;
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    SignupPage.prototype.gotosignup = function (url) {
        this.settingService.setSignUpData(this.onAddForm.value);
        this.navCtrl.navigateRoot('/' + url);
    };
    SignupPage.prototype.goto = function (url) {
        this.settingService.unsetSignUpData();
        this.navCtrl.navigateRoot('/' + url);
    };
    SignupPage.prototype.openPrivacy = function (url) {
        this.iab.create(url, '_blank', {
            location: this.platform.is('android') ? 'yes' : 'no',
            hideurlbar: 'yes',
            hidenavigationbuttons: 'yes',
            closebuttoncaption: 'Back'
        });
    };
    SignupPage.prototype.capitalize = function (name, text) {
        var val = text.value;
        if (val) {
            this.onAddForm.controls[name].setValue(val.charAt(0).toUpperCase() + val.slice(1));
        }
    };
    SignupPage.prototype.ngOnInit = function () {
        if (this.settingService.getSignUpData() !== undefined && this.settingService.getSignUpData()) {
            this.data = this.settingService.getSignUpData();
            this.onAddForm.patchValue({
                email: this.data.email,
                firstname: this.data.firstname,
                lastname: this.data.lastname,
                mobile_no: this.data.mobile_no,
                pincode: this.data.pincode
            });
        }
    };
    SignupPage.prototype.presentToast = function (msg) {
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
    SignupPage.prototype.getaddres = function (lat, lng) {
        var geocoder = new google.maps.Geocoder();
        var latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };
        geocoder.geocode({ location: latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                }
                else {
                    console.log('No results found');
                }
            }
            else {
                console.log('Geocoder failed due to: ', status);
            }
        });
    };
    SignupPage.prototype.changezip = function (event) {
        var geocoder = new google.maps.Geocoder();
        var address = event.value;
        geocoder.geocode({ address: address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
            }
            else {
            }
        });
    };
    SignupPage.prototype.checkemail = function () {
        var _this = this;
        var data = {
            email: this.onAddForm.value.email
        };
        this.apiService.checkemail(data).subscribe(function (res) {
            if (res.status === true) {
                _this.gotosignup('signupstep2');
            }
            else {
                _this.presentToast(res.message);
            }
        }, function (err) {
            _this.presentToast(err.error.message);
            console.log(err.error.message);
        });
    };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_7__["PageTrack"])('Signup Screen'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_8__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_5__["UniqueDeviceID"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map