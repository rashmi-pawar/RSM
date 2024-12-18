import { Chart } from 'chart.js';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController, NavController, Events, MenuController } from '@ionic/angular';
import { StorageService } from '../../storage.service';
import { UnitHelper } from 'src/app/_helper/unitHelper';
import { SettingService } from 'src/app/service/setting.service';
import { BackStackService } from 'src/app/service/back-stack.service';
import { PageTrack } from "../../decorators/page-track.decorator";
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {File} from '@ionic-native/file/ngx';


declare var $: any;

@Component({
  selector: 'app-triplogbook',
  templateUrl: './triplogbook.page.html',
  styleUrls: ['./triplogbook.page.scss'],
})

@PageTrack("Trip Logbook Screen")
export class TriplogbookPage implements OnInit {
  @ViewChild('myChart') barCanvas;
  barChart: any;
  buisnesslist: any = [];
  personallist: any = [];
  isFav: any = false;
  mlist = [];
  userid: any = '';
  items: any = [];
  newlist: any = [];
  barlist: any = [];
  filter = 'business';
  unit: any = 'km';
  unitHelper = new UnitHelper();
  back;
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public menuCtrl: MenuController,
    private storageService: StorageService,
    private settingService: SettingService,
    private backStack: BackStackService,
    private webview: WebView,
    private file: File,
    public events: Events, ) {
    this.menuCtrl.enable(false);
    this.events.subscribe('user:created', (time) => {
      this.userid = this.settingService.getUserId();
      this.getfav();
    });
    this.back = this.backStack.getBackStack('triplogbook');

  }

  ionViewWillEnter() {
    this.storageService.getbyid('usersettings', this.userid)
      .then(res => {
        if (res.rows.length > 0) {
          this.unit = res.rows.item(0).unit;
        } else {
          this.unit = 'km';
        }
      });
    this.viewtrips(this.filter);
  }

  ngOnInit() {
    this.userid = this.settingService.getUserId();
    this.getyearrecords();
    this.getfav();
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

  addToFavourites(pagename, url) {
    this.isFav = true;
    this.storageService
      .addFavourites(pagename, url, 'logbook.png', this.userid, 1)
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
      .getfavourites('triplogbook', this.userid)
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

  initchart(label, chartData, type) {
    console.log('type:', type);
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: label,
        datasets: [{
          label: 'Distance',
          backgroundColor: 'rgba(249,170,56,1)',
          borderColor: 'rgba(249,170,56,1)',
          data: chartData
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              fontSize: type === 'month' ? 10 : 8,
              maxRotation: 0
            }
          }
          ],
          yAxes: [{
            gridLines: {
              display: false,
            },
            ticks: {
              display: false,
            }
          }
          ]
        }
      }
    });
  }

  goto(url) {
    if (url === 'logtrip') {
      localStorage.removeItem('edittrip');
      localStorage.removeItem('tripdata');
    }
    this.backStack.setBackStack(url, 'triplogbook');
    this.navCtrl.navigateForward('/' + url);
  }

  selectVal() {
    this.viewtrips(this.filter);
    this.getyearrecords();
  }

  details(data) {
    localStorage.setItem('backstatus', '3');
    localStorage.setItem('singlereceipt', JSON.stringify(data));
    this.navCtrl.navigateForward('/receiptdetail');
  }

  detail(data) {
    localStorage.setItem('tripdata', JSON.stringify(data));
    this.navCtrl.navigateRoot('/viewtrip');
  }

  barchart(event, value) {
    $('.abc').removeClass('active');
    $(event).addClass('active');
    if (value === 'year') {
      this.getyearrecords();
    } else if (value === 'month') {
      this.getmonthrecords();
    } else {
      this.getweekrecords();
    }
  }

  getweekrecords() {
    const context = this;
    context.barlist = [];
    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const arr = [0, 0, 0, 0, 0, 0, 0];
    this.storageService
      .weekChart(this.userid, this.filter)
      .then((res) => {
        if (res.rows.length > 0) {
          const context1 = context;
          for (let i = 0; i < res.rows.length; i++) {
            let finalDistance;
            if (this.unit === 'km') {
              finalDistance = res.rows.item(i).distance;
            } else {
              finalDistance = this.unitHelper.kmTomiles(res.rows.item(i).distance);
            }
            context1.barlist.push({
              distance: finalDistance,
              week: res.rows.item(i).week,
            });
          }
          // tslint:disable-next-line: prefer-for-of
          for (let k = 0; k < context1.barlist.length; k++) {
            if (context1.barlist[k].distance) {
              arr[parseInt(context1.barlist[k].week) - 1] = context1.barlist[k].distance;
            }
          }
          context1.initchart(labels, arr, 'week');
        } else {
          context.barlist = [];
          context.initchart(labels, arr, 'week');
        }
      })
      .catch((err) => {
        console.log(err);
        context.initchart(labels, arr, 'week');
      });
  }

  getmonthrecords() {
    const that = this;
    this.barlist = [];
    const Day = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    const labels = [];
    if (Day) {
      for (let i = 1; i < Day + 1; i++) {
        labels.push(i);
      }
    }

    const arr = [];
    this.storageService
      .monthChart(this.userid, this.filter)
      .then((res) => {
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            let finalDistance;
            if (this.unit === 'km') {
              finalDistance = res.rows.item(i).distance;
            } else {
              finalDistance = this.unitHelper.kmTomiles(res.rows.item(i).distance);
            }
            that.barlist.push({
              day: res.rows.item(i).day,
              distance: finalDistance,
            });
          }
          // console.log('this.barlist:', that.barlist);
          for (let k = 0; k < that.barlist.length; k++) {
            if (that.barlist[k].distance) {
              arr[parseInt(that.barlist[k].day) - 1] = that.barlist[k].distance;
            }
          }
          console.log('chart array: ', arr);
          that.initchart(labels, arr, 'month');
        } else {
          that.barlist = [];
          that.initchart(labels, arr, 'month');
        }
      })
      .catch((err) => {
        console.log(err);
        that.barlist = [];
        that.initchart(labels, arr, 'month');
      });
  }


  getyearrecords() {
    const context = this;
    context.barlist = [];
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const arr = [0, 0, 0, 0, 0, 0, 0];
    this.storageService
      .yearChart(this.userid, this.filter)
      .then((res) => {
        // console.log(res);
        const context1 = context;
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {

            let finalDistance;
            if (this.unit === 'km') {
              finalDistance = res.rows.item(i).distance;
            } else {
              finalDistance = this.unitHelper.kmTomiles(res.rows.item(i).distance);
            }

            context1.barlist.push({
              distance: finalDistance,
              month: res.rows.item(i).month,
            });

          }
          // console.log('context1.barlist', context1.barlist);
          for (let k = 0; k < context1.barlist.length; k++) {
            if (context1.barlist[k].distance) {
              arr[parseInt(context1.barlist[k].month) - 1] = context1.barlist[k].distance;
            }
          }
          // console.log(arr);
          context1.initchart(labels, arr, 'year');
        } else {
          context1.barlist = [];
          context1.initchart(labels, arr, 'year');
        }
      })
      .catch((err) => {
        console.log(err);
        context.initchart(labels, arr, 'year');
      });
  }

  viewtrips(data) {
    this.items = [];
    this.storageService
      .viewTripByVehicleType(this.userid, data, 3)
      .then(res => {
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            let finalDistance;
            if (this.unit === 'km') {
              finalDistance = res.rows.item(i).distance;
            } else {
              finalDistance = this.unitHelper.kmTomiles(res.rows.item(i).distance);
            }
            const viewStartImage = this.webview.convertFileSrc(this.file.dataDirectory + res.rows.item(i).photoStart);
            const viewEndImage = this.webview.convertFileSrc(this.file.dataDirectory + res.rows.item(i).photoEnd);
            this.items.push({
              id: res.rows.item(i).id,
              distance: finalDistance,
              unit: this.unit,
              origin: res.rows.item(i).origin,
              destination: res.rows.item(i).destination,
              vehicleType: res.rows.item(i).vehicleType,
              vehicleName: res.rows.item(i).vehicleName,
              startdate: res.rows.item(i).startdate,
              enddate: res.rows.item(i).enddate,
              starttime: res.rows.item(i).starttime,
              endtime: res.rows.item(i).endtime,
              userid: res.rows.item(i).userid,
              notes: res.rows.item(i).notes,
              viewStartImage,
              viewEndImage,
              photoStart: res.rows.item(i).photoStart,
              photoEnd: res.rows.item(i).photoEnd
            });
          }
        } else {
          this.items = [];
        }
      })
      .catch(e => {
        this.items = [];
        console.log(e);
      });
  }
}
