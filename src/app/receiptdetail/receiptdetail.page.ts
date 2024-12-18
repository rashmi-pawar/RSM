import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Events, NavController, AlertController, ToastController, } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { PageTrack } from '../decorators/page-track.decorator';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Currency } from '../_helper/currency';

declare var $: any;

@Component({
  selector: 'app-receiptdetail',
  templateUrl: './receiptdetail.page.html',
  styleUrls: ['./receiptdetail.page.scss']
})
@PageTrack('View Expense Screen')
export class ReceiptdetailPage implements OnInit {
  data: any;
  showpop = false;
  show: any = false;
  claim: any = '';
  a = 0;
  id;
  currency = new Currency();
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private storageService: StorageService,
    private navCtrl: NavController,
    private events: Events,
    public popoverController: PopoverController,
    private webview: WebView,
    private file: File,
    private sanitizer: DomSanitizer,
    public alertController: AlertController,
    public toastCtrl: ToastController,
  ) {

  }

  getData(id) {
    this.storageService.viewReceiptbyid(id).then(val => {

      const viewImage = this.webview.convertFileSrc(this.file.dataDirectory + val.rows.item(0).image);

      this.data = {
        id: val.rows.item(0).id,
        amount: this.currency.display(val.rows.item(0).amount),
        claim_status: val.rows.item(0).claim_status,
        claim_tax_return: this.currency.display(val.rows.item(0).claim_tax_return),
        date: val.rows.item(0).date,
        description: val.rows.item(0).description,
        expense_type: val.rows.item(0).expense_type,
        image: val.rows.item(0).image,
        payment_type: val.rows.item(0).payment_type,
        totalgst: this.currency.display(val.rows.item(0).totalgst),
        fullimage: viewImage,
        tax_claim_value: val.rows.item(0).claimtaxvalue,
        tax_claim_type: val.rows.item(0).claimtaxtype
      };
    }).catch(err => {
      console.log(err);
    });
  }

  getImgContent(imgFile): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imgFile);
  }


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = JSON.parse(params.data).id;
      this.getData(this.id);
    });
  }

  async presentPopover(ev: any, data: any) {
    this.showpop = true;
  }

  pop() {
    this.show = false;
  }

  hidee(event) {
    if ($(event).hasClass('popup-li')) {
      if ($(event).hasClass('add')) {
        this.router.navigate(['/home']);
      } else if ($(event).hasClass('delete')) {
        this.showpop = false;
        this.show = true;
      } else {
        this.edit(this.data);
      }
      this.showpop = false;
    } else {
      this.showpop = false;
    }
  }

  delete() {
    this.storageService
      .removeReceipt(this.id)
      .then(val => {
        this.events.publish('receipt:deleted', Date.now());
        this.presentToast('Receipt has been deleted successfully');
        this.navCtrl.navigateRoot('/viewreceipt');
      })
      .catch(err => {
        console.log(err);
      });
  }

  edit(data) {
    this.router.navigate(['/editreceipt'], {
      queryParams: { data: JSON.stringify(this.data) }
    });
  }

  async presentDeleteConfirm() {
    const alert = await this.alertController.create({
      header: 'Delete receipt',
      message: 'Are you sure you want to delete this receipt?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          handler: () => {
            this.delete();
          }
        }
      ]
    });

    await alert.present();
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
}
