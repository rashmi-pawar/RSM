(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rss-feed-detail-rss-feed-detail-module"],{

/***/ "./src/app/rss-feed-detail/rss-feed-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/rss-feed-detail/rss-feed-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: RssFeedDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RssFeedDetailPageModule", function() { return RssFeedDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rss_feed_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rss-feed-detail.page */ "./src/app/rss-feed-detail/rss-feed-detail.page.ts");







var routes = [
    {
        path: '',
        component: _rss_feed_detail_page__WEBPACK_IMPORTED_MODULE_6__["RssFeedDetailPage"]
    }
];
var RssFeedDetailPageModule = /** @class */ (function () {
    function RssFeedDetailPageModule() {
    }
    RssFeedDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_rss_feed_detail_page__WEBPACK_IMPORTED_MODULE_6__["RssFeedDetailPage"], _rss_feed_detail_page__WEBPACK_IMPORTED_MODULE_6__["SafeHtmlPipe"]]
        })
    ], RssFeedDetailPageModule);
    return RssFeedDetailPageModule;
}());



/***/ }),

/***/ "./src/app/rss-feed-detail/rss-feed-detail.page.html":
/*!***********************************************************!*\
  !*** ./src/app/rss-feed-detail/rss-feed-detail.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"{{back}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">\n      {{feedDetail?.title}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let item of feedDetail.items\">\n    <h4 class=\"title\">{{item.title}}</h4>\n    <ion-row>\n      <ion-col>\n        <p class=\"author\">{{item.author}}</p>\n      </ion-col>\n      <ion-col>\n        <p class=\"date\">{{item.pubDate | date: 'd MMMM y'}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-card-content class=\"description\">\n      <div class=\"innerHtmltd\" [innerHTML]=\"item.description | safeHtml\"></div>\n      <p (click)=\"openUrl(item.link)\" class=\"read-more\">Read more</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/rss-feed-detail/rss-feed-detail.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/rss-feed-detail/rss-feed-detail.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  margin: 10px 10px 0px 10px;\n}\n\n.author {\n  margin: 5px;\n}\n\n.date {\n  margin: 5px;\n  text-align: right;\n}\n\n.description {\n  padding: 0px 10px 10px;\n}\n\n.read-more {\n  color: #399cde;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL3Jzcy1mZWVkLWRldGFpbC9yc3MtZmVlZC1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9yc3MtZmVlZC1kZXRhaWwvcnNzLWZlZWQtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QUREQTtFQUNFLHNCQUFBO0FDSUY7O0FERkE7RUFDRSxjQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9yc3MtZmVlZC1kZXRhaWwvcnNzLWZlZWQtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMHB4IDEwcHg7XG59XG4uYXV0aG9ye1xuICBtYXJnaW46IDVweDtcbn1cbi5kYXRle1xuICBtYXJnaW46IDVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZGVzY3JpcHRpb257XG4gIHBhZGRpbmc6IDBweCAxMHB4IDEwcHg7XG59XG4ucmVhZC1tb3Jle1xuICBjb2xvcjogIzM5OWNkZTtcbn1cbiIsIi50aXRsZSB7XG4gIG1hcmdpbjogMTBweCAxMHB4IDBweCAxMHB4O1xufVxuXG4uYXV0aG9yIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5kYXRlIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAwcHggMTBweCAxMHB4O1xufVxuXG4ucmVhZC1tb3JlIHtcbiAgY29sb3I6ICMzOTljZGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/rss-feed-detail/rss-feed-detail.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/rss-feed-detail/rss-feed-detail.page.ts ***!
  \*********************************************************/
/*! exports provided: RssFeedDetailPage, SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RssFeedDetailPage", function() { return RssFeedDetailPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _service_back_stack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/back-stack.service */ "./src/app/service/back-stack.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");








var RssFeedDetailPage = /** @class */ (function () {
    function RssFeedDetailPage(iab, backStack, route, apiService, platform) {
        var _this = this;
        this.iab = iab;
        this.backStack = backStack;
        this.route = route;
        this.apiService = apiService;
        this.platform = platform;
        this.isProgress = false;
        this.feedDetail = {};
        this.back = this.backStack.getBackStack('rss-feed-detail');
        this.route.queryParams.subscribe(function (params) {
            _this.rssFeddDetail(params.url);
        });
    }
    RssFeedDetailPage.prototype.ngOnInit = function () {
    };
    RssFeedDetailPage.prototype.rssFeddDetail = function (url) {
        var _this = this;
        this.isProgress = false;
        this.apiService.getRSSFeedDetail(url).subscribe(function (result) {
            if (result.status) {
                _this.feedDetail = JSON.parse(result.data);
            }
            _this.isProgress = true;
        }, function (error) {
            console.log(error);
        });
    };
    RssFeedDetailPage.prototype.openUrl = function (url) {
        this.iab.create(url, '_blank', {
            location: this.platform.is('android') ? 'yes' : 'no',
            hideurlbar: 'yes',
            hidenavigationbuttons: 'yes',
            closebuttoncaption: 'Back'
        });
    };
    RssFeedDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rss-feed-detail',
            template: __webpack_require__(/*! ./rss-feed-detail.page.html */ "./src/app/rss-feed-detail/rss-feed-detail.page.html"),
            styles: [__webpack_require__(/*! ./rss-feed-detail.page.scss */ "./src/app/rss-feed-detail/rss-feed-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"],
            _service_back_stack_service__WEBPACK_IMPORTED_MODULE_3__["BackStackService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]])
    ], RssFeedDetailPage);
    return RssFeedDetailPage;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ })

}]);
//# sourceMappingURL=rss-feed-detail-rss-feed-detail-module.js.map