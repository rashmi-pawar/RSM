import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ActionSheetController, ToastController, NavController, LoadingController, Events, ModalController } from '@ionic/angular';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { StorageService } from '../storage.service';
import { ExpensePage } from '../expense/expense.page';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PageTrack } from '../decorators/page-track.decorator';
declare var $: any;
@Component({
  selector: 'app-editreceipt',
  templateUrl: './editreceipt.page.html',
  styleUrls: ['./editreceipt.page.scss']
})
@PageTrack('Edit Receipt Screen')
export class EditreceiptPage implements OnInit {
  id;
  data: any = '';
  viewImage: any = '';
  public onAddForm: FormGroup;
  selectedImage: any = '';
  isLoading = false;
  isFav: any;
  removeImage: any = '';
  correctPath: any = '';
  currentName: any = '';
  lists: any = [];
  newlist: any = [];
  year: any = '';
  error: any = false;
  claimTaxAmount: any = '';
  checkamountbit = 0;
  uploadcamera: any = false;
  show: any;
  taxClaimAmount: any;
  taxClaimType: any;
  taxClaimValue: any;

  amount;
  claimable;
  claimTaxReturn;
  date;
  description;
  expenseType;
  paymentType;
  gstamount;
  gstamountper;
  gstamountdol;
  selectImageError = '';

  constructor(
    private formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private file: File,
    private filePath: FilePath,
    private webview: WebView,
    private sanitizer: DomSanitizer,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public storageService: StorageService,
    public loadingController: LoadingController,
    private events: Events,
    private modalController: ModalController
  ) {

  }

  getData(id) {
    this.storageService.viewReceiptbyid(id).then(val => {
      const viewImage = this.webview.convertFileSrc(this.file.dataDirectory + val.rows.item(0).image);
      this.viewImage = viewImage;
      this.selectedImage = val.rows.item(0).image;
      this.removeImage = val.rows.item(0).image;
      this.amount = parseFloat(val.rows.item(0).amount).toFixed(2);
      this.claimable = val.rows.item(0).claim_status;
      this.claimTaxReturn = val.rows.item(0).claim_tax_return;
      this.date = val.rows.item(0).date;
      this.description = val.rows.item(0).description;
      this.expenseType = val.rows.item(0).expense_type;
      this.paymentType = val.rows.item(0).payment_type;
      this.gstamount = parseFloat(val.rows.item(0).totalgst).toFixed(2);
      this.taxClaimValue = val.rows.item(0).claimtaxvalue;
      this.taxClaimType = val.rows.item(0).claimtaxtype;

      if (val.rows.item(0).claimtaxtype === 'percentage') {
        this.gstamountper = val.rows.item(0).claimtaxvalue;
      } else {
        this.gstamountdol = val.rows.item(0).claimtaxvalue;
      }
    }).catch(err => {
      console.log(err);
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ExpensePage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
  getImgContent(imgFile): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imgFile);
  }


  ngOnInit() {
    $('#success').hide();

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = JSON.parse(params.data).id;
      this.getData(this.id);
    });

    this.gstamountper = '';

    if (this.claimable === 'false') {
      this.show = true;
    } else {
      this.show = false;
    }

    this.onAddForm = this.formBuilder.group({
      amount: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')])),
      description: new FormControl(''),
      date: new FormControl('', Validators.compose([Validators.required])),
      claimable: new FormControl(''),
      expenseType: new FormControl('', Validators.compose([Validators.required])),
      paymentType: new FormControl('', Validators.compose([Validators.required])),
      gstamount: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')])),
      gstamountper: new FormControl(''),
      gstamountdol: new FormControl('')
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

  async presentActionSheet() {
    this.selectedImage = '';
    this.viewImage = '';
    this.uploadcamera = true;
  }

  select_image(value) {
    if (value === 'camera') {
      this.getPicture(this.camera.PictureSourceType.CAMERA);
    } else {
      this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY);
    }
  }

  cancel() {
    this.navCtrl.navigateRoot('/receiptdetail');
  }

  public getPicture(sourceType) {
    // Create options for the Camera Dialog
    const options = {
      quality: 100,
      sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    // Get the data of an image
    this.camera.getPicture(options).then(
      imagePath => {
        // Special handling for Android library
        if (sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
          this.filePath.resolveNativePath(imagePath).then(filePath => {
            console.log(filePath);
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

  saveDetail() {
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
      } else if (this.onAddForm.value.gstamountdol !== '') {

        const cAmount = !isNaN(parseInt(this.onAddForm.value.gstamountdol)) ? parseInt(this.onAddForm.value.gstamountdol) : 0;
        this.taxClaimAmount = parseFloat((cAmount).toFixed(2));
        this.taxClaimValue = this.taxClaimAmount;
        this.taxClaimType = 'fixed';
      }
    }

    if (parseInt(this.onAddForm.value.amount) < parseInt(this.taxClaimAmount)) {
      this.presentToast('Tax return value cannot be greater than amount');
    } else {
      const data = {
        image: this.selectedImage,
        amount: this.onAddForm.value.amount,
        description: this.onAddForm.value.description,
        claim_status: this.onAddForm.value.claimable,
        expense_type: this.onAddForm.value.expenseType,
        payment_type: this.onAddForm.value.paymentType,
        filepath: this.file.externalDataDirectory + 'RSM/',
        id: this.id,
        totalgst: this.onAddForm.value.gstamount,
        claim_tax_return: this.taxClaimAmount,
        tax_claim_value: this.taxClaimValue,
        tax_claim_type: this.taxClaimType,
        date: this.onAddForm.value.date
      };
      console.log('final data', data);
      this.storageService.updateReceipt(data).then(res => {

        this.events.publish('receipt:updated', this.data.id);
        $('#success').show();
      })
        .catch(e => {
          this.error = true;
          console.log(e);
        });
    }
  }

  skip() {
    $('#success').hide();
    this.error = false;
  }

  createDirectory() {
    this.file
      .checkDir(this.file.externalDataDirectory, 'RSM')
      .then(response => {
        this.file
          .removeFile(
            this.file.externalDataDirectory + 'RSM/',
            this.removeImage
          )
          .then(
            success => {
              console.log('success', success);
            },
            error => {
              console.log('Error while storing file.');
            }
          );
        this.file
          .copyFile(
            this.correctPath,
            this.currentName,
            this.file.externalDataDirectory + 'RSM',
            this.createFileName()
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
                this.createFileName()
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

  closeUploadCamera() {
    this.uploadcamera = false;
  }
}
