import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { StorageService } from '../storage.service';
import { HttpClient } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { ExportToCsv } from 'export-to-csv';
import { File } from '@ionic-native/file/ngx';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
var options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Trip CSV',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
};
var csvExporter = new ExportToCsv(options);
var TripsPage = /** @class */ (function () {
    function TripsPage(navCtrl, http, toastCtrl, storageService, sqlitePorter, file, sqlite, firebaseAnalytics) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storageService = storageService;
        this.sqlitePorter = sqlitePorter;
        this.file = file;
        this.sqlite = sqlite;
        this.firebaseAnalytics = firebaseAnalytics;
        this.items = [];
        this.isFav = false;
        this.items = [];
        this.firebaseAnalytics.setCurrentScreen('tripsScreen');
        // var square = document.querySelector('#favheart');
        // var hammer = new Hammer(square);
        // hammer.on('press', function(e) {
        //   console.log("You're pressing me!");
        //   console.log(e);
        // });
    }
    TripsPage.prototype.ngOnInit = function () {
        // var x = document.getElementById('loc');
        // x.style.display = "none";
        // this.items.push({ id: "1", origin: "gfh", destination: "fgdfg", mode: "ghfgh",distance: "8 km ", date: new Date() })
        console.log(this.items);
        this.viewtrips();
        this.getfav();
    };
    TripsPage.prototype.goTo = function (path) {
        this.navCtrl.navigateRoot('/' + path);
    };
    TripsPage.prototype.shoHide = function () {
        var x = document.getElementById('loc');
        if (x.style.display === "none") {
            x.style.display = "block";
        }
        else {
            x.style.display = "none";
        }
    };
    TripsPage.prototype.presentToast = function (msg) {
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
    TripsPage.prototype.viewtrips = function () {
        var _this = this;
        this.storageService.viewTrip().then(function (res) {
            console.log(res);
            _this.items = [];
            // console.log("response",res);
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.items.push({ id: res.rows.item(i).id, origin: res.rows.item(i).origin, destination: res.rows.item(i).destination, mode: res.rows.item(i).mode, distance: res.rows.item(i).distance, unit: res.rows.item(i).unit, vehicleType: res.rows.item(i).vehicleType, date: res.rows.item(i).date });
                    console.log(_this.items);
                }
            }
            else {
                _this.items = [];
            }
        })
            .catch(function (e) {
            _this.items = [];
            console.log(e);
        });
    };
    TripsPage.prototype.addToFavourites = function (pagename, url) {
        var _this = this;
        this.isFav = true;
        console.log(pagename, url);
        this.storageService.addFav(pagename, url, new Date()).then(function (val) {
            console.log(val);
            _this.presentToast("Added to favourites");
        }).catch(function (err) {
            console.log(err);
        });
    };
    TripsPage.prototype.getfav = function () {
        var _this = this;
        this.storageService.getRecords('favourites', 'trips').then(function (val) {
            console.log(val);
            if (val.rows.length > 0) {
                _this.isFav = true;
            }
            else {
                _this.isFav = false;
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    TripsPage.prototype.pressed = function (event) {
        console.log("bab", event);
    };
    TripsPage.prototype.removefavourites = function (pagename, url) {
        var _this = this;
        console.log(pagename, "df", url);
        this.storageService.removeFav(pagename, url).then(function (res) {
            console.log(res);
            _this.getfav();
            _this.presentToast("Removed from favourites");
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    TripsPage.prototype.export = function () {
        var _this = this;
        var csv = this.convertToCSV();
        this.file.createFile(this.file.externalRootDirectory + 'RSM/', 'trips.csv', true).then(function (success) {
            console.log("success", success);
            _this.file.writeFile(_this.file.externalRootDirectory + 'RSM/', 'trips.csv', csv).then(function (success) {
            }, function (error) {
                console.log("rr", error);
            });
        }, function (error) {
        });
    };
    TripsPage.prototype.convertToCSV = function () {
        var csv = '';
        var line = '';
        var SpT = this.items[0].length;
        var anzahlTeams = this.items.length;
        //Header
        for (var i = 0; i < anzahlTeams; i++) {
            if (line != '')
                line += ';';
            line += "Team " + (i + 1);
        }
        csv += line + '\r\n';
        //Teams
        for (var i = 0; i < SpT; i++) {
            line = '';
            for (var j = 0; j < anzahlTeams; j++) {
                if (line != '')
                    line += ';';
                line += this.items[j][i];
            }
            csv += line + '\r\n';
        }
        console.log(csv);
        return csv;
    };
    TripsPage = tslib_1.__decorate([
        Component({
            selector: 'app-trips',
            templateUrl: './trips.page.html',
            styleUrls: ['./trips.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            HttpClient,
            ToastController,
            StorageService,
            SQLitePorter,
            File,
            SQLite,
            FirebaseAnalytics])
    ], TripsPage);
    return TripsPage;
}());
export { TripsPage };
//# sourceMappingURL=trips.page.js.map