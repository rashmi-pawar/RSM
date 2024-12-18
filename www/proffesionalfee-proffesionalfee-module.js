(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["proffesionalfee-proffesionalfee-module"],{

/***/ "./src/app/proffesionalfee/proffesionalfee.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/proffesionalfee/proffesionalfee.module.ts ***!
  \***********************************************************/
/*! exports provided: ProffesionalfeePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProffesionalfeePageModule", function() { return ProffesionalfeePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _proffesionalfee_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proffesionalfee.page */ "./src/app/proffesionalfee/proffesionalfee.page.ts");







var routes = [
    {
        path: '',
        component: _proffesionalfee_page__WEBPACK_IMPORTED_MODULE_6__["ProffesionalfeePage"]
    }
];
var ProffesionalfeePageModule = /** @class */ (function () {
    function ProffesionalfeePageModule() {
    }
    ProffesionalfeePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_proffesionalfee_page__WEBPACK_IMPORTED_MODULE_6__["ProffesionalfeePage"]]
        })
    ], ProffesionalfeePageModule);
    return ProffesionalfeePageModule;
}());



/***/ }),

/***/ "./src/app/proffesionalfee/proffesionalfee.page.html":
/*!***********************************************************!*\
  !*** ./src/app/proffesionalfee/proffesionalfee.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{heading}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"image-content\">\n        <div class=\"tool-head\" padding>\n            <ion-row class=\"ion-padding-horizontal\">\n                <ion-col no-padding size=\"6\">\n                    <div class=\"expense-title ion-padding-horizontal\">\n                        <label for=\"expense\">Total Expenses</label>\n                        <h1>{{totalamount}}</h1>\n                    </div>\n                </ion-col>\n                <ion-col no-padding size=\"6\">\n                    <div class=\"select-title\">\n                        <label for=\"expense\"> Financial Year</label>\n                        <ion-select [(ngModel)]=\"year\" (ionChange)=\"selectYear($event)\">\n                            <ion-select-option *ngFor=\"let yearObj of yearArray\" value=\"{{yearObj}}\">{{yearObj}}\n                            </ion-select-option>\n                        </ion-select>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </div>\n        <div class=\"expense-detail\" padding>\n            <div class=\"expense-select grey-color\" padding>\n                <div class=\"expense-select-detail\">\n                    <div *ngIf=\"lists.length\">\n                        <ion-row padding *ngFor=\"let list of lists\" (click)=\"details(list)\">\n                            <ion-col no-padding size=\"6\">\n                                <h5>{{list.date | date : 'dd-MMMM-yyyy'}}</h5>\n                            </ion-col>\n                            <ion-col no-padding size=\"6\">\n                                <p class=\"green-color\">{{list?.amountText}}</p>\n                            </ion-col>\n                            <ion-col no-padding size=\"12\">\n                                <span>{{list.description}}</span>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                    <div *ngIf=\"!lists.length\" class=\"nodata\">\n                        No Record Found!\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/proffesionalfee/proffesionalfee.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/proffesionalfee/proffesionalfee.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".more-btn ion-icon {\n  margin-right: 10px;\n}\n\n.top-head {\n  position: absolute;\n}\n\n.image-content {\n  position: relative;\n  height: 32%;\n}\n\n.tool-head label {\n  color: #fff;\n}\n\n.select-title {\n  padding-left: 15px;\n}\n\n.select-title ion-select {\n  color: #fff;\n  font-size: 25px;\n  margin-top: 10px;\n}\n\nion-select {\n  padding: 0 4px;\n}\n\n.expense-title {\n  border-right: 1px solid #fff;\n}\n\n.expense-title h1 {\n  color: #fff;\n  font-weight: 600;\n  margin-top: 10px;\n  font-size: 30px;\n}\n\n.expense-select {\n  background: #fff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  padding: 25px;\n}\n\n.expense-select select {\n  border: none;\n  font-size: 12px;\n  float: right;\n  background: none;\n  outline: none;\n  color: #62666B;\n}\n\n.expense-select h4 {\n  margin: 0px;\n  font-size: 18px;\n}\n\n.expense-select-detail p {\n  text-align: right;\n  margin: 0px;\n  font-size: 12px;\n}\n\nion-row.active {\n  border: 1px solid #009CDE;\n  background: rgba(212, 233, 248, 0.5);\n  border-radius: 5px;\n}\n\n.expense-select-detail span {\n  font-size: 12px;\n  color: #62666B;\n}\n\n.expense-select-detail h5 {\n  font-size: 15px;\n  margin: 0px 0px 3px;\n}\n\n.expense-select-detail {\n  padding-top: 20px;\n}\n\n.expense-detail {\n  padding-top: 0px;\n}\n\n@media only screen and (max-width: 375px) and (max-height: 812px) {\n  .image-content {\n    height: 25%;\n  }\n}\n\n@media only screen and (max-width: 375px) and (max-height: 667px) {\n  .image-content {\n    height: 30%;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  .image-content {\n    height: 30%;\n  }\n  .select-title ion-select {\n    font-size: 22px;\n  }\n  .expense-title h1 {\n    font-size: 26px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .image-content {\n    height: 35%;\n  }\n  .expense-title h1 {\n    font-size: 24px;\n  }\n  .tool-head label {\n    font-size: 14px;\n  }\n  .select-title ion-select {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3Byb2ZmZXNpb25hbGZlZS9wcm9mZmVzaW9uYWxmZWUucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9mZmVzaW9uYWxmZWUvcHJvZmZlc2lvbmFsZmVlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFBO0FDQUo7O0FERUE7RUFFSSxrQkFBQTtBQ0FKOztBREtBO0VBRUksa0JBQUE7RUFFQSxXQUFBO0FDSko7O0FETUE7RUFFSSxXQUFBO0FDSko7O0FETUE7RUFDSSxrQkFBQTtBQ0hKOztBREtBO0VBRUksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hKOztBREtBO0VBQ0ksY0FBQTtBQ0ZKOztBRFFBO0VBQ0ksNEJBQUE7QUNMSjs7QURPQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0pKOztBRE1BO0VBQ0ksZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQ0hKOztBREtBO0VBRUksWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0hKOztBREtBO0VBRUksV0FBQTtFQUNBLGVBQUE7QUNISjs7QURLQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNGSjs7QURJQTtFQUNJLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQ0RKOztBREdBO0VBRUcsZUFBQTtFQUNBLGNBQUE7QUNESDs7QURHQTtFQUVHLGVBQUE7RUFDQSxtQkFBQTtBQ0RIOztBREdBO0VBRUksaUJBQUE7QUNESjs7QURHQTtFQUNJLGdCQUFBO0FDQUo7O0FES0E7RUFFSTtJQUNJLFdBQUE7RUNITjtBQUNGOztBREtBO0VBRUk7SUFDSSxXQUFBO0VDSk47QUFDRjs7QURPQTtFQUVJO0lBQ0ksV0FBQTtFQ05OO0VEU0U7SUFFSSxlQUFBO0VDUk47RURVRTtJQUVJLGVBQUE7RUNUTjtBQUNGOztBRFlBO0VBRUk7SUFDSSxXQUFBO0VDWE47RURhRTtJQUVJLGVBQUE7RUNaTjtFRGNFO0lBQ0ksZUFBQTtFQ1pOO0VEZUU7SUFFSSxlQUFBO0VDZE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZmZXNpb25hbGZlZS9wcm9mZmVzaW9uYWxmZWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vcmUtYnRuIGlvbi1pY29uXHJcbntcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4udG9wLWhlYWRcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi8vIC50b29sLWhlYWQgaW9uLXJvdyB7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuLmltYWdlLWNvbnRlbnRcclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gaGVpZ2h0OiAyMTBweDtcclxuICAgIGhlaWdodDogMzIlO1xyXG59XHJcbi50b29sLWhlYWQgbGFiZWxcclxue1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnNlbGVjdC10aXRsZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLnNlbGVjdC10aXRsZSBpb24tc2VsZWN0IHtcclxuICAgXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuaW9uLXNlbGVjdCB7XHJcbiAgICBwYWRkaW5nOiAwIDRweDtcclxufVxyXG4vLyAuc2VsZWN0LXRpdGxlIHNlbGVjdCBvcHRpb24ge1xyXG4vLyAgICAgY29sb3I6ICMwMDljZGU7XHJcbi8vICAgICBmb250LXNpemU6IDE4cHg7XHJcbi8vIH1cclxuLmV4cGVuc2UtdGl0bGUge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcclxufVxyXG4uZXhwZW5zZS10aXRsZSBoMSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5leHBlbnNlLXNlbGVjdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4OyBcclxuICAgIHBhZGRpbmc6MjVweDtcclxufVxyXG4uZXhwZW5zZS1zZWxlY3Qgc2VsZWN0XHJcbntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6ICM2MjY2NkI7XHJcbn1cclxuLmV4cGVuc2Utc2VsZWN0IGg0XHJcbntcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5leHBlbnNlLXNlbGVjdC1kZXRhaWwgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbmlvbi1yb3cuYWN0aXZlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDlDREU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxMiwyMzMsMjQ4LDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmV4cGVuc2Utc2VsZWN0LWRldGFpbCBzcGFuXHJcbntcclxuICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICBjb2xvcjogIzYyNjY2QjtcclxufVxyXG4uZXhwZW5zZS1zZWxlY3QtZGV0YWlsIGg1XHJcbntcclxuICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICBtYXJnaW46MHB4IDBweCAzcHg7XHJcbn1cclxuLmV4cGVuc2Utc2VsZWN0LWRldGFpbFxyXG4ge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmV4cGVuc2UtZGV0YWlsIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweClhbmQgKG1heC1oZWlnaHQ6IDgxMnB4KVxyXG57XHJcbiAgICAuaW1hZ2UtY29udGVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNSVcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KWFuZCAobWF4LWhlaWdodDogNjY3cHgpXHJcbntcclxuICAgIC5pbWFnZS1jb250ZW50IHtcclxuICAgICAgICBoZWlnaHQ6MzAlXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpXHJcbntcclxuICAgIC5pbWFnZS1jb250ZW50IHtcclxuICAgICAgICBoZWlnaHQ6IDMwJTtcclxuICAgIH1cclxuICAgXHJcbiAgICAuc2VsZWN0LXRpdGxlIGlvbi1zZWxlY3Qge1xyXG4gICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG4gICAgLmV4cGVuc2UtdGl0bGUgaDF7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KVxyXG57XHJcbiAgICAuaW1hZ2UtY29udGVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNSVcclxuICAgIH1cclxuICAgIC5leHBlbnNlLXRpdGxlIGgxe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICAgIC50b29sLWhlYWQgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLnNlbGVjdC10aXRsZSBpb24tc2VsZWN0IHtcclxuICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLm1vcmUtYnRuIGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udG9wLWhlYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5pbWFnZS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDMyJTtcbn1cblxuLnRvb2wtaGVhZCBsYWJlbCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VsZWN0LXRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4uc2VsZWN0LXRpdGxlIGlvbi1zZWxlY3Qge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgcGFkZGluZzogMCA0cHg7XG59XG5cbi5leHBlbnNlLXRpdGxlIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcbn1cblxuLmV4cGVuc2UtdGl0bGUgaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uZXhwZW5zZS1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMjVweDtcbn1cblxuLmV4cGVuc2Utc2VsZWN0IHNlbGVjdCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjNjI2NjZCO1xufVxuXG4uZXhwZW5zZS1zZWxlY3QgaDQge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZXhwZW5zZS1zZWxlY3QtZGV0YWlsIHAge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW9uLXJvdy5hY3RpdmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA5Q0RFO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMiwgMjMzLCAyNDgsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmV4cGVuc2Utc2VsZWN0LWRldGFpbCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzYyNjY2Qjtcbn1cblxuLmV4cGVuc2Utc2VsZWN0LWRldGFpbCBoNSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwcHggMHB4IDNweDtcbn1cblxuLmV4cGVuc2Utc2VsZWN0LWRldGFpbCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uZXhwZW5zZS1kZXRhaWwge1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1oZWlnaHQ6IDgxMnB4KSB7XG4gIC5pbWFnZS1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDI1JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkgYW5kIChtYXgtaGVpZ2h0OiA2NjdweCkge1xuICAuaW1hZ2UtY29udGVudCB7XG4gICAgaGVpZ2h0OiAzMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLmltYWdlLWNvbnRlbnQge1xuICAgIGhlaWdodDogMzAlO1xuICB9XG4gIC5zZWxlY3QtdGl0bGUgaW9uLXNlbGVjdCB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG4gIC5leHBlbnNlLXRpdGxlIGgxIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLmltYWdlLWNvbnRlbnQge1xuICAgIGhlaWdodDogMzUlO1xuICB9XG4gIC5leHBlbnNlLXRpdGxlIGgxIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLnRvb2wtaGVhZCBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5zZWxlY3QtdGl0bGUgaW9uLXNlbGVjdCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/proffesionalfee/proffesionalfee.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/proffesionalfee/proffesionalfee.page.ts ***!
  \*********************************************************/
/*! exports provided: ProffesionalfeePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProffesionalfeePage", function() { return ProffesionalfeePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");
/* harmony import */ var _helper_currency__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helper/currency */ "./src/app/_helper/currency.ts");
/* harmony import */ var _helper_date_format__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helper/date-format */ "./src/app/_helper/date-format.ts");









var ProffesionalfeePage = /** @class */ (function () {
    function ProffesionalfeePage(activatedRoute, router, navCtrl, storageService, settingService, events) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.settingService = settingService;
        this.events = events;
        this.totalamount = 0;
        this.heading = '';
        this.year = '';
        this.lists = [];
        this.type = 'category';
        this.category = '';
        this.mlist = [];
        this.totalmonthamount = 0;
        this.currency = new _helper_currency__WEBPACK_IMPORTED_MODULE_7__["Currency"]();
        this.yearArray = [];
        this.dateformate = new _helper_date_format__WEBPACK_IMPORTED_MODULE_8__["DateFormat"]();
        this.userid = this.settingService.getUserId();
        this.yearArray = this.dateformate.getYearArray();
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.data = JSON.parse(params.data);
            _this.year = JSON.parse(params.data).year;
            _this.type = JSON.parse(params.data).type;
            _this.category = JSON.parse(params.data).category;
            if (_this.type === 'category') {
                _this.heading = JSON.parse(params.data).category;
            }
            else {
                _this.heading = _this.month_name(new Date(JSON.parse(params.data).category));
            }
            _this.getData();
        });
    }
    ProffesionalfeePage.prototype.ngOnInit = function () {
    };
    ProffesionalfeePage.prototype.getData = function () {
        this.lists = [];
        if (this.type === 'category') {
            this.getExpense();
        }
        else {
            this.getMonth();
        }
    };
    ProffesionalfeePage.prototype.details = function (data) {
        console.log(data);
        this.router.navigate(['/receiptdetail'], {
            queryParams: { data: JSON.stringify(data) }
        });
    };
    ProffesionalfeePage.prototype.selectYear = function (event) {
        this.year = event.target.value;
        this.totalamount = 0;
        this.getData();
    };
    // get expense
    ProffesionalfeePage.prototype.getExpense = function () {
        var _this = this;
        // expense list
        this.totalamount = 0;
        if (this.category !== '') {
            this.storageService.viewOcrByExpense(this.userid, this.year, this.category).then(function (res) {
                if (res.rows.length > 0) {
                    _this.lists = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        _this.lists.push({
                            amount: parseFloat(res.rows.item(i).amount).toFixed(2),
                            amountText: _this.currency.display(res.rows.item(i).amount),
                            date: res.rows.item(i).date,
                            id: res.rows.item(i).id,
                            description: res.rows.item(i).description
                        });
                    }
                    _this.totalamount = _this.getTotalAmount(_this.lists);
                }
            });
        }
        // end expense list
    };
    // get month
    ProffesionalfeePage.prototype.getMonth = function () {
        var _this = this;
        // month list
        this.totalamount = 0;
        if (this.category !== '') {
            this.storageService.viewOcrByMonth(this.userid, this.year, this.category).then(function (res) {
                if (res.rows.length > 0) {
                    _this.lists = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        _this.lists.push({
                            amount: parseFloat(res.rows.item(i).amount).toFixed(2),
                            amountText: _this.currency.display(res.rows.item(i).amount),
                            date: res.rows.item(i).date,
                            id: res.rows.item(i).id,
                            description: res.rows.item(i).description
                        });
                    }
                    _this.totalamount = _this.getTotalAmount(_this.lists);
                }
            });
        }
        // end month list
    };
    ProffesionalfeePage.prototype.getTotalAmount = function (list) {
        var totalAmount = 0;
        if (list.length > 0) {
            list.forEach(function (ele) {
                totalAmount = (totalAmount + parseFloat(ele.amount));
            });
        }
        if (isNaN(totalAmount)) {
            totalAmount = 0;
        }
        return this.currency.display(totalAmount);
    };
    ProffesionalfeePage.prototype.month_name = function (dt) {
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
    ProffesionalfeePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proffesionalfee',
            template: __webpack_require__(/*! ./proffesionalfee.page.html */ "./src/app/proffesionalfee/proffesionalfee.page.html"),
            styles: [__webpack_require__(/*! ./proffesionalfee.page.scss */ "./src/app/proffesionalfee/proffesionalfee.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_3__["PageTrack"])('View Receipt Screen'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_6__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]])
    ], ProffesionalfeePage);
    return ProffesionalfeePage;
}());



/***/ })

}]);
//# sourceMappingURL=proffesionalfee-proffesionalfee-module.js.map