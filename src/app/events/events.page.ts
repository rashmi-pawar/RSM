import { Component, OnInit } from '@angular/core';
import {NavigationExtras} from '@angular/router';
import {BackStackService} from '../service/back-stack.service';
import {LoadingController, ModalController, NavController, Platform, ToastController} from '@ionic/angular';
import {ApiService} from '../api.service';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import * as moment from 'moment';
import {EventDetailPage} from '../event-detail/event-detail.page';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  back;
  eventList: any = [];
  isLoading = false;
  isDataReceived = false;
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
    this.back = this.backStack.getBackStack('events');
  }

  ngOnInit() {
    this.getMyEventList();
  }
  async presentModal(event) {
    const modal = await this.modalController.create({
      component: EventDetailPage,
      cssClass: 'my-custom-detail-modal',
      componentProps: {
        eventId: event.id,
        isModal: true
      }
    });
    return await modal.present();
  }
  dismissModal() {
    this.modalController.dismiss({
      dismissed: true
    });
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
  formatDate(date) {
    return moment(date).format('DD/MM/yy');
  }
  getMyEventList() {
    this.presentLoading();
    this.apiService.getMyEventList().subscribe(result => {
      this.isDataReceived = true;
      if (result.status) {
        this.eventList = result.events;
      }
      this.dismissLoading();
    }, error => {
      this.dismissLoading();
      if (error && error.error) {
        this.presentToast(error.error.message);
      }
      if (error.status === 401) {
        this.apiService.logout('/my-events');
      }
    });
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
      queryParams: { id: data.id }
    };
    this.presentModal(data);
    // this.navCtrl.navigateForward('/event-detail', navigationExtras);
  }
}
