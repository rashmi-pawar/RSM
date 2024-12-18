import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { HttpClientModule } from '@angular/common/http';
import { Facebook } from '@ionic-native/facebook/ngx';
// import { FCM } from '@ionic-native/fcm/ngx'; 
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';
// import { LongPressModule } from 'ionic-long-press';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { Push } from '@ionic-native/push/ngx';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent],
            entryComponents: [],
            imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
            providers: [
                StatusBar,
                SplashScreen,
                // FCM,
                UniqueDeviceID,
                File,
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
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map