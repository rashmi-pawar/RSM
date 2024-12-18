import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, Events, MenuController } from '@ionic/angular';
import { PageTrack } from '../decorators/page-track.decorator';
import { SettingService } from '../service/setting.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
@PageTrack('Settings Screen')
export class SettingsPage implements OnInit {
  userData: any;
  buttonItems: any = {};
  constructor(
    private navCtrl: NavController,
    public events: Events,
    private toastCtrl: ToastController,
    private settingService: SettingService,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false);
    this.userData = this.settingService.getUserData();

    const that = this;
    if (this.userData !== undefined && this.userData) {
      that.buttonItems = {
        name: 'Logout',
        icon: 'person'
      };
    } else {
      that.buttonItems = {
        name: 'Login',
        icon: 'person'
      };
    }
    events.subscribe('user:created', (type) => {
      this.userData = this.settingService.getUserData();
      if (type === 'logout') {
        that.buttonItems = {
          name: 'Login',
          icon: 'person'
        };
      } else {
        that.buttonItems = {
          name: 'Logout',
          icon: 'person'
        };
      }
    });
  }

  ngOnInit() { }
  goTo(path: any) {
    this.navCtrl.navigateRoot('/' + path);
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
  logout() {
    this.settingService.clear();
    this.events.publish('user:created', 'logout');
    this.presentToast('Logout Successfully');
    this.navCtrl.navigateRoot('/tabs/dashboard');
  }
}
