import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UpdateprofilePage } from './updateprofile.page';
var routes = [
    {
        path: '',
        component: UpdateprofilePage
    }
];
var UpdateprofilePageModule = /** @class */ (function () {
    function UpdateprofilePageModule() {
    }
    UpdateprofilePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UpdateprofilePage]
        })
    ], UpdateprofilePageModule);
    return UpdateprofilePageModule;
}());
export { UpdateprofilePageModule };
//# sourceMappingURL=updateprofile.module.js.map