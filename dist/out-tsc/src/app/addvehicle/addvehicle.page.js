import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { StorageService } from '../storage.service';
import { ToastController } from '@ionic/angular';
var AddvehiclePage = /** @class */ (function () {
    function AddvehiclePage(formBuilder, storageService, toastCtrl) {
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.toastCtrl = toastCtrl;
    }
    AddvehiclePage.prototype.ngOnInit = function () {
        this.onAddForm = this.formBuilder.group({
            'vehiclename': new FormControl('', Validators.compose([
                Validators.required,
            ])),
            'vehicletype': new FormControl('', Validators.compose([
                Validators.required
            ]))
        });
        this.createTable();
    };
    AddvehiclePage.prototype.presentToast = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Add vehicle successfully.',
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
    AddvehiclePage.prototype.addVehicle = function () {
        var _this = this;
        this.storageService.addVehicle(this.onAddForm.value.vehiclename, this.onAddForm.value.vehicletype, new Date()).then(function (res) {
            console.log(res);
            _this.presentToast();
            _this.onAddForm.reset();
        }).catch(function (error) {
            console.log(error);
        });
    };
    ;
    AddvehiclePage.prototype.createTable = function () {
        this.storageService.createVehicleTable().then(function (res) {
            console.log(res);
        }).catch(function (error) {
            console.log(error);
        });
    };
    AddvehiclePage = tslib_1.__decorate([
        Component({
            selector: 'app-addvehicle',
            templateUrl: './addvehicle.page.html',
            styleUrls: ['./addvehicle.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            StorageService,
            ToastController])
    ], AddvehiclePage);
    return AddvehiclePage;
}());
export { AddvehiclePage };
//# sourceMappingURL=addvehicle.page.js.map