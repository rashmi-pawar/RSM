import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastController, Events, LoadingController } from '@ionic/angular';
import { NotificationService } from '../service/notification.service';
import { PageTrack } from '../decorators/page-track.decorator';
import { SettingService } from '../service/setting.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss']
})
@PageTrack('Subscription Screen')
export class SubscriptionPage implements OnInit {
  list: any = [];
  subscribeId: any = [];
  checkedlist: any = [];
  isshow: any;
  constructor(
    public toastCtrl: ToastController,
    private apiService: ApiService,
    public events: Events,
    public loadingController: LoadingController,
    public settingService: SettingService,
    private pushNotificationService: NotificationService
  ) {
    events.subscribe('sub:created', time => {
      this.subscribeId = [];
      this.checkedlist = [];
      this.subscriptionList();
      this.usersubscriptionlist();
    });
  }

  ngOnInit() {
    this.subscriptionList();
    this.usersubscriptionlist();
    this.isshow = false;
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'loading',
      duration: 2000
    });
    await loading.present();
    await loading.onDidDismiss();
  }
  subscriptionList() {
    this.presentLoading();
    this.apiService.subscriptionlist(this.settingService.getToken()).subscribe(
      res => {
        if (res['status'] == true) {
          this.list = res['data'];
        } else {
          this.list = [];
        }
      },
      err => {
        console.log(err.error.message);
      }
    );
  }
  usersubscriptionlist() {
    this.apiService
      .usersubscriptionlist(this.settingService.getToken())
      .subscribe(
        res => {
          if (res['status'] == true) {
            if (res['data'].length) {
              for (var i = 0; i < res['data'].length; i++) {
                this.checkedlist.push(res['data'][i].id);
                this.subscribeId.push(res['data'][i].id);
              }
            }
          } else {
          }
        },
        err => {
          console.log(err.error.message);
        }
      );
  }
  firebaseTopicSubscription() {
    const unsubscribedTopicList = this.list.filter(x =>
      this.checkedlist.includes(x.id)
    );
    unsubscribedTopicList.forEach(item => {
      this.pushNotificationService.pushObject.unsubscribe(
        item.title.replace(' ', '')
      );
    });
    const subscribedTopicList = this.list.filter(x =>
      this.subscribeId.includes(x.id)
    );
    subscribedTopicList.forEach(item => {
      this.pushNotificationService.pushObject.subscribe(
        item.title.replace(' ', '')
      );
    });
  }
  checked(value, index) {
    var push = 0;
    if (this.subscribeId.length > 0) {
      for (var i = 0; i < this.subscribeId.length; i++) {
        if (parseInt(this.subscribeId[i]) == parseInt(value)) {
          this.subscribeId.splice(i, 1);
          push = 1;
        }
      }
      if (push == 0) {
        this.subscribeId.push(value);
      }
    } else {
      this.subscribeId.push(value);
    }
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
  subscribe() {
    if (this.subscribeId.length > 0) {
      var data = {
        user_id: this.settingService.getUserId(),
        subscription_id: this.subscribeId
      };
      this.apiService.subscribe(data, this.settingService.getToken()).subscribe(
        res => {
          if (res['status'] == true) {
            this.firebaseTopicSubscription();
            this.presentToast(res['message']);
          } else {
            this.isshow = true;
          }
        },
        err => {
          console.log(err.error.message);
        }
      );
    } else {
      this.presentToast('First add subscription list');
    }
  }
}
