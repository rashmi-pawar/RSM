(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addvehicle-addvehicle-module"],{

/***/ "./src/app/addvehicle/addvehicle.module.ts":
/*!*************************************************!*\
  !*** ./src/app/addvehicle/addvehicle.module.ts ***!
  \*************************************************/
/*! exports provided: AddvehiclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddvehiclePageModule", function() { return AddvehiclePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addvehicle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addvehicle.page */ "./src/app/addvehicle/addvehicle.page.ts");







var routes = [
    {
        path: '',
        component: _addvehicle_page__WEBPACK_IMPORTED_MODULE_6__["AddvehiclePage"]
    }
];
var AddvehiclePageModule = /** @class */ (function () {
    function AddvehiclePageModule() {
    }
    AddvehiclePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_addvehicle_page__WEBPACK_IMPORTED_MODULE_6__["AddvehiclePage"]]
        })
    ], AddvehiclePageModule);
    return AddvehiclePageModule;
}());



/***/ }),

/***/ "./src/app/addvehicle/addvehicle.page.html":
/*!*************************************************!*\
  !*** ./src/app/addvehicle/addvehicle.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"settings\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Vehicle</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <form [formGroup]=\"onAddForm\" class=\"list-form\">\n    <ion-item class=\"log-data\" no-padding lines=\"none\">\n      <ion-label position=\"stacked\">Name</ion-label>\n      <ion-input class=\"login-inputt\" type=\"text\" formControlName=\"vehiclename\">\n      </ion-input>\n    </ion-item>\n    <ion-item no-padding lines=\"none\"\n      *ngIf=\"onAddForm.controls.vehiclename.hasError('required') && onAddForm.controls.vehiclename.touched\">\n      <p class=\"text08\">Sorry, field name is required!</p>\n    </ion-item>\n    <ion-item class=\"log-data\" no-padding lines=\"none\">\n      <ion-label position=\"stacked\">Type</ion-label>\n      <ion-input class=\"login-inputt\" type=\"text\" formControlName=\"vehicletype\">\n      </ion-input>\n    </ion-item>\n    <ion-item lines=\"none\" no-padding\n      *ngIf=\"onAddForm.controls.vehicletype.hasError('required') && onAddForm.controls.vehicletype.touched\">\n      <p class=\"text08\">Sorry, field type is required!</p>\n    </ion-item>\n  </form>\n  <div>\n    <ion-button color=\"primary\" class=\"log-btn\" mode=\"ios\" icon-left size=\"medium\" expand=\"full\" (click)=\"addVehicle()\"\n      [disabled]=\"!onAddForm.valid\" tappable>\n      SAVE\n    </ion-button>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/addvehicle/addvehicle.page.scss":
/*!*************************************************!*\
  !*** ./src/app/addvehicle/addvehicle.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHZlaGljbGUvYWRkdmVoaWNsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/addvehicle/addvehicle.page.ts":
/*!***********************************************!*\
  !*** ./src/app/addvehicle/addvehicle.page.ts ***!
  \***********************************************/
/*! exports provided: AddvehiclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddvehiclePage", function() { return AddvehiclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");







var AddvehiclePage = /** @class */ (function () {
    function AddvehiclePage(formBuilder, storageService, settingService, toastCtrl, events) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.settingService = settingService;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.userid = '';
        this.events.subscribe('user:created', function (time) {
            _this.userid = _this.settingService.getUserId();
        });
    }
    AddvehiclePage.prototype.ngOnInit = function () {
        this.userid = this.settingService.getUserId();
        this.createTable();
        this.onAddForm = this.formBuilder.group({
            vehiclename: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            vehicletype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
    };
    AddvehiclePage.prototype.addVehicle = function () {
        console.log('addVehicle');
    };
    AddvehiclePage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: "Vehicle added successfully.",
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddvehiclePage.prototype.createTable = function () {
        this.storageService
            .createVehicleTable()
            .then(function (res) {
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AddvehiclePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-addvehicle",
            template: __webpack_require__(/*! ./addvehicle.page.html */ "./src/app/addvehicle/addvehicle.page.html"),
            styles: [__webpack_require__(/*! ./addvehicle.page.scss */ "./src/app/addvehicle/addvehicle.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_6__["PageTrack"])("Vehicle Screen"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"]])
    ], AddvehiclePage);
    return AddvehiclePage;
}());



/***/ })

}]);
//# sourceMappingURL=addvehicle-addvehicle-module.js.map