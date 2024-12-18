import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastController, Events, LoadingController } from '@ionic/angular';
import { NotificationService } from '../service/notification.service';
var SubscriptionPage = /** @class */ (function () {
    function SubscriptionPage(toastCtrl, apiService, events, loadingController, pushNotificationService) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.apiService = apiService;
        this.events = events;
        this.loadingController = loadingController;
        this.pushNotificationService = pushNotificationService;
        this.list = [];
        this.subscribe_id = [];
        this.checkedlist = [];
        // this.subscriptionList();
        events.subscribe('sub:created', function (time) {
            _this.subscribe_id = [];
            _this.checkedlist = [];
            _this.subscriptionList();
            _this.usersubscriptionlist();
        });
    }
    SubscriptionPage.prototype.ngOnInit = function () {
        this.subscriptionList();
        this.usersubscriptionlist();
        this.isshow = false;
    };
    SubscriptionPage.prototype.presentLoading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'loading',
                            duration: 2000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SubscriptionPage.prototype.subscriptionList = function () {
        var _this = this;
        this.presentLoading();
        this.apiService.subscriptionlist(localStorage.getItem('token')).subscribe(function (res) {
            console.log(res);
            if (res['status'] == true) {
                _this.list = res['data'];
                // await loading.onDidDismiss();
            }
            else {
                _this.list = [];
            }
        }, function (err) {
            console.log(err.error.message);
        });
    };
    SubscriptionPage.prototype.usersubscriptionlist = function () {
        var _this = this;
        this.apiService.usersubscriptionlist(localStorage.getItem('token')).subscribe(function (res) {
            console.log(res);
            if (res['status'] == true) {
                if (res['data'].length) {
                    for (var i = 0; i < res['data'].length; i++) {
                        _this.checkedlist.push(res['data'][i].id);
                        _this.subscribe_id.push(res['data'][i].id);
                    }
                }
            }
            else {
            }
        }, function (err) {
            console.log(err.error.message);
        });
    };
    SubscriptionPage.prototype.firebaseTopicSubscription = function () {
        var _this = this;
        var unsubscribedTopicList = this.list.filter(function (x) { return _this.checkedlist.includes(x.id); });
        unsubscribedTopicList.forEach(function (item) {
            _this.pushNotificationService.pushObject.unsubscribe(item.title.replace(' ', ''));
            console.log(item.title.replace(' ', ''));
        });
        var subscribedTopicList = this.list.filter(function (x) { return _this.subscribe_id.includes(x.id); });
        subscribedTopicList.forEach(function (item) {
            _this.pushNotificationService.pushObject.subscribe(item.title.replace(' ', ''));
            console.log('s', item.title.replace(' ', ''));
        });
    };
    SubscriptionPage.prototype.checked = function (value, index) {
        var push = 0;
        if (this.subscribe_id.length > 0) {
            for (var i = 0; i < this.subscribe_id.length; i++) {
                if (parseInt(this.subscribe_id[i]) == parseInt(value)) {
                    this.subscribe_id.splice(i, 1);
                    // this.fcm.unsubscribeFromTopic(value);
                    push = 1;
                }
            }
            if (push == 0) {
                this.subscribe_id.push(value);
                // this.fcm.subscribeToTopic(value);
            }
        }
        else {
            this.subscribe_id.push(value);
        }
    };
    SubscriptionPage.prototype.presentToast = function (msg) {
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
    SubscriptionPage.prototype.subscribe = function () {
        var _this = this;
        if (this.subscribe_id.length > 0) {
            var data = {
                user_id: JSON.parse(localStorage.getItem('userData')).id,
                subscription_id: this.subscribe_id
            };
            this.apiService.subscribe(data, localStorage.getItem('token')).subscribe(function (res) {
                console.log(res);
                console.log(_this.list);
                console.log(_this.subscribe_id);
                if (res['status'] == true) {
                    _this.firebaseTopicSubscription();
                    // this.events.publish('sub:created', Date.now());
                    _this.presentToast(res['message']);
                }
                else {
                    // this.list = [];
                    _this.isshow = true;
                }
            }, function (err) {
                console.log(err.error.message);
            });
        }
        else {
            this.presentToast('First add subscription list');
        }
    };
    SubscriptionPage = tslib_1.__decorate([
        Component({
            selector: 'app-subscription',
            templateUrl: './subscription.page.html',
            styleUrls: ['./subscription.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ToastController,
            ApiService,
            Events,
            LoadingController,
            NotificationService])
    ], SubscriptionPage);
    return SubscriptionPage;
}());
export { SubscriptionPage };
//# sourceMappingURL=subscription.page.js.map