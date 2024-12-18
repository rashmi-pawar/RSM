import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ActionSheetController, ToastController, NavController, LoadingController, ModalController, Platform, PickerController } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { HttpClient } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { StorageService } from '../storage.service';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { ExpensePage } from '../expense/expense.page';
import { DisclaimerPage } from '../disclaimer/disclaimer.page';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { PageTrack } from '../decorators/page-track.decorator';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { SettingService } from '../service/setting.service';
import { BackStackService } from '../service/back-stack.service';
import { constant } from '../_helper/constant';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

declare var JJzip;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
@PageTrack('Add New Receipt Screen')
export class HomePage implements OnInit {
  public onAddForm: FormGroup;
  selectedImage: any = '';
  isLoading = false;
  show: any;
  error: any = false;
  uploadcamera; any = false;
  isFav: any;
  viewImage: any = '';
  correctPath: any = '';
  currentName: any = '';
  items: any = [];
  accessToken: any = '';
  driveFileId: any = '';
  minDate = new Date();
  date = new Date().toISOString();
  userid: any = '';
  checkamountbit = 0;
  taxClaimAmount: any;
  taxClaimType: any;
  taxClaimValue: any;
  claimTaxAmount: any = '';
  back;
  showSuccess = false;
  selectImageError = '';

  constructor(
    private formBuilder: FormBuilder,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private transfer: FileTransfer,
    private file: File,
    private filePath: FilePath,
    private sqlite: SQLite,
    private webview: WebView,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    private uniqueDeviceID: UniqueDeviceID,
    private googlePlus: GooglePlus,
    private http: HttpClient,
    private socialSharing: SocialSharing,
    private storageService: StorageService,
    private settingService: SettingService,
    private sqliteDbCopy: SqliteDbCopy,
    private base64: Base64,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public popoverController: PopoverController,
    public platform: Platform,
    private backStack: BackStackService,
    private sanitizer: DomSanitizer,
    public location: Location,
    public pickerCtrl: PickerController,
  ) {
    this.storageService.createOcrTable().then(val => {
    }).catch(err => {
      console.log(err);
    });
    this.back = this.backStack.getBackStack('home');
  }

  getImgContent(imgFile): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imgFile);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ExpensePage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  async presentDisclaimerModal(image, formdata, claimTaxAmount) {
    const newdata = {
      image,
      formdata,
      claimTaxAmount,
      correctPath: this.correctPath,
      currentName: this.currentName
    };
    const modal = await this.modalController.create({
      component: DisclaimerPage,
      componentProps: { value: JSON.stringify(newdata) }
    });
    const me = this;
    modal.onDidDismiss()
      .then((data) => {
        // console.log('onDidDismiss:', data);
        // me.showSuccess = true;
        // console.log('me.showSuccess', me.showSuccess);
      });

    return await modal.present();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  ngOnInit() {
    this.onAddForm = this.formBuilder.group({
      amount: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]+(.[0-9]{1,2})?$')])),
      description: new FormControl(''),
      date: new FormControl('', Validators.compose([Validators.required])),
      claimable: new FormControl(''),
      expense_type: new FormControl('', Validators.compose([Validators.required])),
      gstamount: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]+(.[0-9]{1,2})?$')])),
      gstamountper: new FormControl(''),
      gstamountdol: new FormControl(''),
      payment_type: new FormControl('', Validators.compose([Validators.required]))
    });
    this.onAddForm.patchValue({
      claimable: true
    });
    this.claimcheck();
    this.createmultipleTables();
    this.userid = this.settingService.getUserId();
    this.file
      .checkDir(this.file.externalDataDirectory, 'RSM')
      .then(response => { })
      .catch(err => {
        console.log('Directory doesn\'t exist' + JSON.stringify(err));
        this.file
          .createDir(this.file.externalDataDirectory, 'RSM', false)
          .then(response => {
          })
          .catch(err => {
            console.log('Directory no create' + JSON.stringify(err));
          });
      });
      this.platform.ready().then(() => {
        this.platform.backButton.subscribeWithPriority(9999, () => {
          this.pickerCtrl.dismiss();
        });
      });
  }

  skip() {
    this.viewImage = '';
    this.showSuccess = false;
    this.error = false;
    this.navCtrl.navigateRoot('/viewreceipt');
  }

  cancel() {
    this.location.back();
    // this.onAddForm.reset();
  }

  createmultipleTables() {
    this.storageService
      .createOcrTable()
      .then(val => {
        console.log(val);
      })
      .catch(err => {
        console.log(err);
      });
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController
      .create({
      })
      .then(a => {
        a.present().then(() => {
          console.log('presented');
          if (!this.isLoading) {
            a.dismiss().then(() => console.log('abort presenting'));
          }
        });
      });
  }

  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingController
      .dismiss()
      .then(() => console.log('dismissed'));
  }

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      mode: 'md',
      cssClass: 'customToast'
    });
    toast.present();
  }

  select_image(value) {
    if (value == 'camera') {
      this.getPicture(this.camera.PictureSourceType.CAMERA);
    } else {
      this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY);
    }
  }

  async presentActionSheet() {
    this.selectedImage = '';
    this.viewImage = '';
    this.uploadcamera = true;
  }

  public getPicture(sourceType) {
    // Create options for the Camera Dialog
    const options = {
      quality: 60,
      sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    // Get the data of an image
    this.camera.getPicture(options).then(
      imagePath => {
        if (this.platform.is('android') && this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {

          this.filePath.resolveNativePath(imagePath).then(filePath => {

            this.correctPath = filePath.substr(
              0,
              filePath.lastIndexOf('/') + 1
            );
            this.currentName = imagePath.substring(
              imagePath.lastIndexOf('/') + 1,
              imagePath.lastIndexOf('?')
            );
            this.copyFileToLocalDir(
              this.correctPath,
              this.currentName,
              this.createFileName()
            );
          });

        } else {
          this.currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
          this.correctPath = imagePath.substr(
            0,
            imagePath.lastIndexOf('/') + 1
          );
          this.copyFileToLocalDir(
            this.correctPath,
            this.currentName,
            this.createFileName()
          );
        }
      },
      err => {
        console.log('Error while selecting image.');
      }
    );
  }
  // Create a new name for the image
  private createFileName() {
    const d = new Date(),
      n = d.getTime(),
      newFileName = n + '.jpg';
    return newFileName;
  }

  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file
      .copyFile(namePath, currentName, this.file.dataDirectory, newFileName)
      .then(
        success => {
          this.selectedImage = newFileName;
          this.pathForImage(this.selectedImage);
        },
        error => {
          console.log('Error while storing file.');
        }
      );
  }

  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      this.viewImage = this.webview.convertFileSrc(
        this.file.dataDirectory + img
      );
      this.selectImageError = '';
    }
    this.uploadcamera = false;
  }

  checkfield() {
    if (this.onAddForm.value.gstamountdol === '' && this.onAddForm.value.gstamountper === '' && this.onAddForm.value.claimable === false) {
      this.presentToast('Please add tax(% or $) ');
    } else if (this.selectedImage == '') {
      this.selectImageError = 'Please upload the receipt';
    } else {
      this.saveDetail();
    }
  }

  closeUploadCamera() {
    this.uploadcamera = false;
  }

  saveDetail() {
    if (this.settingService.getDisclaimer() === false) {
      this.uploadcamera = false;
      this.presentDisclaimerModal(
        this.selectedImage,
        this.onAddForm.value,
        this.claimTaxAmount
      );
      this.onAddForm.reset();
      this.selectedImage = '';
      this.viewImage = '';
    } else {
      this.uploadcamera = false;
      this.taxClaimType = 'fixed';
      this.taxClaimAmount = 0;
      this.taxClaimValue = 0;

      if (this.onAddForm.value.claimable === true) {
        this.taxClaimType = 'percentage';
        const amount = !isNaN(parseFloat(this.onAddForm.value.amount)) ? parseFloat(this.onAddForm.value.amount) : 0;
        this.taxClaimValue = 100;
        this.taxClaimAmount = amount;
      } else {
        if (this.onAddForm.value.gstamountper !== '') {

          const cAmount = parseInt(this.onAddForm.value.gstamountper);
          const amount = !isNaN(parseFloat(this.onAddForm.value.amount)) ? parseFloat(this.onAddForm.value.amount) : 0;
          this.taxClaimValue = !isNaN(cAmount) ? cAmount : 0;
          this.taxClaimAmount = (amount * this.taxClaimValue) / 100;
          this.taxClaimAmount = parseFloat((this.taxClaimAmount).toFixed(2));
          this.taxClaimType = 'percentage';
        } else if (this.onAddForm.value.gstamountdol != '') {
          const cAmount = !isNaN(parseInt(this.onAddForm.value.gstamountdol))
            ? parseInt(this.onAddForm.value.gstamountdol)
            : 0;
          this.taxClaimAmount = parseFloat(cAmount.toFixed(2));
          this.taxClaimValue = this.taxClaimAmount;
          this.taxClaimType = 'fixed';
        }
      }
      if (parseInt(this.onAddForm.value.amount) < parseInt(this.taxClaimAmount)) {
        this.presentToast('Tax return value cannot be greater than amount');
      } else {
        this.uniqueDeviceID
      .get()
      .then((uuid: any) => {
        console.log("uuid",uuid);
          this.sqlite
            .create({
              name: 'ionicdb.db',
              location: 'default',
              key: uuid+':'+constant.secretKey
            })
            .then((db: SQLiteObject) => {
              this.createmultipleTables();
              db.executeSql('INSERT INTO ocr VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?,?,?)', [
                this.selectedImage,
                this.onAddForm.value.amount,
                this.onAddForm.value.description,
                this.onAddForm.value.date,
                this.onAddForm.value.claimable,
                this.onAddForm.value.expense_type,
                this.file.externalDataDirectory + 'RSM/',
                this.onAddForm.value.gstamount,
                this.taxClaimAmount,
                this.onAddForm.value.payment_type,
                this.userid,
                this.taxClaimValue,
                this.taxClaimType
              ])
                .then(res => {
                  this.createDirectory(this.selectedImage);
                  this.showSuccess = true;
                  this.selectedImage = '';
                  this.onAddForm.reset();
                  this.view(this.userid);
                })
                .catch(e => {
                  this.error = true;
                  console.log(e);
                });
            })
            .catch(e => {
              console.log(e);
            });
          })
          .catch((error: any) => console.log(error));
      }
    }
  }

  view(userid) {
    this.uniqueDeviceID
      .get()
      .then((uuid: any) => {
        console.log("uuid",uuid);
        this.sqlite.create({
          name: 'ionicdb.db',
          location: 'default',
          key: uuid+':'+constant.secretKey
        }).then((db: SQLiteObject) => {
          db.executeSql('SELECT * FROM ocr WHERE userid = ?', [userid])
            .then(res => {
              this.items = [];
              for (let i = 0; i < res.rows.length; i++) {
                this.items.push({
                  id: res.rows.item(i).id, userid: res.rows.item(i).userid, image: res.rows.item(i).image,
                  amount: res.rows.item(i).amount, description: res.rows.item(i).description, date: res.rows.item(i).date,
                  claimable: res.rows.item(i).claim_status, expense_type: res.rows.item(i).expense_type,
                  filepath: res.rows.item(i).filepath, payment_type: res.rows.item(i).payment_type,
                  totalgst: res.rows.item(i).totalgst
                });
              }
            })
            .catch(e => console.log(e));
        }).catch(e => {
          console.log(e);
        });
      })
    .catch((error: any) => console.log(error));
  }

  createDirectory(refImageName) {
    this.file
      .checkDir(this.file.externalDataDirectory, 'RSM')
      .then(response => {
        this.file
          .copyFile(
            this.correctPath,
            this.currentName,
            this.file.externalDataDirectory + 'RSM/',
            refImageName
          )
          .then(
            success => {
              console.log('success', success);
            },
            error => {
              console.log('Error while storing file.');
            }
          );
      })
      .catch(err => {
        console.log('Directory doesn\'t exist' + JSON.stringify(err));
        this.file
          .createDir(this.file.externalDataDirectory, 'RSM', false)
          .then(response => {
            console.log('Directory create' + response);
            // Copy the image to a local folder
            this.file
              .copyFile(
                this.correctPath,
                this.currentName,
                this.file.externalDataDirectory + 'RSM',
                refImageName
              )
              .then(
                success => {
                  console.log('success', success);
                },
                error => {
                  console.log('Error while storing file.');
                }
              );
          })
          .catch(err => {
            console.log('Directory no create' + JSON.stringify(err));
          });
      });
  }

  backup() {
    this.presentLoading();
    if (
      this.settingService.getUserId() &&
      this.settingService.getUserId() !== undefined
    ) {
      this.backupdb();
    } else {
      this.googlePlus
        .login({
          scopes: 'https://www.googleapis.com/auth/drive.file'
        })
        .then(res => {
          this.settingService.setUserData(res);
          this.accessToken = res.accessToken;
          this.backupdb();
        })
        .catch(err => console.error('err', err));
    }
  }

  backupdb() {
    this.sqliteDbCopy
      .copy('ionicdb.db', 1)
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));

    this.sqliteDbCopy
      .copyDbToStorage(
        'ionicdb.db',
        1,
        this.file.externalDataDirectory + 'RSM/',
        true
      )
      .then(res => {
        this.createZip();
        // console.log(res);
      })
      .catch(error => console.error(error));
  }

  createZip() {
    const context = this;
    this.file.checkFile(this.file.externalDataDirectory, 'RSM.zip').then(
      success => {
        console.log('success', success);
        this.file.removeFile(this.file.externalDataDirectory, 'RSM.zip').then(
          success => {
            const PathToFileInString = this.file.externalDataDirectory + 'RSM',
              PathToResultZip = this.file.externalDataDirectory;
            JJzip.zip(
              PathToFileInString,
              { target: PathToResultZip, name: 'RSM' },
              function (data) {
                context.upload(PathToResultZip);
              },
              function (error) {
                context.presentToast(error.message);
                console.log('err', error);
              }
            );
          },
          error => {
            console.log('rr', error);
          }
        );
      },
      error => {
        const PathToFileInString = this.file.externalDataDirectory + 'RSM',
          PathToResultZip = this.file.externalDataDirectory;
        JJzip.zip(
          PathToFileInString,
          { target: PathToResultZip, name: 'RSM' },
          function (data) {
            context.upload(PathToResultZip);
          },
          function (error) {
            console.log('err', error);
          }
        );
      }
    );
  }

  upload(data) {
    const context = this;
    this.file
      .checkFile(this.file.externalDataDirectory, 'RSM.zip')
      .then(function (success) {
        const filePath: string = context.file.externalDataDirectory + 'RSM.zip';
        context.base64.encodeFile(filePath).then(
          (base64File: string) => {
            context.dismissLoading();
            context.socialSharing
              .share('', '', base64File)
              .then(function (res) {
              })
              .catch(function (e) {
                console.log('err', e);
              });
          },
          err => {
            console.log(err);
          }
        );
      });
  }

  goto() {
    this.navCtrl.navigateRoot('/location');
  }

  totalgst(event) {
    if (event.value.length) {
      this.onAddForm.patchValue({
        gstamount: ((parseFloat(event.value) * 10) / 100).toFixed(2)
      });
    } else {
      this.onAddForm.patchValue({
        gstamount: 0
      });
    }
  }

  claimcheck() {
    if (this.onAddForm.value.claimable === false) {
      // this.tax_claim_value < 100;
      this.taxClaimType = 'fixed';
      this.show = true;
    } else {
      this.taxClaimValue = 100;
      this.taxClaimType = 'percentage';
      this.show = false;
    }
  }

  claimtaxcheck(event) {
    if (this.onAddForm.value.gstamountdol === '' && event.value === '') {
      this.presentToast('Please add tax(% or $) ');
    } else {
      if (event.value.length) {
        this.onAddForm.patchValue({
          gstamountdol: ''
        });
      }
    }
  }

  claimtaxcheck1(event) {
    if (event.value === '' && this.onAddForm.value.gstamountper === '') {
      this.presentToast('Please add tax(% or $) ');
    } else {
      if (event.value.length) {
        this.onAddForm.patchValue({
          gstamountper: ''
        });
      }
    }
  }
  ionViewWillLeave(){
    this.pickerCtrl.dismiss();
  }
}
