import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { Events, NavController } from '@ionic/angular';
var ReceiptdetailPage = /** @class */ (function () {
    function ReceiptdetailPage(activatedRoute, router, storageService, navCtrl, events) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.storageService = storageService;
        this.navCtrl = navCtrl;
        this.events = events;
        this.activatedRoute.queryParams.subscribe(function (params) {
            console.log(JSON.parse(params.data));
            _this.data = JSON.parse(params.data);
        });
    }
    ReceiptdetailPage.prototype.ngOnInit = function () {
    };
    ReceiptdetailPage.prototype.delete = function (id) {
        var _this = this;
        this.storageService.removeReceipt(id).then(function (val) {
            console.log(val);
            _this.events.publish('receipt:deleted', Date.now());
            _this.navCtrl.navigateRoot('/viewreceipt');
        }).catch(function (err) {
            console.log(err);
        });
    };
    ReceiptdetailPage.prototype.edit = function (data) {
        console.log(data);
        this.router.navigate(['/editreceipt'], {
            queryParams: { data: JSON.stringify(data) },
        });
    };
    ReceiptdetailPage = tslib_1.__decorate([
        Component({
            selector: 'app-receiptdetail',
            templateUrl: './receiptdetail.page.html',
            styleUrls: ['./receiptdetail.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Router,
            StorageService,
            NavController,
            Events])
    ], ReceiptdetailPage);
    return ReceiptdetailPage;
}());
export { ReceiptdetailPage };
//# sourceMappingURL=receiptdetail.page.js.map