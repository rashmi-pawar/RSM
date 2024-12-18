import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { ApiService } from "../api.service";
import { ToastController, NavController } from "@ionic/angular";
import { UniqueDeviceID } from "@ionic-native/unique-device-id/ngx";
import { HttpClient } from "@angular/common/http";
import { SettingService } from "../service/setting.service";
@Component({
  selector: "app-signupstep2",
  templateUrl: "./signupstep2.page.html",
  styleUrls: ["./signupstep2.page.scss"],
})
export class Signupstep2Page implements OnInit {
  public onAddForm: FormGroup;

  deviceToken: any = "";
  data: any = "";
  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    private apiService: ApiService,
    private settingService: SettingService,
    public toastCtrl: ToastController,
    private uniqueDeviceID: UniqueDeviceID,
    public http: HttpClient
  ) {
    this.onAddForm = this.formBuilder.group({
      confirmpassword: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$"
          ),
        ])
      ),
    });
    this.data = this.settingService.getSignUpData();
  }

  ngOnInit() {
    this.uniqueDeviceID
      .get()
      .then((uuid: any) => {
        this.deviceToken = uuid;
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
  goto(url) {
    this.settingService.unsetSignUpData();
    this.navCtrl.navigateBack("/" + url);
  }
  goback(url) {
    this.navCtrl.navigateBack("/" + url);
  }
  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      mode: "md",
      cssClass: "customToast",
    });
    toast.present();
  }
  signUp() {
    if (
      this.onAddForm.value.password === this.onAddForm.value.confirmpassword
    ) {
      const data = {
        first_name: this.data.firstname,
        last_name: this.data.lastname,
        email: this.data.email,
        password: this.onAddForm.value.password,
        deviceId: this.deviceToken,
        mobile_no: this.data.mobile_no,
        city: "",
        state: "",
        country: "",
        zip: this.data.pincode,
      };
      this.apiService.signup(data).subscribe(
        (res) => {
          if (res.status === true) {
            this.onAddForm.reset();
            this.settingService.unsetSignUpData();
            this.presentToast(
              "You have successfully registered, please login to continue using the App."
            );
            this.navCtrl.navigateRoot("/login");
          } else {
            this.presentToast(res.message);
          }
        },
        (err) => {
          this.presentToast(err.error.message);
          console.log(err.error.message);
        }
      );
    } else {
      this.presentToast("Mismatch password and confirm password");
    }
  }
}
