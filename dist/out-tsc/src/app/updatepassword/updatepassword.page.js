import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { ToastController, NavController } from '@ionic/angular';
var UpdatepasswordPage = /** @class */ (function () {
    function UpdatepasswordPage(formBuilder, navCtrl, apiService, toastCtrl) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.toastCtrl = toastCtrl;
        this.user_data = JSON.parse(localStorage.getItem('userData'));
        this.onAddForm = this.formBuilder.group({
            'oldpassword': new FormControl('', Validators.compose([
                Validators.required
            ])),
            'newpassword': new FormControl('', Validators.compose([
                Validators.required
            ])),
            'retypepassword': new FormControl('', Validators.compose([
                Validators.required
            ]))
        });
    }
    UpdatepasswordPage.prototype.ngOnInit = function () {
    };
    UpdatepasswordPage.prototype.presentToast = function (msg) {
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
    UpdatepasswordPage.prototype.updatePassword = function () {
        var _this = this;
        var data = {
            old_password: this.onAddForm.value.oldpassword,
            password: this.onAddForm.value.newpassword,
            confirm_password: this.onAddForm.value.retypepassword,
            auth_token: localStorage.getItem('token')
        };
        this.apiService.updatepassword(data, this.user_data.id).subscribe(function (res) {
            console.log(res);
            if (res['status'] == true) {
                _this.presentToast("Password updated successfully");
                _this.onAddForm.reset();
            }
            else {
                _this.presentToast(res['message']);
            }
        }, function (err) {
            _this.presentToast(err.error.error);
            console.log(err.error.error);
        });
    };
    UpdatepasswordPage = tslib_1.__decorate([
        Component({
            selector: 'app-updatepassword',
            templateUrl: './updatepassword.page.html',
            styleUrls: ['./updatepassword.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            NavController,
            ApiService,
            ToastController])
    ], UpdatepasswordPage);
    return UpdatepasswordPage;
}());
export { UpdatepasswordPage };
//# sourceMappingURL=updatepassword.page.js.map