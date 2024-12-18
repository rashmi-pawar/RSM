import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReceiptdetailPage } from './receiptdetail.page';
var routes = [
    {
        path: '',
        component: ReceiptdetailPage
    }
];
var ReceiptdetailPageModule = /** @class */ (function () {
    function ReceiptdetailPageModule() {
    }
    ReceiptdetailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ReceiptdetailPage]
        })
    ], ReceiptdetailPageModule);
    return ReceiptdetailPageModule;
}());
export { ReceiptdetailPageModule };
//# sourceMappingURL=receiptdetail.module.js.map