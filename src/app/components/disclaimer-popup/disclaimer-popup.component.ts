import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, NavController } from '@ionic/angular';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { SettingService } from 'src/app/service/setting.service';

declare var $: any;

@Component({
  selector: 'app-disclaimer-popup',
  templateUrl: './disclaimer-popup.component.html',
  styleUrls: ['./disclaimer-popup.component.scss'],
})
export class DisclaimerPopupComponent implements OnInit {

  checked = false;

  constructor(private modalController: ModalController,
              public toastCtrl: ToastController,
              private settingService: SettingService
  ) {
  }

  ngOnInit() {

  }

  checkbox(event) {
    if (event.target.checked) {
      this.checked = true;
    } else {
      this.checked = false;
    }
  }



  action(action) {
    if (action === 'okay') {
      if (this.checked) {
        this.settingService.setDisclaimer(true);
      } else {
        this.settingService.setDisclaimer(false);
      }
      this.dismiss(true);
    } else {
      this.dismiss(false);
    }
  }

  dismiss(result) {
    this.modalController.dismiss(result);
  }

}
