import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { NavController } from '@ionic/angular';
var AddfavouritesPage = /** @class */ (function () {
    function AddfavouritesPage(navCtrl, storageService) {
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.list = [];
        this.viewfav();
    }
    AddfavouritesPage.prototype.ngOnInit = function () {
    };
    AddfavouritesPage.prototype.viewfav = function () {
        var _this = this;
        this.storageService.favList().then(function (res) {
            console.log(res);
            _this.list = [];
            // console.log("response",res);
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.list.push({ id: res.rows.item(i).id, name: res.rows.item(i).name, url: res.rows.item(i).url, date: res.rows.item(i).date });
                    console.log(_this.list);
                }
            }
            else {
                _this.list = [];
            }
        })
            .catch(function (e) {
            _this.list = [];
            console.log(e);
        });
    };
    AddfavouritesPage.prototype.goTo = function (url) {
        this.navCtrl.navigateRoot('/' + url);
    };
    AddfavouritesPage.prototype.pressed = function (event) {
        console.log("presses");
        console.log(event);
    };
    AddfavouritesPage = tslib_1.__decorate([
        Component({
            selector: 'app-addfavourites',
            templateUrl: './addfavourites.page.html',
            styleUrls: ['./addfavourites.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            StorageService])
    ], AddfavouritesPage);
    return AddfavouritesPage;
}());
export { AddfavouritesPage };
//# sourceMappingURL=addfavourites.page.js.map