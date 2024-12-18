(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["disclaimer-disclaimer-module"],{

/***/ "./src/app/disclaimer/disclaimer.module.ts":
/*!*************************************************!*\
  !*** ./src/app/disclaimer/disclaimer.module.ts ***!
  \*************************************************/
/*! exports provided: DisclaimerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisclaimerPageModule", function() { return DisclaimerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _disclaimer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./disclaimer.page */ "./src/app/disclaimer/disclaimer.page.ts");







var routes = [
    {
        path: '',
        component: _disclaimer_page__WEBPACK_IMPORTED_MODULE_6__["DisclaimerPage"]
    }
];
var DisclaimerPageModule = /** @class */ (function () {
    function DisclaimerPageModule() {
    }
    DisclaimerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_disclaimer_page__WEBPACK_IMPORTED_MODULE_6__["DisclaimerPage"]]
        })
    ], DisclaimerPageModule);
    return DisclaimerPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=disclaimer-disclaimer-module.js.map