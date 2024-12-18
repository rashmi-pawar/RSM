import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ViewreceiptPage } from './viewreceipt.page';
var routes = [
    {
        path: '',
        component: ViewreceiptPage
    }
];
var ViewreceiptPageModule = /** @class */ (function () {
    function ViewreceiptPageModule() {
    }
    ViewreceiptPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ViewreceiptPage]
        })
    ], ViewreceiptPageModule);
    return ViewreceiptPageModule;
}());
export { ViewreceiptPageModule };
//# sourceMappingURL=viewreceipt.module.js.map