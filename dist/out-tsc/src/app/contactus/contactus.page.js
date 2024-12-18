import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { ToastController, NavController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
var ContactusPage = /** @class */ (function () {
    function ContactusPage(storageService, toastCtrl, navCtrl, socialSharing) {
        this.storageService = storageService;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.socialSharing = socialSharing;
    }
    ContactusPage.prototype.ngOnInit = function () {
        this.getfav();
    };
    ContactusPage.prototype.presentToast = function (msg) {
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
    ContactusPage.prototype.addToFavourites = function (pagename, url) {
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
    ContactusPage.prototype.getfav = function () {
        var _this = this;
        this.storageService.getRecords('favourites', 'contactus').then(function (val) {
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
    ContactusPage.prototype.removefavourites = function (pagename, url) {
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
    ContactusPage.prototype.goTo = function (url) {
        this.navCtrl.navigateRoot('/' + url);
    };
    ;
    ContactusPage.prototype.share = function (link) {
        window.open(link, '_system');
    };
    ContactusPage = tslib_1.__decorate([
        Component({
            selector: 'app-contactus',
            templateUrl: './contactus.page.html',
            styleUrls: ['./contactus.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [StorageService,
            ToastController,
            NavController,
            SocialSharing])
    ], ContactusPage);
    return ContactusPage;
}());
export { ContactusPage };
//# sourceMappingURL=contactus.page.js.map