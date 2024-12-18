import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { ApiService } from "../api.service";
import { ToastController, NavController } from "@ionic/angular";
import { PageTrack } from "../decorators/page-track.decorator";
import { SettingService } from "../service/setting.service";

@Component({
  selector: "app-updatepassword",
  templateUrl: "./updatepassword.page.html",
  styleUrls: ["./updatepassword.page.scss"],
})
@PageTrack("Update Password Screen")
export class UpdatepasswordPage implements OnInit {
  public onAddForm: FormGroup;
  userData: any;
  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    private apiService: ApiService,
    private settingService: SettingService,
    public toastCtrl: ToastController
  ) {
    this.userData = this.settingService.getUserData();
    this.onAddForm = this.formBuilder.group({
      oldpassword: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      newpassword: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            "^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$"
          ),
        ])
      ),
      retypepassword: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
    }, { 
      validators: this.password.bind(this)
    });
  }
  password(formGroup: FormGroup) {
    const { value: newpassword } = formGroup.get('newpassword');
    const { value: retypepassword } = formGroup.get('retypepassword');
    return newpassword === retypepassword ? null : { passwordNotMatch: true };
  }
  goto(url) {
    this.navCtrl.navigateBack("/" + url);
  }
  ngOnInit() {}

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      mode: "md",
      cssClass: "customToast",
    });
    toast.present();
  }
  updatePassword() {
    const data = {
      old_password: this.onAddForm.value.oldpassword,
      password: this.onAddForm.value.newpassword,
      confirm_password: this.onAddForm.value.retypepassword,
      auth_token: this.settingService.getToken(),
    };
    this.apiService.updatepassword(data, this.userData.id).subscribe(
      (res) => {
        if (res.status === true) {
          this.presentToast("Password updated successfully");
          this.onAddForm.reset();
          // this.goto('tabs/dashboard');
        } else {
          this.presentToast(res.message);
        }
      },
      (err) => {
        if (err.error.message) {
          this.presentToast(err.error.message);
        } else {
          this.presentToast(err.error.error);
        }
        
        console.log(err.error.error);
      }
    );
  }
}
