import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddvehiclePage } from './addvehicle.page';
var routes = [
    {
        path: '',
        component: AddvehiclePage
    }
];
var AddvehiclePageModule = /** @class */ (function () {
    function AddvehiclePageModule() {
    }
    AddvehiclePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AddvehiclePage]
        })
    ], AddvehiclePageModule);
    return AddvehiclePageModule;
}());
export { AddvehiclePageModule };
//# sourceMappingURL=addvehicle.module.js.map