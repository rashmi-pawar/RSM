(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grad-week-agenda-grad-week-agenda-module"],{

/***/ "./src/app/grad-week-agenda/grad-week-agenda.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/grad-week-agenda/grad-week-agenda.module.ts ***!
  \*************************************************************/
/*! exports provided: GradWeekAgendaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradWeekAgendaPageModule", function() { return GradWeekAgendaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _grad_week_agenda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grad-week-agenda.page */ "./src/app/grad-week-agenda/grad-week-agenda.page.ts");
/* harmony import */ var ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pinch-zoom */ "./node_modules/ngx-pinch-zoom/fesm5/ngx-pinch-zoom.js");








var routes = [
    {
        path: '',
        component: _grad_week_agenda_page__WEBPACK_IMPORTED_MODULE_6__["GradWeekAgendaPage"]
    }
];
var GradWeekAgendaPageModule = /** @class */ (function () {
    function GradWeekAgendaPageModule() {
    }
    GradWeekAgendaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_7__["PinchZoomModule"],
            ],
            declarations: [_grad_week_agenda_page__WEBPACK_IMPORTED_MODULE_6__["GradWeekAgendaPage"], _grad_week_agenda_page__WEBPACK_IMPORTED_MODULE_6__["SafeHtmlPipe"]]
        })
    ], GradWeekAgendaPageModule);
    return GradWeekAgendaPageModule;
}());



/***/ }),

/***/ "./src/app/grad-week-agenda/grad-week-agenda.page.html":
/*!*************************************************************!*\
  !*** ./src/app/grad-week-agenda/grad-week-agenda.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"{{back}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">\n      Grad Week 2021 Agenda\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <div (click)=\"gotoFAQ()\">FAQ</div>\n      <ion-icon name=\"ios-arrow-forward\" style=\"bottom: -2px;position: relative;\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item class=\"state-selection\" lines=\"none\">\n    <ion-label>Pick your state</ion-label>\n    <ion-select [(ngModel)]=\"selectedState\">\n      <ion-select-option *ngFor=\"let item of gradWeekAgenda\" [value]=\"item.title\">{{item.title}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n    <!--<div *ngFor=\"let item of gradWeekAgenda\">\n        <p *ngIf=\"item.title === selectedState\" [innerHTML]=\"item.value | safeHtml\"></p>\n    </div>-->\n  <div *ngIf=\"gradWeekAgenda && gradWeekAgenda[0].title === selectedState\">\n    <pinch-zoom>\n      <p class=\"innerHtmltd\" [innerHTML]=\"gradWeekAgenda[0].value | safeHtml\"></p>\n    </pinch-zoom>\n  </div>\n  <div *ngIf=\"gradWeekAgenda && gradWeekAgenda[1].title === selectedState\">\n    <pinch-zoom>\n      <p class=\"innerHtmltd\" [innerHTML]=\"gradWeekAgenda[1].value | safeHtml\"></p>\n    </pinch-zoom>\n  </div>\n  <div *ngIf=\"gradWeekAgenda && gradWeekAgenda[2].title === selectedState\">\n    <pinch-zoom>\n      <p class=\"innerHtmltd\" [innerHTML]=\"gradWeekAgenda[2].value | safeHtml\"></p>\n    </pinch-zoom>\n  </div>\n  <div *ngIf=\"gradWeekAgenda && gradWeekAgenda[3].title === selectedState\">\n    <pinch-zoom>\n      <p class=\"innerHtmltd\" [innerHTML]=\"gradWeekAgenda[3].value | safeHtml\"></p>\n    </pinch-zoom>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/grad-week-agenda/grad-week-agenda.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/grad-week-agenda/grad-week-agenda.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-grad-week-agenda table td {\n  padding: 0 5px;\n}\n\n.state-selection {\n  border: 1px solid gray;\n  background: #FFF;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL2dyYWQtd2Vlay1hZ2VuZGEvZ3JhZC13ZWVrLWFnZW5kYS5wYWdlLnNjc3MiLCJzcmMvYXBwL2dyYWQtd2Vlay1hZ2VuZGEvZ3JhZC13ZWVrLWFnZW5kYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxjQUFBO0FDRE47O0FES0E7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvZ3JhZC13ZWVrLWFnZW5kYS9ncmFkLXdlZWstYWdlbmRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1ncmFkLXdlZWstYWdlbmRhe1xuICB0YWJsZXtcbiAgICB0ZHtcbiAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgIH1cbiAgfVxufVxuLnN0YXRlLXNlbGVjdGlvbntcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgei1pbmRleDogMTtcbn1cbiIsImFwcC1ncmFkLXdlZWstYWdlbmRhIHRhYmxlIHRkIHtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5zdGF0ZS1zZWxlY3Rpb24ge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICB6LWluZGV4OiAxO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/grad-week-agenda/grad-week-agenda.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/grad-week-agenda/grad-week-agenda.page.ts ***!
  \***********************************************************/
/*! exports provided: GradWeekAgendaPage, SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradWeekAgendaPage", function() { return GradWeekAgendaPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");







var GradWeekAgendaPage = /** @class */ (function () {
    function GradWeekAgendaPage(apiService, settingService, navCtrl, sanitizer, iab, elementRef, platform) {
        this.apiService = apiService;
        this.settingService = settingService;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.iab = iab;
        this.elementRef = elementRef;
        this.platform = platform;
        this.isProgress = false;
    }
    GradWeekAgendaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.settingService.getDeviceId().then(function (id) {
            _this.gradWeekDetail(id);
            // this.gradWeekDetail('bafa706f-448d-f5d3-8697-830312657488');
        });
    };
    GradWeekAgendaPage.prototype.gotoFAQ = function () {
        this.navCtrl.navigateRoot('/grad-week-faq');
    };
    GradWeekAgendaPage.prototype.gradWeekDetail = function (id) {
        var _this = this;
        this.isProgress = false;
        this.apiService.getGradEventDetail(id).subscribe(function (result) {
            _this.isProgress = true;
            if (result.status) {
                var agenda = JSON.parse(result.response[0].agenda);
                _this.gradWeekAgenda = agenda;
                _this.selectedState = _this.gradWeekAgenda[0].title;
                _this.agendaDetail = agenda[0].value;
                _this.linkClick();
            }
        });
    };
    GradWeekAgendaPage.prototype.linkClick = function () {
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
    GradWeekAgendaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grad-week-agenda',
            template: __webpack_require__(/*! ./grad-week-agenda.page.html */ "./src/app/grad-week-agenda/grad-week-agenda.page.html"),
            styles: [__webpack_require__(/*! ./grad-week-agenda.page.scss */ "./src/app/grad-week-agenda/grad-week-agenda.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
    ], GradWeekAgendaPage);
    return GradWeekAgendaPage;
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
//# sourceMappingURL=grad-week-agenda-grad-week-agenda-module.js.map