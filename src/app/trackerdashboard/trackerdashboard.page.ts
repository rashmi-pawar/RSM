import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';
import { ModalController, NavController, ToastController, AlertController, Events } from '@ionic/angular';
import { PageTrack } from '../decorators/page-track.decorator';
import { SettingService } from '../service/setting.service';

@Component({
  selector: 'app-trackerdashboard',
  templateUrl: './trackerdashboard.page.html',
  styleUrls: ['./trackerdashboard.page.scss']
})
@PageTrack('Tracker Dashboard')
export class TrackerdashboardPage implements OnInit {
  vehiclelist: any = [];
  vehicleType: any = '';
  userid: any = '';
  constructor(
    private storageService: StorageService,
    private settingService: SettingService,
    public modalController: ModalController,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertController: AlertController,
    public router: Router,
    public events: Events
  ) {
    this.events.subscribe('user:created', (time) => {
      this.userid = this.settingService.getUserId();
    });
  }

  presentAlertPrompt(){
    console.log('presentAlertPrompt')
  }

  ngOnInit() {
    this.userid = this.settingService.getUserId();
    this.viewVehicletype();
  }
  createTable() {
    this.storageService
      .createVehicleTable()
      .then(res => {
      })
      .catch(error => {
        console.log(error);
      });
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

  viewVehicletype() {
    this.vehiclelist = [];
    this.storageService
      .viewVehicle(this.userid)
      .then(res => {
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            this.vehiclelist.push({
              id: res.rows.item(i).id,
              name: res.rows.item(i).name,
              type: res.rows.item(i).type,
              date: res.rows.item(i).date
            });
          }
        } else {
          this.vehiclelist = [];
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Choose trip type',
      buttons: [
        {
          text: 'Buisness',
          cssClass: 'secondary',
          handler: () => {
            this.router.navigate(['/tracking'], {
              queryParams: {
                vehicleType: this.vehicleType,
                tripType: 'Buisness'
              }
            });
          }
        },
        {
          text: 'Personal',
          handler: data => {
            this.router.navigate(['/tracking'], {
              queryParams: {
                vehicleType: this.vehicleType,
                tripType: 'Personal'
              }
            });
          }
        }
      ]
    });

    await alert.present();
  }
  goTo(param = 'track') {
    if (this.vehicleType === '') {
      this.presentToast('Please select vechile');
    } else {
      this.presentAlert();
    }
  }
}
