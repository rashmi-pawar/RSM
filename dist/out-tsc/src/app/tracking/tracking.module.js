import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TrackingPage } from './tracking.page';
var routes = [
    {
        path: '',
        component: TrackingPage
    }
];
var TrackingPageModule = /** @class */ (function () {
    function TrackingPageModule() {
    }
    TrackingPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TrackingPage]
        })
    ], TrackingPageModule);
    return TrackingPageModule;
}());
export { TrackingPageModule };
//# sourceMappingURL=tracking.module.js.map