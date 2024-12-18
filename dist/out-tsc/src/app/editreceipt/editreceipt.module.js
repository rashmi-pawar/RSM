import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EditreceiptPage } from './editreceipt.page';
var routes = [
    {
        path: '',
        component: EditreceiptPage
    }
];
var EditreceiptPageModule = /** @class */ (function () {
    function EditreceiptPageModule() {
    }
    EditreceiptPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EditreceiptPage]
        })
    ], EditreceiptPageModule);
    return EditreceiptPageModule;
}());
export { EditreceiptPageModule };
//# sourceMappingURL=editreceipt.module.js.map