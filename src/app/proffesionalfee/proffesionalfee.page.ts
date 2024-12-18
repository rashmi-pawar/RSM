import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageTrack } from '../decorators/page-track.decorator';
import { NavController, Events } from '@ionic/angular';
import { StorageService } from '../storage.service';
import { SettingService } from '../service/setting.service';
import { Currency } from '../_helper/currency';
import { DateFormat } from '../_helper/date-format';

@Component({
  selector: 'app-proffesionalfee',
  templateUrl: './proffesionalfee.page.html',
  styleUrls: ['./proffesionalfee.page.scss']
})
@PageTrack('View Receipt Screen')
export class ProffesionalfeePage implements OnInit {
  totalamount: any = 0;
  heading: any = '';
  year: any = '';
  lists: any = [];
  type: any = 'category';
  category: any = '';
  mlist: any = [];
  data: any;
  totalmonthamount: any = 0;
  userid;
  currency = new Currency();
  yearArray = [];
  dateformate = new DateFormat();
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public navCtrl: NavController,
    public storageService: StorageService,
    public settingService: SettingService,
    private events: Events,
  ) {
    this.userid = this.settingService.getUserId();
    this.yearArray = this.dateformate.getYearArray();
    this.activatedRoute.queryParams.subscribe(params => {
      this.data = JSON.parse(params.data);
      this.year = JSON.parse(params.data).year;
      this.type = JSON.parse(params.data).type;
      this.category = JSON.parse(params.data).category;

      if (this.type === 'category') {
        this.heading = JSON.parse(params.data).category;
      } else {
        this.heading = this.month_name(new Date(JSON.parse(params.data).category));
      }

      this.getData();
    });
  }

  ngOnInit() {
  }


  getData() {
    this.lists = [];
    if (this.type === 'category') {
      this.getExpense();
    } else {
      this.getMonth();
    }
  }

  details(data) {
    console.log(data);
    this.router.navigate(['/receiptdetail'], {
      queryParams: { data: JSON.stringify(data) }
    });
  }

  selectYear(event) {
    this.year = event.target.value;
    this.totalamount = 0;
    this.getData();
  }

  // get expense

  getExpense() {
    // expense list
    this.totalamount = 0;
    if (this.category !== '') {
      this.storageService.viewOcrByExpense(this.userid, this.year, this.category).then(res => {
        if (res.rows.length > 0) {
          this.lists = [];
          for (let i = 0; i < res.rows.length; i++) {
            this.lists.push({
              amount: parseFloat(res.rows.item(i).amount).toFixed(2),
              amountText: this.currency.display(res.rows.item(i).amount),
              date: res.rows.item(i).date,
              id: res.rows.item(i).id,
              description: res.rows.item(i).description
            });
          }
          this.totalamount = this.getTotalAmount(this.lists);
        }
      });
    }
    // end expense list
  }


  // get month
  getMonth() {
    // month list
    this.totalamount = 0;
    if (this.category !== '') {
      this.storageService.viewOcrByMonth(this.userid, this.year, this.category).then(res => {
        if (res.rows.length > 0) {
          this.lists = [];
          for (let i = 0; i < res.rows.length; i++) {
            this.lists.push({
              amount: parseFloat(res.rows.item(i).amount).toFixed(2),
              amountText: this.currency.display(res.rows.item(i).amount),
              date: res.rows.item(i).date,
              id: res.rows.item(i).id,
              description: res.rows.item(i).description
            });
          }
          this.totalamount = this.getTotalAmount(this.lists);
        }
      });
    }
    // end month list
  }

  getTotalAmount(list) {
    let totalAmount = 0;
    if (list.length > 0) {
      list.forEach((ele) => {
        totalAmount = (totalAmount + parseFloat(ele.amount));
      });
    }

    if (isNaN(totalAmount)) {
      totalAmount = 0;
    }

    return this.currency.display(totalAmount);
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

}
