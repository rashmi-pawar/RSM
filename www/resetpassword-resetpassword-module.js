(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resetpassword-resetpassword-module"],{

/***/ "./src/app/resetpassword/resetpassword.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.module.ts ***!
  \*******************************************************/
/*! exports provided: ResetpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordPageModule", function() { return ResetpasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resetpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resetpassword.page */ "./src/app/resetpassword/resetpassword.page.ts");







var routes = [
    {
        path: '',
        component: _resetpassword_page__WEBPACK_IMPORTED_MODULE_6__["ResetpasswordPage"]
    }
];
var ResetpasswordPageModule = /** @class */ (function () {
    function ResetpasswordPageModule() {
    }
    ResetpasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_resetpassword_page__WEBPACK_IMPORTED_MODULE_6__["ResetpasswordPage"]]
        })
    ], ResetpasswordPageModule);
    return ResetpasswordPageModule;
}());



/***/ }),

/***/ "./src/app/resetpassword/resetpassword.page.html":
/*!*******************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" defaultHref=\"forgotpassword\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"dark\">\n      Reset Password\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div class=\"ion-padding-horizontal\">\n    <form [formGroup]=\"onAddForm\" class=\"list-form\">\n\n      <ion-item lines=\"none\" no-padding class=\"log-data\">\n        <ion-label position=\"floating\">Email Address</ion-label>\n        <ion-input type=\"text\" formControlName=\"email\" inputmode=\"email\" clearOnEdit=\"false\"></ion-input>\n      </ion-item>\n      <div *ngIf=\"onAddForm.controls.email.hasError('required') && onAddForm.controls.email.touched\">\n        <p class=\"text08\">Please enter email address.</p>\n      </div>\n      <ion-item lines=\"none\" no-padding class=\"log-data\">\n        <ion-label position=\"floating\">New Password</ion-label>\n        <ion-input type=\"password\" formControlName=\"newpassword\" inputmode=\"password\" minlength=\"8\" clearOnEdit=\"false\">\n        </ion-input>\n      </ion-item>\n      <div *ngIf=\"onAddForm.controls.newpassword.hasError('required') && onAddForm.controls.newpassword.touched\">\n        <p class=\"text08\">Please enter password.</p>\n      </div>\n      <div *ngIf=\"onAddForm.controls.newpassword.hasError('pattern') && onAddForm.controls.newpassword.touched\">\n        <p class=\"text08\">Password must contain at least 8 characters, uppercase, lowercase, special character and number</p>\n      </div>\n      <ion-item lines=\"none\" no-padding class=\"log-data\">\n        <ion-label position=\"floating\">Confirm Password</ion-label>\n        <ion-input type=\"password\" formControlName=\"retypepassword\" inputmode=\"password\" clearOnEdit=\"false\" minlength=\"8\">\n        </ion-input>\n      </ion-item>\n      <div *ngIf=\"onAddForm.controls.retypepassword.hasError('required') && onAddForm.controls.retypepassword.touched\">\n        <p class=\"text08\">Please enter confirm password.</p>\n      </div>\n      <ion-item lines=\"none\" no-padding class=\"log-data ion-padding-bottom\">\n        <ion-label position=\"floating\">Enter OTP</ion-label>\n        <ion-input type=\"number\" pattern=\"[0-9]*\" formControlName=\"otp\" clearOnEdit=\"false\"></ion-input>\n      </ion-item>\n      <div *ngIf=\"onAddForm.controls.otp.hasError('required') && onAddForm.controls.otp.touched\">\n        <p class=\"text08\">Please enter OTP.</p>\n      </div>\n      <ion-button expand=\"full\" color=\"primary\" class=\"ion-margin-top\" (click)=\"reset()\" [disabled]=\"!onAddForm.valid \"\n        mode=\"md\">Reset</ion-button>\n    </form>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/resetpassword/resetpassword.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forgot-pass h1 {\n  color: #2f2f2f;\n  font-size: 24px;\n}\n\n.avvv {\n  padding: 35px;\n}\n\n.forgot-pass ion-icon {\n  font-size: 30px;\n}\n\n@media screen and (max-width: 360px) {\n  .forgot-pass ion-icon {\n    font-size: 26px;\n  }\n  .forgot-pass h1 {\n    font-size: 22px;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .forgot-pass ion-icon {\n    font-size: 24px;\n  }\n  .forgot-pass h1 {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxjQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksYUFBQTtBQ0FKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBRUk7SUFDSSxlQUFBO0VDQ047RURDRTtJQUVBLGVBQUE7RUNBRjtBQUNGOztBREVBO0VBRUk7SUFDSSxlQUFBO0VDRE47RURHRTtJQUVBLGVBQUE7RUNGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jnb3QtcGFzcyBoMVxue1xuICAgIGNvbG9yOiAjMmYyZjJmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmF2dnZ7XG4gICAgcGFkZGluZzogMzVweDtcbn1cbi5mb3Jnb3QtcGFzcyBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweClcbntcbiAgICAuZm9yZ290LXBhc3MgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgfVxuICAgIC5mb3Jnb3QtcGFzcyBoMVxue1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpXG57XG4gICAgLmZvcmdvdC1wYXNzIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgICAuZm9yZ290LXBhc3MgaDFcbntcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG59IiwiLmZvcmdvdC1wYXNzIGgxIHtcbiAgY29sb3I6ICMyZjJmMmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmF2dnYge1xuICBwYWRkaW5nOiAzNXB4O1xufVxuXG4uZm9yZ290LXBhc3MgaW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5mb3Jnb3QtcGFzcyBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG4gIC5mb3Jnb3QtcGFzcyBoMSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAuZm9yZ290LXBhc3MgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAuZm9yZ290LXBhc3MgaDEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/resetpassword/resetpassword.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.page.ts ***!
  \*****************************************************/
/*! exports provided: ResetpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordPage", function() { return ResetpasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");








var ResetpasswordPage = /** @class */ (function () {
    function ResetpasswordPage(activatedRoute, formBuilder, navCtrl, apiService, settingService, toastCtrl) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.settingService = settingService;
        this.toastCtrl = toastCtrl;
        this.nextURL = '';
        this.userid = this.settingService.getUserId();
        this.onAddForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"),
            ])),
            newpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$"),
            ])),
            retypepassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
        });
    }
    ResetpasswordPage.prototype.goto = function (url) {
        this.navCtrl.navigateBack("/" + url, { queryParams: { nextURL: this.nextURL } });
    };
    ResetpasswordPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.onAddForm.patchValue({ email: params.email });
            _this.nextURL = params.nextURL;
        });
    };
    ResetpasswordPage.prototype.presentToast = function (msg) {
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
    ResetpasswordPage.prototype.reset = function () {
        var _this = this;
        if (this.onAddForm.value.newpassword === this.onAddForm.value.retypepassword) {
            var data = {
                email: this.onAddForm.value.email,
                password: this.onAddForm.value.newpassword,
                confirm_password: this.onAddForm.value.retypepassword,
                otp: this.onAddForm.value.otp,
            };
            this.apiService.resetpassword(data).subscribe(function (res) {
                if (res["status"] == true) {
                    _this.presentToast(res["message"]);
                    _this.navCtrl.navigateRoot("/login", { queryParams: { nextURL: _this.nextURL } });
                    _this.onAddForm.reset();
                }
                else {
                    _this.presentToast(res["message"]);
                }
            }, function (err) {
                _this.presentToast(err.error.message);
                console.log(err.error.message);
            });
        }
        else {
            this.presentToast("Password and Confirm password doesnt match");
        }
    };
    ResetpasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-resetpassword",
            template: __webpack_require__(/*! ./resetpassword.page.html */ "./src/app/resetpassword/resetpassword.page.html"),
            styles: [__webpack_require__(/*! ./resetpassword.page.scss */ "./src/app/resetpassword/resetpassword.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_3__["PageTrack"])("Reset Password Screen"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_7__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
    ], ResetpasswordPage);
    return ResetpasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=resetpassword-resetpassword-module.js.map