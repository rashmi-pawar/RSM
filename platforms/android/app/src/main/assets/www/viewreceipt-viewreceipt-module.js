(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewreceipt-viewreceipt-module"],{

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/app/viewreceipt/viewreceipt.module.ts":
/*!***************************************************!*\
  !*** ./src/app/viewreceipt/viewreceipt.module.ts ***!
  \***************************************************/
/*! exports provided: ViewreceiptPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewreceiptPageModule", function() { return ViewreceiptPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viewreceipt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewreceipt.page */ "./src/app/viewreceipt/viewreceipt.page.ts");







var routes = [
    {
        path: '',
        component: _viewreceipt_page__WEBPACK_IMPORTED_MODULE_6__["ViewreceiptPage"]
    }
];
var ViewreceiptPageModule = /** @class */ (function () {
    function ViewreceiptPageModule() {
    }
    ViewreceiptPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_viewreceipt_page__WEBPACK_IMPORTED_MODULE_6__["ViewreceiptPage"]]
        })
    ], ViewreceiptPageModule);
    return ViewreceiptPageModule;
}());



/***/ }),

/***/ "./src/app/viewreceipt/viewreceipt.page.html":
/*!***************************************************!*\
  !*** ./src/app/viewreceipt/viewreceipt.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"{{back}}\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Receipt Manager</ion-title>\n        <ion-buttons slot=\"end\" class=\"heart-btn\">\n            <ion-icon name=\"heart\" (click)=\"addToFavourites('Receipt Manager', 'viewreceipt')\" *ngIf=\"isFav == false\">\n            </ion-icon>\n            <ion-icon name=\"heart\" (click)=\"removefavourites('viewreceipt')\" *ngIf=\"isFav == true\" style=\"color: red\">\n            </ion-icon>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"receipt-add\" padding *ngIf=\"showpop\" (click)=\"hidee($event.target)\">\n        <div class=\"pop-list-detail ion-padding-horizontal\" id=\"sh\">\n            <ul>\n                <li (click)=\"checklogin('viewreceipt','uploadtocloud')\" id=\"upload\" class=\"popup-li upload\">\n                    Upload to cloud\n                </li>\n                <li (click)=\"checklogin('viewreceipt','exporttosv')\" id=\"export\" class=\"popup-li export\">\n                    Export to CSV\n                </li>\n            </ul>\n        </div>\n\n    </div>\n    <div class=\"image-content\">\n        <div class=\"tool-head\" padding>\n            <ion-row class=\"ion-padding-horizontal\">\n                <ion-col no-padding size=\"6\">\n                    <div class=\"expense-title ion-padding-horizontal\">\n                        <label for=\"expense\">Total Expenses</label>\n                        <h1>{{totalamount}}</h1>\n                    </div>\n                </ion-col>\n                <ion-col no-padding size=\"6\">\n                    <div class=\"select-title\">\n                        <label for=\"year\">Financial Year</label>\n                        <ion-select [(ngModel)]=\"year\" (ionChange)=\"selectYear($event)\">\n                            <ion-select-option *ngFor=\"let yearObj of yearArray\" value=\"{{yearObj}}\">{{yearObj}}\n                            </ion-select-option>\n                        </ion-select>\n                    </div>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col no-padding>\n                    <div class=\"add-new-recpt\">\n                        <p class=\"blue-color\" (click)=\"goTo('home')\">\n                            <ion-icon name=\"add\"></ion-icon> &nbsp;ADD NEW RECEIPT\n                        </p>\n                    </div>\n                </ion-col>\n\n                <ion-col no-padding (click)=\"checklogin('viewreceipt','uploadtocloud')\">\n                    <div class=\"upload-recpt\">\n                        <p>EXPORT AND SHARE</p>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </div>\n        <div class=\"expense-detail\" padding>\n            <div class=\"expense-select grey-color\" padding>\n                <ion-row>\n                    <ion-col no-padding size=\"8\">\n                        <h4>Expense Details</h4>\n                    </ion-col>\n                    <ion-col no-padding size=\"4\">\n                        <ion-select [(ngModel)]=\"filter\" (change)=\"changeype($event)\">\n                            <ion-select-option value=\"category\">Category</ion-select-option>\n                            <ion-select-option value=\"month\">Month</ion-select-option>\n                        </ion-select>\n                    </ion-col>\n                </ion-row>\n\n                <!-- month list -->\n                <div class=\"month-list\" *ngIf=\"filter =='month'\">\n\n                    <div *ngIf=\"monthAmountList?.length\">\n                        <ion-row *ngFor=\"let months of monthAmountList; let i =index;\" (click)=\"next(months.month)\">\n                            <ion-col no-padding size=\"8\">\n                                <p class=\"grey-color\">{{months.name}}</p>\n                            </ion-col>\n                            <ion-col no-padding size=\"4\">\n                                <p class=\"blue-color right\">{{months.amountText}}</p>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n\n                    <div *ngIf=\"!monthAmountList?.length\" class=\"nodata\">No Record Found</div>\n\n                    <div class=\"total-expense ion-padding-top\">\n                        <p class=\"grey-color\">Total Expenses</p>\n                        <span class=\"blue-color\">{{monthstotalamount}}</span>\n                    </div>\n\n                </div>\n\n                <!-- end month list -->\n\n                <!-- expense list -->\n                <div class=\"expense-select-detail\" padding id=\"cat\" *ngIf=\"filter == 'category'\">\n                    <div *ngIf=\"expenseslist?.length\">\n                        <ion-row *ngFor=\"let list of expenseslist\" (click)=\"next(list.expense_type)\">\n                            <ion-col no-padding size=\"2\">\n                                <img src=\"assets/img/{{list.icon}}\">\n                            </ion-col>\n                            <ion-col no-padding size=\"6\">\n                                <p>{{list.expense_type}}</p>\n                            </ion-col>\n                            <ion-col no-padding size=\"4\">\n                                <span class=\"blue-color\" style=\"word-break: break-all;\">{{list?.amountText}}</span>\n                            </ion-col>\n                        </ion-row>\n\n                    </div>\n                    <div *ngIf=\"!expenseslist?.length\" class=\"nodata\">No Record Found</div>\n\n\n                    <div class=\"total-expense ion-padding-top\">\n                        <p class=\"grey-color\">Total Expenses</p>\n                        <span class=\"blue-color\">{{expensetotalamount}}</span>\n                    </div>\n\n                </div>\n                <!-- end expense list -->\n            </div>\n\n            <!-- list -->\n            <div class=\"current-add\" *ngIf=\"filter == 'category'\">\n                <ion-row class=\"grey-color\">\n                    <ion-col no-padding size=\"9\">\n                        <h5>Recently added receipts</h5>\n                    </ion-col>\n                    <ion-col no-padding size=\"3\" (click)=\"go('receiptlist','viewreceipt',year)\">\n                        <p class=\"blue-color right\"> View All</p>\n                    </ion-col>\n                </ion-row>\n                <div *ngIf=\"lists?.length\">\n                    <ion-row padding *ngFor=\"let listing of lists | slice:0:3\" (click)=\"details(listing)\">\n                        <ion-col no-padding size=\"12\">\n                            <h4>{{listing.expense_type}}</h4>\n                        </ion-col>\n                        <ion-col no-padding size=\"6\">\n                            <p class=\"light-grey\">{{listing.date | date :'dd-MM-yyyy'}}</p>\n                        </ion-col>\n                        <ion-col no-padding size=\"6\">\n                            <span class=\"green-color\">{{listing.amountText}}</span>\n                        </ion-col>\n                    </ion-row>\n                </div>\n                <div *ngIf=\"!lists?.length\" class=\"nodata\"> No data found</div>\n            </div>\n            <!-- end list -->\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/viewreceipt/viewreceipt.page.scss":
/*!***************************************************!*\
  !*** ./src/app/viewreceipt/viewreceipt.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".more-btn ion-icon {\n  margin-right: 10px;\n}\n\n.top-head {\n  position: absolute;\n}\n\n.receipt-add {\n  position: absolute;\n  z-index: 99;\n  background: #fff;\n  right: 10px;\n  top: 40px;\n  border-radius: 10px;\n}\n\n.pop-list-detail ul li {\n  list-style-type: none;\n  line-height: 30px;\n}\n\n.pop-list-detail ul {\n  padding-left: 0px !important;\n  margin: 0px;\n}\n\n.image-content {\n  position: relative;\n  height: 28%;\n}\n\n.tool-head label {\n  color: #fff;\n}\n\n.select-title ion-select {\n  color: #fff;\n  font-size: 20px !important;\n  padding: 10px 4px;\n}\n\n.expense-title {\n  border-right: 1px solid #fff;\n}\n\n.expense-title h1 {\n  color: #fff;\n  font-weight: 600;\n  margin-top: 10px;\n  font-size: 30px;\n}\n\n.expense-select {\n  background: #fff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.expense-select ion-select {\n  padding: 0px 4px;\n}\n\n.expense-select h4 {\n  margin: 0px;\n  font-size: 18px;\n}\n\n.expense-select-detail img {\n  width: 35px;\n}\n\n.expense-select-detail p {\n  margin: 5px 0px 0;\n  color: #62666B;\n  font-size: 15px;\n}\n\n.expense-select-detail ion-row {\n  margin-top: 20px;\n}\n\n.expense-select-detail span {\n  float: right;\n  margin: 5px 0px 0;\n}\n\n.total-expense p {\n  display: inline;\n  font-size: 15px;\n}\n\n.total-expense span {\n  float: right;\n  font-size: 20px;\n  font-weight: 600;\n  margin-top: 0;\n}\n\n.monthly-expense p {\n  display: inline;\n  font-size: 15px;\n}\n\n.monthly-expense span {\n  float: right;\n  font-size: 20px;\n  font-weight: 600;\n  margin-top: 0;\n}\n\n.view-monthly-receipt {\n  text-align: center;\n  padding-top: 20px;\n}\n\n.view-monthly-receipt p {\n  color: #009cde !important;\n  font-size: 12px;\n}\n\n.current-add h4 {\n  color: #353A41;\n  font-size: 15px;\n  margin-top: 0px;\n  margin-bottom: 5px;\n}\n\n.current-add p {\n  margin: 0px;\n  font-size: 12px;\n}\n\n.current-add h5 {\n  margin: 0px;\n  font-size: 18px;\n}\n\n.current-add span {\n  float: right;\n  font-size: 15px;\n}\n\n.add-new-recpt p {\n  font-size: 10px;\n  padding: 10px 0px;\n  text-align: center;\n}\n\n.add-new-recpt ion-icon {\n  vertical-align: text-top;\n}\n\n.select-title {\n  padding-left: 15px;\n}\n\n.add-new-recpt {\n  background: #fff;\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n\n.export-recpt {\n  background: linear-gradient(to right, #ff7167 0%, #ff5156 100%);\n}\n\n.export-recpt p {\n  color: #fff;\n  font-size: 10px;\n  padding: 10px;\n  text-align: center;\n}\n\n.upload-recpt p {\n  color: #fff;\n  font-size: 10px;\n  padding: 10px;\n  text-align: center;\n}\n\n.upload-recpt {\n  background: linear-gradient(to right, #3f9c35 0%, #3f9c35 100%);\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\n.tool-head {\n  padding-bottom: 0px;\n}\n\n.expense-detail {\n  padding-top: 0px;\n}\n\n.month-list {\n  overflow: scroll;\n  margin-top: 25px;\n}\n\n.month-list ul {\n  padding: 0px;\n  display: flex;\n}\n\n.month-list ul li {\n  display: inline;\n  margin-right: 70px;\n  font-size: 15px;\n  color: #878C8E;\n}\n\nli.active {\n  color: #2F2F2F !important;\n  font-size: 18px !important;\n}\n\n@media only screen and (max-width: 375px) and (max-height: 812px) {\n  .image-content {\n    height: 25%;\n  }\n}\n\n@media only screen and (max-width: 375px) and (max-height: 667px) {\n  .image-content {\n    height: 30%;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  .image-content {\n    height: 30%;\n  }\n  .select-title ion-select {\n    font-size: 22px;\n  }\n  .expense-title h1 {\n    font-size: 26px;\n  }\n  .expense-select h4 {\n    font-size: 16px;\n  }\n  .current-add h5 {\n    font-size: 16px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .image-content {\n    height: 35%;\n  }\n  .upload-recpt p {\n    font-size: 10px;\n  }\n  .export-recpt p {\n    font-size: 10px;\n  }\n  .add-new-recpt p {\n    font-size: 10px;\n  }\n  .expense-select h4 {\n    font-size: 16px;\n  }\n  .current-add h5 {\n    font-size: 16px;\n  }\n  .expense-select-detail img {\n    width: 30px;\n  }\n  .expense-title h1 {\n    font-size: 24px;\n  }\n  .tool-head label {\n    font-size: 14px;\n  }\n  .select-title ion-select {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3ZpZXdyZWNlaXB0L3ZpZXdyZWNlaXB0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlld3JlY2VpcHQvdmlld3JlY2VpcHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQUE7QUNBSjs7QURFQTtFQUVJLGtCQUFBO0FDQUo7O0FES0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURJQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURHQTtFQUNJLDRCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREVBO0VBRUksa0JBQUE7RUFFQSxXQUFBO0FDREo7O0FER0E7RUFFSSxXQUFBO0FDREo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQ0FKOztBRE1BO0VBQ0ksNEJBQUE7QUNISjs7QURLQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDREo7O0FEaUJBO0VBRUksZ0JBQUE7QUNmSjs7QURrQkE7RUFFSSxXQUFBO0VBQ0EsZUFBQTtBQ2hCSjs7QURrQkE7RUFDSSxXQUFBO0FDZko7O0FEaUJBO0VBRUksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ2ZKOztBRGlCQTtFQUVJLGdCQUFBO0FDZko7O0FEaUJBO0VBRUksWUFBQTtFQUNBLGlCQUFBO0FDZko7O0FEb0JBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNqQko7O0FEbUJBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNoQko7O0FEa0JBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNmSjs7QURpQkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ2RKOztBRGdCQTtFQUVJLGtCQUFBO0VBQ0EsaUJBQUE7QUNkSjs7QURnQkE7RUFFSSx5QkFBQTtFQUNBLGVBQUE7QUNkSjs7QURnQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2JKOztBRGVBO0VBRUksV0FBQTtFQUNBLGVBQUE7QUNiSjs7QURlQTtFQUVJLFdBQUE7RUFDQSxlQUFBO0FDYko7O0FEZUE7RUFFSSxZQUFBO0VBQ0EsZUFBQTtBQ2JKOztBRGVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNaSjs7QURjQTtFQUVJLHdCQUFBO0FDWko7O0FEY0E7RUFDSSxrQkFBQTtBQ1hKOztBRGFBO0VBRUksZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDWEo7O0FEYUE7RUFFSSwrREFBQTtBQ1hKOztBRGFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNWSjs7QURZQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDVEo7O0FEV0E7RUFFSSwrREFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUNUSjs7QURXQTtFQUNJLG1CQUFBO0FDUko7O0FEVUE7RUFDSSxnQkFBQTtBQ1BKOztBRFNBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ05KOztBRFFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNMSjs7QURPQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDSko7O0FETUE7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0FDSEo7O0FEUUE7RUFFSTtJQUNJLFdBQUE7RUNOTjtBQUNGOztBRFFBO0VBRUk7SUFDSSxXQUFBO0VDUE47QUFDRjs7QURVQTtFQUVJO0lBQ0ksV0FBQTtFQ1ROO0VEV0U7SUFFSSxlQUFBO0VDVk47RURZRTtJQUVJLGVBQUE7RUNYTjtFRGFFO0lBRUksZUFBQTtFQ1pOO0VEY0U7SUFFSSxlQUFBO0VDYk47QUFDRjs7QURnQkE7RUFFSTtJQUNJLFdBQUE7RUNmTjtFRGlCRTtJQUNJLGVBQUE7RUNmTjtFRGlCRTtJQUNJLGVBQUE7RUNmTjtFRGlCRTtJQUNJLGVBQUE7RUNmTjtFRGlCRTtJQUVJLGVBQUE7RUNoQk47RURrQkU7SUFFSSxlQUFBO0VDakJOO0VEbUJFO0lBQ0ksV0FBQTtFQ2pCTjtFRG1CRTtJQUVJLGVBQUE7RUNsQk47RURvQkU7SUFDSSxlQUFBO0VDbEJOO0VEcUJFO0lBRUksZUFBQTtFQ3BCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlld3JlY2VpcHQvdmlld3JlY2VpcHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vcmUtYnRuIGlvbi1pY29uXG57XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnRvcC1oZWFkXG57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLy8gLnRvb2wtaGVhZCBpb24tcm93IHtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyB9XG4ucmVjZWlwdC1hZGQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnBvcC1saXN0LWRldGFpbCB1bCBsaSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLnBvcC1saXN0LWRldGFpbCB1bCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5pbWFnZS1jb250ZW50XG57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIGhlaWdodDogMjEwcHg7XG4gICAgaGVpZ2h0OiAyOCU7XG59XG4udG9vbC1oZWFkIGxhYmVsXG57XG4gICAgY29sb3I6ICNmZmY7XG59XG4uc2VsZWN0LXRpdGxlIGlvbi1zZWxlY3Qge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHggNHB4O1xufVxuLy8gLnNlbGVjdC10aXRsZSBpb24tc2VsZWN0LW9wdGlvbiB7XG4vLyAgICAgY29sb3I6ICMwMDljZGU7XG4vLyAgICAgZm9udC1zaXplOiAxOHB4O1xuLy8gfVxuLmV4cGVuc2UtdGl0bGUge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XG59XG4uZXhwZW5zZS10aXRsZSBoMSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5leHBlbnNlLXNlbGVjdCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIC8vIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICBcbn1cbi8vIC5jdXJyZW50LWFkZCB7XG4vLyAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4vLyB9XG4vLyAuZXhwZW5zZS1zZWxlY3Qgc2VsZWN0XG4vLyB7XG4vLyAgICAgYm9yZGVyOiBub25lO1xuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgICBmbG9hdDogcmlnaHQ7XG4vLyAgICAgYmFja2dyb3VuZDogbm9uZTtcbi8vICAgICBvdXRsaW5lOiBub25lO1xuLy8gICAgIGNvbG9yOiAjNjI2NjZCO1xuLy8gfVxuLmV4cGVuc2Utc2VsZWN0IGlvbi1zZWxlY3RcbntcbiAgICBwYWRkaW5nOiAwcHggNHB4O1xufVxuXG4uZXhwZW5zZS1zZWxlY3QgaDRcbntcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uZXhwZW5zZS1zZWxlY3QtZGV0YWlsIGltZyB7XG4gICAgd2lkdGg6IDM1cHg7XG59XG4uZXhwZW5zZS1zZWxlY3QtZGV0YWlsIHBcbntcbiAgICBtYXJnaW46IDVweCAwcHggMDtcbiAgICBjb2xvcjogIzYyNjY2QjtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uZXhwZW5zZS1zZWxlY3QtZGV0YWlsIGlvbi1yb3dcbntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmV4cGVuc2Utc2VsZWN0LWRldGFpbCBzcGFuXG57XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbjogNXB4IDBweCAwO1xufVxuLy8gLmV4cGVuc2Utc2VsZWN0LWRldGFpbCB7XG4vLyAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbi8vIH1cbi50b3RhbC1leHBlbnNlIHAge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4udG90YWwtZXhwZW5zZSBzcGFuIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cbi5tb250aGx5LWV4cGVuc2UgcCB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5tb250aGx5LWV4cGVuc2Ugc3BhbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG4udmlldy1tb250aGx5LXJlY2VpcHRcbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4udmlldy1tb250aGx5LXJlY2VpcHQgcCB7XG4gXG4gICAgY29sb3I6ICMwMDljZGUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uY3VycmVudC1hZGQgaDQge1xuICAgIGNvbG9yOiAjMzUzQTQxO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmN1cnJlbnQtYWRkIHBcbntcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uY3VycmVudC1hZGQgaDVcbntcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uY3VycmVudC1hZGQgc3Bhblxue1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uYWRkLW5ldy1yZWNwdCBwe1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDsgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlciAgXG59XG4uYWRkLW5ldy1yZWNwdCBpb24taWNvblxue1xuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbn1cbi5zZWxlY3QtdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5hZGQtbmV3LXJlY3B0XG57XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xufVxuLmV4cG9ydC1yZWNwdFxue1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmNzE2NyAwJSwgI2ZmNTE1NiAxMDAlKTtcbn1cbi5leHBvcnQtcmVjcHQgcHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cbi51cGxvYWQtcmVjcHQgcHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cbi51cGxvYWQtcmVjcHRcbntcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzZjljMzUgMCUsICMzZjljMzUgMTAwJSk7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuLnRvb2wtaGVhZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5leHBlbnNlLWRldGFpbCB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbn1cbi5tb250aC1saXN0IHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG4ubW9udGgtbGlzdCB1bCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4ubW9udGgtbGlzdCB1bCBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbi1yaWdodDogNzBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICM4NzhDOEU7XG59XG5saS5hY3RpdmUge1xuICAgIGNvbG9yOiAjMkYyRjJGICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KWFuZCAobWF4LWhlaWdodDogODEycHgpXG57XG4gICAgLmltYWdlLWNvbnRlbnQge1xuICAgICAgICBoZWlnaHQ6IDI1JVxuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpYW5kIChtYXgtaGVpZ2h0OiA2NjdweClcbntcbiAgICAuaW1hZ2UtY29udGVudCB7XG4gICAgICAgIGhlaWdodDozMCVcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpXG57XG4gICAgLmltYWdlLWNvbnRlbnQge1xuICAgICAgICBoZWlnaHQ6IDMwJTtcbiAgICB9XG4gICAgLnNlbGVjdC10aXRsZSBpb24tc2VsZWN0IHtcbiAgICBcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbiAgICAuZXhwZW5zZS10aXRsZSBoMXtcbiAgICAgICAgXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICB9XG4gICAgLmV4cGVuc2Utc2VsZWN0IGg0XG4gICAge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIC5jdXJyZW50LWFkZCBoNVxuICAgIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweClcbntcbiAgICAuaW1hZ2UtY29udGVudCB7XG4gICAgICAgIGhlaWdodDogMzUlXG4gICAgfVxuICAgIC51cGxvYWQtcmVjcHQgcHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbiAgICAuZXhwb3J0LXJlY3B0IHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG4gICAgLmFkZC1uZXctcmVjcHQgcHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbiAgICAuZXhwZW5zZS1zZWxlY3QgaDRcbiAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgLmN1cnJlbnQtYWRkIGg1XG4gICAge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIC5leHBlbnNlLXNlbGVjdC1kZXRhaWwgaW1ne1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICB9XG4gICAgLmV4cGVuc2UtdGl0bGUgaDF7XG4gICAgICAgIFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICAgIC50b29sLWhlYWQgbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgXG4gICAgfVxuICAgIC5zZWxlY3QtdGl0bGUgaW9uLXNlbGVjdCB7XG4gICAgXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG59XG4iLCIubW9yZS1idG4gaW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi50b3AtaGVhZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnJlY2VpcHQtYWRkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnBvcC1saXN0LWRldGFpbCB1bCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5wb3AtbGlzdC1kZXRhaWwgdWwge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmltYWdlLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjglO1xufVxuXG4udG9vbC1oZWFkIGxhYmVsIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWxlY3QtdGl0bGUgaW9uLXNlbGVjdCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCA0cHg7XG59XG5cbi5leHBlbnNlLXRpdGxlIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcbn1cblxuLmV4cGVuc2UtdGl0bGUgaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uZXhwZW5zZS1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLmV4cGVuc2Utc2VsZWN0IGlvbi1zZWxlY3Qge1xuICBwYWRkaW5nOiAwcHggNHB4O1xufVxuXG4uZXhwZW5zZS1zZWxlY3QgaDQge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZXhwZW5zZS1zZWxlY3QtZGV0YWlsIGltZyB7XG4gIHdpZHRoOiAzNXB4O1xufVxuXG4uZXhwZW5zZS1zZWxlY3QtZGV0YWlsIHAge1xuICBtYXJnaW46IDVweCAwcHggMDtcbiAgY29sb3I6ICM2MjY2NkI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmV4cGVuc2Utc2VsZWN0LWRldGFpbCBpb24tcm93IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmV4cGVuc2Utc2VsZWN0LWRldGFpbCBzcGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDVweCAwcHggMDtcbn1cblxuLnRvdGFsLWV4cGVuc2UgcCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udG90YWwtZXhwZW5zZSBzcGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5tb250aGx5LWV4cGVuc2UgcCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubW9udGhseS1leHBlbnNlIHNwYW4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnZpZXctbW9udGhseS1yZWNlaXB0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnZpZXctbW9udGhseS1yZWNlaXB0IHAge1xuICBjb2xvcjogIzAwOWNkZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jdXJyZW50LWFkZCBoNCB7XG4gIGNvbG9yOiAjMzUzQTQxO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uY3VycmVudC1hZGQgcCB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jdXJyZW50LWFkZCBoNSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jdXJyZW50LWFkZCBzcGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5hZGQtbmV3LXJlY3B0IHAge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hZGQtbmV3LXJlY3B0IGlvbi1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xufVxuXG4uc2VsZWN0LXRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4uYWRkLW5ldy1yZWNwdCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xufVxuXG4uZXhwb3J0LXJlY3B0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY3MTY3IDAlLCAjZmY1MTU2IDEwMCUpO1xufVxuXG4uZXhwb3J0LXJlY3B0IHAge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51cGxvYWQtcmVjcHQgcCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVwbG9hZC1yZWNwdCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzNmOWMzNSAwJSwgIzNmOWMzNSAxMDAlKTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbn1cblxuLnRvb2wtaGVhZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5leHBlbnNlLWRldGFpbCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5tb250aC1saXN0IHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLm1vbnRoLWxpc3QgdWwge1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tb250aC1saXN0IHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM4NzhDOEU7XG59XG5cbmxpLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMkYyRjJGICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1oZWlnaHQ6IDgxMnB4KSB7XG4gIC5pbWFnZS1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDI1JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkgYW5kIChtYXgtaGVpZ2h0OiA2NjdweCkge1xuICAuaW1hZ2UtY29udGVudCB7XG4gICAgaGVpZ2h0OiAzMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLmltYWdlLWNvbnRlbnQge1xuICAgIGhlaWdodDogMzAlO1xuICB9XG4gIC5zZWxlY3QtdGl0bGUgaW9uLXNlbGVjdCB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG4gIC5leHBlbnNlLXRpdGxlIGgxIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gIH1cbiAgLmV4cGVuc2Utc2VsZWN0IGg0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmN1cnJlbnQtYWRkIGg1IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLmltYWdlLWNvbnRlbnQge1xuICAgIGhlaWdodDogMzUlO1xuICB9XG4gIC51cGxvYWQtcmVjcHQgcCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5leHBvcnQtcmVjcHQgcCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5hZGQtbmV3LXJlY3B0IHAge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuZXhwZW5zZS1zZWxlY3QgaDQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuY3VycmVudC1hZGQgaDUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuZXhwZW5zZS1zZWxlY3QtZGV0YWlsIGltZyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gIH1cbiAgLmV4cGVuc2UtdGl0bGUgaDEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAudG9vbC1oZWFkIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLnNlbGVjdC10aXRsZSBpb24tc2VsZWN0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/viewreceipt/viewreceipt.page.ts":
/*!*************************************************!*\
  !*** ./src/app/viewreceipt/viewreceipt.page.ts ***!
  \*************************************************/
/*! exports provided: ViewreceiptPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewreceiptPage", function() { return ViewreceiptPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_sqlite_db_copy_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/sqlite-db-copy/ngx */ "./node_modules/@ionic-native/sqlite-db-copy/ngx/index.js");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../popover/popover.component */ "./src/app/popover/popover.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");
/* harmony import */ var _helper_currency__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_helper/currency */ "./src/app/_helper/currency.ts");
/* harmony import */ var _service_back_stack_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../service/back-stack.service */ "./src/app/service/back-stack.service.ts");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _helper_date_format__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../_helper/date-format */ "./src/app/_helper/date-format.ts");

















// import { Base64 } from '@ionic-native/base64/ngx';


var ViewreceiptPage = /** @class */ (function () {
    function ViewreceiptPage(file, zone, toastCtrl, storageService, settingService, webview, router, events, backStack, socialSharing, sqliteDbCopy, loadingController, menuCtrl, navCtrl, popoverController, http, platform, route, device
    // private base64: Base64,
    ) {
        var _this = this;
        this.file = file;
        this.zone = zone;
        this.toastCtrl = toastCtrl;
        this.storageService = storageService;
        this.settingService = settingService;
        this.webview = webview;
        this.router = router;
        this.events = events;
        this.backStack = backStack;
        this.socialSharing = socialSharing;
        this.sqliteDbCopy = sqliteDbCopy;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.popoverController = popoverController;
        this.http = http;
        this.platform = platform;
        this.route = route;
        this.device = device;
        this.expenseslist = [];
        this.lists = [];
        this.viewall = false;
        this.isImageProcessed = false;
        this.show = true;
        this.monthAmountList = [];
        this.monthstotalamount = 0;
        this.isLoading = false;
        this.filter = 'category';
        this.year = '';
        this.userData = '';
        this.csvlist = [];
        this.newmonthlist = [];
        this.mlist = [];
        this.mlist1 = [];
        this.totalamount = 0;
        this.totalmonthamount = 0;
        this.expensetotalamount = 0;
        this.categorylist = [];
        this.limit = 4;
        this.monthlist = [];
        this.monthsArray = [];
        this.userid = '';
        this.accessToken = '';
        this.currency = new _helper_currency__WEBPACK_IMPORTED_MODULE_13__["Currency"]();
        this.name = "";
        this.osVersion = "";
        this.uuid = "";
        this.model = "";
        this.yearArray = [];
        this.dateformate = new _helper_date_format__WEBPACK_IMPORTED_MODULE_17__["DateFormat"]();
        this.platform.ready().then(function () {
            _this.osVersion = _this.device.version;
            _this.uuid = _this.device.uuid;
            _this.name = window.device.name;
            _this.model = _this.device.model;
            // init in Constructor
            _this.zip = new JSZip();
            console.log(_this.osVersion, _this.uuid, _this.name, _this.model);
        });
        this.route.params.subscribe(function (val) {
            // put the code from `ngOnInit` here
            _this.yearArray = _this.dateformate.getYearArray();
            _this.year = _this.yearArray[0];
            console.log('called router subscribe');
            _this.Init();
        });
        this.isFav = false;
        this.events.subscribe('receipt:deleted', function () {
            _this.lists = [];
            _this.monthAmountList = [];
        });
        this.events.subscribe('receipt:updated', function () {
            _this.lists = [];
            _this.monthAmountList = [];
            _this.viewreceipt();
        });
        this.events.subscribe('user:created', function () {
            _this.userid = _this.settingService.getUserId();
        });
        this.menuCtrl.enable(false);
        this.back = this.backStack.getBackStack('viewreceipt');
    }
    ViewreceiptPage.prototype.copyDB = function () {
        var context = this;
        this.sqliteDbCopy.copyDbToStorage('ionicdb.db', 0, this.file.documentsDirectory + 'RSM/', true)
            .then(function (res) {
            console.log('db backup created');
        })
            .catch(function (error) { return console.error(error); });
    };
    ViewreceiptPage.prototype.ngOnInit = function () {
    };
    ViewreceiptPage.prototype.Init = function () {
        this.categorylist = [
            { icon: 'Group 18.png', name: 'Cost of Goods Bought' },
            { icon: 'payment.png', name: 'CIS Payments to Subcontractors' },
            { icon: 'rating.png', name: 'Staff Costs' },
            { icon: 'suitcase.png', name: 'Travel Costs' },
            { icon: 'suitcase.png', name: 'Motor Expenses' },
            { icon: 'mortgage.png', name: 'Premises Running Costs' },
            { icon: 'fax.png', name: 'Phone Charges' },
            { icon: 'fax.png', name: 'Maintenance Cost' },
            { icon: 'accounting.png', name: 'Admin Costs' },
            { icon: 'accounting.png', name: 'Business Entertainment Costs' },
            { icon: 'megaphone.png', name: 'Advertising Costs' },
            { icon: 'tax.png', name: 'Interest' },
            { icon: 'transaction.png', name: 'Financial Charges' },
            { icon: 'debt.png', name: 'Bad Debt' },
            { icon: 'briefcase.png', name: 'Professional Fees' },
            { icon: 'transaction.png', name: 'Depreciation' },
            { icon: 'transaction.png', name: 'Other' },
            { icon: 'rating.png', name: 'To Review' },
        ];
        this.userid = this.settingService.getUserId();
        console.log('init receipt', this.userid, localStorage.getItem('init'));
        this.viewreceipt();
        this.getfav();
        if (this.platform.is('ios')) {
            this.copyDB();
        }
    };
    // custom loader show
    ViewreceiptPage.prototype.presentLoadingNew = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var context;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        context = this;
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
    ViewreceiptPage.prototype.dismissLoadingNew = function () {
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
    ViewreceiptPage.prototype.hidee = function (event) {
        // console.log(event);
        if ($(event).hasClass('popup-li')) {
            if ($(event).hasClass('upload')) {
                this.checklogin('viewreceipt');
            }
            else {
                this.checklogin('viewreceipt');
            }
            this.showpop = false;
        }
        else {
            this.showpop = false;
        }
    };
    ViewreceiptPage.prototype.addpop = function () {
        if (this.showpop === true) {
            this.showpop = false;
        }
        else {
            this.showpop = true;
        }
    };
    ViewreceiptPage.prototype.changeype = function (event) {
        this.filter = event.target.value;
        this.lists = [];
        this.monthAmountList = [];
        this.viewreceipt();
    };
    ViewreceiptPage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_9__["PopoverComponent"],
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ViewreceiptPage.prototype.convertToCSV = function () {
        try {
            var array = typeof this.csvlist != 'object' ? this.csvlist : this.csvlist;
            // add header
            var header = {
                id: 'Id', date: 'Transaction Date', amount: 'Total Amount', totalgst: 'Total GST Amount',
                claim_status: '100 % Claimable ?', tax_claim_value: 'Claimable Amount', description: 'Notes',
                expense_type: 'Expense Category', payment_type: 'Payment Method', image: 'Reference Image'
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
                    line_1 += array[i][index];
                }
                str += line_1 + '\r\n';
            }
            return str;
        }
        catch (error) {
            // console.log('convertToCSV error', error);
            return '';
        }
    };
    ViewreceiptPage.prototype.checklogin = function (pageurl, param) {
        if (param === void 0) { param = 'uploadtocloud'; }
        if (this.totalamount) {
            this.userData = this.settingService.getUserData();
            if (this.userData !== undefined && this.userData) {
                if (this.platform.is('ios')) {
                    // Export iOS
                    this.exportShare();
                }
                else {
                    this.exportAndroid();
                }
            }
            else {
                this.router.navigate(['/login'], {
                    queryParams: { data: pageurl }
                });
            }
        }
        else {
            alert('No data found. Please add expense to export.');
        }
    };
    ViewreceiptPage.prototype.month_name = function (dt) {
        this.mlist = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        return this.mlist[dt.getMonth()];
    };
    ViewreceiptPage.prototype.selectYear = function (event) {
        this.year = event.target.value;
        this.lists = [];
        this.monthAmountList = [];
        this.viewreceipt();
    };
    ViewreceiptPage.prototype.segmentChanged = function (ev) {
        console.log('Segment changed', ev);
    };
    ViewreceiptPage.prototype.goTo = function (url) {
        this.backStack.setBackStack(url, 'viewreceipt');
        this.navCtrl.navigateRoot('/' + url);
    };
    ViewreceiptPage.prototype.go = function (url, pagename, year) {
        var data = {
            pagename: pagename,
            year: year
        };
        this.router.navigate(['/' + url], {
            queryParams: { data: JSON.stringify(data) }
        });
    };
    ViewreceiptPage.prototype.catIcons = function (name) {
        var icon = '';
        this.categorylist.forEach(function (element) {
            if (element.name === name) {
                icon = element.icon;
            }
        });
        return icon;
    };
    // process Image for export data
    ViewreceiptPage.prototype.prepareAllImages = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var context;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        context = this;
                        return [4 /*yield*/, lodash__WEBPACK_IMPORTED_MODULE_16__["map"](this.lists, function (img, index) {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        console.log('init processing ...', context.file.dataDirectory + img.image);
                                        context.getFileContent(context.lists.length, context.file.dataDirectory + img.image, 'dataURL', function (base64Image) {
                                            console.log('init image processed');
                                            context.isImageProcessed = true;
                                            context.lists[index].imageData = base64Image.split(',')[1];
                                        });
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewreceiptPage.prototype.viewreceipt = function () {
        var _this = this;
        this.lists = [];
        this.totalamount = 0;
        this.expensetotalamount = 0;
        this.expenseslist = [];
        this.storageService.viewOcrYear(this.userid, this.year).then(function (res) {
            _this.lists = [];
            _this.csvlist = [];
            _this.monthAmountList = [];
            _this.monthstotalamount = 0;
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    var amountText = _this.currency.display(res.rows.item(i).amount);
                    var amountdatatofixed = parseFloat(res.rows.item(i).amount).toFixed(2);
                    var claimTaxReturnToFixed = parseFloat(res.rows.item(i).claim_tax_return).toFixed(2);
                    var viewImage = _this.webview.convertFileSrc(_this.file.dataDirectory + res.rows.item(i).image);
                    _this.lists.push({
                        id: res.rows.item(i).id,
                        image: res.rows.item(i).image,
                        fullimage: viewImage,
                        description: res.rows.item(i).description,
                        claim_status: res.rows.item(i).claim_status,
                        expense_type: res.rows.item(i).expense_type,
                        amount: amountdatatofixed,
                        amountText: amountText,
                        date: res.rows.item(i).date,
                        claim_tax_return: claimTaxReturnToFixed,
                        totalgst: res.rows.item(i).totalgst,
                        payment_type: res.rows.item(i).payment_type,
                        tax_claim_value: res.rows.item(i).claimtaxvalue,
                        tax_claim_type: res.rows.item(i).claimtaxtype,
                        month: res.rows.item(i).month,
                        imageData: ''
                    });
                    // csv data
                    var status_1 = '';
                    if (res.rows.item(i).claim_status === 'FALSE') {
                        status_1 = 'No';
                    }
                    else {
                        status_1 = 'Yes';
                    }
                    var dateFormat = new _helper_date_format__WEBPACK_IMPORTED_MODULE_17__["DateFormat"]();
                    _this.csvlist.push({
                        id: res.rows.item(i).id,
                        date: dateFormat.dateFormatter(res.rows.item(i).date, 'date'),
                        amount: amountdatatofixed,
                        totalgst: res.rows.item(i).totalgst,
                        claim_status: status_1,
                        claim_tax_return: res.rows.item(i).claim_tax_return,
                        description: res.rows.item(i).description,
                        expense_type: res.rows.item(i).expense_type,
                        payment_type: res.rows.item(i).payment_type,
                        image: res.rows.item(i).image
                    });
                    // end csv data
                }
                // totalamount
                _this.totalamount = _this.getTotalAmount(_this.lists);
                // expense list
                _this.expenseslist = [];
                _this.expensetotalamount = 0;
                _this.storageService.viewOcrExpense(_this.userid, _this.year).then(function (res) {
                    if (res.rows.length > 0) {
                        for (var i = 0; i < res.rows.length; i++) {
                            _this.expenseslist.push({
                                amount: parseFloat(res.rows.item(i).amount).toFixed(2),
                                amountText: _this.currency.display(res.rows.item(i).amount),
                                expense_type: res.rows.item(i).expense_type,
                                icon: _this.catIcons(res.rows.item(i).expense_type),
                            });
                        }
                        // console.log('this.expenseslist: ', this.expenseslist);
                        _this.totalamount = _this.getTotalAmount(_this.expenseslist);
                        // expensetotalamount
                        _this.expensetotalamount = _this.getTotalAmount(_this.expenseslist);
                    }
                });
                // end expense list
                // month list
                _this.monthAmountList = [];
                _this.monthstotalamount = 0;
                _this.storageService.viewOcrMonth(_this.userid, _this.year).then(function (res) {
                    if (res.rows.length > 0) {
                        for (var i = 0; i < res.rows.length; i++) {
                            _this.monthAmountList.push({
                                amount: parseFloat(res.rows.item(i).amount).toFixed(2),
                                amountText: _this.currency.display(res.rows.item(i).amount),
                                name: _this.month_name(new Date(res.rows.item(i).date)),
                                month: res.rows.item(i).month,
                            });
                        }
                        // console.log('this.monthAmountList: ', this.monthAmountList);
                        _this.totalamount = _this.getTotalAmount(_this.monthAmountList);
                        // monthstotalamount
                        _this.monthstotalamount = _this.getTotalAmount(_this.monthAmountList);
                    }
                });
                // end month list
                // get base64 data
                if (_this.platform.is('ios')) {
                    _this.prepareAllImages();
                }
            }
        }).catch(function (e) {
            _this.lists = [];
            // console.log(e);
        });
    };
    ViewreceiptPage.prototype.getTotalAmount = function (list) {
        var totalAmount = 0;
        list.forEach(function (ele) {
            totalAmount = (totalAmount + parseFloat(ele.amount));
        });
        if (isNaN(totalAmount)) {
            totalAmount = 0;
        }
        return this.currency.display(totalAmount);
    };
    ViewreceiptPage.prototype.presentLoading = function () {
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
    ViewreceiptPage.prototype.dismissLoading = function () {
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
    ViewreceiptPage.prototype.presentToast = function (msg) {
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
    ViewreceiptPage.prototype.addToFavourites = function (pagename, url) {
        var _this = this;
        this.isFav = true;
        this.storageService
            .addFavourites(pagename, url, 'receipt.png', this.userid, 1)
            .then(function (val) {
            _this.presentToast('Added to favourites');
            _this.events.publish('fav:created', Date.now());
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ViewreceiptPage.prototype.removefavourites = function (url) {
        var _this = this;
        this.storageService.removeFavourites(url, this.userid).then(function (res) {
            _this.getfav();
            _this.presentToast('Removed from favourites');
            _this.events.publish('fav:created', Date.now());
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    ViewreceiptPage.prototype.getfav = function () {
        var _this = this;
        this.storageService
            .getfavourites('viewreceipt', this.userid)
            .then(function (val) {
            if (val.rows.length > 0) {
                _this.isFav = true;
            }
            else {
                _this.isFav = false;
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ViewreceiptPage.prototype.details = function (data) {
        this.router.navigate(['/receiptdetail'], {
            queryParams: { data: JSON.stringify(data) }
        });
    };
    ViewreceiptPage.prototype.loadData = function (event) {
        this.limit += 2;
        if (this.lists.length <= this.limit) {
            this.show = false;
            event.target.disabled = true;
            event.target.complete();
        }
    };
    ViewreceiptPage.prototype.next = function (value) {
        var data = {
            year: this.year,
            category: value,
            type: this.filter
        };
        this.router.navigate(['/proffesionalfee'], {
            queryParams: {
                data: JSON.stringify(data)
            }
        });
    };
    // Android Export
    ViewreceiptPage.prototype.exportAndroid = function () {
        var _this = this;
        this.presentLoading();
        var csv = this.convertToCSV();
        this.file.createFile(this.file.externalDataDirectory + 'RSM/', 'managereceipt' + this.year + '.csv', true)
            .then(function (success) {
            console.log('success', success);
            _this.file.writeFile(_this.file.externalDataDirectory + 'RSM/', 'managereceipt' + _this.year + '.csv', csv, { replace: true })
                .then(function (success1) {
                console.log('success1', success1);
                _this.backupdbAndroid();
            }, function (error) {
                console.log('error1', error);
            }).catch(function (e) { return console.log('writeFile error', e); });
        }, function (reject) {
            console.log('createFile reject');
            console.log(JSON.stringify(reject));
        });
    };
    ViewreceiptPage.prototype.backupdbAndroid = function () {
        var _this = this;
        this.sqliteDbCopy.copyDbToStorage('ionicdb.db', 1, this.file.externalDataDirectory + 'RSM/', true)
            .then(function (res) {
            _this.createZipAndroid();
        })
            .catch(function (error) { return console.error(error); });
    };
    ViewreceiptPage.prototype.createZipAndroid = function () {
        var _this = this;
        var context = this;
        this.file.checkFile(this.file.externalDataDirectory, 'RSM.zip').then(function (success) {
            _this.file.removeFile(_this.file.externalDataDirectory, 'RSM.zip').then(function () {
                var PathToFileInString = _this.file.externalDataDirectory + 'RSM', PathToResultZip = _this.file.externalDataDirectory;
                JJzip.zip(PathToFileInString, { target: PathToResultZip, name: 'RSM' }, function (data) {
                    context.uploadAndroid(PathToResultZip);
                }, function (error) {
                    context.presentToast(error.message);
                    // console.log('err', error);
                });
            }, function (error) {
                console.log('rr', error);
            });
        }, function () {
            var PathToFileInString = _this.file.externalDataDirectory + 'RSM', PathToResultZip = _this.file.externalDataDirectory;
            JJzip.zip(PathToFileInString, { target: PathToResultZip, name: 'RSM' }, function (data) {
                context.uploadAndroid(PathToResultZip);
            }, function (error) {
                console.log('err', error);
            });
        });
    };
    ViewreceiptPage.prototype.uploadAndroid = function (data) {
        var context = this;
        this.file.checkFile(this.file.externalDataDirectory, 'RSM.zip').then(function (success) {
            var filePath = context.file.externalDataDirectory + 'RSM.zip';
            window.resolveLocalFileSystemURL(filePath, function gotFile(fileEntry) {
                fileEntry.file(function (file) {
                    var reader = new FileReader();
                    reader.onloadend = function () {
                        var content = this.result;
                        context.socialSharing.share('', 'RSM', content).then(function (res) {
                        }).catch(function (e) {
                            console.log('err', e);
                        });
                    };
                    reader.readAsDataURL(file);
                });
            }, function fail(e) {
                console.log('FileSystem Error');
                console.log(e);
            });
        });
    };
    // IOS Export
    // Create directory : TODO - common for crossplatform
    ViewreceiptPage.prototype.createDirIOSNew = function () {
        var _this = this;
        this.file.checkDir(this.file.documentsDirectory, 'RSM').then(function (success) {
            console.log('already created');
        }, function (error) {
            _this.file.createDir(_this.file.documentsDirectory, 'RSM', true).then(function (success) {
                console.log('directory created');
            }, function (err) {
                console.log('createDir error', JSON.stringify(err));
            });
        });
    };
    // ZONE.js unpatch file
    ViewreceiptPage.prototype.noZonePatch = function (status, cb) {
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
    ViewreceiptPage.prototype.getFileContent = function (status, path, mode, callback) {
        if (mode === void 0) { mode = 'dataURL'; }
        // console.log('getFileContent');
        var context = this;
        // console.log(path);
        // console.log(mode);
        // console.log('statussssssss', status);
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
                        // console.log(this);
                        // context.zone.run(() => {
                        // console.log('-----------------------------------------------');
                        var content = this.result;
                        // console.log(content);
                        callback(content);
                        // });
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
    // process Image for export data
    ViewreceiptPage.prototype.prepareImgData = function (callback) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var context, imgData, cnt, companyResp;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        context = this;
                        imgData = [];
                        cnt = 0;
                        return [4 /*yield*/, Promise.all(this.lists.map(function (img) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    if (!img.imageData) {
                                        context.getFileContent(context.lists.length, context.file.dataDirectory + img.image, 'dataURL', function (base64Image) {
                                            cnt++;
                                            // console.log('image processed');
                                            imgData.push({ name: img.image, data: base64Image.split(',')[1] });
                                            if (context.lists.length == cnt) {
                                                context.getFileContent(context.lists.length, context.file.documentsDirectory + 'RSM/ionicdb.db', 'dataURL', function (dbData) {
                                                    // console.log('db result');
                                                    // console.log(dbData);
                                                    imgData.push({ name: 'ionicdb.db', data: dbData.split(',')[1] });
                                                    callback(imgData);
                                                });
                                            }
                                        });
                                    }
                                    else {
                                        cnt++;
                                        console.log('base64 found');
                                        imgData.push({ name: img.image, data: img.imageData });
                                        if (context.lists.length == cnt) {
                                            context.getFileContent(context.lists.length, context.file.documentsDirectory + 'RSM/ionicdb.db', 'dataURL', function (dbData) {
                                                // console.log('db result');
                                                // console.log(dbData);
                                                imgData.push({ name: 'ionicdb.db', data: dbData.split(',')[1] });
                                                callback(imgData);
                                            });
                                        }
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
    ViewreceiptPage.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    // Export for iOS : TODO - make common for cross platform
    ViewreceiptPage.prototype.exportShare = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var callFun, context, csv_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                callFun = true;
                context = this;
                try {
                    this.presentLoadingNew();
                    this.createDirIOSNew();
                    this.copyDB();
                    csv_1 = context.convertToCSV();
                    // get BASE64 data of images
                    this.prepareImgData(function (imageData) {
                        // 1. CSV data
                        context.zip.file('managereceipt' + context.year + '.csv', csv_1);
                        // 2. DB
                        // 3. Images
                        imageData.forEach(function (img) {
                            context.zip.file(img.name, img.data, { base64: true });
                            // console.log(img.name);
                        });
                        context.zip.generateAsync({
                            type: "blob",
                            compression: "DEFLATE",
                            compressionOptions: {
                                level: 1
                            },
                            streamFiles: true
                        }).then(function (content) {
                            if (content) {
                                if (callFun) {
                                    // console.log('generateAsync');
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
    ViewreceiptPage.prototype.writeFileiOS = function (content) {
        var _this = this;
        var context = this;
        // console.log('writeFileiOS');
        this.file.createFile(this.file.documentsDirectory + 'RSM/', 'RSM.zip', true).then(function (success) {
            // console.log('success', success, this.file.documentsDirectory);
            context.file.writeFile(_this.file.documentsDirectory + 'RSM/', 'RSM.zip', content, { replace: true }).then(function (success) {
                // console.log('write file');
                // console.log(success);
                context.openZipiOS(success.nativeURL);
            }, function (error) {
                // console.log(error);
                context.presentToast('Failed to export the file');
            });
        }, function (error) {
            // console.log(error);
            context.presentToast('Failed to export the file');
        });
    };
    // Open sharing dialog
    ViewreceiptPage.prototype.openZipiOS = function (filePath) {
        var context = this;
        // console.log(filePath);
        this.dismissLoadingNew();
        this.socialSharing.share('', '', filePath).then(function (res) {
            console.log(res);
        }).catch(function (e) {
            // console.log('err', e);
            context.presentToast('Failed to export the file');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
    ], ViewreceiptPage.prototype, "infiniteScroll", void 0);
    ViewreceiptPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewreceipt',
            template: __webpack_require__(/*! ./viewreceipt.page.html */ "./src/app/viewreceipt/viewreceipt.page.html"),
            styles: [__webpack_require__(/*! ./viewreceipt.page.scss */ "./src/app/viewreceipt/viewreceipt.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_11__["PageTrack"])('Receipt Manager Screen'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_12__["SettingService"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__["WebView"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _service_back_stack_service__WEBPACK_IMPORTED_MODULE_14__["BackStackService"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"],
            _ionic_native_sqlite_db_copy_ngx__WEBPACK_IMPORTED_MODULE_8__["SqliteDbCopy"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_15__["Device"]
            // private base64: Base64,
        ])
    ], ViewreceiptPage);
    return ViewreceiptPage;
}());



/***/ })

}]);
//# sourceMappingURL=viewreceipt-viewreceipt-module.js.map