import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddfavouritesPage } from './addfavourites.page';
var routes = [
    {
        path: '',
        component: AddfavouritesPage
    }
];
var AddfavouritesPageModule = /** @class */ (function () {
    function AddfavouritesPageModule() {
    }
    AddfavouritesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AddfavouritesPage]
        })
    ], AddfavouritesPageModule);
    return AddfavouritesPageModule;
}());
export { AddfavouritesPageModule };
//# sourceMappingURL=addfavourites.module.js.map