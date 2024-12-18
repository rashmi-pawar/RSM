import {Component, OnInit, ViewChild} from '@angular/core';
import {BackStackService} from '../service/back-stack.service';
import {IonInfiniteScroll, LoadingController} from '@ionic/angular';
import {ApiService} from '../api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  back;
  notificationList: any = [];
  page = 1;
  isLoading = true;
  isProcessComplete = false;
  showpop = false;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private backStack: BackStackService, private apiService: ApiService, public loadingController: LoadingController,) {
    this.back = this.backStack.getBackStack('notification');
  }

  ngOnInit() {
    this.loadData(null);
  }

  async presentPopover(ev: any, data: any) {
    this.showpop = true;
  }
  hidee() {
    this.showpop = false;
  }

  formatDate(date) {
    return moment(date).format('DD MMM, yyyy');
  }
  
  markAllAsRead(){
    this.hidee();
    this.presentLoading();
      this.apiService.markAllAsReadNotification().subscribe(res => {
        this.isProcessComplete = true;
        if (res.status === true) {
          this.notificationList = [];
          this.page = 1;
          this.loadData(null);
        } else {
          this.dismissLoading();
        }
      })
  }

  clearAll(){
    this.hidee();
    this.presentLoading();
    this.apiService.clearAllNotification().subscribe(res => {
      this.isProcessComplete = true;
      if (res.status === true) {
        this.notificationList = [];
        this.page = 1;
        this.loadData(null);
      } else {
        this.dismissLoading();
      }
    })
  }
  
  async presentLoading() {
    this.isLoading = true;
    const loading = await this.loadingController.create({
      message: 'loading',
      duration: 3000
    });
    loading.present();
    loading.onDidDismiss();
  }
  async dismissLoading() {
    console.log('dismissed call')
    this.isLoading = false;
    return await this.loadingController
        .dismiss()
        .then(() => console.log('dismissed'));
  }
  loadData(event) {
    this.presentLoading();
    setTimeout(() => {
      this.apiService.getNotificationList({ page: this.page, limit: 10 }).subscribe(res => {
        this.isProcessComplete = true;
        this.dismissLoading();
        if (res.status === true) {
          this.page += 1;
          this.notificationList.push(...res.data);
          if (event && res.data.length < 10) {
            event.target.disabled = true;
          }
          if (event) {
            event.target.complete();
          }
        }
      }, error => {
        this.isProcessComplete = true;
      });
    }, 500);
  }
}
