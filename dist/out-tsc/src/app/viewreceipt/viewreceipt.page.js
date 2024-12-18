import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { ToastController, Events } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Router } from '@angular/router';
var ViewreceiptPage = /** @class */ (function () {
    function ViewreceiptPage(file, toastCtrl, storageService, webview, router, events) {
        var _this = this;
        this.file = file;
        this.toastCtrl = toastCtrl;
        this.storageService = storageService;
        this.webview = webview;
        this.router = router;
        this.events = events;
        this.lists = [];
        this.srcPath = '';
        this.filter = 'category';
        this.year = '2018';
        this.newlist = [];
        this.viewreceipt();
        this.isFav = false;
        this.srcPath = this.file.externalRootDirectory + 'RSM/';
        this.events.subscribe('receipt:deleted', function (time) {
            _this.newlist = [];
            _this.lists = [];
            _this.viewreceipt();
        });
    }
    ViewreceiptPage.prototype.ngOnInit = function () {
        this.getfav();
    };
    ViewreceiptPage.prototype.selectYear = function (yearvalue) {
        var _this = this;
        this.newlist = [];
        // this.lists = JSON.parse(localStorage.getItem('reciept'));
        console.log(this.lists);
        this.lists.forEach(function (element) {
            console.log(element.date);
            var date = new Date(element.date);
            var newyear = date.getFullYear();
            if (newyear == yearvalue) {
                _this.newlist.push(element);
            }
            // console.log(year);
        });
    };
    ViewreceiptPage.prototype.segmentChanged = function (ev) {
        console.log('Segment changed', ev);
    };
    ViewreceiptPage.prototype.viewreceipt = function () {
        var _this = this;
        // this.lists = JSON.parse(localStorage.getItem('reciept'));
        // console.log(this.lists);
        // this.lists.forEach(element => {
        //   console.log(element.date)
        //   var date = new Date(element.date);
        //   var newyear = date.getFullYear();
        //   if(newyear == parseInt(this.year)){
        //     this.newlist.push(element);
        //   }
        //   // console.log(year);
        // });
        this.storageService.viewOcr().then(function (res) {
            console.log(res);
            _this.lists = [];
            // console.log("response",res);
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    var date = new Date(res.rows.item(i).date);
                    var newyear = date.getFullYear();
                    var viewImage = _this.webview.convertFileSrc(_this.file.dataDirectory + res.rows.item(i).image);
                    _this.lists.push({ id: res.rows.item(i).id, image: viewImage, description: res.rows.item(i).description, claim_status: res.rows.item(i).claim_status, expense_type: res.rows.item(i).expense_type, amount: res.rows.item(i).amount, date: res.rows.item(i).date });
                    if (newyear == parseInt(_this.year)) {
                        _this.newlist.push({ id: res.rows.item(i).id, image: viewImage, description: res.rows.item(i).description, claim_status: res.rows.item(i).claim_status, expense_type: res.rows.item(i).expense_type, amount: res.rows.item(i).amount, date: res.rows.item(i).date });
                    }
                }
            }
            else {
                _this.lists = [];
            }
        })
            .catch(function (e) {
            _this.lists = [];
            console.log(e);
        });
    };
    ViewreceiptPage.prototype.presentToast = function (msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewreceiptPage.prototype.addToFavourites = function (pagename, url) {
        var _this = this;
        this.isFav = true;
        console.log(pagename, url);
        this.storageService.addFav(pagename, url, new Date()).then(function (val) {
            console.log(val);
            _this.presentToast("Added to favourites");
        }).catch(function (err) {
            console.log(err);
        });
    };
    ViewreceiptPage.prototype.getfav = function () {
        var _this = this;
        this.storageService.getRecords('favourites', 'viewreceipt').then(function (val) {
            console.log(val);
            if (val.rows.length > 1) {
                _this.isFav = true;
            }
            else {
                _this.isFav = false;
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    ViewreceiptPage.prototype.removefavourites = function (pagename, url) {
        var _this = this;
        console.log(pagename, "df", url);
        this.storageService.removeFav(pagename, url).then(function (res) {
            console.log(res);
            _this.getfav();
            _this.presentToast("Removed from favourites");
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    ViewreceiptPage.prototype.details = function (data) {
        console.log(data);
        this.router.navigate(['/receiptdetail'], {
            queryParams: { data: JSON.stringify(data) },
        });
    };
    ViewreceiptPage = tslib_1.__decorate([
        Component({
            selector: 'app-viewreceipt',
            templateUrl: './viewreceipt.page.html',
            styleUrls: ['./viewreceipt.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [File,
            ToastController,
            StorageService,
            WebView,
            Router,
            Events])
    ], ViewreceiptPage);
    return ViewreceiptPage;
}());
export { ViewreceiptPage };
//# sourceMappingURL=viewreceipt.page.js.map