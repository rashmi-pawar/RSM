import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
var FindusPage = /** @class */ (function () {
    function FindusPage(geolocation) {
        this.geolocation = geolocation;
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
    }
    FindusPage.prototype.ngOnInit = function () {
        this.initMap();
    };
    FindusPage.prototype.initMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp, "res");
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, {
                zoom: 7,
                center: { lat: resp.coords.latitude, lng: resp.coords.longitude }
            });
            _this.directionsDisplay.setMap(_this.map);
        });
    };
    tslib_1.__decorate([
        ViewChild('map1'),
        tslib_1.__metadata("design:type", ElementRef)
    ], FindusPage.prototype, "mapElement", void 0);
    FindusPage = tslib_1.__decorate([
        Component({
            selector: 'app-findus',
            templateUrl: './findus.page.html',
            styleUrls: ['./findus.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Geolocation])
    ], FindusPage);
    return FindusPage;
}());
export { FindusPage };
//# sourceMappingURL=findus.page.js.map