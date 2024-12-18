(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["current-events-current-events-module"],{

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

/***/ "./src/app/current-events/current-events.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/current-events/current-events.module.ts ***!
  \*********************************************************/
/*! exports provided: CurrentEventsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentEventsPageModule", function() { return CurrentEventsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _current_events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./current-events.page */ "./src/app/current-events/current-events.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");








var routes = [
    {
        path: '',
        component: _current_events_page__WEBPACK_IMPORTED_MODULE_6__["CurrentEventsPage"]
    }
];
var CurrentEventsPageModule = /** @class */ (function () {
    function CurrentEventsPageModule() {
    }
    CurrentEventsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_current_events_page__WEBPACK_IMPORTED_MODULE_6__["CurrentEventsPage"]]
        })
    ], CurrentEventsPageModule);
    return CurrentEventsPageModule;
}());



/***/ }),

/***/ "./src/app/current-events/current-events.page.html":
/*!*********************************************************!*\
  !*** ./src/app/current-events/current-events.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"{{back}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">\n      Current Events\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <div (click)=\"goto('my-events')\">My Events</div>\n      <ion-icon name=\"ios-arrow-forward\" style=\"bottom: -2px;position: relative;\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"filter-block\">\n    <div>Sort by:</div>\n    <div class=\"options\">\n      <ion-col class=\"block first\" [class.active]=\"sortBy === 'date'\" (click)=\"onSortBy('date')\">\n        <span>Date</span>\n        <ion-icon name=\"arrow-round-up\" *ngIf=\"orderBy === 'asc' && sortBy === 'date'\" class=\"sort-icon\"></ion-icon>\n        <ion-icon name=\"arrow-round-down\" *ngIf=\"orderBy === 'desc' && sortBy === 'date'\" class=\"sort-icon\"></ion-icon>\n      </ion-col>\n      <ion-col class=\"block\" [class.active]=\"sortBy === 'location'\" (click)=\"onSortBy('location')\">\n        <span>Location</span>\n        <ion-icon name=\"arrow-round-up\" *ngIf=\"orderBy === 'asc' && sortBy === 'location'\" class=\"sort-icon\"></ion-icon>\n        <ion-icon name=\"arrow-round-down\" *ngIf=\"orderBy === 'desc' && sortBy === 'location'\" class=\"sort-icon\"></ion-icon>\n      </ion-col>\n      <ion-col class=\"block\" [class.active]=\"sortBy === 'division'\" (click)=\"onSortBy('division')\">\n        <span>Division</span>\n        <ion-icon name=\"arrow-round-up\" *ngIf=\"orderBy === 'asc' && sortBy === 'division'\" class=\"sort-icon\"></ion-icon>\n        <ion-icon name=\"arrow-round-down\" *ngIf=\"orderBy === 'desc' && sortBy === 'division'\" class=\"sort-icon\"></ion-icon>\n      </ion-col>\n      <ion-col class=\"block last\" [class.active]=\"sortBy === 'other'\" (click)=\"onSortBy('other')\">\n        <span>Other</span>\n        <ion-icon name=\"arrow-round-up\" *ngIf=\"orderBy === 'asc' && sortBy === 'other'\" class=\"sort-icon\"></ion-icon>\n        <ion-icon name=\"arrow-round-down\" *ngIf=\"orderBy === 'desc' && sortBy === 'other'\" class=\"sort-icon\"></ion-icon>\n      </ion-col>\n    </div>\n  </div>\n  <div *ngFor=\"let item of items\">\n    <ion-card class=\"card-block upcoming\" *ngIf=\"item.is_myevent\">\n      <ion-card-content class=\"main-content\">\n        <ion-card-title color=\"primary\" (click)=\"expandItem(item)\" class=\"title\">\n          <div class=\"name\">{{item.event_name}}</div>\n          <ion-icon name=\"ios-arrow-dropdown\" *ngIf=\"!item?.expanded\" class=\"expand-icon\"></ion-icon>\n          <ion-icon name=\"ios-arrow-dropup\" *ngIf=\"item.expanded ? item.expanded : false\" class=\"expand-icon\"></ion-icon>\n        </ion-card-title>\n        <ion-card-subtitle class=\"sub-title\" (click)=\"expandItem(item)\">{{formatDate(item.event_date)}}</ion-card-subtitle>\n        <app-expandable expandHeight=\"100px\" [expanded]=\"item.expanded ? item.expanded : false\">\n          <p *ngIf=\"item.start_time || item.end_time\">\n            {{timeConvert(item.start_time)}}{{item.end_time ? ' - '+timeConvert(item.end_time) : ''}}\n          </p>\n          {{!isEmpty(item.venue_street) ? item.venue_street : ''}}{{!isEmpty(item.venue_city) ? ', ' + item.venue_city : ''}}{{!isEmpty(item.venue_state) ? ', ' + item.venue_state : ''}}{{!isEmpty(item.venue_country) ? ', ' + item.venue_country : ''}}{{!isEmpty(item.venue_zip) ? ', ' + item.venue_zip : ''}}\n          <div class=\"more-info-link\" (click)=\"gotoPage(item)\">More information</div>\n        </app-expandable>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <ion-card class=\"card-block past\" (click)=\"gotoPage(item)\" *ngFor=\"let item of items\">\n    <ion-card-content class=\"main-content\" *ngIf=\"!item.is_myevent\">\n      <ion-card-title color=\"primary\" class=\"title\">{{item.event_name}}</ion-card-title>\n      <ion-card-subtitle class=\"sub-title\">{{formatDate(item.event_date)}}</ion-card-subtitle>\n    </ion-card-content>\n  </ion-card>\n  <div class=\"no-events\" *ngIf=\"isDataReceived && items.length === 0\">\n    <p> No any current events. </p>\n  </div>\n  <div class=\"more-link\" (click)=\"openUpcomingEvents()\">See more events on our website</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/current-events/current-events.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/current-events/current-events.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #FFFFFF;\n}\n\n.filter-block {\n  background: #FFF;\n  margin: 10px;\n  padding: 10px;\n  color: #57585b;\n  border: 1px solid #399dde;\n}\n\n.filter-block .options {\n  margin-top: 10px;\n  position: relative;\n}\n\n.filter-block .options .active {\n  color: #51b14b;\n}\n\n.filter-block .options .first {\n  padding-left: 0 !important;\n}\n\n.filter-block .options .last {\n  border-right: none !important;\n}\n\n.filter-block .options .block {\n  padding: 0 13px;\n  border-right: 1px solid;\n  position: relative;\n}\n\n.filter-block .options .sort-icon {\n  top: 3px;\n  right: 0px;\n  position: relative;\n}\n\n.more-link {\n  text-align: center;\n  color: #399dde;\n  text-decoration: underline;\n}\n\n.more-info-link {\n  color: blue;\n  text-decoration: underline;\n  margin-bottom: 10px;\n}\n\n.expand-icon {\n  position: absolute;\n  right: -5px;\n  font-size: 35px;\n  color: #399dde;\n  top: 5px;\n}\n\n.card-block {\n  margin: 10px;\n  background: #FFFFFF;\n  box-shadow: 0 2px 13px rgba(0, 0, 0, 0.04);\n  border-radius: 0;\n  border: 1px solid #399dde;\n}\n\n.card-block .main-content {\n  padding: 15px;\n}\n\n.card-block .main-content .title {\n  font-size: 18px;\n  letter-spacing: 0.5px;\n  font-weight: normal;\n}\n\n.card-block .main-content .title .name {\n  padding-right: 24px;\n  padding-left: 24px;\n}\n\n.card-block .main-content .sub-title {\n  margin-top: 4px;\n  text-transform: none;\n  color: #57585b;\n  font-weight: normal;\n  font-size: 14px;\n}\n\n.upcoming {\n  text-align: center;\n}\n\n.upcoming .title {\n  color: #51b14b;\n  text-align: center;\n}\n\n.no-events {\n  padding: 30px;\n  text-align: center;\n  color: #399dde;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL2N1cnJlbnQtZXZlbnRzL2N1cnJlbnQtZXZlbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY3VycmVudC1ldmVudHMvY3VycmVudC1ldmVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNFRjs7QURERTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURGSTtFQUNFLGNBQUE7QUNJTjs7QURGSTtFQUNFLDBCQUFBO0FDSU47O0FERkk7RUFDRSw2QkFBQTtBQ0lOOztBREZJO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNJTjs7QURGSTtFQUNFLFFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNJTjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQ0lGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0FDS0Y7O0FESEE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNNRjs7QURMRTtFQUNFLGFBQUE7QUNPSjs7QUROSTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDUU47O0FEUE07RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDU1I7O0FETkk7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDUU47O0FESkE7RUFDRSxrQkFBQTtBQ09GOztBRE5FO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDUUo7O0FETEE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDUUYiLCJmaWxlIjoic3JjL2FwcC9jdXJyZW50LWV2ZW50cy9jdXJyZW50LWV2ZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG4uZmlsdGVyLWJsb2NrIHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogIzU3NTg1YjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM5OWRkZTtcbiAgLm9wdGlvbnN7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmFjdGl2ZXtcbiAgICAgIGNvbG9yOiAjNTFiMTRiO1xuICAgIH1cbiAgICAuZmlyc3R7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmxhc3R7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJsb2Nre1xuICAgICAgcGFkZGluZzogMCAxM3B4O1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5zb3J0LWljb257XG4gICAgICB0b3A6IDNweDtcbiAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICB9XG59XG4ubW9yZS1saW5rIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzM5OWRkZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4ubW9yZS1pbmZvLWxpbmt7XG4gIGNvbG9yOiBibHVlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5leHBhbmQtaWNvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTVweDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzM5OWRkZTtcbiAgdG9wOiA1cHg7XG59XG4uY2FyZC1ibG9ja3tcbiAgbWFyZ2luOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwIDJweCAxM3B4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzOTlkZGU7XG4gIC5tYWluLWNvbnRlbnR7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICAudGl0bGV7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgLm5hbWV7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnN1Yi10aXRsZXtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgY29sb3I6ICM1NzU4NWI7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxufVxuLnVwY29taW5ne1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC50aXRsZXtcbiAgICBjb2xvcjogIzUxYjE0YjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5uby1ldmVudHN7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzOTlkZGU7XG59XG4iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cbi5maWx0ZXItYmxvY2sge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjNTc1ODViO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzk5ZGRlO1xufVxuLmZpbHRlci1ibG9jayAub3B0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5maWx0ZXItYmxvY2sgLm9wdGlvbnMgLmFjdGl2ZSB7XG4gIGNvbG9yOiAjNTFiMTRiO1xufVxuLmZpbHRlci1ibG9jayAub3B0aW9ucyAuZmlyc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cbi5maWx0ZXItYmxvY2sgLm9wdGlvbnMgLmxhc3Qge1xuICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5maWx0ZXItYmxvY2sgLm9wdGlvbnMgLmJsb2NrIHtcbiAgcGFkZGluZzogMCAxM3B4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZpbHRlci1ibG9jayAub3B0aW9ucyAuc29ydC1pY29uIHtcbiAgdG9wOiAzcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1vcmUtbGluayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzOTlkZGU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubW9yZS1pbmZvLWxpbmsge1xuICBjb2xvcjogYmx1ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5leHBhbmQtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC01cHg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6ICMzOTlkZGU7XG4gIHRvcDogNXB4O1xufVxuXG4uY2FyZC1ibG9jayB7XG4gIG1hcmdpbjogMTBweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMCAycHggMTNweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzk5ZGRlO1xufVxuLmNhcmQtYmxvY2sgLm1haW4tY29udGVudCB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uY2FyZC1ibG9jayAubWFpbi1jb250ZW50IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmNhcmQtYmxvY2sgLm1haW4tY29udGVudCAudGl0bGUgLm5hbWUge1xuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG59XG4uY2FyZC1ibG9jayAubWFpbi1jb250ZW50IC5zdWItdGl0bGUge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjb2xvcjogIzU3NTg1YjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udXBjb21pbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udXBjb21pbmcgLnRpdGxlIHtcbiAgY29sb3I6ICM1MWIxNGI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5vLWV2ZW50cyB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzOTlkZGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/current-events/current-events.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/current-events/current-events.page.ts ***!
  \*******************************************************/
/*! exports provided: CurrentEventsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentEventsPage", function() { return CurrentEventsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_back_stack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/back-stack.service */ "./src/app/service/back-stack.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








var CurrentEventsPage = /** @class */ (function () {
    function CurrentEventsPage(backStack, iab, navCtrl, toastCtrl, loadingController, apiService, modalController, platform) {
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
        this.items = [];
        this.sortBy = 'date';
        this.orderBy = 'desc';
        this.back = this.backStack.getBackStack('my-events');
        this.items = [];
    }
    CurrentEventsPage.prototype.ngOnInit = function () {
        this.getCurrentEventList();
    };
    CurrentEventsPage.prototype.onSortBy = function (option) {
        this.sortBy = option;
        this.orderBy = this.orderBy === 'desc' ? 'asc' : 'desc';
        this.getCurrentEventList();
    };
    CurrentEventsPage.prototype.goto = function (url) {
        this.navCtrl.navigateRoot('/' + url);
    };
    CurrentEventsPage.prototype.formatDate = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(date).format('dddd DD MMM yy');
    };
    CurrentEventsPage.prototype.timeConvert = function (time) {
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
    CurrentEventsPage.prototype.expandItem = function (item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.items.map(function (listItem) {
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
    CurrentEventsPage.prototype.presentLoading = function () {
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
    CurrentEventsPage.prototype.dismissLoading = function () {
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
    CurrentEventsPage.prototype.presentToast = function (msg) {
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
    CurrentEventsPage.prototype.getCurrentEventList = function () {
        var _this = this;
        this.presentLoading();
        this.apiService.getCurrentEventList(this.sortBy, this.orderBy).subscribe(function (result) {
            if (result.status) {
                _this.items = result.events;
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
    CurrentEventsPage.prototype.isEmpty = function (string) {
        if (string) {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(string.trim());
        }
        return true;
    };
    CurrentEventsPage.prototype.openUpcomingEvents = function () {
        this.iab.create(localStorage.getItem('upcomingEventURL'), '_blank', {
            location: this.platform.is('android') ? 'yes' : 'no',
            hideurlbar: 'yes',
            hidenavigationbuttons: 'yes',
            closebuttoncaption: 'Back'
        });
    };
    CurrentEventsPage.prototype.gotoPage = function (data) {
        var navigationExtras = {
            queryParams: { id: data.id }
        };
        // this.presentModal(data);
        this.navCtrl.navigateForward('/event-detail', navigationExtras);
    };
    CurrentEventsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-current-events',
            template: __webpack_require__(/*! ./current-events.page.html */ "./src/app/current-events/current-events.page.html"),
            styles: [__webpack_require__(/*! ./current-events.page.scss */ "./src/app/current-events/current-events.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_back_stack_service__WEBPACK_IMPORTED_MODULE_2__["BackStackService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], CurrentEventsPage);
    return CurrentEventsPage;
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
//# sourceMappingURL=current-events-current-events-module.js.map