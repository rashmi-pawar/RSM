import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, Events } from '@ionic/angular';
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, events) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.user_data = JSON.parse(localStorage.getItem('userData'));
    }
    SettingsPage.prototype.ngOnInit = function () {
    };
    SettingsPage.prototype.goTo = function (path) {
        this.navCtrl.navigateRoot('/' + path);
    };
    SettingsPage = tslib_1.__decorate([
        Component({
            selector: 'app-settings',
            templateUrl: './settings.page.html',
            styleUrls: ['./settings.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            Events])
    ], SettingsPage);
    return SettingsPage;
}());
export { SettingsPage };
//# sourceMappingURL=settings.page.js.map