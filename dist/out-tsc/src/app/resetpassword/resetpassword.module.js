import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ResetpasswordPage } from './resetpassword.page';
var routes = [
    {
        path: '',
        component: ResetpasswordPage
    }
];
var ResetpasswordPageModule = /** @class */ (function () {
    function ResetpasswordPageModule() {
    }
    ResetpasswordPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ResetpasswordPage]
        })
    ], ResetpasswordPageModule);
    return ResetpasswordPageModule;
}());
export { ResetpasswordPageModule };
//# sourceMappingURL=resetpassword.module.js.map