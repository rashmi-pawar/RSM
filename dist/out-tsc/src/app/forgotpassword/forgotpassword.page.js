import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { ToastController, NavController, AlertController } from '@ionic/angular';
var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(router, formBuilder, apiService, navCtrl, toastCtrl, alertController) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.onAddForm = this.formBuilder.group({
            'email': new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')
            ]))
        });
    }
    ForgotpasswordPage.prototype.ngOnInit = function () {
    };
    ForgotpasswordPage.prototype.presentAlertPrompt = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Enter OTP',
                            inputs: [
                                {
                                    name: 'OTP',
                                    type: 'text',
                                    id: 'name2-id',
                                    placeholder: 'Enter OTP'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (data) {
                                        console.log('Confirm Ok', data);
                                        var otpdata = {
                                            otp: data.OTP
                                        };
                                        _this.apiService.validateotp(otpdata).subscribe(function (res) {
                                            console.log(res);
                                            if (res['status'] == true) {
                                                _this.presentToast(res['message']);
                                                _this.navCtrl.navigateRoot('/resetpassword');
                                            }
                                            else {
                                                _this.presentToast(res['message']);
                                            }
                                        }, function (err) {
                                            _this.presentToast(err.error.message);
                                            console.log(err.error.message);
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgotpasswordPage.prototype.presentToast = function (msg) {
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
    ForgotpasswordPage.prototype.forgotPassword = function () {
        var _this = this;
        var data = {
            email: this.onAddForm.value.email
        };
        this.apiService.forgotpassword(data).subscribe(function (res) {
            console.log(res);
            if (res['status'] == true) {
                _this.presentToast(res['message']);
                // <<<<<<< HEAD
                // this.presentAlertPrompt();
                _this.router.navigate(['/resetpassword'], {
                    queryParams: { email: _this.onAddForm.value.email },
                });
            }
            else {
                _this.presentToast(res['message']);
            }
        }, function (err) {
            _this.presentToast(err.error.message);
            console.log(err.error.message);
        });
    };
    ForgotpasswordPage = tslib_1.__decorate([
        Component({
            selector: 'app-forgotpassword',
            templateUrl: './forgotpassword.page.html',
            styleUrls: ['./forgotpassword.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            FormBuilder,
            ApiService,
            NavController,
            ToastController,
            AlertController])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());
export { ForgotpasswordPage };
//# sourceMappingURL=forgotpassword.page.js.map