import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { ToastController, NavController } from '@ionic/angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
var SignupPage = /** @class */ (function () {
    function SignupPage(formBuilder, navCtrl, apiService, toastCtrl, uniqueDeviceID) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.toastCtrl = toastCtrl;
        this.uniqueDeviceID = uniqueDeviceID;
        this.device_token = '';
        this.onAddForm = this.formBuilder.group({
            'email': new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')
            ])),
            'password': new FormControl('', Validators.compose([
                Validators.required
            ])),
            'firstname': new FormControl('', Validators.compose([
                Validators.required
            ])),
            'lastname': new FormControl('', Validators.compose([
                Validators.required
            ])),
            'mobile_no': new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('[0-9]*')
            ]))
        });
        this.uniqueDeviceID.get()
            .then(function (uuid) {
            console.log(uuid);
            _this.device_token = uuid;
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage.prototype.presentToast = function (msg) {
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
    SignupPage.prototype.signUp = function () {
        var _this = this;
        var data = {
            first_name: this.onAddForm.value.firstname,
            last_name: this.onAddForm.value.lastname,
            email: this.onAddForm.value.email,
            password: this.onAddForm.value.password,
            deviceId: this.device_token,
            mobile_no: this.onAddForm.value.mobile_no
        };
        this.apiService.signup(data).subscribe(function (res) {
            console.log(res);
            if (res['status'] == true) {
                _this.onAddForm.reset();
                _this.presentToast('Signup Successfully');
                _this.navCtrl.navigateRoot('/login');
            }
            else {
                _this.presentToast(res['message']);
            }
        }, function (err) {
            console.log(err);
            _this.presentToast(err.error.message);
            console.log(err.error.message);
        });
    };
    SignupPage = tslib_1.__decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.page.html',
            styleUrls: ['./signup.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            NavController,
            ApiService,
            ToastController,
            UniqueDeviceID])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.page.js.map