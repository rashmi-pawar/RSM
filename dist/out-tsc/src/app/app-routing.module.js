import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'location', loadChildren: './location/location.module#LocationPageModule' },
    { path: 'trips', loadChildren: './trips/trips.module#TripsPageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
    { path: 'addvehicle', loadChildren: './addvehicle/addvehicle.module#AddvehiclePageModule' },
    { path: 'manualtrip', loadChildren: './manualtrip/manualtrip.module#ManualtripPageModule' },
    { path: 'tracking', loadChildren: './tracking/tracking.module#TrackingPageModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
    { path: 'updateprofile', loadChildren: './updateprofile/updateprofile.module#UpdateprofilePageModule' },
    { path: 'updatepassword', loadChildren: './updatepassword/updatepassword.module#UpdatepasswordPageModule' },
    { path: 'forgotpassword', loadChildren: './forgotpassword/forgotpassword.module#ForgotpasswordPageModule' },
    { path: 'resetpassword', loadChildren: './resetpassword/resetpassword.module#ResetpasswordPageModule' },
    { path: 'addfavourites', loadChildren: './addfavourites/addfavourites.module#AddfavouritesPageModule' },
    { path: 'viewreceipt', loadChildren: './viewreceipt/viewreceipt.module#ViewreceiptPageModule' },
    { path: 'subscription', loadChildren: './subscription/subscription.module#SubscriptionPageModule' },
    { path: 'contactus', loadChildren: './contactus/contactus.module#ContactusPageModule' },
    { path: 'sendmessage', loadChildren: './sendmessage/sendmessage.module#SendmessagePageModule' },
    { path: 'findus', loadChildren: './findus/findus.module#FindusPageModule' },
    { path: 'receiptdetail', loadChildren: './receiptdetail/receiptdetail.module#ReceiptdetailPageModule' },
    { path: 'editreceipt', loadChildren: './editreceipt/editreceipt.module#EditreceiptPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map