import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { Camera } from "@ionic-native/camera/ngx";
import { File } from "@ionic-native/file/ngx";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { FilePath } from "@ionic-native/file-path/ngx";
import { SQLite } from "@ionic-native/sqlite/ngx";
import { WebView } from "@ionic-native/ionic-webview/ngx";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { HttpClientModule } from "@angular/common/http";
import { Facebook } from "@ionic-native/facebook/ngx";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { SqliteDbCopy } from "@ionic-native/sqlite-db-copy/ngx";
import { FirebaseAnalytics } from "@ionic-native/firebase-analytics/ngx";
import { Base64 } from "@ionic-native/base64/ngx";
import { SQLitePorter } from "@ionic-native/sqlite-porter/ngx";
import { Push } from "@ionic-native/push/ngx";
import { ExpensePage } from "./expense/expense.page";
import { DisclaimerPage } from "./disclaimer/disclaimer.page";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { PopoverComponent } from "./popover/popover.component";
import { GoogleAnalytics } from "@ionic-native/google-analytics/ngx";
import { AnalyticsService } from "./service/analytics.service";
import { Injector } from "@angular/core";
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { FirebaseCrashlytics } from '@ionic-native/firebase-crashlytics/ngx';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { DisclaimerPopupComponent } from './components/disclaimer-popup/disclaimer-popup.component';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { UniqueDeviceID } from "@ionic-native/unique-device-id/ngx";

import {
  SignInWithApple
} from '@ionic-native/sign-in-with-apple/ngx';
import { Device } from '@ionic-native/device/ngx';
import {ReactiveFormsModule} from '@angular/forms';
import { LaunchReview } from '@ionic-native/launch-review/ngx';
import {ExpandableComponent} from './components/expandable/expandable.component';
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";

@NgModule({
  declarations: [AppComponent, ExpensePage, DisclaimerPage, PopoverComponent, DisclaimerPopupComponent],
  entryComponents: [ExpensePage, DisclaimerPage, PopoverComponent, DisclaimerPopupComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  exports: [ExpensePage, DisclaimerPage, PopoverComponent, DisclaimerPopupComponent],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    Device,
    FileTransfer,
    Camera,
    FilePath,
    SQLite,
    WebView,
    Geolocation,
    GooglePlus,
    Facebook,
    UniqueDeviceID,
    SocialSharing,
    SqliteDbCopy,
    Base64,
    SQLitePorter,
    Push,
    FirebaseAnalytics,
    AnalyticsService,
    InAppBrowser,
    GoogleAnalytics,
    CallNumber,
    AppAvailability,
    AndroidPermissions,
    LocationAccuracy,
    FirebaseCrashlytics,
    LaunchNavigator,
    ScreenOrientation,
    SignInWithApple,
    UniqueDeviceID,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LaunchReview,
    BarcodeScanner,
    FirebaseDynamicLinks
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  public static injector: Injector;

  constructor(injector: Injector) {
    AppModule.injector = injector;
  }
}
