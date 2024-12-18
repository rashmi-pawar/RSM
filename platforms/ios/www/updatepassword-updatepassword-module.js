(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["updatepassword-updatepassword-module"],{

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



/***/ }),

/***/ "./src/app/updatepassword/updatepassword.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/updatepassword/updatepassword.module.ts ***!
  \*********************************************************/
/*! exports provided: UpdatepasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatepasswordPageModule", function() { return UpdatepasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _updatepassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updatepassword.page */ "./src/app/updatepassword/updatepassword.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");








var routes = [
    {
        path: '',
        component: _updatepassword_page__WEBPACK_IMPORTED_MODULE_6__["UpdatepasswordPage"]
    }
];
var UpdatepasswordPageModule = /** @class */ (function () {
    function UpdatepasswordPageModule() {
    }
    UpdatepasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_updatepassword_page__WEBPACK_IMPORTED_MODULE_6__["UpdatepasswordPage"]]
        })
    ], UpdatepasswordPageModule);
    return UpdatepasswordPageModule;
}());



/***/ }),

/***/ "./src/app/updatepassword/updatepassword.page.html":
/*!*********************************************************!*\
  !*** ./src/app/updatepassword/updatepassword.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" defaultHref=\"tabs/dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"dark\">\n      Change Password\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <form [formGroup]=\"onAddForm\" class=\"list-form\">\n    <ion-item no-padding>\n      <ion-label position=\"floating\">Old Password</ion-label>\n      <app-show-hide-password>\n        <ion-input type=\"password\" formControlName=\"oldpassword\"></ion-input>\n      </app-show-hide-password>\n    </ion-item>\n    <div *ngIf=\"onAddForm.controls.oldpassword.hasError('required') && onAddForm.controls.oldpassword.touched\">\n      <p class=\"text08\">Sorry, field old password is required!</p>\n    </div>\n    <ion-item no-padding>\n      <ion-label position=\"floating\">New Password</ion-label>\n      <app-show-hide-password>\n        <ion-input type=\"password\" formControlName=\"newpassword\" minlength=\"8\"></ion-input>\n      </app-show-hide-password>\n    </ion-item>\n    <div *ngIf=\"onAddForm.controls.newpassword.hasError('required') && onAddForm.controls.newpassword.touched\">\n      <p class=\"text08\">Sorry, field new password is required!</p>\n    </div>\n    <div *ngIf=\"onAddForm.controls.newpassword.hasError('pattern') && onAddForm.controls.newpassword.touched\">\n      <p class=\"text08\">Password must contain at least 8 characters, uppercase, lowercase, special character and number </p>\n    </div>\n    <ion-item no-padding>\n      <ion-label position=\"floating\">Confirm Password</ion-label>\n      <app-show-hide-password>\n        <ion-input type=\"password\" formControlName=\"retypepassword\"></ion-input>\n      </app-show-hide-password>\n    </ion-item>\n    <div *ngIf=\"onAddForm.controls.retypepassword.hasError('required') && onAddForm.controls.retypepassword.touched\">\n      <p class=\"text08\">Sorry, field confirm password is required!</p>\n      </div>\n      <div\n        *ngIf=\"!onAddForm.get('retypepassword').errors && onAddForm.hasError('passwordNotMatch') && (onAddForm.get('retypepassword').dirty || onAddForm.get('retypepassword').touched)\">\n        <p class=\"text08\">New Password and Confirm Password should match</p>\n    </div>\n    <ion-button expand=\"full\" color=\"primary\" class=\"ion-margin-top\" (click)=\"updatePassword()\"\n      [disabled]=\"!onAddForm.valid \" mode=\"md\">RESET</ion-button>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/updatepassword/updatepassword.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/updatepassword/updatepassword.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forgot-pass h1 {\n  color: #2f2f2f;\n  font-size: 24px;\n}\n\n.avvv {\n  padding: 35px;\n}\n\n.forgot-pass ion-icon {\n  font-size: 30px;\n}\n\n@media screen and (max-width: 360px) {\n  .forgot-pass ion-icon {\n    font-size: 26px;\n  }\n  .forgot-pass h1 {\n    font-size: 22px;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .forgot-pass ion-icon {\n    font-size: 24px;\n  }\n  .forgot-pass h1 {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3VwZGF0ZXBhc3N3b3JkL3VwZGF0ZXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdXBkYXRlcGFzc3dvcmQvdXBkYXRlcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksY0FBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7QUNBSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUVJO0lBQ0ksZUFBQTtFQ0NOO0VEQ0U7SUFFQSxlQUFBO0VDQUY7QUFDRjs7QURFQTtFQUVJO0lBQ0ksZUFBQTtFQ0ROO0VER0U7SUFFQSxlQUFBO0VDRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZXBhc3N3b3JkL3VwZGF0ZXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jnb3QtcGFzcyBoMVxue1xuICAgIGNvbG9yOiAjMmYyZjJmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmF2dnZ7XG4gICAgcGFkZGluZzogMzVweDtcbn1cbi5mb3Jnb3QtcGFzcyBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweClcbntcbiAgICAuZm9yZ290LXBhc3MgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgfVxuICAgIC5mb3Jnb3QtcGFzcyBoMVxue1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpXG57XG4gICAgLmZvcmdvdC1wYXNzIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgICAuZm9yZ290LXBhc3MgaDFcbntcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG59IiwiLmZvcmdvdC1wYXNzIGgxIHtcbiAgY29sb3I6ICMyZjJmMmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmF2dnYge1xuICBwYWRkaW5nOiAzNXB4O1xufVxuXG4uZm9yZ290LXBhc3MgaW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5mb3Jnb3QtcGFzcyBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG4gIC5mb3Jnb3QtcGFzcyBoMSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAuZm9yZ290LXBhc3MgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAuZm9yZ290LXBhc3MgaDEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/updatepassword/updatepassword.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/updatepassword/updatepassword.page.ts ***!
  \*******************************************************/
/*! exports provided: UpdatepasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatepasswordPage", function() { return UpdatepasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");







var UpdatepasswordPage = /** @class */ (function () {
    function UpdatepasswordPage(formBuilder, navCtrl, apiService, settingService, toastCtrl) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.settingService = settingService;
        this.toastCtrl = toastCtrl;
        this.userData = this.settingService.getUserData();
        this.onAddForm = this.formBuilder.group({
            oldpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            newpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$"),
            ])),
            retypepassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
        }, {
            validators: this.password.bind(this)
        });
    }
    UpdatepasswordPage.prototype.password = function (formGroup) {
        var newpassword = formGroup.get('newpassword').value;
        var retypepassword = formGroup.get('retypepassword').value;
        return newpassword === retypepassword ? null : { passwordNotMatch: true };
    };
    UpdatepasswordPage.prototype.goto = function (url) {
        this.navCtrl.navigateBack("/" + url);
    };
    UpdatepasswordPage.prototype.ngOnInit = function () { };
    UpdatepasswordPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 2000,
                            mode: "md",
                            cssClass: "customToast",
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdatepasswordPage.prototype.updatePassword = function () {
        var _this = this;
        var data = {
            old_password: this.onAddForm.value.oldpassword,
            password: this.onAddForm.value.newpassword,
            confirm_password: this.onAddForm.value.retypepassword,
            auth_token: this.settingService.getToken(),
        };
        this.apiService.updatepassword(data, this.userData.id).subscribe(function (res) {
            if (res.status === true) {
                _this.presentToast("Password updated successfully");
                _this.onAddForm.reset();
                // this.goto('tabs/dashboard');
            }
            else {
                _this.presentToast(res.message);
            }
        }, function (err) {
            if (err.error.message) {
                _this.presentToast(err.error.message);
            }
            else {
                _this.presentToast(err.error.error);
            }
            console.log(err.error.error);
        });
    };
    UpdatepasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-updatepassword",
            template: __webpack_require__(/*! ./updatepassword.page.html */ "./src/app/updatepassword/updatepassword.page.html"),
            styles: [__webpack_require__(/*! ./updatepassword.page.scss */ "./src/app/updatepassword/updatepassword.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_5__["PageTrack"])("Update Password Screen"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_6__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], UpdatepasswordPage);
    return UpdatepasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=updatepassword-updatepassword-module.js.map