(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grad-week-faq-grad-week-faq-module"],{

/***/ "./src/app/grad-week-faq/grad-week-faq.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/grad-week-faq/grad-week-faq.module.ts ***!
  \*******************************************************/
/*! exports provided: GradWeekFaqPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradWeekFaqPageModule", function() { return GradWeekFaqPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _grad_week_faq_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grad-week-faq.page */ "./src/app/grad-week-faq/grad-week-faq.page.ts");
/* harmony import */ var ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pinch-zoom */ "./node_modules/ngx-pinch-zoom/fesm5/ngx-pinch-zoom.js");








var routes = [
    {
        path: '',
        component: _grad_week_faq_page__WEBPACK_IMPORTED_MODULE_6__["GradWeekFaqPage"]
    }
];
var GradWeekFaqPageModule = /** @class */ (function () {
    function GradWeekFaqPageModule() {
    }
    GradWeekFaqPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_7__["PinchZoomModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_grad_week_faq_page__WEBPACK_IMPORTED_MODULE_6__["GradWeekFaqPage"], _grad_week_faq_page__WEBPACK_IMPORTED_MODULE_6__["SafeHtmlPipe"]]
        })
    ], GradWeekFaqPageModule);
    return GradWeekFaqPageModule;
}());



/***/ }),

/***/ "./src/app/grad-week-faq/grad-week-faq.page.html":
/*!*******************************************************!*\
  !*** ./src/app/grad-week-faq/grad-week-faq.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"{{back}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">\n      Grad Week 2021 FAQ\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <div (click)=\"gotoAgenda()\">Agenda</div>\n      <ion-icon name=\"ios-arrow-forward\" style=\"bottom: -2px;position: relative;\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding scrollX = \"true\">\n  <pinch-zoom>\n    <p class=\"faq innerHtmltd\" [innerHTML]=\"gradWeekFaq?.faq | safeHtml\"></p>\n  </pinch-zoom>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/grad-week-faq/grad-week-faq.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/grad-week-faq/grad-week-faq.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".faq {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  user-select: text;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL2dyYWQtd2Vlay1mYXEvZ3JhZC13ZWVrLWZhcS5wYWdlLnNjc3MiLCJzcmMvYXBwL2dyYWQtd2Vlay1mYXEvZ3JhZC13ZWVrLWZhcS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2dyYWQtd2Vlay1mYXEvZ3JhZC13ZWVrLWZhcS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFxIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbn1cbiIsIi5mYXEge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/grad-week-faq/grad-week-faq.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/grad-week-faq/grad-week-faq.page.ts ***!
  \*****************************************************/
/*! exports provided: GradWeekFaqPage, SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradWeekFaqPage", function() { return GradWeekFaqPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");







var GradWeekFaqPage = /** @class */ (function () {
    function GradWeekFaqPage(apiService, settingService, navCtrl, sanitizer, elementRef, iab, platform) {
        this.apiService = apiService;
        this.settingService = settingService;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.elementRef = elementRef;
        this.iab = iab;
        this.platform = platform;
        this.isProgress = false;
    }
    GradWeekFaqPage.prototype.ngOnInit = function () {
        var _this = this;
        this.settingService.getDeviceId().then(function (id) {
            _this.gradWeekDetail(id);
            // this.gradWeekDetail('bafa706f-448d-f5d3-8697-830312657488');
        });
    };
    GradWeekFaqPage.prototype.gotoAgenda = function () {
        this.navCtrl.navigateRoot('/grad-week-agenda');
    };
    GradWeekFaqPage.prototype.gradWeekDetail = function (id) {
        var _this = this;
        this.isProgress = false;
        this.apiService.getGradEventDetail(id).subscribe(function (result) {
            _this.isProgress = true;
            if (result.status) {
                _this.gradWeekFaq = result.response[0];
                _this.linkClick();
            }
        });
    };
    GradWeekFaqPage.prototype.linkClick = function () {
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
    GradWeekFaqPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grad-week-faq',
            template: __webpack_require__(/*! ./grad-week-faq.page.html */ "./src/app/grad-week-faq/grad-week-faq.page.html"),
            styles: [__webpack_require__(/*! ./grad-week-faq.page.scss */ "./src/app/grad-week-faq/grad-week-faq.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
    ], GradWeekFaqPage);
    return GradWeekFaqPage;
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
//# sourceMappingURL=grad-week-faq-grad-week-faq-module.js.map