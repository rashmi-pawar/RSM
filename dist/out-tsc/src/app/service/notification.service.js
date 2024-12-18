import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Push } from '@ionic-native/push/ngx';
var NotificationService = /** @class */ (function () {
    function NotificationService(push) {
        this.push = push;
        this.push.hasPermission()
            .then(function (res) {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
            }
            else {
                console.log('We do not have permission to send push notifications');
            }
        });
        var options = {
            android: {},
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            }
        };
        this.pushObject = this.push.init(options);
    }
    NotificationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Push])
    ], NotificationService);
    return NotificationService;
}());
export { NotificationService };
//# sourceMappingURL=notification.service.js.map