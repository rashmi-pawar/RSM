(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["findus-findus-module"],{

/***/ "./src/app/findus/findus.module.ts":
/*!*****************************************!*\
  !*** ./src/app/findus/findus.module.ts ***!
  \*****************************************/
/*! exports provided: FindusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindusPageModule", function() { return FindusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _findus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./findus.page */ "./src/app/findus/findus.page.ts");







var routes = [
    {
        path: '',
        component: _findus_page__WEBPACK_IMPORTED_MODULE_6__["FindusPage"]
    }
];
var FindusPageModule = /** @class */ (function () {
    function FindusPageModule() {
    }
    FindusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_findus_page__WEBPACK_IMPORTED_MODULE_6__["FindusPage"]]
        })
    ], FindusPageModule);
    return FindusPageModule;
}());



/***/ }),

/***/ "./src/app/findus/findus.page.html":
/*!*****************************************!*\
  !*** ./src/app/findus/findus.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"{{back}}\"></ion-back-button>\n        </ion-buttons>\n        <ion-title color=\"light\">\n            Find us\n        </ion-title>\n    </ion-toolbar>\n\n    <ion-toolbar color=\"primary\">\n        <ion-searchbar searchIcon=\"search\" color=\"light\" placeholder=\"Search\" [(ngModel)]=\"autocomplete.query\"\n            [showCancelButton]=\"true\" (click)=\"showAuto()\" (ionInput)=\"updateSearch()\" (ionFocus)=\"showAuto()\" (ionCancel)=\"dismiss()\">\n        </ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding [scrollY]=\"false\">\n\n    <div class=\"search-content\" *ngIf=\"showAutoList\">\n        <ion-list>\n            <ion-item (click)=\"getCurrentNear()\">\n                <ion-icon name=\"navigate\" slot=\"start\"></ion-icon>\n                <ion-label>Show nearest branches to me</ion-label>\n            </ion-item>\n            <ion-item [hidden]=\"autocompleteItems?.length == 0\" *ngFor=\"let item of autocompleteItems\"\n                (click)=\"geoCode(item)\">\n                <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n                <ion-label>{{ item }}</ion-label>\n            </ion-item>\n        </ion-list>\n    </div>\n\n\n    <div #map1 id=\"map1\"></div>\n    <div *ngIf=\"isNotAllowLocation\">\n        Please allow \"LocationAccess\" to access your location while you are using app.\n    </div>\n\n    <ion-card class=\"marker-box\" *ngIf=\"showSearchList && searchList.length > 0\">\n        <ion-card-content no-padding>\n            <ion-list no-padding lines=\"none\">\n                <ion-item no-padding *ngFor=\"let item of searchList; let i = index;\">\n                    <ion-col no-padding size=\"2\" (click)=\"mapCenter(item.latitude, item.longitude, i)\">\n                        <ion-icon class=\"pin\" name=\"pin\"></ion-icon>\n                        <div>\n                            <ion-note no-padding text-wrap>{{ item.distance }}</ion-note>\n                        </div>\n                    </ion-col>\n                    <ion-label size=\"6\" no-padding (click)=\"mapCenter(item.latitude, item.longitude, i)\">\n                        <h2>{{ item.title }}</h2>\n                        <ion-label no-padding text-wrap>{{ item.address }}</ion-label>\n                    </ion-label>\n                    <ion-icon size=\"2\" name=\"locate\" (click)=\"openMap(item)\"></ion-icon>&nbsp;\n                    <ion-icon size=\"2\" name=\"call\" (click)=\"callNow(item.phone)\"></ion-icon>\n                </ion-item>\n            </ion-list>\n        </ion-card-content>\n    </ion-card>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/findus/findus.page.scss":
/*!*****************************************!*\
  !*** ./src/app/findus/findus.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map1 {\n  position: unset !important;\n}\n\nion-searchbar .searchbar-input-container {\n  border: none !important;\n  background: #fff !important;\n}\n\n.search-content {\n  z-index: 2;\n  background: #fff;\n  position: relative;\n  width: 100%;\n  border-radius: 6px !important;\n}\n\n.search-content .list {\n  border-radius: 6px !important;\n  margin: 10px;\n}\n\n.search-content ion-note {\n  font-size: 10px !important;\n}\n\n.search-content ion-content {\n  --ion-background-color: #fff;\n}\n\n.search-content ion-item {\n  --ion-background-color: #fafafa;\n  padding: 1px;\n}\n\n.search-content ion-label {\n  font-size: 15px !important;\n  color: #62666b !important;\n}\n\n.marker-box {\n  z-index: 1;\n  background: #fff;\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 30%;\n  overflow: scroll;\n  margin: 0px 0px 0px 0px;\n}\n\n.marker-box ion-note {\n  font-size: 8px !important;\n  color: #62666b !important;\n  text-align: center;\n  margin-left: 5px !important;\n}\n\n.marker-box ion-label {\n  font-size: 12px !important;\n  color: #62666b !important;\n}\n\n.marker-box .pin {\n  margin-left: 10px !important;\n}\n\n.marker-box ion-col {\n  padding: 2px !important;\n}\n\n.marker-box ion-icon {\n  padding: 2px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL2ZpbmR1cy9maW5kdXMucGFnZS5zY3NzIiwic3JjL2FwcC9maW5kdXMvZmluZHVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FDQ0o7O0FER0k7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0FDQVI7O0FESUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQ0RKOztBREVJO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0FDQVI7O0FERUk7RUFDSSwwQkFBQTtBQ0FSOztBREVJO0VBQ0ksNEJBQUE7QUNBUjs7QURFSTtFQUNJLCtCQUFBO0VBQ0EsWUFBQTtBQ0FSOztBREVJO0VBQ0ksMEJBQUE7RUFDQSx5QkFBQTtBQ0FSOztBREtBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBRElJO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNGUjs7QURLSTtFQUNJLDBCQUFBO0VBQ0EseUJBQUE7QUNIUjs7QURLSTtFQUNJLDRCQUFBO0FDSFI7O0FES0k7RUFDSSx1QkFBQTtBQ0hSOztBREtJO0VBQ0ksdUJBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL2ZpbmR1cy9maW5kdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcDEge1xuICAgIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgICAuc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmICAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLnNlYXJjaC1jb250ZW50IHtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICAgIC5saXN0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG4gICAgaW9uLW5vdGUge1xuICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICB9XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjNjI2NjZiICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5cbi5tYXJrZXItYm94IHtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogMzAlO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG4gICAgXG4gICAgaW9uLW5vdGV7XG4gICAgICAgIGZvbnQtc2l6ZTogOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjNjI2NjZiICFpbXBvcnRhbnQ7IFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICM2MjY2NmIgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnBpbntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWNvbHtcbiAgICAgICAgcGFkZGluZzogMnB4IWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWljb257XG4gICAgICAgIHBhZGRpbmc6IDJweCFpbXBvcnRhbnQ7XG4gICAgfVxufSIsIiNtYXAxIHtcbiAgcG9zaXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWFyY2hiYXIgLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoLWNvbnRlbnQge1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbn1cbi5zZWFyY2gtY29udGVudCAubGlzdCB7XG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEwcHg7XG59XG4uc2VhcmNoLWNvbnRlbnQgaW9uLW5vdGUge1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbi5zZWFyY2gtY29udGVudCBpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uc2VhcmNoLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBwYWRkaW5nOiAxcHg7XG59XG4uc2VhcmNoLWNvbnRlbnQgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNjI2NjZiICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZXItYm94IHtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAzMCU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xufVxuLm1hcmtlci1ib3ggaW9uLW5vdGUge1xuICBmb250LXNpemU6IDhweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzYyNjY2YiAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcbn1cbi5tYXJrZXItYm94IGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzYyNjY2YiAhaW1wb3J0YW50O1xufVxuLm1hcmtlci1ib3ggLnBpbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWFya2VyLWJveCBpb24tY29sIHtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG59XG4ubWFya2VyLWJveCBpb24taWNvbiB7XG4gIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/findus/findus.page.ts":
/*!***************************************!*\
  !*** ./src/app/findus/findus.page.ts ***!
  \***************************************/
/*! exports provided: FindusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindusPage", function() { return FindusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _service_launch_navigator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/launch-navigator.service */ "./src/app/service/launch-navigator.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "./node_modules/@ionic-native/location-accuracy/ngx/index.js");
/* harmony import */ var _service_back_stack_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/back-stack.service */ "./src/app/service/back-stack.service.ts");










var FindusPage = /** @class */ (function () {
    function FindusPage(launchNavigatorService, geolocation, callNumber, api, backStack, zone, locationAccuracy, loadingController) {
        this.launchNavigatorService = launchNavigatorService;
        this.geolocation = geolocation;
        this.callNumber = callNumber;
        this.api = api;
        this.backStack = backStack;
        this.zone = zone;
        this.locationAccuracy = locationAccuracy;
        this.loadingController = loadingController;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.image = 'assets/img/contact-us/marker-blue.png';
        this.image_new = 'assets/icon/marker-green.png';
        this.showSearchList = false;
        this.showAutoList = false;
        this.markers = [];
        this.isNotAllowLocation = false;
        this.styledMapType = new google.maps.StyledMapType([
            {
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#212121'
                    }
                ]
            },
            {
                elementType: 'labels.icon',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#757575'
                    }
                ]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#212121'
                    }
                ]
            },
            {
                featureType: 'administrative',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#757575'
                    }
                ]
            },
            {
                featureType: 'administrative.country',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#9e9e9e'
                    }
                ]
            },
            {
                featureType: 'administrative.land_parcel',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#bdbdbd'
                    }
                ]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#757575'
                    }
                ]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#181818'
                    }
                ]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#616161'
                    }
                ]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#1b1b1b'
                    }
                ]
            },
            {
                featureType: 'road',
                elementType: 'geometry.fill',
                stylers: [
                    {
                        color: '#2c2c2c'
                    }
                ]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#8a8a8a'
                    }
                ]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#373737'
                    }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#3c3c3c'
                    }
                ]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#4e4e4e'
                    }
                ]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#616161'
                    }
                ]
            },
            {
                featureType: 'transit',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#757575'
                    }
                ]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#000000'
                    }
                ]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#3d3d3d'
                    }
                ]
            }
        ], { name: 'Styled Map' });
        this.latitude = 0;
        this.longitude = 0;
        this.service = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        this.gmarkers = [];
        this.infowindow = [];
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
        this.back = this.backStack.getBackStack('findus');
    }
    FindusPage.prototype.ngOnInit = function () {
        // this.resetMap();
        this.autocomplete = {
            query: ''
        };
        this.getBranchList();
    };
    FindusPage.prototype.ionViewWillEnter = function () {
        this.askToTurnOnGPS();
        this.dismiss();
    };
    FindusPage.prototype.initMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.addMap(resp.coords.latitude, resp.coords.longitude);
            _this.addMarker('Current Location', resp.coords.latitude, resp.coords.longitude, '');
        }).catch(function (error) {
            _this.isNotAllowLocation = true;
            console.log('Error in get current position');
            console.log(error);
        });
    };
    FindusPage.prototype.showAuto = function () {
        this.showAutoList = true;
    };
    FindusPage.prototype.updateSearch = function () {
        if (this.autocomplete.query === '') {
            this.autocompleteItems = [];
            this.showAutoList = true;
            return;
        }
        var me = this;
        this.service.getPlacePredictions({
            input: this.autocomplete.query,
            // types: ['(regions)'],
            componentRestrictions: {
                country: 'au'
            }
        }, function (predictions, status) {
            me.autocompleteItems = [];
            me.zone.run(function () {
                if (predictions != null) {
                    predictions.forEach(function (prediction) {
                        me.autocompleteItems.push(prediction.description);
                    });
                }
            });
        });
    };
    // convert Address string to lat and long
    FindusPage.prototype.geoCode = function (address) {
        var _this = this;
        var context = this;
        try {
            this.geocoder.geocode({ address: address }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    context.latitude = results[0].geometry.location.lat();
                    context.longitude = results[0].geometry.location.lng();
                    context.autocomplete = {
                        query: results[0].formatted_address
                    };
                    console.log(context.latitude, context.longitude, results[0].formatted_address);
                    _this.addMap(context.latitude, context.longitude);
                    _this.addMarker('Current Location', context.latitude, context.longitude, results[0].formatted_address, _this.image);
                    _this.dismiss();
                    _this.getBranch();
                }
                else {
                    alert('Map location not found.  Please adjust address.');
                }
            });
        }
        catch (error) {
            alert('Map location not found.  Please adjust address.');
        }
    };
    FindusPage.prototype.askToTurnOnGPS = function () {
        var _this = this;
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
            // When GPS Turned ON call method to get Accurate location coordinates
            _this.resetMap();
        }, function (error) {
            alert('Error requesting location permissions ' + JSON.stringify(error));
        });
    };
    FindusPage.prototype.resetMap = function () {
        this.latitude = 0;
        this.longitude = 0;
        this.markerTitle = '';
        this.markerLatitude = 0;
        this.markerLongitude = 0;
        this.showSearchList = false;
        this.initMap();
    };
    FindusPage.prototype.getCurrentNear = function () {
        var _this = this;
        this.dismiss();
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            console.log(_this.latitude, _this.longitude);
            _this.addMarker('Current Location', _this.latitude, _this.longitude, '', _this.image);
            _this.autocomplete = {
                query: ''
            };
            var myLatLng = { lat: Number(_this.latitude), lng: Number(_this.longitude) };
            _this.map.setCenter(myLatLng);
            // this.mapCenter(this.latitude, this.longitude);
            _this.getBranch();
        });
    };
    FindusPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'loading...',
                            duration: 2000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    FindusPage.prototype.getBranchList = function () {
        var _this = this;
        this.api.branchlist().subscribe(function (res) {
            if (res.data) {
                console.log(res.data);
                for (var i = 0; i < res.data.length; i++) {
                    _this.addMarker(res.data[i].title, res.data[i].latitude, res.data[i].longitude, res.data[i].address, _this.image_new);
                }
            }
        });
    };
    FindusPage.prototype.getBranch = function () {
        var _this = this;
        this.showSearchList = false;
        this.presentLoading();
        this.filterBranch = {
            latitude: this.latitude,
            longitude: this.longitude,
        };
        for (var j = 0; j < this.infowindow.length; j++) { //I assume you have your infoboxes in some array
            this.infowindow[j].close();
        }
        var that = this;
        this.api.testBranchList(this.filterBranch).subscribe(function (res) {
            that.searchList = res.data;
            // that.addMap(res.data[0].latitude, res.data[0].longitude);
            _this.gmarkers = [];
            _this.infowindow = [];
            for (var i = 0; i < res.data.length; i++) {
                _this.addMarker(res.data[i].title, res.data[i].latitude, res.data[i].longitude, res.data[i].address, _this.image_new);
            }
            _this.loadingController.dismiss();
        });
        if (this.searchList) {
            this.showSearchList = true;
        }
    };
    FindusPage.prototype.addMap = function (latitude, longitude) {
        var myLatLng = { lat: Number(latitude), lng: Number(longitude) };
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 20,
            center: myLatLng,
            disableDefaultUI: true,
        });
        // Associate the styled map with the MapTypeId and set it to display.
        this.map.mapTypes.set('styled_map', this.styledMapType);
        this.map.setMapTypeId('styled_map');
    };
    FindusPage.prototype.addMarker = function (markerTitle, latitude, longitude, contentString, icon) {
        var _this = this;
        if (icon === void 0) { icon = this.image; }
        console.log(icon);
        console.log(markerTitle, latitude, longitude, contentString);
        var myLatLng = { lat: Number(latitude), lng: Number(longitude) };
        var marker = new google.maps.Marker({
            position: myLatLng,
            title: markerTitle,
            icon: icon,
            map: this.map,
            animation: google.maps.Animation.DROP,
        });
        var infowindow = new google.maps.InfoWindow({
            content: "<h5>" + markerTitle + "</h5><p>" + contentString + "</p>"
        });
        marker.addListener('click', function () {
            infowindow.open(_this.map, marker);
        });
        this.gmarkers.push(marker);
        this.infowindow.push(infowindow);
    };
    FindusPage.prototype.mapCenter = function (latitude, longitude, i) {
        var _this = this;
        console.log("Location Click");
        console.log(latitude, longitude);
        for (var j = 0; j < this.infowindow.length; j++) { //I assume you have your infoboxes in some array
            this.infowindow[j].close();
        }
        console.log(this.gmarkers[i]);
        console.log(this.gmarkers[i].getPosition());
        // setTimeout(() => {
        this.map.setCenter(this.gmarkers[i].getPosition());
        google.maps.event.trigger(this.gmarkers[i], 'click');
        // }, 200);
        this.gmarkers[i].addListener('click', function () {
            _this.infowindow[i].open(_this.map, _this.gmarkers[i]);
        });
    };
    FindusPage.prototype.addMarkers = function () {
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < this.searchList.length; i++) {
            var myLatLng = { lat: Number(this.searchList[i].latitude), lng: Number(this.searchList[i].longitude) };
            var marker = new google.maps.Marker({
                position: myLatLng,
                title: this.searchList[i].title,
                icon: this.image,
                map: this.map,
                animation: google.maps.Animation.DROP,
            });
            // marker.addListener('click', (e) => {
            //   this.openMap();
            // });
        }
    };
    FindusPage.prototype.dismiss = function () {
        this.searchList = [];
        this.autocompleteItems = [];
        this.showAutoList = false;
    };
    FindusPage.prototype.callNow = function (callNumber) {
        this.callNumber.callNumber(callNumber, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    FindusPage.prototype.openMap = function (item) {
        this.launchNavigatorService.open(item.latitude, item.longitude);
    };
    FindusPage.prototype.zoomMap = function (data) {
        this.autocomplete = {
            query: ''
        };
        this.addMap(data.latitude, data.longitude);
        this.addMarker(data.title, data.latitude, data.longitude, data.address);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FindusPage.prototype, "mapElement", void 0);
    FindusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-findus',
            template: __webpack_require__(/*! ./findus.page.html */ "./src/app/findus/findus.page.html"),
            styles: [__webpack_require__(/*! ./findus.page.scss */ "./src/app/findus/findus.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_3__["PageTrack"])('Find Us Screen'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_launch_navigator_service__WEBPACK_IMPORTED_MODULE_6__["LaunchNavigatorService"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _service_back_stack_service__WEBPACK_IMPORTED_MODULE_9__["BackStackService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__["LocationAccuracy"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]])
    ], FindusPage);
    return FindusPage;
}());



/***/ }),

/***/ "./src/app/service/launch-navigator.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/launch-navigator.service.ts ***!
  \*****************************************************/
/*! exports provided: LaunchNavigatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaunchNavigatorService", function() { return LaunchNavigatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");




var LaunchNavigatorService = /** @class */ (function () {
    function LaunchNavigatorService(launchNavigator, geolocation) {
        this.launchNavigator = launchNavigator;
        this.geolocation = geolocation;
    }
    LaunchNavigatorService.prototype.open = function (latitude, longitude) {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (data) {
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
            _this.launchNavigator.navigate([latitude, longitude], {
                app: _this.launchNavigator.APP.USER_SELECT,
                start: [data.coords.latitude, data.coords.longitude]
            });
        });
    };
    LaunchNavigatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_2__["LaunchNavigator"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]])
    ], LaunchNavigatorService);
    return LaunchNavigatorService;
}());



/***/ })

}]);
//# sourceMappingURL=findus-findus-module.js.map