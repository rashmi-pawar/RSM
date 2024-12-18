(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/components/expandable/expandable.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/expandable/expandable.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #expandWrapper class='expand-wrapper' [class.collapsed]=\"!expanded\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/components/expandable/expandable.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/expandable/expandable.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expand-wrapper {\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto;\n  font-size: 14px;\n}\n\n.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL2NvbXBvbmVudHMvZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2V4cGFuZGFibGUvZXhwYW5kYWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGFuZC13cmFwcGVyIHtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjRzIGVhc2UtaW4tb3V0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbGxhcHNlZCB7XG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbn1cbiIsIi5leHBhbmQtd3JhcHBlciB7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cyBlYXNlLWluLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb2xsYXBzZWQge1xuICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/expandable/expandable.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/expandable/expandable.component.ts ***!
  \***************************************************************/
/*! exports provided: ExpandableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableComponent", function() { return ExpandableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExpandableComponent = /** @class */ (function () {
    function ExpandableComponent(renderer) {
        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = "150px";
    }
    ExpandableComponent.prototype.ngAfterViewInit = function () {
        // this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("expandWrapper", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ExpandableComponent.prototype, "expandWrapper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expanded"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ExpandableComponent.prototype, "expanded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expandHeight"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ExpandableComponent.prototype, "expandHeight", void 0);
    ExpandableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-expandable",
            template: __webpack_require__(/*! ./expandable.component.html */ "./src/app/components/expandable/expandable.component.html"),
            styles: [__webpack_require__(/*! ./expandable.component.scss */ "./src/app/components/expandable/expandable.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ExpandableComponent);
    return ExpandableComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" defaultHref=\"tabs/dashboard\"></ion-back-button>\n    </ion-buttons>\n    <div class=\"rsm-welcome\">\n      <img class=\"logo\" src=\"assets/img/home/rsm-logo.svg\" />\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <form [formGroup]=\"onAddForm\" class=\"list-form\">\n    <div class=\"social ion-padding-horizontal\">\n      <ion-text class=\"account-data\">\n        <h6>Login with</h6>\n      </ion-text>\n      <ion-row class=\"text-center\">\n        <ion-col size=\"{{isAppleSignIn() ? '4' : '6'}}\" no-padding (click)=\"fbLogin()\">\n          <button type=\"button\" class=\"fb-btn\"><img src=\"assets/icon/ficn.png\"></button>\n        </ion-col>\n        <ion-col size=\"{{isAppleSignIn() ? '4' : '6'}}\" no-padding (click)=\"googleLogin()\">\n          <button type=\"button\" class=\"gogle\">\n            <ion-icon name=\"logo-googleplus\"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col *ngIf=\"isAppleSignIn()\" size=\"4\" no-padding (click)=\"appleLogin()\">\n          <button type=\"button\" class=\"apple\">\n            <ion-icon name=\"logo-apple\"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"text-center\">\n        <ion-col size=\"12\" no-padding (click)=\"azureLogin()\">\n          <button type=\"button\" class=\"azure\">\n            Sign in with Azure AD\n          </button>\n        </ion-col>\n      </ion-row>\n      <h5 class=\"text-center\">OR</h5>\n    </div>\n    <div class=\"ion-padding-horizontal\">\n      <ion-item no-padding>\n        <ion-label position=\"floating\">Email Address</ion-label>\n        <ion-input type=\"text\" inputmode=\"email\" formControlName=\"email\"></ion-input>\n      </ion-item>\n      <div no-padding *ngIf=\"onAddForm.controls.email.hasError('required') && onAddForm.controls.email.touched\">\n        <p class=\"text08\">Please enter email address.</p>\n      </div>\n      <div lines=\"none\" no-padding\n        *ngIf=\"onAddForm.controls.email.hasError('pattern') && onAddForm.controls.email.touched\">\n        <p class=\"text08\">Enter valid email address</p>\n      </div>\n\n      <ion-item no-padding>\n        <ion-label position=\"floating\">Password</ion-label>\n        <app-show-hide-password>\n        <ion-input type=\"Password\" inputmode=\"password\" formControlName=\"password\"></ion-input>\n      </app-show-hide-password>\n      </ion-item>\n      <div *ngIf=\"onAddForm.controls.password.hasError('required') && onAddForm.controls.password.touched\">\n        <p class=\"text08\">Please enter password.</p>\n      </div>\n      <ion-text>\n        <p class=\"for-pass\" (click)=\"goo('forgotpassword')\">Forgot password?</p>\n      </ion-text>\n      <br>\n      <ion-button color=\"primary\" expand=\"full\" [disabled]=\"!onAddForm.valid\" (click)=\"signIn()\" mode=\"md\">Login\n      </ion-button>\n      <div class=\"log-here  ion-padding-vertical\">\n        <p>Don’t have an account?<span class=\"blue-color\" (click)=\"goo('signup')\">Register here</span></p>\n      </div>\n    </div>\n\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-data h6 {\n  margin: 10px 0 25px;\n  color: #62666A;\n}\n\n.account-data span {\n  color: #009cde;\n}\n\n.forgot-pass h1 {\n  color: #2f2f2f;\n  font-size: 24px;\n  margin-top: 0px;\n}\n\n.for-pass {\n  display: inline-block;\n  float: right;\n  color: #009CDE;\n  text-align: right;\n  margin: 10px 0px 22px;\n  padding-right: 2%;\n}\n\n.social h5 {\n  text-align: center;\n  font-size: 16px;\n  color: #878C8E;\n}\n\nion-row.text-center {\n  text-align: center;\n}\n\n.log-here {\n  text-align: center;\n}\n\n.log-here p {\n  color: #2f2f2f;\n}\n\n.log-here span {\n  padding-left: 20px;\n}\n\n.forgot-pass ion-icon {\n  font-size: 25px;\n}\n\nbutton.fb-btn {\n  background: #1b3771;\n  color: #fff;\n  height: 60px;\n  width: 95%;\n  border-radius: 5px;\n}\n\nbutton.gogle {\n  background: #b83222;\n  color: #fff;\n  border-radius: 5px;\n  height: 60px;\n  font-size: 22px;\n  width: 95%;\n}\n\nbutton.apple {\n  background: #000;\n  color: #fff;\n  border-radius: 5px;\n  height: 60px;\n  font-size: 22px;\n  width: 95%;\n}\n\nbutton.azure {\n  background: #0078d4;\n  color: #fff;\n  border-radius: 5px;\n  height: 60px;\n  font-size: 22px;\n  width: 97.5%;\n  margin-top: 2.5%;\n}\n\n.rsm-welcome {\n  text-align: center;\n  margin-right: 48px;\n  margin-top: 12px;\n}\n\n.rsm-welcome .logo {\n  height: 48px;\n}\n\n@media screen and (max-width: 360px) {\n  .forgot-pass ion-icon {\n    font-size: 26px;\n  }\n  .forgot-pass h1 {\n    font-size: 22px;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .forgot-pass ion-icon {\n    font-size: 24px;\n  }\n  .forgot-pass h1 {\n    font-size: 20px;\n  }\n  .log-here p {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFFSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUVJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0FDR0o7O0FEREE7RUFFSSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksY0FBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7QUNLSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDS0o7O0FESEE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ01KOztBREpBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ09KOztBRExBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDUUo7O0FEUEU7RUFDRSxZQUFBO0FDU0o7O0FETkE7RUFFSTtJQUNJLGVBQUE7RUNRTjtFRE5FO0lBRUEsZUFBQTtFQ09GO0FBQ0Y7O0FETEE7RUFFSTtJQUNJLGVBQUE7RUNNTjtFREpFO0lBRUEsZUFBQTtFQ0tGO0VESEY7SUFFSSxlQUFBO0VDSUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvdW50LWRhdGEgaDZcbntcbiAgICBtYXJnaW46IDEwcHggMCAyNXB4O1xuICAgIGNvbG9yOiAjNjI2NjZBO1xufVxuLmFjY291bnQtZGF0YSBzcGFuIHtcbiAgICBjb2xvcjogIzAwOWNkZTtcbn1cbi5mb3Jnb3QtcGFzcyBoMVxue1xuICAgIGNvbG9yOiAjMmYyZjJmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG59XG4uZm9yLXBhc3NcbntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjMDA5Q0RFO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbjoxMHB4IDBweCAyMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xufVxuLnNvY2lhbCBoNSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzg3OEM4RTtcbn1cbmlvbi1yb3cudGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2ctaGVyZVxue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2ctaGVyZSBwIHtcbiAgICBjb2xvcjogIzJmMmYyZjtcbn1cbi5sb2ctaGVyZSBzcGFuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cblxuXG4uZm9yZ290LXBhc3MgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cbmJ1dHRvbi5mYi1idG4ge1xuICAgIGJhY2tncm91bmQ6ICMxYjM3NzE7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuYnV0dG9uLmdvZ2xlIHtcbiAgICBiYWNrZ3JvdW5kOiAjYjgzMjIyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHdpZHRoOiA5NSU7XG59XG5idXR0b24uYXBwbGUge1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgd2lkdGg6IDk1JTtcbn1cbmJ1dHRvbi5henVyZSB7XG4gICAgYmFja2dyb3VuZDogIzAwNzhkNDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB3aWR0aDogOTcuNSU7XG4gICAgbWFyZ2luLXRvcDogMi41JTtcbn1cbi5yc20td2VsY29tZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogNDhweDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAubG9nbyB7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2MHB4KVxue1xuICAgIC5mb3Jnb3QtcGFzcyBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICB9XG4gICAgLmZvcmdvdC1wYXNzIGgxXG57XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozMjBweClcbntcbiAgICAuZm9yZ290LXBhc3MgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICAgIC5mb3Jnb3QtcGFzcyBoMVxue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5sb2ctaGVyZSBwXG57XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxufVxuIiwiLmFjY291bnQtZGF0YSBoNiB7XG4gIG1hcmdpbjogMTBweCAwIDI1cHg7XG4gIGNvbG9yOiAjNjI2NjZBO1xufVxuXG4uYWNjb3VudC1kYXRhIHNwYW4ge1xuICBjb2xvcjogIzAwOWNkZTtcbn1cblxuLmZvcmdvdC1wYXNzIGgxIHtcbiAgY29sb3I6ICMyZjJmMmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uZm9yLXBhc3Mge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICMwMDlDREU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IDEwcHggMHB4IDIycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xufVxuXG4uc29jaWFsIGg1IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjODc4QzhFO1xufVxuXG5pb24tcm93LnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nLWhlcmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2ctaGVyZSBwIHtcbiAgY29sb3I6ICMyZjJmMmY7XG59XG5cbi5sb2ctaGVyZSBzcGFuIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uZm9yZ290LXBhc3MgaW9uLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbmJ1dHRvbi5mYi1idG4ge1xuICBiYWNrZ3JvdW5kOiAjMWIzNzcxO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogOTUlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmJ1dHRvbi5nb2dsZSB7XG4gIGJhY2tncm91bmQ6ICNiODMyMjI7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB3aWR0aDogOTUlO1xufVxuXG5idXR0b24uYXBwbGUge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgd2lkdGg6IDk1JTtcbn1cblxuYnV0dG9uLmF6dXJlIHtcbiAgYmFja2dyb3VuZDogIzAwNzhkNDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIHdpZHRoOiA5Ny41JTtcbiAgbWFyZ2luLXRvcDogMi41JTtcbn1cblxuLnJzbS13ZWxjb21lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4ucnNtLXdlbGNvbWUgLmxvZ28ge1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5mb3Jnb3QtcGFzcyBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG4gIC5mb3Jnb3QtcGFzcyBoMSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAuZm9yZ290LXBhc3MgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAuZm9yZ290LXBhc3MgaDEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAubG9nLWhlcmUgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/sign-in-with-apple/ngx */ "./node_modules/@ionic-native/sign-in-with-apple/ngx/index.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");













var LoginPage = /** @class */ (function () {
    function LoginPage(platform, device, formBuilder, fb, toastCtrl, googlePlus, navCtrl, apiService, events, activatedRoute, loadingController, storageService, settingService, menuCtrl, signInWithApple, router) {
        this.platform = platform;
        this.device = device;
        this.formBuilder = formBuilder;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.googlePlus = googlePlus;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.events = events;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.storageService = storageService;
        this.settingService = settingService;
        this.menuCtrl = menuCtrl;
        this.signInWithApple = signInWithApple;
        this.router = router;
        this.fbId = '';
        this.url = '';
        this.nextURL = '';
        this.isLoading = false;
        this.deviceId = '';
        this.azureOptions = {
            authorities: [
                {
                    type: 'AAD',
                    audience: 'AzureADMyOrg',
                    authorityUrl: '',
                    cloudInstance: 'MSALAzurePublicCloudInstance',
                    default: true
                }
            ],
            clientId: '7b2719c4-a838-49c3-96f3-f7c0442af897',
            tenantId: 'ba5539d8-8587-43e9-a52f-f47044618afc' //DEV
            // clientId: '5099458b-e22c-4b85-8dbb-58076ff114c3', //PROD
            // tenantId: '6ebe720a-6a71-4cd3-9180-ab62d28abc89' //PROD
        };
        this.menuCtrl.enable(false);
        this.onAddForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]))
        });
    }
    LoginPage.prototype.updateid = function (userid) {
        this.storageService.updateUserid(userid).then(function (res) {
        }).catch(function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.isAppleSignIn = function () {
        if (this.platform.is('ios')) {
            return parseFloat(this.device.version) >= 13;
        }
        return false;
    };
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.activatedRoute);
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.url = params.data;
            console.log("params.data", params.nextURL);
            _this.nextURL = params.nextURL;
        });
        this.settingService.getDeviceId().then(function (res) {
            _this.deviceId = res;
        }).catch(function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'loading',
                                duration: 3000
                            })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        loading.onDidDismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.dismissLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('dismissed call');
                        this.isLoading = false;
                        return [4 /*yield*/, this.loadingController
                                .dismiss()
                                .then(function () { return console.log('dismissed'); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginPage.prototype.presentToast = function (msg) {
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
    LoginPage.prototype.fbLogin = function () {
        var _this = this;
        this.fb
            .login(['public_profile', 'email'])
            .then(function (res) {
            if (res.status === 'connected') {
                _this.fbId = res.authResponse.userID;
                _this.fb
                    .api('me?fields=id,name,email,first_name,last_name', [])
                    .then(function (profile) {
                    _this.signUp(profile, 'facebook');
                });
            }
            else {
                _this.presentToast(res["message"]);
            }
        })
            .catch(function (e) {
            console.log('Error logging into Facebook', e);
            _this.presentToast(e.errorMessage);
        });
    };
    LoginPage.prototype.googleLogin = function () {
        var _this = this;
        this.googlePlus
            .login({})
            .then(function (res) {
            _this.signUp(res, 'google');
        })
            .catch(function (err) {
            console.error('err', err);
            _this.presentToast(err);
        });
    };
    LoginPage.prototype.appleLogin = function () {
        var _this = this;
        this.signInWithApple.signin({
            requestedScopes: [
                _ionic_native_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_9__["ASAuthorizationAppleIDRequest"].ASAuthorizationScopeFullName,
                _ionic_native_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_9__["ASAuthorizationAppleIDRequest"].ASAuthorizationScopeEmail
            ]
        })
            .then(function (res) {
            // https://developer.apple.com/documentation/signinwithapplerestapi/verifying_a_user
            console.log(res);
            if (res.email) {
                localStorage.setItem('appleResponse', JSON.stringify(res));
            }
            else {
                if (localStorage.getItem('appleResponse')) {
                    var detail = JSON.parse(localStorage.getItem('appleResponse'));
                    res.fullName.givenName = detail.fullName.givenName;
                    res.fullName.familyName = detail.fullName.familyName;
                }
            }
            _this.signUp(res, 'apple');
        })
            .catch(function (error) {
            _this.presentToast(error.code + ' ' + error.localizedDescription);
            console.error(error);
        });
    };
    LoginPage.prototype.msalLogin = function (data) {
        var _this = this;
        this.presentLoading();
        data.deviceId = this.deviceId;
        data.userToken = localStorage.getItem('registrationId'),
            this.apiService.azureLogin(data).subscribe(function (resp) {
                console.log(resp);
                if (resp && resp.status === true) {
                    _this.settingService.setUserData(resp.user);
                    _this.settingService.setToken(resp.token);
                    _this.updateid(resp.user.id);
                    localStorage.setItem('init', 'false');
                    _this.events.publish('user:created', Date.now());
                    _this.presentToast('You have successfully logged in.');
                    _this.dismissLoading();
                    if (_this.nextURL) {
                        _this.navCtrl.navigateRoot(_this.nextURL);
                    }
                    else {
                        _this.navCtrl.navigateRoot('/tabs/dashboard');
                    }
                }
                else {
                    _this.presentToast(resp.message);
                    _this.dismissLoading();
                }
            }, function (err) {
                console.log(err);
                _this.presentToast(err.error.message);
                console.log(err.error.message);
                _this.dismissLoading();
            });
    };
    LoginPage.prototype.azureLogin = function () {
        var that = this;
        that.presentLoading();
        window.cordova.plugins.msalPlugin.msalInit(function () {
            window.cordova.plugins.msalPlugin.signOut(function (msg) {
                console.log(msg);
                // Success logic goes here
                window.cordova.plugins.msalPlugin.signInInteractive(function (resp) {
                    console.log(resp);
                    console.log(JSON.stringify(resp));
                    if (resp && resp.token) {
                        that.msalLogin({ access_token: resp.token });
                    }
                    else {
                        that.presentToast('Something went wring!.');
                    }
                    this.dismissLoading();
                    // alert(JSON.stringify(resp))
                    // resp is an object containing information about the signed in user, see below.
                }, function (err) {
                    that.dismissLoading();
                    console.log(err);
                    // Usually if we get an error it just means the user cancelled the
                    // signin process and closed the popup window. Handle this however
                    // you want, depending again if you want guest access or not.
                });
            }, function (err) {
                that.dismissLoading();
                console.log(err);
                // An error here usually either means you accidentally tried to
                // sign out someone who wasn't signed in, or there was a problem
                // communicating with the server.
            });
        }, function (err) {
            that.dismissLoading();
            console.log(err);
            // err has your exception message
        }, this.azureOptions);
    };
    LoginPage.prototype.goo = function (url) {
        this.settingService.unsetSignUpData();
        this.navCtrl.navigateForward('/' + url, { queryParams: { nextURL: this.nextURL } });
    };
    LoginPage.prototype.signIn = function () {
        var _this = this;
        this.presentLoading();
        var data = {
            email: this.onAddForm.value.email,
            password: this.onAddForm.value.password,
            deviceId: this.deviceId,
            userToken: localStorage.getItem('registrationId'),
        };
        this.apiService.login(data).subscribe(function (res) {
            if (res.status === true) {
                _this.settingService.setUserData(res.user);
                _this.settingService.setToken(res.token);
                _this.updateid(res.user.id);
                _this.events.publish('user:created', Date.now());
                _this.presentToast('You have successfully logged in.');
                localStorage.setItem('init', 'false');
                console.log(_this.url);
                if (_this.url) {
                    _this.navCtrl.navigateRoot('/' + _this.url);
                }
                else {
                    if (_this.nextURL) {
                        _this.navCtrl.navigateRoot(_this.nextURL);
                    }
                    else {
                        _this.navCtrl.navigateRoot('/tabs/dashboard');
                    }
                }
            }
            else {
                _this.presentToast('LoggedIn Unsuccessful');
            }
        }, function (err) {
            _this.presentToast(err.error.message);
            console.log(err.error.message);
        });
    };
    LoginPage.prototype.goto = function (url) {
        this.navCtrl.navigateRoot('/' + url);
    };
    LoginPage.prototype.signUp = function (res, type) {
        var _this = this;
        this.presentLoading();
        var data = {};
        if (type === 'google') {
            data = {
                first_name: res.givenName,
                last_name: res.familyName,
                email: res.email,
                deviceId: this.deviceId,
                userToken: localStorage.getItem('registrationId'),
                mobile_no: '',
                googleId: res.userId
            };
        }
        else if (type === 'apple') {
            data = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, (res.fullName.givenName ? { first_name: res.fullName.givenName } : {}), (res.fullName.familyName ? { last_name: res.fullName.familyName } : {}), (res.email ? { email: res.email } : {}), { appleUserId: res.user, authorizationCode: res.authorizationCode, identityToken: res.identityToken, deviceId: this.deviceId, userToken: localStorage.getItem('registrationId') });
        }
        else {
            data = {
                first_name: res.first_name,
                last_name: res.last_name,
                email: res.email,
                deviceId: this.deviceId,
                userToken: localStorage.getItem('registrationId'),
                mobile_no: '',
                facebookId: this.fbId
            };
        }
        this.apiService.signup(data).subscribe(function (resp) {
            if (resp.status === true) {
                _this.settingService.setUserData(resp.user);
                _this.settingService.setToken(resp.token);
                _this.updateid(resp.user.id);
                localStorage.setItem('init', 'false');
                _this.events.publish('user:created', Date.now());
                _this.presentToast('You have successfully logged in.');
                if (_this.nextURL) {
                    _this.navCtrl.navigateRoot(_this.nextURL);
                }
                else {
                    _this.navCtrl.navigateRoot('/tabs/dashboard');
                }
            }
            else {
                _this.presentToast(resp.message);
            }
        }, function (err) {
            console.log(err);
            _this.presentToast(err.error.message);
            console.log(err.error.message);
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_10__["PageTrack"])('Login Screen'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_12__["Device"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_3__["Facebook"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__["GooglePlus"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
            _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Events"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_11__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"],
            _ionic_native_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_9__["SignInWithApple"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/expandable/expandable.component */ "./src/app/components/expandable/expandable.component.ts");
/* harmony import */ var _updatepassword_show_hide_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updatepassword/show-hide-password.component */ "./src/app/updatepassword/show-hide-password.component.ts");







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_5__["ExpandableComponent"], _updatepassword_show_hide_password_component__WEBPACK_IMPORTED_MODULE_6__["ShowHidePasswordComponent"]],
            entryComponents: [_components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_5__["ExpandableComponent"], _updatepassword_show_hide_password_component__WEBPACK_IMPORTED_MODULE_6__["ShowHidePasswordComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ],
            exports: [_components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_5__["ExpandableComponent"], _updatepassword_show_hide_password_component__WEBPACK_IMPORTED_MODULE_6__["ShowHidePasswordComponent"]],
            providers: [],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/updatepassword/show-hide-password.component.html":
/*!******************************************************************!*\
  !*** ./src/app/updatepassword/show-hide-password.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n<a class=\"type-toggle\" (click)=\"toggleShow()\">\n   <ion-icon class=\"show-option\" [hidden]=\"showPassword\" name=\"eye-off\"></ion-icon>\n   <ion-icon class=\"hide-option\" [hidden]=\"!showPassword\" name=\"eye\"></ion-icon>\n</a>"

/***/ }),

/***/ "./src/app/updatepassword/show-hide-password.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/updatepassword/show-hide-password.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n:host .type-toggle {\n  padding-inline-start: 0.5rem;\n}\n:host .type-toggle .show-option,\n:host .type-toggle .hide-option {\n  font-size: 1.2rem;\n  display: block;\n  color: gray;\n}\n:host .type-toggle .show-option:not(ion-icon),\n:host .type-toggle .hide-option:not(ion-icon) {\n  text-transform: uppercase;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3VwZGF0ZXBhc3N3b3JkL3Nob3ctaGlkZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXBkYXRlcGFzc3dvcmQvc2hvdy1oaWRlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQUU7RUFDSSw0QkFBQTtBQ0VOO0FEREU7O0VBRU0saUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0dSO0FERFE7O0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDSVYiLCJmaWxlIjoic3JjL2FwcC91cGRhdGVwYXNzd29yZC9zaG93LWhpZGUtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAudHlwZS10b2dnbGUge1xuICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAuNXJlbTtcbiAgLnNob3ctb3B0aW9uLFxuICAgICAgLmhpZGUtb3B0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgLy8gSW4gY2FzZSB5b3Ugd2FudCB0byB1c2UgdGV4dCBpbnN0ZWFkIG9mIGljb25zXG4gICAgICAgICY6bm90KGlvbi1pY29uKSB7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLnR5cGUtdG9nZ2xlIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAuNXJlbTtcbn1cbjpob3N0IC50eXBlLXRvZ2dsZSAuc2hvdy1vcHRpb24sXG46aG9zdCAudHlwZS10b2dnbGUgLmhpZGUtb3B0aW9uIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogZ3JheTtcbn1cbjpob3N0IC50eXBlLXRvZ2dsZSAuc2hvdy1vcHRpb246bm90KGlvbi1pY29uKSxcbjpob3N0IC50eXBlLXRvZ2dsZSAuaGlkZS1vcHRpb246bm90KGlvbi1pY29uKSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/updatepassword/show-hide-password.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/updatepassword/show-hide-password.component.ts ***!
  \****************************************************************/
/*! exports provided: ShowHidePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowHidePasswordComponent", function() { return ShowHidePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ShowHidePasswordComponent = /** @class */ (function () {
    function ShowHidePasswordComponent() {
        this.showPassword = false;
    }
    ShowHidePasswordComponent.prototype.toggleShow = function () {
        this.showPassword = !this.showPassword;
        this.input.type = this.showPassword ? 'text' : 'password';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"])
    ], ShowHidePasswordComponent.prototype, "input", void 0);
    ShowHidePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-hide-password',
            template: __webpack_require__(/*! ./show-hide-password.component.html */ "./src/app/updatepassword/show-hide-password.component.html"),
            styles: [__webpack_require__(/*! ./show-hide-password.component.scss */ "./src/app/updatepassword/show-hide-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShowHidePasswordComponent);
    return ShowHidePasswordComponent;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map