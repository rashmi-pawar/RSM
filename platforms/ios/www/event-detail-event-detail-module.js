(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-detail-event-detail-module"],{

/***/ "./src/app/event-detail/event-detail.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/event-detail/event-detail.module.ts ***!
  \*****************************************************/
/*! exports provided: EventDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailPageModule", function() { return EventDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _event_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-detail.page */ "./src/app/event-detail/event-detail.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");








var routes = [
    {
        path: '',
        component: _event_detail_page__WEBPACK_IMPORTED_MODULE_6__["EventDetailPage"]
    }
];
var EventDetailPageModule = /** @class */ (function () {
    function EventDetailPageModule() {
    }
    EventDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_event_detail_page__WEBPACK_IMPORTED_MODULE_6__["EventDetailPage"], _event_detail_page__WEBPACK_IMPORTED_MODULE_6__["SafeHtmlPipe"]]
        })
    ], EventDetailPageModule);
    return EventDetailPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=event-detail-event-detail-module.js.map