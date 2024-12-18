import { Component, OnInit } from '@angular/core';
import {BackStackService} from '../service/back-stack.service';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {LoadingController, ModalController, NavController, Platform, ToastController} from '@ionic/angular';
import {ApiService} from '../api.service';
import * as moment from 'moment';
import {NavigationExtras} from '@angular/router';
import { isEmpty } from 'lodash';

@Component({
  selector: 'app-current-events',
  templateUrl: './current-events.page.html',
  styleUrls: ['./current-events.page.scss'],
})
export class CurrentEventsPage implements OnInit {
  back;
  eventList: any = [];
  isLoading = false;
  isDataReceived = true;
  public items: any = [];
  sortBy = 'date';
  orderBy = 'desc';
  constructor(
      private backStack: BackStackService,
      private iab: InAppBrowser,
      public navCtrl: NavController,
      public toastCtrl: ToastController,
      public loadingController: LoadingController,
      private apiService: ApiService,
      public modalController: ModalController,
      public platform: Platform
  ) {
    this.back = this.backStack.getBackStack('my-events');
    this.items = [];
  }

  ngOnInit() {
    this.getCurrentEventList();
  }

  onSortBy(option) {
    this.sortBy = option;
    this.orderBy = this.orderBy === 'desc' ? 'asc' : 'desc';
    this.getCurrentEventList();
  }

  goto(url){
    this.navCtrl.navigateRoot('/' + url);
  }

  formatDate(date) {
    return moment(date).format('dddd DD MMM yy');
  }
  timeConvert(time) {
    // Check correct time format and split into components
    if(!time){
      return '';
    }
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
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
  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      mode: 'md',
      cssClass: 'customToast'
    });
    toast.present();
  }

  getCurrentEventList() {
    this.presentLoading();
    this.apiService.getCurrentEventList(this.sortBy, this.orderBy).subscribe(result => {
      if (result.status) {
        this.items = result.events;
      }
      this.dismissLoading();
    }, error => {
      if (error && error.error) {
        this.presentToast(error.error.message);
      }
      if (error.status === 401) {
        this.apiService.logout('/my-events');
      }
    });
  }

  isEmpty(string) {
    if(string) {
      return isEmpty(string.trim());
    }
    return true;
  }

  openUpcomingEvents() {
    this.iab.create(localStorage.getItem('upcomingEventURL'), '_blank', {
      location: this.platform.is('android') ? 'yes' : 'no',
      hideurlbar: 'yes',
      hidenavigationbuttons: 'yes',
      closebuttoncaption: 'Back'
    });
  }

  gotoPage(data) {
    const navigationExtras: NavigationExtras = {
      queryParams: {id: data.id}
    };
    // this.presentModal(data);
    this.navCtrl.navigateForward('/event-detail', navigationExtras);
  }

}
