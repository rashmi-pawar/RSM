(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signupstep2-signupstep2-module"],{

/***/ "./src/app/signupstep2/signupstep2.module.ts":
/*!***************************************************!*\
  !*** ./src/app/signupstep2/signupstep2.module.ts ***!
  \***************************************************/
/*! exports provided: Signupstep2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signupstep2PageModule", function() { return Signupstep2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signupstep2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signupstep2.page */ "./src/app/signupstep2/signupstep2.page.ts");







var routes = [
    {
        path: '',
        component: _signupstep2_page__WEBPACK_IMPORTED_MODULE_6__["Signupstep2Page"]
    }
];
var Signupstep2PageModule = /** @class */ (function () {
    function Signupstep2PageModule() {
    }
    Signupstep2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signupstep2_page__WEBPACK_IMPORTED_MODULE_6__["Signupstep2Page"]]
        })
    ], Signupstep2PageModule);
    return Signupstep2PageModule;
}());



/***/ }),

/***/ "./src/app/signupstep2/signupstep2.page.html":
/*!***************************************************!*\
  !*** ./src/app/signupstep2/signupstep2.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" defaultHref=\"signup\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"dark\">\n      Registration\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div class=\"ion-padding-horizontal\">\n    <form [formGroup]=\"onAddForm\">\n      <ion-item class=\"register-data\" no-padding lines=\"none\">\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type=\"password\" inputmode=\"password\" formControlName=\"password\" minlength=\"8\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\" no-padding\n        *ngIf=\"onAddForm.controls.password.hasError('required') && onAddForm.controls.password.touched\">\n        <p class=\"text08\">Please enter password.</p>\n      </ion-item>\n      <ion-item lines=\"none\" no-padding\n        *ngIf=\"onAddForm.controls.password.hasError('pattern') && onAddForm.controls.password.touched\">\n        <p class=\"text08\">Password must contain at least 8 characters, uppercase, lowercase, special character and number</p>\n      </ion-item>\n\n      <ion-item class=\"register-data\" no-padding lines=\"none\">\n        <ion-label position=\"floating\">Confirm Password</ion-label>\n        <ion-input type=\"password\" inputmode=\"password\" formControlName=\"confirmpassword\" minlength=\"8\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\" no-padding\n        *ngIf=\"onAddForm.controls.confirmpassword.hasError('required') && onAddForm.controls.confirmpassword.touched\">\n        <p class=\"text08\">Please enter confirm password.</p>\n      </ion-item>\n      <div class=\"ion-padding-vertical\">\n        <ion-button color=\"primary\" expand=\"block\" mode=\"md\" (click)=\"signUp()\" [disabled]=\"!onAddForm.valid\">Register\n        </ion-button>\n      </div>\n    </form>\n    <div class=\"log-here\">\n      <p>Already have an account?<span class=\"blue-color\" (click)=\"goto('login')\">Login here </span></p>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/signupstep2/signupstep2.page.scss":
/*!***************************************************!*\
  !*** ./src/app/signupstep2/signupstep2.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-data ion-input {\n  border-bottom: 1px solid #d8d8d8;\n}\n\n.log-here {\n  text-align: center;\n}\n\n.log-here p {\n  color: #2f2f2f;\n}\n\n.log-here span {\n  padding-left: 20px;\n}\n\n.forgot-pass h1 {\n  color: #2f2f2f;\n  font-size: 24px;\n}\n\n@media screen and (max-width: 360px) {\n  .register-data ion-input {\n    width: 94%;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .register-data ion-input {\n    width: 93%;\n  }\n}\n\n.forgot-pass ion-icon {\n  font-size: 30px;\n}\n\n@media screen and (max-width: 360px) {\n  .forgot-pass ion-icon {\n    font-size: 26px;\n  }\n  .forgot-pass h1 {\n    font-size: 22px;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .forgot-pass ion-icon {\n    font-size: 24px;\n  }\n  .forgot-pass h1 {\n    font-size: 20px;\n  }\n  .log-here p {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3NpZ251cHN0ZXAyL3NpZ251cHN0ZXAyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbnVwc3RlcDIvc2lnbnVwc3RlcDIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0NBQUE7QUNBSjs7QURFQTtFQUVJLGtCQUFBO0FDQUo7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBREFBO0VBRUksY0FBQTtFQUNBLGVBQUE7QUNFSjs7QURFQTtFQUVJO0lBQ0ksVUFBQTtFQ0FOO0FBQ0Y7O0FERUE7RUFFSTtJQUNJLFVBQUE7RUNETjtBQUNGOztBREdBO0VBQ0ksZUFBQTtBQ0RKOztBREdBO0VBRUk7SUFDSSxlQUFBO0VDRE47RURHRTtJQUVBLGVBQUE7RUNGRjtBQUNGOztBRElBO0VBRUk7SUFDSSxlQUFBO0VDSE47RURLRTtJQUVBLGVBQUE7RUNKRjtFRE1GO0lBRUksZUFBQTtFQ0xGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaWdudXBzdGVwMi9zaWdudXBzdGVwMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5yZWdpc3Rlci1kYXRhIGlvbi1pbnB1dCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOGQ4ZDg7XG59XG4ubG9nLWhlcmVcbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9nLWhlcmUgcCB7XG4gICAgY29sb3I6ICMyZjJmMmY7XG59XG4ubG9nLWhlcmUgc3BhbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmZvcmdvdC1wYXNzIGgxXG57XG4gICAgY29sb3I6ICMyZjJmMmY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpXG57XG4gICAgLnJlZ2lzdGVyLWRhdGEgaW9uLWlucHV0IHtcbiAgICAgICAgd2lkdGggOiA5NCUgO1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpXG57XG4gICAgLnJlZ2lzdGVyLWRhdGEgaW9uLWlucHV0IHtcbiAgICAgICAgd2lkdGggOiA5MyUgO1xuICAgIH1cbn1cbi5mb3Jnb3QtcGFzcyBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweClcbntcbiAgICAuZm9yZ290LXBhc3MgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgfVxuICAgIC5mb3Jnb3QtcGFzcyBoMVxue1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpXG57XG4gICAgLmZvcmdvdC1wYXNzIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgICAuZm9yZ290LXBhc3MgaDFcbntcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4ubG9nLWhlcmUgcFxue1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbn0iLCIucmVnaXN0ZXItZGF0YSBpb24taW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcbn1cblxuLmxvZy1oZXJlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nLWhlcmUgcCB7XG4gIGNvbG9yOiAjMmYyZjJmO1xufVxuXG4ubG9nLWhlcmUgc3BhbiB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmZvcmdvdC1wYXNzIGgxIHtcbiAgY29sb3I6ICMyZjJmMmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLnJlZ2lzdGVyLWRhdGEgaW9uLWlucHV0IHtcbiAgICB3aWR0aDogOTQlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAucmVnaXN0ZXItZGF0YSBpb24taW5wdXQge1xuICAgIHdpZHRoOiA5MyU7XG4gIH1cbn1cbi5mb3Jnb3QtcGFzcyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLmZvcmdvdC1wYXNzIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gIH1cbiAgLmZvcmdvdC1wYXNzIGgxIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5mb3Jnb3QtcGFzcyBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIC5mb3Jnb3QtcGFzcyBoMSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC5sb2ctaGVyZSBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/signupstep2/signupstep2.page.ts":
/*!*************************************************!*\
  !*** ./src/app/signupstep2/signupstep2.page.ts ***!
  \*************************************************/
/*! exports provided: Signupstep2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signupstep2Page", function() { return Signupstep2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ "./node_modules/@ionic-native/unique-device-id/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");








var Signupstep2Page = /** @class */ (function () {
    function Signupstep2Page(formBuilder, navCtrl, apiService, settingService, toastCtrl, uniqueDeviceID, http) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.settingService = settingService;
        this.toastCtrl = toastCtrl;
        this.uniqueDeviceID = uniqueDeviceID;
        this.http = http;
        this.deviceToken = "";
        this.data = "";
        this.onAddForm = this.formBuilder.group({
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$"),
            ])),
        });
        this.data = this.settingService.getSignUpData();
    }
    Signupstep2Page.prototype.ngOnInit = function () {
        var _this = this;
        this.uniqueDeviceID
            .get()
            .then(function (uuid) {
            _this.deviceToken = uuid;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    Signupstep2Page.prototype.goto = function (url) {
        this.settingService.unsetSignUpData();
        this.navCtrl.navigateBack("/" + url);
    };
    Signupstep2Page.prototype.goback = function (url) {
        this.navCtrl.navigateBack("/" + url);
    };
    Signupstep2Page.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 2000,
                            mode: "md",
                            cssClass: "customToast",
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Signupstep2Page.prototype.signUp = function () {
        var _this = this;
        if (this.onAddForm.value.password === this.onAddForm.value.confirmpassword) {
            var data = {
                first_name: this.data.firstname,
                last_name: this.data.lastname,
                email: this.data.email,
                password: this.onAddForm.value.password,
                deviceId: this.deviceToken,
                mobile_no: this.data.mobile_no,
                city: "",
                state: "",
                country: "",
                zip: this.data.pincode,
            };
            this.apiService.signup(data).subscribe(function (res) {
                if (res.status === true) {
                    _this.onAddForm.reset();
                    _this.settingService.unsetSignUpData();
                    _this.presentToast("You have successfully registered, please login to continue using the App.");
                    _this.navCtrl.navigateRoot("/login");
                }
                else {
                    _this.presentToast(res.message);
                }
            }, function (err) {
                _this.presentToast(err.error.message);
                console.log(err.error.message);
            });
        }
        else {
            this.presentToast("Mismatch password and confirm password");
        }
    };
    Signupstep2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-signupstep2",
            template: __webpack_require__(/*! ./signupstep2.page.html */ "./src/app/signupstep2/signupstep2.page.html"),
            styles: [__webpack_require__(/*! ./signupstep2.page.scss */ "./src/app/signupstep2/signupstep2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_7__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_5__["UniqueDeviceID"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], Signupstep2Page);
    return Signupstep2Page;
}());



/***/ })

}]);
//# sourceMappingURL=signupstep2-signupstep2-module.js.map