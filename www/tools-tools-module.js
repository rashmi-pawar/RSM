(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tools-tools-module"],{

/***/ "./src/app/tools/tools.module.ts":
/*!***************************************!*\
  !*** ./src/app/tools/tools.module.ts ***!
  \***************************************/
/*! exports provided: ToolsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsPageModule", function() { return ToolsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tools_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tools.page */ "./src/app/tools/tools.page.ts");







var routes = [
    {
        path: '',
        component: _tools_page__WEBPACK_IMPORTED_MODULE_6__["ToolsPage"]
    }
];
var ToolsPageModule = /** @class */ (function () {
    function ToolsPageModule() {
    }
    ToolsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tools_page__WEBPACK_IMPORTED_MODULE_6__["ToolsPage"]]
        })
    ], ToolsPageModule);
    return ToolsPageModule;
}());



/***/ }),

/***/ "./src/app/tools/tools.page.html":
/*!***************************************!*\
  !*** ./src/app/tools/tools.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Tools and calculators\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"none\">\n    <ion-item (click)=\"goTo('viewreceipt')\">\n      <ion-img slot=\"start\" src=\"assets/img/home/favourites/receipt.png\"></ion-img>\n      <ion-label>Receipt Manager</ion-label>\n    </ion-item>\n    <ion-item (click)=\"goTo('triplogbook')\">\n      <ion-img slot=\"start\" src=\"assets/img/home/favourites/logbook.png\"></ion-img>\n      <ion-label>GPS Logbook</ion-label>\n    </ion-item>\n    <ion-item (click)=\"goTo('calculator')\">\n      <ion-img slot=\"start\" src=\"assets/img/home/favourites/calculator.png\"></ion-img>\n      <ion-label>Calculators</ion-label>\n    </ion-item>\n    <ion-item (click)=\"pagePush('tax-information')\">\n      <ion-img slot=\"start\" src=\"assets/img/tax.png\"></ion-img>\n      <ion-label>Important Tax Information</ion-label>\n    </ion-item>\n    <ion-item (click)=\"pagePush('investment-information')\">\n      <ion-img slot=\"start\" src=\"assets/img/payment.png\"></ion-img>\n      <ion-label>Investment Information</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tools/tools.page.scss":
/*!***************************************!*\
  !*** ./src/app/tools/tools.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #fafafa;\n}\n\nion-list {\n  padding: 10px;\n}\n\nion-item {\n  --ion-background-color: #fff;\n  --inner-padding-top: 15px !important;\n  --inner-padding-bottom: 15px !important;\n  padding: 2px;\n}\n\nion-img {\n  width: 40px;\n  height: 40px;\n}\n\nion-label {\n  font-size: 18px !important;\n  color: #62666b !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3Rvb2xzL3Rvb2xzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdG9vbHMvdG9vbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtFQUNBLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90b29scy90b29scy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4O1xufVxuXG5pb24taW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNjI2NjZiICFpbXBvcnRhbnQ7XG59XG4iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4O1xufVxuXG5pb24taW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNjI2NjZiICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/tools/tools.page.ts":
/*!*************************************!*\
  !*** ./src/app/tools/tools.page.ts ***!
  \*************************************/
/*! exports provided: ToolsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsPage", function() { return ToolsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_back_stack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/back-stack.service */ "./src/app/service/back-stack.service.ts");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");





var ToolsPage = /** @class */ (function () {
    function ToolsPage(navCtrl, backStack) {
        this.navCtrl = navCtrl;
        this.backStack = backStack;
    }
    ToolsPage.prototype.ngOnInit = function () {
    };
    ToolsPage.prototype.goTo = function (url) {
        this.backStack.setBackStack(url, 'tools');
        this.navCtrl.navigateRoot('/' + url);
    };
    ToolsPage.prototype.pagePush = function (url) {
        this.navCtrl.navigateForward('/' + url);
    };
    ToolsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tools',
            template: __webpack_require__(/*! ./tools.page.html */ "./src/app/tools/tools.page.html"),
            styles: [__webpack_require__(/*! ./tools.page.scss */ "./src/app/tools/tools.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_4__["PageTrack"])('Tools And Calculators Screen'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _service_back_stack_service__WEBPACK_IMPORTED_MODULE_3__["BackStackService"]])
    ], ToolsPage);
    return ToolsPage;
}());



/***/ })

}]);
//# sourceMappingURL=tools-tools-module.js.map