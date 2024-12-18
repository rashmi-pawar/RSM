import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastController, NavController } from '@ionic/angular';
var SendmessagePage = /** @class */ (function () {
    function SendmessagePage(formBuilder, navCtrl, toastCtrl) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.onAddForm = this.formBuilder.group({
            'email': new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')
            ])),
            'name': new FormControl('', Validators.compose([
                Validators.required
            ])),
            'message': new FormControl('', Validators.compose([
                Validators.required
            ])),
            'mobile_no': new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('[0-9]*')
            ]))
        });
    }
    SendmessagePage.prototype.ngOnInit = function () {
    };
    SendmessagePage.prototype.presentToast = function (msg) {
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
    SendmessagePage.prototype.send = function () {
        var _this = this;
        Email.send({
            SecureToken: "5dac93c7-b860-4ea0-8bad-3bdbb52ca95d",
            To: 'RSMenquiries@rsm.com.au',
            From: this.onAddForm.value.email,
            Subject: '',
            Body: this.onAddForm.value.message
        }).then(function (message) {
            console.log(message);
            if (message == 'OK') {
                _this.onAddForm.reset();
                _this.presentToast("Email sent successfully!");
                _this.navCtrl.navigateRoot('/contactus');
            }
        })
            .catch(function (error) {
            _this.presentToast(error);
            console.log(error);
        });
    };
    SendmessagePage = tslib_1.__decorate([
        Component({
            selector: 'app-sendmessage',
            templateUrl: './sendmessage.page.html',
            styleUrls: ['./sendmessage.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            NavController,
            ToastController])
    ], SendmessagePage);
    return SendmessagePage;
}());
export { SendmessagePage };
//# sourceMappingURL=sendmessage.page.js.map