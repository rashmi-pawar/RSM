import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ToastController } from '@ionic/angular';
import 'rxjs/add/operator/filter';
var TrackingPage = /** @class */ (function () {
    function TrackingPage(toastCtrl, geolocation) {
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.path = [];
        this.distance = '';
        this.path = [];
    }
    TrackingPage.prototype.ngOnInit = function () {
    };
    TrackingPage.prototype.presentToast = function (msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    TrackingPage.prototype.startLiveTracking = function () {
        var _this = this;
        this.path = [];
        console.log("yy");
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.presentToast('Start tracking');
            console.log(resp);
            _this.path.push({ lat: resp.coords.latitude, lng: resp.coords.longitude });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        var options = {
            frequency: 3000,
            enableHighAccuracy: true
        };
        this.watch = this.geolocation.watchPosition(options).subscribe(function (position) {
            console.log(position);
            _this.path.push({ lat: position.coords.latitude, lng: position.coords.longitude });
        });
    };
    TrackingPage.prototype.stopLiveTracking = function () {
        console.log(this.path);
        var total = 0;
        for (var i = 0; i < this.path.length - 1; i++) {
            var pos1 = new google.maps.LatLng(this.path[i].lat, this.path[i].lng);
            var pos2 = new google.maps.LatLng(this.path[i + 1].lat, this.path[i + 1].lng);
            total += google.maps.geometry.spherical.computeDistanceBetween(pos1, pos2);
            this.distance = (total / 1609.34).toFixed(1) + ' mi';
        }
        ;
        console.log(total, "distace", this.distance);
        this.watch.unsubscribe();
        navigator.geolocation.clearWatch(this.watch);
        // Geolocation.clearWatch(this.watch);
        this.presentToast('Stop tracking');
    };
    TrackingPage = tslib_1.__decorate([
        Component({
            selector: 'app-tracking',
            templateUrl: './tracking.page.html',
            styleUrls: ['./tracking.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ToastController, Geolocation])
    ], TrackingPage);
    return TrackingPage;
}());
export { TrackingPage };
//# sourceMappingURL=tracking.page.js.map