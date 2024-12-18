(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~event-detail-event-detail-module~events-events-module"],{

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

/***/ "./src/app/event-detail/event-detail.page.html":
/*!*****************************************************!*\
  !*** ./src/app/event-detail/event-detail.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button *ngIf=\"!isModal\" defaultHref=\"{{back}}\"></ion-back-button>\n      <ion-icon name=\"arrow-back\" class=\"modal-back-arrow\" (click)=\"dismissModal()\" *ngIf=\"isModal && platform.is('android')\"></ion-icon>\n      <ion-icon name=\"arrow-back\" class=\"modal-back-arrow-ios\" (click)=\"dismissModal()\" *ngIf=\"isModal && platform.is('ios')\"></ion-icon>\n      <span class=\"back-text\" (click)=\"dismissModal()\" *ngIf=\"isModal && platform.is('ios')\">Back</span>\n    </ion-buttons>\n    <ion-title color=\"light\">\n      Event Details\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <div (click)=\"openUrl(eventDetail.slido_url)\" class=\"slido-section\">{{eventDetail.slido_name}}</div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content >\n   <ion-refresher slot=\"fixed\" (ionRefresh)=\"pullToRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"firs-section\">\n    <div class=\"event-banner\" [ngStyle]=\"{'backgroundImage': 'url('+ eventDetail.banner_image+')'}\" *ngIf=\"eventDetail.banner_text || eventDetail.banner_image\">\n      <h4 class=\"title\" *ngIf=\"eventDetail.banner_text\">{{eventDetail.banner_text}}</h4>\n    </div>\n\n<!--        <img src=\"./assets/img/chat.svg\" class=\"chat-image\" />-->\n    <div class=\"title-section\">\n      <h4 class=\"event-name\" *ngIf=\"eventDetail.event_name\">{{eventDetail.event_name}}</h4>\n      <!-- <h5 class=\"sub-title\" *ngIf=\"eventDetail.event_date\">{{formatDate(eventDetail.event_date)}}</h5> -->\n      <h5 class=\"sub-title\" *ngIf=\"eventDetail.venue\">{{eventDetail.venue}}</h5>\n      <p class=\"time\" *ngIf=\"eventDetail.start_time || eventDetail.end_time\">\n        {{timeConvert(eventDetail.start_time)}} {{eventDetail.end_time ? ' - '+timeConvert(eventDetail.end_time) : ''}}\n      </p>\n      <div class=\"address\" (click)=\"openMap()\">\n        {{!isEmpty(eventDetail.venue_street) ? eventDetail.venue_street : ''}}{{!isEmpty(eventDetail.venue_city) ? ', ' + eventDetail.venue_city : ''}}{{!isEmpty(eventDetail.venue_state) ? ', ' + eventDetail.venue_state : ''}}{{!isEmpty(eventDetail.venue_country) ? ', ' + eventDetail.venue_country : ''}}{{!isEmpty(eventDetail.venue_zip) ? ', ' + eventDetail.venue_zip : ''}}\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"eventDetail.event_description\" class=\"description-section innerHtmltd\" [innerHTML]=\"eventDetail.event_description | safeHtml\">\n  </div>\n  <img *ngIf=\"eventDetail.event_image\" [src]=\"eventDetail.event_image\" style=\"padding: 15px;\">\n  <div class=\"coordinator-section\" *ngIf=\"eventDetail.co_name\">\n    <h4 class=\"heading\">Coordinator Details</h4>\n    <div class=\"description\">\n      For further information please contact {{eventDetail.co_name}} on <span (click)=\"callNow(eventDetail.co_mobile)\">{{eventDetail.co_mobile}}</span> or email {{eventDetail.co_email}}\n    </div>\n  </div>\n  <ion-card class=\"expand-card-block\" *ngIf=\"speakerList.length > 0\">\n    <ion-card-content class=\"main-content\">\n      <ion-card-title color=\"primary\" (click)=\"expandItem(items[0])\" class=\"title\">\n        <div class=\"name\">Speaker Details</div>\n        <ion-icon name=\"ios-arrow-dropdown\" *ngIf=\"!items[0].expanded\" class=\"expand-icon\"></ion-icon>\n        <ion-icon name=\"ios-arrow-dropup\" *ngIf=\"items[0].expanded ? items[0].expanded : false\" class=\"expand-icon\"></ion-icon>\n      </ion-card-title>\n      <app-expandable [expanded]=\"items[0].expanded ? items[0].expanded : false\">\n        <div class=\"expand-content\">\n          <div class=\"speaker-list\" *ngFor=\"let speaker of speakerList\">\n            <div class=\"image\">\n              <img [src]=\"speaker.profile_pic\" />\n            </div>\n            <div class=\"right-section\" style=\"flex: 80%;\">\n              <div class=\"speaker-name\">{{speaker.speaker_name}}</div>\n              <div class=\"designation\">{{speaker.speaker_detail}}</div>\n              <div class=\"profile-link\" (click)=\"openUrl(speaker.linkedin_profile)\">Linkedin Profile</div>\n            </div>\n          </div>\n          <p class=\"nodata\" *ngIf=\"speakerList.length == 0\">No details found</p>\n        </div>\n      </app-expandable>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class=\"expand-card-block\" *ngIf=\"agendaList.length > 0\">\n    <ion-card-content class=\"main-content\">\n      <ion-card-title color=\"primary\" (click)=\"expandItem(items[2])\" class=\"title\">\n        <div class=\"name\">Agenda</div>\n        <ion-icon name=\"ios-arrow-dropdown\" *ngIf=\"!items[2].expanded\" class=\"expand-icon\"></ion-icon>\n        <ion-icon name=\"ios-arrow-dropup\" *ngIf=\"items[2].expanded ? items[2].expanded : false\" class=\"expand-icon\"></ion-icon>\n      </ion-card-title>\n      <app-expandable expandHeight=\"100px\" [expanded]=\"items[2].expanded ? items[2].expanded : false\">\n        <div class=\"expand-content\">\n<!--          <h4 class=\"agenda-heading\">&nbsp</h4>-->\n          <br />\n          <ion-segment mode=\"md\" class=\"segment-tab\" [(ngModel)]=\"segmentFilter\" *ngIf=\"agendaList.length > 0\">\n            <ion-segment-button *ngFor=\"let agenda of agendaList; let i = index\" mode=\"md\" value=\"{{agenda.title}}\" class=\"segment-btn\" [ngClass]=\"{selected: segmentFilter === agenda.title}\">\n              <p>{{agenda.title}}</p>\n            </ion-segment-button>\n          </ion-segment>\n          <div [ngSwitch]=\"segmentFilter\">\n            <ng-container *ngFor=\"let agenda of agendaList; let i = index\">\n              <div class=\"agenda-detail innerHtmltd\" *ngSwitchCase=\"agenda.title\" [innerHTML]=\"agenda.description | safeHtml\">\n              </div>\n            </ng-container>\n          </div>\n          <p class=\"nodata\" *ngIf=\"agendaList.length == 0\">No details found</p>\n        </div>\n      </app-expandable>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class=\"expand-card-block\" *ngIf=\"eventDetail.other_description\">\n    <ion-card-content class=\"main-content\">\n      <ion-card-title color=\"primary\" (click)=\"expandItem(items[1])\" class=\"title\">\n        <div class=\"name\">Directory</div>\n        <ion-icon name=\"ios-arrow-dropdown\" *ngIf=\"!items[1].expanded\" class=\"expand-icon\"></ion-icon>\n        <ion-icon name=\"ios-arrow-dropup\" *ngIf=\"items[1].expanded ? items[1].expanded : false\" class=\"expand-icon\"></ion-icon>\n      </ion-card-title>\n      <app-expandable expandHeight=\"100px\" [expanded]=\"items[1].expanded ? items[1].expanded : false\">\n        <div class=\"expand-content\">\n          <div class=\"other-detail\">\n            <div class=\"left-section innerHtmltd\" [ngStyle]=\"{'width': '100%'}\" [innerHTML]=\"eventDetail.other_description | safeHtml\">\n            </div>\n          </div>\n        </div>\n      </app-expandable>\n    </ion-card-content>\n  </ion-card>\n  <!-- <ion-card class=\"expand-card-block\">\n    <ion-card-content class=\"main-content\">\n      <ion-card-title color=\"primary\" (click)=\"expandItem(items[3])\" class=\"title\">\n        <div class=\"name\">Similar Events</div>\n        <ion-icon name=\"ios-arrow-dropdown\" *ngIf=\"!items[3].expanded\" class=\"expand-icon\"></ion-icon>\n        <ion-icon name=\"ios-arrow-dropup\" *ngIf=\"items[3].expanded ? items[3].expanded : false\" class=\"expand-icon\"></ion-icon>\n      </ion-card-title>\n      <app-expandable expandHeight=\"100px\" [expanded]=\"items[3].expanded ? items[3].expanded : false\">\n        <div class=\"expand-content\" style=\"padding: 0\">\n          <div class=\"similar-event\">\n            <p *ngIf=\"similarEvents.length === 0\" style=\"padding: 15px;\">\n              No details found\n            </p>\n            <ion-slides pager=\"true\" [options]=\"slideOpts\" *ngIf=\"similarEvents.length > 0\">\n              <ion-slide *ngFor=\"let event of similarEvents\">\n                <ion-card class=\"card-block\" (click)=\"presentModal(event)\">\n                  <ion-card-content class=\"main-content\">\n                    <ion-card-title color=\"primary\" class=\"title\">{{event.event_name}}</ion-card-title>\n                    <ion-card-subtitle class=\"sub-title\">{{formatDate(event.event_date)}}</ion-card-subtitle>\n                  </ion-card-content>\n                </ion-card>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n      </app-expandable>\n    </ion-card-content>\n  </ion-card> -->\n  <!-- <ion-card class=\"expand-card-block\">\n    <ion-card-content class=\"main-content\">\n      <ion-card-title color=\"primary\" (click)=\"expandItem(items[4])\" class=\"title\">\n        <div class=\"name\">Event Attendees</div>\n        <ion-icon name=\"ios-arrow-dropdown\" *ngIf=\"!items[4].expanded\" class=\"expand-icon\"></ion-icon>\n        <ion-icon name=\"ios-arrow-dropup\" *ngIf=\"items[4].expanded ? items[4].expanded : false\" class=\"expand-icon\"></ion-icon>\n      </ion-card-title>\n      <app-expandable expandHeight=\"100px\" [expanded]=\"items[4].expanded ? items[4].expanded : false\">\n        <div class=\"expand-content\" style=\"padding: 0\">\n          <br />\n          <div *ngFor=\"let attendees of attendeesList\">\n            <ion-card class=\"speaker-list attendees-list\" *ngIf=\"isDisplayCard(attendees)\">\n              <div class=\"right-section\">\n                <div class=\"speaker-name\" *ngIf=\"attendees.is_share_first_name === '1' || attendees.is_share_last_name === '1' && (attendees.first_name || attendees.last_name)\"><b>Name:</b> {{attendees.is_share_first_name ? attendees.first_name : ''}} {{attendees.is_share_last_name ? attendees.last_name : ''}}</div>\n                <div class=\"speaker-name\" *ngIf=\"attendees.is_share_email === '1' && attendees.email\"><b>Email:</b> {{attendees.email}}</div>\n                <div class=\"designation\" *ngIf=\"attendees.is_share_mobile === '1' && attendees.mobile\"><b>Mobile:</b> <span (click)=\"callNow(attendees.mobile)\">{{attendees.mobile}}</span></div>\n                <div class=\"designation\" *ngIf=\"attendees.is_share_post_code === '1' && attendees.post_code\"><b>Post Code:</b> {{attendees.post_code}}</div>\n                <div class=\"profile-link\" (click)=\"openUrl(attendees.linkedin_url)\" *ngIf=\"attendees.is_share_linkedin_url === '1' && attendees.linkedin_url\">Linkedin Profile</div>\n              </div>\n            </ion-card>\n          </div>\n          <div class=\"similar-event\">\n            <p *ngIf=\"attendeesList.length === 0\" style=\"padding: 15px;\">\n              No details found\n            </p>\n\n          </div>\n        </div>\n      </app-expandable>\n    </ion-card-content>\n  </ion-card> -->\n  <br />\n</ion-content>\n"

/***/ }),

/***/ "./src/app/event-detail/event-detail.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/event-detail/event-detail.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #FFFFFF;\n}\n\n.modal-back-arrow {\n  width: 24px;\n  height: 24px;\n  padding-left: 12px;\n}\n\n.modal-back-arrow-ios {\n  width: 35px;\n  height: 35px;\n  margin-left: -5px;\n  margin-right: -7px;\n}\n\n.back-text {\n  font-size: 18px;\n}\n\n.event-banner {\n  background-color: #009CDE;\n  height: 70px;\n  background-size: 100% 100%;\n  padding-top: 18px;\n  background-repeat: no-repeat;\n}\n\n.firs-section {\n  background: #009CDE;\n  padding: 0px 0px 10px 0px;\n  color: #FFF;\n}\n\n.firs-section .chat-image {\n  width: 80px;\n  position: absolute;\n  top: -6px;\n  right: 10%;\n  opacity: 0.4;\n}\n\n.firs-section .title-section {\n  background: #FFF;\n  color: #000;\n  margin: 0px 5px 5px 5px;\n  padding: 5px;\n  text-align: center;\n}\n\n.firs-section .title-section .event-name {\n  color: #51b14b;\n  margin-top: 10px;\n}\n\n.firs-section .title-section .address {\n  color: #022eff;\n  text-decoration: underline;\n  margin-bottom: 10px;\n}\n\n.firs-section .title {\n  font-size: 20px;\n  margin-top: 0;\n  background-color: #51b14b;\n  width: 70%;\n  padding: 5px 15px;\n  margin-bottom: 20px;\n}\n\n.firs-section .sub-title {\n  font-size: 20px;\n  margin-top: 0;\n  color: #57585b;\n  font-weight: normal;\n  margin-bottom: 5px;\n}\n\n.firs-section .time {\n  color: #57585b;\n}\n\n.firs-section p {\n  margin: 0;\n}\n\n.description-section {\n  padding: 15px;\n  text-align: justify;\n}\n\n.slido-section {\n  text-decoration: underline;\n  padding-right: 5px;\n}\n\n.coordinator-section .heading {\n  font-size: 20px;\n  color: #51b14b;\n  text-align: center;\n}\n\n.coordinator-section .description {\n  text-align: center;\n  padding: 0 15px;\n  color: #57585b;\n}\n\n.expand-card-block {\n  margin: 10px 3px;\n  border-radius: 0;\n  box-shadow: none;\n  background-color: #399dde;\n}\n\n.expand-card-block .title {\n  padding-bottom: 14px;\n}\n\n.expand-card-block .main-content {\n  padding: 14px 0px 0px;\n}\n\n.expand-card-block .name {\n  color: #FFFFFF;\n  font-size: 18px;\n  text-align: center;\n}\n\n.expand-card-block .expand-icon {\n  position: absolute;\n  right: 10px;\n  font-size: 35px;\n  color: #FFF;\n  top: -7px;\n}\n\n.expand-card-block .expand-content {\n  background-color: #FFFFFF;\n  padding: 0 15px;\n}\n\n.image-content {\n  height: 165px;\n}\n\n.display-flex {\n  display: flex;\n}\n\n.trip-option p {\n  color: #878C8E;\n  font-size: 16px;\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.selected {\n  background-color: #399dde !important;\n}\n\n.selected p {\n  color: #FFF !important;\n}\n\n.speaker-list {\n  display: flex;\n}\n\n.speaker-list .image {\n  min-width: 80px;\n}\n\n.speaker-list img {\n  width: 80px;\n  height: 80px;\n}\n\n.speaker-list .right-section {\n  padding-left: 10px;\n}\n\n.speaker-list .speaker-name {\n  font-size: 18px;\n}\n\n.speaker-list .designation {\n  font-size: 16px;\n}\n\n.speaker-list .profile-link {\n  text-decoration: underline;\n  color: blueviolet;\n}\n\n.attendees-list {\n  margin: 10px 10px 0px 10px;\n  padding: 5px;\n}\n\n.agenda-heading {\n  font-size: 20px;\n  color: #51b14b;\n  text-align: center;\n}\n\n.agenda-detail {\n  padding-top: 10px;\n  overflow: auto;\n}\n\n.segment-btn {\n  min-height: 35px;\n  min-width: 35px;\n  --padding-end: 10px !important;\n}\n\n.segment-btn p {\n  color: #FFF;\n}\n\n.segment-tab {\n  background: #57585b;\n  height: 35px;\n  min-height: 35px;\n  overflow: scroll;\n  justify-content: left !important;\n}\n\n.other-detail {\n  display: flex;\n  justify-content: space-between;\n}\n\n.other-detail .left-section {\n  padding: 10px;\n}\n\n.similar-event .card-block {\n  width: 100%;\n  margin-top: 0;\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1254901961);\n}\n\n.similar-event .card-block .title {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL2V2ZW50LWRldGFpbC9ldmVudC1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9ldmVudC1kZXRhaWwvZXZlbnQtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QUREQTtFQUNFLGVBQUE7QUNJRjs7QURGQTtFQUVFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQ0lGOztBREZBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNLRjs7QURKRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ01KOztBREpFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURMSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ09OOztBRExJO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUNPTjs7QURKRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ01KOztBREpFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ01KOztBREpFO0VBQ0UsY0FBQTtBQ01KOztBREpFO0VBQ0UsU0FBQTtBQ01KOztBREhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDTUY7O0FESkE7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0FDT0o7O0FESkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDT0o7O0FETEU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDT0o7O0FESkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ09GOztBRE5FO0VBQ0Usb0JBQUE7QUNRSjs7QURORTtFQUNFLHFCQUFBO0FDUUo7O0FETkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDUUo7O0FETkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNRSjs7QURORTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ1FKOztBRExBO0VBRUUsYUFBQTtBQ09GOztBRExBO0VBQ0UsYUFBQTtBQ1FGOztBRE5BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDU0Y7O0FEUEE7RUFDRSxvQ0FBQTtBQ1VGOztBRFRFO0VBQ0Usc0JBQUE7QUNXSjs7QURSQTtFQUNFLGFBQUE7QUNXRjs7QURURTtFQUNFLGVBQUE7QUNXSjs7QURURTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDV0o7O0FEVEU7RUFDRSxrQkFBQTtBQ1dKOztBRFRFO0VBQ0UsZUFBQTtBQ1dKOztBRFRFO0VBQ0UsZUFBQTtBQ1dKOztBRFRFO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQ1dKOztBRFJBO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0FDV0Y7O0FEVEE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDWUY7O0FEVkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNhRjs7QURYQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FDY0Y7O0FEYkU7RUFDRSxXQUFBO0FDZUo7O0FEWkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUNlRjs7QURiQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ2dCRjs7QURmRTtFQUNFLGFBQUE7QUNpQko7O0FEYkU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQUFBO0FDZ0JKOztBRGZJO0VBQ0UsZUFBQTtBQ2lCTiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50LWRldGFpbC9ldmVudC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuLm1vZGFsLWJhY2stYXJyb3d7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbn1cbi5tb2RhbC1iYWNrLWFycm93LWlvc3tcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIG1hcmdpbi1yaWdodDogLTdweDtcbn1cbi5iYWNrLXRleHR7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5ldmVudC1iYW5uZXJ7XG4gIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2F2YXRhci5wbmcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Q0RFO1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBwYWRkaW5nLXRvcDogMThweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5maXJzLXNlY3Rpb257XG4gIGJhY2tncm91bmQ6ICMwMDlDREU7XG4gIHBhZGRpbmc6IDBweCAwcHggMTBweCAwcHg7XG4gIGNvbG9yOiAjRkZGO1xuICAuY2hhdC1pbWFnZXtcbiAgICB3aWR0aDogODBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNnB4O1xuICAgIHJpZ2h0OiAxMCU7XG4gICAgb3BhY2l0eTogMC40XG4gIH1cbiAgLnRpdGxlLXNlY3Rpb257XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBtYXJnaW46IDBweCA1cHggNXB4IDVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5ldmVudC1uYW1le1xuICAgICAgY29sb3I6ICM1MWIxNGI7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICAuYWRkcmVzc3tcbiAgICAgIGNvbG9yOiAjMDIyZWZmO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgfVxuICAudGl0bGV7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxYjE0YjtcbiAgICB3aWR0aDogNzAlO1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLnN1Yi10aXRsZXtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBjb2xvcjogIzU3NTg1YjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAudGltZXtcbiAgICBjb2xvcjogIzU3NTg1YjtcbiAgfVxuICBwe1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuLmRlc2NyaXB0aW9uLXNlY3Rpb257XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uc2xpZG8tc2VjdGlvbntcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4uY29vcmRpbmF0b3Itc2VjdGlvbntcbiAgLmhlYWRpbmd7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNTFiMTRiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZGVzY3JpcHRpb257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBjb2xvcjogIzU3NTg1YjtcbiAgfVxufVxuLmV4cGFuZC1jYXJkLWJsb2Nre1xuICBtYXJnaW46IDEwcHggM3B4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk5ZGRlO1xuICAudGl0bGV7XG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XG4gIH1cbiAgLm1haW4tY29udGVudHtcbiAgICBwYWRkaW5nOiAxNHB4IDBweCAwcHg7XG4gIH1cbiAgLm5hbWV7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZXhwYW5kLWljb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICB0b3A6IC03cHg7XG4gIH1cbiAgLmV4cGFuZC1jb250ZW50e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICB9XG59XG4uaW1hZ2UtY29udGVudFxue1xuICBoZWlnaHQ6IDE2NXB4O1xufVxuLmRpc3BsYXktZmxleHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi50cmlwLW9wdGlvbiBwIHtcbiAgY29sb3I6ICM4NzhDOEU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTlkZGUgIWltcG9ydGFudDtcbiAgcCB7XG4gICAgY29sb3I6ICNGRkYgICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5zcGVha2VyLWxpc3R7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLmltYWdle1xuICAgIG1pbi13aWR0aDogODBweDtcbiAgfVxuICBpbWd7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICB9XG4gIC5yaWdodC1zZWN0aW9ue1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICAuc3BlYWtlci1uYW1le1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuZGVzaWduYXRpb257XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5wcm9maWxlLWxpbmt7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6IGJsdWV2aW9sZXQ7XG4gIH1cbn1cbi5hdHRlbmRlZXMtbGlzdHtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMHB4IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5hZ2VuZGEtaGVhZGluZ3tcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzUxYjE0YjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFnZW5kYS1kZXRhaWx7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5zZWdtZW50LWJ0bntcbiAgbWluLWhlaWdodDogMzVweDtcbiAgbWluLXdpZHRoOiAzNXB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHB7XG4gICAgY29sb3I6ICNGRkY7XG4gIH1cbn1cbi5zZWdtZW50LXRhYntcbiAgYmFja2dyb3VuZDogIzU3NTg1YjtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtaW4taGVpZ2h0OiAzNXB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQgIWltcG9ydGFudDtcbn1cbi5vdGhlci1kZXRhaWx7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLmxlZnQtc2VjdGlvbntcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59XG4uc2ltaWxhci1ldmVudHtcbiAgLmNhcmQtYmxvY2t7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA3cHggIzAwMDAwMDIwO1xuICAgIC50aXRsZXtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gIH1cbn1cbiIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cblxuLm1vZGFsLWJhY2stYXJyb3cge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG59XG5cbi5tb2RhbC1iYWNrLWFycm93LWlvcyB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBtYXJnaW4tcmlnaHQ6IC03cHg7XG59XG5cbi5iYWNrLXRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ldmVudC1iYW5uZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Q0RFO1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBwYWRkaW5nLXRvcDogMThweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmZpcnMtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICMwMDlDREU7XG4gIHBhZGRpbmc6IDBweCAwcHggMTBweCAwcHg7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmZpcnMtc2VjdGlvbiAuY2hhdC1pbWFnZSB7XG4gIHdpZHRoOiA4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgcmlnaHQ6IDEwJTtcbiAgb3BhY2l0eTogMC40O1xufVxuLmZpcnMtc2VjdGlvbiAudGl0bGUtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW46IDBweCA1cHggNXB4IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmlycy1zZWN0aW9uIC50aXRsZS1zZWN0aW9uIC5ldmVudC1uYW1lIHtcbiAgY29sb3I6ICM1MWIxNGI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZmlycy1zZWN0aW9uIC50aXRsZS1zZWN0aW9uIC5hZGRyZXNzIHtcbiAgY29sb3I6ICMwMjJlZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmZpcnMtc2VjdGlvbiAudGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MWIxNGI7XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmZpcnMtc2VjdGlvbiAuc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogIzU3NTg1YjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmZpcnMtc2VjdGlvbiAudGltZSB7XG4gIGNvbG9yOiAjNTc1ODViO1xufVxuLmZpcnMtc2VjdGlvbiBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZGVzY3JpcHRpb24tc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5zbGlkby1zZWN0aW9uIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmNvb3JkaW5hdG9yLXNlY3Rpb24gLmhlYWRpbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNTFiMTRiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29vcmRpbmF0b3Itc2VjdGlvbiAuZGVzY3JpcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgY29sb3I6ICM1NzU4NWI7XG59XG5cbi5leHBhbmQtY2FyZC1ibG9jayB7XG4gIG1hcmdpbjogMTBweCAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTlkZGU7XG59XG4uZXhwYW5kLWNhcmQtYmxvY2sgLnRpdGxlIHtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG59XG4uZXhwYW5kLWNhcmQtYmxvY2sgLm1haW4tY29udGVudCB7XG4gIHBhZGRpbmc6IDE0cHggMHB4IDBweDtcbn1cbi5leHBhbmQtY2FyZC1ibG9jayAubmFtZSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5leHBhbmQtY2FyZC1ibG9jayAuZXhwYW5kLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjRkZGO1xuICB0b3A6IC03cHg7XG59XG4uZXhwYW5kLWNhcmQtYmxvY2sgLmV4cGFuZC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uaW1hZ2UtY29udGVudCB7XG4gIGhlaWdodDogMTY1cHg7XG59XG5cbi5kaXNwbGF5LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udHJpcC1vcHRpb24gcCB7XG4gIGNvbG9yOiAjODc4QzhFO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTlkZGUgIWltcG9ydGFudDtcbn1cbi5zZWxlY3RlZCBwIHtcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbn1cblxuLnNwZWFrZXItbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc3BlYWtlci1saXN0IC5pbWFnZSB7XG4gIG1pbi13aWR0aDogODBweDtcbn1cbi5zcGVha2VyLWxpc3QgaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbi5zcGVha2VyLWxpc3QgLnJpZ2h0LXNlY3Rpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uc3BlYWtlci1saXN0IC5zcGVha2VyLW5hbWUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uc3BlYWtlci1saXN0IC5kZXNpZ25hdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5zcGVha2VyLWxpc3QgLnByb2ZpbGUtbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogYmx1ZXZpb2xldDtcbn1cblxuLmF0dGVuZGVlcy1saXN0IHtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMHB4IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFnZW5kYS1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzUxYjE0YjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWdlbmRhLWRldGFpbCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnNlZ21lbnQtYnRuIHtcbiAgbWluLWhlaWdodDogMzVweDtcbiAgbWluLXdpZHRoOiAzNXB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uc2VnbWVudC1idG4gcCB7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uc2VnbWVudC10YWIge1xuICBiYWNrZ3JvdW5kOiAjNTc1ODViO1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1pbi1oZWlnaHQ6IDM1cHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGp1c3RpZnktY29udGVudDogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4ub3RoZXItZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm90aGVyLWRldGFpbCAubGVmdC1zZWN0aW9uIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnNpbWlsYXItZXZlbnQgLmNhcmQtYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgYm94LXNoYWRvdzogMCAycHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMjU0OTAxOTYxKTtcbn1cbi5zaW1pbGFyLWV2ZW50IC5jYXJkLWJsb2NrIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/event-detail/event-detail.page.ts":
/*!***************************************************!*\
  !*** ./src/app/event-detail/event-detail.page.ts ***!
  \***************************************************/
/*! exports provided: EventDetailPage, SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailPage", function() { return EventDetailPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_back_stack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/back-stack.service */ "./src/app/service/back-stack.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_app_availability_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/app-availability/ngx */ "./node_modules/@ionic-native/app-availability/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/setting.service */ "./src/app/service/setting.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);














var EventDetailPage = /** @class */ (function () {
    function EventDetailPage(toastCtrl, apiService, platform, iab, appAvailability, route, backStack, callNumber, loadingController, navCtrl, sanitizer, modalController, settingService, elementRef) {
        this.toastCtrl = toastCtrl;
        this.apiService = apiService;
        this.platform = platform;
        this.iab = iab;
        this.appAvailability = appAvailability;
        this.route = route;
        this.backStack = backStack;
        this.callNumber = callNumber;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.modalController = modalController;
        this.settingService = settingService;
        this.elementRef = elementRef;
        this.segmentFilter = '';
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
        this.isLoading = false;
        this.eventDetail = {};
        this.similarEvents = [];
        this.agendaList = [];
        this.items = [
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false }
        ];
        this.speakerList = [];
        this.attendeesList = [];
        this.back = this.backStack.getBackStack('my-events');
    }
    EventDetailPage_1 = EventDetailPage;
    EventDetailPage.prototype.expandItem = function (item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.items.map(function (listItem) {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    // listItem.expanded = false;
                }
                return listItem;
            });
        }
    };
    EventDetailPage.prototype.formatDate = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_10__(date).format('dddd DD MMM yy');
    };
    EventDetailPage.prototype.presentModal = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: EventDetailPage_1,
                            cssClass: 'my-custom-detail-modal',
                            componentProps: {
                                eventId: event.id,
                                isModal: true
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EventDetailPage.prototype.dismissModal = function () {
        this.modalController.dismiss({
            dismissed: true
        });
    };
    EventDetailPage.prototype.presentLoading = function () {
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
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventDetailPage.prototype.dismissLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = false;
                        return [4 /*yield*/, this.loadingController
                                .dismiss()
                                .then(function () { return console.log('dismissed'); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EventDetailPage.prototype.ngOnInit = function () {
    };
    EventDetailPage.prototype.ionViewDidEnter = function () {
        console.log('init detail');
        this.pullToRefresh(null);
    };
    EventDetailPage.prototype.pullToRefresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                userData = this.settingService.getUserData();
                this.route.queryParams.subscribe(function (params) {
                    var eid = (_this.isModal && _this.eventId) ? _this.eventId : params.id;
                    if (userData && userData.id) {
                        _this.getMyEventDetails(eid);
                        _this.getSimilarEventList(eid);
                        _this.getEventSpeakerList(eid);
                        _this.getEventAttendeesList(eid);
                    }
                    else {
                        _this.apiService.logout('/event-detail?id=' + eid);
                    }
                });
                this.getUpcomingEventURL();
                setTimeout(function () {
                    if (event) {
                        event.target.complete();
                    }
                }, 1000);
                return [2 /*return*/];
            });
        });
    };
    EventDetailPage.prototype.presentToast = function (msg) {
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
    EventDetailPage.prototype.getUpcomingEventURL = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.apiService.getPaymenturls().subscribe(function (response) {
                    if (response.data) {
                        var event_1 = response.data.find(function (n) { return n.title === 'Event_API'; });
                        if (event_1 && event_1.content) {
                            _this.upcomingEventURL = event_1.content;
                        }
                        else {
                            _this.presentToast('No upcoming event url found');
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    EventDetailPage.prototype.getEventSpeakerList = function (id) {
        var _this = this;
        this.apiService.getEventSpeakerList(id).subscribe(function (result) {
            console.log(result);
            if (result.status && result.data) {
                _this.speakerList = result.data;
            }
        }, function (error) {
            if (error && error.error) {
                _this.presentToast(error.error.message);
            }
            if (error.status === 401) {
                _this.apiService.logout();
            }
        });
    };
    EventDetailPage.prototype.getEventAttendeesList = function (id) {
        var _this = this;
        this.apiService.getEventAttendeesList(id).subscribe(function (result) {
            console.log(result);
            if (result.status && result.data) {
                _this.attendeesList = result.data;
            }
        }, function (error) {
            if (error && error.error) {
                _this.presentToast(error.error.message);
            }
            if (error.status === 401) {
                _this.apiService.logout();
            }
        });
    };
    EventDetailPage.prototype.isDisplayCard = function (attendees) {
        if (attendees.is_agree_share_detail === '1') {
            return (attendees.is_share_first_name === '1' && attendees.first_name) ||
                (attendees.is_share_last_name === '1' && attendees.last_name) ||
                (attendees.is_share_email === '1' && attendees.email) ||
                (attendees.is_share_mobile === '1' && attendees.mobile) ||
                (attendees.is_share_post_code === '1' && attendees.post_code) ||
                (attendees.is_share_linkedin_url === '1' && attendees.linkedin_url);
        }
        else
            false;
    };
    EventDetailPage.prototype.isJson = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    EventDetailPage.prototype.timeConvert = function (time) {
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
    EventDetailPage.prototype.getMyEventDetails = function (id) {
        var _this = this;
        this.presentLoading();
        this.apiService.getMyEventDetail(id).subscribe(function (result) {
            if (result.status && result.events) {
                // result.events.agenda = this.sanitizer.bypassSecurityTrustHtml(result.events.agenda);
                _this.eventDetail = result.events;
                var agenda = _this.isJson(result.events.agenda) ? JSON.parse(result.events.agenda) : [];
                console.log(agenda);
                if (agenda && agenda.length > 0) {
                    var userData = _this.settingService.getUserData();
                    var usetType_1 = userData.user_types.map(function (n) { return n.user_type; });
                    _this.agendaList = agenda.filter(function (n) { return usetType_1.includes(n.user_type) || n.user_type === 'all' || !n.user_type; });
                    _this.segmentFilter = _this.agendaList[0].title;
                }
                if (_this.eventDetail.other_image) {
                    _this.eventDetail.other_description = "\n            <div class=\"image\"><img src=\"" + _this.eventDetail.other_image + "\" /></div> " + _this.eventDetail.other_description;
                }
                _this.dismissLoading();
            }
            _this.linkClick();
        }, function (error) {
            _this.dismissLoading();
            if (error && error.error) {
                _this.presentToast(error.error.message);
            }
            if (error.status === 401) {
                _this.apiService.logout();
            }
        });
    };
    EventDetailPage.prototype.getSimilarEventList = function (id) {
        var _this = this;
        this.apiService.getSimilarEventList(id).subscribe(function (result) {
            if (result.status) {
                _this.similarEvents = result.events;
            }
            else {
                _this.similarEvents = [];
            }
        }, function (error) {
            if (error && error.error) {
                _this.presentToast(error.error.message);
                _this.similarEvents = [];
            }
        });
    };
    EventDetailPage.prototype.launchExternalApp = function (iosSchemaName, androidPackageName, appUrl, httpUrl) {
        var _this = this;
        var app;
        if (this.platform.is('ios')) {
            app = iosSchemaName;
        }
        else if (this.platform.is('android')) {
            app = androidPackageName;
        }
        else {
            var browser = this.iab.create(httpUrl, '_system', {
                location: this.platform.is('android') ? 'yes' : 'no',
                hideurlbar: 'yes',
                hidenavigationbuttons: 'yes',
                closebuttoncaption: 'Back'
            });
            return;
        }
        this.appAvailability.check(app).then(function (yes) {
            var browser = _this.iab.create(appUrl, '_system', {
                location: _this.platform.is('android') ? 'yes' : 'no',
                hideurlbar: 'yes',
                hidenavigationbuttons: 'yes',
                closebuttoncaption: 'Back'
            });
        }, function (no) {
            var browser = _this.iab.create(httpUrl, '_system', {
                location: _this.platform.is('android') ? 'yes' : 'no',
                hideurlbar: 'yes',
                hidenavigationbuttons: 'yes',
                closebuttoncaption: 'Back'
            });
        });
    };
    EventDetailPage.prototype.openLinkedIn = function (url) {
        if (url) {
            this.launchExternalApp('linkedin://', 'com.linkedin.android', url, url);
        }
        else {
            this.presentToast('Not found profile url');
        }
    };
    EventDetailPage.prototype.openMap = function () {
        var URL = '';
        if (this.platform.is('ios')) {
            URL = 'maps://maps.apple.com/?q=';
        }
        else {
            URL = 'https://maps.google.com/?q=';
        }
        URL += this.eventDetail.venue_street ? this.eventDetail.venue_street + ',' : '';
        URL += this.eventDetail.venue_city ? this.eventDetail.venue_city + ',' : '';
        URL += this.eventDetail.venue_state ? this.eventDetail.venue_state + ',' : '';
        URL += this.eventDetail.venue_country ? this.eventDetail.venue_country + ',' : '';
        URL += this.eventDetail.venue_zip ? this.eventDetail.venue_zip + ',' : '';
        URL += '/@' + this.eventDetail.venue_latitude + ',' + this.eventDetail.venue_longitude;
        if ((this.eventDetail.venue_longitude && this.eventDetail.venue_latitude) || this.eventDetail.venue_street || this.eventDetail.venue_city || this.eventDetail.venue_state) {
            var browser = this.iab.create(URL, '_system', {
                location: this.platform.is('android') ? 'yes' : 'no',
                hideurlbar: 'yes',
                hidenavigationbuttons: 'yes',
                closebuttoncaption: 'Back'
            });
        }
        else {
            this.presentToast('Not found address');
        }
    };
    EventDetailPage.prototype.openUrl = function (url) {
        if (url) {
            this.iab.create(url, '_blank', {
                location: this.platform.is('android') ? 'yes' : 'no',
                hideurlbar: 'yes',
                hidenavigationbuttons: 'yes',
                closebuttoncaption: 'Back'
            });
        }
        else {
            this.presentToast('No url found');
        }
    };
    EventDetailPage.prototype.callNow = function (callNumber) {
        this.callNumber.callNumber(callNumber, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    EventDetailPage.prototype.isEmpty = function (string) {
        if (string) {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_12__["isEmpty"])(string.trim());
        }
        return true;
    };
    EventDetailPage.prototype.linkClick = function () {
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
    var EventDetailPage_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EventDetailPage.prototype, "eventId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EventDetailPage.prototype, "isModal", void 0);
    EventDetailPage = EventDetailPage_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-detail',
            template: __webpack_require__(/*! ./event-detail.page.html */ "./src/app/event-detail/event-detail.page.html"),
            styles: [__webpack_require__(/*! ./event-detail.page.scss */ "./src/app/event-detail/event-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"],
            _ionic_native_app_availability_ngx__WEBPACK_IMPORTED_MODULE_6__["AppAvailability"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _service_back_stack_service__WEBPACK_IMPORTED_MODULE_2__["BackStackService"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _service_setting_service__WEBPACK_IMPORTED_MODULE_11__["SettingService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], EventDetailPage);
    return EventDetailPage;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
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
//# sourceMappingURL=default~event-detail-event-detail-module~events-events-module.js.map