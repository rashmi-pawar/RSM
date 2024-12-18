import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SubscriptionPage } from './subscription.page';
var routes = [
    {
        path: '',
        component: SubscriptionPage
    }
];
var SubscriptionPageModule = /** @class */ (function () {
    function SubscriptionPageModule() {
    }
    SubscriptionPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SubscriptionPage]
        })
    ], SubscriptionPageModule);
    return SubscriptionPageModule;
}());
export { SubscriptionPageModule };
//# sourceMappingURL=subscription.module.js.map