import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SendmessagePage } from './sendmessage.page';
var routes = [
    {
        path: '',
        component: SendmessagePage
    }
];
var SendmessagePageModule = /** @class */ (function () {
    function SendmessagePageModule() {
    }
    SendmessagePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SendmessagePage]
        })
    ], SendmessagePageModule);
    return SendmessagePageModule;
}());
export { SendmessagePageModule };
//# sourceMappingURL=sendmessage.module.js.map