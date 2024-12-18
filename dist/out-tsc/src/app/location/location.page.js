import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../storage.service';
import { ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
var LocationPage = /** @class */ (function () {
    function LocationPage(geolocation, http, storageService, toastCtrl, navCtrl, router) {
        this.geolocation = geolocation;
        this.http = http;
        this.storageService = storageService;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.router = router;
        this.locationArray = [];
        this.watch = '';
        this.originPlaceid = '';
        this.destinationPlaceid = '';
        this.autocompleteItems = [];
        this.autocompleteItems1 = [];
        this.start = '';
        this.end = '';
        this.unit = '';
        this.distance = '';
        this.mode = 'DRIVING';
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.GoogleAutocomplete = '';
        this.startTracking();
        console.log(this.mode);
        this.isSubmit = false;
        this.isSave = false;
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: '', input1: '' };
        this.autocompleteItems = [];
        this.autocompleteItems1 = [];
    }
    LocationPage.prototype.ngOnInit = function () {
        this.initMap();
    };
    LocationPage.prototype.initMap = function () {
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
    LocationPage.prototype.updateSearchResults1 = function () {
        var _this = this;
        console.log("update ", this.autocomplete.input1);
        if (this.autocomplete.input1 == '') {
            console.log("DF");
            this.autocompleteItems1 = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input1 }, function (predictions, status) {
            _this.autocompleteItems1 = [];
            // this.zone.run(() => {
            predictions.forEach(function (prediction) {
                _this.autocompleteItems1.push(prediction);
                console.log(_this.autocompleteItems1);
            });
            // });
        });
    };
    LocationPage.prototype.selectSearchResult1 = function (item1) {
        this.autocompleteItems1 = [];
        console.log(item1);
        this.autocomplete = {
            input1: item1.description,
            input: this.autocomplete.input
        };
    };
    LocationPage.prototype.updateSearchResults = function () {
        var _this = this;
        console.log("update ", this.autocomplete.input);
        if (this.autocomplete.input == '') {
            console.log("DF");
            this.autocompleteItems = [];
            this.end = '';
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input }, function (predictions, status) {
            _this.autocompleteItems = [];
            // this.zone.run(() => {
            predictions.forEach(function (prediction) {
                _this.autocompleteItems.push(prediction);
                console.log(_this.autocompleteItems);
            });
            // });
        });
    };
    LocationPage.prototype.selectSearchResult = function (item) {
        this.autocompleteItems = [];
        console.log(item);
        this.autocomplete = {
            input: item.description,
            input1: this.autocomplete.input1
        };
        this.end = item.description;
        // this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
        //   if(status === 'OK' && results[0]){
        //     let position = {
        //         lat: results[0].geometry.location.lat,
        //         lng: results[0].geometry.location.lng
        //     };
        //     // let marker = new google.maps.Marker({
        //     //   position: results[0].geometry.location,
        //     //   map: this.map,
        //     // });
        //     // this.markers.push(marker);
        //     // this.map.setCenter(results[0].geometry.location);
        //   }
        // })
    };
    LocationPage.prototype.startTracking = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp);
            _this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + resp.coords.latitude + ',' + resp.coords.longitude + '&key=AIzaSyAYOzcfZjH3aS-CHF8LtMCQP6iMWYyabJc').subscribe(function (res) {
                console.log("data", res);
                if (res['status'] == 'OK') {
                    _this.autocomplete = {
                        input1: res['results'][0].formatted_address,
                        input: _this.autocomplete.input
                    };
                    // this.start = res['results'][0].formatted_address;
                }
            });
            // resp.coords.latitude
            // resp.coords.longitude
            // this.locationArray.push({lat:resp.coords.latitude, long: resp.coords.longitude})
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    LocationPage.prototype.stopTracking = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp);
            _this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + resp.coords.latitude + ',' + resp.coords.longitude + '&key=AIzaSyCt8clz3WQHwnTi3FGWIbrEhbqqKI9lcv4').subscribe(function (res) {
                console.log("data", res);
                if (res['status'] == 'OK') {
                    // this.end = res['results'][0].formatted_address;
                    _this.autocomplete = {
                        input: res['results'][0].formatted_address,
                        input1: _this.autocomplete.input1
                    };
                    _this.end = res['results'][0].formatted_address;
                }
                else {
                    console.log(res);
                }
                ;
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    ;
    LocationPage.prototype.calculateAndDisplayRoute = function () {
        var _this = this;
        this.isSubmit = true;
        this.directionsService.route({
            origin: this.autocomplete.input1,
            destination: this.autocomplete.input,
            travelMode: this.mode,
            unitSystem: google.maps.UnitSystem.IMPERIAL
        }, function (response, status) {
            console.log(response, status);
            if (status === 'OK') {
                console.log(_this.isSubmit);
                _this.distance = response.routes[0].legs[0].distance.text.split(" ")[0];
                _this.unit = response.routes[0].legs[0].distance.text.split(" ")[1];
                _this.initMap();
                _this.isSave = true;
                _this.directionsDisplay.setDirections(response);
                // this.end ='' ;
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    ;
    LocationPage.prototype.travelmode = function (mode) {
        console.log(mode);
        this.mode = mode;
    };
    ;
    LocationPage.prototype.save = function () {
        this.router.navigate(['/manualtrip'], {
            queryParams: { distance: this.distance, unit: this.unit },
        });
    };
    tslib_1.__decorate([
        ViewChild('map'),
        tslib_1.__metadata("design:type", ElementRef)
    ], LocationPage.prototype, "mapElement", void 0);
    LocationPage = tslib_1.__decorate([
        Component({
            selector: 'app-location',
            templateUrl: './location.page.html',
            styleUrls: ['./location.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Geolocation,
            HttpClient,
            StorageService,
            ToastController,
            NavController,
            Router])
    ], LocationPage);
    return LocationPage;
}());
export { LocationPage };
//# sourceMappingURL=location.page.js.map