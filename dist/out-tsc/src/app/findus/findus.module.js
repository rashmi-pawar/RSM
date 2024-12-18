import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FindusPage } from './findus.page';
var routes = [
    {
        path: '',
        component: FindusPage
    }
];
var FindusPageModule = /** @class */ (function () {
    function FindusPageModule() {
    }
    FindusPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [FindusPage]
        })
    ], FindusPageModule);
    return FindusPageModule;
}());
export { FindusPageModule };
//# sourceMappingURL=findus.module.js.map