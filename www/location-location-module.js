(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-location-module"],{

/***/ "./src/app/location/location.module.ts":
/*!*********************************************!*\
  !*** ./src/app/location/location.module.ts ***!
  \*********************************************/
/*! exports provided: LocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location.page */ "./src/app/location/location.page.ts");







var routes = [
    {
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]
    }
];
var LocationPageModule = /** @class */ (function () {
    function LocationPageModule() {
    }
    LocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]],
        })
    ], LocationPageModule);
    return LocationPageModule;
}());



/***/ }),

/***/ "./src/app/location/location.page.html":
/*!*********************************************!*\
  !*** ./src/app/location/location.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"manualtrip\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Location </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-button color=\"primary\" mode=\"ios\" class=\"detect-loc\" expand=\"full\" (click)=\"startTracking()\">\n    <ion-icon name=\"search\"></ion-icon>Detect my location\n  </ion-button>\n\n  <ion-item lines=\"none\" no-padding class=\"search-point\">\n    <ion-searchbar no-padding [(ngModel)]=\"autocomplete.input1\" (ionInput)=\"updateSearchResults1()\"\n      placeholder=\"Choose Starting point\"></ion-searchbar>\n  </ion-item>\n\n  <ion-list [hidden]=\"autocompleteItems1.length == 0\">\n    <ion-item lines=\"none\" no-padding *ngFor=\"let item1 of autocompleteItems1\" tappable\n      (click)=\"selectSearchResult1(item1)\">\n      {{ item1.description }}\n    </ion-item>\n  </ion-list>\n\n  <ion-item lines=\"none\" no-padding class=\"search-point\">\n    <ion-searchbar no-padding [(ngModel)]=\"autocomplete.input\" (ionInput)=\"updateSearchResults()\"\n      placeholder=\"choose destination\"></ion-searchbar>\n  </ion-item>\n\n  <ion-list [hidden]=\"autocompleteItems.length == 0\">\n    <ion-item lines=\"none\" no-padding *ngFor=\"let item of autocompleteItems\" tappable\n      (click)=\"selectSearchResult(item)\">\n      {{ item.description }}\n    </ion-item>\n  </ion-list>\n\n  <ion-item lines=\"none\" no-padding>\n    <ion-label color=\"primary\"> Mode of Travel:</ion-label>\n    Driving\n\n  </ion-item>\n  <ion-item *ngIf=\"distance != '' \" lines=\"none\" no-padding>\n    <ion-text color=\"primary\">\n      Distance : {{distance}} {{unit}}\n    </ion-text>\n  </ion-item>\n\n\n\n  <ion-row>\n    <ion-col no-padding>\n      <ion-button expand=\"full\" color=\"primary\" (click)=\"calculateAndDisplayRoute()\" *ngIf=\"end != ''\" mode=\"ios\">View\n        Map</ion-button>\n    </ion-col>\n    <ion-col no-padding>\n      <ion-button expand=\"full\" color=\"primary\" (click)=\"save()\" *ngIf=\"end != '' && isSave\" mode=\"ios\">Save\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <div #map id=\"map\" [ngStyle]=\"{'display':isSubmit? 'block' : 'none' }\"></div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/location/location.page.scss":
/*!*********************************************!*\
  !*** ./src/app/location/location.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#floating-panel {\n  position: absolute;\n  top: 10px;\n  right: 5px;\n  z-index: 5;\n  background-color: #fff;\n  padding: 5px;\n  border: 1px solid #999;\n  text-align: center;\n  font-family: \"Roboto\", \"sans-serif\";\n  line-height: 30px;\n  padding-left: 10px;\n}\n\n#map {\n  height: 50%;\n  margin-top: 25px;\n}\n\nion-searchbar {\n  margin-bottom: 20px;\n}\n\n.detect-loc {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy8yMDIydTEzL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyIDQvQXJjaGl2ZS9zcmMvYXBwL2xvY2F0aW9uL2xvY2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9jYXRpb24vbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURBQTtFQUVFLG1CQUFBO0FDRUY7O0FEQUE7RUFFRSxtQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvbG9jYXRpb24vbG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zsb2F0aW5nLXBhbmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHotaW5kZXg6IDU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsJ3NhbnMtc2VyaWYnO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuI21hcCB7XG4gIGhlaWdodDogNTAlO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuaW9uLXNlYXJjaGJhclxue1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmRldGVjdC1sb2NcbntcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiIsIiNmbG9hdGluZy1wYW5lbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogNXB4O1xuICB6LWluZGV4OiA1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwic2Fucy1zZXJpZlwiO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4jbWFwIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZGV0ZWN0LWxvYyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/location/location.page.ts":
/*!*******************************************!*\
  !*** ./src/app/location/location.page.ts ***!
  \*******************************************/
/*! exports provided: LocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPage", function() { return LocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators/page-track.decorator */ "./src/app/decorators/page-track.decorator.ts");







var LocationPage = /** @class */ (function () {
    function LocationPage(geolocation, http, toastCtrl, navCtrl, router) {
        this.geolocation = geolocation;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.router = router;
        this.locationArray = [];
        this.watch = "";
        this.originPlaceid = "";
        this.destinationPlaceid = "";
        this.autocompleteItems = [];
        this.autocompleteItems1 = [];
        this.start = "";
        this.end = "";
        this.unit = "";
        this.distance = "";
        this.mode = "DRIVING";
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.GoogleAutocomplete = "";
        this.startTracking();
        this.isSubmit = false;
        this.isSave = false;
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: "", input1: "" };
        this.autocompleteItems = [];
        this.autocompleteItems1 = [];
    }
    LocationPage.prototype.ngOnInit = function () {
        this.initMap();
    };
    LocationPage.prototype.initMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, {
                zoom: 7,
                center: { lat: resp.coords.latitude, lng: resp.coords.longitude }
            });
            _this.directionsDisplay.setMap(_this.map);
        });
    };
    LocationPage.prototype.updateSearchResults1 = function () {
        var _this = this;
        if (this.autocomplete.input1 == "") {
            this.autocompleteItems1 = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input1 }, function (predictions, status) {
            _this.autocompleteItems1 = [];
            predictions.forEach(function (prediction) {
                _this.autocompleteItems1.push(prediction);
                //console.log(this.autocompleteItems1);
            });
        });
    };
    LocationPage.prototype.selectSearchResult1 = function (item1) {
        this.autocompleteItems1 = [];
        this.autocomplete = {
            input1: item1.description,
            input: this.autocomplete.input
        };
    };
    LocationPage.prototype.updateSearchResults = function () {
        var _this = this;
        if (this.autocomplete.input == "") {
            this.autocompleteItems = [];
            this.end = "";
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input }, function (predictions, status) {
            _this.autocompleteItems = [];
            predictions.forEach(function (prediction) {
                _this.autocompleteItems.push(prediction);
                console.log(_this.autocompleteItems);
            });
        });
    };
    LocationPage.prototype.selectSearchResult = function (item) {
        this.autocompleteItems = [];
        this.autocomplete = {
            input: item.description,
            input1: this.autocomplete.input1
        };
        this.end = item.description;
    };
    LocationPage.prototype.startTracking = function () {
        var _this = this;
        this.geolocation
            .getCurrentPosition()
            .then(function (resp) {
            _this.http
                .get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
                resp.coords.latitude +
                "," +
                resp.coords.longitude +
                "&key=AIzaSyAYOzcfZjH3aS-CHF8LtMCQP6iMWYyabJc")
                .subscribe(function (res) {
                if (res["status"] == "OK") {
                    _this.autocomplete = {
                        input1: res["results"][0].formatted_address,
                        input: _this.autocomplete.input
                    };
                }
            });
        })
            .catch(function (error) {
            console.log("Error getting location", error);
        });
    };
    LocationPage.prototype.stopTracking = function () {
        var _this = this;
        this.geolocation
            .getCurrentPosition()
            .then(function (resp) {
            _this.http
                .get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
                resp.coords.latitude +
                "," +
                resp.coords.longitude +
                "&key=AIzaSyCt8clz3WQHwnTi3FGWIbrEhbqqKI9lcv4")
                .subscribe(function (res) {
                if (res["status"] == "OK") {
                    _this.autocomplete = {
                        input: res["results"][0].formatted_address,
                        input1: _this.autocomplete.input1
                    };
                    _this.end = res["results"][0].formatted_address;
                }
                else {
                    console.log(res);
                }
            });
        })
            .catch(function (error) {
            console.log("Error getting location", error);
        });
    };
    LocationPage.prototype.calculateAndDisplayRoute = function () {
        var _this = this;
        this.isSubmit = true;
        this.directionsService.route({
            origin: this.autocomplete.input1,
            destination: this.autocomplete.input,
            travelMode: this.mode,
            unitSystem: google.maps.UnitSystem.IMPERIAL
        }, function (response, status) {
            if (status === "OK") {
                _this.distance = response.routes[0].legs[0].distance.text.split(" ")[0];
                _this.unit = response.routes[0].legs[0].distance.text.split(" ")[1];
                _this.initMap();
                _this.isSave = true;
                _this.directionsDisplay.setDirections(response);
            }
            else {
                window.alert("Directions request failed due to " + status);
            }
        });
    };
    LocationPage.prototype.travelmode = function (mode) {
        this.mode = mode;
    };
    LocationPage.prototype.save = function () {
        this.router.navigate(["/manualtrip"], {
            queryParams: { distance: this.distance, unit: this.unit }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LocationPage.prototype, "mapElement", void 0);
    LocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-location",
            template: __webpack_require__(/*! ./location.page.html */ "./src/app/location/location.page.html"),
            styles: [__webpack_require__(/*! ./location.page.scss */ "./src/app/location/location.page.scss")]
        }),
        Object(_decorators_page_track_decorator__WEBPACK_IMPORTED_MODULE_6__["PageTrack"])("Location Screen"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LocationPage);
    return LocationPage;
}());



/***/ })

}]);
//# sourceMappingURL=location-location-module.js.map