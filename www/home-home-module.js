(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                // ExpensePageModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"{{back}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add new receipt</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"failure\" padding *ngIf=\"error\" (click)=\"skip()\">\n    <div class=\"fail-detail\" padding>\n      <img src=\"../../assets/img/EmptyState2.png\">\n      <h4>Failed adding new receipt.</h4>\n      <p>Cannot add new receipt.<br>\n        Please try again</p>\n    </div>\n\n  </div>\n  <div class=\"addition\" padding *ngIf=\"uploadcamera == true\">\n    <div class=\"add-detail\" padding>\n      <div>\n        <span class=\"pull-right\" (click)=\"closeUploadCamera()\">X</span>\n        <h4>Upload from</h4>\n        <span>Select option</span>\n      </div>\n\n      <div class=\"camera-cap\" (click)=\"select_image('camera')\">\n        <img src=\"assets/icon/camera.png\">\n        <span>Capture from camera</span>\n      </div>\n      <div class=\"gallery-cap\" (click)=\"select_image('gallery')\">\n        <img src=\"assets/icon/gallery.png\">\n        <span>Upload from gallery</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"success\" padding *ngIf=\"showSuccess\">\n    <div class=\"success-detail\" padding>\n      <img src=\"assets/img/photocopy2.png\" *ngIf=\"!viewImage\">\n      <img src=\"{{viewImage}}\" *ngIf=\"viewImage\">\n      <p>You have successfully added<br /> a new receipt</p>\n      <ion-row class=\"success-btn\">\n        <ion-col no-padding size=\"12\" (click)=\"skip()\">\n          <p>Ok</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <div padding>\n    <div class=\"add-image\" padding (click)=\"presentActionSheet()\">\n      <img class=\"image-size\" src=\"../../assets/icon/picture.png\" *ngIf=\"!viewImage\">\n      <img class=\"add-image-auto\" [src]=\"getImgContent(viewImage)\" *ngIf=\"viewImage\">\n    </div>\n    <div class=\"error-message\">{{selectImageError}}</div>\n    <form [formGroup]=\"onAddForm\">\n      <div class=\"add-receipt-detail\">\n        <label for=\"amount\">Enter Amount</label>\n        <input type=\"number\" id=\"amount\" placeholder=\"Amount($)\" formControlName=\"amount\"\n          (keyup)=\"totalgst($event.target)\">\n        <ion-item no-padding lines=\"none\"\n          *ngIf=\"onAddForm.controls.amount.hasError('required') && onAddForm.controls.amount.touched\">\n          <p class=\"text08\"> Please enter amount.</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" no-padding\n          *ngIf=\"onAddForm.controls.amount.hasError('pattern') && onAddForm.controls.amount.touched\">\n\n          <p class=\"text08\">Amount must be contains numbers or two decimal digits!</p>\n        </ion-item>\n\n        <label for=\"gstamount\">Enter GST amount</label>\n        <input type=\"number\" id=\"gstamount\" placeholder=\"GST Amount($)\" formControlName=\"gstamount\">\n\n        <ion-item no-padding lines=\"none\"\n          *ngIf=\"onAddForm.controls.gstamount.hasError('required') && onAddForm.controls.gstamount.touched\">\n          <p class=\"text08\"> Please enter GST amount.</p>\n        </ion-item>\n        <ion-item lines=\"none\" no-padding\n          *ngIf=\"onAddForm.controls.gstamount.hasError('pattern') && onAddForm.controls.gstamount.touched\">\n\n          <p class=\"text08\">GST amount must be contains numbers or two decimal digits!</p>\n        </ion-item>\n        <label for=\"date\">Date</label>\n        <ion-datetime placeholder=\"Select Date\" display-format=\"DD/MM/YYYY\" id=\"date\" formControlName=\"date\"\n          [(ngModel)]=\"date\">\n        </ion-datetime>\n        <ion-item no-padding lines=\"none\"\n          *ngIf=\"onAddForm.controls.date.hasError('required') && onAddForm.controls.date.touched\">\n          <p class=\"text08\"> Please select date.</p>\n        </ion-item>\n\n        <label for=\"notes\">Notes</label>\n        <textarea id=\"notes\" placeholder=\"Description of expense\" formControlName=\"description\"></textarea>\n\n        <div class=\"toggle-content\">\n          <label for=\"claim\" class=\"togle\">Is this 100% claimable?</label>\n          <ion-toggle color=\"primary\" mode=\"md\" formControlName=\"claimable\" (ionChange)=\"claimcheck()\"></ion-toggle>\n        </div>\n        <div class=\"tax-return\"\n          [style.display]=\"(taxClaimType=='percentage' && taxClaimValue == 100)? 'none' : 'block' \">\n          <p>What can you claim your tax return?</p>\n          <ion-row>\n            <ion-col no-padding size=\"5\">\n              <input type=\"number\" placeholder=\"Amount(%)\" formControlName=\"gstamountper\"\n                (keyup)=\"claimtaxcheck($event.target)\">\n            </ion-col>\n            <ion-col no-padding size=\"2\">\n              <div class=\"text-or\">\n                <span>OR</span>\n              </div>\n            </ion-col>\n            <ion-col no-padding size=\"5\">\n              <input type=\"number\" placeholder=\"Amount($)\" formControlName=\"gstamountdol\"\n                (keyup)=\"claimtaxcheck1($event.target)\">\n            </ion-col>\n          </ion-row>\n        </div>\n        <div class=\"select-category\">\n          <label for=\"select\">Expense Category &nbsp; <ion-icon name=\"information-circle-outline\"\n              (click)=\"presentModal()\" style=\"vertical-align: bottom;\n          font-size: 18px;\"></ion-icon></label>\n          <ion-select id=\"select\" formControlName=\"expense_type\">\n            <ion-select-option value=\"\" disabled selected>Select Expense Type</ion-select-option>\n            <ion-select-option value=\"Cost of Goods Bought\">Cost of Goods Bought</ion-select-option>\n            <ion-select-option value=\"CIS Payments to Subcontractors\">CIS Payments to Subcontractors</ion-select-option>\n            <ion-select-option value=\"Staff Costs\">Staff Costs</ion-select-option>\n            <ion-select-option value=\"Travel Costs\">Travel Costs</ion-select-option>\n            <ion-select-option value=\"Motor Expenses\">Motor Expenses</ion-select-option>\n            <ion-select-option value=\"Premises Running Costs\">Premises Running Costs</ion-select-option>\n            <ion-select-option value=\"Phone Charges\">Phone Charges</ion-select-option>\n            <ion-select-option value=\"Maintenance Cost\">Maintenance Cost</ion-select-option>\n            <ion-select-option value=\"Admin Costs\">Admin Costs</ion-select-option>ion-select-option\n            <ion-select-option value=\"Business Entertainment Costs\">Business Entertainment Costs</ion-select-option>\n            <ion-select-option value=\"Advertising Costs\">Advertising Costs</ion-select-option>\n            <ion-select-option value=\"Financial Charges\">Financial Charges</ion-select-option>\n            <ion-select-option value=\"Bad Debt\">Bad Debt</ion-select-option>\n            <ion-select-option value=\"Professional Fees\">Professional Fees</ion-select-option>\n            <ion-select-option value=\"Depreciation\">Depreciation</ion-select-option>\n            <ion-select-option value=\"Other\">Other</ion-select-option>\n            <ion-select-option value=\"To Review\">To Review</ion-select-option>\n          </ion-select>\n\n          <ion-item no-padding lines=\"none\"\n            *ngIf=\"onAddForm.controls.expense_type.hasError('required') && onAddForm.controls.expense_type.touched\">\n            <p class=\"text08\"> Please select expense category.</p>\n          </ion-item>\n        </div>\n        <div class=\"payment-category\">\n          <label for=\"select\">payment method</label>\n          <ion-select id=\"select\" formControlName=\"payment_type\">\n            <ion-select-option value=\"\" disabled selected>Select payment Method</ion-select-option>\n            <ion-select-option value=\"Personal Cash\">Personal Cash</ion-select-option>\n            <ion-select-option value=\"Business Cash\">Business Cash</ion-select-option>\n            <ion-select-option value=\"Personal Bank Transfer\">Personal Bank Transfer</ion-select-option>\n            <ion-select-option value=\"Business Bank Transfer\">Business Bank Transfer</ion-select-option>\n            <ion-select-option value=\"Personal Debit Card\">Personal Debit Card</ion-select-option>\n            <ion-select-option value=\"Personal Credit Card\">Personal Credit Card</ion-select-option>\n            <ion-select-option value=\"Business Debit Card\">Business Debit Card</ion-select-option>\n            <ion-select-option value=\"Business Credit Card\">Business Credit Card</ion-select-option>\n          </ion-select>\n          <ion-item no-padding lines=\"none\"\n            *ngIf=\"onAddForm.controls.payment_type.hasError('required') && onAddForm.controls.payment_type.touched\">\n            <p class=\"text08\"> Please select payment method.</p>\n          </ion-item>\n        </div>\n        <div class=\"botm-btn\">\n          <ion-row>\n            <ion-col size=\"6\" (click)=\"cancel()\">\n              <ion-button color=\"medium\" class=\"ion-float-right\" mode=\"ios\">Cancel</ion-button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button expand=\"full\" color=\"primary\" expand=\"block\" (click)=\"checkfield()\"\n                [disabled]=\"!onAddForm.valid || checkamountbit == 1\" mode=\"ios\">Add Receipt\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </form>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-image {\n  text-align: center;\n  border: 1px dotted #8B8B8B;\n}\n\nimg.image-size {\n  width: 42px;\n}\n\nimg.add-image-auto {\n  max-width: 200px;\n  max-height: 200px;\n}\n\n.add-receipt-detail label {\n  color: #878C8E;\n  font-size: 12px;\n}\n\n.add-receipt-detail {\n  padding: 20px 0px;\n}\n\nion-datetime.datetime-placeholder {\n  padding-left: 0px;\n  color: #878C8E;\n  border-bottom: 1px solid #eaeaea;\n}\n\nion-select {\n  padding: 10px 4px 0;\n}\n\n.receipt-img img {\n  width: auto;\n  height: 226px;\n}\n\n.receipt-img {\n  background: #fff;\n  text-align: center;\n}\n\n.add-receipt-detail input {\n  display: block;\n  border: none;\n  font-size: 15px;\n  color: #2f2f2f;\n  width: 100%;\n  outline: none;\n  padding-bottom: 10px;\n  margin: 6px 0px 15px;\n  border-bottom: 1px solid #eaeaea;\n  background: white;\n}\n\n.add-receipt-detail ion-toggle {\n  float: right;\n  padding: 3px;\n}\n\nlabel.togle {\n  font-size: 15px !important;\n  color: #2f2f2f !important;\n}\n\n.add-receipt-detail textarea {\n  display: block;\n  border: none;\n  font-size: 15px;\n  margin: 6px 0px 15px;\n  border-bottom: 1px solid #eaeaea;\n  color: #2f2f2f;\n  width: 100%;\n  height: 40px;\n  outline: none;\n}\n\n.add-receipt-detail input::-moz-placeholder {\n  color: #878C8E;\n  font-size: 15px;\n}\n\n.add-receipt-detail input::placeholder {\n  color: #878C8E;\n  font-size: 15px;\n}\n\n.add-receipt-detail textarea::-moz-placeholder {\n  color: #878C8E;\n  font-size: 15px;\n}\n\n.add-receipt-detail textarea::placeholder {\n  color: #878C8E;\n  font-size: 15px;\n}\n\n.text-or {\n  text-align: center;\n  color: #878C8E;\n  font-size: 12px;\n  margin-top: 20px;\n}\n\n.tax-return {\n  margin-top: 30px;\n}\n\n.tax-return p {\n  margin: 0px 0px 10px;\n  font-size: 15px;\n}\n\n.tax-return input::-moz-placeholder {\n  color: #878C8E;\n  font-size: 12px;\n}\n\n.tax-return input::placeholder {\n  color: #878C8E;\n  font-size: 12px;\n}\n\n.toggle-icon:before, .toggle-inner {\n  left: 12px;\n  top: 1px;\n  width: 18px !important;\n  height: 18px !important;\n  position: absolute;\n}\n\n.select-category {\n  padding-bottom: 10px;\n  margin-top: 20px;\n  border-bottom: 1px solid #d8d8d8;\n}\n\n.payment-category {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #d8d8d8;\n}\n\n.botm-btn {\n  padding-top: 15px;\n}\n\n.fail-detail {\n  text-align: center;\n  background-color: white;\n}\n\n.fail-detail h4 {\n  font-weight: 600;\n  font-size: 18px;\n  color: #4A4A4A;\n  margin-top: 35px;\n}\n\n.fail-detail p {\n  color: #4A4A4A;\n  font-size: 18px;\n}\n\n.failure {\n  position: absolute;\n  width: 100%;\n  top: 27%;\n  z-index: 99;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.success {\n  position: fixed;\n  width: 100%;\n  z-index: 99;\n  height: 100%;\n  top: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.delete {\n  position: absolute;\n  width: 100%;\n  z-index: 99;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.addition {\n  position: absolute;\n  width: 100%;\n  z-index: 99;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.pull-right {\n  float: right;\n}\n\n.delete-detail {\n  background-color: white;\n}\n\n.add-detail {\n  background-color: white;\n}\n\n.success-detail {\n  text-align: center;\n  background-color: white;\n  margin-top: 35%;\n}\n\n.success-detail img {\n  max-height: 200px;\n  max-width: 200px;\n}\n\n.success-detail h4 {\n  font-weight: 600;\n  font-size: 18px;\n  color: #4A4A4A;\n  margin-top: 35px;\n}\n\n.success-detail p {\n  color: #4A4A4A;\n  font-size: 18px;\n}\n\n.success-btn {\n  background: #009cde;\n}\n\n.success-btn p {\n  color: #fff !important;\n  font-size: 16px !important;\n}\n\n.success-btn h5 {\n  color: #fff !important;\n  font-size: 21px !important;\n}\n\n.heart {\n  top: 28%;\n  position: absolute;\n  right: 33px;\n}\n\n.delete-detail h5 {\n  margin: 0px;\n  color: #FF3057;\n  font-size: 23px;\n}\n\n.delete-detail p {\n  color: #62666B;\n  font-size: 18px;\n}\n\nbutton.canclebtn {\n  background: transparent;\n  border: 1px solid #62666B;\n  padding: 10px 50px;\n  border-radius: 10px;\n  font-size: 18px;\n  color: #62666b;\n}\n\nbutton.deletebtn {\n  background: #FF3057;\n  padding: 10px 33px;\n  color: #fff;\n  border-radius: 10px;\n  font-size: 18px;\n  border: 1px solid #FF3057;\n}\n\n.camera-cap img {\n  width: 56px;\n  margin-right: 20px;\n  vertical-align: middle;\n}\n\n.gallery-cap img {\n  width: 56px;\n  margin-right: 20px;\n  vertical-align: middle;\n}\n\n.camera-cap {\n  margin: 20px 0px 10px;\n  padding-bottom: 10px;\n  border-bottom: 0.5px solid #878C8E;\n}\n\n.add-detail span {\n  font-size: 20px;\n  color: #62666B;\n}\n\n.add-detail h4 {\n  color: #2F2F2F;\n  font-size: 28px;\n  padding-bottom: 15px;\n}\n\n@media only screen and (max-width: 414px) {\n  .heart {\n    top: 31%;\n  }\n}\n\n@media only screen and (max-width: 411px) and (max-height: 731px) {\n  .heart {\n    top: 31%;\n  }\n}\n\n@media only screen and (max-width: 375px) and (max-height: 812px) {\n  .heart {\n    top: 26%;\n  }\n  button.canclebtn {\n    padding: 10px 44px;\n  }\n  button.deletebtn {\n    padding: 10px 24px;\n  }\n  .delete-detail p {\n    font-size: 16px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (max-height: 667px) {\n  .heart {\n    top: 31%;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  .heart {\n    top: 31%;\n  }\n  button.canclebtn {\n    padding: 10px 40px;\n  }\n  button.deletebtn {\n    padding: 10px 20px;\n  }\n  .delete-detail p {\n    font-size: 16px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .heart {\n    top: 30%;\n  }\n  button.canclebtn {\n    padding: 8px 30px;\n  }\n  button.deletebtn {\n    padding: 8px 10px;\n  }\n  .delete-detail p {\n    font-size: 14px;\n  }\n}\n\n.error-message {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FESEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNDSjs7QURIQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FESEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURhQTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ1ZKOztBRHVCQTtFQUNJLG9CQUFBO0VBQ0EsZ0NBQUE7QUNwQko7O0FEdUJBO0VBQ0ksaUJBQUE7QUNwQko7O0FEdUJBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNwQko7O0FEdUJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNwQko7O0FEdUJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNwQko7O0FEdUJBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSw4QkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDcEJKOztBRHVCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNwQko7O0FEdUJBO0VBQ0ksWUFBQTtBQ3BCSjs7QUR1QkE7RUFDSSx1QkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSx1QkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDcEJKOztBRHVCQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxtQkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxzQkFBQTtFQUNBLDBCQUFBO0FDcEJKOztBRHVCQTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7QUNwQko7O0FEdUJBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ3BCSjs7QUR1QkE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNwQko7O0FEdUJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNwQko7O0FEdUJBO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ3BCSjs7QUR1QkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDcEJKOztBRHVCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDcEJKOztBRHVCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDcEJKOztBRHVCQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtBQ3BCSjs7QUR1QkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ3BCSjs7QUR1QkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDcEJKOztBRHVCQTtFQUNJO0lBQ0ksUUFBQTtFQ3BCTjtBQUNGOztBRHVCQTtFQUNJO0lBQ0ksUUFBQTtFQ3JCTjtBQUNGOztBRHdCQTtFQUNJO0lBQ0ksUUFBQTtFQ3RCTjtFRHlCRTtJQUNJLGtCQUFBO0VDdkJOO0VEMEJFO0lBQ0ksa0JBQUE7RUN4Qk47RUQyQkU7SUFDSSxlQUFBO0VDekJOO0FBQ0Y7O0FENEJBO0VBQ0k7SUFDSSxRQUFBO0VDMUJOO0FBQ0Y7O0FENkJBO0VBQ0k7SUFDSSxRQUFBO0VDM0JOO0VEOEJFO0lBQ0ksa0JBQUE7RUM1Qk47RUQrQkU7SUFDSSxrQkFBQTtFQzdCTjtFRGdDRTtJQUNJLGVBQUE7RUM5Qk47QUFDRjs7QURpQ0E7RUFDSTtJQUNJLFFBQUE7RUMvQk47RURrQ0U7SUFDSSxpQkFBQTtFQ2hDTjtFRG1DRTtJQUNJLGlCQUFBO0VDakNOO0VEb0NFO0lBQ0ksZUFBQTtFQ2xDTjtBQUNGOztBRG9DQTtFQUNJLFVBQUE7QUNsQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1pbWFnZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IGRvdHRlZCAjOEI4QjhCO1xufVxuXG5pbWcuaW1hZ2Utc2l6ZSB7XG4gICAgd2lkdGg6IDQycHg7XG59XG5cbmltZy5hZGQtaW1hZ2UtYXV0byB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cblxuLmFkZC1yZWNlaXB0LWRldGFpbCBsYWJlbCB7XG4gICAgY29sb3I6ICM4NzhDOEU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYWRkLXJlY2VpcHQtZGV0YWlsIHtcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcbn1cblxuaW9uLWRhdGV0aW1lLmRhdGV0aW1lLXBsYWNlaG9sZGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBjb2xvcjogIzg3OEM4RTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcbn1cblxuaW9uLXNlbGVjdCB7XG4gICAgcGFkZGluZzogMTBweCA0cHggMDtcbn1cblxuLnJlY2VpcHQtaW1nIGltZyB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAyMjZweDtcbn1cblxuLnJlY2VpcHQtaW1nIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFkZC1yZWNlaXB0LWRldGFpbCBpbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzJmMmYyZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbjogNnB4IDBweCAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uYWRkLXJlY2VpcHQtZGV0YWlsIGlvbi10b2dnbGUge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nOiAzcHg7XG59XG5cbmxhYmVsLnRvZ2xlIHtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzJmMmYyZiAhaW1wb3J0YW50O1xufVxuXG4uYWRkLXJlY2VpcHQtZGV0YWlsIHRleHRhcmVhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjogNnB4IDBweCAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgIGNvbG9yOiAjMmYyZjJmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uYWRkLXJlY2VpcHQtZGV0YWlsIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM4NzhDOEU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uYWRkLXJlY2VpcHQtZGV0YWlsIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM4NzhDOEU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udGV4dC1vciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjODc4QzhFO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udGF4LXJldHVybiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnRheC1yZXR1cm4gcCB7XG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udGF4LXJldHVybiBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjODc4QzhFO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRvZ2dsZS1pY29uOmJlZm9yZSwgLnRvZ2dsZS1pbm5lciB7XG4gICAgbGVmdDogMTJweDtcbiAgICB0b3A6IDFweDtcbiAgICB3aWR0aDogMThweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLy8gLnNlbGVjdC1jYXRlZ29yeSBzZWxlY3Rcbi8vIHtcbi8vICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBib3JkZXI6IG5vbmU7XG4vLyAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XG4vLyAgICAgb3V0bGluZTogbm9uZTtcbi8vICAgICBiYWNrZ3JvdW5kOiBub25lO1xuLy8gICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuLy8gICAgIGZvbnQtc2l6ZTogMTVweDtcbi8vIH1cbi5zZWxlY3QtY2F0ZWdvcnkge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOGQ4ZDg7XG59XG5cbi8vIC5wYXltZW50LWNhdGVnb3J5IHNlbGVjdFxuLy8ge1xuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGJvcmRlcjogbm9uZTtcbi8vICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcbi8vICAgICBvdXRsaW5lOiBub25lO1xuLy8gICAgIGJhY2tncm91bmQ6IG5vbmU7XG4vLyAgICAgcGFkZGluZzogMTBweCAwcHg7XG4vLyB9XG4ucGF5bWVudC1jYXRlZ29yeSB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOGQ4ZDg7XG59XG5cbi5ib3RtLWJ0biB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi5mYWlsLWRldGFpbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uZmFpbC1kZXRhaWwgaDQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjNEE0QTRBO1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG59XG5cbi5mYWlsLWRldGFpbCBwIHtcbiAgICBjb2xvcjogIzRBNEE0QTtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5mYWlsdXJlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAyNyU7XG4gICAgei1pbmRleDogOTk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnN1Y2Nlc3Mge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmRlbGV0ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5hZGRpdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5wdWxsLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5kZWxldGUtZGV0YWlsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmFkZC1kZXRhaWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uc3VjY2Vzcy1kZXRhaWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAzNSU7XG59XG5cbi5zdWNjZXNzLWRldGFpbCBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG1heC13aWR0aDogMjAwcHg7XG59XG5cbi5zdWNjZXNzLWRldGFpbCBoNCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICM0QTRBNEE7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbn1cblxuLnN1Y2Nlc3MtZGV0YWlsIHAge1xuICAgIGNvbG9yOiAjNEE0QTRBO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnN1Y2Nlc3MtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA5Y2RlO1xufVxuXG4uc3VjY2Vzcy1idG4gcCB7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLnN1Y2Nlc3MtYnRuIGg1IHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjFweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhcnQge1xuICAgIHRvcDogMjglO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMzNweDtcbn1cblxuLmRlbGV0ZS1kZXRhaWwgaDUge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiAjRkYzMDU3O1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLmRlbGV0ZS1kZXRhaWwgcCB7XG4gICAgY29sb3I6ICM2MjY2NkI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5idXR0b24uY2FuY2xlYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjI2NjZCO1xuICAgIHBhZGRpbmc6IDEwcHggNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzYyNjY2Yjtcbn1cblxuYnV0dG9uLmRlbGV0ZWJ0biB7XG4gICAgYmFja2dyb3VuZDogI0ZGMzA1NztcbiAgICBwYWRkaW5nOiAxMHB4IDMzcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGMzA1Nztcbn1cblxuLmNhbWVyYS1jYXAgaW1nIHtcbiAgICB3aWR0aDogNTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmdhbGxlcnktY2FwIGltZyB7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jYW1lcmEtY2FwIHtcbiAgICBtYXJnaW46IDIwcHggMHB4IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzg3OEM4RTtcbn1cblxuLmFkZC1kZXRhaWwgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNjI2NjZCO1xufVxuXG4uYWRkLWRldGFpbCBoNCB7XG4gICAgY29sb3I6ICMyRjJGMkY7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gICAgLmhlYXJ0IHtcbiAgICAgICAgdG9wOiAzMSU7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMXB4KSBhbmQgKG1heC1oZWlnaHQ6IDczMXB4KSB7XG4gICAgLmhlYXJ0IHtcbiAgICAgICAgdG9wOiAzMSU7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1oZWlnaHQ6IDgxMnB4KSB7XG4gICAgLmhlYXJ0IHtcbiAgICAgICAgdG9wOiAyNiU7XG4gICAgfVxuXG4gICAgYnV0dG9uLmNhbmNsZWJ0biB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggNDRweDtcbiAgICB9XG5cbiAgICBidXR0b24uZGVsZXRlYnRuIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAyNHB4O1xuICAgIH1cblxuICAgIC5kZWxldGUtZGV0YWlsIHAge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1oZWlnaHQ6IDY2N3B4KSB7XG4gICAgLmhlYXJ0IHtcbiAgICAgICAgdG9wOiAzMSU7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgLmhlYXJ0IHtcbiAgICAgICAgdG9wOiAzMSU7XG4gICAgfVxuXG4gICAgYnV0dG9uLmNhbmNsZWJ0biB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggNDBweDtcbiAgICB9XG5cbiAgICBidXR0b24uZGVsZXRlYnRuIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIH1cblxuICAgIC5kZWxldGUtZGV0YWlsIHAge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgLmhlYXJ0IHtcbiAgICAgICAgdG9wOiAzMCU7XG4gICAgfVxuXG4gICAgYnV0dG9uLmNhbmNsZWJ0biB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgIH1cblxuICAgIGJ1dHRvbi5kZWxldGVidG4ge1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICB9XG5cbiAgICAuZGVsZXRlLWRldGFpbCBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbn1cbi5lcnJvci1tZXNzYWdle1xuICAgIGNvbG9yOiByZWQ7XG59IiwiLmFkZC1pbWFnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggZG90dGVkICM4QjhCOEI7XG59XG5cbmltZy5pbWFnZS1zaXplIHtcbiAgd2lkdGg6IDQycHg7XG59XG5cbmltZy5hZGQtaW1hZ2UtYXV0byB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuXG4uYWRkLXJlY2VpcHQtZGV0YWlsIGxhYmVsIHtcbiAgY29sb3I6ICM4NzhDOEU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmFkZC1yZWNlaXB0LWRldGFpbCB7XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xufVxuXG5pb24tZGF0ZXRpbWUuZGF0ZXRpbWUtcGxhY2Vob2xkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgY29sb3I6ICM4NzhDOEU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgcGFkZGluZzogMTBweCA0cHggMDtcbn1cblxuLnJlY2VpcHQtaW1nIGltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDIyNnB4O1xufVxuXG4ucmVjZWlwdC1pbWcge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hZGQtcmVjZWlwdC1kZXRhaWwgaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMmYyZjJmO1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIG1hcmdpbjogNnB4IDBweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5hZGQtcmVjZWlwdC1kZXRhaWwgaW9uLXRvZ2dsZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogM3B4O1xufVxuXG5sYWJlbC50b2dsZSB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzJmMmYyZiAhaW1wb3J0YW50O1xufVxuXG4uYWRkLXJlY2VpcHQtZGV0YWlsIHRleHRhcmVhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDZweCAwcHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XG4gIGNvbG9yOiAjMmYyZjJmO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYWRkLXJlY2VpcHQtZGV0YWlsIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODc4QzhFO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5hZGQtcmVjZWlwdC1kZXRhaWwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM4NzhDOEU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRleHQtb3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjODc4QzhFO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi50YXgtcmV0dXJuIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnRheC1yZXR1cm4gcCB7XG4gIG1hcmdpbjogMHB4IDBweCAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi50YXgtcmV0dXJuIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODc4QzhFO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50b2dnbGUtaWNvbjpiZWZvcmUsIC50b2dnbGUtaW5uZXIge1xuICBsZWZ0OiAxMnB4O1xuICB0b3A6IDFweDtcbiAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnNlbGVjdC1jYXRlZ29yeSB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcbn1cblxuLnBheW1lbnQtY2F0ZWdvcnkge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOGQ4ZDg7XG59XG5cbi5ib3RtLWJ0biB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4uZmFpbC1kZXRhaWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uZmFpbC1kZXRhaWwgaDQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNEE0QTRBO1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuXG4uZmFpbC1kZXRhaWwgcCB7XG4gIGNvbG9yOiAjNEE0QTRBO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5mYWlsdXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAyNyU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnN1Y2Nlc3Mge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmRlbGV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmFkZGl0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ucHVsbC1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmRlbGV0ZS1kZXRhaWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmFkZC1kZXRhaWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnN1Y2Nlc3MtZGV0YWlsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMzUlO1xufVxuXG4uc3VjY2Vzcy1kZXRhaWwgaW1nIHtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG5cbi5zdWNjZXNzLWRldGFpbCBoNCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG5cbi5zdWNjZXNzLWRldGFpbCBwIHtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnN1Y2Nlc3MtYnRuIHtcbiAgYmFja2dyb3VuZDogIzAwOWNkZTtcbn1cblxuLnN1Y2Nlc3MtYnRuIHAge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLnN1Y2Nlc3MtYnRuIGg1IHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFydCB7XG4gIHRvcDogMjglO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzM3B4O1xufVxuXG4uZGVsZXRlLWRldGFpbCBoNSB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogI0ZGMzA1NztcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG4uZGVsZXRlLWRldGFpbCBwIHtcbiAgY29sb3I6ICM2MjY2NkI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuYnV0dG9uLmNhbmNsZWJ0biB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjI2NjZCO1xuICBwYWRkaW5nOiAxMHB4IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM2MjY2NmI7XG59XG5cbmJ1dHRvbi5kZWxldGVidG4ge1xuICBiYWNrZ3JvdW5kOiAjRkYzMDU3O1xuICBwYWRkaW5nOiAxMHB4IDMzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRjMwNTc7XG59XG5cbi5jYW1lcmEtY2FwIGltZyB7XG4gIHdpZHRoOiA1NnB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5nYWxsZXJ5LWNhcCBpbWcge1xuICB3aWR0aDogNTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY2FtZXJhLWNhcCB7XG4gIG1hcmdpbjogMjBweCAwcHggMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICM4NzhDOEU7XG59XG5cbi5hZGQtZGV0YWlsIHNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNjI2NjZCO1xufVxuXG4uYWRkLWRldGFpbCBoNCB7XG4gIGNvbG9yOiAjMkYyRjJGO1xuICBmb250LXNpemU6IDI4cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gIC5oZWFydCB7XG4gICAgdG9wOiAzMSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDExcHgpIGFuZCAobWF4LWhlaWdodDogNzMxcHgpIHtcbiAgLmhlYXJ0IHtcbiAgICB0b3A6IDMxJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkgYW5kIChtYXgtaGVpZ2h0OiA4MTJweCkge1xuICAuaGVhcnQge1xuICAgIHRvcDogMjYlO1xuICB9XG4gIGJ1dHRvbi5jYW5jbGVidG4ge1xuICAgIHBhZGRpbmc6IDEwcHggNDRweDtcbiAgfVxuICBidXR0b24uZGVsZXRlYnRuIHtcbiAgICBwYWRkaW5nOiAxMHB4IDI0cHg7XG4gIH1cbiAgLmRlbGV0ZS1kZXRhaWwgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1oZWlnaHQ6IDY2N3B4KSB7XG4gIC5oZWFydCB7XG4gICAgdG9wOiAzMSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLmhlYXJ0IHtcbiAgICB0b3A6IDMxJTtcbiAgfVxuICBidXR0b24uY2FuY2xlYnRuIHtcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XG4gIH1cbiAgYnV0dG9uLmRlbGV0ZWJ0biB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICB9XG4gIC5kZWxldGUtZGV0YWlsIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAuaGVhcnQge1xuICAgIHRvcDogMzAlO1xuICB9XG4gIGJ1dHRvbi5jYW5jbGVidG4ge1xuICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICB9XG4gIGJ1dHRvbi5kZWxldGVidG4ge1xuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICB9XG4gIC5kZWxldGUtZGV0YWlsIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_native_sqlite_db_copy_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/sqlite-db-copy/ngx */ "./node_modules/@ionic-native/sqlite-db-copy/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _expense_expense_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../expense/expense.page */ "./src/app/expense/expense.page.ts");
/* harmony import */ var _disclaimer_disclaimer_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../disclaimer/disclaimer.page */ "./src/app/disclaimer/disclaimer.page.ts");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../popover/popover.component */ "./src/app/popover/popover.component.ts");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");
/* harmony import */ var _service_back_stack_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../service/back-stack.service */ "./src/app/service/back-stack.service.ts");
/* harmony import */ var _helper_constant__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../_helper/constant */ "./src/app/_helper/constant.ts");
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ "./node_modules/@ionic-native/unique-device-id/ngx/index.js");



























var HomePage = /** @class */ (function () {
    function HomePage(formBuilder, camera, actionSheetController, transfer, file, filePath, sqlite, webview, toastCtrl, navCtrl, uniqueDeviceID, googlePlus, http, socialSharing, storageService, settingService, sqliteDbCopy, base64, loadingController, modalController, popoverController, platform, backStack, sanitizer, location, pickerCtrl) {
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.sqlite = sqlite;
        this.webview = webview;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.uniqueDeviceID = uniqueDeviceID;
        this.googlePlus = googlePlus;
        this.http = http;
        this.socialSharing = socialSharing;
        this.storageService = storageService;
        this.settingService = settingService;
        this.sqliteDbCopy = sqliteDbCopy;
        this.base64 = base64;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.platform = platform;
        this.backStack = backStack;
        this.sanitizer = sanitizer;
        this.location = location;
        this.pickerCtrl = pickerCtrl;
        this.selectedImage = '';
        this.isLoading = false;
        this.error = false;
        this.any = false;
        this.viewImage = '';
        this.correctPath = '';
        this.currentName = '';
        this.items = [];
        this.accessToken = '';
        this.driveFileId = '';
        this.minDate = new Date();
        this.date = new Date().toISOString();
        this.userid = '';
        this.checkamountbit = 0;
        this.claimTaxAmount = '';
        this.showSuccess = false;
        this.selectImageError = '';
        this.storageService.createOcrTable().then(function (val) {
        }).catch(function (err) {
            console.log(err);
        });
        this.back = this.backStack.getBackStack('home');
    }
    HomePage.prototype.getImgContent = function (imgFile) {
        return this.sanitizer.bypassSecurityTrustUrl(imgFile);
    };
    HomePage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _expense_expense_page__WEBPACK_IMPORTED_MODULE_17__["ExpensePage"],
                            componentProps: { value: 123 }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.presentDisclaimerModal = function (image, formdata, claimTaxAmount) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newdata, modal, me;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newdata = {
                            image: image,
                            formdata: formdata,
                            claimTaxAmount: claimTaxAmount,
                            correctPath: this.correctPath,
                            currentName: this.currentName
                        };
                        return [4 /*yield*/, this.modalController.create({
                                component: _disclaimer_disclaimer_page__WEBPACK_IMPORTED_MODULE_18__["DisclaimerPage"],
                                componentProps: { value: JSON.stringify(newdata) }
                            })];
                    case 1:
                        modal = _a.sent();
                        me = this;
                        modal.onDidDismiss()
                            .then(function (data) {
                            // console.log('onDidDismiss:', data);
                            // me.showSuccess = true;
                            // console.log('me.showSuccess', me.showSuccess);
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_19__["PopoverComponent"],
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
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.onAddForm = this.formBuilder.group({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+(.[0-9]{1,2})?$')])),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            claimable: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            expense_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            gstamount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+(.[0-9]{1,2})?$')])),
            gstamountper: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            gstamountdol: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            payment_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]))
        });
        this.onAddForm.patchValue({
            claimable: true
        });
        this.claimcheck();
        this.createmultipleTables();
        this.userid = this.settingService.getUserId();
        this.file
            .checkDir(this.file.externalDataDirectory, 'RSM')
            .then(function (response) { })
            .catch(function (err) {
            console.log('Directory doesn\'t exist' + JSON.stringify(err));
            _this.file
                .createDir(_this.file.externalDataDirectory, 'RSM', false)
                .then(function (response) {
            })
                .catch(function (err) {
                console.log('Directory no create' + JSON.stringify(err));
            });
        });
        this.platform.ready().then(function () {
            _this.platform.backButton.subscribeWithPriority(9999, function () {
                _this.pickerCtrl.dismiss();
            });
        });
    };
    HomePage.prototype.skip = function () {
        this.viewImage = '';
        this.showSuccess = false;
        this.error = false;
        this.navCtrl.navigateRoot('/viewreceipt');
    };
    HomePage.prototype.cancel = function () {
        this.location.back();
        // this.onAddForm.reset();
    };
    HomePage.prototype.createmultipleTables = function () {
        this.storageService
            .createOcrTable()
            .then(function (val) {
            console.log(val);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.presentLoading = function () {
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
                                    console.log('presented');
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
    HomePage.prototype.dismissLoading = function () {
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
    HomePage.prototype.presentToast = function (msg) {
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
    HomePage.prototype.select_image = function (value) {
        if (value == 'camera') {
            this.getPicture(this.camera.PictureSourceType.CAMERA);
        }
        else {
            this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
    };
    HomePage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.selectedImage = '';
                this.viewImage = '';
                this.uploadcamera = true;
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.getPicture = function (sourceType) {
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
                    _this.copyFileToLocalDir(_this.correctPath, _this.currentName, _this.createFileName());
                });
            }
            else {
                _this.currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                _this.correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(_this.correctPath, _this.currentName, _this.createFileName());
            }
        }, function (err) {
            console.log('Error while selecting image.');
        });
    };
    // Create a new name for the image
    HomePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + '.jpg';
        return newFileName;
    };
    // Copy the image to a local folder
    HomePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file
            .copyFile(namePath, currentName, this.file.dataDirectory, newFileName)
            .then(function (success) {
            _this.selectedImage = newFileName;
            _this.pathForImage(_this.selectedImage);
        }, function (error) {
            console.log('Error while storing file.');
        });
    };
    // Always get the accurate path to your apps folder
    HomePage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            this.viewImage = this.webview.convertFileSrc(this.file.dataDirectory + img);
            this.selectImageError = '';
        }
        this.uploadcamera = false;
    };
    HomePage.prototype.checkfield = function () {
        if (this.onAddForm.value.gstamountdol === '' && this.onAddForm.value.gstamountper === '' && this.onAddForm.value.claimable === false) {
            this.presentToast('Please add tax(% or $) ');
        }
        else if (this.selectedImage == '') {
            this.selectImageError = 'Please upload the receipt';
        }
        else {
            this.saveDetail();
        }
    };
    HomePage.prototype.closeUploadCamera = function () {
        this.uploadcamera = false;
    };
    HomePage.prototype.saveDetail = function () {
        var _this = this;
        if (this.settingService.getDisclaimer() === false) {
            this.uploadcamera = false;
            this.presentDisclaimerModal(this.selectedImage, this.onAddForm.value, this.claimTaxAmount);
            this.onAddForm.reset();
            this.selectedImage = '';
            this.viewImage = '';
        }
        else {
            this.uploadcamera = false;
            this.taxClaimType = 'fixed';
            this.taxClaimAmount = 0;
            this.taxClaimValue = 0;
            if (this.onAddForm.value.claimable === true) {
                this.taxClaimType = 'percentage';
                var amount = !isNaN(parseFloat(this.onAddForm.value.amount)) ? parseFloat(this.onAddForm.value.amount) : 0;
                this.taxClaimValue = 100;
                this.taxClaimAmount = amount;
            }
            else {
                if (this.onAddForm.value.gstamountper !== '') {
                    var cAmount = parseInt(this.onAddForm.value.gstamountper);
                    var amount = !isNaN(parseFloat(this.onAddForm.value.amount)) ? parseFloat(this.onAddForm.value.amount) : 0;
                    this.taxClaimValue = !isNaN(cAmount) ? cAmount : 0;
                    this.taxClaimAmount = (amount * this.taxClaimValue) / 100;
                    this.taxClaimAmount = parseFloat((this.taxClaimAmount).toFixed(2));
                    this.taxClaimType = 'percentage';
                }
                else if (this.onAddForm.value.gstamountdol != '') {
                    var cAmount = !isNaN(parseInt(this.onAddForm.value.gstamountdol))
                        ? parseInt(this.onAddForm.value.gstamountdol)
                        : 0;
                    this.taxClaimAmount = parseFloat(cAmount.toFixed(2));
                    this.taxClaimValue = this.taxClaimAmount;
                    this.taxClaimType = 'fixed';
                }
            }
            if (parseInt(this.onAddForm.value.amount) < parseInt(this.taxClaimAmount)) {
                this.presentToast('Tax return value cannot be greater than amount');
            }
            else {
                this.uniqueDeviceID
                    .get()
                    .then(function (uuid) {
                    console.log("uuid", uuid);
                    _this.sqlite
                        .create({
                        name: 'ionicdb.db',
                        location: 'default',
                        key: uuid + ':' + _helper_constant__WEBPACK_IMPORTED_MODULE_24__["constant"].secretKey
                    })
                        .then(function (db) {
                        _this.createmultipleTables();
                        db.executeSql('INSERT INTO ocr VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?,?,?)', [
                            _this.selectedImage,
                            _this.onAddForm.value.amount,
                            _this.onAddForm.value.description,
                            _this.onAddForm.value.date,
                            _this.onAddForm.value.claimable,
                            _this.onAddForm.value.expense_type,
                            _this.file.externalDataDirectory + 'RSM/',
                            _this.onAddForm.value.gstamount,
                            _this.taxClaimAmount,
                            _this.onAddForm.value.payment_type,
                            _this.userid,
                            _this.taxClaimValue,
                            _this.taxClaimType
                        ])
                            .then(function (res) {
                            _this.createDirectory(_this.selectedImage);
                            _this.showSuccess = true;
                            _this.selectedImage = '';
                            _this.onAddForm.reset();
                            _this.view(_this.userid);
                        })
                            .catch(function (e) {
                            _this.error = true;
                            console.log(e);
                        });
                    })
                        .catch(function (e) {
                        console.log(e);
                    });
                })
                    .catch(function (error) { return console.log(error); });
            }
        }
    };
    HomePage.prototype.view = function (userid) {
        var _this = this;
        this.uniqueDeviceID
            .get()
            .then(function (uuid) {
            console.log("uuid", uuid);
            _this.sqlite.create({
                name: 'ionicdb.db',
                location: 'default',
                key: uuid + ':' + _helper_constant__WEBPACK_IMPORTED_MODULE_24__["constant"].secretKey
            }).then(function (db) {
                db.executeSql('SELECT * FROM ocr WHERE userid = ?', [userid])
                    .then(function (res) {
                    _this.items = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        _this.items.push({
                            id: res.rows.item(i).id, userid: res.rows.item(i).userid, image: res.rows.item(i).image,
                            amount: res.rows.item(i).amount, description: res.rows.item(i).description, date: res.rows.item(i).date,
                            claimable: res.rows.item(i).claim_status, expense_type: res.rows.item(i).expense_type,
                            filepath: res.rows.item(i).filepath, payment_type: res.rows.item(i).payment_type,
                            totalgst: res.rows.item(i).totalgst
                        });
                    }
                })
                    .catch(function (e) { return console.log(e); });
            }).catch(function (e) {
                console.log(e);
            });
        })
            .catch(function (error) { return console.log(error); });
    };
    HomePage.prototype.createDirectory = function (refImageName) {
        var _this = this;
        this.file
            .checkDir(this.file.externalDataDirectory, 'RSM')
            .then(function (response) {
            _this.file
                .copyFile(_this.correctPath, _this.currentName, _this.file.externalDataDirectory + 'RSM/', refImageName)
                .then(function (success) {
                console.log('success', success);
            }, function (error) {
                console.log('Error while storing file.');
            });
        })
            .catch(function (err) {
            console.log('Directory doesn\'t exist' + JSON.stringify(err));
            _this.file
                .createDir(_this.file.externalDataDirectory, 'RSM', false)
                .then(function (response) {
                console.log('Directory create' + response);
                // Copy the image to a local folder
                _this.file
                    .copyFile(_this.correctPath, _this.currentName, _this.file.externalDataDirectory + 'RSM', refImageName)
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
    HomePage.prototype.backup = function () {
        var _this = this;
        this.presentLoading();
        if (this.settingService.getUserId() &&
            this.settingService.getUserId() !== undefined) {
            this.backupdb();
        }
        else {
            this.googlePlus
                .login({
                scopes: 'https://www.googleapis.com/auth/drive.file'
            })
                .then(function (res) {
                _this.settingService.setUserData(res);
                _this.accessToken = res.accessToken;
                _this.backupdb();
            })
                .catch(function (err) { return console.error('err', err); });
        }
    };
    HomePage.prototype.backupdb = function () {
        var _this = this;
        this.sqliteDbCopy
            .copy('ionicdb.db', 1)
            .then(function (res) { return console.log(res); })
            .catch(function (error) { return console.error(error); });
        this.sqliteDbCopy
            .copyDbToStorage('ionicdb.db', 1, this.file.externalDataDirectory + 'RSM/', true)
            .then(function (res) {
            _this.createZip();
            // console.log(res);
        })
            .catch(function (error) { return console.error(error); });
    };
    HomePage.prototype.createZip = function () {
        var _this = this;
        var context = this;
        this.file.checkFile(this.file.externalDataDirectory, 'RSM.zip').then(function (success) {
            console.log('success', success);
            _this.file.removeFile(_this.file.externalDataDirectory, 'RSM.zip').then(function (success) {
                var PathToFileInString = _this.file.externalDataDirectory + 'RSM', PathToResultZip = _this.file.externalDataDirectory;
                JJzip.zip(PathToFileInString, { target: PathToResultZip, name: 'RSM' }, function (data) {
                    context.upload(PathToResultZip);
                }, function (error) {
                    context.presentToast(error.message);
                    console.log('err', error);
                });
            }, function (error) {
                console.log('rr', error);
            });
        }, function (error) {
            var PathToFileInString = _this.file.externalDataDirectory + 'RSM', PathToResultZip = _this.file.externalDataDirectory;
            JJzip.zip(PathToFileInString, { target: PathToResultZip, name: 'RSM' }, function (data) {
                context.upload(PathToResultZip);
            }, function (error) {
                console.log('err', error);
            });
        });
    };
    HomePage.prototype.upload = function (data) {
        var context = this;
        this.file
            .checkFile(this.file.externalDataDirectory, 'RSM.zip')
            .then(function (success) {
            var filePath = context.file.externalDataDirectory + 'RSM.zip';
            context.base64.encodeFile(filePath).then(function (base64File) {
                context.dismissLoading();
                context.socialSharing
                    .share('', '', base64File)
                    .then(function (res) {
                })
                    .catch(function (e) {
                    console.log('err', e);
                });
            }, function (err) {
                console.log(err);
            });
        });
    };
    HomePage.prototype.goto = function () {
        this.navCtrl.navigateRoot('/location');
    };
    HomePage.prototype.totalgst = function (event) {
        if (event.value.length) {
            this.onAddForm.patchValue({
                gstamount: ((parseFloat(event.value) * 10) / 100).toFixed(2)
            });
        }
        else {
            this.onAddForm.patchValue({
                gstamount: 0
            });
        }
    };
    HomePage.prototype.claimcheck = function () {
        if (this.onAddForm.value.claimable === false) {
            // this.tax_claim_value < 100;
            this.taxClaimType = 'fixed';
            this.show = true;
        }
        else {
            this.taxClaimValue = 100;
            this.taxClaimType = 'percentage';
            this.show = false;
        }
    };
    HomePage.prototype.claimtaxcheck = function (event) {
        if (this.onAddForm.value.gstamountdol === '' && event.value === '') {
            this.presentToast('Please add tax(% or $) ');
        }
        else {
            if (event.value.length) {
                this.onAddForm.patchValue({
                    gstamountdol: ''
                });
            }
        }
    };
    HomePage.prototype.claimtaxcheck1 = function (event) {
        if (event.value === '' && this.onAddForm.value.gstamountper === '') {
            this.presentToast('Please add tax(% or $) ');
        }
        else {
            if (event.value.length) {
                this.onAddForm.patchValue({
                    gstamountper: ''
                });
            }
        }
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.pickerCtrl.dismiss();
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_20__["PageTrack"])('Add New Receipt Screen'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__["FilePath"],
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_9__["SQLite"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
            _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_25__["UniqueDeviceID"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_11__["GooglePlus"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_13__["SocialSharing"],
            _storage_service__WEBPACK_IMPORTED_MODULE_14__["StorageService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_22__["SettingService"],
            _ionic_native_sqlite_db_copy_ngx__WEBPACK_IMPORTED_MODULE_15__["SqliteDbCopy"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_16__["Base64"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"],
            _service_back_stack_service__WEBPACK_IMPORTED_MODULE_23__["BackStackService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["DomSanitizer"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PickerController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map