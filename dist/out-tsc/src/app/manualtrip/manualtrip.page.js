import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { StorageService } from '../storage.service';
import { ModalController, NavController, ToastController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
var ManualtripPage = /** @class */ (function () {
    function ManualtripPage(formBuilder, storageService, modalController, navCtrl, activatedRoute, toastCtrl, alertController) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.vehiclelist = [];
        this.onAddForm = this.formBuilder.group({
            'distance': new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('[0-9](\.[0-9]+)?')
            ])),
            'unit': new FormControl('', Validators.compose([
                Validators.required
            ])),
            'date': new FormControl('', Validators.compose([
                Validators.required
            ])),
            'vehicle_type': new FormControl('', Validators.compose([
                Validators.required
            ]))
        });
        this.activatedRoute.queryParams.subscribe(function (params) {
            console.log(params);
            _this.onAddForm.patchValue({ distance: params.distance, unit: params.unit });
        });
    }
    ManualtripPage.prototype.ngOnInit = function () {
        this.viewVehicletype();
    };
    ManualtripPage.prototype.presentToast = function (msg) {
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
    ManualtripPage.prototype.createTable = function () {
        this.storageService.createVehicleTable().then(function (res) {
            console.log(res);
        }).catch(function (error) {
            console.log(error);
        });
    };
    ManualtripPage.prototype.presentAlertPrompt = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Add vehicle type',
                            inputs: [
                                {
                                    name: 'NAME',
                                    type: 'text',
                                    id: 'name2-id',
                                    placeholder: 'Enter Name'
                                },
                                {
                                    name: 'TYPE',
                                    type: 'text',
                                    id: 'name2-id',
                                    placeholder: 'Enter Type'
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
                                        if (data.NAME != '' && data.TYPE != '') {
                                            _this.createTable();
                                            _this.storageService.addVehicle(data.NAME, data.TYPE, new Date()).then(function (res) {
                                                console.log(res);
                                                _this.presentToast('Add vehicle successfully');
                                                _this.viewVehicletype();
                                            }).catch(function (error) {
                                                console.log(error);
                                            });
                                        }
                                        else {
                                            _this.presentToast('Please add details');
                                        }
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
    ManualtripPage.prototype.viewVehicletype = function () {
        var _this = this;
        this.vehiclelist = [];
        this.storageService.viewVehicle().then(function (res) {
            console.log(res);
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.vehiclelist.push({ id: res.rows.item(i).id, name: res.rows.item(i).name, type: res.rows.item(i).type, date: res.rows.item(i).date });
                    console.log(_this.vehiclelist);
                }
            }
            else {
                _this.vehiclelist = [];
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    ManualtripPage.prototype.save = function () {
        var _this = this;
        console.log(this.onAddForm.value);
        this.storageService.createTable().then(function (val) {
            console.log(val);
            _this.storageService.addTrip('', '', '', _this.onAddForm.value.distance, _this.onAddForm.value.unit, _this.onAddForm.value.vehicle_type, _this.onAddForm.value.date).then(function (val) {
                _this.presentToast('Trip saved successfully.');
                _this.navCtrl.navigateRoot('/trips');
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    ;
    ManualtripPage.prototype.goTo = function (path) {
        this.navCtrl.navigateRoot('/' + path);
    };
    ManualtripPage = tslib_1.__decorate([
        Component({
            selector: 'app-manualtrip',
            templateUrl: './manualtrip.page.html',
            styleUrls: ['./manualtrip.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            StorageService,
            ModalController,
            NavController,
            ActivatedRoute,
            ToastController,
            AlertController])
    ], ManualtripPage);
    return ManualtripPage;
}());
export { ManualtripPage };
//# sourceMappingURL=manualtrip.page.js.map