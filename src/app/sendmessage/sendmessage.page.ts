import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import {ToastController, NavController, LoadingController, Platform} from '@ionic/angular';
import { PageTrack } from '../decorators/page-track.decorator';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SettingService } from '../service/setting.service';
import { BackStackService } from '../service/back-stack.service';

declare var Email;
@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.page.html',
  styleUrls: ['./sendmessage.page.scss']
})
@PageTrack('Send Message Screen')
export class SendmessagePage implements OnInit {
  public onAddForm: FormGroup;

  public name = '';
  public email = '';
  public number = '';
  userData: any;
  back;

  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    public loadingController: LoadingController,
    private apiService: ApiService,
    private backStack: BackStackService,
    public platform: Platform,
    private settingService: SettingService,
    public iab: InAppBrowser,
    public toastCtrl: ToastController
  ) {
    this.onAddForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'
          )
        ])
      ),
      name: new FormControl('', Validators.compose([Validators.required, Validators.pattern(
        '([\ A-Za-z]+)'
      )])),
      message: new FormControl('', Validators.compose([Validators.required])),
      mobile_no: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.pattern('[0-9]{10,10}'), Validators.minLength(10), Validators.maxLength(10)])
      )
    });
    this.back = this.backStack.getBackStack('sendmessage');
  }

  ngOnInit() {
    if (this.settingService.getUserData() !== undefined && this.settingService.getUserData()) {
      this.userData = this.settingService.getUserData();
      this.name = this.userData.first_name + ' ' + this.userData.last_name;
      this.email = this.userData.email;
      this.number = this.userData.mobile_no;
    } else {
      this.name = '';
      this.email = '';
      this.number = '';
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
  send() {
    this.presentLoading();
    const data = {
      email: this.onAddForm.value.email,
      phone: this.onAddForm.value.mobile_no,
      name: this.onAddForm.value.name,
      message: this.onAddForm.value.message,
    };
    this.apiService.sendEmail(data).subscribe(
      res => {
        if (res['status'] == true) {
          this.onAddForm.reset();
          this.presentToast(res['message']);
          this.navCtrl.navigateRoot('/contactus');
        } else {
          this.presentToast('Somthing Went Wrong,Please try again');
        }
      },
      err => {
        console.log(err.error.message);
        this.presentToast('Somthing Went Wrong,Please try again');
      }
    );
  }

  goTo(url) {
    this.iab.create(url, '_system', {
      location: this.platform.is('android') ? 'yes' : 'no',
      hideurlbar: 'yes',
      hidenavigationbuttons: 'yes',
      closebuttoncaption: 'Back'
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Sending message...',
      duration: 2000
    });
    await loading.present();
    await loading.onDidDismiss();
  }
}

