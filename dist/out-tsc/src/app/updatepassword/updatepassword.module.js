import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UpdatepasswordPage } from './updatepassword.page';
var routes = [
    {
        path: '',
        component: UpdatepasswordPage
    }
];
var UpdatepasswordPageModule = /** @class */ (function () {
    function UpdatepasswordPageModule() {
    }
    UpdatepasswordPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UpdatepasswordPage]
        })
    ], UpdatepasswordPageModule);
    return UpdatepasswordPageModule;
}());
export { UpdatepasswordPageModule };
//# sourceMappingURL=updatepassword.module.js.map