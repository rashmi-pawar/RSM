(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trip-triphistory-triphistory-module"],{

/***/ "./src/app/trip/triphistory/triphistory.module.ts":
/*!********************************************************!*\
  !*** ./src/app/trip/triphistory/triphistory.module.ts ***!
  \********************************************************/
/*! exports provided: TriphistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriphistoryPageModule", function() { return TriphistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _triphistory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./triphistory.page */ "./src/app/trip/triphistory/triphistory.page.ts");







var routes = [
    {
        path: '',
        component: _triphistory_page__WEBPACK_IMPORTED_MODULE_6__["TriphistoryPage"]
    }
];
var TriphistoryPageModule = /** @class */ (function () {
    function TriphistoryPageModule() {
    }
    TriphistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_triphistory_page__WEBPACK_IMPORTED_MODULE_6__["TriphistoryPage"]]
        })
    ], TriphistoryPageModule);
    return TriphistoryPageModule;
}());



/***/ }),

/***/ "./src/app/trip/triphistory/triphistory.page.html":
/*!********************************************************!*\
  !*** ./src/app/trip/triphistory/triphistory.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"triplogbook\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Trip history</ion-title>\n    <ion-buttons slot=\"end\" class=\"more-btn\" (click)=\"showfiler = true\">\n      <img src=\"assets/icon/filter.png\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"image-content\" padding>\n    <div class=\"top-head\">\n      <ion-row>\n        <ion-col no-padding>\n          <div class=\"add-new-recpt\" (click)=\"goTo('logtrip')\">\n            <p class=\"blue-color\">\n              <ion-icon name=\"add\"></ion-icon> &nbsp;Log manual trip\n            </p>\n          </div>\n        </ion-col>\n        <ion-col no-padding (click)=\"checklogin('viewreceipt','uploadtocloud')\">\n          <div class=\"upload-recpt\">\n            <p>Export and Share</p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n\n    <div class=\"filter\" padding *ngIf=\"showfiler\">\n      <div class=\"select-filter\" padding>\n        <h1 color=\"primary\">Filters</h1>\n\n        <div class=\"filter-select\">\n          <ion-label>Search by</ion-label>\n          <ion-datetime display-format=\"DD/MM/YYYY\" [(ngModel)]=\"date\"> </ion-datetime>\n        </div>\n\n        <div class=\"filter-btn\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <button type=\"button\" class=\"can-btn\" (click)=\"cancel()\">Cancel</button>\n\n            </ion-col>\n            <ion-col size=\"6\">\n              <button type=\"button\" class=\"app-btn\" (click)=\"filerdata()\">Apply</button>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"trip-option\" padding>\n      <ion-segment mode=\"md\" (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segmentFilter\">\n        <ion-segment-button mode=\"md\" value=\"personal\">\n          <p>Personal trips</p>\n        </ion-segment-button>\n        <ion-segment-button mode=\"md\" value=\"buisness\">\n          <p>Business trips</p>\n        </ion-segment-button>\n      </ion-segment>\n      <div [ngSwitch]=\"segmentFilter\">\n        <div class=\"trip-opt-detail\" *ngSwitchCase=\"'personal'\">\n          <div *ngIf=\"personallist.length>0\">\n            <ion-row class=\"recpt-detail\" *ngFor=\"let list of personallist \" class=\"rowss\">\n              <ion-col no-padding size=\"2\">\n                <ion-checkbox color=\"primary\" style=\"margin-top: 12px;\" (ionChange)=\"selectTrip($event, list)\"></ion-checkbox>\n              </ion-col>\n              <ion-col no-padding size=\"10\" (click)=\"details(list)\" style=\"padding-left: 10px;\">\n                <ion-row>\n                  <ion-col no-padding size=\"6\">\n                    <img src=\"/assets/icon/car.png\">\n                  </ion-col>\n                  <ion-col no-padding size=\"6\" class=\"right-side\">\n                    <p>{{list.startdate| date : 'dd/MM/yyyy'}}<span> - {{list.starttime | date:'hh:mm aa'}} </span></p>\n                  </ion-col>\n                  <ion-col no-padding size=\"6\">\n                    <img src=\"assets/icon/Oval Copy 6.png\" class=\"oval-design\">\n                  </ion-col>\n                  <ion-col no-padding size=\"6\" class=\"right-side\">\n                    <img src=\"assets/icon/Oval.png\" class=\"oval-design\">\n                  </ion-col>\n                  <ion-col no-padding size=\"4\">\n                    <span>{{list.origin}}</span>\n                  </ion-col>\n                  <ion-col no-padding size=\"4\" class=\"dark\">\n                    <span>{{list.distance}}{{list.unit}}</span>\n                  </ion-col>\n                  <ion-col no-padding size=\"4\" class=\"right-side\">\n                    <span>{{list.destination}}</span>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </div>\n          <ion-row *ngIf=\"personallist.length == 0\">\n            <p class=\"nodata\">No Data Found</p>\n          </ion-row>\n        </div>\n        <div class=\"trip-opt-detail\" *ngSwitchCase=\"'buisness'\">\n          <div *ngIf=\"buisnesslist.length>0\">\n            <ion-row class=\"recpt-detail\" *ngFor=\"let list of buisnesslist \" class=\"rowss\">\n              <ion-col no-padding size=\"1\">\n                <ion-checkbox color=\"primary\" style=\"margin-top: 12px;\" (ionChange)=\"selectTrip($event, list)\"></ion-checkbox>\n              </ion-col>\n              <ion-col no-padding size=\"11\">\n                <ion-row (click)=\"details(list)\" style=\"padding-left: 10px;\">\n                  <ion-col no-padding size=\"6\">\n                    <img src=\"/assets/icon/car.png\">\n                  </ion-col>\n                  <ion-col no-padding size=\"6\" class=\"right-side\">\n                    <p>{{list.startdate| date : 'dd/MM/yyyy'}}<span> - {{list.starttime | date:'hh:mm aa'}} </span></p>\n                  </ion-col>\n                  <ion-col no-padding size=\"6\">\n                    <img src=\"assets/icon/Oval Copy 6.png\" class=\"oval-design\">\n                  </ion-col>\n                  <ion-col no-padding size=\"6\" class=\"right-side\">\n                    <img src=\"assets/icon/Oval.png\" class=\"oval-design\">\n                  </ion-col>\n                  <ion-col no-padding size=\"4\">\n                    <span>{{list.origin}}</span>\n                  </ion-col>\n                  <ion-col no-padding size=\"4\" class=\"dark\">\n                    <span>{{list.distance}}{{list.unit}}</span>\n                  </ion-col>\n                  <ion-col no-padding size=\"4\" class=\"right-side\">\n                    <span>{{list.destination}}</span>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            \n              \n            </ion-row>\n\n          </div>\n          <ion-row *ngIf=\"buisnesslist.length == 0\">\n            <p class=\"nodata\">No Data Found</p>\n          </ion-row>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/trip/triphistory/triphistory.page.scss":
/*!********************************************************!*\
  !*** ./src/app/trip/triphistory/triphistory.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-content {\n  height: 165px;\n}\n\n.trip-option p {\n  color: #878C8E;\n  font-size: 14px;\n  text-align: center;\n  padding-bottom: 10px;\n}\n\np.active {\n  color: #009cde !important;\n  border-bottom: 2px solid #009cde;\n}\n\n.recpt-detail p {\n  font-size: 15px;\n  margin: 10px 0px 0px;\n  font-weight: 600;\n  color: #353A41;\n}\n\n.recpt-detail span {\n  margin: 0px;\n  font-size: 12px;\n  color: #878C8E;\n  font-weight: 400;\n}\n\n.recpt-detail img {\n  width: 61px;\n}\n\n.dark span {\n  color: #2F2F2F !important;\n  text-align: center;\n}\n\n.dark {\n  text-align: center;\n}\n\n.right-side {\n  text-align: right;\n}\n\nimg.oval-design {\n  width: 15px !important;\n}\n\n.recpt-detail {\n  margin: 20px 0px;\n}\n\n.trip-opt-detail {\n  padding-top: 0px;\n}\n\n.more-btn img {\n  width: 13px;\n  margin-right: 10px;\n}\n\n.filter {\n  position: fixed;\n  width: 100%;\n  z-index: 99;\n  height: 100%;\n  padding: 50px 20px;\n  top: 0px;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.select-filter {\n  background-color: white;\n}\n\n.select-filter h1 {\n  font-size: 23px;\n  color: #009CDE;\n  margin-top: 0px;\n}\n\nion-label {\n  color: #878C8E !important;\n  font-size: 12px !important;\n}\n\nion-input {\n  border-bottom: 1px solid #D8D8D8;\n  padding-left: 0px !important;\n}\n\n.filter-detail {\n  padding-top: 15px;\n}\n\n.filter-select {\n  margin-top: 15px;\n}\n\nion-datetime {\n  border-bottom: 1px solid #D8D8D8;\n  padding-left: 5px;\n}\n\nion-select {\n  padding-left: 5px;\n  border-bottom: 1px solid #D8D8D8;\n}\n\n.filter-sel {\n  margin-top: 15px;\n}\n\n.filter-btn {\n  margin: 30px 0px 20px;\n}\n\nbutton.app-btn {\n  width: 100%;\n  background: #009CDE;\n  color: #fff;\n  padding: 10px 0px;\n  font-size: 18px;\n  border-radius: 5px;\n}\n\nbutton.can-btn {\n  width: 100%;\n  border-radius: 5px;\n  color: #62666B;\n  border: 1px solid #62666B;\n  background: transparent;\n  padding: 9px 0px;\n  font-size: 18px;\n}\n\n.trip-option {\n  background: #fff;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n.add-new-recpt p {\n  font-size: 12px;\n  padding: 10px 0px;\n}\n\n.add-new-recpt ion-icon {\n  vertical-align: text-top;\n}\n\n.add-new-recpt {\n  background: #fff;\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n\n.export-recpt {\n  background: linear-gradient(to right, #ff7167 0%, #ff5156 100%);\n}\n\n.export-recpt p {\n  color: #fff;\n  font-size: 12px;\n  padding: 10px;\n}\n\n.upload-recpt p {\n  color: #fff;\n  font-size: 12px;\n  padding: 10px;\n}\n\n.upload-recpt {\n  background: linear-gradient(to right, #3f9c35 0%, #3f9c35 100%);\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\n.top-head {\n  text-align: center;\n}\n\n.select-placeholder {\n  opacity: 1;\n}\n\nion-select.sort-text {\n  float: right;\n  border-bottom: none;\n  font-size: 14px;\n  color: #62666B;\n  margin-top: 10px;\n}\n\n.delete-btn {\n  margin-right: 16px;\n}\n\n.rowss {\n  padding-left: 0;\n  padding-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3RyaXAvdHJpcGhpc3RvcnkvdHJpcGhpc3RvcnkucGFnZS5zY3NzIiwic3JjL2FwcC90cmlwL3RyaXBoaXN0b3J5L3RyaXBoaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0FKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxnQ0FBQTtBQ0NKOztBRENBO0VBRUksZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFFSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBREFBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7QUNJSjs7QURGQTtFQUVJLGlCQUFBO0FDSUo7O0FERkE7RUFDSSxzQkFBQTtBQ0tKOztBREhBO0VBQ0ksZ0JBQUE7QUNNSjs7QURKQTtFQUNJLGdCQUFBO0FDT0o7O0FETEE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNRSjs7QUROQTtFQUVJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsOEJBQUE7QUNRSjs7QUROQTtFQUVJLHVCQUFBO0FDUUo7O0FETkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNTSjs7QURQQTtFQUVJLHlCQUFBO0VBQ0EsMEJBQUE7QUNTSjs7QURQQTtFQUVJLGdDQUFBO0VBQ0EsNEJBQUE7QUNTSjs7QURQQTtFQUNJLGlCQUFBO0FDVUo7O0FEUkE7RUFDSSxnQkFBQTtBQ1dKOztBRFRBO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQ1lKOztBRFZBO0VBQ0ksaUJBQUE7RUFDQSxnQ0FBQTtBQ2FKOztBRFhBO0VBQ0ksZ0JBQUE7QUNjSjs7QURaQTtFQUNJLHFCQUFBO0FDZUo7O0FEYkE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNnQko7O0FEZEE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2lCSjs7QURmQTtFQUVJLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ2lCSjs7QURmQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ2tCSjs7QURoQkE7RUFFSSx3QkFBQTtBQ2tCSjs7QURoQkE7RUFFSSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNrQko7O0FEaEJBO0VBRUksK0RBQUE7QUNrQko7O0FEaEJBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDbUJKOztBRGpCQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ29CSjs7QURsQkE7RUFFSSwrREFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUNvQko7O0FEbEJBO0VBQ0ksa0JBQUE7QUNxQko7O0FEVkE7RUFFSSxVQUFBO0FDWUo7O0FEVkE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDYUo7O0FEWEE7RUFDSSxrQkFBQTtBQ2NKOztBRFpBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDZUoiLCJmaWxlIjoic3JjL2FwcC90cmlwL3RyaXBoaXN0b3J5L3RyaXBoaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1jb250ZW50XG57XG4gICAgaGVpZ2h0OiAxNjVweDtcbn1cblxuLnRyaXAtb3B0aW9uIHAge1xuICAgIGNvbG9yOiAjODc4QzhFO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5wLmFjdGl2ZSB7XG4gICAgY29sb3I6ICMwMDljZGUgICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDljZGUgO1xufVxuLnJlY3B0LWRldGFpbCBwXG57XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjogMTBweCAwcHggMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMzNTNBNDE7XG59XG4ucmVjcHQtZGV0YWlsIHNwYW5cbntcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM4NzhDOEU7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5yZWNwdC1kZXRhaWwgaW1nIHtcbiAgICB3aWR0aDogNjFweDtcbn1cbi5kYXJrIHNwYW4ge1xuICAgIGNvbG9yOiAjMkYyRjJGICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRhcmsge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yaWdodC1zaWRlXG57XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5pbWcub3ZhbC1kZXNpZ24ge1xuICAgIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG4ucmVjcHQtZGV0YWlsIHtcbiAgICBtYXJnaW46IDIwcHggMHB4O1xufVxuLnRyaXAtb3B0LWRldGFpbCB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbn1cbi5tb3JlLWJ0biBpbWcge1xuICAgIHdpZHRoOiAxM3B4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5maWx0ZXJcbntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogOTk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6NTBweCAyMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNSk7XG59XG4uc2VsZWN0LWZpbHRlclxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgXG59XG4uc2VsZWN0LWZpbHRlciBoMSB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGNvbG9yOiAjMDA5Q0RFO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn1cbmlvbi1sYWJlbFxue1xuICAgIGNvbG9yOiM4NzhDOEUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6MTJweCAhaW1wb3J0YW50O1xufVxuaW9uLWlucHV0XG57XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOEQ4RDg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cbi5maWx0ZXItZGV0YWlsIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5maWx0ZXItc2VsZWN0IHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuaW9uLWRhdGV0aW1lIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Q4RDhEODtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbmlvbi1zZWxlY3Qge1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDhEOEQ4O1xufVxuLmZpbHRlci1zZWwge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uZmlsdGVyLWJ0biB7XG4gICAgbWFyZ2luOiAzMHB4IDBweCAyMHB4O1xufVxuYnV0dG9uLmFwcC1idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICMwMDlDREU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmJ1dHRvbi5jYW4tYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6ICM2MjY2NkI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzYyNjY2QjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiA5cHggMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi50cmlwLW9wdGlvblxue1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4uYWRkLW5ldy1yZWNwdCBwe1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDsgICAgXG59XG4uYWRkLW5ldy1yZWNwdCBpb24taWNvblxue1xuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbn1cbi5hZGQtbmV3LXJlY3B0XG57XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xufVxuLmV4cG9ydC1yZWNwdFxue1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmNzE2NyAwJSwgI2ZmNTE1NiAxMDAlKTtcbn1cbi5leHBvcnQtcmVjcHQgcHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi51cGxvYWQtcmVjcHQgcHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi51cGxvYWQtcmVjcHRcbntcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzZjljMzUgMCUsICMzZjljMzUgMTAwJSk7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuLnRvcC1oZWFkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG59XG4vLyBzZWxlY3Quc29ydC10ZXh0IHtcbi8vICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICBib3JkZXI6IG5vbmU7XG4vLyAgICAgXG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xuLy8gICAgIFxuLy8gICAgXG4vLyB9XG4uc2VsZWN0LXBsYWNlaG9sZGVyXG57XG4gICAgb3BhY2l0eTogMTtcbn1cbmlvbi1zZWxlY3Quc29ydC10ZXh0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM2MjY2NkI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5kZWxldGUtYnRue1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5yb3dzc3tcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbn0iLCIuaW1hZ2UtY29udGVudCB7XG4gIGhlaWdodDogMTY1cHg7XG59XG5cbi50cmlwLW9wdGlvbiBwIHtcbiAgY29sb3I6ICM4NzhDOEU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxucC5hY3RpdmUge1xuICBjb2xvcjogIzAwOWNkZSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwOWNkZTtcbn1cblxuLnJlY3B0LWRldGFpbCBwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDEwcHggMHB4IDBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzNTNBNDE7XG59XG5cbi5yZWNwdC1kZXRhaWwgc3BhbiB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODc4QzhFO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ucmVjcHQtZGV0YWlsIGltZyB7XG4gIHdpZHRoOiA2MXB4O1xufVxuXG4uZGFyayBzcGFuIHtcbiAgY29sb3I6ICMyRjJGMkYgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGFyayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJpZ2h0LXNpZGUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaW1nLm92YWwtZGVzaWduIHtcbiAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnJlY3B0LWRldGFpbCB7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG5cbi50cmlwLW9wdC1kZXRhaWwge1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4ubW9yZS1idG4gaW1nIHtcbiAgd2lkdGg6IDEzcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmZpbHRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDUwcHggMjBweDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnNlbGVjdC1maWx0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlbGVjdC1maWx0ZXIgaDEge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGNvbG9yOiAjMDA5Q0RFO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjODc4QzhFICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Q4RDhEODtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLmZpbHRlci1kZXRhaWwge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLmZpbHRlci1zZWxlY3Qge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Q4RDhEODtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOEQ4RDg7XG59XG5cbi5maWx0ZXItc2VsIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmZpbHRlci1idG4ge1xuICBtYXJnaW46IDMwcHggMHB4IDIwcHg7XG59XG5cbmJ1dHRvbi5hcHAtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwMDlDREU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmJ1dHRvbi5jYW4tYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICM2MjY2NkI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MjY2NkI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiA5cHggMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50cmlwLW9wdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbn1cblxuLmFkZC1uZXctcmVjcHQgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbi5hZGQtbmV3LXJlY3B0IGlvbi1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xufVxuXG4uYWRkLW5ldy1yZWNwdCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xufVxuXG4uZXhwb3J0LXJlY3B0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY3MTY3IDAlLCAjZmY1MTU2IDEwMCUpO1xufVxuXG4uZXhwb3J0LXJlY3B0IHAge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udXBsb2FkLXJlY3B0IHAge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udXBsb2FkLXJlY3B0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjM2Y5YzM1IDAlLCAjM2Y5YzM1IDEwMCUpO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuXG4udG9wLWhlYWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWxlY3QtcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG5pb24tc2VsZWN0LnNvcnQtdGV4dCB7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzYyNjY2QjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmRlbGV0ZS1idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5yb3dzcyB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/trip/triphistory/triphistory.page.ts":
/*!******************************************************!*\
  !*** ./src/app/trip/triphistory/triphistory.page.ts ***!
  \******************************************************/
/*! exports provided: TriphistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriphistoryPage", function() { return TriphistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_sqlite_db_copy_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/sqlite-db-copy/ngx */ "./node_modules/@ionic-native/sqlite-db-copy/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var src_app_helper_unitHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_helper/unitHelper */ "./src/app/_helper/unitHelper.ts");
/* harmony import */ var src_app_helper_date_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_helper/date-format */ "./src/app/_helper/date-format.ts");
/* harmony import */ var src_app_service_setting_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/setting.service */ "./src/app/service/setting.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var src_app_service_back_stack_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/service/back-stack.service */ "./src/app/service/back-stack.service.ts");

















var TriphistoryPage = /** @class */ (function () {
    function TriphistoryPage(navCtrl, storageService, menuCtrl, router, events, loadingController, socialSharing, settingService, sqliteDbCopy, file, webview, platform, toastCtrl, alertController, backStack, zone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.events = events;
        this.loadingController = loadingController;
        this.socialSharing = socialSharing;
        this.settingService = settingService;
        this.sqliteDbCopy = sqliteDbCopy;
        this.file = file;
        this.webview = webview;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.backStack = backStack;
        this.zone = zone;
        this.buisnesslist = [];
        this.selectedTrips = [];
        this.personallist = [];
        this.userid = '';
        this.items = [];
        this.name = '';
        this.date = '';
        this.userData = '';
        this.showfiler = false;
        this.isLoading = false;
        this.segmentFilter = 'buisness';
        this.unit = 'km';
        this.unitHelper = new src_app_helper_unitHelper__WEBPACK_IMPORTED_MODULE_9__["UnitHelper"]();
        this.dateFormat = new src_app_helper_date_format__WEBPACK_IMPORTED_MODULE_10__["DateFormat"]();
        this.back = this.backStack.getBackStack('triphistory');
        this.menuCtrl.enable(false);
        this.events.subscribe('trip:updated', function (id) {
            _this.buisnesslist = [];
            _this.personallist = [];
            _this.viewtrips();
        });
        this.events.subscribe('user:created', function (time) {
            _this.userid = _this.settingService.getUserId();
        });
        // init in Constructor
        this.zip = new JSZip();
    }
    TriphistoryPage.prototype.copyDB = function () {
        this.sqliteDbCopy.copyDbToStorage('ionicdb.db', 0, this.file.documentsDirectory + 'RSMTRIP/', true)
            .then(function (res) {
            console.log('db backup created');
        })
            .catch(function (error) { return console.error(error); });
    };
    TriphistoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.userid = this.settingService.getUserId();
        this.viewtrips();
        if (this.platform.is('ios')) {
            this.copyDB();
        }
        if (this.platform.is("android")) {
            this.platform.ready().then(function () {
                _this.platform.backButton.subscribeWithPriority(9999, function () {
                    console.log("Back press handler!");
                });
            });
        }
    };
    TriphistoryPage.prototype.segmentChanged = function (ev) {
        console.log('Segment changed', ev);
    };
    TriphistoryPage.prototype.goTo = function (url) {
        this.navCtrl.navigateRoot('/' + url);
    };
    TriphistoryPage.prototype.details = function (data) {
        localStorage.setItem('backstatus', '0');
        localStorage.setItem('tripdata', JSON.stringify(data));
        this.navCtrl.navigateForward('/viewtrip');
    };
    TriphistoryPage.prototype.viewtrips = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.storageService.getbyid('usersettings', this.userid)
                            .then(function (res) {
                            if (res.rows.length > 0) {
                                _this.unit = res.rows.item(0).unit;
                            }
                            else {
                                _this.unit = 'km';
                            }
                        });
                        this.personallist = [];
                        this.buisnesslist = [];
                        return [4 /*yield*/, this.storageService
                                .viewTrip(this.userid)
                                .then(function (res) {
                                if (res.rows.length > 0) {
                                    for (var i = 0; i < res.rows.length; i++) {
                                        var finalDistance = void 0;
                                        if (_this.unit === 'km') {
                                            finalDistance = res.rows.item(i).distance;
                                        }
                                        else {
                                            finalDistance = _this.unitHelper.kmTomiles(res.rows.item(i).distance);
                                        }
                                        var viewStartImage = _this.webview.convertFileSrc(_this.file.dataDirectory + res.rows.item(i).photoStart);
                                        var viewEndImage = _this.webview.convertFileSrc(_this.file.dataDirectory + res.rows.item(i).photoEnd);
                                        if (res.rows.item(i).vehicleType == 'business') {
                                            _this.buisnesslist.push({
                                                id: res.rows.item(i).id,
                                                distance: finalDistance,
                                                unit: _this.unit,
                                                origin: res.rows.item(i).origin,
                                                destination: res.rows.item(i).destination,
                                                vehicleType: res.rows.item(i).vehicleType,
                                                vehicleName: res.rows.item(i).vehicleName,
                                                startdate: res.rows.item(i).startdate,
                                                enddate: res.rows.item(i).enddate,
                                                starttime: res.rows.item(i).starttime,
                                                endtime: res.rows.item(i).endtime,
                                                userid: res.rows.item(i).userid,
                                                notes: res.rows.item(i).notes,
                                                photoStart: res.rows.item(i).photoStart,
                                                photoEnd: res.rows.item(i).photoEnd,
                                                viewStartImage: viewStartImage,
                                                viewEndImage: viewEndImage,
                                            });
                                        }
                                        else {
                                            _this.personallist.push({
                                                id: res.rows.item(i).id,
                                                distance: finalDistance,
                                                unit: _this.unit,
                                                origin: res.rows.item(i).origin,
                                                destination: res.rows.item(i).destination,
                                                vehicleType: res.rows.item(i).vehicleType,
                                                vehicleName: res.rows.item(i).vehicleName,
                                                startdate: res.rows.item(i).startdate,
                                                enddate: res.rows.item(i).enddate,
                                                starttime: res.rows.item(i).starttime,
                                                endtime: res.rows.item(i).endtime,
                                                userid: res.rows.item(i).userid,
                                                notes: res.rows.item(i).notes,
                                                photoStart: res.rows.item(i).photoStart,
                                                photoEnd: res.rows.item(i).photoEnd,
                                                viewStartImage: viewStartImage,
                                                viewEndImage: viewEndImage
                                            });
                                        }
                                    }
                                    // get base64 data
                                    if (_this.platform.is('ios')) {
                                        _this.prepareAllImages();
                                    }
                                }
                                else {
                                    _this.personallist = [];
                                    _this.buisnesslist = [];
                                }
                            })
                                .catch(function (e) {
                                _this.personallist = [];
                                _this.buisnesslist = [];
                                console.log(e);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // process Image for export data
    TriphistoryPage.prototype.prepareAllImages = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var context;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        context = this;
                        return [4 /*yield*/, lodash__WEBPACK_IMPORTED_MODULE_12__["map"](this.personallist, function (img, index) {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        console.log('init processing ...', context.file.dataDirectory + img.photoStart);
                                        if (img.photoStart) {
                                            context.getFileContent(context.personallist.length, context.file.dataDirectory + img.photoStart, 'dataURL', function (base64Image) {
                                                console.log('init image processed');
                                                // context.isImageProcessed = true;
                                                context.personallist[index].imageDataStart = base64Image.split(',')[1];
                                            });
                                        }
                                        if (img.photoEnd) {
                                            context.getFileContent(context.personallist.length, context.file.dataDirectory + img.photoEnd, 'dataURL', function (base64Image) {
                                                console.log('init image processed');
                                                // context.isImageProcessed = true;
                                                context.personallist[index].imageDataEnd = base64Image.split(',')[1];
                                            });
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, lodash__WEBPACK_IMPORTED_MODULE_12__["map"](this.buisnesslist, function (img, index) {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        console.log('init processing ...', context.file.dataDirectory + img.photoStart);
                                        if (img.photoStart) {
                                            context.getFileContent(context.buisnesslist.length, context.file.dataDirectory + img.photoStart, 'dataURL', function (base64Image) {
                                                console.log('init image processed');
                                                // context.isImageProcessed = true;
                                                context.buisnesslist[index].imageDataStart = base64Image.split(',')[1];
                                            });
                                        }
                                        if (img.photoEnd) {
                                            context.getFileContent(context.buisnesslist.length, context.file.dataDirectory + img.photoEnd, 'dataURL', function (base64Image) {
                                                console.log('init image processed');
                                                // context.isImageProcessed = true;
                                                context.buisnesslist[index].imageDataEnd = base64Image.split(',')[1];
                                            });
                                        }
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // process Image for export data
    TriphistoryPage.prototype.prepareImgData = function (callback) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var imgData, context, cnt, tripList, companyResp;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        imgData = [];
                        context = this;
                        cnt = 0;
                        tripList = this.personallist.concat(this.buisnesslist);
                        return [4 /*yield*/, Promise.all(tripList.map(function (img) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    // if (!img.imageDataStart && !img.photoStart) {
                                    //   context.getFileContent(tripList.length, context.file.dataDirectory + img.photoStart, 'dataURL', function (base64Image) {
                                    //     cnt++;
                                    //     // console.log('image processed');
                                    //     imgData.push({ name: img.photoStart, data: base64Image.split(',')[1] });
                                    //     if(!img.imageDataEnd && img.photoEnd) {
                                    //       context.getFileContent(tripList.length, context.file.dataDirectory + img.photoEnd, 'dataURL', function (base64ImageEnd) {
                                    //         imgData.push({ name: img.photoEnd, data: base64ImageEnd.split(',')[1] });
                                    //       })
                                    //     }
                                    //     if (tripList.length == cnt) {
                                    //       context.getFileContent(tripList.length, context.file.documentsDirectory + 'RSM/ionicdb.db', 'dataURL', function (dbData) {
                                    //         // console.log('db result');
                                    //         // console.log(dbData);
                                    //         imgData.push({ name: 'ionicdb.db', data: dbData.split(',')[1] });
                                    //         callback(imgData);
                                    //       });
                                    //     }
                                    //   });
                                    // } else {
                                    cnt++;
                                    console.log('base64 found');
                                    imgData.push({ name: img.photoStart, data: img.imageDataStart });
                                    imgData.push({ name: img.photoEnd, data: img.imageDataEnd });
                                    if (tripList.length == cnt) {
                                        context.getFileContent(tripList.length, context.file.documentsDirectory + 'RSMTRIP/ionicdb.db', 'dataURL', function (dbData) {
                                            // console.log('db result');
                                            // console.log(dbData);
                                            imgData.push({ name: 'ionicdb.db', data: dbData.split(',')[1] });
                                            callback(imgData);
                                        });
                                    }
                                    return [2 /*return*/];
                                });
                            }); }))];
                    case 1:
                        companyResp = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TriphistoryPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dismissLoadingNew();
                        return [4 /*yield*/, this.toastCtrl.create({
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
    TriphistoryPage.prototype.convertToCSV = function (datalist) {
        var arr = [];
        // if (this.segmentFilter === 'personal') {
        //   arr = this.personallist;
        // } else {
        //   arr = this.buisnesslist;
        // }
        arr = datalist;
        var array = typeof arr != 'object' ? arr : arr;
        // add header
        var header = {
            id: 'Id', distance: 'Distance', unit: 'Unit', origin: 'Origin', destination: 'Destination', vehicleType: 'Trip Category',
            vehicleName: 'Vehicle Name', startdate: 'Start Date', enddate: 'End Date', starttime: 'Start Time',
            endtime: 'End Time', userid: 'User Id', notes: 'Notes', photoStart: 'Start trip photo', photoEnd: 'End trip photo'
        };
        var line = '';
        for (var index in header) {
            if (line != '') {
                line += ',';
            }
            line += header[index];
        }
        var str = line + '\r\n';
        // add rows
        for (var i = 0; i < array.length; i++) {
            var line_1 = '';
            for (var index in array[i]) {
                if (line_1 != '') {
                    line_1 += ',';
                }
                var value = array[i][index];
                try {
                    if (index == 'startdate' || index == 'enddate') {
                        value = this.dateFormat.dateFormatter(value, 'date');
                    }
                    if (index == 'starttime' || index == 'endtime') {
                        value = this.dateFormat.dateFormatter(value, 'time');
                    }
                }
                catch (e) {
                    value = array[i][index];
                }
                if (value != null) {
                    value = value.toString().replace(/,/g, '-');
                }
                else {
                    value = '';
                }
                if (['viewStartImage', 'viewEndImage', 'imageDataStart', 'imageDataEnd'].indexOf(index) > -1) {
                    value = '';
                }
                line_1 += value;
            }
            str += line_1 + '\r\n';
        }
        return str;
    };
    TriphistoryPage.prototype.checklogin = function (pageurl, func) {
        this.userData = this.settingService.getUserData();
        if (this.userData != undefined && this.userData) {
            if (this.platform.is('ios')) {
                this.exportShare();
            }
            else {
                if (this.personallist.length > 0) {
                    this.exportAndroidPersonalCSV();
                }
                else if (this.buisnesslist.length > 0) {
                    this.exportAndroidBusinessCSV();
                }
                else {
                    this.presentToast("No trip found");
                }
            }
        }
        else {
            this.router.navigate(['/login'], {
                queryParams: { data: pageurl }
            });
        }
    };
    TriphistoryPage.prototype.filerdata = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.personallist = [];
                        this.buisnesslist = [];
                        return [4 /*yield*/, this.viewtrips()];
                    case 1:
                        _a.sent();
                        if (this.segmentFilter == 'personal') {
                            if (this.date != '') {
                                this.personallist = this.personallist.filter(function (list) {
                                    _this.showfiler = false;
                                    return moment__WEBPACK_IMPORTED_MODULE_14__(list.startdate).format('DD/MM/yy') == moment__WEBPACK_IMPORTED_MODULE_14__(_this.date).format('DD/MM/yy') || moment__WEBPACK_IMPORTED_MODULE_14__(list.enddate).format('DD/MM/yy') == moment__WEBPACK_IMPORTED_MODULE_14__(_this.date).format('DD/MM/yy');
                                });
                            }
                        }
                        else {
                            if (this.date != '') {
                                this.buisnesslist = this.buisnesslist.filter(function (list) {
                                    _this.showfiler = false;
                                    return moment__WEBPACK_IMPORTED_MODULE_14__(list.startdate).format('DD/MM/yy') == moment__WEBPACK_IMPORTED_MODULE_14__(_this.date).format('DD/MM/yy') || moment__WEBPACK_IMPORTED_MODULE_14__(list.enddate).format('DD/MM/yy') == moment__WEBPACK_IMPORTED_MODULE_14__(_this.date).format('DD/MM/yy');
                                });
                            }
                        }
                        this.showfiler = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    TriphistoryPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Processing...',
                            duration: 2000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // custom loader show
    TriphistoryPage.prototype.presentLoadingNew = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this.loadingController
                                .create({})
                                .then(function (a) {
                                a.present().then(function () {
                                    // console.log('presented');
                                    if (!_this.isLoading) {
                                        a.dismiss().then(function () { return console.log('abort presenting'); });
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // custom loader hide
    TriphistoryPage.prototype.dismissLoadingNew = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = false;
                        return [4 /*yield*/, this.loadingController
                                .dismiss()
                                .then(function () { return console.log('dismissed'); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TriphistoryPage.prototype.cancel = function () {
        this.name = '';
        this.date = '';
        this.showfiler = false;
        this.viewtrips();
    };
    // Android Export
    TriphistoryPage.prototype.exportAndroidPersonalCSV = function () {
        var _this = this;
        console.log("exportAndroidPersonalCSV");
        this.presentLoading();
        var csv = this.convertToCSV(this.personallist);
        this.file.createFile(this.file.externalDataDirectory + "RSMTRIP/", "triphistory-personal.csv", true)
            .then(function (success) {
            _this.file.writeFile(_this.file.externalDataDirectory + "RSMTRIP/", "triphistory-personal.csv", csv, { replace: true })
                .then(function (success) {
                console.log("writeFile success", success);
                if (_this.buisnesslist.length > 0) {
                    _this.exportAndroidBusinessCSV();
                }
                else {
                    _this.backupdbAndroid();
                }
            }, function (error) {
                console.log("writeFile error", error);
                console.log(error);
            });
        }, function (error) {
            console.log("createFile error");
            console.log(JSON.stringify(error));
        });
    };
    TriphistoryPage.prototype.exportAndroidBusinessCSV = function () {
        var _this = this;
        console.log("exportAndroidBusinessCSV");
        this.presentLoading();
        var csv = this.convertToCSV(this.buisnesslist);
        this.file.createFile(this.file.externalDataDirectory + "RSMTRIP/", "triphistory-business.csv", true)
            .then(function (success) {
            _this.file.writeFile(_this.file.externalDataDirectory + "RSMTRIP/", "triphistory-business.csv", csv, { replace: true })
                .then(function (success) {
                _this.backupdbAndroid();
            }, function (error) {
                console.log("writeFile error", error);
            });
        }, function (error) {
            console.log("createFile error", error);
        });
    };
    TriphistoryPage.prototype.backupdbAndroid = function () {
        var _this = this;
        console.log("backupdbAndroid");
        this.sqliteDbCopy.copyDbToStorage("ionicdb.db", 1, this.file.externalDataDirectory + "RSMTRIP/", true)
            .then(function (res) {
            _this.createZipAndroid();
        })
            .catch(function (error) { return console.error(error); });
    };
    TriphistoryPage.prototype.createZipAndroid = function () {
        var _this = this;
        console.log("createZipAndroid");
        var context = this;
        this.file.checkFile(this.file.externalDataDirectory, "RSMTRIP.zip").then(function (success) {
            _this.file.removeFile(_this.file.externalDataDirectory, "RSMTRIP.zip").then(function (success) {
                var PathToFileInString = _this.file.externalDataDirectory + "RSMTRIP", PathToResultZip = _this.file.externalDataDirectory;
                console.log("PathToFileInString");
                JJzip.zip(PathToFileInString, { target: PathToResultZip, name: "RSMTRIP" }, function (data) {
                    context.uploadAndroid(PathToResultZip);
                }, function (error) {
                    context.presentToast(error.message);
                    console.log("error", error);
                });
            }, function (error) {
                console.log("error", error);
            });
        }, function (error) {
            var PathToFileInString = _this.file.externalDataDirectory + "RSMTRIP", PathToResultZip = _this.file.externalDataDirectory;
            JJzip.zip(PathToFileInString, { target: PathToResultZip, name: "RSMTRIP" }, function (data) {
                context.uploadAndroid(PathToResultZip);
            }, function (error) {
                console.log("err", error);
            });
        });
    };
    TriphistoryPage.prototype.uploadAndroid = function (data) {
        var context = this;
        this.file.checkFile(this.file.externalDataDirectory, 'RSMTRIP.zip').then(function (success) {
            var filePath = context.file.externalDataDirectory + 'RSMTRIP.zip';
            window.resolveLocalFileSystemURL(filePath, function gotFile(fileEntry) {
                fileEntry.file(function (file) {
                    var reader = new FileReader();
                    reader.onloadend = function (e) {
                        var content = this.result;
                        context.socialSharing.share('', "Trip details", content).then(function (res) {
                        }).catch(function (e) {
                            console.log("error", e);
                        });
                    };
                    reader.readAsDataURL(file);
                });
            }, function fail(e) {
                console.log("FileSystem Error", e);
            });
        });
    };
    // IOS Export
    // Create directory : TODO - common for crossplatform
    TriphistoryPage.prototype.createDirIOSNew = function () {
        var _this = this;
        this.file.checkDir(this.file.documentsDirectory, 'RSMTRIP').then(function (success) {
            console.log('directory already created');
        }, function (error) {
            _this.file.createDir(_this.file.documentsDirectory, 'RSMTRIP', true).then(function (success) {
                console.log('directory created');
            }, function (err) {
                console.log('createDir error', JSON.stringify(err));
            });
        });
    };
    // ZONE.js unpatch file
    TriphistoryPage.prototype.noZonePatch = function (status, cb) {
        // console.log('noZonePatch', status);
        if (status === 1 && localStorage.getItem('init') === 'true') {
            try {
                window.FileReader = window.FileReader.__zone_symbol__OriginalDelegate;
                cb();
            }
            catch (err) {
                console.log('noZonePatch error if');
                window.FileReader = FileReader;
                cb();
            }
            finally {
                window.FileReader = FileReader;
                cb();
            }
        }
        else {
            try {
                window.FileReader = FileReader;
                cb();
            }
            catch (e) {
                console.log('noZonePatch error else');
                var unpatched = window.FileReader.__zone_symbol__OriginalDelegate;
                window.FileReader = unpatched;
                cb();
            }
            finally {
                window.FileReader = FileReader;
                cb();
            }
        }
    };
    // get file Data
    TriphistoryPage.prototype.getFileContent = function (status, path, mode, callback) {
        if (mode === void 0) { mode = 'dataURL'; }
        var context = this;
        window.resolveLocalFileSystemURL(path, gotFile, fail);
        function fail(e) {
            console.log('FileSystem Error');
            console.log(e);
        }
        function gotFile(fileEntry) {
            fileEntry.file(function (file) {
                context.noZonePatch(status, function () {
                    var reader = new FileReader();
                    reader.onerror = function (evt) {
                        context.zone.run(function () { return console.log('Error', evt); });
                    };
                    reader.onprogress = function (evt) {
                        context.zone.run(function () {
                            if (evt.lengthComputable) {
                                var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
                                // console.log(percentLoaded);
                            }
                        });
                    };
                    reader.onloadend = function (e) {
                        var content = this.result;
                        callback(content);
                    };
                    switch (mode) {
                        case "text":
                            reader.readAsText(file);
                            break;
                        case "arrayBuffer":
                            reader.readAsArrayBuffer(file);
                            break;
                        case "binaryString":
                            reader.readAsBinaryString(file);
                            break;
                        case "dataURL":
                            reader.readAsDataURL(file);
                            break;
                    }
                });
            });
        }
    };
    // Export for iOS : TODO - make common for cross platform
    TriphistoryPage.prototype.exportShare = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var callFun, context, csv_1, pcsv_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                callFun = true;
                console.log('exportShare called...');
                context = this;
                try {
                    this.presentLoadingNew();
                    this.createDirIOSNew();
                    this.copyDB();
                    csv_1 = this.convertToCSV(this.buisnesslist);
                    pcsv_1 = this.convertToCSV(this.personallist);
                    // get BASE64 data of images
                    this.prepareImgData(function (imageData) {
                        // 1. CSV data buisness
                        context.zip.file("triphistorybusiness.csv", csv_1);
                        // 2. CSV data personal
                        context.zip.file("triphistorypersonal.csv", pcsv_1);
                        // 3. Images/DB
                        imageData.forEach(function (img) {
                            context.zip.file(img.name, img.data, { base64: true });
                        });
                        context.zip.generateAsync({
                            type: "blob",
                            compression: "DEFLATE",
                            compressionOptions: {
                                level: 1
                            },
                            streamFiles: true
                        }).then(function (content) {
                            // console.log('generateAsync');
                            if (content) {
                                if (callFun) {
                                    console.log('generateAsync');
                                    context.writeFileiOS(content);
                                    callFun = false;
                                }
                            }
                        });
                    });
                }
                catch (e) {
                    // console.log('err', e);
                    context.presentToast('Something went wrong');
                }
                return [2 /*return*/];
            });
        });
    };
    // Create Files
    TriphistoryPage.prototype.writeFileiOS = function (content) {
        var _this = this;
        var context = this;
        this.file.createFile(this.file.documentsDirectory + 'RSMTRIP/', 'RSMTRIP.zip', true).then(function (success) {
            // console.log('success', success, this.file.documentsDirectory);
            context.file.writeFile(_this.file.documentsDirectory + 'RSMTRIP/', 'RSMTRIP.zip', content, { replace: true }).then(function (success) {
                context.openZipiOS(success.nativeURL);
            }, function (error) {
                context.presentToast('Failed to export the file');
            });
        }, function (error) {
            context.presentToast('Failed to export the file');
        });
    };
    // Open sharing dialog
    TriphistoryPage.prototype.openZipiOS = function (filePath) {
        var context = this;
        // console.log(filePath);
        this.dismissLoadingNew();
        this.socialSharing.share('', 'Trip details', filePath).then(function (res) {
            console.log(res);
        }).catch(function (e) {
            // console.log('err', e);
            context.presentToast('Failed to export the file');
        });
    };
    TriphistoryPage.prototype.selectTrip = function (event, item) {
        if (event.target.checked) {
            this.selectedTrips.push(item);
        }
        else {
            Object(lodash__WEBPACK_IMPORTED_MODULE_12__["remove"])(this.selectedTrips, { id: item.id });
        }
    };
    TriphistoryPage.prototype.deleteReceipt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1, alert_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.selectedTrips.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Confirm!',
                                message: 'Are you sure you want to delete this trips?',
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
                                            for (var _i = 0, _a = _this.selectedTrips; _i < _a.length; _i++) {
                                                var trip = _a[_i];
                                                console.log(trip);
                                                _this.storageService.removeTrip(trip.id).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var toast;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                console.log('deleted successfully');
                                                                console.log(res);
                                                                return [4 /*yield*/, this.toastCtrl.create({
                                                                        message: 'Trip deleted successfully',
                                                                        duration: 2000,
                                                                        mode: 'md',
                                                                        cssClass: 'customToast'
                                                                    })];
                                                            case 1:
                                                                toast = _a.sent();
                                                                toast.present();
                                                                this.viewtrips();
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); });
                                            }
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert!',
                            message: 'Please select atleast one trip',
                            buttons: [
                                {
                                    text: 'Okay',
                                    role: 'cancel',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }
                            ]
                        })];
                    case 4:
                        alert_2 = _a.sent();
                        return [4 /*yield*/, alert_2.present()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    TriphistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-triphistory',
            template: __webpack_require__(/*! ./triphistory.page.html */ "./src/app/trip/triphistory/triphistory.page.html"),
            styles: [__webpack_require__(/*! ./triphistory.page.scss */ "./src/app/trip/triphistory/triphistory.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_13__["PageTrack"])("Trip History Screen"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"],
            src_app_service_setting_service__WEBPACK_IMPORTED_MODULE_11__["SettingService"],
            _ionic_native_sqlite_db_copy_ngx__WEBPACK_IMPORTED_MODULE_7__["SqliteDbCopy"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_app_service_back_stack_service__WEBPACK_IMPORTED_MODULE_15__["BackStackService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], TriphistoryPage);
    return TriphistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=trip-triphistory-triphistory-module.js.map