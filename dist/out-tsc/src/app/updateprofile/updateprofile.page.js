import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastController, NavController, Events } from '@ionic/angular';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
var UpdateprofilePage = /** @class */ (function () {
    function UpdateprofilePage(formBuilder, navCtrl, apiService, toastCtrl, events) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.user_data = JSON.parse(localStorage.getItem('userData'));
        events.subscribe('user:updated', function (time) {
            _this.user_data = JSON.parse(localStorage.getItem('userData'));
        });
        this.onAddForm = this.formBuilder.group({
            'email': new FormControl('', Validators.compose([
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
        this.onAddForm.patchValue({
            firstname: this.user_data.first_name,
            lastname: this.user_data.last_name,
            mobile_no: this.user_data.mobile_no,
            email: this.user_data.email
        });
    }
    UpdateprofilePage.prototype.presentToast = function (msg) {
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
    ;
    UpdateprofilePage.prototype.ngOnInit = function () {
    };
    UpdateprofilePage.prototype.update = function () {
        var _this = this;
        var data = {
            first_name: this.onAddForm.value.firstname,
            last_name: this.onAddForm.value.lastname,
            mobile_no: this.onAddForm.value.mobile_no,
            auth_token: localStorage.getItem('token')
        };
        this.apiService.updateprofile(data, this.user_data.id).subscribe(function (res) {
            console.log(res);
            if (res['status'] == true) {
                _this.onAddForm.reset();
                localStorage.setItem('userData', JSON.stringify(res['user']));
                _this.events.publish('user:updated', Date.now());
                _this.presentToast('User Updated Successfully');
                _this.navCtrl.navigateRoot('/settings');
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
    UpdateprofilePage = tslib_1.__decorate([
        Component({
            selector: 'app-updateprofile',
            templateUrl: './updateprofile.page.html',
            styleUrls: ['./updateprofile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            NavController,
            ApiService,
            ToastController,
            Events])
    ], UpdateprofilePage);
    return UpdateprofilePage;
}());
export { UpdateprofilePage };
//# sourceMappingURL=updateprofile.page.js.map