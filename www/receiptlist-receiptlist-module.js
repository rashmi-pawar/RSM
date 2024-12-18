(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["receiptlist-receiptlist-module"],{

/***/ "./src/app/receiptlist/receiptlist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/receiptlist/receiptlist.module.ts ***!
  \***************************************************/
/*! exports provided: ReceiptlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptlistPageModule", function() { return ReceiptlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _receiptlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receiptlist.page */ "./src/app/receiptlist/receiptlist.page.ts");







var routes = [
    {
        path: '',
        component: _receiptlist_page__WEBPACK_IMPORTED_MODULE_6__["ReceiptlistPage"]
    }
];
var ReceiptlistPageModule = /** @class */ (function () {
    function ReceiptlistPageModule() {
    }
    ReceiptlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_receiptlist_page__WEBPACK_IMPORTED_MODULE_6__["ReceiptlistPage"]]
        })
    ], ReceiptlistPageModule);
    return ReceiptlistPageModule;
}());



/***/ }),

/***/ "./src/app/receiptlist/receiptlist.page.html":
/*!***************************************************!*\
  !*** ./src/app/receiptlist/receiptlist.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Receipt List</ion-title>\n    <ion-buttons slot=\"end\" class=\"delete-btn\" (click)=\"deleteReceipt()\">\n      <ion-icon name=\"md-trash\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <div class=\"expense-detail\">\n      <div class=\"expense-select grey-color\" padding>\n        <div class=\"expense-select-detail\">\n          <div>\n            <div *ngIf=\"lists.length\">\n              <ion-row *ngFor=\"let list of lists\" class=\"rowss\" >\n                <ion-col no-padding size=\"1\">\n                  <ion-checkbox color=\"primary\" style=\"margin-top: 12px;\" (ionChange)=\"selectReceipt($event, list)\"></ion-checkbox>\n                </ion-col>\n                <ion-col no-padding size=\"11\" style=\"padding-left: 10px;\">\n                  <ion-row (click)=\"details(list)\">\n                  <ion-col no-padding size=\"12\">\n                    <h4>{{list.expense_type}}</h4>\n                  </ion-col>\n                  <ion-col no-padding size=\"6\">\n                    <h5>{{list.date | date : 'dd-MMMM-yyyy'}}</h5>\n                  </ion-col>\n                  <ion-col no-padding size=\"6\">\n                    <p class=\"green-color\">{{list.amount}}</p>\n                  </ion-col>\n                  <ion-col no-padding size=\"12\">\n                    <span>{{list.description}}</span>\n                  </ion-col>\n                </ion-row>\n                </ion-col>\n              </ion-row>\n            </div>\n            <div *ngIf=\"!lists.length\" class=\"nodata\">\n              No Record Found!\n            </div>\n          </div>\n          <!-- <div *ngIf=\"status == false\">\n            <div *ngIf=\"newlist.length && status == false\">\n              <ion-row padding *ngFor=\"let listing of newlist\" class=\"rowss\" (click)=\"details(listing)\">\n                <ion-col no-padding size=\"12\">\n                  <h4>{{listing.expense_type}}</h4>\n                </ion-col>\n                <ion-col no-padding size=\"6\">\n                  <h5>{{listing.date | date : 'dd-MMMM-yyyy'}}</h5>\n                </ion-col>\n                <ion-col no-padding size=\"6\">\n                  <p class=\"green-color\">{{listing.amount}}</p>\n                </ion-col>\n                <ion-col no-padding size=\"12\">\n                  <span>{{listing.description}}</span>\n                </ion-col>\n              </ion-row>\n            </div>\n            <div *ngIf=\"!newlist.length\" class=\"nodata\">\n              No Record Found!\n            </div>\n          </div> -->\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"filter\" padding *ngIf=\"showfiler\">\n    <div class=\"select-filter\" padding>\n      <h1 color=\"primary\">Filters</h1>\n\n      <div class=\"filter-select\">\n        <ion-label>Search</ion-label>\n        <ion-input [(ngModel)]=\"filter.title\"> </ion-input>\n      </div>\n      <div class=\"filter-select\">\n        <ion-label>Start Date</ion-label>\n        <ion-datetime display-format=\"DD/MM/YYYY\" [(ngModel)]=\"filter.startDate\"> </ion-datetime>\n      </div>\n      <div class=\"filter-select\">\n        <ion-label>End Date</ion-label>\n        <ion-datetime display-format=\"DD/MM/YYYY\" [(ngModel)]=\"filter.endDate\"> </ion-datetime>\n      </div>\n\n      <div class=\"filter-btn\">\n        <ion-row>\n          <ion-col size=\"6\">\n            <button type=\"button\" class=\"can-btn\" (click)=\"cancel()\">Cancel</button>\n\n          </ion-col>\n          <ion-col size=\"6\">\n            <button type=\"button\" class=\"app-btn\" (click)=\"filerdata()\">Apply</button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/receiptlist/receiptlist.page.scss":
/*!***************************************************!*\
  !*** ./src/app/receiptlist/receiptlist.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".more-btn ion-icon {\n  margin-right: 10px;\n}\n\n.top-head {\n  position: absolute;\n}\n\n.tool-head ion-row {\n  text-align: center;\n}\n\n.image-content {\n  position: relative;\n  height: 220px;\n}\n\n.tool-head label {\n  color: #fff;\n}\n\n.select-title select {\n  background: none;\n  border: none;\n  color: #fff;\n  display: block;\n  font-size: 25px;\n  outline: none;\n  margin-top: 12px;\n  margin-left: 45px;\n}\n\n.select-title select option {\n  color: #009cde;\n  font-size: 18px;\n}\n\n.expense-title {\n  border-right: 1px solid #fff;\n}\n\n.expense-title h1 {\n  color: #fff;\n  font-weight: 600;\n  margin-top: 10px;\n  font-size: 30px;\n}\n\n.expense-select {\n  background: #fff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.expense-select select {\n  border: none;\n  font-size: 12px;\n  float: right;\n  background: none;\n  outline: none;\n  color: #62666B;\n}\n\n.expense-select h4 {\n  margin: 0px;\n  font-size: 18px;\n}\n\n.expense-select-detail p {\n  text-align: right;\n  margin: 0px;\n  font-size: 12px;\n}\n\nion-row.active {\n  border: 1px solid #009CDE;\n  background: rgba(212, 233, 248, 0.5);\n  border-radius: 5px;\n}\n\n.expense-select-detail span {\n  font-size: 12px;\n  color: #62666B;\n}\n\n.expense-select-detail h5 {\n  font-size: 15px;\n  margin: 0px 0px 3px;\n}\n\n.expense-detail {\n  padding-top: 0px;\n}\n\n.rowss {\n  border-bottom: 0.5px solid #d8d8d8;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.more-btn img {\n  width: 13px;\n  margin-right: 10px;\n}\n\n.delete-btn {\n  margin-right: 16px;\n}\n\n.filter {\n  position: fixed;\n  width: 100%;\n  z-index: 99;\n  height: 100%;\n  padding: 50px 20px;\n  top: 0px;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.select-filter {\n  background-color: white;\n}\n\n.select-filter h1 {\n  font-size: 23px;\n  color: #009CDE;\n  margin-top: 0px;\n}\n\nion-label {\n  color: #878C8E !important;\n  font-size: 12px !important;\n}\n\nion-input {\n  border-bottom: 1px solid #D8D8D8;\n  padding-left: 0px !important;\n}\n\n.filter-detail {\n  padding-top: 15px;\n}\n\n.filter-select {\n  margin-top: 15px;\n}\n\nion-datetime {\n  border-bottom: 1px solid #D8D8D8;\n  padding-left: 5px;\n}\n\nion-select {\n  padding-left: 5px;\n  border-bottom: 1px solid #D8D8D8;\n}\n\n.filter-sel {\n  margin-top: 15px;\n}\n\n.filter-btn {\n  margin: 30px 0px 20px;\n}\n\nbutton.app-btn {\n  width: 100%;\n  background: #009CDE;\n  color: #fff;\n  padding: 10px 0px;\n  font-size: 18px;\n  border-radius: 5px;\n}\n\nbutton.can-btn {\n  width: 100%;\n  border-radius: 5px;\n  color: #62666B;\n  border: 1px solid #62666B;\n  background: transparent;\n  padding: 9px 0px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3JlY2VpcHRsaXN0L3JlY2VpcHRsaXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVjZWlwdGxpc3QvcmVjZWlwdGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQUE7QUNBSjs7QURFQTtFQUVJLGtCQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBRUksa0JBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0E7RUFFSSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNHSjs7QUREQTtFQUNJLDRCQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNLSjs7QURIQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ01KOztBREpBO0VBRUksWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ01KOztBREpBO0VBRUksV0FBQTtFQUNBLGVBQUE7QUNNSjs7QURKQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNPSjs7QURMQTtFQUNJLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQ1FKOztBRE5BO0VBRUcsZUFBQTtFQUNBLGNBQUE7QUNRSDs7QUROQTtFQUVHLGVBQUE7RUFDQSxtQkFBQTtBQ1FIOztBREZBO0VBQ0ksZ0JBQUE7QUNLSjs7QURIQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNPSjs7QURMQTtFQUNJLGtCQUFBO0FDUUo7O0FETkE7RUFFSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLDhCQUFBO0FDUUo7O0FETkE7RUFFSSx1QkFBQTtBQ1FKOztBRE5BO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDU0o7O0FEUEE7RUFFSSx5QkFBQTtFQUNBLDBCQUFBO0FDU0o7O0FEUEE7RUFFSSxnQ0FBQTtFQUNBLDRCQUFBO0FDU0o7O0FEUEE7RUFDSSxpQkFBQTtBQ1VKOztBRFJBO0VBQ0ksZ0JBQUE7QUNXSjs7QURUQTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7QUNZSjs7QURWQTtFQUNJLGlCQUFBO0VBQ0EsZ0NBQUE7QUNhSjs7QURYQTtFQUNJLGdCQUFBO0FDY0o7O0FEWkE7RUFDSSxxQkFBQTtBQ2VKOztBRGJBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDZ0JKOztBRGRBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNpQkoiLCJmaWxlIjoic3JjL2FwcC9yZWNlaXB0bGlzdC9yZWNlaXB0bGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9yZS1idG4gaW9uLWljb25cbntcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4udG9wLWhlYWRcbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4udG9vbC1oZWFkIGlvbi1yb3cge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbWFnZS1jb250ZW50XG57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjIwcHg7XG59XG4udG9vbC1oZWFkIGxhYmVsXG57XG4gICAgY29sb3I6ICNmZmY7XG59XG4uc2VsZWN0LXRpdGxlIHNlbGVjdCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcbn1cbi5zZWxlY3QtdGl0bGUgc2VsZWN0IG9wdGlvbiB7XG4gICAgY29sb3I6ICMwMDljZGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLmV4cGVuc2UtdGl0bGUge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XG59XG4uZXhwZW5zZS10aXRsZSBoMSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5leHBlbnNlLXNlbGVjdCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4OyBcbn1cbi5leHBlbnNlLXNlbGVjdCBzZWxlY3RcbntcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6ICM2MjY2NkI7XG59XG4uZXhwZW5zZS1zZWxlY3QgaDRcbntcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uZXhwZW5zZS1zZWxlY3QtZGV0YWlsIHAge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbmlvbi1yb3cuYWN0aXZlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA5Q0RFO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjEyLDIzMywyNDgsMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uZXhwZW5zZS1zZWxlY3QtZGV0YWlsIHNwYW5cbntcbiAgIGZvbnQtc2l6ZTogMTJweDtcbiAgIGNvbG9yOiAjNjI2NjZCO1xufVxuLmV4cGVuc2Utc2VsZWN0LWRldGFpbCBoNVxue1xuICAgZm9udC1zaXplOiAxNXB4O1xuICAgbWFyZ2luOjBweCAwcHggM3B4O1xufVxuLmV4cGVuc2Utc2VsZWN0LWRldGFpbFxuIHtcbiAgICAvLyBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5leHBlbnNlLWRldGFpbCB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbn1cbi5yb3dzc3tcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjZDhkOGQ4O1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLm1vcmUtYnRuIGltZyB7XG4gICAgd2lkdGg6IDEzcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmRlbGV0ZS1idG57XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLmZpbHRlclxue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzo1MHB4IDIwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC41KTtcbn1cbi5zZWxlY3QtZmlsdGVyXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICBcbn1cbi5zZWxlY3QtZmlsdGVyIGgxIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgY29sb3I6ICMwMDlDREU7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuaW9uLWxhYmVsXG57XG4gICAgY29sb3I6Izg3OEM4RSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZToxMnB4ICFpbXBvcnRhbnQ7XG59XG5pb24taW5wdXRcbntcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Q4RDhEODtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuLmZpbHRlci1kZXRhaWwge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuLmZpbHRlci1zZWxlY3Qge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5pb24tZGF0ZXRpbWUge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDhEOEQ4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xufVxuaW9uLXNlbGVjdCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOEQ4RDg7XG59XG4uZmlsdGVyLXNlbCB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5maWx0ZXItYnRuIHtcbiAgICBtYXJnaW46IDMwcHggMHB4IDIwcHg7XG59XG5idXR0b24uYXBwLWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzAwOUNERTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuYnV0dG9uLmNhbi1idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogIzYyNjY2QjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjI2NjZCO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDlweCAwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufSIsIi5tb3JlLWJ0biBpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnRvcC1oZWFkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4udG9vbC1oZWFkIGlvbi1yb3cge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDIyMHB4O1xufVxuXG4udG9vbC1oZWFkIGxhYmVsIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWxlY3QtdGl0bGUgc2VsZWN0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG59XG5cbi5zZWxlY3QtdGl0bGUgc2VsZWN0IG9wdGlvbiB7XG4gIGNvbG9yOiAjMDA5Y2RlO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5leHBlbnNlLXRpdGxlIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcbn1cblxuLmV4cGVuc2UtdGl0bGUgaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uZXhwZW5zZS1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLmV4cGVuc2Utc2VsZWN0IHNlbGVjdCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjNjI2NjZCO1xufVxuXG4uZXhwZW5zZS1zZWxlY3QgaDQge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZXhwZW5zZS1zZWxlY3QtZGV0YWlsIHAge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW9uLXJvdy5hY3RpdmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA5Q0RFO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMiwgMjMzLCAyNDgsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmV4cGVuc2Utc2VsZWN0LWRldGFpbCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzYyNjY2Qjtcbn1cblxuLmV4cGVuc2Utc2VsZWN0LWRldGFpbCBoNSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwcHggMHB4IDNweDtcbn1cblxuLmV4cGVuc2UtZGV0YWlsIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLnJvd3NzIHtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2Q4ZDhkODtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4ubW9yZS1idG4gaW1nIHtcbiAgd2lkdGg6IDEzcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmRlbGV0ZS1idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5maWx0ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA1MHB4IDIwcHg7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5zZWxlY3QtZmlsdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zZWxlY3QtZmlsdGVyIGgxIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogIzAwOUNERTtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogIzg3OEM4RSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOEQ4RDg7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5maWx0ZXItZGV0YWlsIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi5maWx0ZXItc2VsZWN0IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOEQ4RDg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDhEOEQ4O1xufVxuXG4uZmlsdGVyLXNlbCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5maWx0ZXItYnRuIHtcbiAgbWFyZ2luOiAzMHB4IDBweCAyMHB4O1xufVxuXG5idXR0b24uYXBwLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMDA5Q0RFO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5idXR0b24uY2FuLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjNjI2NjZCO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjI2NjZCO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogOXB4IDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/receiptlist/receiptlist.page.ts":
/*!*************************************************!*\
  !*** ./src/app/receiptlist/receiptlist.page.ts ***!
  \*************************************************/
/*! exports provided: ReceiptlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptlistPage", function() { return ReceiptlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");
/* harmony import */ var _helper_currency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helper/currency */ "./src/app/_helper/currency.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");












var ReceiptlistPage = /** @class */ (function () {
    function ReceiptlistPage(activatedRoute, storageService, settingService, file, router, alertController, toastCtrl, platform, webview) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.storageService = storageService;
        this.settingService = settingService;
        this.file = file;
        this.router = router;
        this.alertController = alertController;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.webview = webview;
        this.status = false;
        this.lists = [];
        this.newlist = [];
        this.year = '';
        this.userid = '';
        this.totalamount = 0;
        this.currency = new _helper_currency__WEBPACK_IMPORTED_MODULE_8__["Currency"]();
        this.showfiler = false;
        this.selectedReceipts = [];
        this.filter = {
            title: '',
            startDate: '',
            endDate: ''
        };
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (JSON.parse(params.data).pagename === 'dashboard') {
                _this.status = true;
            }
            else {
                if (JSON.parse(params.data).year !== '') {
                    _this.year = JSON.parse(params.data).year;
                }
            }
            _this.viewreceipt();
        });
    }
    ReceiptlistPage.prototype.ngOnInit = function () {
        var _this = this;
        this.userid = this.settingService.getUserId();
        if (this.platform.is("android")) {
            this.platform.ready().then(function () {
                _this.platform.backButton.subscribeWithPriority(9999, function () {
                    console.log("Back press handler!");
                });
            });
        }
    };
    ReceiptlistPage.prototype.cancel = function () {
        this.filter = {
            title: '',
            startDate: '',
            endDate: ''
        };
        this.showfiler = false;
        this.viewreceipt();
    };
    ReceiptlistPage.prototype.selectReceipt = function (event, item) {
        if (event.target.checked) {
            this.selectedReceipts.push(item);
        }
        else {
            Object(lodash__WEBPACK_IMPORTED_MODULE_10__["remove"])(this.selectedReceipts, { id: item.id });
        }
    };
    ReceiptlistPage.prototype.deleteReceipt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1, alert_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.selectedReceipts.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Confirm!',
                                message: 'Are you sure you want to delete this receipts?',
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
                                            for (var _i = 0, _a = _this.selectedReceipts; _i < _a.length; _i++) {
                                                var receipt = _a[_i];
                                                console.log(receipt);
                                                _this.storageService.removeReceipt(receipt.id).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var toast;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                console.log('deleted successfully');
                                                                console.log(res);
                                                                return [4 /*yield*/, this.toastCtrl.create({
                                                                        message: 'Receipt deleted successfully',
                                                                        duration: 2000,
                                                                        mode: 'md',
                                                                        cssClass: 'customToast'
                                                                    })];
                                                            case 1:
                                                                toast = _a.sent();
                                                                toast.present();
                                                                this.viewreceipt();
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
                            message: 'Please select atleast one receipt',
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
    ReceiptlistPage.prototype.filerdata = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.filter.title || this.filter.startDate || this.filter.endDate)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.viewreceipt()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.showfiler = false;
                        console.log("filter");
                        return [2 /*return*/];
                }
            });
        });
    };
    ReceiptlistPage.prototype.filterByValue = function (array, string) {
        return array.filter(function (o) {
            return o['expense_type'].toLowerCase().includes(string.toLowerCase());
        });
    };
    ReceiptlistPage.prototype.viewreceipt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.totalamount = 0;
                this.userid = this.settingService.getUserId();
                this.storageService.viewOcr(this.userid).then(function (res) {
                    _this.lists = [];
                    _this.newlist = [];
                    if (res.rows.length > 0) {
                        for (var i = 0; i < res.rows.length; i++) {
                            var date = new Date(res.rows.item(i).date);
                            var newyear = date.getFullYear();
                            var newamounttofixed = _this.currency.display(res.rows.item(i).amount);
                            var viewImage = _this.webview.convertFileSrc(_this.file.dataDirectory + res.rows.item(i).image);
                            _this.lists.push({
                                id: res.rows.item(i).id, image: res.rows.item(i).image, fullimage: viewImage,
                                description: res.rows.item(i).description, claim_status: res.rows.item(i).claim_status,
                                expense_type: res.rows.item(i).expense_type, amount: newamounttofixed, date: res.rows.item(i).date,
                                claim_tax_return: res.rows.item(i).claim_tax_return, totalgst: res.rows.item(i).totalgst,
                                payment_type: res.rows.item(i).payment_type
                            });
                            // if (newyear == parseInt(this.year)) {
                            //   this.newlist.push({
                            //     id: res.rows.item(i).id, image: res.rows.item(i).image, fullimage: viewImage,
                            //     description: res.rows.item(i).description, claim_status: res.rows.item(i).claim_status,
                            //     expense_type: res.rows.item(i).expense_type, amount: newamounttofixed, date: res.rows.item(i).date,
                            //     claim_tax_return: res.rows.item(i).claim_tax_return, totalgst: res.rows.item(i).totalgst,
                            //     payment_type: res.rows.item(i).payment_type
                            //   });
                            // }
                        }
                        var that_1 = _this;
                        _this.newlist.forEach(function (ele) {
                            that_1.totalamount = (parseFloat(that_1.totalamount) + parseFloat(ele.amount)).toFixed(2);
                        });
                        if (_this.filter.title) {
                            _this.lists = _this.filterByValue(_this.lists, _this.filter.title);
                        }
                        else if (_this.filter.startDate && _this.filter.endDate) {
                            _this.lists = _this.lists.filter(function (list) {
                                return (moment__WEBPACK_IMPORTED_MODULE_9__(list.date) >= moment__WEBPACK_IMPORTED_MODULE_9__(_this.filter.startDate) && moment__WEBPACK_IMPORTED_MODULE_9__(list.date) <= moment__WEBPACK_IMPORTED_MODULE_9__(_this.filter.endDate));
                            });
                            console.log(_this.lists);
                        }
                        else if (_this.filter.startDate && !_this.filter.endDate) {
                            _this.lists = _this.lists.filter(function (list) {
                                return (moment__WEBPACK_IMPORTED_MODULE_9__(list.date) >= moment__WEBPACK_IMPORTED_MODULE_9__(_this.filter.startDate));
                            });
                        }
                        else if (!_this.filter.startDate && _this.filter.endDate) {
                            _this.lists = _this.lists.filter(function (list) {
                                return (moment__WEBPACK_IMPORTED_MODULE_9__(list.date) <= moment__WEBPACK_IMPORTED_MODULE_9__(_this.filter.endDate));
                            });
                        }
                    }
                    else {
                        _this.lists = [];
                        _this.newlist = [];
                    }
                })
                    .catch(function (e) {
                    _this.lists = [];
                    _this.newlist = [];
                    console.log(e);
                });
                return [2 /*return*/];
            });
        });
    };
    ReceiptlistPage.prototype.details = function (data) {
        this.router.navigate(['/receiptdetail'], {
            queryParams: { data: JSON.stringify(data) }
        });
    };
    ReceiptlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-receiptlist',
            template: __webpack_require__(/*! ./receiptlist.page.html */ "./src/app/receiptlist/receiptlist.page.html"),
            styles: [__webpack_require__(/*! ./receiptlist.page.scss */ "./src/app/receiptlist/receiptlist.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_6__["PageTrack"])('Receipt List Screen'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_7__["SettingService"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__["WebView"]])
    ], ReceiptlistPage);
    return ReceiptlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=receiptlist-receiptlist-module.js.map