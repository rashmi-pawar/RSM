import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ActionSheetController, ToastController, NavController, LoadingController } from '@ionic/angular';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { StorageService } from '../storage.service';
var EditreceiptPage = /** @class */ (function () {
    function EditreceiptPage(formBuilder, activatedRoute, camera, actionSheetController, transfer, file, filePath, sqlite, webview, toastCtrl, navCtrl, storageService, loadingController) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.sqlite = sqlite;
        this.webview = webview;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.loadingController = loadingController;
        this.data = '';
        this.viewImage = '';
        this.selectedImage = '';
        this.isLoading = false;
        this.removeImage = '';
        this.correctPath = '';
        this.currentName = '';
        this.activatedRoute.queryParams.subscribe(function (params) {
            console.log(JSON.parse(params.data));
            _this.data = JSON.parse(params.data);
            _this.viewImage = _this.data.image;
            _this.removeImage = _this.data.image;
            console.log(_this.data, _this.removeImage);
        });
    }
    EditreceiptPage.prototype.ngOnInit = function () {
        this.onAddForm = this.formBuilder.group({
            'amount': new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('[0-9]*')
            ])),
            'description': new FormControl('', Validators.compose([
                Validators.required
            ])),
            'date': new FormControl('', Validators.compose([
                Validators.required
            ])),
            'claimable': new FormControl(''),
            'expense_type': new FormControl('', Validators.compose([
                Validators.required
            ])),
        });
        this.onAddForm.patchValue({
            amount: this.data.amount,
            description: this.data.description,
            date: this.data.date,
            claimable: this.data.claim_status,
            expense_type: this.data.expense_type
        });
    };
    EditreceiptPage.prototype.presentLoading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this.loadingController.create({
                            // duration: 5000,
                            }).then(function (a) {
                                a.present().then(function () {
                                    console.log('presented');
                                    if (!_this.isLoading) {
                                        a.dismiss().then(function () { return console.log('abort presenting'); });
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EditreceiptPage.prototype.dismissLoading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = false;
                        return [4 /*yield*/, this.loadingController.dismiss().then(function () { return console.log('dismissed'); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EditreceiptPage.prototype.presentToast = function (msg) {
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
    EditreceiptPage.prototype.presentActionSheet = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.selectedImage = '';
                        this.viewImage = '';
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: 'Select Picture',
                                buttons: [{
                                        text: 'Use Library',
                                        role: 'destructive',
                                        // icon: 'trash',
                                        handler: function () {
                                            _this.getPicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                        }
                                    }, {
                                        text: 'Capture Image',
                                        // icon: 'share',
                                        handler: function () {
                                            _this.getPicture(_this.camera.PictureSourceType.CAMERA);
                                        }
                                    }, {
                                        text: 'Cancel',
                                        // icon: 'close',
                                        role: 'cancel',
                                        handler: function () {
                                            console.log('Cancel clicked');
                                        }
                                    }]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditreceiptPage.prototype.getPicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    console.log(filePath);
                    _this.correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    _this.currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(_this.correctPath, _this.currentName, _this.createFileName());
                });
            }
            else {
                _this.currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                _this.correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(_this.correctPath, _this.currentName, _this.createFileName());
            }
        }, function (err) {
            console.log('Error while selecting image.');
        });
    };
    // Create a new name for the image
    EditreceiptPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        console.log(newFileName);
        return newFileName;
    };
    // Copy the image to a local folder
    EditreceiptPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
            console.log("success", success);
            _this.selectedImage = newFileName;
            _this.pathForImage(_this.selectedImage);
        }, function (error) {
            console.log('Error while storing file.');
        });
    };
    // Always get the accurate path to your apps folder
    EditreceiptPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            console.log("path", this.file.dataDirectory + img);
            // return this.file.dataDirectory + img;
            this.viewImage = this.webview.convertFileSrc(this.file.dataDirectory + img);
            console.log(this.viewImage, "view");
            ;
            // this.viewImage = this.file.dataDirectory + img
        }
    };
    EditreceiptPage.prototype.saveDetail = function () {
        var _this = this;
        var data = {
            image: this.selectedImage,
            amount: this.onAddForm.value.amount,
            description: this.onAddForm.value.description,
            claim_status: this.onAddForm.value.claimable,
            expense_type: this.onAddForm.value.expense_type,
            filepath: this.file.externalRootDirectory + 'RSM/'
        };
        this.storageService.updateReceipt(data).then(function (res) {
            console.log(res);
            _this.presentToast("Updated Successfully");
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    EditreceiptPage.prototype.createDirectory = function () {
        var _this = this;
        this.file.checkDir(this.file.externalRootDirectory, 'RSM').then(function (response) {
            console.log('Directory exists' + response);
            _this.file.removeFile(_this.file.externalRootDirectory + 'RSM/', _this.removeImage).then(function (success) {
                console.log("success", success);
            }, function (error) {
                console.log('Error while storing file.');
            });
            _this.file.copyFile(_this.correctPath, _this.currentName, _this.file.externalRootDirectory + 'RSM', _this.createFileName()).then(function (success) {
                console.log("success", success);
            }, function (error) {
                console.log('Error while storing file.');
            });
        }).catch(function (err) {
            console.log('Directory doesn\'t exist' + JSON.stringify(err));
            _this.file.createDir(_this.file.externalRootDirectory, 'RSM', false).then(function (response) {
                console.log('Directory create' + response);
                // Copy the image to a local folder
                _this.file.copyFile(_this.correctPath, _this.currentName, _this.file.externalRootDirectory + 'RSM', _this.createFileName()).then(function (success) {
                    console.log("success", success);
                }, function (error) {
                    console.log('Error while storing file.');
                });
            }).catch(function (err) {
                console.log('Directory no create' + JSON.stringify(err));
            });
        });
    };
    ;
    EditreceiptPage = tslib_1.__decorate([
        Component({
            selector: 'app-editreceipt',
            templateUrl: './editreceipt.page.html',
            styleUrls: ['./editreceipt.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            ActivatedRoute,
            Camera,
            ActionSheetController,
            FileTransfer,
            File,
            FilePath,
            SQLite,
            WebView,
            ToastController,
            NavController,
            StorageService,
            LoadingController])
    ], EditreceiptPage);
    return EditreceiptPage;
}());
export { EditreceiptPage };
//# sourceMappingURL=editreceipt.page.js.map