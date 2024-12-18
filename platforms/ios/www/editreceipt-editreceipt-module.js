(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editreceipt-editreceipt-module"],{

/***/ "./src/app/editreceipt/editreceipt.module.ts":
/*!***************************************************!*\
  !*** ./src/app/editreceipt/editreceipt.module.ts ***!
  \***************************************************/
/*! exports provided: EditreceiptPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditreceiptPageModule", function() { return EditreceiptPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editreceipt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editreceipt.page */ "./src/app/editreceipt/editreceipt.page.ts");







var routes = [
    {
        path: '',
        component: _editreceipt_page__WEBPACK_IMPORTED_MODULE_6__["EditreceiptPage"]
    }
];
var EditreceiptPageModule = /** @class */ (function () {
    function EditreceiptPageModule() {
    }
    EditreceiptPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_editreceipt_page__WEBPACK_IMPORTED_MODULE_6__["EditreceiptPage"]]
        })
    ], EditreceiptPageModule);
    return EditreceiptPageModule;
}());



/***/ }),

/***/ "./src/app/editreceipt/editreceipt.page.html":
/*!***************************************************!*\
  !*** ./src/app/editreceipt/editreceipt.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"receiptdetail\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Receipt</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"failure\" padding *ngIf=\"error\" (click)=\"skip()\">\n    <div class=\"fail-detail\" padding>\n      <img src=\"../../assets/img/EmptyState2.png\">\n      <h4>Failed adding new receipt.</h4>\n      <p>Cannot add new receipt.<br>\n        Please try again</p>\n    </div>\n  </div>\n\n  <div class=\"addition\" padding *ngIf=\"uploadcamera == true\">\n    <div class=\"add-detail\" padding>\n      <div>\n        <span class=\"pull-right\" (click)=\"closeUploadCamera()\">X</span>\n        <h4>Upload from</h4>\n        <span>Select option</span>\n      </div>\n      <div class=\"camera-cap\" (click)=\"select_image('camera')\">\n        <img src=\"assets/icon/camera.png\">\n        <span>Capture from camera</span>\n      </div>\n      <div class=\"gallery-cap\" (click)=\"select_image('gallery')\">\n        <img src=\"assets/icon/gallery.png\">\n        <span>Upload from gallery</span>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"success\" padding id=\"success\">\n    <div class=\"success-detail\">\n\n      <img src=\"assets/img/photocopy2.png\" *ngIf=\"!viewImage\">\n      <img [src]=\"getImgContent(viewImage)\" *ngIf=\"viewImage\"\n        onerror=\"this.onerror=null;this.src='../../assets/img/photocopy2.png';\">\n\n      <p>You have successfully updated<br /> a receipt</p>\n\n      <ion-row class=\"success-btn\">\n        <ion-col no-padding size=\"12\" (click)=\"skip()\">\n          <p>Ok</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div padding>\n    <div class=\"add-image\" padding (click)=\"presentActionSheet()\">\n      <ion-icon name=\"create\"></ion-icon>\n      <img src=\"../../assets/icon/picture.png\" *ngIf=\"!viewImage\">\n      <img class=\"add-image-auto\" [src]=\"getImgContent(viewImage)\" *ngIf=\"viewImage\"\n        onerror=\"this.onerror=null;this.src='../../assets/img/photocopy2.png';\">\n\n    </div>\n    <div class=\"error-message\">{{selectImageError}}</div>\n    <form [formGroup]=\"onAddForm\">\n      <div class=\"add-receipt-detail\">\n\n        <label for=\"amount\">Enter Amount</label>\n        <input type=\"number\" placeholder=\"Amount($)\" formControlName=\"amount\" (keyup)=\"totalgst($event.target)\"\n          [(ngModel)]=\"amount\">\n        <ion-item no-padding lines=\"none\"\n          *ngIf=\"onAddForm.controls.amount.hasError('required') && onAddForm.controls.amount.touched\">\n          <p class=\"text08\"> Please enter amount.</p>\n        </ion-item>\n\n        <label for=\"gstamount\">Enter GST amount</label>\n        <input type=\"number\" placeholder=\"Amount($)\" formControlName=\"gstamount\" [(ngModel)]=\"gstamount\">\n\n        <ion-item no-padding lines=\"none\"\n          *ngIf=\"onAddForm.controls.gstamount.hasError('required') && onAddForm.controls.gstamount.touched\">\n          <p class=\"text08\"> Please enter GST amount.</p>\n        </ion-item>\n\n        <label for=\"date\">Date</label>\n        <ion-datetime display-format=\"DD/MM/YYYY\" placeholder=\"Select Date\" formControlName=\"date\" [(ngModel)]=\"date\">\n        </ion-datetime>\n\n        <ion-item no-padding lines=\"none\"\n          *ngIf=\"onAddForm.controls.date.hasError('required') && onAddForm.controls.date.touched\">\n          <p class=\"text08\"> Please slect date.</p>\n        </ion-item>\n\n        <label for=\"notes\">Notes</label>\n        <textarea placeholder=\"Description of expense\" formControlName=\"description\"\n          [(ngModel)]=\"description\"></textarea>\n\n        <div class=\"toggle-content\">\n          <label for=\"claim\" class=\"togle\">Is this 100% claimable?</label>\n          <ion-toggle color=\"primary\" formControlName=\"claimable\" (ionChange)=\"claimcheck()\" [(ngModel)]=\"claimable\">\n          </ion-toggle>\n        </div>\n\n        <div class=\"tax-return\"\n          [style.display]=\"(taxClaimType == 'percentage' && taxClaimValue == 100)? 'none' : 'block' \">\n          <p>What can you claim your tax return?</p>\n          <ion-row>\n            <ion-col no-padding size=\"5\">\n              <input type=\"number\" placeholder=\"Amount(%)\" formControlName=\"gstamountper\"\n                (keyup)=\"claimtaxcheck($event.target)\" [(ngModel)]=\"gstamountper\">\n            </ion-col>\n            <ion-col no-padding size=\"2\">\n              <div class=\"text-or\">\n                <span>OR</span>\n              </div>\n            </ion-col>\n            <ion-col no-padding size=\"5\">\n              <input type=\"number\" placeholder=\"Amount($)\" formControlName=\"gstamountdol\"\n                (keyup)=\"claimtaxcheck1($event.target)\" [(ngModel)]=\"gstamountdol\">\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <div class=\"select-category\">\n          <label for=\"select\">Expense Category &nbsp; <ion-icon name=\"information-circle-outline\"\n              (click)=\"presentModal()\" style=\"vertical-align: bottom;\n            font-size: 18px;\"></ion-icon></label>\n          <ion-select formControlName=\"expenseType\" [(ngModel)]=\"expenseType\">\n            <ion-select-option value=\"\" disabled selected>Select Expense Type</ion-select-option>\n            <ion-select-option value=\"Cost of Goods Bought\">Cost of Goods Bought</ion-select-option>\n            <ion-select-option value=\"CIS Payments to Subcontractors\">CIS Payments to Subcontractors</ion-select-option>\n            <ion-select-option value=\"Staff Costs\">Staff Costs</ion-select-option>\n            <ion-select-option value=\"Travel Costs\">Travel Costs</ion-select-option>\n            <ion-select-option value=\"Motor Expenses\">Motor Expenses</ion-select-option>\n            <ion-select-option value=\"Premises Running Costs\">Premises Running Costs</ion-select-option>\n            <ion-select-option value=\"Phone Charges\">Phone Charges</ion-select-option>\n            <ion-select-option value=\"Maintenance Cost\">Maintenance Cost</ion-select-option>\n            <ion-select-option value=\"Admin Costs\">Admin Costs</ion-select-option>\n            <ion-select-option value=\"Business Entertainment Costs\">Business Entertainment Costs</ion-select-option>\n            <ion-select-option value=\"Advertising Costs\">Advertising Costs</ion-select-option>\n            <ion-select-option value=\"Financial Charges\">Financial Charges</ion-select-option>\n            <ion-select-option value=\"Bad Debt\">Bad Debt</ion-select-option>\n            <ion-select-option value=\"Professional Fees\">Professional Fees</ion-select-option>\n            <ion-select-option value=\"Depreciation\">Depreciation</ion-select-option>\n            <ion-select-option value=\"Other\">Other</ion-select-option>\n            <ion-select-option value=\"To Review\">To Review</ion-select-option>\n          </ion-select>\n\n          <ion-item lines=\"none\" no-padding\n            *ngIf=\"onAddForm.controls.expenseType.hasError('required') && onAddForm.controls.expenseType.touched\">\n            <p class=\"text08\"> Please select expense category.</p>\n          </ion-item>\n        </div>\n\n        <div class=\"payment-category\">\n          <label for=\"select\">payment method</label>\n          <ion-select formControlName=\"paymentType\" [(ngModel)]=\"paymentType\">\n            <ion-select-option value=\"\" disabled selected>Select payment Method</ion-select-option>\n            <ion-select-option value=\"Personal Cash\">Personal Cash</ion-select-option>\n            <ion-select-option value=\"Business Cash\">Business Cash</ion-select-option>\n            <ion-select-option value=\"Personal Bank Transfer\">Personal Bank Transfer</ion-select-option>\n            <ion-select-option value=\"Business Bank Transfer\">Business Bank Transfer</ion-select-option>\n            <ion-select-option value=\"Personal Debit Card\">Personal Debit Card</ion-select-option>\n            <ion-select-option value=\"Personal Credit Card\">Personal Credit Card</ion-select-option>\n            <ion-select-option value=\"Business Debit Card\">Business Debit Card</ion-select-option>\n            <ion-select-option value=\"Business Credit Card\">Business Credit Card</ion-select-option>\n          </ion-select>\n          <ion-item lines=\"none\" no-padding\n            *ngIf=\"onAddForm.controls.paymentType.hasError('required') && onAddForm.controls.paymentType.touched\">\n            <p class=\"text08\"> Please select payment method.</p>\n          </ion-item>\n        </div>\n\n        <div class=\"botm-btn\">\n          <ion-row>\n            <ion-col size=\"6\" (click)=\"cancel()\">\n              <ion-button color=\"medium\" class=\"ion-float-right\" mode=\"ios\">Cancel</ion-button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button expand=\"full\" color=\"primary\" expand=\"block\" (click)=\"checkfield()\"\n                [disabled]=\"!onAddForm.valid || checkamountbit == 1\" mode=\"ios\">Save Receipt\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n\n      </div>\n    </form>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/editreceipt/editreceipt.page.scss":
/*!***************************************************!*\
  !*** ./src/app/editreceipt/editreceipt.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-image {\n  text-align: center;\n  border: 1px dotted #8B8B8B;\n}\n\n.add-receipt-detail label {\n  color: #878C8E;\n  font-size: 12px;\n}\n\n.add-receipt-detail {\n  padding: 20px 0px;\n}\n\nion-datetime.datetime-placeholder {\n  padding-left: 0px;\n  color: #878C8E;\n  border-bottom: 1px solid #eaeaea;\n}\n\n.add-receipt-detail input {\n  display: block;\n  border: none;\n  font-size: 15px;\n  color: #2f2f2f;\n  width: 100%;\n  outline: none;\n  padding-bottom: 15px;\n  margin: 6px 0px 15px;\n  border-bottom: 1px solid #eaeaea;\n  background: white;\n}\n\n.add-receipt-detail ion-toggle {\n  float: right;\n  padding: 3px;\n}\n\nlabel.togle {\n  font-size: 15px !important;\n  color: #2f2f2f !important;\n}\n\n.add-receipt-detail textarea {\n  display: block;\n  border: none;\n  font-size: 15px;\n  padding-bottom: 15px;\n  margin: 6px 0px 15px;\n  border-bottom: 1px solid #eaeaea;\n  color: #2f2f2f;\n  width: 100%;\n  height: 40px;\n  outline: none;\n}\n\n.add-receipt-detail input::-moz-placeholder {\n  color: #878C8E;\n  font-size: 15px;\n}\n\n.add-receipt-detail input::placeholder {\n  color: #878C8E;\n  font-size: 15px;\n}\n\n.add-receipt-detail textarea::-moz-placeholder {\n  color: #878C8E;\n  font-size: 15px;\n}\n\n.add-receipt-detail textarea::placeholder {\n  color: #878C8E;\n  font-size: 15px;\n}\n\n.text-or {\n  text-align: center;\n  color: #878C8E;\n  font-size: 12px;\n  margin-top: 12px;\n}\n\n.tax-return {\n  margin-top: 30px;\n}\n\n.tax-return p {\n  margin: 0px 0px 10px;\n  font-size: 15px;\n}\n\n.tax-return input::-moz-placeholder {\n  color: #878C8E;\n  font-size: 12px;\n}\n\n.tax-return input::placeholder {\n  color: #878C8E;\n  font-size: 12px;\n}\n\n.select-category {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #d8d8d8;\n}\n\nion-select {\n  padding: 10px 4px 0;\n}\n\n.payment-category {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #d8d8d8;\n}\n\n.botm-btn {\n  padding-top: 15px;\n}\n\n.fail-detail {\n  text-align: center;\n  background-color: white;\n}\n\n.fail-detail h4 {\n  font-weight: 600;\n  font-size: 18px;\n  color: #4A4A4A;\n  margin-top: 35px;\n}\n\n.fail-detail p {\n  color: #4A4A4A;\n  font-size: 18px;\n}\n\n.failure {\n  position: absolute;\n  width: 100%;\n  z-index: 99;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.success {\n  position: fixed;\n  width: 100%;\n  z-index: 99;\n  height: 100%;\n  top: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.success-detail img {\n  max-width: 200px;\n  max-height: 200px;\n  padding-top: 10px;\n}\n\nimg.add-image-auto {\n  max-width: 200px;\n  max-height: 200px;\n}\n\n.delete {\n  position: absolute;\n  width: 100%;\n  z-index: 99;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.addition {\n  position: absolute;\n  width: 100%;\n  z-index: 99;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.delete-detail {\n  background-color: white;\n}\n\n.add-detail {\n  background-color: white;\n}\n\n.success-detail {\n  text-align: center;\n  background-color: white;\n}\n\n.success-detail h4 {\n  font-weight: 600;\n  font-size: 18px;\n  color: #4A4A4A;\n  margin-top: 35px;\n}\n\n.success-detail p {\n  color: #4A4A4A;\n  font-size: 18px;\n}\n\n.success-btn {\n  background: #009cde;\n}\n\n.success-btn p {\n  color: #fff !important;\n  font-size: 16px !important;\n}\n\n.success-btn h5 {\n  color: #fff !important;\n  font-size: 21px !important;\n}\n\n.heart {\n  top: 28%;\n  position: absolute;\n  right: 33px;\n}\n\n.delete-detail h5 {\n  margin: 0px;\n  color: #FF3057;\n  font-size: 23px;\n}\n\n.delete-detail p {\n  color: #62666B;\n  font-size: 18px;\n}\n\nbutton.canclebtn {\n  background: transparent;\n  border: 1px solid #62666B;\n  padding: 10px 50px;\n  border-radius: 10px;\n  font-size: 18px;\n  color: #62666b;\n}\n\nbutton.deletebtn {\n  background: #FF3057;\n  padding: 10px 33px;\n  color: #fff;\n  border-radius: 10px;\n  font-size: 18px;\n  border: 1px solid #FF3057;\n}\n\n.camera-cap img {\n  width: 56px;\n  margin-right: 20px;\n  vertical-align: middle;\n}\n\n.gallery-cap img {\n  width: 56px;\n  margin-right: 20px;\n  vertical-align: middle;\n}\n\n.camera-cap {\n  margin: 20px 0px 10px;\n  padding-bottom: 10px;\n  border-bottom: 0.5px solid #878C8E;\n}\n\n.add-detail span {\n  font-size: 20px;\n  color: #62666B;\n}\n\n.add-detail h4 {\n  color: #2F2F2F;\n  font-size: 28px;\n  padding-bottom: 15px;\n}\n\n.success-detail img {\n  width: auto;\n  height: 175px;\n}\n\n@media only screen and (max-width: 414px) {\n  .heart {\n    top: 21%;\n  }\n}\n\n@media only screen and (max-width: 411px) and (max-height: 731px) {\n  .heart {\n    top: 24%;\n  }\n}\n\n@media only screen and (max-width: 375px) and (max-height: 812px) {\n  .heart {\n    top: 21%;\n  }\n  button.canclebtn {\n    padding: 10px 44px;\n  }\n  button.deletebtn {\n    padding: 10px 24px;\n  }\n  .delete-detail p {\n    font-size: 16px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (max-height: 667px) {\n  .heart {\n    top: 26%;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  .heart {\n    top: 26%;\n  }\n  button.canclebtn {\n    padding: 10px 40px;\n  }\n  button.deletebtn {\n    padding: 10px 20px;\n  }\n  .delete-detail p {\n    font-size: 16px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .heart {\n    top: 30%;\n  }\n  button.canclebtn {\n    padding: 8px 30px;\n  }\n  button.deletebtn {\n    padding: 8px 10px;\n  }\n  .delete-detail p {\n    font-size: 14px;\n  }\n}\n\n.pull-right {\n  float: right;\n}\n\n.error-message {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL2VkaXRyZWNlaXB0L2VkaXRyZWNlaXB0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZWRpdHJlY2VpcHQvZWRpdHJlY2VpcHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQUE7RUFDQSwwQkFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNBSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQ0VKOztBRENBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0FDRUE7O0FEQUE7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDSUo7O0FERkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0tKOztBRFBBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNLSjs7QURIQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDTUo7O0FEUkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ01KOztBREpBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDT0o7O0FETEE7RUFDSSxnQkFBQTtBQ1FKOztBRE5BO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0FDU0o7O0FEUEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ1VKOztBRFpBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNVSjs7QURFQTtFQUNJLG9CQUFBO0VBQ0EsZ0NBQUE7QUNDSjs7QURDQTtFQUVJLG1CQUFBO0FDQ0o7O0FEV0E7RUFDSSxvQkFBQTtFQUNBLGdDQUFBO0FDUko7O0FEVUE7RUFFSSxpQkFBQTtBQ1JKOztBRFVBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtBQ1BKOztBRFNBO0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDUEo7O0FEU0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ05KOztBRFFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQ0xKOztBRE9BO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSw4QkFBQTtBQ0pKOztBRE1BO0VBR0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDTEo7O0FEUUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDTEo7O0FEUUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDTEo7O0FET0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDSko7O0FETUE7RUFFSSx1QkFBQTtBQ0pKOztBRE1BO0VBRUksdUJBQUE7QUNKSjs7QURNQTtFQUVJLGtCQUFBO0VBQ0EsdUJBQUE7QUNKSjs7QURPQTtFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0xKOztBRE9BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNKSjs7QURNQTtFQUVJLG1CQUFBO0FDSko7O0FETUE7RUFDSSxzQkFBQTtFQUNBLDBCQUFBO0FDSEo7O0FES0E7RUFDSSxzQkFBQTtFQUNBLDBCQUFBO0FDRko7O0FESUE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDREo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNBSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDR0o7O0FEREE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0lKOztBREZBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNLSjs7QURIQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtBQ01KOztBREpBO0VBRUEsZUFBQTtFQUNBLGNBQUE7QUNNQTs7QURKQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNPSjs7QURKQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDT0o7O0FESEE7RUFFSTtJQUNJLFFBQUE7RUNLTjtBQUNGOztBREhBO0VBRUk7SUFDSSxRQUFBO0VDSU47QUFDRjs7QURGQTtFQUVJO0lBQ0ksUUFBQTtFQ0dOO0VEREU7SUFFSSxrQkFBQTtFQ0VOO0VEQUU7SUFDSSxrQkFBQTtFQ0VOO0VEQUU7SUFDSSxlQUFBO0VDRU47QUFDRjs7QURBQTtFQUVJO0lBQ0ksUUFBQTtFQ0NOO0FBQ0Y7O0FEQ0E7RUFFSTtJQUNJLFFBQUE7RUNBTjtFREVFO0lBRUksa0JBQUE7RUNETjtFREdFO0lBQ0ksa0JBQUE7RUNETjtFREdFO0lBQ0ksZUFBQTtFQ0ROO0FBQ0Y7O0FER0E7RUFFSTtJQUNJLFFBQUE7RUNGTjtFRElFO0lBRUksaUJBQUE7RUNITjtFREtFO0lBQ0ksaUJBQUE7RUNITjtFREtFO0lBQ0ksZUFBQTtFQ0hOO0FBQ0Y7O0FET0E7RUFDSSxZQUFBO0FDTEo7O0FET0E7RUFDSSxVQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9lZGl0cmVjZWlwdC9lZGl0cmVjZWlwdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWltYWdlXG57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IGRvdHRlZCAjOEI4QjhCO1xufVxuXG4uYWRkLXJlY2VpcHQtZGV0YWlsIGxhYmVsIHtcbiAgICBjb2xvcjogIzg3OEM4RSA7XG4gICAgZm9udC1zaXplOiAxMnB4IDtcbn1cbi5hZGQtcmVjZWlwdC1kZXRhaWwge1xuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xufVxuaW9uLWRhdGV0aW1lLmRhdGV0aW1lLXBsYWNlaG9sZGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBjb2xvcjogIzg3OEM4RTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcbiAgIFxufVxuLmFkZC1yZWNlaXB0LWRldGFpbCBpbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzJmMmYyZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIG1hcmdpbjogNnB4IDBweCAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmFkZC1yZWNlaXB0LWRldGFpbCBpb24tdG9nZ2xlXG57XG5mbG9hdDogcmlnaHQ7XG5wYWRkaW5nOiAzcHg7XG59XG5sYWJlbC50b2dsZSB7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMyZjJmMmYgIWltcG9ydGFudDtcbn1cbi5hZGQtcmVjZWlwdC1kZXRhaWwgdGV4dGFyZWEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgbWFyZ2luOiA2cHggMHB4IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgY29sb3I6ICMyZjJmMmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4uYWRkLXJlY2VpcHQtZGV0YWlsIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM4NzhDOEU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLmFkZC1yZWNlaXB0LWRldGFpbCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjODc4QzhFO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi50ZXh0LW9yIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM4NzhDOEU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG59XG4udGF4LXJldHVybiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi50YXgtcmV0dXJuIHB7XG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLnRheC1yZXR1cm4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzg3OEM4RTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4vLyAuc2VsZWN0LWNhdGVnb3J5IHNlbGVjdFxuLy8ge1xuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGJvcmRlcjogbm9uZTtcbi8vICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcbi8vICAgICBvdXRsaW5lOiBub25lO1xuLy8gICAgIGJhY2tncm91bmQ6IG5vbmU7XG4vLyAgICAgcGFkZGluZzogMTBweCAwcHg7XG4vLyB9XG4uc2VsZWN0LWNhdGVnb3J5IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcbn1cbmlvbi1zZWxlY3RcbntcbiAgICBwYWRkaW5nOiAxMHB4IDRweCAwO1xufVxuLy8gLnBheW1lbnQtY2F0ZWdvcnkgc2VsZWN0XG4vLyB7XG4vLyAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgYm9yZGVyOiBub25lO1xuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xuLy8gICAgIG91dGxpbmU6IG5vbmU7XG4vLyAgICAgYmFja2dyb3VuZDogbm9uZTtcbi8vICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbi8vIH1cbi5wYXltZW50LWNhdGVnb3J5IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcbn1cbi5ib3RtLWJ0blxue1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuLmZhaWwtZGV0YWlsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uZmFpbC1kZXRhaWwgaDRcbntcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzRBNEE0QTtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuLmZhaWwtZGV0YWlsIHB7XG4gICAgY29sb3I6ICM0QTRBNEE7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLmZhaWx1cmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNSk7XG59XG4uc3VjY2VzcyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6MDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC41KTtcbn1cbi5zdWNjZXNzLWRldGFpbCBpbWcge1xuICAgIC8vIGhlaWdodDogMjI1cHg7XG4gICAgLy8gd2lkdGg6IGF1dG87XG4gICAgbWF4LXdpZHRoOjIwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5pbWcuYWRkLWltYWdlLWF1dG8ge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG59XG5cbi5kZWxldGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNSk7XG59XG4uYWRkaXRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNSk7XG59XG4uZGVsZXRlLWRldGFpbFxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgXG59XG4uYWRkLWRldGFpbFxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgXG59XG4uc3VjY2Vzcy1kZXRhaWxcbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICBcbn1cbi5zdWNjZXNzLWRldGFpbCBoNFxue1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjNEE0QTRBO1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG59XG4uc3VjY2Vzcy1kZXRhaWwgcHtcbiAgICBjb2xvcjogIzRBNEE0QTtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uc3VjY2Vzcy1idG5cbntcbiAgICBiYWNrZ3JvdW5kOiAjMDA5Y2RlO1xufVxuLnN1Y2Nlc3MtYnRuIHAge1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4uc3VjY2Vzcy1idG4gaDUge1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyMXB4ICFpbXBvcnRhbnQ7XG59XG4uaGVhcnQge1xuICAgIHRvcDogMjglO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMzNweDtcbn1cbi5kZWxldGUtZGV0YWlsIGg1IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjogI0ZGMzA1NztcbiAgICBmb250LXNpemU6IDIzcHg7XG59XG4uZGVsZXRlLWRldGFpbCBwIHtcbiAgICBjb2xvcjogIzYyNjY2QjtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5idXR0b24uY2FuY2xlYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjI2NjZCO1xuICAgIHBhZGRpbmc6IDEwcHggNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzYyNjY2Yjtcbn1cbmJ1dHRvbi5kZWxldGVidG4ge1xuICAgIGJhY2tncm91bmQ6ICNGRjMwNTc7XG4gICAgcGFkZGluZzogMTBweCAzM3B4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjMwNTc7XG59XG4uY2FtZXJhLWNhcCBpbWcge1xuICAgIHdpZHRoOiA1NnB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmdhbGxlcnktY2FwIGltZyB7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uY2FtZXJhLWNhcCB7XG4gICAgbWFyZ2luOiAyMHB4IDBweCAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICM4NzhDOEU7XG59XG4uYWRkLWRldGFpbCBzcGFuXG57XG5mb250LXNpemU6IDIwcHg7XG5jb2xvcjogIzYyNjY2Qjtcbn1cbi5hZGQtZGV0YWlsIGg0IHtcbiAgICBjb2xvcjogIzJGMkYyRjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5zdWNjZXNzLWRldGFpbCBpbWcge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMTc1cHg7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweClcbiB7XG4gICAgLmhlYXJ0IHtcbiAgICAgICAgdG9wOjIxJTtcbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMXB4KSBhbmQgKG1heC1oZWlnaHQ6IDczMXB4KVxue1xuICAgIC5oZWFydCB7XG4gICAgICAgIHRvcDoyNCU7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkgYW5kIChtYXgtaGVpZ2h0OiA4MTJweClcbntcbiAgICAuaGVhcnQge1xuICAgICAgICB0b3A6MjElO1xuICAgIH1cbiAgICBidXR0b24uY2FuY2xlYnRuIFxuICAgIHtcbiAgICAgICAgcGFkZGluZzogMTBweCA0NHB4O1xuICAgIH1cbiAgICBidXR0b24uZGVsZXRlYnRuIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAyNHB4O1xuICAgIH1cbiAgICAuZGVsZXRlLWRldGFpbCBwe1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkgYW5kIChtYXgtaGVpZ2h0OiA2NjdweClcbntcbiAgICAuaGVhcnQge1xuICAgICAgICB0b3A6MjYlO1xuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpXG57XG4gICAgLmhlYXJ0IHtcbiAgICAgICAgdG9wOjI2JTtcbiAgICB9XG4gICAgYnV0dG9uLmNhbmNsZWJ0biBcbiAgICB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggNDBweDtcbiAgICB9XG4gICAgYnV0dG9uLmRlbGV0ZWJ0biB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICB9XG4gICAgLmRlbGV0ZS1kZXRhaWwgcHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpXG57XG4gICAgLmhlYXJ0IHtcbiAgICAgICAgdG9wOjMwJTtcbiAgICB9XG4gICAgYnV0dG9uLmNhbmNsZWJ0biBcbiAgICB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgIH1cbiAgICBidXR0b24uZGVsZXRlYnRuIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgfVxuICAgIC5kZWxldGUtZGV0YWlsIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgXG59XG5cbi5wdWxsLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4uZXJyb3ItbWVzc2FnZXtcbiAgICBjb2xvcjogcmVkO1xufSIsIi5hZGQtaW1hZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IGRvdHRlZCAjOEI4QjhCO1xufVxuXG4uYWRkLXJlY2VpcHQtZGV0YWlsIGxhYmVsIHtcbiAgY29sb3I6ICM4NzhDOEU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmFkZC1yZWNlaXB0LWRldGFpbCB7XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xufVxuXG5pb24tZGF0ZXRpbWUuZGF0ZXRpbWUtcGxhY2Vob2xkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgY29sb3I6ICM4NzhDOEU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xufVxuXG4uYWRkLXJlY2VpcHQtZGV0YWlsIGlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzJmMmYyZjtcbiAgd2lkdGg6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBtYXJnaW46IDZweCAwcHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uYWRkLXJlY2VpcHQtZGV0YWlsIGlvbi10b2dnbGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxubGFiZWwudG9nbGUge1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMyZjJmMmYgIWltcG9ydGFudDtcbn1cblxuLmFkZC1yZWNlaXB0LWRldGFpbCB0ZXh0YXJlYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIG1hcmdpbjogNnB4IDBweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcbiAgY29sb3I6ICMyZjJmMmY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5hZGQtcmVjZWlwdC1kZXRhaWwgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM4NzhDOEU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmFkZC1yZWNlaXB0LWRldGFpbCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzg3OEM4RTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udGV4dC1vciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM4NzhDOEU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLnRheC1yZXR1cm4ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4udGF4LXJldHVybiBwIHtcbiAgbWFyZ2luOiAwcHggMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRheC1yZXR1cm4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM4NzhDOEU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnNlbGVjdC1jYXRlZ29yeSB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIHBhZGRpbmc6IDEwcHggNHB4IDA7XG59XG5cbi5wYXltZW50LWNhdGVnb3J5IHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xufVxuXG4uYm90bS1idG4ge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLmZhaWwtZGV0YWlsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhaWwtZGV0YWlsIGg0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzRBNEE0QTtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cblxuLmZhaWwtZGV0YWlsIHAge1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZmFpbHVyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnN1Y2Nlc3Mge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnN1Y2Nlc3MtZGV0YWlsIGltZyB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuaW1nLmFkZC1pbWFnZS1hdXRvIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG59XG5cbi5kZWxldGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5hZGRpdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmRlbGV0ZS1kZXRhaWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmFkZC1kZXRhaWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnN1Y2Nlc3MtZGV0YWlsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnN1Y2Nlc3MtZGV0YWlsIGg0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzRBNEE0QTtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cblxuLnN1Y2Nlc3MtZGV0YWlsIHAge1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc3VjY2Vzcy1idG4ge1xuICBiYWNrZ3JvdW5kOiAjMDA5Y2RlO1xufVxuXG4uc3VjY2Vzcy1idG4gcCB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxuXG4uc3VjY2Vzcy1idG4gaDUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcbn1cblxuLmhlYXJ0IHtcbiAgdG9wOiAyOCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDMzcHg7XG59XG5cbi5kZWxldGUtZGV0YWlsIGg1IHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjRkYzMDU3O1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbi5kZWxldGUtZGV0YWlsIHAge1xuICBjb2xvcjogIzYyNjY2QjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5idXR0b24uY2FuY2xlYnRuIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MjY2NkI7XG4gIHBhZGRpbmc6IDEwcHggNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzYyNjY2Yjtcbn1cblxuYnV0dG9uLmRlbGV0ZWJ0biB7XG4gIGJhY2tncm91bmQ6ICNGRjMwNTc7XG4gIHBhZGRpbmc6IDEwcHggMzNweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGMzA1Nztcbn1cblxuLmNhbWVyYS1jYXAgaW1nIHtcbiAgd2lkdGg6IDU2cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmdhbGxlcnktY2FwIGltZyB7XG4gIHdpZHRoOiA1NnB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jYW1lcmEtY2FwIHtcbiAgbWFyZ2luOiAyMHB4IDBweCAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzg3OEM4RTtcbn1cblxuLmFkZC1kZXRhaWwgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM2MjY2NkI7XG59XG5cbi5hZGQtZGV0YWlsIGg0IHtcbiAgY29sb3I6ICMyRjJGMkY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5zdWNjZXNzLWRldGFpbCBpbWcge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxNzVweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAuaGVhcnQge1xuICAgIHRvcDogMjElO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMXB4KSBhbmQgKG1heC1oZWlnaHQ6IDczMXB4KSB7XG4gIC5oZWFydCB7XG4gICAgdG9wOiAyNCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIGFuZCAobWF4LWhlaWdodDogODEycHgpIHtcbiAgLmhlYXJ0IHtcbiAgICB0b3A6IDIxJTtcbiAgfVxuICBidXR0b24uY2FuY2xlYnRuIHtcbiAgICBwYWRkaW5nOiAxMHB4IDQ0cHg7XG4gIH1cbiAgYnV0dG9uLmRlbGV0ZWJ0biB7XG4gICAgcGFkZGluZzogMTBweCAyNHB4O1xuICB9XG4gIC5kZWxldGUtZGV0YWlsIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkgYW5kIChtYXgtaGVpZ2h0OiA2NjdweCkge1xuICAuaGVhcnQge1xuICAgIHRvcDogMjYlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5oZWFydCB7XG4gICAgdG9wOiAyNiU7XG4gIH1cbiAgYnV0dG9uLmNhbmNsZWJ0biB7XG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xuICB9XG4gIGJ1dHRvbi5kZWxldGVidG4ge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgfVxuICAuZGVsZXRlLWRldGFpbCBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLmhlYXJ0IHtcbiAgICB0b3A6IDMwJTtcbiAgfVxuICBidXR0b24uY2FuY2xlYnRuIHtcbiAgICBwYWRkaW5nOiA4cHggMzBweDtcbiAgfVxuICBidXR0b24uZGVsZXRlYnRuIHtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgfVxuICAuZGVsZXRlLWRldGFpbCBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi5wdWxsLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/editreceipt/editreceipt.page.ts":
/*!*************************************************!*\
  !*** ./src/app/editreceipt/editreceipt.page.ts ***!
  \*************************************************/
/*! exports provided: EditreceiptPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditreceiptPage", function() { return EditreceiptPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _expense_expense_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../expense/expense.page */ "./src/app/expense/expense.page.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");













var EditreceiptPage = /** @class */ (function () {
    function EditreceiptPage(formBuilder, activatedRoute, camera, actionSheetController, file, filePath, webview, sanitizer, toastCtrl, navCtrl, storageService, loadingController, events, modalController) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.filePath = filePath;
        this.webview = webview;
        this.sanitizer = sanitizer;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.loadingController = loadingController;
        this.events = events;
        this.modalController = modalController;
        this.data = '';
        this.viewImage = '';
        this.selectedImage = '';
        this.isLoading = false;
        this.removeImage = '';
        this.correctPath = '';
        this.currentName = '';
        this.lists = [];
        this.newlist = [];
        this.year = '';
        this.error = false;
        this.claimTaxAmount = '';
        this.checkamountbit = 0;
        this.uploadcamera = false;
        this.selectImageError = '';
    }
    EditreceiptPage.prototype.getData = function (id) {
        var _this = this;
        this.storageService.viewReceiptbyid(id).then(function (val) {
            var viewImage = _this.webview.convertFileSrc(_this.file.dataDirectory + val.rows.item(0).image);
            _this.viewImage = viewImage;
            _this.selectedImage = val.rows.item(0).image;
            _this.removeImage = val.rows.item(0).image;
            _this.amount = parseFloat(val.rows.item(0).amount).toFixed(2);
            _this.claimable = val.rows.item(0).claim_status;
            _this.claimTaxReturn = val.rows.item(0).claim_tax_return;
            _this.date = val.rows.item(0).date;
            _this.description = val.rows.item(0).description;
            _this.expenseType = val.rows.item(0).expense_type;
            _this.paymentType = val.rows.item(0).payment_type;
            _this.gstamount = parseFloat(val.rows.item(0).totalgst).toFixed(2);
            _this.taxClaimValue = val.rows.item(0).claimtaxvalue;
            _this.taxClaimType = val.rows.item(0).claimtaxtype;
            if (val.rows.item(0).claimtaxtype === 'percentage') {
                _this.gstamountper = val.rows.item(0).claimtaxvalue;
            }
            else {
                _this.gstamountdol = val.rows.item(0).claimtaxvalue;
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    EditreceiptPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _expense_expense_page__WEBPACK_IMPORTED_MODULE_10__["ExpensePage"],
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
    EditreceiptPage.prototype.getImgContent = function (imgFile) {
        return this.sanitizer.bypassSecurityTrustUrl(imgFile);
    };
    EditreceiptPage.prototype.ngOnInit = function () {
        var _this = this;
        $('#success').hide();
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.id = JSON.parse(params.data).id;
            _this.getData(_this.id);
        });
        this.gstamountper = '';
        if (this.claimable === 'false') {
            this.show = true;
        }
        else {
            this.show = false;
        }
        this.onAddForm = this.formBuilder.group({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+(\.[0-9]{1,2})?$')])),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            claimable: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            expenseType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            paymentType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            gstamount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+(\.[0-9]{1,2})?$')])),
            gstamountper: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            gstamountdol: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    };
    EditreceiptPage.prototype.presentLoading = function () {
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
    EditreceiptPage.prototype.dismissLoading = function () {
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
    EditreceiptPage.prototype.presentToast = function (msg) {
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
    EditreceiptPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.selectedImage = '';
                this.viewImage = '';
                this.uploadcamera = true;
                return [2 /*return*/];
            });
        });
    };
    EditreceiptPage.prototype.select_image = function (value) {
        if (value === 'camera') {
            this.getPicture(this.camera.PictureSourceType.CAMERA);
        }
        else {
            this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
    };
    EditreceiptPage.prototype.cancel = function () {
        this.navCtrl.navigateRoot('/receiptdetail');
    };
    EditreceiptPage.prototype.getPicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath).then(function (filePath) {
                    console.log(filePath);
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
    EditreceiptPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + '.jpg';
        return newFileName;
    };
    // Copy the image to a local folder
    EditreceiptPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
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
    EditreceiptPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            this.viewImage = this.webview.convertFileSrc(this.file.dataDirectory + img);
            this.selectImageError = '';
        }
        this.uploadcamera = false;
    };
    EditreceiptPage.prototype.checkfield = function () {
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
    EditreceiptPage.prototype.saveDetail = function () {
        var _this = this;
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
            else if (this.onAddForm.value.gstamountdol !== '') {
                var cAmount = !isNaN(parseInt(this.onAddForm.value.gstamountdol)) ? parseInt(this.onAddForm.value.gstamountdol) : 0;
                this.taxClaimAmount = parseFloat((cAmount).toFixed(2));
                this.taxClaimValue = this.taxClaimAmount;
                this.taxClaimType = 'fixed';
            }
        }
        if (parseInt(this.onAddForm.value.amount) < parseInt(this.taxClaimAmount)) {
            this.presentToast('Tax return value cannot be greater than amount');
        }
        else {
            var data = {
                image: this.selectedImage,
                amount: this.onAddForm.value.amount,
                description: this.onAddForm.value.description,
                claim_status: this.onAddForm.value.claimable,
                expense_type: this.onAddForm.value.expenseType,
                payment_type: this.onAddForm.value.paymentType,
                filepath: this.file.externalDataDirectory + 'RSM/',
                id: this.id,
                totalgst: this.onAddForm.value.gstamount,
                claim_tax_return: this.taxClaimAmount,
                tax_claim_value: this.taxClaimValue,
                tax_claim_type: this.taxClaimType,
                date: this.onAddForm.value.date
            };
            console.log('final data', data);
            this.storageService.updateReceipt(data).then(function (res) {
                _this.events.publish('receipt:updated', _this.data.id);
                $('#success').show();
            })
                .catch(function (e) {
                _this.error = true;
                console.log(e);
            });
        }
    };
    EditreceiptPage.prototype.skip = function () {
        $('#success').hide();
        this.error = false;
    };
    EditreceiptPage.prototype.createDirectory = function () {
        var _this = this;
        this.file
            .checkDir(this.file.externalDataDirectory, 'RSM')
            .then(function (response) {
            _this.file
                .removeFile(_this.file.externalDataDirectory + 'RSM/', _this.removeImage)
                .then(function (success) {
                console.log('success', success);
            }, function (error) {
                console.log('Error while storing file.');
            });
            _this.file
                .copyFile(_this.correctPath, _this.currentName, _this.file.externalDataDirectory + 'RSM', _this.createFileName())
                .then(function (success) {
                console.log('success', success);
            }, function (error) {
                console.log('Error while storing file.');
            });
        })
            .catch(function (err) {
            _this.file
                .createDir(_this.file.externalDataDirectory, 'RSM', false)
                .then(function (response) {
                console.log('Directory create' + response);
                // Copy the image to a local folder
                _this.file
                    .copyFile(_this.correctPath, _this.currentName, _this.file.externalDataDirectory + 'RSM', _this.createFileName())
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
    EditreceiptPage.prototype.totalgst = function (event) {
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
    EditreceiptPage.prototype.claimcheck = function () {
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
    EditreceiptPage.prototype.claimtaxcheck = function (event) {
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
    EditreceiptPage.prototype.claimtaxcheck1 = function (event) {
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
    EditreceiptPage.prototype.closeUploadCamera = function () {
        this.uploadcamera = false;
    };
    EditreceiptPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editreceipt',
            template: __webpack_require__(/*! ./editreceipt.page.html */ "./src/app/editreceipt/editreceipt.page.html"),
            styles: [__webpack_require__(/*! ./editreceipt.page.scss */ "./src/app/editreceipt/editreceipt.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_12__["PageTrack"])('Edit Receipt Screen'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__["FilePath"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__["WebView"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
            _storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]])
    ], EditreceiptPage);
    return EditreceiptPage;
}());



/***/ })

}]);
//# sourceMappingURL=editreceipt-editreceipt-module.js.map