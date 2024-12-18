(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trip-logtrip-logtrip-module"],{

/***/ "./src/app/trip/logtrip/logtrip.module.ts":
/*!************************************************!*\
  !*** ./src/app/trip/logtrip/logtrip.module.ts ***!
  \************************************************/
/*! exports provided: LogtripPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogtripPageModule", function() { return LogtripPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _logtrip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logtrip.page */ "./src/app/trip/logtrip/logtrip.page.ts");







var routes = [
    {
        path: '',
        component: _logtrip_page__WEBPACK_IMPORTED_MODULE_6__["LogtripPage"]
    }
];
var LogtripPageModule = /** @class */ (function () {
    function LogtripPageModule() {
    }
    LogtripPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_logtrip_page__WEBPACK_IMPORTED_MODULE_6__["LogtripPage"]]
        })
    ], LogtripPageModule);
    return LogtripPageModule;
}());



/***/ }),

/***/ "./src/app/trip/logtrip/logtrip.page.html":
/*!************************************************!*\
  !*** ./src/app/trip/logtrip/logtrip.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"{{back}}\"></ion-back-button>\n        </ion-buttons>\n        <ion-title mode=\"ios\">Log Trip</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form [formGroup]=\"addVehicleForm\">\n        <div class=\"add-new-vehicle\" padding *ngIf=\"showvehicle\">\n            <div class=\"vehicle-detail\" padding>\n                <h1>Add Vehicle</h1>\n                <div class=\"vehicle-form\">\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <ion-label>Vehicle Name</ion-label>\n                            <ion-input placeholder=\"Enter Vehicle Name\" formControlName=\"vname\"></ion-input>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row\n                            *ngIf=\"addVehicleForm.controls.vname.hasError('required') && addVehicleForm.controls.vname.touched\">\n                        <ion-col size=\"12\" no-padding>\n                            <p class=\"text08\">Sorry, field vehicle name is required!</p>\n                        </ion-col>\n                    </ion-row>\n                </div>\n\n                <div class=\"vehicle-form\">\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <ion-label>License plate</ion-label>\n                            <ion-input placeholder=\"Enter license plate\" formControlName=\"platenumber\"></ion-input>\n                        </ion-col>\n                    </ion-row>\n                </div>\n\n                <ion-row class=\"loc-btn\">\n                    <ion-col size=\"6\">\n                        <button type=\"button\" class=\"cancle-btn\" (click)=\"startTripAgain()\">Cancel</button>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <button type=\"button\" expand=\"full\" color=\"primary\" expand=\"block\" class=\"save-btn\"\n                                (click)=\"addnewvehicle()\" [disabled]=\"!addVehicleForm.valid\">Save</button>\n                    </ion-col>\n                </ion-row>\n\n            </div>\n        </div>\n    </form>\n\n    <div class=\"image-content\" padding>\n        <div>\n            <ion-row class=\"search-loc\">\n                <ion-col size=\"1\" no-padding>\n                    <ion-icon name=\"pin\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"11\" no-padding>\n                    <ion-searchbar searchIcon=\"\" placeholder=\"Enter start location\"\n                                   [(ngModel)]=\"autocomplete.origininput\" (ionInput)=\"updateSearchResults()\" class=\"start-search\">\n                    </ion-searchbar>\n                </ion-col>\n            </ion-row>\n            <div class=\"search-pin ion-margin-end\" [hidden]=\"autocompleteItems1.length == 0\">\n                <p *ngFor=\"let item of autocompleteItems1\" (click)=\"selectOriginSearchResult(item)\">\n                    {{ item.description }}\n                </p>\n            </div>\n\n            <ion-row class=\"search-loc\">\n                <ion-col size=\"1\" no-padding>\n                    <ion-icon name=\"navigate\" color=\"primary\" mode=\"md\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"11\" no-padding>\n                    <ion-searchbar searchIcon=\"\" placeholder=\"Where to?\" [(ngModel)]=\"autocomplete.destinationinput\"\n                                   (ionInput)=\"updateSearchDestResults()\" class=\"start-search\">\n                    </ion-searchbar>\n                </ion-col>\n            </ion-row>\n\n            <div class=\"search-pin ion-margin-end\" [hidden]=\"autocompleteItems.length == 0\">\n                <p *ngFor=\"let item of autocompleteItems\" (click)=\"selectDestSearchResult(item)\">\n                    {{ item.description }}\n                </p>\n            </div>\n        </div>\n    </div>\n\n    <form [formGroup]=\"onAddForm\">\n        <div class=\"start-time\" padding *ngIf=\"showdiv\">\n            <ion-row>\n                <ion-col size=\"6\" style=\"text-align: center;\">\n                    <ion-label>Start trip photo</ion-label>\n                    <br />\n                    <div (click)=\"selectImage('start')\" style=\"margin-top: 10px;height: 25vh;\">\n                        <img class=\"image-size\" src=\"../../../assets/icon/picture.png\" *ngIf=\"!viewImageStart\">\n                        <img class=\"add-image-auto\" [src]=\"getImgContent(viewImageStart)\" (error)=\"startErrorImage()\" #img *ngIf=\"viewImageStart\">\n                    </div>\n                </ion-col>\n                <ion-col size=\"6\" style=\"text-align: center;\">\n                    <ion-label>End trip photo</ion-label>\n                    <div (click)=\"selectImage('end')\" style=\"margin-top: 10px;height: 25vh;\">\n                        <img class=\"image-size\" src=\"../../../assets/icon/picture.png\" *ngIf=\"!viewImageEnd\">\n                        <img class=\"add-image-auto\" [src]=\"getImgContent(viewImageEnd)\" (error)=\"endErrorImage()\" #img1 *ngIf=\"viewImageEnd\">\n                    </div>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <ion-label>Start Date</ion-label>\n                    <ion-datetime display-format=\"DD/MM/YYYY\" placeholder=\"DD/MM/YYYY\" formControlName=\"startdate\"\n                                  [(ngModel)]=\"tripstartdate\">\n                    </ion-datetime>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <ion-label>Start Time</ion-label>\n                    <ion-datetime display-format=\"HH:mm\" placeholder=\"HH:mm\" formControlName=\"starttime\"></ion-datetime>\n                </ion-col>\n            </ion-row>\n            <ion-row *ngIf=\"onAddForm.controls.startdate.hasError('required') &&\n                        onAddForm.controls.startdate.touched \">\n                <ion-col size=\"12\" no-padding>\n                    <p class=\"text08\">Sorry, field start date is required!</p>\n                </ion-col>\n            </ion-row>\n            <ion-row *ngIf=\"onAddForm.controls.starttime.hasError('required') &&\n                        onAddForm.controls.starttime.touched\">\n                <ion-col size=\"12\" no-padding>\n                    <p class=\"text08\">Sorry, field start time is required!</p>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <ion-label>End Date</ion-label>\n                    <ion-datetime display-format=\"DD/MM/YYYY\" placeholder=\"DD/MM/YYYY\" formControlName=\"enddate\"\n                                  [(ngModel)]=\"tripenddate\">\n                    </ion-datetime>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <ion-label>End Time</ion-label>\n                    <ion-datetime display-format=\"HH:mm\" placeholder=\"HH:mm\" formControlName=\"endtime\"></ion-datetime>\n                </ion-col>\n            </ion-row>\n            <ion-row *ngIf=\"onAddForm.controls.enddate.hasError('required') &&\n                        onAddForm.controls.enddate.touched \">\n                <ion-col size=\"12\">\n                    <p class=\"text08\">Sorry, field end date is required!</p>\n                </ion-col>\n            </ion-row>\n            <ion-row *ngIf=\"onAddForm.controls.endtime.hasError('required') &&\n                    onAddForm.controls.endtime.touched\">\n                <ion-col size=\"12\">\n                    <p class=\"text08\">Sorry, field end time is required!</p>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col size=\"6\">\n                    <ion-label>Approximate Distance</ion-label>\n                    <ion-input type=\"number\" placeholder=\"20\" formControlName=\"distance\" [(ngModel)]=\"distance\"></ion-input>\n                </ion-col>\n\n                <ion-col size=\"6\">\n                    <ion-label>Distance Unit</ion-label>\n                    <ion-select formControlName=\"unit\" placeholder=\"km\" [(ngModel)]=\"unit\">\n                        <ion-select-option value=\"km\">KM</ion-select-option>\n                        <ion-select-option value=\"mi\">MI</ion-select-option>\n                    </ion-select>\n                </ion-col>\n            </ion-row>\n            <ion-row *ngIf=\"onAddForm.controls.distance.hasError('required') &&\n                        onAddForm.controls.distance.touched\">\n                <ion-col size=\"12\" no-padding>\n                    <p class=\"text08\">Sorry, field distance is required!</p>\n                </ion-col>\n            </ion-row>\n            <ion-row *ngIf=\"onAddForm.controls.unit.hasError('required') &&\n                onAddForm.controls.unit.touched \">\n                <ion-col size=\"12\" no-padding>\n                    <p class=\"text08\">Sorry, field unit is required!</p>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"5\">\n                    <ion-label>Trip Category</ion-label>\n                    <ion-select formControlName=\"vehicle_type\">\n                        <ion-select-option value=\"business\" selected>Business</ion-select-option>\n                        <ion-select-option value=\"personal\">Personal</ion-select-option>\n                    </ion-select>\n                </ion-col>\n                <ion-col size=\"5\">\n                    <ion-label>Vehicle Name</ion-label>\n                    <ion-select formControlName=\"vehicle_name\" *ngIf=\"vehiclelist.length > 0\" [(ngModel)]=\"vehicleName\">\n                        <ion-select-option value=\"\" *ngIf=\"!vehiclelist?.length\">Please create vehicle\n                        </ion-select-option>\n                        <ion-select-option *ngFor=\"let vtype of vehiclelist\" value=\"{{ vtype.platenumber }}\">\n                            <ion-icon name=\"logo-model-s\" color=\"primary\"></ion-icon>\n                            {{ vtype.name }}({{ vtype.platenumber }})\n                        </ion-select-option>\n                    </ion-select>\n                </ion-col>\n\n                <ion-col size=\"2\" no-padding>\n                    <ion-icon name=\"add\" (click)=\"presentAlertPrompt()\" class=\"add-icn\"></ion-icon>\n                </ion-col>\n            </ion-row>\n\n            <ion-row\n                    *ngIf=\"onAddForm.controls.vehicle_name.hasError('required') && onAddForm.controls.vehicle_name.touched\">\n                <ion-col size=\"12\" no-padding>\n                    <p class=\"text08\">Sorry, field vehicle name is required!</p>\n                </ion-col>\n            </ion-row>\n            <ion-row\n                    *ngIf=\"onAddForm.controls.vehicle_type.hasError('required') && onAddForm.controls.vehicle_type.touched\">\n                <ion-col size=\"12\" no-padding>\n                    <p class=\"text08\">Sorry, field trip category is required!</p>\n                </ion-col>\n            </ion-row>\n            <ion-textarea placeholder=\"Write something about this trip...\" formControlName=\"notes\"></ion-textarea>\n        </div>\n\n        <div class=\"botm-btn\" *ngIf=\"showdiv\">\n            <ion-row>\n                <ion-col size=\"6\" (click)=\"cancel()\">\n                    <ion-button color=\"medium\" class=\"ion-float-right\" mode=\"ios\">Cancel</ion-button>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <ion-button expand=\"full\" color=\"primary\" expand=\"block\" (click)=\"validate()\" mode=\"ios\">\n                        <span *ngIf=\"checkedit != 1\">Add Trip</span>\n                        <span *ngIf=\"checkedit == 1\">Save Trip</span>\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n        </div>\n\n    </form>\n    <div #map id=\"map\" [ngStyle]=\"{ display: !showdiv ? 'block' : 'none' }\"></div>\n\n\n\n</ion-content>\n\n<ion-footer>\n    <ion-button  color=\"primary\" expand=\"block\" mode=\"ios\" *ngIf=\"showButton && !showdiv\"\n                 (click)=\"showAdd()\">Continue to add trip</ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/trip/logtrip/logtrip.page.scss":
/*!************************************************!*\
  !*** ./src/app/trip/logtrip/logtrip.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-loc {\n  background: #fff;\n  border-radius: 5px;\n  margin-bottom: 5px;\n}\n\n.add-image-auto {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.image-size {\n  margin-top: 40px;\n}\n\n.search-loc ion-icon {\n  font-size: 20px;\n  margin-top: 10px;\n  color: #323643;\n  margin-left: 10px;\n}\n\n.search-loc ion-searchbar {\n  height: 40px;\n}\n\n.start-time ion-datetime {\n  padding-left: 0px;\n  border-bottom: 1px solid #D8D8D8;\n  font-size: 15px;\n  color: #2F2F2F;\n}\n\n.start-time ion-row {\n  margin-bottom: 15px;\n}\n\n.start-time ion-input {\n  border-bottom: 1px solid #D8D8D8;\n  margin-bottom: 15px;\n  font-size: 15px;\n  color: #2F2F2F;\n}\n\n.start-time ion-select {\n  border-bottom: 1px solid #d8d8d8;\n  font-size: 15px;\n  color: #2F2F2F;\n  padding: 10px 4px;\n}\n\n.start-time ion-label {\n  color: #878C8E !important;\n  font-size: 12px !important;\n}\n\n.trip-btn {\n  text-align: right;\n}\n\n.botm-btn {\n  padding-top: 15px;\n}\n\nbutton.grey-btn {\n  padding: 15px 25px;\n  background: #878C8E;\n  color: #fff;\n  margin-right: 10px;\n  border-radius: 5px;\n}\n\nbutton.blue-btn {\n  padding: 15px 45px;\n  background: #009CDE;\n  color: #fff;\n  border-radius: 5px;\n}\n\n.map-btn {\n  position: absolute;\n  width: 100%;\n  z-index: 99;\n  height: 70%;\n  padding-top: 95%;\n  top: 30%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.primary-btn {\n  position: absolute;\n  width: 90%;\n  top: 90%;\n  left: 4%;\n}\n\n#map {\n  height: 76%;\n}\n\n.search-pin {\n  padding: 0px 5px;\n  background: #fff;\n  z-index: 999;\n  position: absolute;\n  width: 92%;\n  overflow-y: scroll;\n  height: 150px;\n  border-radius: 5px;\n}\n\n.search-pin p {\n  margin: 0;\n  color: #727272;\n  padding: 10px 5px 0;\n}\n\nion-icon.add-icn {\n  margin-top: 25px;\n  background: #029cde;\n  color: #fff;\n  padding: 6px 10px;\n  border-radius: 5px;\n  margin-left: 10px;\n}\n\n.new-odometer {\n  margin: 20px 0px;\n}\n\n.new-odo-detail p {\n  color: #2F2F2F;\n  font-size: 16px;\n  margin: 0px;\n  margin-bottom: 5px;\n}\n\n.new-odo-detail img {\n  width: 34px;\n}\n\nspan.color-grey1 {\n  font-size: 12px;\n  color: #62666B;\n}\n\n.edit-btn {\n  text-align: center;\n}\n\n.edit-btn span {\n  display: block;\n  font-size: 13px;\n  margin-bottom: 10px;\n}\n\n.location-detail h5 {\n  margin: 0px;\n  color: #2f2f2f;\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n\n.location-detail p {\n  margin: 0px;\n  color: #62666B;\n  font-size: 12px;\n}\n\n.location-detail img {\n  width: 14px;\n  margin-top: 10px;\n}\n\n.location-row {\n  margin-bottom: 20px;\n}\n\n.location-addition {\n  position: fixed;\n  width: 100%;\n  z-index: 99;\n  height: 100%;\n  padding: 30px 20px;\n  top: 50px;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.addition-detail {\n  background-color: white;\n}\n\n.addition-detail h1 {\n  color: #009CDE;\n  margin-left: 15px;\n  font-size: 23px;\n  margin-top: 0px;\n}\n\nion-label {\n  font-size: 12px !important;\n}\n\nion-select {\n  border-bottom: 1px solid #D8D8D8;\n}\n\n.current-loc {\n  margin-top: 15px;\n  border-bottom: 1px solid #D8D8D8;\n}\n\n.current-loc p ion-icon {\n  color: #878C8E;\n  margin-right: 10px;\n}\n\n.current-loc p {\n  color: #2F2F2F;\n  font-size: 15px;\n}\n\n.loc-btn {\n  margin-top: 10px;\n}\n\nbutton.cancle-btn {\n  background: transparent;\n  border: 1px solid #62666B;\n  width: 100%;\n  color: #62666B;\n  height: 35px;\n  border-radius: 8px;\n}\n\nbutton.save-btn {\n  background: #009CDE;\n  width: 100%;\n  color: #fff;\n  height: 35px;\n  border-radius: 8px;\n}\n\n.odometer-add {\n  position: fixed;\n  width: 100%;\n  z-index: 99;\n  height: 100%;\n  padding: 30px 20px;\n  top: 0px;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.odometer-detail {\n  background-color: white;\n}\n\n.odometer-detail h1 {\n  color: #009CDE;\n  margin-left: 15px;\n  font-size: 23px;\n  margin-top: 0px;\n}\n\nion-datetime {\n  border-bottom: 1px solid #d5d5d5;\n}\n\n.odometer-time {\n  padding: 15px 0px;\n}\n\n.odometer-date {\n  padding-bottom: 15px;\n}\n\n.odometer-reading {\n  padding-bottom: 15px;\n}\n\n.odometer-reading ion-input {\n  border-bottom: 1px solid #d5d5d5;\n}\n\n.add-new-vehicle {\n  position: absolute;\n  width: 100%;\n  z-index: 99;\n  height: 100%;\n  padding: 30px 20px;\n  top: 50px;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.vehicle-detail {\n  background-color: white;\n}\n\n.vehicle-detail h1 {\n  color: #009CDE;\n  margin-left: 15px;\n  font-size: 23px;\n  margin-top: 0px;\n}\n\n.track-detail {\n  margin-bottom: 20px;\n}\n\n.odometer-setting h1 {\n  display: inline;\n  margin: 0px;\n  font-size: 18px;\n  color: #2F2F2F;\n}\n\n.odometer-setting ion-select {\n  display: inline-flex;\n  float: right;\n  padding-top: 0;\n  border: none;\n  font-size: 12px;\n  color: #62666B;\n}\n\nion-segment-button {\n  border: none;\n  background: transparent;\n}\n\n.vehicle-size span {\n  font-size: 10px;\n  color: #878C8E;\n}\n\n.vehicle-size h5 {\n  margin: 0px;\n  font-size: 16px;\n  color: #2f2f2f;\n}\n\n.vehicle-size p {\n  font-size: 10px;\n  color: #62666B;\n  margin: 6px 0 0;\n}\n\n.vehicle-size img {\n  width: 40px;\n}\n\nspan.blue-color {\n  color: #009CDE !important;\n  font-size: 13px !important;\n}\n\nspan.red-color {\n  color: #FF5357 !important;\n  font-size: 13px !important;\n}\n\n.vehicle-size {\n  margin-top: 25px;\n}\n\n.general-setting h1 {\n  color: #383838;\n  font-size: 18px;\n}\n\n.general-setting ion-label {\n  font-size: 16px !important;\n}\n\n@media only screen and (max-width: 414px) {\n  #map {\n    height: 78%;\n  }\n}\n\n@media only screen and (max-width: 411px) and (max-height: 823px) {\n  #map {\n    height: 78%;\n  }\n}\n\n@media only screen and (max-width: 411px) and (max-height: 823px) {\n  #map {\n    height: 76%;\n  }\n}\n\n@media only screen and (max-width: 375px) and (max-height: 812px) {\n  .trip-list li {\n    margin-right: 30px;\n  }\n  #map {\n    height: 80%;\n  }\n}\n\n@media only screen and (max-width: 375px) and (max-height: 667px) {\n  .trip-list li {\n    margin-right: 30px;\n  }\n  #map {\n    height: 75%;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  .trip-list li {\n    font-size: 13px;\n    margin-right: 31px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .trip-list li {\n    font-size: 12px;\n    margin-right: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3RyaXAvbG9ndHJpcC9sb2d0cmlwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdHJpcC9sb2d0cmlwL2xvZ3RyaXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FES0E7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNGSjs7QURJQTtFQUNJLGdCQUFBO0FDREo7O0FER0E7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURHQTtFQUVJLFlBQUE7QUNESjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURDQTtFQUVJLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENBO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFFSSx5QkFBQTtFQUNBLDBCQUFBO0FDRUo7O0FEQUE7RUFFSSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7QUNHSjs7QURBQTtFQUVJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBRUksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBRUksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7QUNJSjs7QURERTtFQUVFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURERTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNJSjs7QUREQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSUo7O0FEQUE7RUFFSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNHQTs7QUREQTtFQUVJLFdBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkE7RUFFSSxrQkFBQTtBQ0lKOztBREZBO0VBRUksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0lKOztBREZBO0VBRUEsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNJQTs7QURGQTtFQUVBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0lBOztBREZBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEE7RUFFSSxtQkFBQTtBQ0tKOztBREZBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSw4QkFBQTtBQ0tKOztBREZBO0VBRUksdUJBQUE7QUNJSjs7QURGQTtFQUVJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFFSSwwQkFBQTtBQ0lKOztBRERBO0VBQ0ksZ0NBQUE7QUNJSjs7QURGQTtFQUNJLGdCQUFBO0VBQ0EsZ0NBQUE7QUNLSjs7QURIQTtFQUVJLGNBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREhBO0VBRUksY0FBQTtFQUNBLGVBQUE7QUNLSjs7QURIQTtFQUVJLGdCQUFBO0FDS0o7O0FESEE7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNPSjs7QURMQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsOEJBQUE7QUNRSjs7QUROQTtFQUVJLHVCQUFBO0FDUUo7O0FETkE7RUFFSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ1FKOztBRE5BO0VBQ0ksZ0NBQUE7QUNTSjs7QURQQTtFQUNJLGlCQUFBO0FDVUo7O0FEUkE7RUFFSSxvQkFBQTtBQ1VKOztBRFJBO0VBRUksb0JBQUE7QUNVSjs7QURSQTtFQUVJLGdDQUFBO0FDVUo7O0FEUkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSw4QkFBQTtBQ1dKOztBRFRBO0VBRUksdUJBQUE7QUNXSjs7QURUQTtFQUVJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDV0o7O0FEVEE7RUFFSSxtQkFBQTtBQ1dKOztBRFRBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1lKOztBRFZBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ2FKOztBRFhBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FDY0o7O0FEWkE7RUFFSSxlQUFBO0VBQ0EsY0FBQTtBQ2NKOztBRFpBO0VBRUksV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDY0o7O0FEWkE7RUFFSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNjSjs7QURaQTtFQUVJLFdBQUE7QUNjSjs7QURaQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7QUNlSjs7QURiQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7QUNnQko7O0FEVkE7RUFDSSxnQkFBQTtBQ2FKOztBRFhBO0VBRUksY0FBQTtFQUNBLGVBQUE7QUNhSjs7QURYQTtFQUNJLDBCQUFBO0FDY0o7O0FEWkE7RUFFSTtJQUNJLFdBQUE7RUNjTjtBQUNGOztBRFpBO0VBRUk7SUFDSSxXQUFBO0VDYU47QUFDRjs7QURYQTtFQUVJO0lBQ0ksV0FBQTtFQ1lOO0FBQ0Y7O0FEVkE7RUFFSTtJQUVJLGtCQUFBO0VDVU47RURSRTtJQUNJLFdBQUE7RUNVTjtBQUNGOztBRFJBO0VBRUk7SUFFSSxrQkFBQTtFQ1FOO0VETkU7SUFDSSxXQUFBO0VDUU47QUFDRjs7QUROQTtFQUVJO0lBRUksZUFBQTtJQUNBLGtCQUFBO0VDTU47QUFDRjs7QURKQTtFQUVJO0lBRUksZUFBQTtJQUNBLGtCQUFBO0VDSU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RyaXAvbG9ndHJpcC9sb2d0cmlwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtbG9jXG57XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLy8gLmltYWdlLWNvbnRlbnQge1xuLy8gICAgIGhlaWdodDogMjIlO1xuLy8gfVxuLmFkZC1pbWFnZS1hdXRve1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5pbWFnZS1zaXple1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG4uc2VhcmNoLWxvYyBpb24taWNvblxue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiAjMzIzNjQzO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnNlYXJjaC1sb2MgaW9uLXNlYXJjaGJhclxue1xuICAgIGhlaWdodDogNDBweDtcbn1cbi5zdGFydC10aW1lIGlvbi1kYXRldGltZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOEQ4RDg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjMkYyRjJGO1xufVxuLnN0YXJ0LXRpbWUgaW9uLXJvdyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5zdGFydC10aW1lIGlvbi1pbnB1dFxue1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDhEOEQ4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjMkYyRjJGO1xufVxuLnN0YXJ0LXRpbWUgaW9uLXNlbGVjdCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjMkYyRjJGO1xuICAgIHBhZGRpbmc6IDEwcHggNHB4O1xufVxuLnN0YXJ0LXRpbWUgaW9uLWxhYmVsXG57XG4gICAgY29sb3I6ICM4NzhDOEUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cbi50cmlwLWJ0blxue1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmJvdG0tYnRuIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuYnV0dG9uLmdyZXktYnRuXG57XG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xuICAgIGJhY2tncm91bmQ6ICM4NzhDOEU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmJ1dHRvbi5ibHVlLWJ0blxue1xuICAgIHBhZGRpbmc6IDE1cHggNDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDA5Q0RFO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYXAtYnRuXG57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGhlaWdodDogNzAlO1xuICAgIHBhZGRpbmctdG9wOiA5NSU7XG4gICAgdG9wOiAzMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNSk7XG59XG4ucHJpbWFyeS1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgd2lkdGg6IDkwJTtcbiAgICB0b3A6IDkwJTtcbiAgICBsZWZ0OiA0JTtcbn1cbiNtYXAge1xuICAgIGhlaWdodDogNzYlO1xuICAgIC8vIG1hcmdpbi10b3A6IDI1cHg7XG4gIH1cbiAgLnNlYXJjaC1waW5cbiAge1xuICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA5MiU7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIC5zZWFyY2gtcGluIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogIzcyNzI3MjtcbiAgICBwYWRkaW5nOiAxMHB4IDVweCAwO1xuICAgIFxufVxuaW9uLWljb24uYWRkLWljbiB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDI5Y2RlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuXG4ubmV3LW9kb21ldGVyXG57XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbn1cbi5uZXctb2RvLWRldGFpbCBwe1xuY29sb3I6ICMyRjJGMkY7XG5mb250LXNpemU6IDE2cHg7XG5tYXJnaW46IDBweDtcbm1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5uZXctb2RvLWRldGFpbCBpbWdcbntcbiAgICB3aWR0aDogMzRweDtcbn1cbnNwYW4uY29sb3ItZ3JleTF7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNjI2NjZCO1xufVxuLmVkaXQtYnRuXG57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmVkaXQtYnRuIHNwYW5cbntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5sb2NhdGlvbi1kZXRhaWwgaDVcbntcbm1hcmdpbjogMHB4O1xuY29sb3I6ICMyZjJmMmY7XG5mb250LXNpemU6IDE2cHg7XG5tYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubG9jYXRpb24tZGV0YWlsIHBcbntcbm1hcmdpbjogMHB4O1xuY29sb3I6ICM2MjY2NkI7XG5mb250LXNpemU6IDEycHg7XG59XG4ubG9jYXRpb24tZGV0YWlsIGltZ3tcbiAgICB3aWR0aDogMTRweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmxvY2F0aW9uLXJvd1xue1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5sb2NhdGlvbi1hZGRpdGlvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOjMwcHggMjBweDtcbiAgICB0b3A6IDUwcHg7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC41KTtcbn1cblxuLmFkZGl0aW9uLWRldGFpbFxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgXG59XG4uYWRkaXRpb24tZGV0YWlsIGgxXG57XG4gICAgY29sb3I6ICMwMDlDREU7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn1cbmlvbi1sYWJlbFxue1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuXG59XG5pb24tc2VsZWN0e1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDhEOEQ4O1xufVxuLmN1cnJlbnQtbG9jIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDhEOEQ4O1xufVxuLmN1cnJlbnQtbG9jIHAgaW9uLWljb25cbntcbiAgICBjb2xvcjogIzg3OEM4RTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY3VycmVudC1sb2MgcFxue1xuICAgIGNvbG9yOiAjMkYyRjJGO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5sb2MtYnRuXG57XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmJ1dHRvbi5jYW5jbGUtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjI2NjZCO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjNjI2NjZCO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5idXR0b24uc2F2ZS1idG4ge1xuICAgIGJhY2tncm91bmQ6ICMwMDlDREU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5vZG9tZXRlci1hZGQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzozMHB4IDIwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC41KTtcbn1cbi5vZG9tZXRlci1kZXRhaWxcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgIFxufVxuLm9kb21ldGVyLWRldGFpbCBoMVxue1xuICAgIGNvbG9yOiAjMDA5Q0RFO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG59XG5pb24tZGF0ZXRpbWUge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDVkNWQ1O1xufVxuLm9kb21ldGVyLXRpbWUge1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xufVxuLm9kb21ldGVyLWRhdGVcbntcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5vZG9tZXRlci1yZWFkaW5nXG57XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4ub2RvbWV0ZXItcmVhZGluZyBpb24taW5wdXRcbntcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q1ZDVkNTtcbn1cbi5hZGQtbmV3LXZlaGljbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzozMHB4IDIwcHg7XG4gICAgdG9wOiA1MHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNSk7XG59XG4udmVoaWNsZS1kZXRhaWxcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgIFxufVxuLnZlaGljbGUtZGV0YWlsIGgxXG57XG4gICAgY29sb3I6ICMwMDlDREU7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn1cbi50cmFjay1kZXRhaWxcbntcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm9kb21ldGVyLXNldHRpbmcgaDEge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICMyRjJGMkY7XG59XG4ub2RvbWV0ZXItc2V0dGluZyBpb24tc2VsZWN0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzYyNjY2Qjtcbn1cbmlvbi1zZWdtZW50LWJ1dHRvbntcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4udmVoaWNsZS1zaXplIHNwYW5cbntcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICM4NzhDOEU7XG59XG4udmVoaWNsZS1zaXplIGg1XG57XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjMmYyZjJmO1xufVxuLnZlaGljbGUtc2l6ZSBwXG57XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjNjI2NjZCO1xuICAgIG1hcmdpbjogNnB4IDAgMDtcbn1cbi52ZWhpY2xlLXNpemUgaW1nXG57XG4gICAgd2lkdGg6IDQwcHg7XG59XG5zcGFuLmJsdWUtY29sb3Ige1xuICAgIGNvbG9yOiAjMDA5Q0RFICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG59XG5zcGFuLnJlZC1jb2xvciB7XG4gICAgY29sb3I6ICNGRjUzNTcgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cbi8vIC52ZWhpY2xlLXNpemUgLmVkaXQtYnRuXG4vLyB7XG4vLyAgICAgbWFyZ2luLXRvcDogMTBweDtcbi8vIH1cbi52ZWhpY2xlLXNpemUge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG4uZ2VuZXJhbC1zZXR0aW5nIGgxXG57XG4gICAgY29sb3I6ICMzODM4Mzg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLmdlbmVyYWwtc2V0dGluZyBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxNHB4KVxue1xuICAgICNtYXAge1xuICAgICAgICBoZWlnaHQ6IDc4JTtcbiAgICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTFweCkgYW5kIChtYXgtaGVpZ2h0OjgyM3B4KVxue1xuICAgICNtYXAge1xuICAgICAgICBoZWlnaHQ6IDc4JTtcbiAgICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTFweCkgYW5kIChtYXgtaGVpZ2h0OjgyM3B4KVxue1xuICAgICNtYXAge1xuICAgICAgICBoZWlnaHQ6IDc2JTtcbiAgICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweCkgYW5kIChtYXgtaGVpZ2h0OjgxMnB4KVxue1xuICAgIC50cmlwLWxpc3QgbGlcbiAgICB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICB9XG4gICAgI21hcCB7XG4gICAgICAgIGhlaWdodDogODAlO1xuICAgICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KSBhbmQgKG1heC1oZWlnaHQ6NjY3cHgpXG57XG4gICAgLnRyaXAtbGlzdCBsaVxuICAgIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICAjbWFwIHtcbiAgICAgICAgaGVpZ2h0OiA3NSU7XG4gICAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpXG57XG4gICAgLnRyaXAtbGlzdCBsaVxuICAgIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMxcHg7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjMyMHB4KVxue1xuICAgIC50cmlwLWxpc3QgbGlcbiAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgIH1cbn0iLCIuc2VhcmNoLWxvYyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uYWRkLWltYWdlLWF1dG8ge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmltYWdlLXNpemUge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uc2VhcmNoLWxvYyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICMzMjM2NDM7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uc2VhcmNoLWxvYyBpb24tc2VhcmNoYmFyIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uc3RhcnQtdGltZSBpb24tZGF0ZXRpbWUge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOEQ4RDg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMyRjJGMkY7XG59XG5cbi5zdGFydC10aW1lIGlvbi1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uc3RhcnQtdGltZSBpb24taW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Q4RDhEODtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzJGMkYyRjtcbn1cblxuLnN0YXJ0LXRpbWUgaW9uLXNlbGVjdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMkYyRjJGO1xuICBwYWRkaW5nOiAxMHB4IDRweDtcbn1cblxuLnN0YXJ0LXRpbWUgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICM4NzhDOEUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi50cmlwLWJ0biB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYm90bS1idG4ge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuYnV0dG9uLmdyZXktYnRuIHtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjODc4QzhFO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmJ1dHRvbi5ibHVlLWJ0biB7XG4gIHBhZGRpbmc6IDE1cHggNDVweDtcbiAgYmFja2dyb3VuZDogIzAwOUNERTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm1hcC1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbiAgaGVpZ2h0OiA3MCU7XG4gIHBhZGRpbmctdG9wOiA5NSU7XG4gIHRvcDogMzAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5wcmltYXJ5LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDkwJTtcbiAgdG9wOiA5MCU7XG4gIGxlZnQ6IDQlO1xufVxuXG4jbWFwIHtcbiAgaGVpZ2h0OiA3NiU7XG59XG5cbi5zZWFyY2gtcGluIHtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5MiU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc2VhcmNoLXBpbiBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzcyNzI3MjtcbiAgcGFkZGluZzogMTBweCA1cHggMDtcbn1cblxuaW9uLWljb24uYWRkLWljbiB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICMwMjljZGU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm5ldy1vZG9tZXRlciB7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG5cbi5uZXctb2RvLWRldGFpbCBwIHtcbiAgY29sb3I6ICMyRjJGMkY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm5ldy1vZG8tZGV0YWlsIGltZyB7XG4gIHdpZHRoOiAzNHB4O1xufVxuXG5zcGFuLmNvbG9yLWdyZXkxIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzYyNjY2Qjtcbn1cblxuLmVkaXQtYnRuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZWRpdC1idG4gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5sb2NhdGlvbi1kZXRhaWwgaDUge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICMyZjJmMmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubG9jYXRpb24tZGV0YWlsIHAge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICM2MjY2NkI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmxvY2F0aW9uLWRldGFpbCBpbWcge1xuICB3aWR0aDogMTRweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmxvY2F0aW9uLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5sb2NhdGlvbi1hZGRpdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5hZGRpdGlvbi1kZXRhaWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmFkZGl0aW9uLWRldGFpbCBoMSB7XG4gIGNvbG9yOiAjMDA5Q0RFO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOEQ4RDg7XG59XG5cbi5jdXJyZW50LWxvYyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDhEOEQ4O1xufVxuXG4uY3VycmVudC1sb2MgcCBpb24taWNvbiB7XG4gIGNvbG9yOiAjODc4QzhFO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jdXJyZW50LWxvYyBwIHtcbiAgY29sb3I6ICMyRjJGMkY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmxvYy1idG4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5idXR0b24uY2FuY2xlLWJ0biB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjI2NjZCO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICM2MjY2NkI7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5idXR0b24uc2F2ZS1idG4ge1xuICBiYWNrZ3JvdW5kOiAjMDA5Q0RFO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ub2RvbWV0ZXItYWRkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMzBweCAyMHB4O1xuICB0b3A6IDBweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ub2RvbWV0ZXItZGV0YWlsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5vZG9tZXRlci1kZXRhaWwgaDEge1xuICBjb2xvcjogIzAwOUNERTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q1ZDVkNTtcbn1cblxuLm9kb21ldGVyLXRpbWUge1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbn1cblxuLm9kb21ldGVyLWRhdGUge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLm9kb21ldGVyLXJlYWRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLm9kb21ldGVyLXJlYWRpbmcgaW9uLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNWQ1ZDU7XG59XG5cbi5hZGQtbmV3LXZlaGljbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gIHRvcDogNTBweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4udmVoaWNsZS1kZXRhaWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnZlaGljbGUtZGV0YWlsIGgxIHtcbiAgY29sb3I6ICMwMDlDREU7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDIzcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLnRyYWNrLWRldGFpbCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5vZG9tZXRlci1zZXR0aW5nIGgxIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzJGMkYyRjtcbn1cblxuLm9kb21ldGVyLXNldHRpbmcgaW9uLXNlbGVjdCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2MjY2NkI7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi52ZWhpY2xlLXNpemUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM4NzhDOEU7XG59XG5cbi52ZWhpY2xlLXNpemUgaDUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzJmMmYyZjtcbn1cblxuLnZlaGljbGUtc2l6ZSBwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzYyNjY2QjtcbiAgbWFyZ2luOiA2cHggMCAwO1xufVxuXG4udmVoaWNsZS1zaXplIGltZyB7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG5zcGFuLmJsdWUtY29sb3Ige1xuICBjb2xvcjogIzAwOUNERSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cblxuc3Bhbi5yZWQtY29sb3Ige1xuICBjb2xvcjogI0ZGNTM1NyAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cblxuLnZlaGljbGUtc2l6ZSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5nZW5lcmFsLXNldHRpbmcgaDEge1xuICBjb2xvcjogIzM4MzgzODtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZ2VuZXJhbC1zZXR0aW5nIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gICNtYXAge1xuICAgIGhlaWdodDogNzglO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMXB4KSBhbmQgKG1heC1oZWlnaHQ6IDgyM3B4KSB7XG4gICNtYXAge1xuICAgIGhlaWdodDogNzglO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMXB4KSBhbmQgKG1heC1oZWlnaHQ6IDgyM3B4KSB7XG4gICNtYXAge1xuICAgIGhlaWdodDogNzYlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1oZWlnaHQ6IDgxMnB4KSB7XG4gIC50cmlwLWxpc3QgbGkge1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgfVxuICAjbWFwIHtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkgYW5kIChtYXgtaGVpZ2h0OiA2NjdweCkge1xuICAudHJpcC1saXN0IGxpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIH1cbiAgI21hcCB7XG4gICAgaGVpZ2h0OiA3NSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLnRyaXAtbGlzdCBsaSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1yaWdodDogMzFweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAudHJpcC1saXN0IGxpIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/trip/logtrip/logtrip.page.ts":
/*!**********************************************!*\
  !*** ./src/app/trip/logtrip/logtrip.page.ts ***!
  \**********************************************/
/*! exports provided: LogtripPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogtripPage", function() { return LogtripPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_helper_unitHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_helper/unitHelper */ "./src/app/_helper/unitHelper.ts");
/* harmony import */ var src_app_helper_date_format__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_helper/date-format */ "./src/app/_helper/date-format.ts");
/* harmony import */ var src_app_service_setting_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/setting.service */ "./src/app/service/setting.service.ts");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "./node_modules/@ionic-native/location-accuracy/ngx/index.js");
/* harmony import */ var src_app_service_back_stack_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/service/back-stack.service */ "./src/app/service/back-stack.service.ts");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var src_app_components_disclaimer_popup_disclaimer_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/components/disclaimer-popup/disclaimer-popup.component */ "./src/app/components/disclaimer-popup/disclaimer-popup.component.ts");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
























var LogtripPage = /** @class */ (function () {
    function LogtripPage(geolocation, http, formBuilder, storageService, settingService, modalController, navCtrl, backStack, activatedRoute, toastCtrl, locationAccuracy, alertController, events, actionSheetController, platform, base64, transfer, file, filePath, camera, webview, sanitizer) {
        var _this = this;
        this.geolocation = geolocation;
        this.http = http;
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.settingService = settingService;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.backStack = backStack;
        this.activatedRoute = activatedRoute;
        this.toastCtrl = toastCtrl;
        this.locationAccuracy = locationAccuracy;
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
        this.autocompleteItems = [];
        this.autocompleteItems1 = [];
        this.mode = 'DRIVING';
        this.unitvalue = '';
        this.showvehicle = false;
        this.isFav = false;
        this.gmarkers = [];
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
        this.GoogleAutocomplete = '';
        this.showButton = false;
        this.showdiv = false;
        this.userid = '';
        this.checkedit = 0;
        this.today = new Date().toJSON().split('T')[0];
        this.time = new Date().toLocaleTimeString();
        this.unitHelper = new src_app_helper_unitHelper__WEBPACK_IMPORTED_MODULE_8__["UnitHelper"]();
        this.correctPath = '';
        this.currentName = '';
        this.selectedImageStart = '';
        this.selectedImageEnd = '';
        this.viewImageStart = '';
        this.viewImageEnd = '';
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { origininput: '', destinationinput: '' };
        this.autocompleteItems = [];
        this.autocompleteItems1 = [];
        this.onAddForm = this.formBuilder.group({
            distance: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            ])),
            unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            startdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            starttime: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            enddate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            endtime: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            vehicle_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            vehicle_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.vehicleName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
        });
        this.addVehicleForm = this.formBuilder.group({
            vname: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            platenumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
        });
        this.events.subscribe('user:created', function (time) {
            _this.userid = _this.settingService.getUserId();
        });
        this.icons = {
            start: new google.maps.MarkerImage('assets/icon/loc_green.png'),
            end: new google.maps.MarkerImage('assets/icon/loc_blue.png')
        };
        this.back = this.backStack.getBackStack('logtrip');
    }
    LogtripPage.prototype.presentAddVehicleAlert = function (header, subHeader, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            subHeader: subHeader,
                            message: message,
                            buttons: [{
                                    text: 'Add',
                                    handler: function () {
                                        _this.showvehicle = true;
                                    }
                                }]
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
    LogtripPage.prototype.askToTurnOnGPS = function () {
        var _this = this;
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
            // When GPS Turned ON call method to get Accurate location coordinates
            _this.initMap();
        }, function (error) { return alert('Error requesting location permissions ' + JSON.stringify(error)); });
    };
    LogtripPage.prototype.presentAlert = function (header, subHeader, message) {
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
    LogtripPage.prototype.ngOnInit = function () {
        var _this = this;
        this.userid = this.settingService.getUserId();
        this.viewVehicletype();
        if (JSON.parse(localStorage.getItem('edittrip')) !== undefined && JSON.parse(localStorage.getItem('edittrip'))) {
            this.editdata = JSON.parse(localStorage.getItem('edittrip'));
            this.showdiv = true;
            this.autocomplete = {
                origininput: this.editdata.origin,
                destinationinput: this.editdata.destination
            };
            // this.calculateAndDisplayRoute();
            this.vehicleName = this.editdata.vehicleName;
            this.distance = this.editdata.distance;
            this.unit = this.editdata.unit;
            this.onAddForm.patchValue({
                startdate: this.editdata.startdate,
                starttime: this.editdata.starttime,
                enddate: this.editdata.enddate,
                endtime: this.editdata.endtime,
                distance: this.editdata.distance,
                unit: this.editdata.unit,
                notes: this.editdata.notes,
                vehicle_name: this.editdata.vehicleName,
                vehicle_type: this.editdata.vehicleType,
            });
            this.tripstartdate = this.editdata.startdate;
            this.tripenddate = this.editdata.enddate;
            this.viewImageStart = this.editdata.viewStartImage;
            this.viewImageEnd = this.editdata.viewEndImage;
            this.checkedit = 1;
        }
        else {
            var currentDate = new Date().toISOString();
            this.tripstartdate = currentDate;
            this.tripenddate = currentDate;
            try {
                this.storageService.getLastVehicle().then(function (vehicle) {
                    if (vehicle != undefined) {
                        _this.vehicleName = vehicle.rows.item(0).platenumber;
                    }
                });
            }
            catch (e) { }
        }
        this.askToTurnOnGPS();
        this.getuserdata();
        this.createTable();
    };
    LogtripPage.prototype.selectImage = function (type) {
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
    LogtripPage.prototype.getPicture = function (sourceType, type) {
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
    LogtripPage.prototype.pathForImage = function (img, type) {
        if (!img) {
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
    LogtripPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName, type) {
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
    LogtripPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + '.jpg';
        return newFileName;
    };
    LogtripPage.prototype.startErrorImage = function () {
        this.viewImageStart = '';
    };
    LogtripPage.prototype.endErrorImage = function () {
        this.viewImageEnd = '';
    };
    LogtripPage.prototype.getImgContent = function (imgFile) {
        return this.sanitizer.bypassSecurityTrustUrl(imgFile);
    };
    LogtripPage.prototype.createDirectory = function (refImageName) {
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
    LogtripPage.prototype.createTable = function () {
        this.storageService
            .createVehicleTable()
            .then(function (res) {
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    LogtripPage.prototype.presentToast = function (msg) {
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
    LogtripPage.prototype.presentAlertPrompt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.showvehicle = true;
                return [2 /*return*/];
            });
        });
    };
    LogtripPage.prototype.addnewvehicle = function () {
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
                _this.presentToast('Vehicle added successfully');
                _this.viewVehicletype();
            }
        })
            .catch(function (error) {
            _this.presentToast(error);
            console.log(error);
        });
    };
    LogtripPage.prototype.viewVehicletype = function () {
        var _this = this;
        this.vehiclelist = [];
        this.storageService
            .viewVehicle(this.userid)
            .then(function (res) {
            console.log(res.rows.length);
            if (res.rows.length > 0) {
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
    LogtripPage.prototype.addedittrip = function () {
        if (this.checkedit === 0) {
            if (this.settingService.getDisclaimer()) {
                this.save();
            }
            else {
                this.presentDisclaimerModal();
            }
        }
        else {
            this.update();
        }
    };
    LogtripPage.prototype.validate = function () {
        if (this.autocomplete.origininput === '') {
            this.presentToast('Please enter start location.');
        }
        else if (this.autocomplete.destinationinput === '') {
            this.presentToast('Please enter end location.');
        }
        else if (!this.onAddForm.valid) {
            this.showValidateMessage();
        }
        else if (!this.datetimeValidation()) {
            this.dateAlert();
        }
        else {
            this.addedittrip();
        }
    };
    LogtripPage.prototype.showValidateMessage = function () {
        if (this.onAddForm.controls.startdate.errors != null) {
            this.presentToast('Please enter start date.');
        }
        else if (this.onAddForm.controls.starttime.errors != null) {
            this.presentToast('Please enter start time.');
        }
        else if (this.onAddForm.controls.enddate.errors != null) {
            this.presentToast('Please enter end date.');
        }
        else if (this.onAddForm.controls.endtime.errors != null) {
            this.presentToast('Please enter end time.');
        }
        else if (this.onAddForm.controls.distance.errors != null) {
            this.presentToast('Please enter approximate distance.');
        }
        else if (this.onAddForm.controls.unit.errors != null) {
            this.presentToast('Please enter unit.');
        }
        else if (this.onAddForm.controls.vehicle_type.errors != null) {
            this.presentToast('Please enter trip category.');
        }
        else if (this.onAddForm.controls.vehicle_name.errors != null) {
            this.presentToast('Please enter vehicle name.');
        }
    };
    LogtripPage.prototype.presentDisclaimerModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_components_disclaimer_popup_disclaimer_popup_component__WEBPACK_IMPORTED_MODULE_14__["DisclaimerPopupComponent"],
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
    LogtripPage.prototype.update = function () {
        var _this = this;
        this.storageService
            .createTable()
            .then(function (val) {
            _this.storageService
                .editTrip(_this.autocomplete.origininput, _this.autocomplete.destinationinput, _this.onAddForm.value.notes, _this.onAddForm.value.distance, _this.onAddForm.value.unit, _this.onAddForm.value.vehicle_type, _this.onAddForm.value.vehicle_name, _this.onAddForm.value.startdate, _this.onAddForm.value.enddate, _this.onAddForm.value.starttime, _this.onAddForm.value.endtime, _this.userid, _this.editdata.id, _this.selectedImageStart ? _this.selectedImageStart : _this.editdata.photoStart, _this.selectedImageEnd ? _this.selectedImageEnd : _this.editdata.photoEnd)
                .then(function (val) {
                _this.presentToast('Trip updated successfully.');
                localStorage.removeItem('edittrip');
                localStorage.removeItem('tripdata');
                _this.checkedit = 0;
                localStorage.setItem('tripdata', JSON.stringify({
                    destination: _this.autocomplete.destinationinput,
                    distance: _this.onAddForm.value.distance,
                    enddate: _this.onAddForm.value.enddate,
                    endtime: _this.onAddForm.value.endtime,
                    id: _this.editdata.id,
                    notes: _this.onAddForm.value.notes,
                    origin: _this.autocomplete.origininput,
                    startdate: _this.onAddForm.value.startdate,
                    starttime: _this.onAddForm.value.starttime,
                    unit: _this.onAddForm.value.unit,
                    userid: _this.userid,
                    vehicleName: _this.onAddForm.value.vehicle_name,
                    vehicleType: _this.onAddForm.value.vehicle_type,
                    viewStartImage: _this.viewImageStart,
                    viewEndImage: _this.viewImageEnd,
                    photoStart: _this.editdata.photoStart,
                    photoEnd: _this.editdata.photoEnd
                }));
                // if(this.selectedImageStart){
                //   this.createDirectory(this.selectedImageStart);
                // }
                // if(this.selectedImageEnd){
                //   this.createDirectory(this.selectedImageEnd);
                // }
                _this.navCtrl.navigateRoot('/viewtrip');
            })
                .catch(function (err) {
                console.log(err);
            });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    LogtripPage.prototype.dateAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'End date time cannot be less than or equal to start date time',
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
    LogtripPage.prototype.datetimeValidation = function () {
        var dateFormat = new src_app_helper_date_format__WEBPACK_IMPORTED_MODULE_9__["DateFormat"]();
        var enddate = this.onAddForm.value.enddate;
        var endtime = this.onAddForm.value.endtime;
        var startdate = this.onAddForm.value.startdate;
        var starttime = this.onAddForm.value.starttime;
        var startDateTime = dateFormat.dateFormatter(startdate, 'date') + ' ' + dateFormat.dateFormatter(starttime, 'time');
        var endDateTime = dateFormat.dateFormatter(enddate, 'date') + ' ' + dateFormat.dateFormatter(endtime, 'time');
        if (new Date(endDateTime) <= new Date(startDateTime)) {
            return false;
        }
        else {
            return true;
        }
    };
    LogtripPage.prototype.save = function () {
        var _this = this;
        this.storageService
            .createTable()
            .then(function (val) {
            _this.storageService
                .addTrip(_this.autocomplete.origininput, _this.autocomplete.destinationinput, _this.onAddForm.value.notes, _this.onAddForm.value.distance, _this.onAddForm.value.unit, _this.onAddForm.value.vehicle_type, _this.onAddForm.value.vehicle_name, _this.onAddForm.value.startdate, _this.onAddForm.value.enddate, _this.onAddForm.value.starttime, _this.onAddForm.value.endtime, _this.userid, _this.selectedImageStart, _this.selectedImageEnd)
                .then(function (val) {
                _this.presentToast('Trip saved successfully.');
                _this.showdiv = false;
                localStorage.removeItem('edittrip');
                localStorage.removeItem('tripdata');
                _this.checkedit = 0;
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
                    viewStartImage: _this.viewImageStart,
                    viewEndImage: _this.viewImageEnd,
                    photoStart: _this.selectedImageStart,
                    photoEnd: _this.selectedImageEnd
                }));
                // if(this.selectedImageStart){
                //   this.createDirectory(this.selectedImageStart);
                // }
                // if(this.selectedImageEnd){
                //   this.createDirectory(this.selectedImageEnd);
                // }
                _this.onAddForm.reset();
                _this.navCtrl.navigateRoot('/viewtrip');
            })
                .catch(function (err) {
                console.log(err);
            });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    LogtripPage.prototype.goTo = function (path) {
        this.navCtrl.navigateRoot('/' + path);
    };
    LogtripPage.prototype.initMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            var geocoder = new google.maps.Geocoder;
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            var latlng = { lat: resp.coords.latitude, lng: resp.coords.longitude };
            geocoder.geocode({ location: latlng }, function (results, status) {
                if (status === 'OK') {
                    if (_this.autocomplete.origininput === '') {
                        _this.autocomplete.origininput = results[0].formatted_address;
                    }
                }
            });
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, {
                zoom: 7,
                center: { lat: resp.coords.latitude, lng: resp.coords.longitude },
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
        });
    };
    LogtripPage.prototype.startTripAgain = function () {
        var _this = this;
        this.addVehicleForm.reset();
        this.storageService
            .viewVehicle(this.userid)
            .then(function (res) {
            if (res.rows.length > 0) {
                _this.showvehicle = false;
            }
            else {
                _this.onAddForm.reset();
                _this.showdiv = false;
                _this.showvehicle = false;
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    LogtripPage.prototype.showAdd = function () {
        this.addVehicleForm.reset();
        this.onAddForm.reset();
        this.showdiv = true;
        this.viewVehicletype();
    };
    LogtripPage.prototype.cancel = function () {
        if (this.checkedit === 1) {
            localStorage.removeItem('edittrip');
            this.checkedit = 0;
            this.navCtrl.navigateRoot('/viewtrip');
        }
        this.showdiv = false;
    };
    LogtripPage.prototype.selectOriginSearchResult = function (item) {
        this.autocompleteItems1 = [];
        this.autocomplete = {
            origininput: item.description,
            destinationinput: this.autocomplete.destinationinput
        };
        if (this.autocomplete.destinationinput !== '') {
            this.calculateAndDisplayRoute();
        }
    };
    LogtripPage.prototype.selectDestSearchResult = function (item) {
        this.autocompleteItems = [];
        this.autocomplete = {
            origininput: this.autocomplete.origininput,
            destinationinput: item.description
        };
        this.calculateAndDisplayRoute();
    };
    LogtripPage.prototype.updateSearchDestResults = function () {
        var _this = this;
        if (this.autocomplete.destinationinput === '') {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({
            input: this.autocomplete.destinationinput,
            // types: ['(regions)'],
            componentRestrictions: {
                country: 'au'
            }
        }, function (predictions, status) {
            _this.autocompleteItems = [];
            predictions.forEach(function (prediction) {
                _this.autocompleteItems.push(prediction);
                console.log(_this.autocompleteItems);
            });
        });
    };
    LogtripPage.prototype.updateSearchResults = function () {
        var _this = this;
        if (this.autocomplete.origininput === '') {
            this.autocompleteItems1 = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({
            input: this.autocomplete.origininput,
            // types: ['(regions)'],
            componentRestrictions: {
                country: 'au'
            }
        }, function (predictions, status) {
            _this.autocompleteItems1 = [];
            predictions.forEach(function (prediction) {
                _this.autocompleteItems1.push(prediction);
                console.log(_this.autocompleteItems1);
            });
        });
    };
    LogtripPage.prototype.calculateAndDisplayRoute = function () {
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
                _this.fulldistance = response.routes[0].legs[0].distance.text;
                _this.distance = response.routes[0].legs[0].distance.value;
                if (_this.unitvalue !== '') {
                    if (_this.unitvalue === 'km') {
                        _this.distance = _this.unitHelper.meterToKm(_this.distance);
                        _this.unit = 'km';
                    }
                    else if (_this.unitvalue === 'mi') {
                        _this.distance = _this.unitHelper.meterToMiles(_this.distance);
                        _this.unit = 'mi';
                    }
                }
                else {
                    _this.distance = _this.unitHelper.meterToKm(_this.distance);
                    _this.unit = 'km';
                }
                _this.onAddForm.controls.distance.setValue(_this.distance);
                _this.onAddForm.controls.unit.setValue(_this.unit);
                _this.directionsDisplay.setDirections(response);
                var leg = response.routes[0].legs[0];
                _this.makeMarker(leg.start_location, _this.icons.start);
                _this.makeMarker(leg.end_location, _this.icons.end);
                _this.showButton = true;
            }
        });
    };
    LogtripPage.prototype.getuserdata = function () {
        var _this = this;
        this.storageService.getbyid('usersettings', this.userid)
            .then(function (res) {
            if (res.rows.length > 0) {
                _this.unitvalue = res.rows.item(0).unit;
            }
        });
    };
    LogtripPage.prototype.makeMarker = function (position, icon) {
        var myMarker = new google.maps.Marker({
            position: position,
            icon: icon,
            map: this.map
        });
        // replace marker with myMarker
        this.gmarkers.push(myMarker);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LogtripPage.prototype, "mapElement", void 0);
    LogtripPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logtrip',
            template: __webpack_require__(/*! ./logtrip.page.html */ "./src/app/trip/logtrip/logtrip.page.html"),
            styles: [__webpack_require__(/*! ./logtrip.page.scss */ "./src/app/trip/logtrip/logtrip.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_13__["PageTrack"])("Log Trip Screen"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            src_app_service_setting_service__WEBPACK_IMPORTED_MODULE_10__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            src_app_service_back_stack_service__WEBPACK_IMPORTED_MODULE_12__["BackStackService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_11__["LocationAccuracy"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_15__["Base64"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_16__["FileTransfer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__["File"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_18__["FilePath"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_19__["Camera"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_20__["WebView"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["DomSanitizer"]])
    ], LogtripPage);
    return LogtripPage;
}());



/***/ })

}]);
//# sourceMappingURL=trip-logtrip-logtrip-module.js.map