(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trip-starttrip-starttrip-module"],{

/***/ "./src/app/trip/starttrip/starttrip.module.ts":
/*!****************************************************!*\
  !*** ./src/app/trip/starttrip/starttrip.module.ts ***!
  \****************************************************/
/*! exports provided: StarttripPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarttripPageModule", function() { return StarttripPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _starttrip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./starttrip.page */ "./src/app/trip/starttrip/starttrip.page.ts");







var routes = [
    {
        path: '',
        component: _starttrip_page__WEBPACK_IMPORTED_MODULE_6__["StarttripPage"]
    }
];
var StarttripPageModule = /** @class */ (function () {
    function StarttripPageModule() {
    }
    StarttripPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_starttrip_page__WEBPACK_IMPORTED_MODULE_6__["StarttripPage"]]
        })
    ], StarttripPageModule);
    return StarttripPageModule;
}());



/***/ }),

/***/ "./src/app/trip/starttrip/starttrip.page.html":
/*!****************************************************!*\
  !*** ./src/app/trip/starttrip/starttrip.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"tripsetting\"></ion-back-button>\n        </ion-buttons>\n        <ion-title mode=\"ios\">Start Trip</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <form [formGroup]=\"addVehicleForm\">\n        <div class=\"add-new-vehicle\" padding *ngIf=\"showvehicle\">\n            <div class=\"vehicle-detail\" padding>\n                <h1>Add Vehicle</h1>\n                <div class=\"vehicle-form\">\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <ion-label>Vehicle Name</ion-label>\n                            <ion-input placeholder=\"Enter Vehicle Name\" formControlName=\"vname\"></ion-input>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row\n                        *ngIf=\"addVehicleForm.controls.vname.hasError('required') && addVehicleForm.controls.vname.touched\">\n                        <ion-col size=\"12\" no-padding>\n                            <p class=\"text08\">Sorry, field vehicle name is required!</p>\n                        </ion-col>\n                    </ion-row>\n                </div>\n\n                <div class=\"vehicle-form\">\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <ion-label>License plate</ion-label>\n                            <ion-input placeholder=\"Enter license plate\" formControlName=\"platenumber\"></ion-input>\n                        </ion-col>\n                    </ion-row>\n                </div>\n\n                <ion-row class=\"loc-btn\">\n                    <ion-col size=\"6\">\n                        <button type=\"button\" class=\"cancle-btn\" (click)=\"startTripAgain()\">Cancel</button>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <button type=\"button\" expand=\"full\" color=\"primary\" expand=\"block\" class=\"save-btn\"\n                            (click)=\"addnewvehicle()\" [disabled]=\"!addVehicleForm.valid\">Save</button>\n                    </ion-col>\n                </ion-row>\n\n            </div>\n        </div>\n    </form>\n\n    <div #map1 id=\"map1\" style=\"position: inherit;\n  overflow: visible;\"></div>\n\n    <form [formGroup]=\"onAddForm\">\n        <div class=\"trip-time\" padding>\n\n            <div class=\"start-trip-time\">\n\n                <div class=\"recording\" *ngIf=\"starttracking == 1\">\n                    <ion-row>\n                        <ion-col size=\"12\" no-padding>\n                            <ion-icon name=\"locate\"></ion-icon>\n                            <ion-label>Recording trip...</ion-label>\n                        </ion-col>\n                    </ion-row>\n                </div>\n\n                <div class=\"time-dist\">\n                    <ion-row>\n                        <ion-col size=\"6\" no-padding class=\"border-rite\" *ngIf=\"starttracking == 0\">\n                            <p><span>Time:</span> &nbsp;{{totalTime}}</p>\n                        </ion-col>\n                        <ion-col size=\"6\" no-padding *ngIf=\"starttracking == 0\">\n                            <p><span>Distance:</span>&nbsp;{{distance}} {{unit}}</p>\n                        </ion-col>\n                    </ion-row>\n                </div>\n\n                <div class=\"trip-end\" padding>\n                    <ion-row class=\"start-date\">\n                        <ion-col size=\"2\" no-padding>\n                            <img src=\"assets/icon/vehicle.png\">\n                        </ion-col>\n                        <ion-col size=\"7\" no-padding>\n                            <p>{{autocomplete.origininput}}\n                            </p>\n\n                        </ion-col>\n                        <ion-col size=\"3\" no-padding>\n                            <button type=\"button\" class=\"end-btn\" (click)=\"stopLiveTracking()\"\n                                *ngIf=\"starttracking ==1\">End trip</button>\n                        </ion-col>\n                    </ion-row>\n                    <div class=\"time-record\">\n                        <ion-row>\n                            <ion-col size=\"6\" style=\"text-align: center;\">\n                                <ion-label>Start trip photo</ion-label>\n                                <br />\n                                <div (click)=\"selectImage('start')\" style=\"margin-top: 10px;height: 25vh;\">\n                                    <img class=\"image-size\" src=\"../../../assets/icon/picture.png\" *ngIf=\"!viewImageStart\">\n                                    <img class=\"add-image-auto\" [src]=\"getImgContent(viewImageStart)\" *ngIf=\"viewImageStart\">\n                                </div>\n                            </ion-col>\n                            <ion-col size=\"6\" style=\"text-align: center;\">\n                                <ion-label>End trip photo</ion-label>\n                                <div (click)=\"selectImage('end')\" style=\"margin-top: 10px;height: 25vh;\">\n                                    <img class=\"image-size\" src=\"../../../assets/icon/picture.png\" *ngIf=\"!viewImageEnd\">\n                                    <img class=\"add-image-auto\" [src]=\"getImgContent(viewImageEnd)\" *ngIf=\"viewImageEnd\">\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col size=\"5\" no-padding>\n                                <ion-label>Date</ion-label>\n                                <p> {{onAddForm.value.startdate | date: 'dd/MM/yyyy'}}</p>\n                            </ion-col>\n                            <ion-col size=\"4\" no-padding>\n                                <ion-label>Start Time</ion-label>\n                                <p> {{onAddForm.value.starttime | date: 'HH:mm'}}</p>\n                            </ion-col>\n                            <ion-col size=\"3\" no-padding>\n                                <ion-label>End Time</ion-label>\n                                <p *ngIf=\"starttracking==1\"> Record...</p>\n                                <p *ngIf=\"starttracking==0\"> {{endtime | date:'HH:mm'}}</p>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                    <div class=\"trip-type ion-padding-vertical\">\n                        <ion-row>\n                            <ion-col size=\"5\">\n                                <ion-label aria-required=\"true\">Trip Category *</ion-label>\n                                <ion-select formControlName=\"vehicle_type\" required aria-required=\"required\">\n                                    <ion-select-option value=\"business\" selected>Business</ion-select-option>\n                                    <ion-select-option value=\"personal\">Personal</ion-select-option>\n                                </ion-select>\n                            </ion-col>\n                            <ion-col size=\"5\">\n                                <ion-label>Vehicle Name *</ion-label>\n                                <ion-select formControlName=\"vehicle_name\" [(ngModel)]=\"vehicleName\">\n                                    <ion-select-option value=\"\" *ngIf=\"!vehiclelist?.length\">Please create vehicle\n                                    </ion-select-option>\n                                    <ion-select-option *ngFor=\"let vtype of vehiclelist \" value=\"{{vtype.platenumber}}\">\n                                        <ion-icon name=\"logo-model-s\" color=\"primary\"></ion-icon>\n                                        {{vtype.name}}({{vtype.platenumber}})\n                                    </ion-select-option>\n                                </ion-select>\n                            </ion-col>\n                            <ion-col size=\"2\" no-padding>\n                                <ion-icon name=\"add\" (click)=\"showvehicle = true\" class=\"add-icn\"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row\n                            *ngIf=\"onAddForm.controls.vehicle_name.hasError('required') && isFormSubmit\">\n                            <ion-col size=\"12\" no-padding>\n                                <p class=\"text08\">Sorry, field vehicle name is required!</p>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row\n                            *ngIf=\"onAddForm.controls.vehicle_type.hasError('required') && isFormSubmit\">\n                            <ion-col size=\"12\" no-padding>\n                                <p class=\"text08\">Sorry, field trip category is required!</p>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                    <ion-textarea placeholder=\"Write something about this trip...\" class=\"about-trip\"\n                        formControlName=\"notes\">\n                    </ion-textarea>\n                    <ion-item no-padding lines=\"none\"\n                        *ngIf=\"onAddForm.controls.notes.hasError('required') && isFormSubmit\">\n                        <p class=\"text08\">Sorry, field trip category is required!</p>\n                    </ion-item>\n                    <div class=\"record-btn\">\n                        <ion-button color=\"primary\" expand=\"block\" *ngIf=\"starttracking ==0\" (click)=\"finalSave()\"\n                            >Save & Continue\n                        </ion-button>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/trip/starttrip/starttrip.page.scss":
/*!****************************************************!*\
  !*** ./src/app/trip/starttrip/starttrip.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".trip-time {\n  position: absolute;\n  width: 100%;\n  z-index: 99;\n  padding: 0px 20px;\n  top: 20%;\n}\n\n.start-trip-time {\n  background: #fff;\n  border-radius: 5px;\n}\n\n.recording {\n  background: rgba(2, 2, 2, 0.5);\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  padding: 5px;\n}\n\n.recording ion-label {\n  margin-left: 10px;\n  color: #fff !important;\n}\n\n.recording ion-icon {\n  margin-top: 5px;\n  margin-left: 10px;\n  color: #fff !important;\n}\n\n.time-dist {\n  background: #F2F2F2;\n  text-align: center;\n}\n\n.time-dist p {\n  font-size: 14px;\n  color: #62666B;\n  margin: 10px 0px;\n}\n\n.time-dist span {\n  font-size: 12px;\n  color: #606470 !important;\n  margin-right: 5px;\n}\n\n.start-date img {\n  width: 45px;\n}\n\n.start-date p {\n  color: #62666B;\n  font-size: 14px;\n  margin: 5px 0 0;\n}\n\nbutton.end-btn {\n  color: #fff;\n  padding: 8px 20px;\n  background: #FF5357;\n  border: none;\n  margin-top: 5px;\n  border-radius: 5px;\n}\n\n.start-date {\n  border-bottom: 1px solid #d8d8d8;\n  padding-bottom: 10px;\n}\n\n.time-record ion-datetime {\n  color: #323643;\n  font-size: 16px;\n  padding-left: 0px;\n}\n\n.time-record {\n  padding: 20px 0px 5px;\n  border-bottom: 1px solid #d8d8d8;\n}\n\n.time-record p {\n  margin: 10px 0px 0px;\n}\n\n.add-image-auto {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.image-size {\n  margin-top: 40px;\n}\n\nion-label {\n  font-size: 12px;\n  color: #606470;\n}\n\n.trip-type {\n  border-bottom: 1px solid #d8d8d8;\n  padding-bottom: 5px;\n}\n\nion-textarea.about-trip {\n  border: 1px solid #d8d8d8;\n  margin: 20px 0px;\n}\n\n.border-rite p {\n  border-right: 1px solid rgba(135, 140, 142, 0.39);\n}\n\ndiv#map1 {\n  position: inherit !important;\n}\n\n.add-new-vehicle {\n  position: absolute;\n  width: 100%;\n  z-index: 101;\n  height: 100%;\n  padding: 30px 20px;\n  top: 50px;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.vehicle-detail {\n  background-color: white;\n}\n\n.vehicle-detail h1 {\n  color: #009CDE;\n  margin-left: 15px;\n  font-size: 23px;\n  margin-top: 0px;\n}\n\nbutton.cancle-btn {\n  background: transparent;\n  border: 1px solid #62666B;\n  width: 100%;\n  color: #62666B;\n  height: 35px;\n  border-radius: 8px;\n}\n\nbutton.save-btn {\n  background: #009CDE;\n  width: 100%;\n  color: #fff;\n  height: 35px;\n  border-radius: 8px;\n}\n\nion-icon.add-icn {\n  margin-top: 25px;\n  background: #029cde;\n  color: #fff;\n  padding: 6px 10px;\n  border-radius: 5px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3RyaXAvc3RhcnR0cmlwL3N0YXJ0dHJpcC5wYWdlLnNjc3MiLCJzcmMvYXBwL3RyaXAvc3RhcnR0cmlwL3N0YXJ0dHJpcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBRUEsaUJBQUE7RUFDQSxRQUFBO0FDQUo7O0FESUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDREo7O0FERUk7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0FDQVI7O0FERUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0FSOztBRElBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxnQ0FBQTtFQUNBLG9CQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxxQkFBQTtFQUNBLGdDQUFBO0FDREo7O0FESUE7RUFDSSxvQkFBQTtBQ0RKOztBRElBO0VBQ0ksb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDREo7O0FER0E7RUFDSSxnQkFBQTtBQ0FKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGlEQUFBO0FDQ0o7O0FERUE7RUFDSSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdHJpcC9zdGFydHRyaXAvc3RhcnR0cmlwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmlwLXRpbWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC41KTtcclxufVxyXG5cclxuLnN0YXJ0LXRyaXAtdGltZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogNTAlO1xyXG59XHJcbi5yZWNvcmRpbmd7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIsIDIsIDIsIDAuNSk7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnRpbWUtZGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGltZS1kaXN0IHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM2MjY2NkI7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG59XHJcblxyXG4udGltZS1kaXN0IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM2MDY0NzAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uc3RhcnQtZGF0ZSBpbWcge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbn1cclxuXHJcbi5zdGFydC1kYXRlIHAge1xyXG4gICAgY29sb3I6ICM2MjY2NkI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDVweCAwIDA7XHJcbn1cclxuXHJcbmJ1dHRvbi5lbmQtYnRuIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY1MzU3O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uc3RhcnQtZGF0ZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udGltZS1yZWNvcmQgaW9uLWRhdGV0aW1lIHtcclxuICAgIGNvbG9yOiAjMzIzNjQzO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi50aW1lLXJlY29yZCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweCA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcclxufVxyXG5cclxuLnRpbWUtcmVjb3JkIHAge1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweCAwcHg7XHJcbiAgICAvL2NvbG9yOiAjMDBEMzM5O1xyXG59XHJcbi5hZGQtaW1hZ2UtYXV0b3tcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmltYWdlLXNpemV7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzYwNjQ3MDtcclxufVxyXG5cclxuLnRyaXAtdHlwZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbmlvbi10ZXh0YXJlYS5hYm91dC10cmlwIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4O1xyXG59XHJcblxyXG4uYm9yZGVyLXJpdGUgcCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDEzNSwgMTQwLCAxNDIsIDAuMzkpO1xyXG59XHJcblxyXG5kaXYjbWFwMSB7XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWRkLW5ldy12ZWhpY2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTAxO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG59XHJcblxyXG4udmVoaWNsZS1kZXRhaWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi52ZWhpY2xlLWRldGFpbCBoMSB7XHJcbiAgICBjb2xvcjogIzAwOUNERTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG5idXR0b24uY2FuY2xlLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MjY2NkI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjNjI2NjZCO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5idXR0b24uc2F2ZS1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogIzAwOUNERTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1pY29uLmFkZC1pY24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMjljZGU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn0iLCIudHJpcC10aW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICB0b3A6IDIwJTtcbn1cblxuLnN0YXJ0LXRyaXAtdGltZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnJlY29yZGluZyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMiwgMiwgMiwgMC41KTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4ucmVjb3JkaW5nIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLnJlY29yZGluZyBpb24taWNvbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lLWRpc3Qge1xuICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aW1lLWRpc3QgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2MjY2NkI7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbi50aW1lLWRpc3Qgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2MDY0NzAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zdGFydC1kYXRlIGltZyB7XG4gIHdpZHRoOiA0NXB4O1xufVxuXG4uc3RhcnQtZGF0ZSBwIHtcbiAgY29sb3I6ICM2MjY2NkI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiA1cHggMCAwO1xufVxuXG5idXR0b24uZW5kLWJ0biB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgYmFja2dyb3VuZDogI0ZGNTM1NztcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnN0YXJ0LWRhdGUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi50aW1lLXJlY29yZCBpb24tZGF0ZXRpbWUge1xuICBjb2xvcjogIzMyMzY0MztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuLnRpbWUtcmVjb3JkIHtcbiAgcGFkZGluZzogMjBweCAwcHggNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcbn1cblxuLnRpbWUtcmVjb3JkIHAge1xuICBtYXJnaW46IDEwcHggMHB4IDBweDtcbn1cblxuLmFkZC1pbWFnZS1hdXRvIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWFnZS1zaXplIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzYwNjQ3MDtcbn1cblxuLnRyaXAtdHlwZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG5pb24tdGV4dGFyZWEuYWJvdXQtdHJpcCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG5cbi5ib3JkZXItcml0ZSBwIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgxMzUsIDE0MCwgMTQyLCAwLjM5KTtcbn1cblxuZGl2I21hcDEge1xuICBwb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4uYWRkLW5ldy12ZWhpY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi52ZWhpY2xlLWRldGFpbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udmVoaWNsZS1kZXRhaWwgaDEge1xuICBjb2xvcjogIzAwOUNERTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5idXR0b24uY2FuY2xlLWJ0biB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjI2NjZCO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICM2MjY2NkI7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5idXR0b24uc2F2ZS1idG4ge1xuICBiYWNrZ3JvdW5kOiAjMDA5Q0RFO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5pb24taWNvbi5hZGQtaWNuIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgYmFja2dyb3VuZDogIzAyOWNkZTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/trip/starttrip/starttrip.page.ts":
/*!**************************************************!*\
  !*** ./src/app/trip/starttrip/starttrip.page.ts ***!
  \**************************************************/
/*! exports provided: StarttripPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarttripPage", function() { return StarttripPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_helper_unitHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_helper/unitHelper */ "./src/app/_helper/unitHelper.ts");
/* harmony import */ var src_app_service_setting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/setting.service */ "./src/app/service/setting.service.ts");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "./node_modules/@ionic-native/location-accuracy/ngx/index.js");
/* harmony import */ var src_app_helper_date_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_helper/date-format */ "./src/app/_helper/date-format.ts");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var src_app_components_disclaimer_popup_disclaimer_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/disclaimer-popup/disclaimer-popup.component */ "./src/app/components/disclaimer-popup/disclaimer-popup.component.ts");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");























var StarttripPage = /** @class */ (function () {
    function StarttripPage(geolocation, storageService, settingService, modalController, navCtrl, activatedRoute, formBuilder, locationAccuracy, toastCtrl, alertController, events, actionSheetController, platform, base64, socialSharing, transfer, file, filePath, camera, webview, sanitizer) {
        var _this = this;
        this.geolocation = geolocation;
        this.storageService = storageService;
        this.settingService = settingService;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.locationAccuracy = locationAccuracy;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.events = events;
        this.actionSheetController = actionSheetController;
        this.platform = platform;
        this.base64 = base64;
        this.socialSharing = socialSharing;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.camera = camera;
        this.webview = webview;
        this.sanitizer = sanitizer;
        this.autocompleteItems = [];
        this.autocompleteItems1 = [];
        this.mode = 'DRIVING';
        this.distance = '';
        this.userid = '';
        this.gmarkers = [];
        this.showvehicle = false;
        this.icons = '';
        this.vehiclelist = [];
        this.path = [];
        this.starttracking = 1;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
        this.GoogleAutocomplete = '';
        this.today = '';
        this.time = '';
        this.unitHelper = new src_app_helper_unitHelper__WEBPACK_IMPORTED_MODULE_7__["UnitHelper"]();
        this.correctPath = '';
        this.currentName = '';
        this.selectedImageStart = '';
        this.selectedImageEnd = '';
        this.viewImageStart = '';
        this.viewImageEnd = '';
        this.isFormSubmit = false;
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { origininput: '', destinationinput: '' };
        this.autocompleteItems = [];
        this.autocompleteItems1 = [];
        this.icons = {
            start: new google.maps.MarkerImage('assets/icon/locateblue.png', 
            // (width,height)
            new google.maps.Size(44, 32), 
            // The origin point (x,y)
            new google.maps.Point(0, 0), 
            // The anchor point (x,y)
            new google.maps.Point(22, 32)),
            end: new google.maps.MarkerImage('assets/icon/flag.png', 
            // (width,height)
            new google.maps.Size(44, 32), 
            // The origin point (x,y)
            new google.maps.Point(0, 0), 
            // The anchor point (x,y)
            new google.maps.Point(22, 32))
        };
        this.onAddForm = this.formBuilder.group({
            distance: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            startdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            starttime: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            enddate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            endtime: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            vehicle_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            vehicle_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.vehicleName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]))
        });
        this.today = new Date().toJSON().split('T')[0];
        this.time = new Date().toLocaleTimeString();
        this.onAddForm.patchValue({
            startdate: new Date(),
            starttime: new Date()
        });
        this.addVehicleForm = this.formBuilder.group({
            vname: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            platenumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
        });
        this.events.subscribe('user:created', function () {
            _this.userid = _this.settingService.getUserId();
        });
    }
    StarttripPage.prototype.selectImage = function (type) {
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
    StarttripPage.prototype.getPicture = function (sourceType, type) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 40,
            sourceType: sourceType,
            targetWidth: 500,
            targetHeight: 500,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false,
            allowEdit: this.platform.is('ios') ? true : false,
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
    StarttripPage.prototype.pathForImage = function (img, type) {
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
    StarttripPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName, type) {
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
        if (this.platform.is('android')) {
            this.createDirectory(newFileName);
        }
    };
    // Create a new name for the image
    StarttripPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + '.jpg';
        return newFileName;
    };
    StarttripPage.prototype.getImgContent = function (imgFile) {
        return this.sanitizer.bypassSecurityTrustUrl(imgFile);
    };
    StarttripPage.prototype.createDirectory = function (refImageName) {
        var _this = this;
        this.file
            .checkDir(this.file.externalDataDirectory, 'RSMTRIP')
            .then(function (response) {
            _this.file
                .copyFile(_this.correctPath, _this.currentName, _this.file.externalDataDirectory + 'RSMTRIP/', refImageName)
                .then(function (success) {
                console.log('success', success);
            }, function (error) {
                console.log('Error while storing file.');
            });
        })
            .catch(function (err) {
            console.log('Directory doesn\'t exist' + JSON.stringify(err));
            _this.file
                .createDir(_this.file.externalDataDirectory, 'RSMTRIP', false)
                .then(function (response) {
                console.log('Directory create' + response);
                // Copy the image to a local folder
                _this.file
                    .copyFile(_this.correctPath, _this.currentName, _this.file.externalDataDirectory + 'RSMTRIP', refImageName)
                    .then(function (success) {
                    console.log('success', success);
                }, function (error) {
                    console.log('Error while storing file.');
                });
            })
                .catch(function (err) {
                console.log('Directory no create' + JSON.stringify(err));
            });
        });
    };
    StarttripPage.prototype.askToTurnOnGPS = function () {
        var _this = this;
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
            // When GPS Turned ON call method to get Accurate location coordinates
            _this.initMap();
        }, function (error) { return alert('Error requesting location permissions ' + JSON.stringify(error)); });
    };
    StarttripPage.prototype.presentAlert = function (header, subHeader, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            subHeader: subHeader,
                            message: message,
                            buttons: ['OK']
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
    StarttripPage.prototype.ngOnInit = function () {
        var _this = this;
        this.userid = this.settingService.getUserId();
        this.askToTurnOnGPS();
        this.createTable();
        this.viewVehicletype();
        this.storageService.getbyid('usersettings', this.userid)
            .then(function (res) {
            if (res.rows.length > 0) {
                _this.unitvalue = res.rows.item(0).unit;
                _this.unit = res.rows.item(0).unit;
            }
            else {
                _this.unitvalue = 'km';
                _this.unit = 'km';
            }
        });
        try {
            this.storageService.getLastVehicle().then(function (vehicle) {
                if (vehicle != undefined) {
                    _this.vehicleName = vehicle.rows.item(0).platenumber;
                }
            });
        }
        catch (e) { }
    };
    StarttripPage.prototype.createTable = function () {
        this.storageService
            .createVehicleTable()
            .then(function (res) {
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    StarttripPage.prototype.presentToast = function (msg) {
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
    StarttripPage.prototype.addnewvehicle = function () {
        var _this = this;
        this.createTable();
        this.storageService
            .addVehicle(this.addVehicleForm.value.vname, null, this.addVehicleForm.value.platenumber, new Date(), this.userid)
            .then(function (res) {
            if (res.status === 0) {
                _this.presentToast(res.message);
            }
            else {
                _this.storageService.getVehicleById(res.data.insertId).then(function (vehicle) {
                    _this.vehicleName = vehicle.rows.item(0).platenumber;
                });
                _this.showvehicle = false;
                _this.addVehicleForm.reset();
                localStorage.removeItem('edittrip');
                _this.presentToast('Vehicle added successfully');
                _this.viewVehicletype();
            }
        })
            .catch(function (error) {
            _this.presentToast(error);
            console.log(error);
        });
    };
    StarttripPage.prototype.viewVehicletype = function () {
        var _this = this;
        this.vehiclelist = [];
        this.storageService
            .viewVehicle(this.userid)
            .then(function (res) {
            if (res && res.rows && res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.vehiclelist.push({
                        id: res.rows.item(i).id,
                        name: res.rows.item(i).name,
                        type: res.rows.item(i).type,
                        platenumber: res.rows.item(i).platenumber,
                        date: res.rows.item(i).date,
                        userid: res.rows.item(i).userid,
                    });
                }
            }
            else {
                _this.vehiclelist = [];
                _this.showvehicle = true;
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    StarttripPage.prototype.initMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            var geocoder = new google.maps.Geocoder();
            var latlng = { lat: resp.coords.latitude, lng: resp.coords.longitude };
            geocoder.geocode({ location: latlng }, function (results, status) {
                if (status === 'OK') {
                    _this.autocomplete = {
                        origininput: results[0].formatted_address,
                        destinationinput: _this.autocomplete.destinationinput
                    };
                }
            });
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, {
                zoom: 15,
                draggable: true,
                center: { lat: resp.coords.latitude, lng: resp.coords.longitude },
                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.TOP_CENTER
                },
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                scaleControl: true,
                streetViewControl: true,
                streetViewControlOptions: {
                    position: google.maps.ControlPosition.LEFT_TOP
                },
                fullscreenControl: true,
                styles: [
                    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
                    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
                    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
                    {
                        featureType: 'administrative.locality',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#d59563' }]
                    },
                    {
                        featureType: 'poi',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#d59563' }]
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'geometry',
                        stylers: [{ color: '#263c3f' }]
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#6b9a76' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry',
                        stylers: [{ color: '#38414e' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry.stroke',
                        stylers: [{ color: '#212a37' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#9ca5b3' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry',
                        stylers: [{ color: '#746855' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry.stroke',
                        stylers: [{ color: '#1f2835' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#f3d19c' }]
                    },
                    {
                        featureType: 'transit',
                        elementType: 'geometry',
                        stylers: [{ color: '#2f3948' }]
                    },
                    {
                        featureType: 'transit.station',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#d59563' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'geometry',
                        stylers: [{ color: '#17263c' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#515c6d' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.stroke',
                        stylers: [{ color: '#17263c' }]
                    }
                ]
            });
            _this.directionsDisplay.setMap(_this.map);
            _this.makeMarker(latlng, _this.icons.start);
            var options = {
                frequency: 3000,
                enableHighAccuracy: true
            };
            _this.total = 0;
            _this.watch = _this.geolocation
                .watchPosition(options)
                .subscribe(function (position) {
                _this.path.push({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
                for (var i = 0; i < _this.path.length - 1; i++) {
                    var pos1 = new google.maps.LatLng(_this.path[i].lat, _this.path[i].lng);
                    var pos2 = new google.maps.LatLng(_this.path[i + 1].lat, _this.path[i + 1].lng);
                    _this.total += google.maps.geometry.spherical.computeDistanceBetween(pos1, pos2);
                    // this.distance = (this.unitHelper.meterToKm(this.total)).toFixed(1);
                    // this.unit = 'km';
                }
            });
        });
    };
    StarttripPage.prototype.makeMarker = function (position, icon) {
        var myMarker = new google.maps.Marker({
            position: position,
            icon: icon,
            map: this.map
        });
        this.gmarkers.push(myMarker);
    };
    StarttripPage.prototype.stopLiveTracking = function () {
        var _this = this;
        this.starttracking = 0;
        this.enddate = new Date().toJSON().split('T')[0];
        this.endtime = new Date();
        this.onAddForm.controls.enddate.setValue(new Date());
        this.onAddForm.controls.endtime.setValue(new Date());
        var geocoder = new google.maps.Geocoder();
        var latlng = { lat: this.path[this.path.length - 1].lat, lng: this.path[this.path.length - 1].lng };
        geocoder.geocode({ location: latlng }, function (results, status) {
            if (status === 'OK') {
                _this.autocomplete = {
                    origininput: _this.autocomplete.origininput,
                    destinationinput: results[0].formatted_address
                };
                _this.calculateAndDisplayRoute();
            }
        });
        this.watch.unsubscribe();
        navigator.geolocation.clearWatch(this.watch);
        this.presentToast('Stop tracking');
    };
    StarttripPage.prototype.calculateAndDisplayRoute = function () {
        var _this = this;
        if (this.gmarkers.length > 0) {
            this.gmarkers.forEach(function (marker) {
                marker.setMap(null);
                marker = null;
            });
            this.gmarkers = [];
        }
        this.directionsService.route({
            origin: this.autocomplete.origininput,
            destination: this.autocomplete.destinationinput,
            travelMode: this.mode,
            unitSystem: google.maps.UnitSystem.IMPERIAL
        }, function (response, status) {
            if (status === 'OK') {
                _this.fulldistance = isNaN(response.routes[0].legs[0].distance.text) ? 0 : response.routes[0].legs[0].distance.text;
                _this.distance = isNaN(response.routes[0].legs[0].distance.value) ? 0 : response.routes[0].legs[0].distance.value;
                if (_this.unitvalue !== '') {
                    if (_this.unitvalue === 'km') {
                        _this.distance = _this.unitHelper.meterToKm(_this.distance);
                    }
                    else if (_this.unitvalue === 'mi') {
                        _this.distance = _this.unitHelper.meterToMiles(_this.distance);
                    }
                }
                else {
                    _this.distance = _this.unitHelper.meterToKm(_this.distance);
                }
                // this.totalTime = 0;
                // this.totalTime = response.routes[0].legs[0].duration.value;
                var dateformat = new src_app_helper_date_format__WEBPACK_IMPORTED_MODULE_10__["DateFormat"]();
                // tslint:disable-next-line: max-line-length
                _this.totalTime = dateformat.getTimeDiff(_this.onAddForm.value.startdate, _this.onAddForm.value.starttime, _this.onAddForm.value.enddate, _this.onAddForm.value.endtime);
                _this.onAddForm.controls.distance.setValue(_this.distance);
                _this.onAddForm.controls.unit.setValue(_this.unit);
                _this.directionsDisplay.setDirections(response);
                var leg = response.routes[0].legs[0];
                _this.makeMarker(leg.start_location, _this.icons.start);
                _this.makeMarker(leg.end_location, _this.icons.end);
            }
        });
    };
    StarttripPage.prototype.presentDisclaimerModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_components_disclaimer_popup_disclaimer_popup_component__WEBPACK_IMPORTED_MODULE_12__["DisclaimerPopupComponent"],
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data.data === true) {
                                _this.save();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StarttripPage.prototype.finalSave = function () {
        this.isFormSubmit = true;
        if (this.onAddForm.valid) {
            if (this.settingService.getDisclaimer()) {
                this.save();
            }
            else {
                this.presentDisclaimerModal();
            }
        }
    };
    StarttripPage.prototype.save = function () {
        var _this = this;
        this.storageService
            .createTable()
            .then(function (val) {
            _this.storageService
                .addTrip(_this.autocomplete.origininput, _this.autocomplete.destinationinput, _this.onAddForm.value.notes, _this.onAddForm.value.distance, _this.onAddForm.value.unit, _this.onAddForm.value.vehicle_type, _this.onAddForm.value.vehicle_name, _this.onAddForm.value.startdate, _this.onAddForm.value.enddate, _this.onAddForm.value.starttime, _this.onAddForm.value.endtime, _this.userid, _this.selectedImageStart ? _this.selectedImageStart : '', _this.selectedImageEnd ? _this.selectedImageEnd : '')
                .then(function (val) {
                _this.presentToast('Trip saved successfully.');
                localStorage.removeItem('edittrip');
                localStorage.removeItem('tripdata');
                localStorage.setItem('tripdata', JSON.stringify({
                    destination: _this.autocomplete.destinationinput,
                    distance: _this.onAddForm.value.distance,
                    enddate: _this.onAddForm.value.enddate,
                    endtime: _this.onAddForm.value.endtime,
                    id: val.insertId,
                    notes: _this.onAddForm.value.notes,
                    origin: _this.autocomplete.origininput,
                    startdate: _this.onAddForm.value.startdate,
                    starttime: _this.onAddForm.value.starttime,
                    unit: _this.onAddForm.value.unit,
                    userid: _this.userid,
                    vehicleName: _this.onAddForm.value.vehicle_name,
                    vehicleType: _this.onAddForm.value.vehicle_type,
                    viewStartImage: _this.webview.convertFileSrc(_this.file.dataDirectory + _this.selectedImageStart),
                    viewEndImage: _this.webview.convertFileSrc(_this.file.dataDirectory + _this.selectedImageEnd),
                    photoStart: _this.selectedImageStart,
                    photoEnd: _this.selectedImageEnd
                }));
                // this.screenShot(this.onAddForm.value);
                _this.onAddForm.reset();
                _this.today = '';
                _this.time = '';
                _this.navCtrl.navigateRoot('/viewtrip');
                // this.navCtrl.navigateRoot('/triplogbook');
            })
                .catch(function (err) {
                console.log(err);
            });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    StarttripPage.prototype.getStartImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.platform.is('ios')) return [3 /*break*/, 4];
                        if (!this.viewImageStart) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getBase64(this.viewImageStart)];
                    case 1:
                        _a = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = '';
                        _c.label = 3;
                    case 3: return [2 /*return*/, _a];
                    case 4:
                        if (!this.selectedImageStart) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getBase64(this.file.dataDirectory + this.selectedImageStart)];
                    case 5:
                        _b = _c.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        _b = '';
                        _c.label = 7;
                    case 7: return [2 /*return*/, _b];
                }
            });
        });
    };
    StarttripPage.prototype.getEndImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.platform.is('ios')) return [3 /*break*/, 4];
                        if (!this.viewImageEnd) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getBase64(this.viewImageEnd)];
                    case 1:
                        _a = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = '';
                        _c.label = 3;
                    case 3: return [2 /*return*/, _a];
                    case 4:
                        if (!this.selectedImageEnd) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getBase64(this.file.dataDirectory + this.selectedImageEnd)];
                    case 5:
                        _b = _c.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        _b = '';
                        _c.label = 7;
                    case 7: return [2 /*return*/, _b];
                }
            });
        });
    };
    StarttripPage.prototype.screenShot = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var startBase64, endBase64, dateformat, totalTime;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getStartImage()];
                    case 1:
                        startBase64 = _a.sent();
                        return [4 /*yield*/, this.getEndImage()];
                    case 2:
                        endBase64 = _a.sent();
                        dateformat = new src_app_helper_date_format__WEBPACK_IMPORTED_MODULE_10__["DateFormat"]();
                        totalTime = dateformat.getTimeDiff(data.startdate, data.starttime, data.enddate, data.endtime);
                        // context.dismissLoading();
                        this.socialSharing.share("\n          Time: " + totalTime + "\n          Distance: " + (data.distance + data.unit) + "\n          Origin: " + this.autocomplete.origininput + "\n          Start Date: " + moment__WEBPACK_IMPORTED_MODULE_20__(data.startdate).format('dd MMM yyyy HH:mm') + "\n          Destination: " + this.autocomplete.destinationinput + "\n          End Date: " + moment__WEBPACK_IMPORTED_MODULE_20__(data.enddate).format('dd MMM yyyy HH:mm') + "\n          Vehicle Name: " + data.vehicle_name + "\n          Trip Category: " + data.vehicle_type + "\n          Notes: " + (data.notes ? data.notes : '') + "\n        ", 'Trip Detail', (startBase64 ? [startBase64] : []).concat((endBase64 ? [endBase64] : []))).then(function (res) {
                            _this.navCtrl.navigateRoot('/triplogbook');
                            console.log("shareViaEmail then");
                        }).catch(function (e) {
                            console.log("shareViaEmail catch");
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    StarttripPage.prototype.getBase64 = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.base64.encodeFile(url).then(function (base64Start) {
                        if (_this.platform.is('android')) {
                            var realData = base64Start.split(',')[1];
                            return 'data:image/png;base64,' + realData;
                        }
                        return base64Start;
                    }, function (err) {
                        console.log("getBase64", err);
                        return null;
                    }).catch(function (e) {
                        console.log("getBase64 Error", e);
                    })];
            });
        });
    };
    StarttripPage.prototype.startTripAgain = function () {
        var _this = this;
        this.addVehicleForm.reset();
        this.storageService
            .viewVehicle(this.userid)
            .then(function (res) {
            if (res && res.rows && res.rows.length > 0) {
                _this.showvehicle = false;
            }
            else {
                _this.showvehicle = false;
                _this.navCtrl.navigateRoot('/triplogbook');
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StarttripPage.prototype, "mapElement", void 0);
    StarttripPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-starttrip',
            template: __webpack_require__(/*! ./starttrip.page.html */ "./src/app/trip/starttrip/starttrip.page.html"),
            styles: [__webpack_require__(/*! ./starttrip.page.scss */ "./src/app/trip/starttrip/starttrip.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_11__["PageTrack"])("Start Trip Screen"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
            _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            src_app_service_setting_service__WEBPACK_IMPORTED_MODULE_8__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_9__["LocationAccuracy"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_13__["Base64"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_21__["SocialSharing"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_14__["FileTransfer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__["File"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_16__["FilePath"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_17__["Camera"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_18__["WebView"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["DomSanitizer"]])
    ], StarttripPage);
    return StarttripPage;
}());



/***/ })

}]);
//# sourceMappingURL=trip-starttrip-starttrip-module.js.map