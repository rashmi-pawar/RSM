import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { StorageService } from '../storage.service';
import { NavController, ToastController, Events, LoadingController, MenuController, IonInfiniteScroll, Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { HttpClient } from '@angular/common/http';
import { PageTrack } from '../decorators/page-track.decorator';
import { SettingService } from '../service/setting.service';
import { Currency } from '../_helper/currency';
import { BackStackService } from '../service/back-stack.service';
import { Device } from '@ionic-native/device/ngx';

// import { Base64 } from '@ionic-native/base64/ngx';
import * as _ from 'lodash';
import { DateFormat } from '../_helper/date-format';

/* JSZip Legacy Function for creating ZIP : not useful */
// import { saveAs } from 'file-saver';

declare var JJzip;
declare var JSZip; // ZIP file
// declare var JSZipUtils; // ZIP file utils : not useful
declare var $: any;
declare var window;


@Component({
  selector: 'app-viewreceipt',
  templateUrl: './viewreceipt.page.html',
  styleUrls: ['./viewreceipt.page.scss']
})

@PageTrack('Receipt Manager Screen')
export class ViewreceiptPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  expenseslist: any = [];
  lists: any = [];
  viewall = false;
  isImageProcessed = false;
  show: any = true;
  isFav: any;
  monthAmountList: any = [];
  monthstotalamount: any = 0;
  showpop: any;
  back;
  isLoading = false;
  filter = 'category';
  year = '';
  userData: any = '';
  csvlist: any = [];
  newmonthlist: any = [];
  mlist: any = [];
  mlist1: any = [];
  totalamount: any = 0;
  totalmonthamount: any = 0;
  expensetotalamount: any = 0;
  categorylist: any = [];
  limit = 4;
  monthlist = [];
  monthsArray = [];
  userid: any = '';
  accessToken: any = '';
  currency = new Currency();
  zip: any; // ZIP feature
  name = "";
  osVersion = "";
  uuid = "";
  model = "";
  yearArray = [];
  dateformate = new DateFormat();

  constructor(
    private file: File,
    private zone: NgZone,
    public toastCtrl: ToastController,
    public storageService: StorageService,
    public settingService: SettingService,
    private webview: WebView,
    public router: Router,
    private events: Events,
    private backStack: BackStackService,
    private socialSharing: SocialSharing,
    private sqliteDbCopy: SqliteDbCopy,
    public loadingController: LoadingController,
    private menuCtrl: MenuController,
    private navCtrl: NavController,
    public popoverController: PopoverController,
    public http: HttpClient,
    public platform: Platform,
    public route: ActivatedRoute,
    private device: Device
    // private base64: Base64,
  ) {

    this.platform.ready().then(() => {
      this.osVersion = this.device.version;
      this.uuid = this.device.uuid;
      this.name = (window as any).device.name;
      this.model = this.device.model;
      // init in Constructor
      this.zip = new JSZip();

      console.log(this.osVersion, this.uuid, this.name, this.model);
    });

    this.route.params.subscribe(val => {
      // put the code from `ngOnInit` here
      this.yearArray = this.dateformate.getYearArray();
      this.year = this.yearArray[0];
      console.log('called router subscribe');
      this.Init();
    });

    this.isFav = false;
    this.events.subscribe('receipt:deleted', () => {
      this.lists = [];
      this.monthAmountList = [];
    });
    this.events.subscribe('receipt:updated', () => {
      this.lists = [];
      this.monthAmountList = [];
      this.viewreceipt();
    });
    this.events.subscribe('user:created', () => {
      this.userid = this.settingService.getUserId();
    });
    this.menuCtrl.enable(false);
    this.back = this.backStack.getBackStack('viewreceipt');

  }

  copyDB() {
    const context = this;
    this.sqliteDbCopy.copyDbToStorage('ionicdb.db', 0, this.file.documentsDirectory + 'RSM/', true)
      .then(res => {
        console.log('db backup created');
      })
      .catch(error => console.error(error));
  }



  ngOnInit() {

  }

  Init() {
    this.categorylist = [
      { icon: 'Group 18.png', name: 'Cost of Goods Bought' },
      { icon: 'payment.png', name: 'CIS Payments to Subcontractors' },
      { icon: 'rating.png', name: 'Staff Costs' },
      { icon: 'suitcase.png', name: 'Travel Costs' },
      { icon: 'suitcase.png', name: 'Motor Expenses' },
      { icon: 'mortgage.png', name: 'Premises Running Costs' },
      { icon: 'fax.png', name: 'Phone Charges' },
      { icon: 'fax.png', name: 'Maintenance Cost' },
      { icon: 'accounting.png', name: 'Admin Costs' },
      { icon: 'accounting.png', name: 'Business Entertainment Costs' },
      { icon: 'megaphone.png', name: 'Advertising Costs' },
      { icon: 'tax.png', name: 'Interest' },
      { icon: 'transaction.png', name: 'Financial Charges' },
      { icon: 'debt.png', name: 'Bad Debt' },
      { icon: 'briefcase.png', name: 'Professional Fees' },
      { icon: 'transaction.png', name: 'Depreciation' },
      { icon: 'transaction.png', name: 'Other' },
      { icon: 'rating.png', name: 'To Review' },
    ];
    this.userid = this.settingService.getUserId();
    console.log('init receipt', this.userid, localStorage.getItem('init'));
    this.viewreceipt();
    this.getfav();

    if (this.platform.is('ios')) {
      this.copyDB();
    }
  }

  // custom loader show
  async presentLoadingNew() {
    const context = this;
    this.isLoading = true;
    return await this.loadingController
      .create({
      })
      .then(a => {
        a.present().then(() => {
          // console.log('presented');
          if (!this.isLoading) {
            a.dismiss().then(() => console.log('abort presenting'));
          }
        });
      });
    // setTimeout(function(){
    //   context.dismissLoadingNew();
    // }, 15000);
  }

  // custom loader hide
  async dismissLoadingNew() {
    this.isLoading = false;
    return await this.loadingController
      .dismiss()
      .then(() => console.log('dismissed'));
  }

  hidee(event) {
    // console.log(event);
    if ($(event).hasClass('popup-li')) {
      if ($(event).hasClass('upload')) {
        this.checklogin('viewreceipt');
      } else {
        this.checklogin('viewreceipt');
      }
      this.showpop = false;
    } else {
      this.showpop = false;
    }
  }

  addpop() {
    if (this.showpop === true) {
      this.showpop = false;
    } else {
      this.showpop = true;
    }
  }

  changeype(event) {
    this.filter = event.target.value;
    this.lists = [];
    this.monthAmountList = [];
    this.viewreceipt();
  }

  async presentPopover(ev: any) {
    // this.dismissLoadingNew();
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  convertToCSV() {
    try {
      const array = typeof this.csvlist != 'object' ? this.csvlist : this.csvlist;
      // add header
      const header = {
        id: 'Id', date: 'Transaction Date', amount: 'Total Amount', totalgst: 'Total GST Amount',
        claim_status: '100 % Claimable ?', tax_claim_value: 'Claimable Amount', description: 'Notes',
        expense_type: 'Expense Category', payment_type: 'Payment Method', image: 'Reference Image'
      };

      let line = '';
      for (const index in header) {
        if (line != '') { line += ','; }
        line += header[index];
      }
      let str = line + '\r\n';

      // add rows
      for (let i = 0; i < array.length; i++) {
        let line = '';
        for (const index in array[i]) {
          if (line != '') { line += ','; }
          line += array[i][index];
        }
        str += line + '\r\n';
      }
      return str;
    } catch (error) {
      // console.log('convertToCSV error', error);
      return '';
    }

  }

  checklogin(pageurl, param= 'uploadtocloud') {
    if (this.totalamount) {
      this.userData = this.settingService.getUserData();
      if (this.userData !== undefined && this.userData) {
        if (this.platform.is('ios')) {
          // Export iOS
          this.exportShare();
        } else {
          this.exportAndroid();
        }
      } else {
        this.router.navigate(['/login'], {
          queryParams: { data: pageurl }
        });
      }
    } else {
      alert('No data found. Please add expense to export.');
    }
  }

  month_name(dt) {
    this.mlist = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    return this.mlist[dt.getMonth()];
  }

  selectYear(event) {
    this.year = event.target.value;
    this.lists = [];
    this.monthAmountList = [];
    this.viewreceipt();
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  goTo(url) {
    this.backStack.setBackStack(url, 'viewreceipt');
    this.navCtrl.navigateRoot('/' + url);
  }

  go(url, pagename, year) {
    const data = {
      pagename,
      year
    };
    this.router.navigate(['/' + url], {
      queryParams: { data: JSON.stringify(data) }
    });
  }

  catIcons(name) {
    let icon = '';
    this.categorylist.forEach(element => {
      if (element.name === name) {
        icon = element.icon;
      }
    });
    return icon;
  }

  // process Image for export data
  async prepareAllImages() {
    // copy database
    const context = this;
    await _.map(this.lists, async function (img, index) {
      console.log('init processing ...', context.file.dataDirectory + img.image);
      context.getFileContent(context.lists.length, context.file.dataDirectory + img.image, 'dataURL', function (base64Image) {
        console.log('init image processed');
        context.isImageProcessed = true;
        context.lists[index].imageData = base64Image.split(',')[1];
      });
    });
  }

  viewreceipt() {
    this.lists = [];
    this.totalamount = 0;
    this.expensetotalamount = 0;
    this.expenseslist = [];

    this.storageService.viewOcrYear(this.userid, this.year).then(res => {
      this.lists = [];
      this.csvlist = [];
      this.monthAmountList = [];
      this.monthstotalamount = 0;
      if (res.rows.length > 0) {

        for (let i = 0; i < res.rows.length; i++) {
          const amountText = this.currency.display(res.rows.item(i).amount);
          const amountdatatofixed = parseFloat(res.rows.item(i).amount).toFixed(2);
          const claimTaxReturnToFixed = parseFloat(res.rows.item(i).claim_tax_return).toFixed(2);
          const viewImage = this.webview.convertFileSrc(this.file.dataDirectory + res.rows.item(i).image);
          this.lists.push({
            id: res.rows.item(i).id,
            image: res.rows.item(i).image,
            fullimage: viewImage,
            description: res.rows.item(i).description,
            claim_status: res.rows.item(i).claim_status,
            expense_type: res.rows.item(i).expense_type,
            amount: amountdatatofixed,
            amountText,
            date: res.rows.item(i).date,
            claim_tax_return: claimTaxReturnToFixed,
            totalgst: res.rows.item(i).totalgst,
            payment_type: res.rows.item(i).payment_type,
            tax_claim_value: res.rows.item(i).claimtaxvalue,
            tax_claim_type: res.rows.item(i).claimtaxtype,
            month: res.rows.item(i).month,
            imageData: ''
          });

          // csv data
          let status = '';
          if (res.rows.item(i).claim_status === 'FALSE') {
            status = 'No';
          } else {
            status = 'Yes';
          }
          const dateFormat = new DateFormat();
          this.csvlist.push({
            id: res.rows.item(i).id,
            date: dateFormat.dateFormatter(res.rows.item(i).date, 'date'),
            amount: amountdatatofixed,
            totalgst: res.rows.item(i).totalgst,
            claim_status: status,
            claim_tax_return: res.rows.item(i).claim_tax_return,
            description: res.rows.item(i).description,
            expense_type: res.rows.item(i).expense_type,
            payment_type: res.rows.item(i).payment_type,
            image: res.rows.item(i).image
          });
          // end csv data
        }

        // totalamount
        this.totalamount = this.getTotalAmount(this.lists);

        // expense list
        this.expenseslist = [];
        this.expensetotalamount = 0;
        this.storageService.viewOcrExpense(this.userid, this.year).then(res => {
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              this.expenseslist.push({
                amount: parseFloat(res.rows.item(i).amount).toFixed(2),
                amountText: this.currency.display(res.rows.item(i).amount),
                expense_type: res.rows.item(i).expense_type,
                icon: this.catIcons(res.rows.item(i).expense_type),
              });
            }
            // console.log('this.expenseslist: ', this.expenseslist);
            this.totalamount = this.getTotalAmount(this.expenseslist);
            // expensetotalamount
            this.expensetotalamount = this.getTotalAmount(this.expenseslist);
          }
        });
        // end expense list

        // month list
        this.monthAmountList = [];
        this.monthstotalamount = 0;
        this.storageService.viewOcrMonth(this.userid, this.year).then(res => {
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              this.monthAmountList.push({
                amount: parseFloat(res.rows.item(i).amount).toFixed(2),
                amountText: this.currency.display(res.rows.item(i).amount),
                name: this.month_name(new Date(res.rows.item(i).date)),
                month: res.rows.item(i).month,
              });
            }
            // console.log('this.monthAmountList: ', this.monthAmountList);
            this.totalamount = this.getTotalAmount(this.monthAmountList);
            // monthstotalamount
            this.monthstotalamount = this.getTotalAmount(this.monthAmountList);
          }
        });
        // end month list

        // get base64 data
        if (this.platform.is('ios')) {
          this.prepareAllImages();
        }
      }
    }).catch(e => {
      this.lists = [];
      // console.log(e);
    });

  }

  getTotalAmount(list) {
    let totalAmount = 0;
    list.forEach((ele) => {
      totalAmount = (totalAmount + parseFloat(ele.amount));
    });

    if (isNaN(totalAmount)) {
      totalAmount = 0;
    }
    return this.currency.display(totalAmount);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Processing...',
      duration: 2000
    });
    await loading.present();
    await loading.onDidDismiss();
  }

  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingController
      .dismiss()
      .then(() => console.log('dismissed'));
  }

  async presentToast(msg) {
    // this.dismissLoadingNew();
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      mode: 'md',
      cssClass: 'customToast'
    });
    toast.present();
  }

  addToFavourites(pagename, url) {
    this.isFav = true;
    this.storageService
      .addFavourites(pagename, url, 'receipt.png', this.userid, 1)
      .then(val => {
        this.presentToast('Added to favourites');
        this.events.publish('fav:created', Date.now());
      })
      .catch(err => {
        console.log(err);
      });
  }

  removefavourites(url) {
    this.storageService.removeFavourites(url, this.userid).then(res => {
      this.getfav();
      this.presentToast('Removed from favourites');
      this.events.publish('fav:created', Date.now());
    })
      .catch(e => {
        console.log(e);
      });

  }

  getfav() {
    this.storageService
      .getfavourites('viewreceipt', this.userid)
      .then(val => {
        if (val.rows.length > 0) {
          this.isFav = true;
        } else {
          this.isFav = false;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  details(data) {
    this.router.navigate(['/receiptdetail'], {
      queryParams: { data: JSON.stringify(data) }
    });
  }

  loadData(event) {
    this.limit += 2;
    if (this.lists.length <= this.limit) {
      this.show = false;
      event.target.disabled = true;
      event.target.complete();
    }
  }

  next(value) {
    const data = {
      year: this.year,
      category: value,
      type: this.filter
    };
    this.router.navigate(['/proffesionalfee'], {
      queryParams: {
        data: JSON.stringify(data)
      }
    });
  }

  // Android Export

  exportAndroid() {
    this.presentLoading();
    const csv: any = this.convertToCSV();
    this.file.createFile(this.file.externalDataDirectory + 'RSM/', 'managereceipt' + this.year + '.csv', true)
      .then(
        success => {
          console.log('success', success);
          this.file.writeFile(this.file.externalDataDirectory + 'RSM/', 'managereceipt' + this.year + '.csv', csv, { replace: true })
            .then(
              success1 => {
                console.log('success1', success1);
                this.backupdbAndroid();
              },
              error => {
                console.log('error1', error);
              }
            ).catch(e => console.log('writeFile error', e));
        },
        (reject) => {
          console.log('createFile reject');
          console.log(JSON.stringify(reject));
        }
      );
  }

  backupdbAndroid() {
    this.sqliteDbCopy.copyDbToStorage('ionicdb.db', 1, this.file.externalDataDirectory + 'RSM/', true)
      .then(res => {
        this.createZipAndroid();
      })
      .catch(error => console.error(error));
  }

  createZipAndroid() {
    const context = this;
    this.file.checkFile(this.file.externalDataDirectory, 'RSM.zip').then(
      success => {
        this.file.removeFile(this.file.externalDataDirectory, 'RSM.zip').then(
          () => {

            const PathToFileInString = this.file.externalDataDirectory + 'RSM',
              PathToResultZip = this.file.externalDataDirectory;

            JJzip.zip(PathToFileInString, { target: PathToResultZip, name: 'RSM' },
              function (data) {
                context.uploadAndroid(PathToResultZip);
              },
              function (error) {
                context.presentToast(error.message);
                // console.log('err', error);
              }
            );
          },
          error => {
            console.log('rr', error);
          }
        );
      },
      () => {

        const PathToFileInString = this.file.externalDataDirectory + 'RSM',
          PathToResultZip = this.file.externalDataDirectory;

        JJzip.zip(PathToFileInString, { target: PathToResultZip, name: 'RSM' },
          function (data) {
            context.uploadAndroid(PathToResultZip);
          },
          function (error) {
            console.log('err', error);
          }
        );
      }
    );
  }

  uploadAndroid(data) {
    const context = this;
    this.file.checkFile(this.file.externalDataDirectory, 'RSM.zip').then(function (success) {
      const filePath = context.file.externalDataDirectory + 'RSM.zip';
      window.resolveLocalFileSystemURL(filePath, function gotFile(fileEntry) {
        fileEntry.file(function (file) {
          const reader = new FileReader();
          reader.onloadend = function () {

            const content: any = this.result;
            context.socialSharing.share('', 'RSM', content).then(function (res) {
            }).catch(function (e) {
              console.log('err', e);
            });
          };
          reader.readAsDataURL(file);
        });
      },
        function fail(e) {
          console.log('FileSystem Error');
          console.log(e);
        }
      );

    });
  }

  // IOS Export

  // Create directory : TODO - common for crossplatform
  createDirIOSNew() {
    this.file.checkDir(this.file.documentsDirectory, 'RSM').then((success) => {
      console.log('already created');
    }, error => {
      this.file.createDir(this.file.documentsDirectory, 'RSM', true).then((success) => {
        console.log('directory created');
      }, err => {
        console.log('createDir error', JSON.stringify(err));
      });
    });
  }

  // ZONE.js unpatch file
  noZonePatch(status, cb: () => void) {
    // console.log('noZonePatch', status);
    if (status === 1 && localStorage.getItem('init') === 'true') {
      try {
        (window as any).FileReader = ((window as any).FileReader as any).__zone_symbol__OriginalDelegate;
        cb();
      } catch (err) {
        console.log('noZonePatch error if');
        (window as any).FileReader = FileReader;
        cb();
      } finally {
        (window as any).FileReader = FileReader;
        cb();
      }
    } else {
      try {
        (window as any).FileReader = FileReader;
        cb();
      } catch (e) {
        console.log('noZonePatch error else');
        const unpatched = ((window as any).FileReader as any).__zone_symbol__OriginalDelegate;
        (window as any).FileReader = unpatched;
        cb();
      } finally {
        (window as any).FileReader = FileReader;
        cb();
      }
    }
  }

  // get file Data
  getFileContent(status, path, mode = 'dataURL', callback) {
    // console.log('getFileContent');
    const context = this;
    // console.log(path);
    // console.log(mode);
    // console.log('statussssssss', status);
    window.resolveLocalFileSystemURL(path, gotFile, fail);

    function fail(e) {
      console.log('FileSystem Error');
      console.log(e);
    }

    function gotFile(fileEntry) {
      fileEntry.file(function (file) {

        context.noZonePatch(status, () => {
          const reader = new FileReader();
          reader.onerror = (evt) => {
            context.zone.run(() => console.log('Error', evt));
          };
          reader.onprogress = (evt) => {
            context.zone.run(() => {
              if (evt.lengthComputable) {
                const percentLoaded = Math.round((evt.loaded / evt.total) * 100);
                // console.log(percentLoaded);
              }
            });
          };
          reader.onloadend = function (e) {
            // console.log(this);
            // context.zone.run(() => {
            // console.log('-----------------------------------------------');
            const content = this.result;
            // console.log(content);
            callback(content);
            // });
          };
          switch (mode) {
            case "text":
              reader.readAsText(file);
              break;
            case "arrayBuffer":
              reader.readAsArrayBuffer(file);
              break;
            case "binaryString":
              reader.readAsBinaryString(file);
              break;
            case "dataURL":
              reader.readAsDataURL(file);
              break;
          }
        });

      });
    }
  }

  // process Image for export data
  async prepareImgData(callback) {
    const context = this;
    const imgData = [];
    let cnt = 0;

    const companyResp = await Promise.all(this.lists.map(
      async img => {
        if (!img.imageData) {
          context.getFileContent(context.lists.length, context.file.dataDirectory + img.image, 'dataURL', function (base64Image) {
            cnt++;
            // console.log('image processed');
            imgData.push({ name: img.image, data: base64Image.split(',')[1] });
            if (context.lists.length == cnt) {
              context.getFileContent(context.lists.length, context.file.documentsDirectory + 'RSM/ionicdb.db', 'dataURL', function (dbData) {
                // console.log('db result');
                // console.log(dbData);
                imgData.push({ name: 'ionicdb.db', data: dbData.split(',')[1] });
                callback(imgData);
              });
            }
          });
        } else {
          cnt++;
          console.log('base64 found');
          imgData.push({ name: img.image, data: img.imageData });
          if (context.lists.length == cnt) {
            context.getFileContent(context.lists.length, context.file.documentsDirectory + 'RSM/ionicdb.db', 'dataURL', function (dbData) {
              // console.log('db result');
              // console.log(dbData);
              imgData.push({ name: 'ionicdb.db', data: dbData.split(',')[1] });
              callback(imgData);
            });
          }
        }
      })
    );
  }

  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  // Export for iOS : TODO - make common for cross platform
  async exportShare() {
    let callFun = true;
    // console.log('exportShare called...');
    const context = this;
    try {
      this.presentLoadingNew();

      this.createDirIOSNew();
      this.copyDB();
      const csv: any = context.convertToCSV();

      // get BASE64 data of images
      this.prepareImgData(function (imageData) {

        // 1. CSV data
        context.zip.file('managereceipt' + context.year + '.csv', csv);

        // 2. DB


        // 3. Images
        imageData.forEach(img => {
          context.zip.file(img.name, img.data, { base64: true });
          // console.log(img.name);
        });

        context.zip.generateAsync({
          type: "blob",
          compression: "DEFLATE",
          compressionOptions: {
            level: 1
          },
          streamFiles: true
        }).then(function (content) {
          if(content){
            if(callFun){
              // console.log('generateAsync');
              context.writeFileiOS(content);
              callFun = false;
            }
          }
        });
      });
    } catch (e) {
      // console.log('err', e);
      context.presentToast('Something went wrong');
    }
  }

  // Create Files
  writeFileiOS(content) {
    const context = this;
    // console.log('writeFileiOS');

    this.file.createFile(this.file.documentsDirectory + 'RSM/', 'RSM.zip', true).then(
      success => {
        // console.log('success', success, this.file.documentsDirectory);
        context.file.writeFile(this.file.documentsDirectory + 'RSM/', 'RSM.zip', content, { replace: true }).then(
          success => {
            // console.log('write file');
            // console.log(success);
            context.openZipiOS(success.nativeURL);
          },
          error => {
            // console.log(error);
            context.presentToast('Failed to export the file');
          }
        );
      },
      (error) => {
        // console.log(error);
        context.presentToast('Failed to export the file');
      }
    );
  }

  // Open sharing dialog
  openZipiOS(filePath) {
    const context = this;
    // console.log(filePath);
    this.dismissLoadingNew();
    this.socialSharing.share('', '', filePath).then(function (res) {
      console.log(res);
    }).catch(function (e) {
      // console.log('err', e);
      context.presentToast('Failed to export the file');
    });
  }

}
