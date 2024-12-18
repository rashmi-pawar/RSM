(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["receiptdetail-receiptdetail-module"],{

/***/ "./src/app/receiptdetail/receiptdetail.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/receiptdetail/receiptdetail.module.ts ***!
  \*******************************************************/
/*! exports provided: ReceiptdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptdetailPageModule", function() { return ReceiptdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _receiptdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receiptdetail.page */ "./src/app/receiptdetail/receiptdetail.page.ts");







var routes = [
    {
        path: '',
        component: _receiptdetail_page__WEBPACK_IMPORTED_MODULE_6__["ReceiptdetailPage"]
    }
];
var ReceiptdetailPageModule = /** @class */ (function () {
    function ReceiptdetailPageModule() {
    }
    ReceiptdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_receiptdetail_page__WEBPACK_IMPORTED_MODULE_6__["ReceiptdetailPage"]]
        })
    ], ReceiptdetailPageModule);
    return ReceiptdetailPageModule;
}());



/***/ }),

/***/ "./src/app/receiptdetail/receiptdetail.page.html":
/*!*******************************************************!*\
  !*** ./src/app/receiptdetail/receiptdetail.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"viewreceipt\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>View Expense</ion-title>\n    <ion-buttons slot=\"end\" class=\"more-btn\" (click)=\"presentPopover($event,data)\">\n      <ion-icon name=\"md-more\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"receipt-add\" padding *ngIf=\"showpop\" (click)=\"hidee($event.target)\">\n    <div class=\"pop-list-detail ion-padding-horizontal\" id=\"sh\">\n      <ul>\n        <li id=\"upload\" class=\"popup-li add\">\n          Add New Receipt\n        </li>\n        <li id=\"export\" class=\"popup-li edit\">\n          Edit Receipt\n        </li>\n        <li id=\"upload\" class=\"popup-li delete\" (click)=\"presentDeleteConfirm()\">\n          Delete\n        </li>\n\n      </ul>\n    </div>\n\n  </div>\n  <div class=\"image-content\">\n    <div class=\"receipt-img\">\n      <img src=\"../../assets/img/photocopy2.png\" *ngIf=\"!data?.fullimage\">\n      <img [src]=\"getImgContent(data.fullimage)\" *ngIf=\"data?.fullimage\"\n        onerror=\"this.onerror=null;this.src='../../assets/img/photocopy2.png';\">\n    </div>\n    <ion-row class=\"return\" padding>\n      <ion-col no-padding size=\"6\">\n        <div class=\"expense-title ion-padding-horizontal\">\n          <label for=\"expense\"> Amount</label>\n          <h1>{{data?.amount}}</h1>\n        </div>\n      </ion-col>\n      <ion-col no-padding size=\"6\">\n        <div class=\"select-title\">\n          <label for=\"expense\">You can claim on your tax return amount</label>\n          <h5>{{data?.claim_tax_return}}</h5>\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </div>\n  <div class=\"expense-detail\" padding>\n    <ion-row>\n      <ion-col no-padding size=\"2\">\n        <ion-icon name=\"time\"></ion-icon>\n      </ion-col>\n      <ion-col no-padding size=\"10\">\n        <h5>{{data?.date |date: 'dd-MMM-yyyy'}}</h5>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"expense-detail\" padding>\n    <ion-row>\n      <ion-col no-padding size=\"2\">\n        <img src=\"assets/icon/gst.png\" height=\"30\" />\n      </ion-col>\n      <ion-col no-padding size=\"10\">\n        <h5>{{data?.totalgst}}(GST)</h5>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"expense-detail\" padding>\n    <ion-row>\n      <ion-col no-padding size=\"2\">\n        <ion-icon name=\"card\"></ion-icon>\n      </ion-col>\n      <ion-col no-padding size=\"10\">\n        <h5>{{data?.payment_type}}</h5>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"expense-detail\" padding>\n    <ion-row>\n      <ion-col no-padding size=\"2\">\n        <ion-icon name=\"time\"></ion-icon>\n      </ion-col>\n      <ion-col no-padding size=\"10\">\n        <h5>{{data?.expense_type}}</h5>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"expense-detail\" padding>\n    <ion-row>\n      <ion-col no-padding size=\"2\">\n        <ion-icon name=\"time\"></ion-icon>\n      </ion-col>\n      <ion-col no-padding size=\"10\">\n        <h5>Notes</h5>\n        <p>{{data?.description}}</p>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/receiptdetail/receiptdetail.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/receiptdetail/receiptdetail.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expense-title label {\n  color: #fff;\n  font-size: 16px;\n}\n\n.delete-detail {\n  background-color: white;\n}\n\n.expense-title h1 {\n  color: #fff;\n  font-size: 30px;\n  font-weight: 600;\n}\n\n.select-title h5 {\n  font-size: 20px;\n  margin-top: 6px;\n  color: #fff;\n}\n\n.expense-title {\n  border-right: 1px solid #D4E9F8;\n}\n\n.select-title {\n  padding-left: 20px;\n}\n\n.select-title label {\n  color: #fff;\n  font-size: 12px;\n}\n\n.receipt-img {\n  position: relative;\n  text-align: center;\n  background: #fff;\n}\n\n.receipt-img img {\n  max-width: 200px;\n  max-height: 200px;\n}\n\n.expense-detail {\n  padding-top: 20px;\n}\n\n.expense-detail ion-icon {\n  color: #727272;\n  font-size: 25px;\n}\n\n.expense-detail h5 {\n  margin: 0px;\n  color: #383838;\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.expense-detail p {\n  font-size: 15px;\n  color: #62666B;\n  margin: 10px 0px;\n}\n\n.expense-detail a {\n  font-size: 15px;\n  color: #029dde;\n}\n\n.receipt-add {\n  position: absolute;\n  width: 100%;\n  z-index: 99;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  padding-top: 5px;\n  padding-right: 5px;\n}\n\n.pop-list-detail {\n  width: 170px;\n  background-color: white;\n  right: 0;\n  float: right;\n  border-radius: 5px;\n}\n\n.pop-list-detail ul {\n  padding-left: 0px;\n}\n\n.pop-list-detail ul li {\n  list-style: none;\n  line-height: 25px;\n  color: #62666B;\n  font-size: 18px;\n  padding: 5px 0px;\n}\n\n.delete-detail h5 {\n  margin: 0px;\n  color: #FF3057;\n  font-size: 23px;\n}\n\n.delete-detail p {\n  color: #62666B;\n  font-size: 18px;\n}\n\nbutton.canclebtn {\n  background: transparent;\n  border: 1px solid #62666B;\n  padding: 10px 50px;\n  border-radius: 10px;\n  font-size: 18px;\n  color: #62666b;\n}\n\nbutton.deletebtn {\n  background: #FF3057;\n  padding: 10px 33px;\n  color: #fff;\n  border-radius: 10px;\n  font-size: 18px;\n  border: 1px solid #FF3057;\n}\n\n@media only screen and (max-width: 360px) {\n  .expense-title h1 {\n    font-size: 26px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .select-title h5 {\n    font-size: 18px;\n  }\n  .expense-title h1 {\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3JlY2VpcHRkZXRhaWwvcmVjZWlwdGRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlY2VpcHRkZXRhaWwvcmVjZWlwdGRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFFSSxXQUFBO0VBQ0EsZUFBQTtBQ0xKOztBRGNBO0VBRUksdUJBQUE7QUNaSjs7QURjQTtFQUVJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNaSjs7QURjQTtFQUVJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1pKOztBRGNBO0VBQ0ksK0JBQUE7QUNYSjs7QURhQTtFQUNJLGtCQUFBO0FDVko7O0FEWUE7RUFFSSxXQUFBO0VBQ0EsZUFBQTtBQ1ZKOztBRFlBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDVEo7O0FEV0E7RUFHSSxnQkFBQTtFQUNBLGlCQUFBO0FDVko7O0FEWUE7RUFFSSxpQkFBQTtBQ1ZKOztBRFlBO0VBRUksY0FBQTtFQUNBLGVBQUE7QUNWSjs7QURZQTtFQUVJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDVko7O0FEYUE7RUFFSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDWEo7O0FEYUE7RUFFSSxlQUFBO0VBQ0EsY0FBQTtBQ1hKOztBRGFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNWSjs7QURjQTtFQUVJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNaSjs7QURnQkE7RUFDSSxpQkFBQTtBQ2JKOztBRGVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNaSjs7QURnQkE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNiSjs7QURlQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDWko7O0FEY0E7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDWEo7O0FEYUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDVko7O0FEY0E7RUFHSTtJQUVJLGVBQUE7RUNkTjtBQUNGOztBRGdCQTtFQUdJO0lBQ0ksZUFBQTtFQ2hCTjtFRGtCRTtJQUVJLGVBQUE7RUNqQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3JlY2VpcHRkZXRhaWwvcmVjZWlwdGRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuaW1hZ2UtY29udGVudFxuLy8ge1xuLy8gICAgIC8vIGhlaWdodDogMjkycHg7XG4vLyAgICAgaGVpZ2h0OiA0NSU7XG4vLyB9XG4uZXhwZW5zZS10aXRsZSBsYWJlbFxue1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi8vIC5kZWxldGUge1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICB6LWluZGV4OiA5OTtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNSk7XG4vLyB9XG4uZGVsZXRlLWRldGFpbFxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgXG59XG4uZXhwZW5zZS10aXRsZSBoMVxue1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLnNlbGVjdC10aXRsZSBoNVxue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uZXhwZW5zZS10aXRsZSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0Q0RTlGODtcbn1cbi5zZWxlY3QtdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5zZWxlY3QtdGl0bGUgbGFiZWxcbntcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4ucmVjZWlwdC1pbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5yZWNlaXB0LWltZyBpbWcge1xuICAgIC8vIHdpZHRoOiBhdXRvO1xuICAgIC8vIGhlaWdodDogMTk1cHg7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cbi5leHBlbnNlLWRldGFpbFxue1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmV4cGVuc2UtZGV0YWlsIGlvbi1pY29uXG57XG4gICAgY29sb3I6IzcyNzI3MjtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG4uZXhwZW5zZS1kZXRhaWwgaDVcbntcbiAgICBtYXJnaW46MHB4O1xuICAgIGNvbG9yOiMzODM4Mzg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5leHBlbnNlLWRldGFpbCBwXG57XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjNjI2NjZCO1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG59XG4uZXhwZW5zZS1kZXRhaWwgYVxue1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzAyOWRkZTtcbn1cbi5yZWNlaXB0LWFkZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC41KTtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuXG4ucG9wLWxpc3QtZGV0YWlsXG57XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgXG59XG5cbi5wb3AtbGlzdC1kZXRhaWwgdWwge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuLnBvcC1saXN0LWRldGFpbCB1bCBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBjb2xvcjogIzYyNjY2QjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZzogNXB4IDBweDtcbn1cblxuXG4uZGVsZXRlLWRldGFpbCBoNSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6ICNGRjMwNTc7XG4gICAgZm9udC1zaXplOiAyM3B4O1xufVxuLmRlbGV0ZS1kZXRhaWwgcCB7XG4gICAgY29sb3I6ICM2MjY2NkI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuYnV0dG9uLmNhbmNsZWJ0biB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzYyNjY2QjtcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICM2MjY2NmI7XG59XG5idXR0b24uZGVsZXRlYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkYzMDU3O1xuICAgIHBhZGRpbmc6IDEwcHggMzNweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkYzMDU3O1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpXG4ge1xuXG4gICAgLmV4cGVuc2UtdGl0bGUgaDFcbiAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KVxue1xuICAgIFxuICAgIC5zZWxlY3QtdGl0bGUgaDUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIC5leHBlbnNlLXRpdGxlIGgxXG4gICAge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICAgIFxufVxuIiwiLmV4cGVuc2UtdGl0bGUgbGFiZWwge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZGVsZXRlLWRldGFpbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uZXhwZW5zZS10aXRsZSBoMSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zZWxlY3QtdGl0bGUgaDUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5leHBlbnNlLXRpdGxlIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0Q0RTlGODtcbn1cblxuLnNlbGVjdC10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLnNlbGVjdC10aXRsZSBsYWJlbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5yZWNlaXB0LWltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ucmVjZWlwdC1pbWcgaW1nIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG59XG5cbi5leHBlbnNlLWRldGFpbCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uZXhwZW5zZS1kZXRhaWwgaW9uLWljb24ge1xuICBjb2xvcjogIzcyNzI3MjtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uZXhwZW5zZS1kZXRhaWwgaDUge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICMzODM4Mzg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmV4cGVuc2UtZGV0YWlsIHAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjNjI2NjZCO1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4uZXhwZW5zZS1kZXRhaWwgYSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMwMjlkZGU7XG59XG5cbi5yZWNlaXB0LWFkZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4ucG9wLWxpc3QtZGV0YWlsIHtcbiAgd2lkdGg6IDE3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcmlnaHQ6IDA7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucG9wLWxpc3QtZGV0YWlsIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5wb3AtbGlzdC1kZXRhaWwgdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgY29sb3I6ICM2MjY2NkI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogNXB4IDBweDtcbn1cblxuLmRlbGV0ZS1kZXRhaWwgaDUge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICNGRjMwNTc7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLmRlbGV0ZS1kZXRhaWwgcCB7XG4gIGNvbG9yOiAjNjI2NjZCO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmJ1dHRvbi5jYW5jbGVidG4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzYyNjY2QjtcbiAgcGFkZGluZzogMTBweCA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNjI2NjZiO1xufVxuXG5idXR0b24uZGVsZXRlYnRuIHtcbiAgYmFja2dyb3VuZDogI0ZGMzA1NztcbiAgcGFkZGluZzogMTBweCAzM3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkYzMDU3O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5leHBlbnNlLXRpdGxlIGgxIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLnNlbGVjdC10aXRsZSBoNSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5leHBlbnNlLXRpdGxlIGgxIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/receiptdetail/receiptdetail.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/receiptdetail/receiptdetail.page.ts ***!
  \*****************************************************/
/*! exports provided: ReceiptdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptdetailPage", function() { return ReceiptdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helper_currency__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_helper/currency */ "./src/app/_helper/currency.ts");











var ReceiptdetailPage = /** @class */ (function () {
    function ReceiptdetailPage(activatedRoute, router, storageService, navCtrl, events, popoverController, webview, file, sanitizer, alertController, toastCtrl) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.storageService = storageService;
        this.navCtrl = navCtrl;
        this.events = events;
        this.popoverController = popoverController;
        this.webview = webview;
        this.file = file;
        this.sanitizer = sanitizer;
        this.alertController = alertController;
        this.toastCtrl = toastCtrl;
        this.showpop = false;
        this.show = false;
        this.claim = '';
        this.a = 0;
        this.currency = new _helper_currency__WEBPACK_IMPORTED_MODULE_9__["Currency"]();
    }
    ReceiptdetailPage.prototype.getData = function (id) {
        var _this = this;
        this.storageService.viewReceiptbyid(id).then(function (val) {
            var viewImage = _this.webview.convertFileSrc(_this.file.dataDirectory + val.rows.item(0).image);
            _this.data = {
                id: val.rows.item(0).id,
                amount: _this.currency.display(val.rows.item(0).amount),
                claim_status: val.rows.item(0).claim_status,
                claim_tax_return: _this.currency.display(val.rows.item(0).claim_tax_return),
                date: val.rows.item(0).date,
                description: val.rows.item(0).description,
                expense_type: val.rows.item(0).expense_type,
                image: val.rows.item(0).image,
                payment_type: val.rows.item(0).payment_type,
                totalgst: _this.currency.display(val.rows.item(0).totalgst),
                fullimage: viewImage,
                tax_claim_value: val.rows.item(0).claimtaxvalue,
                tax_claim_type: val.rows.item(0).claimtaxtype
            };
        }).catch(function (err) {
            console.log(err);
        });
    };
    ReceiptdetailPage.prototype.getImgContent = function (imgFile) {
        return this.sanitizer.bypassSecurityTrustUrl(imgFile);
    };
    ReceiptdetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.id = JSON.parse(params.data).id;
            _this.getData(_this.id);
        });
    };
    ReceiptdetailPage.prototype.presentPopover = function (ev, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.showpop = true;
                return [2 /*return*/];
            });
        });
    };
    ReceiptdetailPage.prototype.pop = function () {
        this.show = false;
    };
    ReceiptdetailPage.prototype.hidee = function (event) {
        if ($(event).hasClass('popup-li')) {
            if ($(event).hasClass('add')) {
                this.router.navigate(['/home']);
            }
            else if ($(event).hasClass('delete')) {
                this.showpop = false;
                this.show = true;
            }
            else {
                this.edit(this.data);
            }
            this.showpop = false;
        }
        else {
            this.showpop = false;
        }
    };
    ReceiptdetailPage.prototype.delete = function () {
        var _this = this;
        this.storageService
            .removeReceipt(this.id)
            .then(function (val) {
            _this.events.publish('receipt:deleted', Date.now());
            _this.presentToast('Receipt has been deleted successfully');
            _this.navCtrl.navigateRoot('/viewreceipt');
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ReceiptdetailPage.prototype.edit = function (data) {
        this.router.navigate(['/editreceipt'], {
            queryParams: { data: JSON.stringify(this.data) }
        });
    };
    ReceiptdetailPage.prototype.presentDeleteConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Delete receipt',
                            message: 'Are you sure you want to delete this receipt?',
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
                                        _this.delete();
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
    ReceiptdetailPage.prototype.presentToast = function (msg) {
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
    ReceiptdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-receiptdetail',
            template: __webpack_require__(/*! ./receiptdetail.page.html */ "./src/app/receiptdetail/receiptdetail.page.html"),
            styles: [__webpack_require__(/*! ./receiptdetail.page.scss */ "./src/app/receiptdetail/receiptdetail.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_7__["PageTrack"])('View Expense Screen'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__["WebView"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
    ], ReceiptdetailPage);
    return ReceiptdetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=receiptdetail-receiptdetail-module.js.map