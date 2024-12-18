import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { LocationPage } from '../location/location.page';
import { IonicModule } from '@ionic/angular';
import { ManualtripPage } from './manualtrip.page';
var routes = [
    {
        path: '',
        component: ManualtripPage
    }
];
var ManualtripPageModule = /** @class */ (function () {
    function ManualtripPageModule() {
    }
    ManualtripPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ManualtripPage]
        })
    ], ManualtripPageModule);
    return ManualtripPageModule;
}());
export { ManualtripPageModule };
//# sourceMappingURL=manualtrip.module.js.map