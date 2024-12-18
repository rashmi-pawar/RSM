(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpassword-forgotpassword-module"],{

/***/ "./src/app/forgotpassword/forgotpassword.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.module.ts ***!
  \*********************************************************/
/*! exports provided: ForgotpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpassword.page */ "./src/app/forgotpassword/forgotpassword.page.ts");







var routes = [
    {
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpasswordPage"]
    }
];
var ForgotpasswordPageModule = /** @class */ (function () {
    function ForgotpasswordPageModule() {
    }
    ForgotpasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpasswordPage"]]
        })
    ], ForgotpasswordPageModule);
    return ForgotpasswordPageModule;
}());



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.html":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" defaultHref=\"login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"dark\">\n      Forgot Password\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"avvv ion-padding-horizontal\">\n    <form [formGroup]=\"onAddForm\" class=\"list-form\">\n\n      <ion-item lines=\"none\" no-padding class=\"log-data\">\n        <ion-label position=\"floating\">Email Address</ion-label>\n        <ion-input type=\"text\" formControlName=\"email\" inputmode=\"email\" clearOnEdit=\"false\"></ion-input>\n      </ion-item>\n      <div *ngIf=\"onAddForm.controls.email.hasError('required') && onAddForm.controls.email.touched\">\n        <p class=\"text08\">Please enter email address.</p>\n      </div>\n      <div *ngIf=\"onAddForm.controls.email.hasError('pattern') && onAddForm.controls.email.touched\">\n        <p class=\"text08\">Enter valid email address.</p>\n      </div>\n      <ion-text>\n        <p class=\"for-pass\" (click)=\"goalready('resetpassword')\">Already have an OTP?</p>\n      </ion-text>\n      <ion-button expand=\"full\" mode=\"md\" color=\"primary\" class=\"ion-margin-top\" [disabled]=\"!onAddForm.valid\"\n        (click)=\"forgotPassword()\">Send otp</ion-button>\n    </form>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forgot-pass p {\n  margin: 0px;\n  margin-bottom: 20px;\n  font-size: 12px;\n  color: #777;\n}\n\n.forgot-pass h1 {\n  color: #2f2f2f;\n  font-size: 24px;\n}\n\n.for-pass {\n  display: inline-block;\n  float: right;\n  color: #009CDE;\n  text-align: right;\n  margin: 10px 0px 22px;\n  padding-right: 2%;\n}\n\n.avvv {\n  padding: 35px;\n}\n\n.forgot-pass ion-icon {\n  font-size: 30px;\n}\n\n@media screen and (max-width: 360px) {\n  .forgot-pass ion-icon {\n    font-size: 26px;\n  }\n  .forgot-pass h1 {\n    font-size: 22px;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .forgot-pass ion-icon {\n    font-size: 24px;\n  }\n  .forgot-pass h1 {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNBSjs7QURFQTtFQUVJLGNBQUE7RUFDQSxlQUFBO0FDQUo7O0FERUE7RUFFSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FEQUE7RUFFSTtJQUNJLGVBQUE7RUNFTjtFREFFO0lBRUEsZUFBQTtFQ0NGO0FBQ0Y7O0FEQ0E7RUFFSTtJQUNJLGVBQUE7RUNBTjtFREVFO0lBRUEsZUFBQTtFQ0RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3RwYXNzd29yZC9mb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9yZ290LXBhc3MgcFxue1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNzc3O1xufVxuLmZvcmdvdC1wYXNzIGgxXG57XG4gICAgY29sb3I6ICMyZjJmMmY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuLmZvci1wYXNzXG57XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogIzAwOUNERTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW46MTBweCAwcHggMjJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcbn1cbi5hdnZ2e1xuICAgIHBhZGRpbmc6IDM1cHg7XG59XG4uZm9yZ290LXBhc3MgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpXG57XG4gICAgLmZvcmdvdC1wYXNzIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgIH1cbiAgICAuZm9yZ290LXBhc3MgaDFcbntcbiAgICBmb250LXNpemU6IDIycHg7XG59XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjMyMHB4KVxue1xuICAgIC5mb3Jnb3QtcGFzcyBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gICAgLmZvcmdvdC1wYXNzIGgxXG57XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxufSIsIi5mb3Jnb3QtcGFzcyBwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi5mb3Jnb3QtcGFzcyBoMSB7XG4gIGNvbG9yOiAjMmYyZjJmO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5mb3ItcGFzcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzAwOUNERTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbjogMTBweCAwcHggMjJweDtcbiAgcGFkZGluZy1yaWdodDogMiU7XG59XG5cbi5hdnZ2IHtcbiAgcGFkZGluZzogMzVweDtcbn1cblxuLmZvcmdvdC1wYXNzIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAuZm9yZ290LXBhc3MgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgfVxuICAuZm9yZ290LXBhc3MgaDEge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLmZvcmdvdC1wYXNzIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLmZvcmdvdC1wYXNzIGgxIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.ts ***!
  \*******************************************************/
/*! exports provided: ForgotpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPage", function() { return ForgotpasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");







var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(router, formBuilder, apiService, navCtrl, toastCtrl, activatedRoute, alertController) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.nextURL = '';
        this.onAddForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})")
            ]))
        });
    }
    ForgotpasswordPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            console.log("params.data", params.nextURL);
            _this.nextURL = params.nextURL;
        });
    };
    ForgotpasswordPage.prototype.presentAlertPrompt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Enter OTP",
                            inputs: [
                                {
                                    name: "OTP",
                                    type: "text",
                                    id: "name2-id",
                                    placeholder: "Enter OTP"
                                }
                            ],
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                    cssClass: "secondary",
                                    handler: function () {
                                        console.log("Confirm Cancel");
                                    }
                                },
                                {
                                    text: "Ok",
                                    handler: function (data) {
                                        var otpdata = {
                                            otp: data.OTP
                                        };
                                        _this.apiService.validateotp(otpdata).subscribe(function (res) {
                                            if (res["status"] == true) {
                                                _this.presentToast(res["message"]);
                                                _this.navCtrl.navigateRoot("/resetpassword", { queryParams: { nextURL: _this.nextURL } });
                                            }
                                            else {
                                                _this.presentToast(res["message"]);
                                            }
                                        }, function (err) {
                                            _this.presentToast(err.error.message);
                                            console.log(err.error.message);
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
    ForgotpasswordPage.prototype.presentToast = function (msg) {
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
    ForgotpasswordPage.prototype.goto = function (url) {
        this.navCtrl.navigateBack('/' + url, { queryParams: { nextURL: this.nextURL } });
    };
    ForgotpasswordPage.prototype.goalready = function (url) {
        this.onAddForm.reset();
        this.router.navigate(["/resetpassword"], { queryParams: { nextURL: this.nextURL } });
    };
    ForgotpasswordPage.prototype.forgotPassword = function () {
        var _this = this;
        var data = {
            email: this.onAddForm.value.email
        };
        this.apiService.forgotpassword(data).subscribe(function (res) {
            if (res["status"] == true) {
                _this.presentToast(res["message"]);
                _this.router.navigate(["/resetpassword"], {
                    queryParams: { email: _this.onAddForm.value.email, nextURL: _this.nextURL }
                });
            }
            else {
                _this.presentToast(res["message"]);
            }
        }, function (err) {
            _this.presentToast(err.error.message);
            console.log(err.error.message);
        });
    };
    ForgotpasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-forgotpassword",
            template: __webpack_require__(/*! ./forgotpassword.page.html */ "./src/app/forgotpassword/forgotpassword.page.html"),
            styles: [__webpack_require__(/*! ./forgotpassword.page.scss */ "./src/app/forgotpassword/forgotpassword.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_6__["PageTrack"])("Forgot Password Screen"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgotpassword-forgotpassword-module.js.map