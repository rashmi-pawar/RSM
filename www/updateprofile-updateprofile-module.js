(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["updateprofile-updateprofile-module"],{

/***/ "./src/app/updateprofile/updateprofile.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/updateprofile/updateprofile.module.ts ***!
  \*******************************************************/
/*! exports provided: UpdateprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateprofilePageModule", function() { return UpdateprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _updateprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateprofile.page */ "./src/app/updateprofile/updateprofile.page.ts");







var routes = [
    {
        path: '',
        component: _updateprofile_page__WEBPACK_IMPORTED_MODULE_6__["UpdateprofilePage"]
    }
];
var UpdateprofilePageModule = /** @class */ (function () {
    function UpdateprofilePageModule() {
    }
    UpdateprofilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_updateprofile_page__WEBPACK_IMPORTED_MODULE_6__["UpdateprofilePage"]]
        })
    ], UpdateprofilePageModule);
    return UpdateprofilePageModule;
}());



/***/ }),

/***/ "./src/app/updateprofile/updateprofile.page.html":
/*!*******************************************************!*\
  !*** ./src/app/updateprofile/updateprofile.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" defaultHref=\"tabs/dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"dark\">\n      Update Profile\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <ion-segment-button mode=\"md\">\n      <div class=\"profile-pic\" (click)=\"editProfileClick()\">\n        <img class=\"avtar\" src=\"{{this.userData.profile_pic || 'assets/img/avatar.jpg' }}\" onerror=\"this.src='assets/img/avatar.jpg'\" width=\"60\" height=\"60\"/>\n        <ion-icon class=\"avtar-icon\" name=\"md-create\"></ion-icon>\n      </div>\n    </ion-segment-button>\n  </div>\n  <form [formGroup]=\"onAddForm\" class=\"list-form\">\n    <ion-item lines=\"none\" no-padding class=\"log-data\">\n      <ion-label position=\"stacked\">First Name</ion-label>\n      <ion-input placeholder=\"First Name\" class=\"login-inputt\" type=\"text\" formControlName=\"firstname\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\" no-padding\n      *ngIf=\"onAddForm.controls.firstname.hasError('required') && onAddForm.controls.firstname.touched\">\n      <p class=\"text08\">Sorry, field first name is required!</p>\n    </ion-item>\n    <ion-item lines=\"none\" no-padding class=\"log-data\">\n      <ion-label position=\"stacked\">Last Name</ion-label>\n      <ion-input placeholder=\"Last Name\" class=\"login-inputt\" type=\"text\" formControlName=\"lastname\">\n      </ion-input>\n    </ion-item>\n    <ion-item lines=\"none\" no-padding\n      *ngIf=\"onAddForm.controls.lastname.hasError('required') && onAddForm.controls.lastname.touched\">\n      <p class=\"text08\">Sorry, field last name is required!</p>\n    </ion-item>\n    <ion-item lines=\"none\" no-padding class=\"log-data\">\n      <ion-label position=\"stacked\">Email Address</ion-label>\n      <ion-input placeholder=\"Email\" class=\"login-inputt\" type=\"email\" formControlName=\"email\" [disabled]>\n      </ion-input>\n    </ion-item>\n    <ion-item lines=\"none\" no-padding\n      *ngIf=\"onAddForm.controls.email.hasError('required') && onAddForm.controls.email.touched\">\n      <p class=\"text08\">Sorry, field Email is required!</p>\n    </ion-item>\n    <ion-item lines=\"none\" no-padding\n      *ngIf=\"onAddForm.controls.email.hasError('pattern') && onAddForm.controls.email.touched\">\n      <p class=\"text08\">Enter valid email address</p>\n    </ion-item>\n    <ion-item lines=\"none\" no-padding class=\"log-data\">\n      <ion-label position=\"stacked\">Mobile Number</ion-label>\n      <ion-input placeholder=\"Mobile Number\" class=\"login-inputt\" type=\"tel\" formControlName=\"mobile_no\"\n        pattern=\"[0-9]*\" minlength=\"10\" maxlength=\"10\">\n      </ion-input>\n    </ion-item>\n    <ion-item lines=\" none\" no-padding\n      *ngIf=\"onAddForm.controls.mobile_no.hasError('required') && onAddForm.controls.mobile_no.touched\">\n      <p class=\"text08\">Sorry, field Mobile Number is required!</p>\n    </ion-item>\n    <ion-item lines=\"none\" no-padding\n      *ngIf=\"(!onAddForm.controls.mobile_no.hasError('pattern') && (onAddForm.controls.mobile_no.hasError('minlength') || onAddForm.controls.mobile_no.hasError('maxlength'))) && onAddForm.controls.mobile_no.touched\">\n      <p class=\"text08\">Enter valid mobile number</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" no-padding\n      *ngIf=\"onAddForm.controls.mobile_no.hasError('pattern') && onAddForm.controls.mobile_no.touched\">\n      <p class=\"text08\">Enter valid mobile number</p>\n    </ion-item>\n    <ion-item lines=\"none\" no-padding class=\"log-data\">\n      <ion-label position=\"stacked\">Post Code</ion-label>\n      <ion-input placeholder=\"Post Code\" class=\"login-inputt\" type=\"number\" formControlName=\"pincode\" pattern=\"[0-9]*\">\n      </ion-input>\n    </ion-item>\n    <ion-item lines=\"none\" no-padding\n      *ngIf=\"onAddForm.controls.pincode.hasError('required') && onAddForm.controls.pincode.touched\">\n      <p class=\"text08\">Sorry, field Postcode is required!</p>\n    </ion-item>\n    <ion-item lines=\"none\" no-padding\n      *ngIf=\"onAddForm.controls.pincode.hasError('pattern') && onAddForm.controls.pincode.touched\">\n      <p class=\"text08\">Enter valid postcode</p>\n    </ion-item>\n  </form>\n  <div>\n    <ion-button color=\"primary\" class=\"log-btn\" mode=\"ios\" icon-left size=\"medium\" expand=\"full\" (click)=\"update()\"\n      [disabled]=\"!onAddForm.valid\" tappable>\n      SAVE\n    </ion-button>\n    <ion-button color=\"danger\" class=\"log-btn\" mode=\"ios\" icon-left size=\"medium\" expand=\"full\"\n      routerLink=\"/updatepassword\" tappable>\n      UPDATE PASSWORD\n    </ion-button>\n  </div>\n  <div class=\"filter\" padding *ngIf=\"showProfileViewer\">\n    <div class=\"viewer\" padding>\n      <div class=\"close-btn\" >\n        <ion-button (click)=\"showProfileViewer = false\">\n          <ion-icon name=\"close-circle\"></ion-icon>\n        </ion-button>\n      </div>\n      <img src=\"{{this.userData.profile_pic || 'assets/img/avatar.jpg' }}\" onerror=\"this.src='assets/img/avatar.jpg'\"/>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/updateprofile/updateprofile.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/updateprofile/updateprofile.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-pic {\n  position: relative;\n}\n\n.avtar {\n  border-radius: 50px;\n  border: 2px solid #000000;\n}\n\n.avtar-icon {\n  position: absolute;\n  bottom: 6px;\n  right: 0px;\n  font-size: 13px;\n  color: #ffffff;\n  background: #000000;\n  border-radius: 20px;\n  padding: 2px;\n}\n\n.filter {\n  position: fixed;\n  width: 100%;\n  z-index: 99;\n  height: 100%;\n  top: 0px;\n  left: 0;\n  background: rgba(0, 0, 0, 0.8);\n  display: table;\n}\n\n.filter .viewer {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.close-btn {\n  text-align: center;\n}\n\n.close-btn ion-button {\n  --background: transparent;\n  font-size: 24px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3VwZGF0ZXByb2ZpbGUvdXBkYXRlcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3VwZGF0ZXByb2ZpbGUvdXBkYXRlcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNHRjs7QUREQTtFQUVJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRERJO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQ0dOOztBREFBO0VBQ0Usa0JBQUE7QUNHRjs7QURGRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZXByb2ZpbGUvdXBkYXRlcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1waWN7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hdnRhcntcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcbn1cbi5hdnRhci1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDZweDtcbiAgcmlnaHQ6IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMnB4O1xufVxuLmZpbHRlclxue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLy8gcGFkZGluZzo1MHB4IDIwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC44KTtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAudmlld2Vye1xuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxufVxuLmNsb3NlLWJ0bntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBpb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxufSIsIi5wcm9maWxlLXBpYyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmF2dGFyIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcbn1cblxuLmF2dGFyLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNnB4O1xuICByaWdodDogMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5maWx0ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5maWx0ZXIgLnZpZXdlciB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jbG9zZS1idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2xvc2UtYnRuIGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGhlaWdodDogMzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/updateprofile/updateprofile.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/updateprofile/updateprofile.page.ts ***!
  \*****************************************************/
/*! exports provided: UpdateprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateprofilePage", function() { return UpdateprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");










var UpdateprofilePage = /** @class */ (function () {
    function UpdateprofilePage(formBuilder, navCtrl, apiService, settingService, toastCtrl, actionSheetController, events, transfer, camera, webview, alertController, loadingCtrl) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.settingService = settingService;
        this.toastCtrl = toastCtrl;
        this.actionSheetController = actionSheetController;
        this.events = events;
        this.transfer = transfer;
        this.camera = camera;
        this.webview = webview;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.showProfileViewer = false;
        this.userData = this.settingService.getUserData();
        events.subscribe('user:updated', function (time) {
            _this.userData = _this.settingService.getUserData();
        });
        this.onAddForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ])),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            mobile_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{10}')
            ])),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{4}')
            ]))
        });
        this.onAddForm.patchValue({
            firstname: this.userData.first_name,
            lastname: this.userData.last_name,
            mobile_no: this.userData.mobile_no,
            email: this.userData.email,
            pincode: this.userData.zip
        });
    }
    UpdateprofilePage.prototype.presentToast = function (msg) {
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
    UpdateprofilePage.prototype.ngOnInit = function () { };
    UpdateprofilePage.prototype.editProfileClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            buttons: [{
                                    text: 'Capture Camera',
                                    handler: function () {
                                        console.log('Camera clicked');
                                        _this.getPicture('camera');
                                    }
                                }, {
                                    text: 'Select From Gallery',
                                    handler: function () {
                                        console.log('Gallery clicked');
                                        _this.getPicture('gallery');
                                    }
                                }].concat((this.userData.profile_pic ? [{
                                    text: 'View Profile Picture',
                                    handler: function () {
                                        console.log('View Profile Picture');
                                        // this.deletePicture();
                                        _this.showProfileViewer = true;
                                    }
                                },
                                {
                                    text: 'Delete Profile Picture',
                                    handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var alert;
                                        var _this = this;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    console.log('Delete Profile Picture');
                                                    return [4 /*yield*/, this.alertController.create({
                                                            header: 'Confirm!',
                                                            message: 'Are you sure want to delete profile picture?',
                                                            buttons: [
                                                                {
                                                                    text: 'No',
                                                                    role: 'cancel',
                                                                    handler: function (blah) {
                                                                        console.log('Confirm Cancel: blah');
                                                                    }
                                                                }, {
                                                                    text: 'Yes',
                                                                    handler: function () {
                                                                        console.log('Confirm Yes');
                                                                        _this.deletePicture();
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
                                    }); }
                                }] : []), [{
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }])
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdateprofilePage.prototype.deletePicture = function () {
        var _this = this;
        console.log("Delete Click");
        var data = {
            auth_token: this.settingService.getToken()
        };
        this.apiService.deleteProfilePic(data, this.userData.id).subscribe(function (res) {
            if (res.status === true) {
                var temp = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.userData);
                temp.profile_pic = null;
                _this.settingService.setUserData(temp);
                _this.events.publish('user:updated', Date.now());
                _this.presentToast('Profile Pic Successfully');
            }
            else {
                _this.presentToast(res.message);
            }
        }, function (err) {
            console.log(err);
            if (err.status === 401) {
                _this.settingService.logout();
                _this.goTo('login');
            }
            else {
                _this.goTo('tabs/dashboard');
            }
            _this.presentToast(err.error.message);
            console.log(err.error.message);
        });
    };
    UpdateprofilePage.prototype.getPicture = function (type) {
        var self = this;
        var options = {
            quality: 100,
            sourceType: type === 'gallery' ? this.camera.PictureSourceType.PHOTOLIBRARY : this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.FILE_URI,
        };
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData);
            self.uploadFile(imageData);
        }, function (err) {
            // Handle error
        });
    };
    UpdateprofilePage.prototype.uploadFile = function (imageURI) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loader, fileTransfer, options;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('upload file call');
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Uploading...'
                            })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        fileTransfer = this.transfer.create();
                        options = {
                            fileKey: 'userfile',
                            fileName: 'profilepic',
                            chunkedMode: false,
                            mimeType: 'image/jpeg',
                            headers: {
                                Authorization: this.settingService.getToken()
                            }
                        };
                        fileTransfer.upload(imageURI, _api_service__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + '/user/profilepic/' + this.userData.id, options)
                            .then(function (data) {
                            loader.dismiss();
                            console.log(data.response);
                            var res = JSON.parse(data.response);
                            _this.presentToast(res.message);
                            if (res.user) {
                                _this.userData.profile_pic = res.user.profile_pic;
                                _this.settingService.setUserData(res.user);
                            }
                            _this.events.publish('prifilepic:updated', (_this.userData.profile_pic));
                        }, function (err) {
                            console.log(err);
                            loader.dismiss();
                            var error = JSON.parse(err.body);
                            _this.presentToast(error.message);
                            if (err.status === 401) {
                                _this.settingService.logout();
                                _this.goTo('login');
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdateprofilePage.prototype.update = function () {
        var _this = this;
        var data = {
            first_name: this.onAddForm.value.firstname,
            last_name: this.onAddForm.value.lastname,
            mobile_no: this.onAddForm.value.mobile_no,
            email: this.onAddForm.value.email,
            zip: this.onAddForm.value.pincode,
            auth_token: this.settingService.getToken()
        };
        this.apiService.updateprofile(data, this.userData.id).subscribe(function (res) {
            if (res.status === true) {
                _this.settingService.setUserData(res.user);
                _this.events.publish('user:updated', Date.now());
                _this.presentToast('User Updated Successfully');
                // this.goTo('tabs/dashboard');
            }
            else {
                _this.presentToast(res.message);
            }
        }, function (err) {
            console.log(err);
            if (err.status === 401) {
                _this.settingService.logout();
                _this.goTo('login');
            }
            else {
                _this.goTo('tabs/dashboard');
            }
            _this.presentToast(err.error.message);
            console.log(err.error.message);
        });
    };
    UpdateprofilePage.prototype.goTo = function (url) {
        this.navCtrl.navigateRoot('/' + url);
    };
    UpdateprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updateprofile',
            template: __webpack_require__(/*! ./updateprofile.page.html */ "./src/app/updateprofile/updateprofile.page.html"),
            styles: [__webpack_require__(/*! ./updateprofile.page.scss */ "./src/app/updateprofile/updateprofile.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_5__["PageTrack"])('Update Profile Screen'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_6__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], UpdateprofilePage);
    return UpdateprofilePage;
}());



/***/ })

}]);
//# sourceMappingURL=updateprofile-updateprofile-module.js.map