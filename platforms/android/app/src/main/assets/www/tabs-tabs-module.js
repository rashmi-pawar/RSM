(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'dashboard',
                children: [
                    {
                        path: '',
                        loadChildren: '../dashboard/dashboard.module#DashboardPageModule'
                    }
                ]
            },
            {
                path: 'tools',
                children: [
                    {
                        path: '',
                        loadChildren: '../tools/tools.module#ToolsPageModule'
                    }
                ]
            },
            {
                path: 'findus',
                children: [
                    {
                        path: '',
                        loadChildren: '../findus/findus.module#FindusPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/dashboard',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");








var routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"]
    }
];
var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _tabs_routing_module__WEBPACK_IMPORTED_MODULE_6__["TabsPageRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.html":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\" class=\"color-change\">\n    <ion-tab-button tab=\"dashboard\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"tools\">\n      <ion-icon name=\"folder\"></ion-icon>\n      <ion-label>Tools & Calculators</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"findus\" (click)=\"goTo('findus')\">\n      <ion-icon name=\"pin\"></ion-icon>\n      <ion-label>Find us</ion-label>\n    </ion-tab-button>\n    <ion-tab-button (click)=\"openMenu()\">\n      <ion-icon name=\"more\"></ion-icon>\n      <ion-label>More</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color-change ion-icon {\n  color: #d8d8d8;\n}\n\n.right-side p {\n  color: #2f2f2f !important;\n}\n\n.current-add h4 {\n  color: #353A41;\n  font-size: 15px;\n  margin-top: 0px;\n  margin-bottom: 5px;\n}\n\n.current-add p {\n  margin: 0px;\n  font-size: 12px;\n}\n\n.current-add h5 {\n  margin: 0px;\n  font-size: 16px;\n}\n\n.current-add span {\n  float: right;\n  font-size: 15px;\n}\n\n.color-change .tab-selected {\n  border-bottom: 3px solid #009CDE;\n}\n\n.color-change .tab-selected ion-icon {\n  color: #009CDE !important;\n}\n\n.current-add {\n  padding: 20px 0px;\n}\n\nion-tabs ion-label {\n  font-size: 10px !important;\n  color: #878C8E !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxjQUFBO0FDQUo7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUVJLFdBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFFSSxXQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBRUksWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLGdDQUFBO0FDRUo7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURFSTtFQUNJLDBCQUFBO0VBQ0EseUJBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3ItY2hhbmdlIGlvbi1pY29uXG57XG4gICAgY29sb3I6ICNkOGQ4ZDg7XG59XG4ucmlnaHQtc2lkZSBwIHtcbiAgICBjb2xvcjogIzJmMmYyZiAhaW1wb3J0YW50O1xufVxuXG4uY3VycmVudC1hZGQgaDQge1xuICAgIGNvbG9yOiAjMzUzQTQxO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmN1cnJlbnQtYWRkIHBcbntcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uY3VycmVudC1hZGQgaDVcbntcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4uY3VycmVudC1hZGQgc3Bhblxue1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uY29sb3ItY2hhbmdlIC50YWItc2VsZWN0ZWQge1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDA5Q0RFO1xufVxuXG5cbi5jb2xvci1jaGFuZ2UgLnRhYi1zZWxlY3RlZCBpb24taWNvbiB7XG4gICAgY29sb3I6ICMwMDlDREUgIWltcG9ydGFudDtcbn1cbi5jdXJyZW50LWFkZCB7XG4gICAgcGFkZGluZzogMjBweCAwcHg7XG59XG5cbmlvbi10YWJze1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogIzg3OEM4RSAhaW1wb3J0YW50O1xuICAgIH1cbn0iLCIuY29sb3ItY2hhbmdlIGlvbi1pY29uIHtcbiAgY29sb3I6ICNkOGQ4ZDg7XG59XG5cbi5yaWdodC1zaWRlIHAge1xuICBjb2xvcjogIzJmMmYyZiAhaW1wb3J0YW50O1xufVxuXG4uY3VycmVudC1hZGQgaDQge1xuICBjb2xvcjogIzM1M0E0MTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmN1cnJlbnQtYWRkIHAge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY3VycmVudC1hZGQgaDUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY3VycmVudC1hZGQgc3BhbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY29sb3ItY2hhbmdlIC50YWItc2VsZWN0ZWQge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwOUNERTtcbn1cblxuLmNvbG9yLWNoYW5nZSAudGFiLXNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDlDREUgIWltcG9ydGFudDtcbn1cblxuLmN1cnJlbnQtYWRkIHtcbiAgcGFkZGluZzogMjBweCAwcHg7XG59XG5cbmlvbi10YWJzIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzg3OEM4RSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_back_stack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/back-stack.service */ "./src/app/service/back-stack.service.ts");




var TabsPage = /** @class */ (function () {
    function TabsPage(menuCtrl, navCtrl, backStack) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.backStack = backStack;
    }
    TabsPage.prototype.ngOnInit = function () {
    };
    TabsPage.prototype.openMenu = function () {
        this.menuCtrl.enable(true, 'menu');
        this.menuCtrl.open('menu');
    };
    // Start the slide autoplay when the view will enter
    TabsPage.prototype.ionViewWillEnter = function () {
        if (this.backStack.getBackFromMenu()) {
            this.backStack.resetBackFromMenu();
            this.openMenu();
        }
    };
    TabsPage.prototype.goTo = function (url) {
        this.backStack.setBackStack(url, 'tabs/dashboard');
    };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _service_back_stack_service__WEBPACK_IMPORTED_MODULE_3__["BackStackService"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map