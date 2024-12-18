(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trip-tripsetting-tripsetting-module"],{

/***/ "./src/app/trip/tripsetting/tripsetting.module.ts":
/*!********************************************************!*\
  !*** ./src/app/trip/tripsetting/tripsetting.module.ts ***!
  \********************************************************/
/*! exports provided: TripsettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsettingPageModule", function() { return TripsettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tripsetting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tripsetting.page */ "./src/app/trip/tripsetting/tripsetting.page.ts");







var routes = [
    {
        path: '',
        component: _tripsetting_page__WEBPACK_IMPORTED_MODULE_6__["TripsettingPage"]
    }
];
var TripsettingPageModule = /** @class */ (function () {
    function TripsettingPageModule() {
    }
    TripsettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tripsetting_page__WEBPACK_IMPORTED_MODULE_6__["TripsettingPage"]]
        })
    ], TripsettingPageModule);
    return TripsettingPageModule;
}());



/***/ }),

/***/ "./src/app/trip/tripsetting/tripsetting.page.html":
/*!********************************************************!*\
  !*** ./src/app/trip/tripsetting/tripsetting.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"{{back}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title mode=\"ios\">Trip setting</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <form [formGroup]=\"addlocationForm\">\n    <div class=\"location-addition\" *ngIf=\"locationShow\">\n      <div class=\"addition-detail\" padding>\n        <h1 *ngIf=\"locationFormStatus==0\">Add new location</h1>\n        <h1 *ngIf=\"locationFormStatus==1\">Edit location detail</h1>\n        <div class=\"vehicle-form\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>Enter location name</ion-label>\n              <ion-input placeholder=\"Enter location name\" formControlName=\"lname\" [(ngModel)]=\"lname\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row\n            *ngIf=\"addlocationForm.controls.lname.hasError('required') && addlocationForm.controls.lname.touched\">\n            <ion-col size=\"12\" no-padding>\n              <p class=\"text08\">Sorry, field location name is required!</p>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div class=\"select-loc\">\n          <ion-label>Search location by name or street</ion-label>\n          <ion-searchbar searchIcon=\"locate\" placeholder=\"Current location\" [(ngModel)]=\"autocomplete.origininput\"\n            (ionInput)=\"updateSearchResults()\" [ngModelOptions]=\"{standalone: true}\"></ion-searchbar>\n          <div class=\"search-pin ion-margin-end\" [hidden]=\"autocompleteItems1.length == 0\">\n            <ion-item *ngFor=\"let item of autocompleteItems1\" tappable (click)=\"selectOriginSearchResult(item)\">\n              {{ item.description }}</ion-item>\n          </div>\n        </div>\n        <ion-row class=\"loc-btn\">\n          <ion-col size=\"6\">\n            <button type=\"button\" class=\"cancle-btn\"\n              (click)=\"locationShow = false;autocomplete.origininput = '' \">Cancel</button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <!-- <button type=\"button\" class=\"save-btn\" [disabled]=\"autocomplete.invalid\" (click)=\"submitLocationForm()\">Save</button> -->\n            <button type=\"button\" expand=\"full\" color=\"primary\" expand=\"block\" class=\"save-btn\"\n              [ngClass]=\"{'disable-btn' : !addlocationForm.valid || !autocomplete.origininput }\" (click)=\"submitLocationForm()\" [disabled]=\"!addlocationForm.valid || !autocomplete.origininput\">Save</button>\n          </ion-col>\n        </ion-row>\n\n      </div>\n    </div>\n  </form>\n\n  <form [formGroup]=\"addVehicleForm\">\n    <div class=\"add-new-vehicle\" padding *ngIf=\"addVehicleShow\">\n      <div class=\"vehicle-detail\" padding>\n\n        <h1 *ngIf=\"vehicleFormStatus==0\">Add new vehicle</h1>\n        <h1 *ngIf=\"vehicleFormStatus==1\">Edit vehicle detail</h1>\n\n        <div class=\"vehicle-form\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>Vehicle Name</ion-label>\n              <ion-input placeholder=\"Enter Vehicle Name\" formControlName=\"vname\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"addVehicleForm.controls.vname.hasError('required') && addVehicleForm.controls.vname.touched\">\n            <ion-col size=\"12\" no-padding>\n              <p class=\"text08\">Sorry, field vehicle name is required!</p>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <div class=\"vehicle-form\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>License plate</ion-label>\n              <ion-input placeholder=\"Enter license plate\" formControlName=\"platenumber\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"addVehicleForm.controls.platenumber.hasError('required') && addVehicleForm.controls.platenumber.touched\">\n            <ion-col size=\"12\" no-padding>\n              <p class=\"text08\">Sorry, field license plate is required!</p>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <ion-row class=\"loc-btn\">\n          <ion-col size=\"6\">\n            <button type=\"button\" class=\"cancle-btn\" (click)=\"addVehicleShow = false\">Cancel</button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <button type=\"button\" expand=\"full\" color=\"primary\" expand=\"block\" class=\"save-btn\"\n              [ngClass]=\"{'disable-btn' : !addVehicleForm.valid }\" (click)=\"submitVehicleForm()\" [disabled]=\"!addVehicleForm.valid\">Save</button>\n          </ion-col>\n        </ion-row>\n\n      </div>\n    </div>\n  </form>\n\n  <div padding>\n    <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segmentfilter\">\n      <ion-segment-button value=\"vehicle\">\n        <ion-label>Vehicle</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"location\">\n        <ion-label>Location</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"general\">\n        <ion-label>Distance</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]=\"segmentfilter\">\n      <div class=\"add-vehicle\" padding *ngSwitchCase=\"'vehicle'\">\n        <ion-button color=\"primary\" expand=\"full\" mode=\"ios\" (click)=\"addNewVehicle()\">\n          <ion-icon name=\"add\"></ion-icon>\n          Add New Vehicle\n        </ion-button>\n        <div class=\"add-vehicle-detail ion-padding-vertical\" *ngIf=\"vehiclelist.length>0\">\n          <ion-row class=\"vehicle-size\" *ngFor=\"let list of vehiclelist\">\n            <ion-col size=\"2\" no-padding>\n              <img src=\"assets/icon/vehicle.png\">\n            </ion-col>\n            <ion-col size=\"7\" no-padding>\n              <h5>{{list.name}}</h5>\n              <ion-row>\n                <ion-col size=\"6\" no-padding>\n                  <span>License plate</span>\n                </ion-col>\n                <ion-col size=\"6\" no-padding>\n                  <p>{{list.platenumber}}</p>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"3\" no-padding>\n              <div class=\"edit-btn\">\n                <span class=\"blue-color\" (click)=\"editVehicle(list)\">Edit</span>\n                <span class=\"red-color\" (click)=\"deleteVehicle(list.id)\">Remove</span>\n              </div>\n            </ion-col>\n          </ion-row>\n\n        </div>\n        <div class=\"add-vehicle-detail ion-padding-vertical\" *ngIf=\"!vehiclelist.length\">\n          <p class=\"nodata\">No Data Found!</p>\n        </div>\n\n      </div>\n\n      <div class=\"add-vehicle\" padding *ngSwitchCase=\"'location'\">\n\n        <div class=\"add-trip-btn\" padding>\n          <ion-button color=\"primary\" expand=\"full\" mode=\"ios\" (click)=\"addNewLocation()\">\n            <ion-icon name=\"add\"></ion-icon>\n            Add New Location\n          </ion-button>\n        </div>\n\n        <div class=\"location-detail\" padding *ngIf=\"locationlist.length>0\">\n          <ion-row class=\"location-row\" *ngFor=\"let list of locationlist\">\n            <ion-col no-padding size=\"1\" (click)=\"openMapsApp(list.address)\">\n              <img src=\"assets/icon/locate.png\">\n            </ion-col>\n            <ion-col no-padding size=\"8\">\n              <div>\n                <div>{{list.name}}</div>\n                <ion-note>{{list.address}}</ion-note>\n              </div>\n            </ion-col>\n            <ion-col no-padding size=\"3\">\n              <div class=\"edit-btn\">\n                <span class=\"blue-color\" (click)=\"editLocation(list)\">Edit</span>\n                <span class=\"red-color\" (click)=\"deleteLocation(list.id)\">Remove</span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <div class=\"location-detail ion-padding-vertical\" *ngIf=\"!locationlist.length\">\n          <p class=\"nodata\">No Data Found!</p>\n        </div>\n\n      </div>\n\n      <div class=\"general-setting\" padding *ngSwitchCase=\"'general'\">\n        <h1><b>Distance in</b></h1>\n        <ion-list>\n          <ion-radio-group (ionChange)=\"selectunit(unitvalue)\" [(ngModel)]=\"unitvalue\">\n            <ion-item lines=\"none\" no-padding>\n              <ion-label>Kilometre</ion-label>\n              <ion-radio slot=\"start\" value=\"km\" name=\"distance\"></ion-radio>\n            </ion-item>\n\n            <ion-item lines=\"none\" no-padding>\n              <ion-label>Miles</ion-label>\n              <ion-radio slot=\"start\" value=\"mi\" name=\"distance\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-list>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/trip/tripsetting/tripsetting.page.scss":
/*!********************************************************!*\
  !*** ./src/app/trip/tripsetting/tripsetting.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-odometer {\n  margin: 20px 0px;\n}\n\n.new-odo-detail p {\n  color: #2F2F2F;\n  font-size: 16px;\n  margin: 0px;\n  margin-bottom: 5px;\n}\n\n.new-odo-detail img {\n  width: 34px;\n}\n\nspan.color-grey1 {\n  font-size: 12px;\n  color: #62666B;\n}\n\n.edit-btn {\n  text-align: center;\n}\n\n.edit-btn span {\n  display: block;\n  font-size: 13px;\n  margin-bottom: 10px;\n}\n\n.location-detail h5 {\n  margin: 0px;\n  color: #2f2f2f;\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n\n.location-detail p {\n  margin: 0px;\n  color: #62666B;\n  font-size: 12px;\n}\n\n.location-detail img {\n  width: 14px;\n  margin-top: 10px;\n}\n\n.location-row {\n  margin-bottom: 20px;\n}\n\n.location-addition {\n  position: fixed;\n  width: 100%;\n  z-index: 99;\n  height: 100%;\n  padding: 30px 20px;\n  top: 50px;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.addition-detail {\n  background-color: white;\n}\n\n.addition-detail h1 {\n  color: #009CDE;\n  margin-left: 15px;\n  font-size: 23px;\n  margin-top: 0px;\n}\n\nion-label {\n  font-size: 12px !important;\n}\n\nion-select {\n  border-bottom: 1px solid #D8D8D8;\n}\n\n.current-loc {\n  margin-top: 15px;\n  border-bottom: 1px solid #D8D8D8;\n}\n\n.current-loc p ion-icon {\n  color: #878C8E;\n  margin-right: 10px;\n}\n\n.current-loc p {\n  color: #2F2F2F;\n  font-size: 15px;\n}\n\n.sub-text ion-label {\n  font-size: 8px !important;\n  color: #2F2F2F !important;\n}\n\n.loc-btn {\n  margin-top: 10px;\n}\n\nbutton.cancle-btn {\n  background: transparent;\n  border: 1px solid #62666B;\n  width: 100%;\n  color: #62666B;\n  height: 35px;\n  border-radius: 8px;\n}\n\nbutton.save-btn {\n  background: #009CDE;\n  width: 100%;\n  color: #fff;\n  height: 35px;\n  border-radius: 8px;\n}\n\nbutton.disable-btn {\n  background: rgba(0, 156, 222, 0.4705882353);\n}\n\n.odometer-add {\n  position: fixed;\n  width: 100%;\n  z-index: 99;\n  height: 100%;\n  padding: 30px 20px;\n  top: 0px;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.odometer-detail {\n  background-color: white;\n}\n\n.odometer-detail h1 {\n  color: #009CDE;\n  margin-left: 15px;\n  font-size: 23px;\n  margin-top: 0px;\n}\n\nion-datetime {\n  border-bottom: 1px solid #d5d5d5;\n}\n\n.odometer-time {\n  padding: 15px 0px;\n}\n\n.odometer-date {\n  padding-bottom: 15px;\n}\n\n.odometer-reading {\n  padding-bottom: 15px;\n}\n\n.odometer-reading ion-input {\n  border-bottom: 1px solid #d5d5d5;\n}\n\n.vehicle-form ion-input {\n  border-bottom: 1px solid #d5d5d5;\n}\n\n.add-new-vehicle {\n  position: fixed;\n  width: 100%;\n  z-index: 99;\n  height: 100%;\n  padding: 30px 20px;\n  top: 50px;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.vehicle-detail {\n  background-color: white;\n}\n\n.vehicle-detail h1 {\n  color: #009CDE;\n  margin-left: 15px;\n  font-size: 23px;\n  margin-top: 0px;\n}\n\n.track-detail {\n  margin-bottom: 20px;\n}\n\n.odometer-setting h1 {\n  display: inline;\n  margin: 0px;\n  font-size: 18px;\n  color: #2F2F2F;\n}\n\n.odometer-setting ion-select {\n  display: inline-flex;\n  float: right;\n  padding-top: 0;\n  border: none;\n  font-size: 12px;\n  color: #62666B;\n}\n\nion-segment-button {\n  border: none;\n  background: transparent;\n}\n\n@media only screen and (max-width: 375px) {\n  .trip-list li {\n    margin-right: 30px;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  .trip-list li {\n    font-size: 13px;\n    margin-right: 31px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .trip-list li {\n    font-size: 12px;\n    margin-right: 24px;\n  }\n}\n\n.vehicle-size span {\n  font-size: 14px;\n  color: #878C8E;\n}\n\n.vehicle-size h5 {\n  margin: 0px;\n  font-size: 16px;\n  color: #2f2f2f;\n}\n\n.vehicle-size p {\n  font-size: 14px;\n  color: #62666B;\n  margin: 3px 0 0;\n}\n\n.vehicle-size img {\n  width: 40px;\n}\n\nspan.blue-color {\n  color: #009CDE !important;\n  font-size: 13px !important;\n}\n\nspan.red-color {\n  color: #FF5357 !important;\n  font-size: 13px !important;\n}\n\n.vehicle-size {\n  margin-top: 25px;\n}\n\n.general-setting h1 {\n  color: #383838;\n  font-size: 18px;\n}\n\n.general-setting ion-label {\n  font-size: 16px !important;\n}\n\np.nodata {\n  margin-top: 20px !important;\n  color: #9fa7b3 !important;\n  font-size: 16px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3RyaXAvdHJpcHNldHRpbmcvdHJpcHNldHRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC90cmlwL3RyaXBzZXR0aW5nL3RyaXBzZXR0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLGdCQUFBO0FDREo7O0FER0E7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0FBOztBREVBO0VBRUksV0FBQTtBQ0FKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUVJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFFSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFFQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NBOztBRENBO0VBRUEsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0E7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUVJLG1CQUFBO0FDRUo7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7QUNFSjs7QURDQTtFQUVJLHVCQUFBO0FDQ0o7O0FEQ0E7RUFFSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBRUksMEJBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGdDQUFBO0FDRUo7O0FEQUE7RUFFSSxjQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUVJLGNBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FDR0o7O0FEREE7RUFFSSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDS0o7O0FESEE7RUFDSSwyQ0FBQTtBQ01KOztBREhBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0FDTUo7O0FESkE7RUFFSSx1QkFBQTtBQ01KOztBREpBO0VBRUksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNNSjs7QURKQTtFQUNJLGdDQUFBO0FDT0o7O0FETEE7RUFDSSxpQkFBQTtBQ1FKOztBRE5BO0VBRUksb0JBQUE7QUNRSjs7QUROQTtFQUVJLG9CQUFBO0FDUUo7O0FETkE7RUFFSSxnQ0FBQTtBQ1FKOztBRExBO0VBRUksZ0NBQUE7QUNPSjs7QURMQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQ1FKOztBRE5BO0VBRUksdUJBQUE7QUNRSjs7QUROQTtFQUVJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDUUo7O0FETkE7RUFFSSxtQkFBQTtBQ1FKOztBRE5BO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1NKOztBRFBBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1VKOztBRFJBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FDV0o7O0FETEE7RUFFSTtJQUVJLGtCQUFBO0VDTU47QUFDRjs7QURKQTtFQUVJO0lBRUksZUFBQTtJQUNBLGtCQUFBO0VDSU47QUFDRjs7QURGQTtFQUVJO0lBRUksZUFBQTtJQUNBLGtCQUFBO0VDRU47QUFDRjs7QURBQTtFQUVJLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFFSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUVJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBRUksV0FBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtBQ0VKOztBREFBO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtBQ0dKOztBREFBO0VBQ0ksZ0JBQUE7QUNHSjs7QUREQTtFQUVJLGNBQUE7RUFDQSxlQUFBO0FDR0o7O0FEREE7RUFDSSwwQkFBQTtBQ0lKOztBREZBO0VBQ0ksMkJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC90cmlwL3RyaXBzZXR0aW5nL3RyaXBzZXR0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm5ldy1vZG9tZXRlclxue1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG59XG4ubmV3LW9kby1kZXRhaWwgcHtcbmNvbG9yOiAjMkYyRjJGO1xuZm9udC1zaXplOiAxNnB4O1xubWFyZ2luOiAwcHg7XG5tYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubmV3LW9kby1kZXRhaWwgaW1nXG57XG4gICAgd2lkdGg6IDM0cHg7XG59XG5zcGFuLmNvbG9yLWdyZXkxe1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzYyNjY2Qjtcbn1cbi5lZGl0LWJ0blxue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5lZGl0LWJ0biBzcGFuXG57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubG9jYXRpb24tZGV0YWlsIGg1XG57XG5tYXJnaW46IDBweDtcbmNvbG9yOiAjMmYyZjJmO1xuZm9udC1zaXplOiAxNnB4O1xubWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmxvY2F0aW9uLWRldGFpbCBwXG57XG5tYXJnaW46IDBweDtcbmNvbG9yOiAjNjI2NjZCO1xuZm9udC1zaXplOiAxMnB4O1xufVxuLmxvY2F0aW9uLWRldGFpbCBpbWd7XG4gICAgd2lkdGg6IDE0cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5sb2NhdGlvbi1yb3dcbntcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubG9jYXRpb24tYWRkaXRpb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzozMHB4IDIwcHg7XG4gICAgdG9wOiA1MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjUpO1xufVxuXG4uYWRkaXRpb24tZGV0YWlsXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICBcbn1cbi5hZGRpdGlvbi1kZXRhaWwgaDFcbntcbiAgICBjb2xvcjogIzAwOUNERTtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuaW9uLWxhYmVsXG57XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG5cbn1cbmlvbi1zZWxlY3R7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOEQ4RDg7XG59XG4uY3VycmVudC1sb2Mge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOEQ4RDg7XG59XG4uY3VycmVudC1sb2MgcCBpb24taWNvblxue1xuICAgIGNvbG9yOiAjODc4QzhFO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jdXJyZW50LWxvYyBwXG57XG4gICAgY29sb3I6ICMyRjJGMkY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLnN1Yi10ZXh0IGlvbi1sYWJlbHtcbiAgICBmb250LXNpemU6IDhweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMkYyRjJGICFpbXBvcnRhbnQ7XG59XG4ubG9jLWJ0blxue1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5idXR0b24uY2FuY2xlLWJ0biB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzYyNjY2QjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogIzYyNjY2QjtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuYnV0dG9uLnNhdmUtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA5Q0RFO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5idXR0b24uZGlzYWJsZS1idG4ge1xuICAgIGJhY2tncm91bmQ6ICMwMDljZGU3ODtcbn1cblxuLm9kb21ldGVyLWFkZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOjMwcHggMjBweDtcbiAgICB0b3A6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC41KTtcbn1cbi5vZG9tZXRlci1kZXRhaWxcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgIFxufVxuLm9kb21ldGVyLWRldGFpbCBoMVxue1xuICAgIGNvbG9yOiAjMDA5Q0RFO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG59XG5pb24tZGF0ZXRpbWUge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDVkNWQ1O1xufVxuLm9kb21ldGVyLXRpbWUge1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xufVxuLm9kb21ldGVyLWRhdGVcbntcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5vZG9tZXRlci1yZWFkaW5nXG57XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4ub2RvbWV0ZXItcmVhZGluZyBpb24taW5wdXRcbntcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q1ZDVkNTtcbn1cblxuLnZlaGljbGUtZm9ybSBpb24taW5wdXRcbntcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q1ZDVkNTtcbn1cbi5hZGQtbmV3LXZlaGljbGUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzozMHB4IDIwcHg7XG4gICAgdG9wOiA1MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjUpO1xufVxuLnZlaGljbGUtZGV0YWlsXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICBcbn1cbi52ZWhpY2xlLWRldGFpbCBoMVxue1xuICAgIGNvbG9yOiAjMDA5Q0RFO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG59XG4udHJhY2stZGV0YWlsXG57XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5vZG9tZXRlci1zZXR0aW5nIGgxIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjMkYyRjJGO1xufVxuLm9kb21ldGVyLXNldHRpbmcgaW9uLXNlbGVjdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM2MjY2NkI7XG59XG5pb24tc2VnbWVudC1idXR0b257XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpXG57XG4gICAgLnRyaXAtbGlzdCBsaVxuICAgIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweClcbntcbiAgICAudHJpcC1saXN0IGxpXG4gICAge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzFweDtcbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpXG57XG4gICAgLnRyaXAtbGlzdCBsaVxuICAgIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgfVxufVxuLnZlaGljbGUtc2l6ZSBzcGFuXG57XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjODc4QzhFO1xufVxuLnZlaGljbGUtc2l6ZSBoNVxue1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzJmMmYyZjtcbn1cbi52ZWhpY2xlLXNpemUgcFxue1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzYyNjY2QjtcbiAgICBtYXJnaW46IDNweCAwIDA7XG59XG4udmVoaWNsZS1zaXplIGltZ1xue1xuICAgIHdpZHRoOiA0MHB4O1xufVxuc3Bhbi5ibHVlLWNvbG9yIHtcbiAgICBjb2xvcjogIzAwOUNERSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuc3Bhbi5yZWQtY29sb3Ige1xuICAgIGNvbG9yOiAjRkY1MzU3ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi52ZWhpY2xlLXNpemUge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG4uZ2VuZXJhbC1zZXR0aW5nIGgxXG57XG4gICAgY29sb3I6ICMzODM4Mzg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLmdlbmVyYWwtc2V0dGluZyBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxucC5ub2RhdGEge1xuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzlmYTdiMyAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgIH0iLCIubmV3LW9kb21ldGVyIHtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cblxuLm5ldy1vZG8tZGV0YWlsIHAge1xuICBjb2xvcjogIzJGMkYyRjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubmV3LW9kby1kZXRhaWwgaW1nIHtcbiAgd2lkdGg6IDM0cHg7XG59XG5cbnNwYW4uY29sb3ItZ3JleTEge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjI2NjZCO1xufVxuXG4uZWRpdC1idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lZGl0LWJ0biBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmxvY2F0aW9uLWRldGFpbCBoNSB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogIzJmMmYyZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5sb2NhdGlvbi1kZXRhaWwgcCB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogIzYyNjY2QjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubG9jYXRpb24tZGV0YWlsIGltZyB7XG4gIHdpZHRoOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubG9jYXRpb24tcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmxvY2F0aW9uLWFkZGl0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMzBweCAyMHB4O1xuICB0b3A6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmFkZGl0aW9uLWRldGFpbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYWRkaXRpb24tZGV0YWlsIGgxIHtcbiAgY29sb3I6ICMwMDlDREU7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDIzcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Q4RDhEODtcbn1cblxuLmN1cnJlbnQtbG9jIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOEQ4RDg7XG59XG5cbi5jdXJyZW50LWxvYyBwIGlvbi1pY29uIHtcbiAgY29sb3I6ICM4NzhDOEU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmN1cnJlbnQtbG9jIHAge1xuICBjb2xvcjogIzJGMkYyRjtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uc3ViLXRleHQgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiA4cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMyRjJGMkYgIWltcG9ydGFudDtcbn1cblxuLmxvYy1idG4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5idXR0b24uY2FuY2xlLWJ0biB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjI2NjZCO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICM2MjY2NkI7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5idXR0b24uc2F2ZS1idG4ge1xuICBiYWNrZ3JvdW5kOiAjMDA5Q0RFO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5idXR0b24uZGlzYWJsZS1idG4ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE1NiwgMjIyLCAwLjQ3MDU4ODIzNTMpO1xufVxuXG4ub2RvbWV0ZXItYWRkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMzBweCAyMHB4O1xuICB0b3A6IDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ub2RvbWV0ZXItZGV0YWlsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5vZG9tZXRlci1kZXRhaWwgaDEge1xuICBjb2xvcjogIzAwOUNERTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q1ZDVkNTtcbn1cblxuLm9kb21ldGVyLXRpbWUge1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbn1cblxuLm9kb21ldGVyLWRhdGUge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLm9kb21ldGVyLXJlYWRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLm9kb21ldGVyLXJlYWRpbmcgaW9uLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNWQ1ZDU7XG59XG5cbi52ZWhpY2xlLWZvcm0gaW9uLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNWQ1ZDU7XG59XG5cbi5hZGQtbmV3LXZlaGljbGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gIHRvcDogNTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4udmVoaWNsZS1kZXRhaWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnZlaGljbGUtZGV0YWlsIGgxIHtcbiAgY29sb3I6ICMwMDlDREU7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDIzcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLnRyYWNrLWRldGFpbCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5vZG9tZXRlci1zZXR0aW5nIGgxIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzJGMkYyRjtcbn1cblxuLm9kb21ldGVyLXNldHRpbmcgaW9uLXNlbGVjdCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2MjY2NkI7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgLnRyaXAtbGlzdCBsaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC50cmlwLWxpc3QgbGkge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMxcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLnRyaXAtbGlzdCBsaSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgfVxufVxuLnZlaGljbGUtc2l6ZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzg3OEM4RTtcbn1cblxuLnZlaGljbGUtc2l6ZSBoNSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMmYyZjJmO1xufVxuXG4udmVoaWNsZS1zaXplIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjI2NjZCO1xuICBtYXJnaW46IDNweCAwIDA7XG59XG5cbi52ZWhpY2xlLXNpemUgaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbnNwYW4uYmx1ZS1jb2xvciB7XG4gIGNvbG9yOiAjMDA5Q0RFICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuXG5zcGFuLnJlZC1jb2xvciB7XG4gIGNvbG9yOiAjRkY1MzU3ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuXG4udmVoaWNsZS1zaXplIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmdlbmVyYWwtc2V0dGluZyBoMSB7XG4gIGNvbG9yOiAjMzgzODM4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5nZW5lcmFsLXNldHRpbmcgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbnAubm9kYXRhIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzlmYTdiMyAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/trip/tripsetting/tripsetting.page.ts":
/*!******************************************************!*\
  !*** ./src/app/trip/tripsetting/tripsetting.page.ts ***!
  \******************************************************/
/*! exports provided: TripsettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsettingPage", function() { return TripsettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var src_app_service_setting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/setting.service */ "./src/app/service/setting.service.ts");
/* harmony import */ var src_app_service_back_stack_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/back-stack.service */ "./src/app/service/back-stack.service.ts");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");









var TripsettingPage = /** @class */ (function () {
    function TripsettingPage(events, formBuilder, storageService, settingService, toastCtrl, backStack, platform, alertController, geolocation) {
        var _this = this;
        this.events = events;
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.settingService = settingService;
        this.toastCtrl = toastCtrl;
        this.backStack = backStack;
        this.platform = platform;
        this.alertController = alertController;
        this.geolocation = geolocation;
        this.segmentfilter = 'vehicle';
        this.status = 0;
        this.data = {};
        this.locationstatus = 0;
        this.addVehicleShow = false;
        this.vehiclelist = [];
        this.locationlist = [];
        this.unitvalue = '';
        this.GoogleAutocomplete = '';
        this.autocompleteItems1 = [];
        this.id = '';
        this.editdata = '';
        this.locationShow = false;
        this.vehicleFormStatus = 0;
        this.locationFormStatus = 0;
        this.addVehicleForm = this.formBuilder.group({
            vname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            platenumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
        });
        this.addlocationForm = this.formBuilder.group({
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
        });
        this.events.subscribe('user:created', function (time) {
            _this.userid = _this.settingService.getUserId();
        });
        this.back = this.backStack.getBackStack('tripsetting');
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { origininput: '' };
        this.autocompleteItems1 = [];
    }
    TripsettingPage.prototype.ngOnInit = function () {
        this.userid = this.settingService.getUserId();
        this.createTable();
        this.viewVehicletype();
        this.viewLocation();
        this.createSetting();
        this.getuserdata();
    };
    TripsettingPage.prototype.updateSearchResults = function () {
        var _this = this;
        if (this.autocomplete.origininput === '') {
            this.autocompleteItems1 = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.origininput }, function (predictions, status) {
            _this.autocompleteItems1 = [];
            predictions.forEach(function (prediction) {
                _this.autocompleteItems1.push(prediction);
                // console.log(this.autocompleteItems1);
            });
        });
    };
    TripsettingPage.prototype.currentLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp, 'res');
            var geocoder = new google.maps.Geocoder;
            console.log(geocoder);
            var latlng = { lat: resp.coords.latitude, lng: resp.coords.longitude };
            geocoder.geocode({ location: latlng }, function (results, status) {
                console.log(status);
                if (status === 'OK') {
                    _this.autocomplete = {
                        origininput: ''
                    };
                    _this.autocomplete = {
                        origininput: results[0].formatted_address
                    };
                }
            });
        });
    };
    TripsettingPage.prototype.selectOriginSearchResult = function (item) {
        this.autocompleteItems1 = [];
        this.autocomplete = {
            origininput: item.description
        };
    };
    TripsettingPage.prototype.createTable = function () {
        this.storageService
            .createVehicleTable()
            .then(function (res) {
        })
            .catch(function (error) {
            console.log(error);
        });
        this.storageService
            .createLocTable()
            .then(function (res) {
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    TripsettingPage.prototype.presentToast = function (msg) {
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
    TripsettingPage.prototype.viewLocation = function () {
        var _this = this;
        this.locationlist = [];
        this.storageService
            .viewLocation(this.userid)
            .then(function (res) {
            if (res && res.rows && res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.locationlist.push({
                        id: res.rows.item(i).id,
                        name: res.rows.item(i).name,
                        address: res.rows.item(i).address,
                        date: res.rows.item(i).date,
                        userid: res.rows.item(i).userid,
                    });
                }
            }
            else {
                _this.locationlist = [];
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    TripsettingPage.prototype.viewVehicletype = function () {
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
                        platenumber: res.rows.item(i).platenumber,
                        date: res.rows.item(i).date,
                        userid: res.rows.item(i).userid,
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
    // location section
    TripsettingPage.prototype.resetLocationForm = function () {
        this.locationShow = false;
        this.locationFormStatus = 0;
        this.addlocationForm.reset();
    };
    TripsettingPage.prototype.addNewLocation = function () {
        this.locationShow = true;
        this.locationFormStatus = 0;
        this.lname = '';
        this.addlocationForm.reset();
    };
    TripsettingPage.prototype.addLocation = function () {
        var _this = this;
        if (this.addlocationForm.valid && this.autocomplete.origininput) {
            var newdata = {
                address: this.autocomplete.origininput,
                name: this.addlocationForm.value.lname,
                userid: this.userid,
                id: ''
            };
            this.storageService
                .addLocation(newdata).then(function (res) {
                if (res.status === 1) {
                    _this.autocomplete = {
                        origininput: ''
                    };
                    _this.presentToast(res.message);
                    _this.viewLocation();
                    _this.resetLocationForm();
                }
            })
                .catch(function (error) {
                _this.presentToast(error);
                console.log(error);
            });
        }
    };
    TripsettingPage.prototype.editLocation = function (data) {
        this.locationFormStatus = 1;
        this.locationShow = true;
        this.locationId = data.id;
        this.editdata = data;
        this.lname = data.name;
        this.autocomplete = {
            origininput: data.address
        };
    };
    TripsettingPage.prototype.updateLocation = function () {
        var _this = this;
        var data = {
            address: this.autocomplete.origininput,
            name: this.addlocationForm.value.lname,
            id: this.locationId,
            userid: this.editdata.userid,
            date: this.editdata.date
        };
        this.storageService
            .addLocation(data).then(function (res) {
            if (res.status === 1) {
                _this.autocomplete = {
                    origininput: ''
                };
                _this.presentToast(res.message);
                _this.viewLocation();
                _this.resetLocationForm();
            }
        })
            .catch(function (error) {
            _this.presentToast(error);
            console.log(error);
        });
    };
    TripsettingPage.prototype.submitLocationForm = function () {
        if (this.locationFormStatus) {
            this.updateLocation();
        }
        else {
            this.addLocation();
        }
    };
    TripsettingPage.prototype.deleteLocation = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Delete location',
                            message: 'Are you sure want to remove this location?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Delete',
                                    handler: function () {
                                        _this.storageService
                                            .removeLocation(id)
                                            .then(function (res) {
                                            _this.resetLocationForm();
                                            _this.presentToast('Location has been deleted successfully');
                                            _this.viewLocation();
                                        })
                                            .catch(function (error) {
                                            _this.presentToast(error);
                                            console.log(error);
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
    // end vehicle section
    // vehicle section
    TripsettingPage.prototype.resetVehicleForm = function () {
        this.vehicleFormStatus = 0;
        this.addVehicleShow = false;
        this.addVehicleForm.reset();
    };
    TripsettingPage.prototype.addNewVehicle = function () {
        this.addVehicleShow = true;
        this.vehicleFormStatus = 0;
        this.addVehicleForm.reset();
    };
    TripsettingPage.prototype.addVehicle = function () {
        var _this = this;
        this.storageService
            .addVehicle(this.addVehicleForm.value.vname, null, this.addVehicleForm.value.platenumber, new Date(), this.userid)
            .then(function (res) {
            if (res.status === 0) {
                _this.presentToast(res.message);
            }
            else {
                _this.resetVehicleForm();
                _this.presentToast('Vehicle added successfully');
                _this.viewVehicletype();
            }
        })
            .catch(function (error) {
            _this.presentToast(error);
            console.log(error);
        });
    };
    TripsettingPage.prototype.editVehicle = function (data) {
        this.vehicleFormStatus = 1;
        this.addVehicleShow = true;
        this.addVehicleForm.patchValue({
            vname: data.name,
            platenumber: data.platenumber
        });
        this.vehicleId = data.id;
    };
    TripsettingPage.prototype.updateVehicle = function () {
        var _this = this;
        this.data = {
            name: this.addVehicleForm.value.vname,
            platenumber: this.addVehicleForm.value.platenumber,
            id: this.vehicleId
        };
        this.storageService
            .updateVehicle(this.data).then(function (res) {
            if (res.status === 0) {
                _this.presentToast(res.message);
            }
            else {
                _this.resetVehicleForm();
                _this.presentToast('Vehicle updated successfully');
                _this.viewVehicletype();
            }
        })
            .catch(function (error) {
            _this.presentToast(error);
            console.log(error);
        });
    };
    TripsettingPage.prototype.submitVehicleForm = function () {
        if (this.addVehicleForm.valid) {
            if (this.vehicleFormStatus) {
                this.updateVehicle();
            }
            else {
                this.addVehicle();
            }
        }
    };
    TripsettingPage.prototype.deleteVehicle = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Delete vehicle',
                            message: 'Are you sure want to remove this vehicle?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Delete',
                                    handler: function () {
                                        _this.storageService
                                            .removeVehicle(id)
                                            .then(function (res) {
                                            _this.resetVehicleForm();
                                            _this.presentToast('Vehicle has been deleted successfully');
                                            _this.viewVehicletype();
                                        })
                                            .catch(function (error) {
                                            _this.presentToast(error);
                                            console.log(error);
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
    // end vehicle section
    TripsettingPage.prototype.getuserdata = function () {
        var _this = this;
        this.storageService.getbyid('usersettings', this.userid)
            .then(function (res) {
            if (res && res.rows && res.rows.length > 0) {
                _this.unitvalue = res.rows.item(0).unit;
            }
            else {
                _this.unitvalue = 'km';
            }
        });
    };
    TripsettingPage.prototype.selectunit = function (unit) {
        this.data = {
            userid: this.userid,
            unit: unit
        };
        this.storageService
            .updateSettings(this.data)
            .then(function (res) {
        })
            .catch(function (error) {
        });
    };
    TripsettingPage.prototype.segmentChanged = function (ev) {
        console.log('Segment changed', ev);
    };
    TripsettingPage.prototype.createSetting = function () {
        this.storageService.createSettingTable();
    };
    TripsettingPage.prototype.openMapsApp = function (location) {
        if (this.platform.is('android')) {
            window.location.href = 'geo:0,0?q=' + location;
        }
        else {
            window.location.href = 'maps://?q=' + location;
        }
    };
    TripsettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tripsetting',
            template: __webpack_require__(/*! ./tripsetting.page.html */ "./src/app/trip/tripsetting/tripsetting.page.html"),
            styles: [__webpack_require__(/*! ./tripsetting.page.scss */ "./src/app/trip/tripsetting/tripsetting.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_8__["PageTrack"])("Trip Settings Screen"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            src_app_service_setting_service__WEBPACK_IMPORTED_MODULE_6__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            src_app_service_back_stack_service__WEBPACK_IMPORTED_MODULE_7__["BackStackService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]])
    ], TripsettingPage);
    return TripsettingPage;
}());



/***/ })

}]);
//# sourceMappingURL=trip-tripsetting-tripsetting-module.js.map