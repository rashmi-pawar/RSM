import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File } from '@ionic-native/file/ngx';
import { PageTrack } from '../decorators/page-track.decorator';
import { SettingService } from '../service/setting.service';
import { Currency } from '../_helper/currency';
import * as moment from 'moment';
import { remove } from 'lodash';
import { AlertController, Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-receiptlist',
  templateUrl: './receiptlist.page.html',
  styleUrls: ['./receiptlist.page.scss']
})
@PageTrack('Receipt List Screen')
export class ReceiptlistPage implements OnInit {
  status = false;
  lists: any = [];
  newlist: any = [];
  year: any = '';
  userid: any = '';
  totalamount: any = 0;
  currency = new Currency();
  showfiler = false;
  selectedReceipts = [];
  filter: any = {
    title: '',
    startDate: '',
    endDate: ''
  }

  constructor(public activatedRoute: ActivatedRoute,
    private storageService: StorageService,
    private settingService: SettingService,
    private file: File,
    public router: Router,
    private alertController: AlertController,
    public toastCtrl: ToastController,
    public platform: Platform,
    private webview: WebView) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (JSON.parse(params.data).pagename === 'dashboard') {
        this.status = true;
      } else {
        if (JSON.parse(params.data).year !== '') {
          this.year = JSON.parse(params.data).year;
        }
      }
      this.viewreceipt();
    });
  }

  ngOnInit() {
    this.userid = this.settingService.getUserId();
    if (this.platform.is("android")) {
      this.platform.ready().then(() => {
        this.platform.backButton.subscribeWithPriority(9999, () => {
          console.log("Back press handler!");
        });
      });
    }
  }
  cancel() {
    this.filter = {
      title: '',
      startDate: '',
      endDate: ''
    }
    this.showfiler = false;
    this.viewreceipt();
  }

  selectReceipt(event, item){
    if(event.target.checked){
      this.selectedReceipts.push(item)
    } else {
      remove(this.selectedReceipts, { id: item.id })
    }
  }

  async deleteReceipt(){
    if(this.selectedReceipts.length > 0) {
      
      const alert = await this.alertController.create({
        header: 'Confirm!',
        message: 'Are you sure you want to delete this receipts?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Yes',
            handler: () => {
              console.log('Confirm Yes');
              for(let receipt of this.selectedReceipts){
                console.log(receipt);
                this.storageService.removeReceipt(receipt.id).then(async res => {
                  console.log('deleted successfully')
                  console.log(res)
                  const toast = await this.toastCtrl.create({
                    message: 'Receipt deleted successfully',
                    duration: 2000,
                    mode: 'md',
                    cssClass: 'customToast'
                  });
                  toast.present();
                  this.viewreceipt();
                })
              }
            }
          }
        ]
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Alert!',
        message: 'Please select atleast one receipt',
        buttons: [
          {
            text: 'Okay',
            role: 'cancel',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }
        ]
      });
      await alert.present();
    }
  }

  async filerdata() {
    if(this.filter.title || this.filter.startDate || this.filter.endDate){
      await this.viewreceipt();
    }
    this.showfiler = false;
    console.log("filter")
  }
  filterByValue(array, string) {
    return array.filter(o =>
      o['expense_type'].toLowerCase().includes(string.toLowerCase())
  );
  }
  async viewreceipt() {
    this.totalamount = 0;
    this.userid = this.settingService.getUserId();
    this.storageService.viewOcr(this.userid).then(res => {
      this.lists = [];
      this.newlist = [];
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          const date = new Date(res.rows.item(i).date);
          const newyear = date.getFullYear();
          const newamounttofixed = this.currency.display(res.rows.item(i).amount);
          const viewImage = this.webview.convertFileSrc(this.file.dataDirectory + res.rows.item(i).image);
          this.lists.push({
            id: res.rows.item(i).id, image: res.rows.item(i).image, fullimage: viewImage,
            description: res.rows.item(i).description, claim_status: res.rows.item(i).claim_status,
            expense_type: res.rows.item(i).expense_type, amount: newamounttofixed, date: res.rows.item(i).date,
            claim_tax_return: res.rows.item(i).claim_tax_return, totalgst: res.rows.item(i).totalgst,
            payment_type: res.rows.item(i).payment_type
          });
          // if (newyear == parseInt(this.year)) {
          //   this.newlist.push({
          //     id: res.rows.item(i).id, image: res.rows.item(i).image, fullimage: viewImage,
          //     description: res.rows.item(i).description, claim_status: res.rows.item(i).claim_status,
          //     expense_type: res.rows.item(i).expense_type, amount: newamounttofixed, date: res.rows.item(i).date,
          //     claim_tax_return: res.rows.item(i).claim_tax_return, totalgst: res.rows.item(i).totalgst,
          //     payment_type: res.rows.item(i).payment_type
          //   });
          // }
        }
        const that = this;
        this.newlist.forEach(function (ele) {
          that.totalamount = (parseFloat(that.totalamount) + parseFloat(ele.amount)).toFixed(2);
        });
        if(this.filter.title){
          this.lists = this.filterByValue(this.lists, this.filter.title);
        } else if(this.filter.startDate && this.filter.endDate){
          this.lists = this.lists.filter(list => {
            return (moment(list.date) >= moment(this.filter.startDate) && moment(list.date) <= moment(this.filter.endDate));
          });
          console.log(this.lists)
        } else if(this.filter.startDate && !this.filter.endDate){
          this.lists = this.lists.filter(list => {
            return (moment(list.date) >= moment(this.filter.startDate));
          });
        } else if(!this.filter.startDate && this.filter.endDate){
          this.lists = this.lists.filter(list => {
            return (moment(list.date) <= moment(this.filter.endDate));
          });
        }
      } else {
        this.lists = [];
        this.newlist = [];
      }
    })
      .catch(e => {
        this.lists = [];
        this.newlist = [];
        console.log(e);
      });
  }
  details(data) {
    this.router.navigate(['/receiptdetail'], {
      queryParams: { data: JSON.stringify(data) }
    });
  }
}
