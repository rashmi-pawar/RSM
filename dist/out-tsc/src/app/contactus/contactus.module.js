import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ContactusPage } from './contactus.page';
var routes = [
    {
        path: '',
        component: ContactusPage
    }
];
var ContactusPageModule = /** @class */ (function () {
    function ContactusPageModule() {
    }
    ContactusPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ContactusPage]
        })
    ], ContactusPageModule);
    return ContactusPageModule;
}());
export { ContactusPageModule };
//# sourceMappingURL=contactus.module.js.map