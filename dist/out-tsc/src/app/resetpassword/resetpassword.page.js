import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { ToastController, NavController } from '@ionic/angular';
var ResetpasswordPage = /** @class */ (function () {
    function ResetpasswordPage(activatedRoute, formBuilder, navCtrl, apiService, toastCtrl) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.toastCtrl = toastCtrl;
        this.user_data = JSON.parse(localStorage.getItem('userData'));
        this.onAddForm = this.formBuilder.group({
            'email': new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')
            ])),
            'newpassword': new FormControl('', Validators.compose([
                Validators.required
            ])),
            'retypepassword': new FormControl('', Validators.compose([
                Validators.required
            ])),
            'otp': new FormControl('', Validators.compose([
                Validators.required
            ]))
        });
    }
    ResetpasswordPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            console.log(params);
            _this.onAddForm.patchValue({ email: params.email });
        });
    };
    ResetpasswordPage.prototype.presentToast = function (msg) {
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
    ResetpasswordPage.prototype.reset = function () {
        var _this = this;
        if (this.onAddForm.value.newpassword == this.onAddForm.value.retypepassword) {
            var data = {
                email: this.onAddForm.value.email,
                password: this.onAddForm.value.newpassword,
                confirm_password: this.onAddForm.value.retypepassword,
                otp: this.onAddForm.value.otp,
            };
            this.apiService.resetpassword(data).subscribe(function (res) {
                console.log(res);
                if (res['status'] == true) {
                    _this.presentToast(res['message']);
                    _this.navCtrl.navigateRoot('/login');
                    _this.onAddForm.reset();
                }
                else {
                    _this.presentToast(res['message']);
                }
            }, function (err) {
                _this.presentToast(err.error.message);
                console.log(err.error.message);
            });
        }
        else {
            this.presentToast('Password and Confirm password doesnt match');
        }
    };
    ResetpasswordPage = tslib_1.__decorate([
        Component({
            selector: 'app-resetpassword',
            templateUrl: './resetpassword.page.html',
            styleUrls: ['./resetpassword.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            FormBuilder,
            NavController,
            ApiService,
            ToastController])
    ], ResetpasswordPage);
    return ResetpasswordPage;
}());
export { ResetpasswordPage };
//# sourceMappingURL=resetpassword.page.js.map