(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manualtrip-manualtrip-module"],{

/***/ "./src/app/manualtrip/manualtrip.module.ts":
/*!*************************************************!*\
  !*** ./src/app/manualtrip/manualtrip.module.ts ***!
  \*************************************************/
/*! exports provided: ManualtripPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualtripPageModule", function() { return ManualtripPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _manualtrip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manualtrip.page */ "./src/app/manualtrip/manualtrip.page.ts");





// import { LocationPage } from '../location/location.page';


var routes = [
    {
        path: '',
        component: _manualtrip_page__WEBPACK_IMPORTED_MODULE_6__["ManualtripPage"]
    }
];
var ManualtripPageModule = /** @class */ (function () {
    function ManualtripPageModule() {
    }
    ManualtripPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_manualtrip_page__WEBPACK_IMPORTED_MODULE_6__["ManualtripPage"]]
        })
    ], ManualtripPageModule);
    return ManualtripPageModule;
}());



/***/ }),

/***/ "./src/app/manualtrip/manualtrip.page.html":
/*!*************************************************!*\
  !*** ./src/app/manualtrip/manualtrip.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"trips\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add trip </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"onAddForm\" class=\"list-form\">\n    <ion-row class=\"trip-add-page\">\n      <ion-col align-items-start size=\"3\" no-padding>\n        <ion-text>\n          <h5>Distance</h5>\n        </ion-text>\n      </ion-col>\n      <ion-col size=\"5\">\n        <ion-input placeholder=\"Enter\" class=\"login-inputt\" type=\"text\" formControlName=\"distance\">\n        </ion-input>\n      </ion-col>\n      <ion-col size=\"4\" no-padding>\n        <ion-button color=\"primary\" expand=\"full\" (click)=\"goTo('location')\" mode=\"ios\">calculate</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-item no-padding lines=\"none\"\n      *ngIf=\"onAddForm.controls.distance.hasError('required') && onAddForm.controls.distance.touched\">\n      <p class=\"text08\">Sorry, field distance is required!</p>\n    </ion-item>\n    <ion-item lines=\"none\" no-padding\n      *ngIf=\"onAddForm.controls.distance.hasError('pattern') && onAddForm.controls.distance.touched\">\n      <p class=\"text08\">Distance must be contains decimal numbers (e.g 5.0)!</p>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"trip-add-unit\">\n      <ion-label position=\"stacked\">Unit</ion-label>\n      <ion-select placeholder=\"Select Unit\" formControlName=\"unit\">\n        <ion-select-option value=\"km\">KM</ion-select-option>\n        <ion-select-option value=\"mi\">MI</ion-select-option>\n        <ion-select-option value=\"ft\">FT</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item lines=\"none\" no-padding\n      *ngIf=\"onAddForm.controls.unit.hasError('required') && onAddForm.controls.unit.touched\">\n      <p class=\"text08\">Sorry, field unit is required!</p>\n    </ion-item>\n    <ion-item lines=\"none\" no-padding class=\"date-design\">\n      <ion-label position=\"stacked\">Start Date and Time</ion-label>\n      <ion-datetime display-format=\"YYYY-MM-DDTHH:mm\" placeholder=\"Start Date and Time\" formControlName=\"date\">\n      </ion-datetime>\n    </ion-item>\n    <ion-item lines=\"none\" no-padding class=\"date-design\">\n      <ion-label position=\"stacked\">End Date and Time</ion-label>\n      <ion-datetime display-format=\"YYYY-MM-DDTHH:mm\" placeholder=\"End Date and Time\" formControlName=\"date\">\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item lines=\"none\" no-padding\n      *ngIf=\"onAddForm.controls.date.hasError('required') && onAddForm.controls.date.touched\">\n      <p class=\"text08\">Sorry, field date is required!</p>\n    </ion-item>\n    <ion-row>\n      <ion-col align-items-start size=\"7\">\n        <ion-item no-padding lines=\"none\" class=\"trip-add-unit\">\n          <ion-label position=\"stacked\">Trip Category</ion-label>\n          <ion-select placeholder=\"Trip Category\" formControlName=\"vehicle_type\">\n            <ion-select-option *ngFor=\"let vtype of vehiclelist \" value=\"{{vtype.name}}\">{{vtype.name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"5\">\n        <button type=\"button\" class=\"add-vehicle-btn\" (click)=\"presentAlertPrompt()\">\n          <ion-icon name=\"add\"></ion-icon> Add Vehicle\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-item no-padding lines=\"none\" class=\"trip-note\">\n      <ion-label position=\"stacked\">My notes about this trip</ion-label>\n      <ion-textarea></ion-textarea>\n    </ion-item>\n\n\n    <ion-item no-padding\n      *ngIf=\"onAddForm.controls.vehicle_type.hasError('required') && onAddForm.controls.vehicle_type.touched\">\n      <p class=\"text08\">Sorry, field trip category is required!</p>\n    </ion-item>\n    <ion-button color=\"primary\" class=\"log-btn\" mode=\"ios\" icon-left size=\"medium\" expand=\"full\" (click)=\"save()\"\n      tappable [disabled]=\"!onAddForm.valid\">\n      SAVE\n    </ion-button>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/manualtrip/manualtrip.page.scss":
/*!*************************************************!*\
  !*** ./src/app/manualtrip/manualtrip.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".trip-add-page h5 {\n  margin: 14px 0px 0px;\n  color: #2f2f2f;\n}\n\n.date-design ion-datetime {\n  border: 1px solid #d5d5d5;\n  padding-left: 10px;\n  margin-top: 7px;\n}\n\nbutton.add-vehicle-btn {\n  background: #009cde;\n  color: #fff;\n  margin-top: 25px;\n  padding: 12px 0px;\n  width: 100%;\n}\n\n.trip-note ion-textarea {\n  border: 1px solid #d5d5d5;\n  margin-top: 6px;\n}\n\nion-item {\n  margin-bottom: 10px;\n}\n\nbutton.add-vehicle-btn ion-icon {\n  vertical-align: bottom;\n}\n\n@media only screen and (max-width: 414px) {\n  button.add-vehicle-btn {\n    margin-top: 40px;\n  }\n}\n\n@media only screen and (max-width: 411px) {\n  button.add-vehicle-btn {\n    margin-top: 25px;\n  }\n}\n\n@media only screen and (max-width: 375px) {\n  button.add-vehicle-btn {\n    margin-top: 40px;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  button.add-vehicle-btn {\n    margin-top: 25px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  button.add-vehicle-btn {\n    margin-top: 39px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL21hbnVhbHRyaXAvbWFudWFsdHJpcC5wYWdlLnNjc3MiLCJzcmMvYXBwL21hbnVhbHRyaXAvbWFudWFsdHJpcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREFBO0VBRUkseUJBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFFSSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksc0JBQUE7QUNHSjs7QURJQTtFQUVJO0lBRUksZ0JBQUE7RUNITjtBQUNGOztBRE9BO0VBRUk7SUFFSSxnQkFBQTtFQ1BOO0FBQ0Y7O0FEV0E7RUFFSTtJQUVJLGdCQUFBO0VDWE47QUFDRjs7QURlQTtFQUVJO0lBRUksZ0JBQUE7RUNmTjtBQUNGOztBRG1CQTtFQUVJO0lBRUksZ0JBQUE7RUNuQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21hbnVhbHRyaXAvbWFudWFsdHJpcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJpcC1hZGQtcGFnZSBoNXtcbiAgICBtYXJnaW46IDE0cHggMHB4IDBweDtcbiAgICBjb2xvcjogIzJmMmYyZjtcbn1cbi5kYXRlLWRlc2lnbiBpb24tZGF0ZXRpbWVcbntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDVkNWQ1O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG59XG5idXR0b24uYWRkLXZlaGljbGUtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA5Y2RlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgcGFkZGluZzogMTJweCAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4udHJpcC1ub3RlIGlvbi10ZXh0YXJlYVxue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNWQ1ZDU7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xufVxuaW9uLWl0ZW1cbntcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuYnV0dG9uLmFkZC12ZWhpY2xlLWJ0biBpb24taWNvbntcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIH1cblxuXG5cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSBcbntcbiAgICBidXR0b24uYWRkLXZlaGljbGUtYnRuIHtcbiAgICAgICAgXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgXG4gICAgfVxuXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMXB4KSBcbntcbiAgICBidXR0b24uYWRkLXZlaGljbGUtYnRuIHtcbiAgICAgICAgXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgXG4gICAgfVxuXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSBcbntcbiAgICBidXR0b24uYWRkLXZlaGljbGUtYnRuIHtcbiAgICAgICAgXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgXG4gICAgfVxuXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSBcbntcbiAgICBidXR0b24uYWRkLXZlaGljbGUtYnRuIHtcbiAgICAgICAgXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgXG4gICAgfVxuXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSBcbntcbiAgICBidXR0b24uYWRkLXZlaGljbGUtYnRuIHtcbiAgICAgICAgXG4gICAgICAgIG1hcmdpbi10b3A6IDM5cHg7XG4gICAgICAgXG4gICAgfVxuXG59IiwiLnRyaXAtYWRkLXBhZ2UgaDUge1xuICBtYXJnaW46IDE0cHggMHB4IDBweDtcbiAgY29sb3I6ICMyZjJmMmY7XG59XG5cbi5kYXRlLWRlc2lnbiBpb24tZGF0ZXRpbWUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDVkNWQ1O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cblxuYnV0dG9uLmFkZC12ZWhpY2xlLWJ0biB7XG4gIGJhY2tncm91bmQ6ICMwMDljZGU7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBwYWRkaW5nOiAxMnB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50cmlwLW5vdGUgaW9uLXRleHRhcmVhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZDVkNTtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmJ1dHRvbi5hZGQtdmVoaWNsZS1idG4gaW9uLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gIGJ1dHRvbi5hZGQtdmVoaWNsZS1idG4ge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDExcHgpIHtcbiAgYnV0dG9uLmFkZC12ZWhpY2xlLWJ0biB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICBidXR0b24uYWRkLXZlaGljbGUtYnRuIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIGJ1dHRvbi5hZGQtdmVoaWNsZS1idG4ge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgYnV0dG9uLmFkZC12ZWhpY2xlLWJ0biB7XG4gICAgbWFyZ2luLXRvcDogMzlweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/manualtrip/manualtrip.page.ts":
/*!***********************************************!*\
  !*** ./src/app/manualtrip/manualtrip.page.ts ***!
  \***********************************************/
/*! exports provided: ManualtripPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualtripPage", function() { return ManualtripPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");















var ManualtripPage = /** @class */ (function () {
    function ManualtripPage(formBuilder, storageService, settingService, modalController, navCtrl, activatedRoute, toastCtrl, alertController, events, actionSheetController, platform, base64, transfer, file, filePath, camera, webview, sanitizer) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.settingService = settingService;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.events = events;
        this.actionSheetController = actionSheetController;
        this.platform = platform;
        this.base64 = base64;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.camera = camera;
        this.webview = webview;
        this.sanitizer = sanitizer;
        this.vehiclelist = [];
        this.userid = '';
        this.correctPath = '';
        this.currentName = '';
        this.selectedImageStart = '';
        this.selectedImageEnd = '';
        this.viewImageStart = '';
        this.viewImageEnd = '';
        this.onAddForm = this.formBuilder.group({
            distance: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9](.[0-9]+)?")
            ])),
            unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            vehicle_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.onAddForm.patchValue({
                distance: params.distance,
                unit: params.unit
            });
        });
        this.events.subscribe('user:created', function (time) {
            _this.userid = _this.settingService.getUserId();
        });
    }
    ManualtripPage.prototype.ngOnInit = function () {
        this.userid = this.settingService.getUserId();
        this.viewVehicletype();
    };
    ManualtripPage.prototype.selectImage = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Select Photo',
                            cssClass: 'my-custom-class',
                            buttons: [{
                                    text: 'Capture Photo',
                                    handler: function () {
                                        console.log('Capture Photo');
                                        _this.getPicture(_this.camera.PictureSourceType.CAMERA, type);
                                    }
                                }, {
                                    text: 'Select From Gallery',
                                    handler: function () {
                                        console.log('Select From Gallery');
                                        _this.getPicture(_this.camera.PictureSourceType.PHOTOLIBRARY, type);
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
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
    ManualtripPage.prototype.getPicture = function (sourceType, type) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 60,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            if (_this.platform.is('android') && _this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath).then(function (filePath) {
                    _this.correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    _this.currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(_this.correctPath, _this.currentName, _this.createFileName(), type);
                });
            }
            else {
                _this.currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                _this.correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(_this.correctPath, _this.currentName, _this.createFileName(), type);
            }
        }, function (err) {
            console.log('Error while selecting image.');
        });
    };
    // Always get the accurate path to your apps folder
    ManualtripPage.prototype.pathForImage = function (img, type) {
        if (img === null) {
            return '';
        }
        else {
            if (type === 'start') {
                this.viewImageStart = this.webview.convertFileSrc(this.file.dataDirectory + img);
            }
            else {
                this.viewImageEnd = this.webview.convertFileSrc(this.file.dataDirectory + img);
            }
        }
        // this.uploadcamera = false;
    };
    // Copy the image to a local folder
    ManualtripPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName, type) {
        var _this = this;
        this.file
            .copyFile(namePath, currentName, this.file.dataDirectory, newFileName)
            .then(function (success) {
            if (type === 'start') {
                _this.selectedImageStart = newFileName;
                _this.pathForImage(_this.selectedImageStart, type);
            }
            else {
                _this.selectedImageEnd = newFileName;
                _this.pathForImage(_this.selectedImageEnd, type);
            }
        }, function (error) {
            console.log('Error while storing file.');
        });
    };
    // Create a new name for the image
    ManualtripPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + '.jpg';
        return newFileName;
    };
    ManualtripPage.prototype.getImgContent = function (imgFile) {
        return this.sanitizer.bypassSecurityTrustUrl(imgFile);
    };
    ManualtripPage.prototype.presentAlertPrompt = function () {
        console.log('presentAlertPrompt');
    };
    ManualtripPage.prototype.presentToast = function (msg) {
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
    ManualtripPage.prototype.createTable = function () {
        this.storageService
            .createVehicleTable()
            .then(function (res) {
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ManualtripPage.prototype.viewVehicletype = function () {
        var _this = this;
        this.vehiclelist = [];
        this.storageService
            .viewVehicle(this.userid)
            .then(function (res) {
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.vehiclelist.push({
                        id: res.rows.item(i).id,
                        name: res.rows.item(i).name,
                        type: res.rows.item(i).type,
                        date: res.rows.item(i).date
                    });
                }
            }
            else {
                _this.vehiclelist = [];
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ManualtripPage.prototype.save = function () {
        var _this = this;
        this.storageService
            .createTable()
            .then(function (val) {
            _this.storageService
                .addTrip("", "", "", _this.onAddForm.value.distance, _this.onAddForm.value.unit, _this.onAddForm.value.vehicle_type, _this.onAddForm.value.vehicle_name, _this.onAddForm.value.startdate, _this.onAddForm.value.enddate, _this.onAddForm.value.starttime, _this.onAddForm.value.endtime, _this.userid, _this.selectedImageStart, _this.selectedImageEnd)
                .then(function (val) {
                _this.presentToast("Trip saved successfully.");
                _this.navCtrl.navigateRoot("/trips");
            })
                .catch(function (err) {
                console.log(err);
            });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ManualtripPage.prototype.goTo = function (path) {
        this.navCtrl.navigateRoot("/" + path);
    };
    ManualtripPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-manualtrip",
            template: __webpack_require__(/*! ./manualtrip.page.html */ "./src/app/manualtrip/manualtrip.page.html"),
            styles: [__webpack_require__(/*! ./manualtrip.page.scss */ "./src/app/manualtrip/manualtrip.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_6__["PageTrack"])("Manual Trip Screen"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_7__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__["Base64"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__["FilePath"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__["WebView"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["DomSanitizer"]])
    ], ManualtripPage);
    return ManualtripPage;
}());



/***/ })

}]);
//# sourceMappingURL=manualtrip-manualtrip-module.js.map