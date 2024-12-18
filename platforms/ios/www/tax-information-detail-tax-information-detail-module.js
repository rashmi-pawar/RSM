(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tax-information-detail-tax-information-detail-module"],{

/***/ "./src/app/tax-information-detail/tax-information-detail.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tax-information-detail/tax-information-detail.module.ts ***!
  \*************************************************************************/
/*! exports provided: TaxInformationDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxInformationDetailPageModule", function() { return TaxInformationDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tax_information_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tax-information-detail.page */ "./src/app/tax-information-detail/tax-information-detail.page.ts");







var routes = [
    {
        path: '',
        component: _tax_information_detail_page__WEBPACK_IMPORTED_MODULE_6__["TaxInformationDetailPage"]
    }
];
var TaxInformationDetailPageModule = /** @class */ (function () {
    function TaxInformationDetailPageModule() {
    }
    TaxInformationDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tax_information_detail_page__WEBPACK_IMPORTED_MODULE_6__["TaxInformationDetailPage"], _tax_information_detail_page__WEBPACK_IMPORTED_MODULE_6__["SafeHtmlPipe"]]
        })
    ], TaxInformationDetailPageModule);
    return TaxInformationDetailPageModule;
}());



/***/ }),

/***/ "./src/app/tax-information-detail/tax-information-detail.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/tax-information-detail/tax-information-detail.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"{{back}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">\n      {{taxDetail?.title}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <p class=\"innerHtmltd\" [innerHTML]=\"taxDetail?.content | safeHtml\"></p>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tax-information-detail/tax-information-detail.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/tax-information-detail/tax-information-detail.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-tax-information-detail table td {\n  padding: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3RheC1pbmZvcm1hdGlvbi1kZXRhaWwvdGF4LWluZm9ybWF0aW9uLWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3RheC1pbmZvcm1hdGlvbi1kZXRhaWwvdGF4LWluZm9ybWF0aW9uLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxjQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC90YXgtaW5mb3JtYXRpb24tZGV0YWlsL3RheC1pbmZvcm1hdGlvbi1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXRheC1pbmZvcm1hdGlvbi1kZXRhaWx7XG4gIHRhYmxle1xuICAgIHRke1xuICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgfVxuICB9XG59XG4iLCJhcHAtdGF4LWluZm9ybWF0aW9uLWRldGFpbCB0YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDAgNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tax-information-detail/tax-information-detail.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tax-information-detail/tax-information-detail.page.ts ***!
  \***********************************************************************/
/*! exports provided: TaxInformationDetailPage, SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxInformationDetailPage", function() { return TaxInformationDetailPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _service_back_stack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/back-stack.service */ "./src/app/service/back-stack.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");









var TaxInformationDetailPage = /** @class */ (function () {
    function TaxInformationDetailPage(backStack, sanitizer, route, apiService, iab, platform, elementRef) {
        var _this = this;
        this.backStack = backStack;
        this.sanitizer = sanitizer;
        this.route = route;
        this.apiService = apiService;
        this.iab = iab;
        this.platform = platform;
        this.elementRef = elementRef;
        this.isProgress = false;
        this.back = this.backStack.getBackStack('tax-information-detail');
        this.route.queryParams.subscribe(function (params) {
            _this.title = params.title;
            _this.taxInformationDetail(params.id);
        });
    }
    TaxInformationDetailPage.prototype.ngOnInit = function () {
    };
    TaxInformationDetailPage.prototype.scrollTo = function (element) {
        var yOffset = document.getElementById(element).offsetTop;
        this.content.scrollByPoint(0, yOffset, 400);
    };
    TaxInformationDetailPage.prototype.taxInformationDetail = function (id) {
        var _this = this;
        this.isProgress = false;
        this.apiService.taxInformationDetail(id).subscribe(function (result) {
            _this.isProgress = true;
            if (result.status) {
                _this.taxDetail = result.data;
            }
            _this.linkClick();
        });
    };
    TaxInformationDetailPage.prototype.linkClick = function () {
        var _this = this;
        setTimeout(function () {
            var urls = _this.elementRef.nativeElement.querySelectorAll('a');
            urls.forEach(function (url) {
                url.addEventListener('click', function (event) {
                    event.preventDefault();
                    _this.iab.create(event.target.href, '_blank', {
                        location: _this.platform.is('android') ? 'yes' : 'no',
                        hideurlbar: 'yes',
                        hidenavigationbuttons: 'yes',
                        closebuttoncaption: 'Back'
                    });
                }, false);
            });
        }, 1000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])
    ], TaxInformationDetailPage.prototype, "content", void 0);
    TaxInformationDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tax-information-detail',
            template: __webpack_require__(/*! ./tax-information-detail.page.html */ "./src/app/tax-information-detail/tax-information-detail.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./tax-information-detail.page.scss */ "./src/app/tax-information-detail/tax-information-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_back_stack_service__WEBPACK_IMPORTED_MODULE_3__["BackStackService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TaxInformationDetailPage);
    return TaxInformationDetailPage;
}());

/**
 * Generated class for the SafeHtmlPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safeHtml',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ })

}]);
//# sourceMappingURL=tax-information-detail-tax-information-detail-module.js.map