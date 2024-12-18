import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
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
  { path: 'calculator', loadChildren: './calculator/calculator.module#CalculatorPageModule' },
  { path: 'expense', loadChildren: './expense/expense.module#ExpensePageModule' },
  { path: 'disclaimer', loadChildren: './disclaimer/disclaimer.module#DisclaimerPageModule' },
  { path: 'trackerdashboard', loadChildren: './trackerdashboard/trackerdashboard.module#TrackerdashboardPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'receiptmanager', loadChildren: './receiptmanager/receiptmanager.module#ReceiptmanagerPageModule' },
  { path: 'proffesionalfee', loadChildren: './proffesionalfee/proffesionalfee.module#ProffesionalfeePageModule' },
  { path: 'receiptlist', loadChildren: './receiptlist/receiptlist.module#ReceiptlistPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'logtrip', loadChildren: './trip/logtrip/logtrip.module#LogtripPageModule' },
  { path: 'triphistory', loadChildren: './trip/triphistory/triphistory.module#TriphistoryPageModule' },
  { path: 'triplogbook', loadChildren: './trip/triplogbook/triplogbook.module#TriplogbookPageModule' },
  { path: 'viewtrip', loadChildren: './trip/viewtrip/viewtrip.module#ViewtripPageModule' },
  { path: 'tripsetting', loadChildren: './trip/tripsetting/tripsetting.module#TripsettingPageModule' },
  { path: 'starttrip', loadChildren: './trip/starttrip/starttrip.module#StarttripPageModule' },
  { path: 'signupstep2', loadChildren: './signupstep2/signupstep2.module#Signupstep2PageModule' },
  { path: 'tools', loadChildren: './tools/tools.module#ToolsPageModule' },
  { path: 'tax-information', loadChildren: './tax-information/tax-information.module#TaxInformationPageModule' },
  { path: 'tax-information-detail', loadChildren: './tax-information-detail/tax-information-detail.module#TaxInformationDetailPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'investment-information', loadChildren: './investment-information/investment-information.module#InvestmentInformationPageModule' },
  { path: 'rss-feed', loadChildren: './rss-feed/rss-feed.module#RssFeedPageModule' },
  { path: 'rss-feed-detail', loadChildren: './rss-feed-detail/rss-feed-detail.module#RssFeedDetailPageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'event-detail', loadChildren: './event-detail/event-detail.module#EventDetailPageModule' },
  { path: 'notification', loadChildren: './notification/notification.module#NotificationPageModule' },
  { path: 'grad-week-agenda', loadChildren: './grad-week-agenda/grad-week-agenda.module#GradWeekAgendaPageModule' },
  { path: 'grad-week-faq', loadChildren: './grad-week-faq/grad-week-faq.module#GradWeekFaqPageModule' },
  { path: 'my-events', loadChildren: './my-events/my-events.module#MyEventsPageModule' },
  { path: 'current-events', loadChildren: './current-events/current-events.module#CurrentEventsPageModule' },
  { path: 'event-sign-in', loadChildren: './event-sign-in/event-sign-in.module#EventSignInPageModule' },
  { path: 'favourite', loadChildren: './favourite/favourite.module#FavouritePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
