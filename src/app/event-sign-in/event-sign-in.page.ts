import { Component, OnInit } from '@angular/core';
import {ApiService, baseUrl} from '../api.service';
import {ToastController, NavController, Events, ActionSheetController, LoadingController} from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SettingService } from '../service/setting.service';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-event-sign-in',
  templateUrl: './event-sign-in.page.html',
  styleUrls: ['./event-sign-in.page.scss']
})
export class EventSignInPage implements OnInit {
  public onAddForm: FormGroup;
  userData: any;
  isLoading = false;
  isNotregister = false;
  event_id= '';
  userid;
  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    private apiService: ApiService,
    private settingService: SettingService,
    public toastCtrl: ToastController,
    public actionSheetController: ActionSheetController,
    public events: Events,
    public webview: WebView,
    public router: Router,
    private barcodeScanner: BarcodeScanner,
    public activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
  ) {
    this.userid = this.settingService.getUserId(); 
    this.events.subscribe("user:created", (time) => {
      this.userid = this.settingService.getUserId();      
    });
    
  
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.event_id = params.event_id
    });
    this.userData = this.settingService.getUserData();
    this.onAddForm = this.formBuilder.group({
      email: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      mobile_no: new FormControl(''),
      post_code: new FormControl(''),
      linkedin_url: new FormControl(''),
      is_agree_share_detail: new FormControl(1),
      is_share_first_name: new FormControl(1),
      is_share_last_name: new FormControl(1),
      is_share_email: new FormControl(1),
      is_share_mobile: new FormControl(0),
      is_share_post_code: new FormControl(0),
      is_share_linkedin_url: new FormControl(0),
    });
    if(this.userData)
    this.onAddForm.patchValue({
      firstname: this.userData.first_name ? this.userData.first_name : '',
      lastname: this.userData.last_name ? this.userData.last_name : '',
      mobile_no: this.userData.mobile_no ? this.userData.mobile_no : '',
      email: this.userData.email ? this.userData.email : '',
      post_code: this.userData.zip ? this.userData.zip : '',
      is_share_first_name: this.userData.first_name ? 1 : 0,
      is_share_last_name: this.userData.last_name ? 1 : 0,
      is_share_mobile: this.userData.mobile_no ? 1 : 0,
      is_share_email: this.userData.email ? 1 : 0,
      is_share_post_code: this.userData.zip ? 1 : 0,
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

  isValidEnventId(){ return Boolean(this.event_id) && this.event_id != 'null'}

  ngOnInit() {
    
  }

  ionViewDidEnter() {
    if(this.isValidEnventId() && this.userid) {
      this.checkEventAttandieesStatus();
    } else {
      this.scanQR();  
    }
  }

  scanQR(){
    if (!this.isValidEnventId()) {
      this.barcodeScanner
        .scan()
        .then((barcodeData) => {
          console.log("Barcode data");
          console.log(barcodeData.text);
          if (barcodeData.text) {
            const queryParam = barcodeData.text.split("?");
            const urlParams: any = new URLSearchParams(queryParam[1]);
            this.event_id = urlParams.get("event_id");
            // this.redirectToEventSignIn(barcodeData.text);
            this.checkEventAttandieesStatus();
          }
        })
        .catch((err) => {
          console.log("Error", err);
        });
    } else {
      this.presentToast("Invalid event id")
      // this.router.navigate(["/"], { queryParams: { previosURL: '' }});
    }
  }

  checkEventAttandieesStatus() {
    this.presentLoading();
    this.apiService.getAttendeesStatusCheck(this.userid, this.event_id).subscribe(result => {
      console.log(result);
      this.dismissLoading();
      if(result.data && result.data.length > 0){
        this.presentToast('Event Sign-in Successfull');
        this.goTo('my-events');
      } else {
        // this.isNotregister = true;
        // this.scanQR(); 
        this.update();
      }
    }, error => {
      console.log(error);
      this.presentToast(error.error.message);
      this.goTo('/tabs/dashboard');
      // this.isNotregister = true;
      this.dismissLoading();
    })  
  }

  update() {
    
    if(this.userData && this.userData.id) {
      this.presentLoading();
      let data: any = {
        user_id: this.userData.id,
        event_id: this.event_id,
        first_name: this.onAddForm.value.firstname,
        last_name: this.onAddForm.value.lastname,
        mobile_no: this.onAddForm.value.mobile_no,
        email: this.onAddForm.value.email,
        post_code: this.onAddForm.value.post_code,
        auth_token: this.settingService.getToken(),
        linkedin_url: this.onAddForm.value.linkedin_url,
        is_event_attended: 1
      };
      if(this.onAddForm.value.is_agree_share_detail){
        data = {
          ...data,
          is_agree_share_detail: this.onAddForm.value.is_agree_share_detail,
          is_share_first_name: this.onAddForm.value.is_share_first_name,
          is_share_last_name: this.onAddForm.value.is_share_last_name,
          is_share_email: this.onAddForm.value.is_share_email,
          is_share_mobile: this.onAddForm.value.is_share_mobile,
          is_share_post_code: this.onAddForm.value.is_share_post_code,
          is_share_linkedin_url: this.onAddForm.value.is_share_linkedin_url,
        }
      }
      this.apiService.addEventAttendees(data).subscribe(
        res => {
          if (res.status === true) {
            this.presentToast('Event Sign-in Successfull');
            this.goTo('my-events');
          } else {
            this.presentToast(res.message);
          }
          this.dismissLoading();
        },
        err => {
          console.log(err);
          this.dismissLoading();
          this.presentToast(err.error.message);
          console.log(err.error.message);
        }
      );
    } else {
      this.presentToast('Please login and try again');
    }
    
  }

  goTo(url) {
    this.navCtrl.navigateRoot('/' + url);
  }
}
  