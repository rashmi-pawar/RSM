(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-events-my-events-module"],{

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

/***/ "./src/app/my-events/my-events.module.ts":
/*!***********************************************!*\
  !*** ./src/app/my-events/my-events.module.ts ***!
  \***********************************************/
/*! exports provided: MyEventsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyEventsPageModule", function() { return MyEventsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-events.page */ "./src/app/my-events/my-events.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");








var routes = [
    {
        path: '',
        component: _my_events_page__WEBPACK_IMPORTED_MODULE_6__["MyEventsPage"]
    }
];
var MyEventsPageModule = /** @class */ (function () {
    function MyEventsPageModule() {
    }
    MyEventsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_my_events_page__WEBPACK_IMPORTED_MODULE_6__["MyEventsPage"]]
        })
    ], MyEventsPageModule);
    return MyEventsPageModule;
}());



/***/ }),

/***/ "./src/app/my-events/my-events.page.html":
/*!***********************************************!*\
  !*** ./src/app/my-events/my-events.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"{{back}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">\n      My Events\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <div (click)=\"goto('current-events')\">Current Events</div>\n      <ion-icon name=\"ios-arrow-forward\" style=\"bottom: -2px;position: relative;\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"main-title\">Upcoming Events</div>\n  <ion-card class=\"card-block upcoming\" *ngFor=\"let item of upcomingList\">\n    <ion-card-content class=\"main-content\">\n      <ion-card-title color=\"primary\" (click)=\"expandItem(upcomingList, item)\" class=\"title\">\n        <div class=\"name\">{{item.event_name}}</div>\n        <ion-icon name=\"ios-arrow-dropdown\" *ngIf=\"!item?.expanded\" class=\"expand-icon\"></ion-icon>\n        <ion-icon name=\"ios-arrow-dropup\" *ngIf=\"item.expanded ? item.expanded : false\" class=\"expand-icon\"></ion-icon>\n      </ion-card-title>\n      <ion-card-subtitle class=\"sub-title\" (click)=\"expandItem(upcomingList, item)\">{{formatDate(item.event_date)}}</ion-card-subtitle>\n      <app-expandable expandHeight=\"100px\" [expanded]=\"item.expanded ? item.expanded : false\">\n        <p *ngIf=\"item.start_time || item.end_time\">\n          {{timeConvert(item.start_time)}} {{item.end_time ? ' - '+timeConvert(item.end_time) : ''}}\n        </p>\n        {{item.venue_street ? item.venue_street : ''}}{{item.venue_city ? ', ' + item.venue_city : ''}}{{item.venue_state ? ', ' + item.venue_state : ''}}{{item.venue_country ? ', ' + item.venue_country : ''}}{{item.venue_zip ? ', ' + item.venue_zip : ''}}\n        <div class=\"more-info-link\" (click)=\"gotoPage(item)\">More information</div>\n      </app-expandable>\n    </ion-card-content>\n  </ion-card>\n  <div class=\"no-events\" *ngIf=\"isDataReceived && upcomingList.length === 0\">\n    <p> You don't have any upcoming events </p>\n  </div>\n  <div class=\"more-link\" (click)=\"openUpcomingEvents()\">See more events on our website</div>\n  <br />\n  <div *ngIf=\"isDataReceived && pastList.length > 0\">\n    <div class=\"main-title\">Past Events</div>\n    <ion-card class=\"card-block past\" (click)=\"gotoPage(item)\" *ngFor=\"let item of pastList\">\n      <ion-card-content class=\"main-content\">\n        <ion-card-title color=\"primary\" class=\"title\">{{item.event_name}}</ion-card-title>\n        <ion-card-subtitle class=\"sub-title\">{{formatDate(item.event_date)}}</ion-card-subtitle>\n      </ion-card-content>\n    </ion-card>\n    <div class=\"no-events\" *ngIf=\"isDataReceived && pastList.length === 0\">\n      <p> You don't have any past events </p>\n    </div>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/my-events/my-events.page.scss":
/*!***********************************************!*\
  !*** ./src/app/my-events/my-events.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #FFFFFF;\n}\n\n.main-title {\n  padding: 20px 20px 10px 20px;\n  text-align: center;\n  font-size: 18px;\n  color: #57585b;\n}\n\n.more-link {\n  text-align: center;\n  color: #399dde;\n  text-decoration: underline;\n}\n\n.more-info-link {\n  color: blue;\n  text-decoration: underline;\n}\n\n.expand-icon {\n  position: absolute;\n  right: -5px;\n  font-size: 35px;\n  color: #399dde;\n  top: 5px;\n}\n\n.card-block {\n  margin: 10px;\n  background: #FFFFFF;\n  box-shadow: 0 2px 13px rgba(0, 0, 0, 0.04);\n  border-radius: 0;\n}\n\n.card-block .main-content {\n  padding: 15px;\n}\n\n.card-block .main-content .title {\n  font-size: 18px;\n  letter-spacing: 0.5px;\n  font-weight: normal;\n}\n\n.card-block .main-content .title .name {\n  padding-right: 24px;\n  padding-left: 24px;\n}\n\n.card-block .main-content .sub-title {\n  margin-top: 4px;\n  text-transform: none;\n  color: #57585b;\n  font-weight: normal;\n  font-size: 14px;\n}\n\n.upcoming {\n  text-align: center;\n  border: 1px solid #399dde;\n}\n\n.upcoming .title {\n  color: #51b14b;\n  text-align: center;\n}\n\n.past {\n  background: #d5d5d5;\n}\n\n.no-events {\n  padding: 30px 30px 0px 30px;\n  text-align: center;\n  color: #399dde;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL215LWV2ZW50cy9teS1ldmVudHMucGFnZS5zY3NzIiwic3JjL2FwcC9teS1ldmVudHMvbXktZXZlbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7QUNJRjs7QURGQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtBQ0tGOztBREhBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ01GOztBRExFO0VBQ0UsYUFBQTtBQ09KOztBRE5JO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNRTjs7QURQTTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNTUjs7QUROSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNRTjs7QURKQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNPRjs7QURORTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ1FKOztBRExBO0VBQ0UsbUJBQUE7QUNRRjs7QUROQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDU0YiLCJmaWxlIjoic3JjL2FwcC9teS1ldmVudHMvbXktZXZlbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cbi5tYWluLXRpdGxlIHtcbiAgcGFkZGluZzogMjBweCAyMHB4IDEwcHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNTc1ODViO1xufVxuLm1vcmUtbGluayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzOTlkZGU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLm1vcmUtaW5mby1saW5re1xuICBjb2xvcjogYmx1ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uZXhwYW5kLWljb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC01cHg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6ICMzOTlkZGU7XG4gIHRvcDogNXB4O1xufVxuLmNhcmQtYmxvY2t7XG4gIG1hcmdpbjogMTBweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMCAycHggMTNweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICAubWFpbi1jb250ZW50e1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgLnRpdGxle1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIC5uYW1le1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5zdWItdGl0bGV7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIGNvbG9yOiAjNTc1ODViO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbn1cbi51cGNvbWluZ3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzk5ZGRlO1xuICAudGl0bGV7XG4gICAgY29sb3I6ICM1MWIxNGI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4ucGFzdHtcbiAgYmFja2dyb3VuZDogI2Q1ZDVkNTtcbn1cbi5uby1ldmVudHN7XG4gIHBhZGRpbmc6IDMwcHggMzBweCAwcHggMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzM5OWRkZTtcbn1cbiIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cblxuLm1haW4tdGl0bGUge1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMTBweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM1NzU4NWI7XG59XG5cbi5tb3JlLWxpbmsge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzk5ZGRlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLm1vcmUtaW5mby1saW5rIHtcbiAgY29sb3I6IGJsdWU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZXhwYW5kLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNXB4O1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjMzk5ZGRlO1xuICB0b3A6IDVweDtcbn1cblxuLmNhcmQtYmxvY2sge1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEzcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jYXJkLWJsb2NrIC5tYWluLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLmNhcmQtYmxvY2sgLm1haW4tY29udGVudCAudGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5jYXJkLWJsb2NrIC5tYWluLWNvbnRlbnQgLnRpdGxlIC5uYW1lIHtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuLmNhcmQtYmxvY2sgLm1haW4tY29udGVudCAuc3ViLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY29sb3I6ICM1NzU4NWI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnVwY29taW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzk5ZGRlO1xufVxuLnVwY29taW5nIC50aXRsZSB7XG4gIGNvbG9yOiAjNTFiMTRiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wYXN0IHtcbiAgYmFja2dyb3VuZDogI2Q1ZDVkNTtcbn1cblxuLm5vLWV2ZW50cyB7XG4gIHBhZGRpbmc6IDMwcHggMzBweCAwcHggMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzM5OWRkZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/my-events/my-events.page.ts":
/*!*********************************************!*\
  !*** ./src/app/my-events/my-events.page.ts ***!
  \*********************************************/
/*! exports provided: MyEventsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyEventsPage", function() { return MyEventsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_back_stack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/back-stack.service */ "./src/app/service/back-stack.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







var MyEventsPage = /** @class */ (function () {
    function MyEventsPage(backStack, iab, navCtrl, toastCtrl, loadingController, apiService, modalController, platform) {
        this.backStack = backStack;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.apiService = apiService;
        this.modalController = modalController;
        this.platform = platform;
        this.eventList = [];
        this.isLoading = false;
        this.isDataReceived = true;
        this.upcomingList = [];
        this.pastList = [];
        this.back = this.backStack.getBackStack('my-events');
    }
    MyEventsPage.prototype.ngOnInit = function () {
        this.getUpcomingEventList();
        this.getPastEventList();
    };
    MyEventsPage.prototype.goto = function (url) {
        this.navCtrl.navigateRoot('/' + url);
    };
    MyEventsPage.prototype.formatDate = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(date).format('dddd DD MMM yy');
    };
    MyEventsPage.prototype.timeConvert = function (time) {
        // Check correct time format and split into components
        if (!time) {
            return '';
        }
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) { // If time format correct
            time = time.slice(1); // Remove full string match value
            time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(''); // return adjusted time or original string
    };
    MyEventsPage.prototype.expandItem = function (items, item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            items.map(function (listItem) {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    };
    MyEventsPage.prototype.presentLoading = function () {
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
    MyEventsPage.prototype.dismissLoading = function () {
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
    MyEventsPage.prototype.presentToast = function (msg) {
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
    MyEventsPage.prototype.getUpcomingEventList = function () {
        var _this = this;
        this.presentLoading();
        this.apiService.getUpcomingEventList().subscribe(function (result) {
            if (result.status) {
                _this.upcomingList = result.events;
            }
            _this.dismissLoading();
        }, function (error) {
            if (error && error.error) {
                _this.presentToast(error.error.message);
            }
            if (error.status === 401) {
                _this.apiService.logout('/my-events');
            }
        });
    };
    MyEventsPage.prototype.getPastEventList = function () {
        var _this = this;
        this.presentLoading();
        this.apiService.getPastEventList().subscribe(function (result) {
            if (result.status) {
                _this.pastList = result.events;
            }
            _this.dismissLoading();
        }, function (error) {
            if (error && error.error) {
                _this.presentToast(error.error.message);
            }
            if (error.status === 401) {
                _this.apiService.logout('/my-events');
            }
        });
    };
    MyEventsPage.prototype.openUpcomingEvents = function () {
        this.iab.create(localStorage.getItem('upcomingEventURL'), '_blank', {
            location: this.platform.is('android') ? 'yes' : 'no',
            hideurlbar: 'yes',
            hidenavigationbuttons: 'yes',
            closebuttoncaption: 'Back'
        });
    };
    MyEventsPage.prototype.gotoPage = function (data) {
        var navigationExtras = {
            queryParams: { id: data.id }
        };
        // this.presentModal(data);
        this.navCtrl.navigateForward('/event-detail', navigationExtras);
    };
    MyEventsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-events',
            template: __webpack_require__(/*! ./my-events.page.html */ "./src/app/my-events/my-events.page.html"),
            styles: [__webpack_require__(/*! ./my-events.page.scss */ "./src/app/my-events/my-events.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_back_stack_service__WEBPACK_IMPORTED_MODULE_2__["BackStackService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], MyEventsPage);
    return MyEventsPage;
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
//# sourceMappingURL=my-events-my-events-module.js.map