import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ActionSheetController, ToastController, NavController, LoadingController } from '@ionic/angular';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { HttpClient } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { StorageService } from '../storage.service';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
var HomePage = /** @class */ (function () {
    function HomePage(formBuilder, camera, actionSheetController, transfer, file, filePath, sqlite, webview, toastCtrl, navCtrl, googlePlus, http, socialSharing, storageService, sqliteDbCopy, base64, loadingController, firebaseAnalytics) {
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.sqlite = sqlite;
        this.webview = webview;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.googlePlus = googlePlus;
        this.http = http;
        this.socialSharing = socialSharing;
        this.storageService = storageService;
        this.sqliteDbCopy = sqliteDbCopy;
        this.base64 = base64;
        this.loadingController = loadingController;
        this.firebaseAnalytics = firebaseAnalytics;
        this.selectedImage = '';
        this.isLoading = false;
        this.viewImage = '';
        this.correctPath = '';
        this.currentName = '';
        this.items = [];
        this.accessToken = '';
        this.driveFileId = '';
        this.minDate = new Date();
        this.isFav = false;
        this.firebaseAnalytics.setCurrentScreen('homeScreen');
        // console.log(this.minDate);
        // this.storageService.createOcrTable().then(val => {
        //   console.log(val);
        // }).catch(err => {
        //   console.log(err);
        // });
        // this.sqlite.create({
        //   name: 'ionicdb.db',
        //   location: 'default'
        // })
        //   .then((db: SQLiteObject) => {
        //    db.executeSql('CREATE TABLE IF NOT EXISTS ocr(id INTEGER PRIMARY KEY, image TEXT,amount TEXT, description TEXT,date TEXT, claim_status TEXT, expense_type TEXT)', [])
        //       .then(() => console.log('Executed SQL'))
        //       .catch(e => console.log(e));
        //    })
        //   .catch(e => console.log(e));
    }
    HomePage.prototype.ngOnInit = function () {
        var _this_1 = this;
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
        this.createmultipleTables();
        this.getfav();
        this.file.checkDir(this.file.externalRootDirectory, 'RSM').then(function (response) {
        }).catch(function (err) {
            console.log('Directory doesn\'t exist' + JSON.stringify(err));
            _this_1.file.createDir(_this_1.file.externalRootDirectory, 'RSM', false).then(function (response) {
                console.log('Directory create' + response);
            }).catch(function (err) {
                console.log('Directory no create' + JSON.stringify(err));
            });
        });
    };
    HomePage.prototype.createmultipleTables = function () {
        this.storageService.createOcrTable().then(function (val) {
            console.log(val);
        }).catch(function (err) {
            console.log(err);
        });
        this.storageService.createFavTable().then(function (val) {
            console.log(val);
        }).catch(function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.presentLoading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this_1 = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this.loadingController.create({
                            // duration: 5000,
                            }).then(function (a) {
                                a.present().then(function () {
                                    console.log('presented');
                                    if (!_this_1.isLoading) {
                                        a.dismiss().then(function () { return console.log('abort presenting'); });
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.dismissLoading = function () {
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
    HomePage.prototype.presentToast = function (msg) {
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
    HomePage.prototype.presentActionSheet = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this_1 = this;
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
                                            _this_1.getPicture(_this_1.camera.PictureSourceType.PHOTOLIBRARY);
                                        }
                                    }, {
                                        text: 'Capture Image',
                                        // icon: 'share',
                                        handler: function () {
                                            _this_1.getPicture(_this_1.camera.PictureSourceType.CAMERA);
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
    HomePage.prototype.getPicture = function (sourceType) {
        var _this_1 = this;
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
            if (sourceType === _this_1.camera.PictureSourceType.PHOTOLIBRARY) {
                _this_1.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    console.log(filePath);
                    _this_1.correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    _this_1.currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this_1.copyFileToLocalDir(_this_1.correctPath, _this_1.currentName, _this_1.createFileName());
                });
            }
            else {
                _this_1.currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                _this_1.correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this_1.copyFileToLocalDir(_this_1.correctPath, _this_1.currentName, _this_1.createFileName());
            }
        }, function (err) {
            console.log('Error while selecting image.');
        });
    };
    // Create a new name for the image
    HomePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        console.log(newFileName);
        return newFileName;
    };
    // Copy the image to a local folder
    HomePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this_1 = this;
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
            console.log("success", success);
            _this_1.selectedImage = newFileName;
            _this_1.pathForImage(_this_1.selectedImage);
        }, function (error) {
            console.log('Error while storing file.');
        });
    };
    // Always get the accurate path to your apps folder
    HomePage.prototype.pathForImage = function (img) {
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
    HomePage.prototype.saveDetail = function () {
        var _this_1 = this;
        console.log(this.onAddForm.value);
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('INSERT INTO ocr VALUES(NULL,?,?,?,?,?,?,?)', [_this_1.selectedImage, _this_1.onAddForm.value.amount, _this_1.onAddForm.value.description, _this_1.onAddForm.value.date, _this_1.onAddForm.value.claimable, _this_1.onAddForm.value.expense_type, _this_1.file.externalRootDirectory + 'RSM/'])
                .then(function (res) {
                console.log(res);
                _this_1.presentToast('Add Receipt Successfully');
                _this_1.createDirectory();
                _this_1.selectedImage = '';
                _this_1.viewImage = '';
                _this_1.onAddForm.reset();
                _this_1.view();
            })
                .catch(function (e) {
                console.log(e);
            });
        }).catch(function (e) {
            console.log(e);
        });
    };
    HomePage.prototype.view = function () {
        var _this_1 = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('SELECT * FROM ocr ORDER BY id DESC', [])
                .then(function (res) {
                _this_1.items = [];
                // console.log("response",res);
                for (var i = 0; i < res.rows.length; i++) {
                    _this_1.items.push({ id: res.rows.item(i).id, image: res.rows.item(i).image, amount: res.rows.item(i).amount, description: res.rows.item(i).description, date: res.rows.item(i).date, claimable: res.rows.item(i).claim_status, expense_type: res.rows.item(i).expense_type, filepath: res.rows.item(i).filepath });
                }
                console.log(_this_1.items);
            })
                .catch(function (e) { return console.log(e); });
        }).catch(function (e) {
            console.log(e);
        });
    };
    // createDirectory() {
    //   this.file.checkDir(this.file.externalRootDirectory, 'RSM').then(response => {
    //     console.log('Directory exists' + response);
    //     this.file.checkDir(this.file.externalRootDirectory+'RSM', 'Images').then(response => {
    //       console.log('Directory exists' + response);
    //       this.file.copyFile(this.correctPath, this.currentName, this.file.externalRootDirectory + 'RSM/Images', this.createFileName()).then(success => {
    //         console.log("success", success);
    //     }, error => {
    //         console.log('Error while storing file.');
    //       });
    //     }).catch(err => {
    //       console.log('Directory doesn\'t exist' + JSON.stringify(err));
    //       this.file.createDir(this.file.externalRootDirectory+'RSM', 'Images', false).then(response => {
    //         console.log('Directory create' + response);
    //         // Copy the image to a local folder
    //         this.file.copyFile(this.correctPath, this.currentName, this.file.externalRootDirectory + 'RSM/Images', this.createFileName()).then(success => {
    //           console.log("success", success);
    //         }, error => {
    //           console.log('Error while storing file.');
    //         });
    //       }).catch(err => {
    //         console.log('Directory no create' + JSON.stringify(err));
    //       });
    //     });
    //   }).catch(err => {
    //     this.file.createDir(this.file.externalRootDirectory, 'RSM', false).then(response => {
    //       this.file.checkDir(this.file.externalRootDirectory+'RSM', 'Images').then(response => {
    //         console.log('Directory exists' + response);
    //         this.file.copyFile(this.correctPath, this.currentName, this.file.externalRootDirectory + 'RSM/Images', this.createFileName()).then(success => {
    //           console.log("success", success);
    //       }, error => {
    //           console.log('Error while storing file.');
    //         });
    //       }).catch(err => {
    //         console.log('Directory doesn\'t exist' + JSON.stringify(err));
    //         this.file.createDir(this.file.externalRootDirectory+'RSM', 'Images', false).then(response => {
    //           console.log('Directory create' + response);
    //           // Copy the image to a local folder
    //           this.file.copyFile(this.correctPath, this.currentName, this.file.externalRootDirectory + 'RSM/Images', this.createFileName()).then(success => {
    //             console.log("success", success);
    //           }, error => {
    //             console.log('Error while storing file.');
    //           });
    //         }).catch(err => {
    //           console.log('Directory no create' + JSON.stringify(err));
    //         });
    //       });
    //     }).catch(err => {
    //       console.log('Directory no create' + JSON.stringify(err));
    //     });
    //   });
    // }
    HomePage.prototype.createDirectory = function () {
        var _this_1 = this;
        this.file.checkDir(this.file.externalRootDirectory, 'RSM').then(function (response) {
            console.log('Directory exists' + response);
            _this_1.file.copyFile(_this_1.correctPath, _this_1.currentName, _this_1.file.externalRootDirectory + 'RSM', _this_1.createFileName()).then(function (success) {
                console.log("success", success);
            }, function (error) {
                console.log('Error while storing file.');
            });
        }).catch(function (err) {
            console.log('Directory doesn\'t exist' + JSON.stringify(err));
            _this_1.file.createDir(_this_1.file.externalRootDirectory, 'RSM', false).then(function (response) {
                console.log('Directory create' + response);
                // Copy the image to a local folder
                _this_1.file.copyFile(_this_1.correctPath, _this_1.currentName, _this_1.file.externalRootDirectory + 'RSM', _this_1.createFileName()).then(function (success) {
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
    HomePage.prototype.backup = function () {
        var _this_1 = this;
        this.presentLoading();
        if (JSON.parse(localStorage.getItem('userData')) && JSON.parse(localStorage.getItem('userData')) != undefined) {
            // this.createZip();
            this.backupdb();
        }
        else {
            this.googlePlus.login({
                'scopes': 'https://www.googleapis.com/auth/drive.file'
            })
                .then(function (res) {
                console.log(res);
                localStorage.setItem('userData', JSON.stringify(res));
                _this_1.accessToken = res.accessToken;
                // this.createZip();
                _this_1.backupdb();
            })
                .catch(function (err) { return console.error('err', err); });
        }
    };
    HomePage.prototype.backupdb = function () {
        var _this_1 = this;
        this.sqliteDbCopy.copy('ionicdb.db', 1)
            .then(function (res) { return console.log(res); })
            .catch(function (error) { return console.error(error); });
        this.sqliteDbCopy.copyDbToStorage('ionicdb.db', 1, this.file.externalRootDirectory + 'RSM/', true)
            .then(function (res) {
            _this_1.createZip();
            console.log(res);
        })
            .catch(function (error) { return console.error(error); });
    };
    HomePage.prototype.createZip = function () {
        var _this_1 = this;
        var _this = this;
        this.file.checkFile(this.file.externalRootDirectory, 'RSM.zip').then(function (success) {
            console.log("success", success);
            _this_1.file.removeFile(_this_1.file.externalRootDirectory, 'RSM.zip').then(function (success) {
                var PathToFileInString = _this_1.file.externalRootDirectory + "RSM", PathToResultZip = _this_1.file.externalRootDirectory;
                JJzip.zip(PathToFileInString, { target: PathToResultZip, name: "RSM" }, function (data) {
                    console.log(data);
                    _this.upload(PathToResultZip);
                }, function (error) {
                    _this.presentToast(error.message);
                    console.log("err", error);
                });
            }, function (error) {
                console.log("rr", error);
            });
        }, function (error) {
            var PathToFileInString = _this_1.file.externalRootDirectory + "RSM", PathToResultZip = _this_1.file.externalRootDirectory;
            JJzip.zip(PathToFileInString, { target: PathToResultZip, name: "RSM" }, function (data) {
                console.log(data);
                _this.upload(PathToResultZip);
            }, function (error) {
                console.log("err", error);
            });
        });
    };
    HomePage.prototype.upload = function (data) {
        var _this = this;
        this.file.checkFile(this.file.externalRootDirectory, 'RSM.zip').then(function (success) {
            console.log("exist");
            var filePath = _this.file.externalRootDirectory + 'RSM.zip';
            _this.base64.encodeFile(filePath).then(function (base64File) {
                console.log(base64File);
                _this.dismissLoading();
                _this.socialSharing.share('', '', base64File).then(function (res) {
                    console.log("res", res);
                }).catch(function (e) {
                    console.log("err", e);
                });
            }, function (err) {
                console.log(err);
            });
        });
    };
    HomePage.prototype.goto = function () {
        this.navCtrl.navigateRoot('/location');
    };
    HomePage.prototype.addToFavourites = function (pagename, url) {
        var _this_1 = this;
        this.isFav = true;
        console.log(pagename, url);
        this.storageService.addFav(pagename, url, new Date()).then(function (val) {
            console.log(val);
            _this_1.presentToast("Added to favourites");
        }).catch(function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.getfav = function () {
        var _this_1 = this;
        this.storageService.getRecords('favourites', 'home').then(function (val) {
            console.log(val);
            if (val.rows.length > 0) {
                _this_1.isFav = true;
            }
            else {
                _this_1.isFav = false;
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.removefavourites = function (pagename, url) {
        var _this_1 = this;
        console.log(pagename, "df", url);
        this.storageService.removeFav(pagename, url).then(function (res) {
            console.log(res);
            _this_1.getfav();
            _this_1.presentToast("Removed from favourites");
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            Camera,
            ActionSheetController,
            FileTransfer,
            File,
            FilePath,
            SQLite,
            WebView,
            ToastController,
            NavController,
            GooglePlus,
            HttpClient,
            SocialSharing,
            StorageService,
            SqliteDbCopy,
            Base64,
            LoadingController,
            FirebaseAnalytics])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map