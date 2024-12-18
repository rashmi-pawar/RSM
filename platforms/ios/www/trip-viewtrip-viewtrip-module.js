(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trip-viewtrip-viewtrip-module"],{

/***/ "./src/app/trip/viewtrip/viewtrip.module.ts":
/*!**************************************************!*\
  !*** ./src/app/trip/viewtrip/viewtrip.module.ts ***!
  \**************************************************/
/*! exports provided: ViewtripPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewtripPageModule", function() { return ViewtripPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viewtrip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewtrip.page */ "./src/app/trip/viewtrip/viewtrip.page.ts");







var routes = [
    {
        path: '',
        component: _viewtrip_page__WEBPACK_IMPORTED_MODULE_6__["ViewtripPage"]
    }
];
var ViewtripPageModule = /** @class */ (function () {
    function ViewtripPageModule() {
    }
    ViewtripPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_viewtrip_page__WEBPACK_IMPORTED_MODULE_6__["ViewtripPage"]]
        })
    ], ViewtripPageModule);
    return ViewtripPageModule;
}());



/***/ }),

/***/ "./src/app/trip/viewtrip/viewtrip.page.html":
/*!**************************************************!*\
  !*** ./src/app/trip/viewtrip/viewtrip.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>View Trip</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"view-trip-detail\" padding>\n    <div class=\"full ion-padding-vertical\">\n      <div class=\"time-dist\">\n        <ion-row>\n          <ion-col size=\"6\" no-padding class=\"border-rite\">\n            <p><span>Time:</span>&nbsp;{{totalTime}}</p>\n          </ion-col>\n          <ion-col size=\"6\" no-padding>\n            <p><span>Distance:</span>&nbsp;{{data.distance}} {{data.unit}}</p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <ion-item lines=\"none\">\n        <div class=\"trip-detail\">\n          <ion-row class=\"start-date\">\n            <ion-col size=\"2\" no-padding>\n              <img class=\"location-icon\" src=\"assets/icon/locate.png\">\n            </ion-col>\n            <ion-col size=\"10\" no-padding>\n              <p>{{data.origin}}</p>\n              <ion-row class=\"date-time\">\n                <ion-col size=\"6\" no-padding>\n                  <ion-label position=\"stacked\">Start Date</ion-label>\n                  <p>{{data.startdate| date: 'dd/MM/yyyy'}}</p>\n                </ion-col>\n                <ion-col size=\"6\" no-padding>\n                  <ion-label position=\"stacked\">Start Time</ion-label>\n                  <p> {{data.starttime| date: 'HH:mm'}}</p>\n                </ion-col>\n              </ion-row>\n              <img *ngIf=\"data.photoStart\" [src]=\"getImgContent(data.viewStartImage)\">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"2\" no-padding>\n              <img class=\"location-icon\" src=\"assets/icon/locate.png\">\n            </ion-col>\n            <ion-col size=\"10\" no-padding>\n              <p>{{data.destination}}</p>\n\n              <ion-row class=\"date-time\">\n                <ion-col size=\"6\" no-padding>\n                  <ion-label>End Date</ion-label>\n                  <p> {{data.enddate| date: 'dd/MM/yyyy'}}</p>\n                </ion-col>\n                <ion-col size=\"6\" no-padding>\n                  <ion-label>End Time</ion-label>\n                  <p>{{data.endtime| date: 'HH:mm'}}</p>\n                </ion-col>\n              </ion-row>\n              <img *ngIf=\"data.photoEnd\" [src]=\"getImgContent(data.viewEndImage)\">\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-item>\n      <div class=\"trip-type ion-padding-horizontal\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label>Vehicle Name</ion-label>\n            <p>{{vehicle}}</p>\n          </ion-col>\n          \n          <ion-col size=\"12\">\n            <ion-label>Trip Category</ion-label>\n            <p>{{data.vehicleType | titlecase}}</p>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-label>Trip details</ion-label>\n            <p>{{data.notes}}</p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <!-- <div class=\"trip-typ-detail ion-padding-horizontal\">\n        <ion-label>\n          Trip details\n        </ion-label>\n        <p>{{data.notes}}</p>\n      </div> -->\n    </div>\n  </div>\n  <div class=\"trip-btn\" padding>\n    <button type=\"button\" class=\"edit-btn\" (click)=\"screenShot()\">Share</button>&nbsp;&nbsp;\n    <button type=\"button\" class=\"fav-btn\" (click)=\"deleteTrip(data.id)\">Delete</button>\n    <button type=\"button\" class=\"edit-btn\" (click)=\"edit(data)\">Edit trip</button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/trip/viewtrip/viewtrip.page.scss":
/*!**************************************************!*\
  !*** ./src/app/trip/viewtrip/viewtrip.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".time-dist {\n  background: #F2F2F2;\n  text-align: center;\n}\n\n.time-dist p {\n  font-size: 14px;\n  color: #62666B;\n  margin: 10px 0px;\n}\n\n.full {\n  box-shadow: 0px 1px 7px 3px #e2e2e2;\n}\n\n.time-dist span {\n  font-size: 12px;\n  color: #606470 !important;\n  margin-right: 5px;\n}\n\n.border-rite p {\n  border-right: 1px solid rgba(135, 140, 142, 0.39);\n}\n\n.trip-detail p {\n  font-size: 14px;\n  color: #62666B;\n  line-height: 20px;\n  margin-top: 0px;\n  margin-bottom: 5px;\n}\n\n.trip-detail {\n  margin: 30px 0px 20px;\n  width: 100%;\n  border-bottom: 1px solid #d8d8d8;\n  padding-bottom: 10px;\n}\n\n.trip-detail .location-icon {\n  width: 20px;\n  margin-left: 10px;\n}\n\nion-label {\n  color: #606470 !important;\n  font-size: 12px !important;\n}\n\n.date-time ion-datetime {\n  color: #323643;\n  font-size: 16px;\n  padding-left: 0px;\n}\n\n.start-date {\n  margin-bottom: 20px;\n}\n\n.trip-type ion-select {\n  padding-left: 0px;\n  font-size: 14px;\n}\n\n.trip-typ-detail p {\n  font-size: 10px;\n  color: #2F2F2F;\n  margin-top: 5px;\n}\n\n.trip-typ-detail.ion-padding-horizontal {\n  margin: 10px 0px 20px;\n}\n\nbutton.fav-btn {\n  background: transparent;\n  color: #62666B;\n  padding: 13px 20px;\n  border-radius: 5px;\n  margin-right: 10px;\n  font-size: 15px;\n  border: 1px solid #62666B;\n}\n\n.trip-btn {\n  float: right;\n  margin: 20px 0px;\n}\n\nbutton.edit-btn {\n  background: #009CDE;\n  color: #fff;\n  padding: 15px 15px;\n  border-radius: 5px;\n  font-size: 15px;\n}\n\n.fav-btn ion-icon {\n  vertical-align: bottom;\n  padding-right: 5px;\n}\n\n.more-opt {\n  position: fixed;\n  width: 100%;\n  z-index: 99;\n  height: 100%;\n  padding: 45px 20px;\n  top: 0px;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.more-opt-detail {\n  background: #fff;\n  width: 47%;\n  float: right;\n  border-radius: 5px;\n}\n\n.more-opt-detail ul {\n  padding-left: 0px;\n  margin: 0;\n}\n\n.more-opt-detail ul li {\n  list-style: none;\n  line-height: 30px;\n  font-size: 18px;\n  color: #62666B;\n}\n\n.end-trip {\n  position: fixed;\n  width: 100%;\n  z-index: 99;\n  height: 100%;\n  padding: 45px 20px;\n  top: 0px;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.end-trip-detail {\n  background: #fff;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.end-trip-detail img {\n  width: 190px;\n  margin: 25px 0px;\n}\n\n.end-trip-detail h5 {\n  color: #4A4A4A;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 0px;\n}\n\n.end-trip-detail p {\n  font-size: 18px;\n  color: #4A4A4A;\n  margin-bottom: 30px;\n}\n\n.date-time p {\n  font-size: 16px !important;\n  color: #323643 !important;\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3RyaXAvdmlld3RyaXAvdmlld3RyaXAucGFnZS5zY3NzIiwic3JjL2FwcC90cmlwL3ZpZXd0cmlwL3ZpZXd0cmlwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUVJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURFQTtFQUNJLG1DQUFBO0FDQ0o7O0FEQ0E7RUFFSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBRUksaURBQUE7QUNDSjs7QURDQTtFQUVJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUVJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURDQTtFQUVJLFdBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBRUkseUJBQUE7RUFDQSwwQkFBQTtBQ0NKOztBRENBO0VBRUksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBRUksbUJBQUE7QUNDSjs7QURJQTtFQUVJLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDREo7O0FER0E7RUFDSSxxQkFBQTtBQ0FKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEQ0E7RUFFSSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEREE7RUFFSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLDhCQUFBO0FDR0o7O0FEREE7RUFFSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLGlCQUFBO0VBQ0EsU0FBQTtBQ0lKOztBREZBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDS0o7O0FESEE7RUFFSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLDhCQUFBO0FDS0o7O0FESEE7RUFFSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNLSjs7QURIQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ01KOztBREpBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDUUo7O0FETkE7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNTSiIsImZpbGUiOiJzcmMvYXBwL3RyaXAvdmlld3RyaXAvdmlld3RyaXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbWUtZGlzdFxue1xuICAgIGJhY2tncm91bmQ6ICNGMkYyRjI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRpbWUtZGlzdCBwXG57XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNjI2NjZCO1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG59XG4uZnVsbHtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAzcHggI2UyZTJlMjtcbn1cbi50aW1lLWRpc3Qgc3Bhblxue1xuICAgIGZvbnQtc2l6ZToxMnB4IDtcbiAgICBjb2xvcjojNjA2NDcwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uYm9yZGVyLXJpdGUgcFxue1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTM1LDE0MCwxNDIsMC4zOSk7XG59XG4udHJpcC1kZXRhaWwgcFxue1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzYyNjY2QjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnRyaXAtZGV0YWlsXG57XG4gICAgbWFyZ2luOiAzMHB4IDBweCAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnRyaXAtZGV0YWlsIC5sb2NhdGlvbi1pY29uXG57XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5pb24tbGFiZWxcbntcbiAgICBjb2xvcjogIzYwNjQ3MCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuLmRhdGUtdGltZSBpb24tZGF0ZXRpbWVcbntcbiAgICBjb2xvcjogIzMyMzY0MztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4uc3RhcnQtZGF0ZVxue1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4vLyAudHJpcC10eXBlIHtcbi8vICAgICBwYWRkaW5nLXRvcDogMjBweDtcbi8vIH1cbi50cmlwLXR5cGUgaW9uLXNlbGVjdFxue1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50cmlwLXR5cC1kZXRhaWwgcCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjMkYyRjJGO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbi50cmlwLXR5cC1kZXRhaWwuaW9uLXBhZGRpbmctaG9yaXpvbnRhbCB7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAyMHB4O1xufVxuYnV0dG9uLmZhdi1idG4ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjNjI2NjZCO1xuICAgIHBhZGRpbmc6IDEzcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjI2NjZCO1xufVxuLnRyaXAtYnRuXG57XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG59XG5idXR0b24uZWRpdC1idG4ge1xuICAgIGJhY2tncm91bmQ6ICMwMDlDREU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTVweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uZmF2LWJ0biBpb24taWNvbiB7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4ubW9yZS1vcHRcbntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogOTk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6NDVweCAyMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNSk7XG59XG4ubW9yZS1vcHQtZGV0YWlsXG57XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogNDclO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubW9yZS1vcHQtZGV0YWlsIHVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBtYXJnaW46IDA7XG59XG4ubW9yZS1vcHQtZGV0YWlsIHVsIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzYyNjY2Qjtcbn1cbi5lbmQtdHJpcFxue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzo0NXB4IDIwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC41KTtcbn1cbi5lbmQtdHJpcC1kZXRhaWxcbntcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uZW5kLXRyaXAtZGV0YWlsIGltZyB7XG4gICAgd2lkdGg6IDE5MHB4O1xuICAgIG1hcmdpbjogMjVweCAwcHg7XG59XG4uZW5kLXRyaXAtZGV0YWlsIGg1IHtcbiAgICBjb2xvcjogIzRBNEE0QTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uZW5kLXRyaXAtZGV0YWlsIHAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzRBNEE0QTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmRhdGUtdGltZSBwIHtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzMyMzY0MyAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG59XG4iLCIudGltZS1kaXN0IHtcbiAgYmFja2dyb3VuZDogI0YyRjJGMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGltZS1kaXN0IHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjI2NjZCO1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4uZnVsbCB7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDNweCAjZTJlMmUyO1xufVxuXG4udGltZS1kaXN0IHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjA2NDcwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uYm9yZGVyLXJpdGUgcCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTM1LCAxNDAsIDE0MiwgMC4zOSk7XG59XG5cbi50cmlwLWRldGFpbCBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzYyNjY2QjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4udHJpcC1kZXRhaWwge1xuICBtYXJnaW46IDMwcHggMHB4IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi50cmlwLWRldGFpbCAubG9jYXRpb24taWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6ICM2MDY0NzAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRlLXRpbWUgaW9uLWRhdGV0aW1lIHtcbiAgY29sb3I6ICMzMjM2NDM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5zdGFydC1kYXRlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRyaXAtdHlwZSBpb24tc2VsZWN0IHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRyaXAtdHlwLWRldGFpbCBwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzJGMkYyRjtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4udHJpcC10eXAtZGV0YWlsLmlvbi1wYWRkaW5nLWhvcml6b250YWwge1xuICBtYXJnaW46IDEwcHggMHB4IDIwcHg7XG59XG5cbmJ1dHRvbi5mYXYtYnRuIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNjI2NjZCO1xuICBwYWRkaW5nOiAxM3B4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MjY2NkI7XG59XG5cbi50cmlwLWJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cblxuYnV0dG9uLmVkaXQtYnRuIHtcbiAgYmFja2dyb3VuZDogIzAwOUNERTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5mYXYtYnRuIGlvbi1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4ubW9yZS1vcHQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA0NXB4IDIwcHg7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5tb3JlLW9wdC1kZXRhaWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogNDclO1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm1vcmUtb3B0LWRldGFpbCB1bCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5tb3JlLW9wdC1kZXRhaWwgdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzYyNjY2Qjtcbn1cblxuLmVuZC10cmlwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNDVweCAyMHB4O1xuICB0b3A6IDBweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uZW5kLXRyaXAtZGV0YWlsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5lbmQtdHJpcC1kZXRhaWwgaW1nIHtcbiAgd2lkdGg6IDE5MHB4O1xuICBtYXJnaW46IDI1cHggMHB4O1xufVxuXG4uZW5kLXRyaXAtZGV0YWlsIGg1IHtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uZW5kLXRyaXAtZGV0YWlsIHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNEE0QTRBO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uZGF0ZS10aW1lIHAge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMzMjM2NDMgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/trip/viewtrip/viewtrip.page.ts":
/*!************************************************!*\
  !*** ./src/app/trip/viewtrip/viewtrip.page.ts ***!
  \************************************************/
/*! exports provided: ViewtripPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewtripPage", function() { return ViewtripPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_helper_date_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_helper/date-format */ "./src/app/_helper/date-format.ts");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_service_setting_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/setting.service */ "./src/app/service/setting.service.ts");












var ViewtripPage = /** @class */ (function () {
    function ViewtripPage(file, events, storageService, toastCtrl, navCtrl, sanitizer, socialSharing, zone, base64, platform, settingService, loadingController, alertController, menuCtrl) {
        this.file = file;
        this.events = events;
        this.storageService = storageService;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.socialSharing = socialSharing;
        this.zone = zone;
        this.base64 = base64;
        this.platform = platform;
        this.settingService = settingService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.menuCtrl = menuCtrl;
        this.data = '';
        this.vehicle = '';
        this.isLoading = false;
        this.menuCtrl.enable(false);
        this.data = JSON.parse(localStorage.getItem('tripdata'));
        var dateformat = new src_app_helper_date_format__WEBPACK_IMPORTED_MODULE_4__["DateFormat"]();
        this.totalTime = dateformat.getTimeDiff(this.data.startdate, this.data.starttime, this.data.enddate, this.data.endtime);
        var context = this;
        this.storageService.getVehicleName(this.data.vehicleName).then(function (res) {
            if (res.rows.length > 0) {
                context.vehicle = res.rows.item(0).name;
            }
            else {
                context.vehicle = '';
            }
            context.vehicle = context.vehicle + '(' + context.data.vehicleName + ')';
        }).catch(function (error) {
            console.log(error);
        });
    }
    ViewtripPage.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    ViewtripPage.prototype.getStartImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.platform.is('ios')) return [3 /*break*/, 4];
                        if (!this.data.photoStart) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getBase64(this.data.viewStartImage)];
                    case 1:
                        _a = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = '';
                        _c.label = 3;
                    case 3: return [2 /*return*/, _a];
                    case 4:
                        if (!this.data.photoStart) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getBase64(this.file.dataDirectory + this.data.photoStart)];
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
    ViewtripPage.prototype.getEndImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.platform.is('ios')) return [3 /*break*/, 4];
                        if (!this.data.photoEnd) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getBase64(this.data.viewEndImage)];
                    case 1:
                        _a = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = '';
                        _c.label = 3;
                    case 3: return [2 /*return*/, _a];
                    case 4:
                        if (!this.data.photoEnd) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getBase64(this.file.dataDirectory + this.data.photoEnd)];
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
    ViewtripPage.prototype.screenShot = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var context, startBase64, endBase64, userData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        context = this;
                        return [4 /*yield*/, this.getStartImage()];
                    case 1:
                        startBase64 = _a.sent();
                        return [4 /*yield*/, this.getEndImage()];
                    case 2:
                        endBase64 = _a.sent();
                        userData = this.settingService.getUserData();
                        // context.dismissLoading();
                        this.socialSharing.share("\n        Hi " + (userData ? userData.first_name : '') + ",\n\n        Please find below the trip details as requested:-\n\n        Time: " + context.totalTime + "\n\n        Distance: " + (context.data.distance + context.data.unit) + "\n        \n        Origin: " + context.data.origin + "\n        \n        Start Date: " + moment__WEBPACK_IMPORTED_MODULE_10__(context.data.startdate).format('dddd DD MMM yyyy') + " " + moment__WEBPACK_IMPORTED_MODULE_10__(context.data.starttime).format('HH:mm') + "\n        \n        Destination: " + context.data.destination + "\n        \n        End Date: " + moment__WEBPACK_IMPORTED_MODULE_10__(context.data.enddate).format('dddd DD MMM yyyy') + " " + moment__WEBPACK_IMPORTED_MODULE_10__(context.data.endtime).format('HH:mm') + "\n        \n        Vehicle Name: " + (context.vehicle ? context.vehicle : '') + "\n        \n        Trip Category: " + (context.data.vehicleType ? context.data.vehicleType : '') + "\n        \n        Notes: " + (context.data.notes ? context.data.notes : '') + "\n        ", "Trip details for " + moment__WEBPACK_IMPORTED_MODULE_10__(context.data.startdate).format('DD/MM/YYYY'), (startBase64 ? [startBase64] : []).concat((endBase64 ? [endBase64] : []))).then(function (res) {
                            console.log("shareViaEmail then");
                        }).catch(function (e) {
                            console.log("shareViaEmail catch");
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewtripPage.prototype.getBase64 = function (url) {
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
    ViewtripPage.prototype.getImgContent = function (imgFile) {
        return this.sanitizer.bypassSecurityTrustUrl(imgFile);
    };
    ViewtripPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'loading',
                                duration: 3000
                            })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        loading.onDidDismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewtripPage.prototype.dismissLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('dismissed call');
                        this.isLoading = false;
                        return [4 /*yield*/, this.loadingController
                                .dismiss()
                                .then(function () { return console.log('dismissed'); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ViewtripPage.prototype.presentToast = function (msg) {
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
    ViewtripPage.prototype.deleteTrip = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Are you sure want to delete the trip?',
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
                                        console.log('Confirm Okay');
                                        _this.delete(id);
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
    ViewtripPage.prototype.delete = function (id) {
        var _this = this;
        this.storageService
            .removeTrip(id)
            .then(function (res) {
            _this.presentToast("Trip has been deleted successfully");
            _this.events.publish('trip:updated');
            _this.navCtrl.navigateRoot('/triphistory');
        })
            .catch(function (error) {
            _this.presentToast(error);
            console.log(error);
        });
    };
    ViewtripPage.prototype.edit = function (data) {
        localStorage.setItem('edittrip', JSON.stringify(data));
        this.navCtrl.navigateRoot('/logtrip');
    };
    ViewtripPage.prototype.back = function () {
        if (localStorage.getItem('backstatus') == "0") {
            this.navCtrl.navigateRoot('/triphistory');
        }
        else if (localStorage.getItem('backstatus') == "0") {
            this.navCtrl.navigateRoot('/tabs/dashboard');
        }
        else {
            this.navCtrl.navigateRoot('triplogbook');
        }
    };
    ViewtripPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewtrip',
            template: __webpack_require__(/*! ./viewtrip.page.html */ "./src/app/trip/viewtrip/viewtrip.page.html"),
            styles: [__webpack_require__(/*! ./viewtrip.page.scss */ "./src/app/trip/viewtrip/viewtrip.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_5__["PageTrack"])("View Trip Screen"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_9__["Base64"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            src_app_service_setting_service__WEBPACK_IMPORTED_MODULE_11__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], ViewtripPage);
    return ViewtripPage;
}());



/***/ })

}]);
//# sourceMappingURL=trip-viewtrip-viewtrip-module.js.map