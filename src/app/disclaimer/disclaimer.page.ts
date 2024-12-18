import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { NavParams, ToastController, NavController, ModalController } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { SettingService } from '../service/setting.service';
import { constant } from '../_helper/constant';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.page.html',
  styleUrls: ['./disclaimer.page.scss'],
})
export class DisclaimerPage implements OnInit {
  disclaimervalue: any;
  checked = false;
  items: any = [];
  correctPath: any = '';
  currentName: any = '';
  image: any = '';
  formdata: any = '';
  userid: any = '';
  claimTaxAmount: any = '';
  taxClaimAmount: any;
  taxClaimType: any;
  taxClaimValue: any;
  showSuccess = false;
  constructor(private modalController: ModalController,
    private transfer: FileTransfer,
    private file: File,
    private filePath: FilePath,
    private sqlite: SQLite,
    private uniqueDeviceID: UniqueDeviceID,
    private webview: WebView, public toastCtrl: ToastController,
    private navParams: NavParams,
    private navCtrl: NavController,
    private settingService: SettingService
  ) {
    this.image = JSON.parse(this.navParams.get('value')).image;
    this.claimTaxAmount = JSON.parse(this.navParams.get('value')).claim_tax_amount;
    this.formdata = JSON.parse(this.navParams.get('value')).formdata;
    this.correctPath = JSON.parse(this.navParams.get('value')).correctPath;
    this.currentName = JSON.parse(this.navParams.get('value')).currentName;
    this.showSuccess = false;
  }

  ngOnInit() {
    this.userid = this.settingService.getUserId();
  }

  checkbox(event) {
    if (event.target.checked) {
      this.checked = true;
    } else {
      this.checked = false;
    }
  }

  onSelectChange(ev: any) {
    console.log('onSelectChange', this.checked);
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

  createDirectory(refImageName) {
    this.file
      .checkDir(this.file.externalDataDirectory, 'RSM')
      .then(response => {
        console.log('Directory checkDir' + response);
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
      }).catch(err => {
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
                id: res.rows.item(i).id, image: res.rows.item(i).image, amount: res.rows.item(i).amount,
                description: res.rows.item(i).description, date: res.rows.item(i).date, claimable: res.rows.item(i).claim_status,
                expense_type: res.rows.item(i).expense_type, filepath: res.rows.item(i).filepath,
                payment_type: res.rows.item(i).payment_type
              });
            }
          })
          .catch(e => console.log(e));
      }).catch(e => {
        console.log(e);
      });
    })
    .catch((error: any) => console.log(error));
    this.navCtrl.navigateRoot('/viewreceipt');
  }

  skip() {
    this.image = '';
    this.showSuccess = false;
    this.navCtrl.navigateRoot('/viewreceipt');
  }

  action(action) {
    this.taxClaimType = 'fixed';
    this.taxClaimAmount = 0;
    this.taxClaimValue = 0;

    if (this.formdata.claimable === true) {

      this.taxClaimType = 'percentage';
      const amount = !isNaN(parseFloat(this.formdata.amount)) ? parseFloat(this.formdata.amount) : 0;
      this.taxClaimValue = 100;
      this.taxClaimAmount = amount;
    } else {
      if (this.formdata.gstamountper != '') {
        const cAmount = parseInt(this.formdata.gstamountper);
        const amount = !isNaN(parseFloat(this.formdata.amount)) ? parseFloat(this.formdata.amount) : 0;
        this.taxClaimValue = !isNaN(cAmount) ? cAmount : 0;
        this.taxClaimAmount = (amount * this.taxClaimValue) / 100;
        this.taxClaimAmount = parseFloat((this.taxClaimAmount).toFixed(2));
        this.taxClaimType = 'percentage';
      } else if (this.formdata.gstamountdol != '') {

        const cAmount = !isNaN(parseInt(this.formdata.gstamountdol)) ? parseInt(this.formdata.gstamountdol) : 0;
        this.taxClaimAmount = parseFloat((cAmount).toFixed(2));
        this.taxClaimValue = this.taxClaimAmount;
        this.taxClaimType = 'fixed';
      }
    }

    if (action === 'okay') {
      if (parseInt(this.formdata.amount) < parseInt(this.taxClaimAmount)) {
        this.presentToast('Tax return value cannot be greater than amount');
      } else {
        this.settingService.setDisclaimer(this.checked);
        this.save();
        this.dismiss();
      }
    } else {
      this.dismiss();
    }
  }
  save() {
    const me = this;
    this.uniqueDeviceID
      .get()
      .then((uuid: any) => {
        console.log("uuid",uuid);
      this.sqlite.create({
        name: 'ionicdb.db',
        location: 'default',
        key: uuid+':'+constant.secretKey
      }).then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO ocr VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?,?,?)',
          [this.image, this.formdata.amount, this.formdata.description, this.formdata.date, this.formdata.claimable,
          this.formdata.expense_type, this.file.externalDataDirectory + 'RSM/', this.formdata.gstamount, this.taxClaimAmount,
          this.formdata.payment_type, this.userid, this.taxClaimValue,
          this.taxClaimType])
          .then(res => {
            me.createDirectory(this.image);
            me.view(me.userid);
          })
          .catch(e => {
            console.log(e);
          });
      }).catch(e => {
        console.log(e);
      });
    })
    .catch((error: any) => console.log(error));
  }

  dismiss() {
    this.modalController.dismiss({ result: true });
  }
}
