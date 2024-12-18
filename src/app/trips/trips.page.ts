import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, Events } from '@ionic/angular';
import { StorageService } from '../storage.service';
import { HttpClient } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { File } from '@ionic-native/file/ngx';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { PageTrack } from '../decorators/page-track.decorator';
import { SettingService } from '../service/setting.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss']
})
@PageTrack('Trips Screen')
export class TripsPage implements OnInit {
  items: any = [];
  userid: any = '';
  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
    public toastCtrl: ToastController,
    private storageService: StorageService,
    private settingService: SettingService,
    private sqlitePorter: SQLitePorter,
    private file: File,
    private sqlite: SQLite,
    private firebaseAnalytics: FirebaseAnalytics,
    public events: Events
  ) {
    this.items = [];
    this.firebaseAnalytics.setCurrentScreen('tripsScreen');
    this.events.subscribe('user:created', (time) => {
      this.userid = this.settingService.getUserId();
    });
  }

  ngOnInit() {
    this.userid = this.settingService.getUserId();
    this.viewtrips();
  }
  goTo(path: any) {
    this.navCtrl.navigateRoot('/' + path);
  }
  shoHide() {
    const x = document.getElementById('loc');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
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
  viewtrips() {
    this.storageService
      .viewTrip(this.userid)
      .then(res => {
        this.items = [];
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            this.items.push({
              id: res.rows.item(i).id,
              origin: res.rows.item(i).origin,
              destination: res.rows.item(i).destination,
              mode: res.rows.item(i).mode,
              distance: res.rows.item(i).distance,
              unit: res.rows.item(i).unit,
              vehicleType: res.rows.item(i).vehicleType,
              date: res.rows.item(i).date
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

  pressed(event) {
    console.log('event', event);
  }

  export() {
    const csv: any = this.convertToCSV();
    this.file
      .createFile(this.file.externalDataDirectory + 'RSM/', 'trips.csv', true)
      .then(
        success => {
          this.file
            .writeFile(
              this.file.externalDataDirectory + 'RSM/',
              'trips.csv',
              csv
            )
            .then(
              success => { },
              error => {
                console.log('rr', error);
              }
            );
        },
        error => { }
      );
  }
  convertToCSV() {
    let csv: any = '';
    let line: any = '';

    const SpT = this.items[0].length;
    const anzahlTeams = this.items.length;

    // Header
    for (let i = 0; i < anzahlTeams; i++) {
      if (line != '') { line += ';'; }
      line += 'Team ' + (i + 1);
    }
    csv += line + '\r\n';

    // Teams
    for (let i = 0; i < SpT; i++) {
      line = '';
      for (let j = 0; j < anzahlTeams; j++) {
        if (line != '') { line += ';'; }

        line += this.items[j][i];
      }
      csv += line + '\r\n';
    }
    console.log(csv);
    return csv;
  }
}
