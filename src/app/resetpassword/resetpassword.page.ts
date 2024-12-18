import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PageTrack } from "../decorators/page-track.decorator";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { ApiService } from "../api.service";
import { ToastController, NavController } from "@ionic/angular";
import { SettingService } from "../service/setting.service";

@Component({
  selector: "app-resetpassword",
  templateUrl: "./resetpassword.page.html",
  styleUrls: ["./resetpassword.page.scss"],
})
@PageTrack("Reset Password Screen")
export class ResetpasswordPage implements OnInit {
  public onAddForm: FormGroup;
  userid: any;
  nextURL: any = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,

    public navCtrl: NavController,
    private apiService: ApiService,
    private settingService: SettingService,
    public toastCtrl: ToastController
  ) {
    this.userid = this.settingService.getUserId();
    this.onAddForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"
          ),
        ])
      ),
      newpassword: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$"
          ),
        ])
      ),
      retypepassword: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      otp: new FormControl("", Validators.compose([Validators.required])),
    });
  }
  goto(url) {
    this.navCtrl.navigateBack("/" + url, { queryParams: { nextURL: this.nextURL }});
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.onAddForm.patchValue({ email: params.email });
      this.nextURL = params.nextURL;
    });
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
  reset() {
    if (
      this.onAddForm.value.newpassword === this.onAddForm.value.retypepassword
    ) {
      const data = {
        email: this.onAddForm.value.email,
        password: this.onAddForm.value.newpassword,
        confirm_password: this.onAddForm.value.retypepassword,
        otp: this.onAddForm.value.otp,
      };
      this.apiService.resetpassword(data).subscribe(
        (res) => {
          if (res["status"] == true) {
            this.presentToast(res["message"]);
            this.navCtrl.navigateRoot("/login", { queryParams: { nextURL: this.nextURL }});
            this.onAddForm.reset();
          } else {
            this.presentToast(res["message"]);
          }
        },
        (err) => {
          this.presentToast(err.error.message);
          console.log(err.error.message);
        }
      );
    } else {
      this.presentToast("Password and Confirm password doesnt match");
    }
  }
}
