(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");







var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.html":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"openMenu()\">\n        <ion-icon slot=\"icon-only\" name=\"menu\" color=\"medium\"></ion-icon>\n      </ion-button>\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"menu\" style=\"color: #ffffff\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <div class=\"rsm-welcome\">\n      <img class=\"logo\" src=\"assets/img/home/rsm-logo.svg\" />\n    </div>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"goTo('notification')\" icon-only class=\"notification-btn\">\n        <ion-badge *ngIf=\"unreadNotificationCount\" color=\"accent\">{{ unreadNotificationCount }}</ion-badge>\n        <ion-icon slot=\"icon-only\" name=\"notifications-outline\" color=\"medium\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"goToUpdateprofile()\">\n        <ion-icon slot=\"icon-only\" name=\"person\" color=\"medium\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <div class=\"first-section\">\n    <div class=\"main-title\">Welcome to the RSM Australia App</div>\n    <div class=\"summary\">\n      <ion-row>\n        <ion-col class=\"first\">\n          <div (click)=\"goTo('contactus')\">\n            Ask a Question?\n          </div>\n        </ion-col>\n        <ion-col class=\"second\" (click)=\"goTo('triplogbook')\">\n          <div class=\"title\">\n            KMs Logged\n          </div>\n          <div class=\"value\">\n            {{totalDistance}}\n          </div>\n        </ion-col>\n        <ion-col class=\"third\" (click)=\"goTo('viewreceipt')\">\n          <div class=\"title\">\n            Total Receipts\n          </div>\n          <div class=\"value\">\n            {{totalReceipt}}\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div class=\"second-section\">\n    <ion-row class=\"icon-section\">\n      <ion-col (click)=\"openQRScanner()\">\n        <div class=\"main\">\n          <div class=\"sub\">\n            <img class=\"icon\" src=\"assets/icon/event-calendar.png\" />\n            <div class=\"label\">Event Sign In</div>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col (click)=\"goToEvent()\">\n        <div class=\"main\">\n          <div class=\"sub\">\n            <img class=\"icon\" src=\"assets/icon/event-calendar.png\" />\n            <div class=\"label\">Events</div>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col (click)=\"goTo('viewreceipt')\">\n        <div class=\"main\">\n          <div class=\"sub\">\n            <img class=\"icon\" src=\"assets/img/home/favourites/receipt.png\" />\n            <div class=\"label\">Receipts</div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"icon-section\">\n      <ion-col (click)=\"goTo('tax-information')\">\n        <div class=\"main\">\n          <div class=\"sub\">\n            <img class=\"icon\" src=\"assets/icon/tax.png\" />\n            <div class=\"label\">Tax Rates</div>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col (click)=\"goTo('calculator')\">\n        <div class=\"main\">\n          <div class=\"sub\">\n            <img class=\"icon\" src=\"assets/img/home/favourites/calculator.png\" />\n            <div class=\"label\">Calculators</div>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col (click)=\"goTo('triplogbook')\">\n        <div class=\"main\">\n          <div class=\"sub\">\n            <img class=\"icon\" src=\"assets/img/home/favourites/logbook.png\" />\n            <div class=\"label\">LogBook</div>\n          </div>\n        </div>\n      </ion-col>  \n    </ion-row>\n    <ion-row class=\"icon-section\">\n      <ion-col (click)=\"goTo('investment-information')\">\n        <div class=\"main\">\n          <div class=\"sub\">\n            <img class=\"icon\" src=\"assets/img/payment.png\" />\n            <div class=\"label\">Market News</div>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col (click)=\"gotourl('https://experience.rsm.com.au/preference-center')\">\n        <div class=\"main\">\n          <div class=\"sub\">\n            <img class=\"icon\" src=\"assets/img/accounting.png\" />\n            <div class=\"label\">Preferences</div>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col (click)=\"goTo('rss-feed')\">\n        <div class=\"main\">\n          <div class=\"sub\">\n            <img class=\"icon\" src=\"assets/img/insight/default-rss.png\" />\n            <div class=\"label\">Ideas and Insights</div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"icon-section\">\n      <ion-col (click)=\"goTo('contactus')\">\n        <div class=\"main\">\n          <div class=\"sub\">\n            <img class=\"icon\" src=\"assets/icon/phone-ringing.png\" />\n            <div class=\"label\">Contact Us</div>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col (click)=\"goTo('favourite')\">\n        <div class=\"main\">\n          <div class=\"sub\">\n            <img class=\"icon\" src=\"assets/icon/Icon-favourite.png\" />\n            <div class=\"label\">My Favourites</div>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n  </div>\n  <div class=\"banner-section\">\n<!--    <img class=\"banner-img\" (click)=\"gotourl(banner.url)\" [src]=\"banner.full_path\" />-->\n    <ion-slides pager=\"true\" #slides [options]=\"mainSlideOpts\">\n      <ion-slide *ngFor=\"let s of bannerList\">\n<!--        <ion-segment-button mode=\"md\" (click)=\"gotourl(s.url)\">-->\n          <img src=\"{{ s.full_path }}\" (click)=\"gotourl(s.url)\" />\n<!--        </ion-segment-button>-->\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n<!--<ion-content no-padding>\n  <div class=\"main-slider\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\" (click)=\"prevSlide()\">\n          <span class=\"slider-nav arrow-prev\">\n            <div class=\"prev-icon-custom custon-nav\"></div>\n          </span>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-slides pager=\"true\" #slides [options]=\"mainSlideOpts\">\n            <ion-slide *ngFor=\"let s of sliderOne.slidesItems\">\n              <ion-segment-button mode=\"md\" (click)=\"goTo(s.link)\">\n                <img src=\"{{ s.image }}\" />\n                <ion-label>{{ s.title }}</ion-label>\n              </ion-segment-button>\n            </ion-slide>\n          </ion-slides>\n        </ion-col>\n        <ion-col size=\"1\" (click)=\"nextSlide()\">\n          <span class=\"slider-nav arrow-next\">\n            <div class=\"next-icon-custom custon-nav\"></div>\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div class=\"favourites\">\n    <h2 class=\"title\">Favourites</h2>\n\n    <ion-segment scrollable>\n      <ion-segment-button mode=\"md\" *ngFor=\"let favourite of favourites\">\n        <ng-template [ngIf]=\"favourite.name\">\n          <div (click)=\"goTo(favourite.url)\">\n            <ion-img class=\"fav-list\" src=\"{{ favourite.icon }}\"></ion-img>\n            <ion-label text-wrap>{{ favourite.name }}</ion-label>\n          </div>\n        </ng-template>\n\n        <ng-template [ngIf]=\"!favourite.name\">\n          <div (click)=\"presentFavAlert()\">\n            <ion-img class=\"fav-deafult-list\" src=\"{{ favourite.icon }}\"></ion-img>\n            <ion-label text-wrap>{{ favourite.name }}</ion-label>\n          </div>\n        </ng-template>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div class=\"have-a-question\">\n    <img (click)=\"goTo('sendmessage')\" class=\"banner\" src=\"assets/img/home/have-a-question.png\" />\n  </div>\n\n  <div class=\"page-links\">\n    <ion-list class=\"list-box\" (click)=\"gotourl('https://www.rsm.global/australia/coronavirus-resources')\">\n      <ion-item class=\"list-item\" lines=\"none\">\n        <ion-img slot=\"start\" src=\"assets/img/information.png\" class=\"icon-img\"></ion-img>\n        <ion-label class=\"item-label\">\n          <h2 class=\"title\">Pandemic Resources</h2>\n          <p>Click Here <img src=\"assets/img/right-arrow.png\" height=\"10\" /></p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-list class=\"list-box\" (click)=\"gotourl(eventUrl)\">\n      <ion-item class=\"list-item\" lines=\"none\">\n        <ion-img slot=\"start\" src=\"assets/img/date.png\" class=\"icon-img\"></ion-img>\n        <ion-label class=\"item-label\">\n          <h2 class=\"title\">Upcoming Events</h2>\n          <p>Click Here <img src=\"assets/img/right-arrow.png\" height=\"10\" /></p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-list class=\"list-box\" (click)=\"goTo('rss-feed')\">\n      <ion-item class=\"list-item\" lines=\"none\">\n        <ion-img slot=\"start\" src=\"assets/img/tools-and-utensils.png\" class=\"icon-img\"></ion-img>\n        <ion-label class=\"item-label\">\n          <h2 class=\"title\">RSM Insights</h2>\n          <p>Click Here <img src=\"assets/img/right-arrow.png\" height=\"10\" /></p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>-->\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #fafafa;\n}\nion-content .first-section {\n  background-color: #009CDE;\n  padding-bottom: 20px;\n}\nion-content .first-section .main-title {\n  color: #ffffff;\n  font-size: 16px;\n  width: 100%;\n  text-align: center;\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\nion-content .first-section .summary {\n  background-color: #656769;\n  color: #ffffff;\n  margin: 0 20px;\n  border-radius: 15px;\n  padding: 10px;\n}\nion-content .first-section .summary .first {\n  border-right: 1px solid;\n  padding-bottom: 0;\n  text-align: center;\n  padding-top: 7px;\n}\nion-content .first-section .summary .second {\n  border-right: 1px solid;\n  padding-top: 0;\n  padding-bottom: 0;\n  text-align: center;\n}\nion-content .first-section .summary .second .title {\n  font-size: 14px;\n}\nion-content .first-section .summary .second .value {\n  font-size: 30px;\n}\nion-content .first-section .summary .third {\n  padding-top: 0;\n  padding-bottom: 0;\n  text-align: center;\n}\nion-content .first-section .summary .third .title {\n  font-size: 14px;\n}\nion-content .first-section .summary .third .value {\n  font-size: 30px;\n}\nion-content .second-section {\n  text-align: center;\n  min-height: 240px;\n}\nion-content .second-section ion-col {\n  padding: 12px 0;\n}\nion-content .second-section ion-col img {\n  height: 40px;\n}\nion-content .second-section .label {\n  color: #239413;\n  white-space: nowrap;\n}\nion-content .icon-section {\n  height: 33%;\n}\nion-content .icon-section ion-col .main {\n  height: 100%;\n  display: table;\n  width: 100%;\n}\nion-content .icon-section ion-col .main .sub {\n  display: table-cell;\n  vertical-align: middle;\n}\nion-content .banner-section .swiper-wrapper {\n  padding-top: 22px !important;\n}\nion-content .banner-section .banner-img {\n  width: 100%;\n}\n.rsm-welcome {\n  text-align: center;\n}\n.rsm-welcome h1 {\n  color: #62666b;\n  font-size: 15px;\n}\n.rsm-welcome .logo {\n  height: 40px;\n}\n.have-a-question {\n  background-color: #fff;\n}\n.have-a-question .banner {\n  padding: 10px 20px 10px 20px;\n}\n.favourites {\n  background-color: #fff;\n  margin-bottom: 10px;\n  color: #62666b;\n}\n.favourites .title {\n  text-align: center;\n  font-size: 15px;\n  font-weight: 500;\n  padding-top: 20px;\n}\n.favourites .fav-list {\n  width: 100%;\n  height: 40px;\n}\n.favourites .fav-deafult-list {\n  width: 50px;\n  height: 50px;\n  margin-top: 0px;\n}\n.favourites ion-img {\n  width: 40px;\n  height: 40px;\n}\n.favourites ion-segment {\n  --margin-end: -35px;\n  --margin-start: 5px;\n  --indicator-color: none !important;\n  --indicator-color-checked: none !important;\n}\n.favourites .ios .segment-button-checked {\n  --background-checked:none !important;\n  --color-checked:none !important;\n}\n.favourites ion-label {\n  font-size: 11px !important;\n  font-weight: 600;\n  text-transform: none;\n}\n.main-slider {\n  background: #fafafa;\n}\n.main-slider img {\n  width: 130px;\n}\n.main-slider ion-label {\n  font-size: 15px !important;\n  font-weight: 600;\n  text-transform: none;\n  margin-top: -25px;\n}\n.main-slider ion-slides {\n  --bullet-background: #333;\n  --bullet-background-active: #777;\n}\n.custon-nav {\n  height: 48px;\n  width: 20px;\n  cursor: pointer;\n  vertical-align: middle;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.prev-icon-custom {\n  background: url('ios-arrow-back.svg') no-repeat scroll 0px 0px;\n}\n.prev-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.next-icon-custom {\n  background: url('ios-arrow-forward.svg') no-repeat scroll 0px 0px;\n}\n.next-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.slider-nav ion-icon {\n  height: 100%;\n}\n.page-links {\n  background: #FFF;\n  padding: 10px 20px;\n  margin-top: 10px;\n}\n.page-links .list-box {\n  border-radius: 15px;\n  margin-bottom: 10px;\n}\n.page-links .list-box .list-item {\n  padding: 10px 0;\n}\n.page-links .list-box .list-item .icon-img {\n  width: 36px;\n  margin-left: 10px;\n  margin-right: 20px;\n}\n.page-links .list-box .list-item .item-label h2 {\n  font-family: \"Prelo BoldItalic\" !important;\n  color: #2F2F2F;\n  font-size: 16px;\n  letter-spacing: 0;\n}\n.page-links .list-box .list-item .item-label p {\n  font-size: 12px;\n  color: #62666B;\n}\n.page-links .list-box .list-item .item-label img {\n  position: relative;\n  top: 2px;\n  left: 3px;\n}\nion-badge {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  opacity: 0.9;\n  background: red;\n  color: #FFF;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  padding: 3px 0;\n  border-radius: 50px;\n}\n.notification-btn {\n  --border-radius: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FDQ0o7QURBSTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7QUNFTjtBRERNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNHUjtBRERNO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0dSO0FERlE7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0lWO0FERlE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSVY7QURIVTtFQUNFLGVBQUE7QUNLWjtBREhVO0VBQ0UsZUFBQTtBQ0taO0FERlE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0lWO0FESFU7RUFDRSxlQUFBO0FDS1o7QURIVTtFQUNFLGVBQUE7QUNLWjtBREFJO0VBRUUsa0JBQUE7RUFFQSxpQkFBQTtBQ0FOO0FEQ007RUFDRSxlQUFBO0FDQ1I7QURBUTtFQUNFLFlBQUE7QUNFVjtBRENNO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDQ1I7QURLSTtFQUNFLFdBQUE7QUNITjtBRE1RO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDSlY7QURLVTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUNIWjtBRFdNO0VBQ0UsNEJBQUE7QUNUUjtBRFdNO0VBQ0UsV0FBQTtBQ1RSO0FEY0E7RUFDSSxrQkFBQTtBQ1hKO0FEYUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ1hSO0FEY0U7RUFFRSxZQUFBO0FDYko7QURrQkE7RUFDSSxzQkFBQTtBQ2ZKO0FEaUJJO0VBQ0ksNEJBQUE7QUNmUjtBRG1CQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDaEJKO0FEa0JFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ2hCSjtBRG1CRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDakJKO0FEb0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDbEJKO0FEb0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNsQko7QURxQkU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtBQ25CSjtBRHNCRTtFQUNFLG9DQUFBO0VBQ0EsK0JBQUE7QUNwQko7QUR1QkU7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNyQko7QUR5QkE7RUFDRSxtQkFBQTtBQ3RCRjtBRHdCRTtFQUNFLFlBQUE7QUN0Qko7QUR5QkU7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ3ZCSjtBRDBCRTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUN4Qko7QUQ0QkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDekJKO0FENEJBO0VBQ0ksOERBQUE7QUN6Qko7QUQ0QkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ3pCSjtBRDRCQTtFQUNJLGlFQUFBO0FDekJKO0FENEJBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUN6Qko7QUQ2Qkk7RUFDSSxZQUFBO0FDMUJSO0FENkJBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDMUJGO0FEMkJFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQ3pCSjtBRDBCSTtFQUNFLGVBQUE7QUN4Qk47QUR5Qk07RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ3ZCUjtBRDBCUTtFQUNFLDBDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3hCVjtBRDBCUTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDeEJWO0FEMEJRO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ3hCVjtBRDhCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDM0JGO0FENkJBO0VBQ0UsK0JBQUE7QUMxQkYiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAuZmlyc3Qtc2VjdGlvbntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOUNERTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgIC5tYWluLXRpdGxle1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnN1bW1hcnl7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY1Njc2OTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgLmZpcnN0e1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWNvbmR7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC52YWx1ZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGhpcmR7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudmFsdWV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZWNvbmQtc2VjdGlvbntcclxuICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCAjMzk5Y2RlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIC8vIGhlaWdodDogY2FsYygxMDAlIC0gMjY2cHgpO1xyXG4gICAgICBtaW4taGVpZ2h0OiAyNDBweDtcclxuICAgICAgaW9uLWNvbHtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAubGFiZWx7XHJcbiAgICAgICAgY29sb3I6ICMyMzk0MTM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgfVxyXG4gICAgICAuaWNvbntcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pY29uLXNlY3Rpb257XHJcbiAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICBpb24tY29se1xyXG4gICAgICAgIC8vbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgLm1haW57XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgLnN1YntcclxuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5iYW5uZXItc2VjdGlvbntcclxuICAgICAgLy9oZWlnaHQ6IDEzM3B4O1xyXG4gICAgICAvL2JhY2tncm91bmQ6ICMzOTljZGU7XHJcbiAgICAgIC5zd2lwZXItd3JhcHBlcntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjJweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5iYW5uZXItaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yc20td2VsY29tZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiAjNjI2NjZiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgLy8gd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAvL21hcmdpbi10b3A6IDI1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaGF2ZS1hLXF1ZXN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG4gICAgLmJhbm5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmZhdm91cml0ZXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogIzYyNjY2YjtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIC5mYXYtbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcblxyXG4gIC5mYXYtZGVhZnVsdC1saXN0IHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxuICBpb24taW1nIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLXNlZ21lbnQge1xyXG4gICAgLS1tYXJnaW4tZW5kOiAtMzVweDtcclxuICAgIC0tbWFyZ2luLXN0YXJ0OiA1cHg7XHJcbiAgICAtLWluZGljYXRvci1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvcyAuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDpub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6bm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4tc2xpZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XHJcbiAgfVxyXG5cclxuICBpb24tc2xpZGVzIHtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogIzc3NztcclxuICB9XHJcbn1cclxuXHJcbi5jdXN0b24tbmF2IHtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4ucHJldi1pY29uLWN1c3RvbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwobm9kZV9tb2R1bGVzL2lvbmljb25zL2Rpc3QvY29sbGVjdGlvbi9pY29uL3N2Zy9pb3MtYXJyb3ctYmFjay5zdmcpIG5vLXJlcGVhdCBzY3JvbGwgMHB4IDBweDtcclxufVxyXG5cclxuLnByZXYtaWNvbi1jdXN0b20uZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4ubmV4dC1pY29uLWN1c3RvbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwobm9kZV9tb2R1bGVzL2lvbmljb25zL2Rpc3QvY29sbGVjdGlvbi9pY29uL3N2Zy9pb3MtYXJyb3ctZm9yd2FyZC5zdmcpIG5vLXJlcGVhdCBzY3JvbGwgMHB4IDBweDtcclxufVxyXG5cclxuLm5leHQtaWNvbi1jdXN0b20uZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4uc2xpZGVyLW5hdiB7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbi5wYWdlLWxpbmtze1xyXG4gIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgLmxpc3QtYm94e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAubGlzdC1pdGVte1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgIC5pY29uLWltZ3tcclxuICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLml0ZW0tbGFiZWx7XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1ByZWxvIEJvbGRJdGFsaWMnICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBjb2xvcjogIzJGMkYyRjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgY29sb3I6ICM2MjY2NkI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgICAgbGVmdDogM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tYmFkZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICByaWdodDogNXB4O1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzcHggMDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcbi5ub3RpZmljYXRpb24tYnRue1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5pb24tY29udGVudCAuZmlyc3Qtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlDREU7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLmZpcnN0LXNlY3Rpb24gLm1haW4tdGl0bGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLmZpcnN0LXNlY3Rpb24gLnN1bW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjU2NzY5O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAwIDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tY29udGVudCAuZmlyc3Qtc2VjdGlvbiAuc3VtbWFyeSAuZmlyc3Qge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDdweDtcbn1cbmlvbi1jb250ZW50IC5maXJzdC1zZWN0aW9uIC5zdW1tYXJ5IC5zZWNvbmQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuZmlyc3Qtc2VjdGlvbiAuc3VtbWFyeSAuc2Vjb25kIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1jb250ZW50IC5maXJzdC1zZWN0aW9uIC5zdW1tYXJ5IC5zZWNvbmQgLnZhbHVlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuaW9uLWNvbnRlbnQgLmZpcnN0LXNlY3Rpb24gLnN1bW1hcnkgLnRoaXJkIHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuZmlyc3Qtc2VjdGlvbiAuc3VtbWFyeSAudGhpcmQgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWNvbnRlbnQgLmZpcnN0LXNlY3Rpb24gLnN1bW1hcnkgLnRoaXJkIC52YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbmlvbi1jb250ZW50IC5zZWNvbmQtc2VjdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMjQwcHg7XG59XG5pb24tY29udGVudCAuc2Vjb25kLXNlY3Rpb24gaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDEycHggMDtcbn1cbmlvbi1jb250ZW50IC5zZWNvbmQtc2VjdGlvbiBpb24tY29sIGltZyB7XG4gIGhlaWdodDogNDBweDtcbn1cbmlvbi1jb250ZW50IC5zZWNvbmQtc2VjdGlvbiAubGFiZWwge1xuICBjb2xvcjogIzIzOTQxMztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbmlvbi1jb250ZW50IC5pY29uLXNlY3Rpb24ge1xuICBoZWlnaHQ6IDMzJTtcbn1cbmlvbi1jb250ZW50IC5pY29uLXNlY3Rpb24gaW9uLWNvbCAubWFpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgLmljb24tc2VjdGlvbiBpb24tY29sIC5tYWluIC5zdWIge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuaW9uLWNvbnRlbnQgLmJhbm5lci1zZWN0aW9uIC5zd2lwZXItd3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiAyMnB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuYmFubmVyLXNlY3Rpb24gLmJhbm5lci1pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJzbS13ZWxjb21lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJzbS13ZWxjb21lIGgxIHtcbiAgY29sb3I6ICM2MjY2NmI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5yc20td2VsY29tZSAubG9nbyB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmhhdmUtYS1xdWVzdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uaGF2ZS1hLXF1ZXN0aW9uIC5iYW5uZXIge1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xufVxuXG4uZmF2b3VyaXRlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjNjI2NjZiO1xufVxuLmZhdm91cml0ZXMgLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmZhdm91cml0ZXMgLmZhdi1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbn1cbi5mYXZvdXJpdGVzIC5mYXYtZGVhZnVsdC1saXN0IHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLmZhdm91cml0ZXMgaW9uLWltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uZmF2b3VyaXRlcyBpb24tc2VnbWVudCB7XG4gIC0tbWFyZ2luLWVuZDogLTM1cHg7XG4gIC0tbWFyZ2luLXN0YXJ0OiA1cHg7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5mYXZvdXJpdGVzIC5pb3MgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDpub25lICFpbXBvcnRhbnQ7XG4gIC0tY29sb3ItY2hlY2tlZDpub25lICFpbXBvcnRhbnQ7XG59XG4uZmF2b3VyaXRlcyBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5tYWluLXNsaWRlciB7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG4ubWFpbi1zbGlkZXIgaW1nIHtcbiAgd2lkdGg6IDEzMHB4O1xufVxuLm1haW4tc2xpZGVyIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbWFyZ2luLXRvcDogLTI1cHg7XG59XG4ubWFpbi1zbGlkZXIgaW9uLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6ICMzMzM7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjNzc3O1xufVxuXG4uY3VzdG9uLW5hdiB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ucHJldi1pY29uLWN1c3RvbSB7XG4gIGJhY2tncm91bmQ6IHVybChub2RlX21vZHVsZXMvaW9uaWNvbnMvZGlzdC9jb2xsZWN0aW9uL2ljb24vc3ZnL2lvcy1hcnJvdy1iYWNrLnN2Zykgbm8tcmVwZWF0IHNjcm9sbCAwcHggMHB4O1xufVxuXG4ucHJldi1pY29uLWN1c3RvbS5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubmV4dC1pY29uLWN1c3RvbSB7XG4gIGJhY2tncm91bmQ6IHVybChub2RlX21vZHVsZXMvaW9uaWNvbnMvZGlzdC9jb2xsZWN0aW9uL2ljb24vc3ZnL2lvcy1hcnJvdy1mb3J3YXJkLnN2Zykgbm8tcmVwZWF0IHNjcm9sbCAwcHggMHB4O1xufVxuXG4ubmV4dC1pY29uLWN1c3RvbS5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uc2xpZGVyLW5hdiBpb24taWNvbiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBhZ2UtbGlua3Mge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucGFnZS1saW5rcyAubGlzdC1ib3gge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnBhZ2UtbGlua3MgLmxpc3QtYm94IC5saXN0LWl0ZW0ge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4ucGFnZS1saW5rcyAubGlzdC1ib3ggLmxpc3QtaXRlbSAuaWNvbi1pbWcge1xuICB3aWR0aDogMzZweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5wYWdlLWxpbmtzIC5saXN0LWJveCAubGlzdC1pdGVtIC5pdGVtLWxhYmVsIGgyIHtcbiAgZm9udC1mYW1pbHk6IFwiUHJlbG8gQm9sZEl0YWxpY1wiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMkYyRjJGO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLnBhZ2UtbGlua3MgLmxpc3QtYm94IC5saXN0LWl0ZW0gLml0ZW0tbGFiZWwgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2MjY2NkI7XG59XG4ucGFnZS1saW5rcyAubGlzdC1ib3ggLmxpc3QtaXRlbSAuaXRlbS1sYWJlbCBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xuICBsZWZ0OiAzcHg7XG59XG5cbmlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIG9wYWNpdHk6IDAuOTtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBjb2xvcjogI0ZGRjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzcHggMDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLm5vdGlmaWNhdGlvbi1idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");
/* harmony import */ var _service_back_stack_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/back-stack.service */ "./src/app/service/back-stack.service.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _helper_unitHelper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_helper/unitHelper */ "./src/app/_helper/unitHelper.ts");
/* harmony import */ var _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/firebase-dynamic-links/ngx */ "./node_modules/@ionic-native/firebase-dynamic-links/ngx/index.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_17__);




















var DashboardPage = /** @class */ (function () {
    function DashboardPage(file, navCtrl, webview, router, storageService, events, backStack, iab, alertController, settingService, platform, menuCtrl, screenOrientation, toastCtrl, _location, firebaseDynamicLinks, barcodeScanner, loadingController, apiService) {
        var _this = this;
        this.file = file;
        this.navCtrl = navCtrl;
        this.webview = webview;
        this.router = router;
        this.storageService = storageService;
        this.events = events;
        this.backStack = backStack;
        this.iab = iab;
        this.alertController = alertController;
        this.settingService = settingService;
        this.platform = platform;
        this.menuCtrl = menuCtrl;
        this.screenOrientation = screenOrientation;
        this.toastCtrl = toastCtrl;
        this._location = _location;
        this.firebaseDynamicLinks = firebaseDynamicLinks;
        this.barcodeScanner = barcodeScanner;
        this.loadingController = loadingController;
        this.apiService = apiService;
        this.limit = 4;
        this.userid = "";
        this.favourites = [];
        this.isLoading = false;
        this.mainSlideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            loop: true,
            pager: true,
            autoplay: true,
            speed: 300,
            centeredSlides: true,
        };
        this.favouritesDefaultLength = 4;
        this.eventUrl = "";
        this.banner = {};
        this.bannerList = [];
        this.unitHelper = new _helper_unitHelper__WEBPACK_IMPORTED_MODULE_13__["UnitHelper"]();
        this.totalDistance = 0;
        this.totalReceipt = 0;
        this.isCurrentEvents = true;
        this.isExitDialogOpen = false;
        this.unreadNotificationCount = 0;
        this.events.subscribe("user:created", function (time) {
            _this.userid = _this.settingService.getUserId();
            _this.getfavourites();
        });
        this.events.subscribe("fav:created", function (time) {
            _this.platform.ready().then(function (readySource) {
                _this.getfavourites();
            });
        });
        // this.sliderOne = {
        //   isBeginningSlide: true,
        //   isEndSlide: false,
        //   slidesItems: [
        //     {
        //       image: 'assets/img/home/slider/add-expense.svg',
        //       title: 'Click here to add expense',
        //       link: 'home'
        //     },
        //     {
        //       image: 'assets/img/home/slider/log-trip.svg',
        //       title: 'Click here to log trip',
        //       link: 'logtrip'
        //     },
        //     {
        //       image: 'assets/img/home/slider/calculator.svg',
        //       title: 'Click here for calculators',
        //       link: 'calculator'
        //     },
        //     {
        //       image: 'assets/img/home/slider/contact-us.svg',
        //       title: 'Click here to contact us',
        //       link: 'contactus'
        //     }
        //   ]
        // };
    }
    // nextSlide() {
    //   this.slides.slideNext();
    // }
    // prevSlide() {
    //   this.slides.slidePrev();
    // }
    // Stop the slide autoplay when the view will leave
    // public ionViewWillLeave() {
    //   this.slides.stopAutoplay();
    // }
    // Start the slide autoplay when the view will enter
    // public ionViewWillEnter() {
    //   this.slides.startAutoplay();
    //   this.slides.pager = true;
    //
    //   this.screenOrientation.onChange().subscribe(
    //     () => {
    //       this.slides.startAutoplay();
    //       this.slides.pager = true;
    //     }
    //   );
    // }
    // async presentFavAlert() {
    //   const alert = await this.alertController.create({
    //     message:
    //       'Add to your favourites by pressing the &#10084; icon you’ll find on tools, calculators and resources.',
    //     buttons: ['OK']
    //   });
    //
    //   await alert.present();
    // }
    DashboardPage.prototype.ngOnInit = function () {
        var _this = this;
        this.userid = this.settingService.getUserId();
        // this.getfavourites();
        if (this.platform.is("android")) {
            this.platform.ready().then(function () {
                _this.platform.backButton.subscribeWithPriority(9999, function () {
                    console.log("Back press handler!");
                    if (_this._location.isCurrentPathEqualTo("/tabs/dashboard")) {
                        // Show Exit Alert!
                        console.log("Show Exit Alert!");
                        if (!_this.isExitDialogOpen) {
                            _this.showExitConfirm();
                        }
                    }
                    else {
                        // Navigate to back page
                        console.log("Navigate to back page");
                        _this._location.back();
                    }
                });
                _this.platform.backButton.subscribeWithPriority(5, function () {
                    console.log("Handler called to force close!");
                    _this.alertController
                        .getTop()
                        .then(function (r) {
                        if (r) {
                            navigator["app"].exitApp();
                        }
                    })
                        .catch(function (e) {
                        console.log(e);
                    });
                });
            });
        }
    };
    DashboardPage.prototype.ionViewDidEnter = function () {
        if (this.platform.is("android")) {
            navigator["app"].clearHistory();
        }
        this.getNotificationCount();
        this.getPayemntEventURL();
        this.getBannersURL();
        this.viewtrips();
        this.getOcrCount();
        this.getCurrentEventList();
    };
    DashboardPage.prototype.showExitConfirm = function () {
        var _this = this;
        this.alertController.dismiss();
        this.isExitDialogOpen = true;
        this.alertController
            .create({
            header: "Exit Application",
            message: "Do you want to close the app?",
            backdropDismiss: false,
            buttons: [
                {
                    text: "Stay",
                    role: "cancel",
                    handler: function () {
                        console.log("Application exit prevented!");
                        _this.isExitDialogOpen = false;
                    },
                },
                {
                    text: "Exit",
                    handler: function () {
                        _this.isExitDialogOpen = false;
                        navigator["app"].exitApp();
                    },
                },
            ],
        })
            .then(function (alert) {
            alert.present();
        });
    };
    DashboardPage.prototype.openQRScanner = function () {
        this.redirectToEventSignIn();
    };
    DashboardPage.prototype.redirectToEventSignIn = function () {
        var _this = this;
        if (this.userid != undefined && this.userid) {
            this.presentLoading();
            this.apiService.getMyEventList().subscribe(function (result) {
                if (result.status) {
                    _this.navCtrl.navigateRoot("/event-sign-in");
                }
                _this.dismissLoading();
            }, function (error) {
                _this.dismissLoading();
                if (error && error.error) {
                    _this.presentToast(error.error.message);
                }
                if (error.status === 401) {
                    _this.apiService.logout('/event-sign-in');
                }
            });
        }
        else {
            this.apiService.logout('/event-sign-in');
        }
    };
    DashboardPage.prototype.viewtrips = function () {
        var _this = this;
        this.storageService
            .viewTrip(this.userid)
            .then(function (res) {
            if (res.rows.length > 0) {
                _this.totalDistance = 0;
                for (var i = 0; i < res.rows.length; i++) {
                    if (res.rows.item(i).unit === "km") {
                        // tslint:disable-next-line:radix
                        var distance = parseInt(res.rows.item(i).distance);
                        _this.totalDistance += lodash__WEBPACK_IMPORTED_MODULE_17__["isNaN"](distance) ? 0 : distance;
                    }
                    else {
                        var distance = _this.unitHelper.kmTomiles(res.rows.item(i).distance);
                        _this.totalDistance += lodash__WEBPACK_IMPORTED_MODULE_17__["isNaN"](distance) ? 0 : distance;
                    }
                }
            }
        })
            .catch(function (e) {
            console.log("viewtrips exception");
            console.log(e);
        });
    };
    DashboardPage.prototype.getOcrCount = function () {
        var _this = this;
        this.storageService
            .getOcrCount(this.userid)
            .then(function (res) {
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    console.log(res.rows.item(i));
                    _this.totalReceipt = res.rows.item(i).totalReceipt;
                }
            }
        })
            .catch(function (e) {
            console.log("getOcrCount exception");
            console.log(e);
        });
    };
    DashboardPage.prototype.goTo = function (url) {
        if (url.includes("http")) {
            this.gotourl(url);
        }
        else {
            this.backStack.setBackStack(url, "tabs/dashboard");
            this.navCtrl.navigateRoot("/" + url);
        }
    };
    DashboardPage.prototype.goToEvent = function () {
        if (this.userid) {
            console.log(this.isCurrentEvents);
            if (this.isCurrentEvents) {
                this.backStack.setBackStack("current-events", "tabs/dashboard");
                this.navCtrl.navigateRoot("/current-events");
            }
            else {
                this.backStack.setBackStack("my-events", "tabs/dashboard");
                this.navCtrl.navigateRoot("/my-events");
            }
        }
        else {
            var url = this.isCurrentEvents ? '/current-events' : '/my-events';
            this.navCtrl.navigateRoot("/login", { queryParams: { nextURL: url } });
        }
    };
    DashboardPage.prototype.goToUpdateprofile = function () {
        if (this.userid) {
            this.backStack.setBackStack("updateprofile", "tabs/dashboard");
            this.navCtrl.navigateRoot("/updateprofile");
        }
        else {
            this.navCtrl.navigateRoot("/login", { queryParams: { nextURL: '/updateprofile' } });
        }
    };
    DashboardPage.prototype.gotourl = function (url) {
        this.iab.create(url, "_blank", {
            location: this.platform.is("android") ? "yes" : "no",
            hideurlbar: "yes",
            hidenavigationbuttons: "yes",
            closebuttoncaption: "Back",
        });
    };
    DashboardPage.prototype.openMenu = function () {
        this.menuCtrl.enable(true, "menu");
        this.menuCtrl.open("menu");
    };
    DashboardPage.prototype.getCurrentEventList = function () {
        var _this = this;
        this.apiService.getCurrentEventList("Date", "desc").subscribe(function (result) {
            if (result.status) {
                if (!result.events || result.events.length === 0) {
                    _this.isCurrentEvents = false;
                }
            }
        });
    };
    DashboardPage.prototype.getfavourites = function () {
        var _this = this;
        this.favourites = [];
        this.storageService
            .favouritesList(this.userid)
            .then(function (res) {
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.favourites.push({
                        name: res.rows.item(i).name,
                        url: res.rows.item(i).url,
                        icon: "assets/img/home/favourites/" + res.rows.item(i).icon,
                    });
                }
                _this.addEmptyFavourites();
            }
            else {
                _this.defaultfav();
            }
        })
            .catch(function (e) {
            _this.defaultfav();
            console.log(e);
        });
    };
    DashboardPage.prototype.defaultfav = function () {
        this.favourites = [];
        this.addEmptyFavourites();
    };
    DashboardPage.prototype.addEmptyFavourites = function () {
        if (this.favourites.length < this.favouritesDefaultLength) {
            var max = this.favouritesDefaultLength - this.favourites.length;
            for (var index = 0; index < max; index++) {
                this.favourites.push({
                    name: "",
                    icon: "assets/img/home/favourites/favourite.png",
                });
            }
        }
    };
    DashboardPage.prototype.getPayemntEventURL = function () {
        var _this = this;
        this.apiService.getPaymenturls().subscribe(function (response) {
            if (response.data) {
                var event_1 = response.data.find(function (n) { return n.title === "Event_API"; });
                if (event_1 && event_1.content) {
                    _this.eventUrl = event_1.content;
                }
            }
        });
    };
    DashboardPage.prototype.getBannersURL = function () {
        var _this = this;
        this.apiService.getBannerurls().subscribe(function (response) {
            if (response.data) {
                _this.bannerList = response.data;
                _this.banner = response.data[0];
            }
        });
    };
    DashboardPage.prototype.getNotificationCount = function () {
        var _this = this;
        this.apiService.getNotificationCount().subscribe(function (response) {
            if (response.count) {
                _this.unreadNotificationCount = response.count > 9 ? "9+" : response.count;
            }
        });
    };
    DashboardPage.prototype.presentToast = function (msg) {
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
    DashboardPage.prototype.presentLoading = function () {
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
    DashboardPage.prototype.dismissLoading = function () {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("slides"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], DashboardPage.prototype, "slides", void 0);
    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dashboard",
            template: __webpack_require__(/*! ./dashboard.page.html */ "./src/app/dashboard/dashboard.page.html"),
            styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/dashboard/dashboard.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_7__["PageTrack"])("Dashboard Screen"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__["WebView"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _service_back_stack_service__WEBPACK_IMPORTED_MODULE_10__["BackStackService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_9__["SettingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__["ScreenOrientation"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"],
            _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_14__["FirebaseDynamicLinks"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_15__["BarcodeScanner"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map