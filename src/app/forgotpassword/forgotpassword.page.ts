import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { ApiService } from "../api.service";
import { ToastController, NavController, AlertController } from "@ionic/angular";
import { PageTrack } from "../decorators/page-track.decorator";

@Component({
  selector: "app-forgotpassword",
  templateUrl: "./forgotpassword.page.html",
  styleUrls: ["./forgotpassword.page.scss"]
})
@PageTrack("Forgot Password Screen")
export class ForgotpasswordPage implements OnInit {
  public onAddForm: FormGroup;
  nextURL: any = '';
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public activatedRoute: ActivatedRoute,
    public alertController: AlertController
  ) {
    this.onAddForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"
          )
        ])
      )
    });
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log("params.data",params.nextURL);
      this.nextURL = params.nextURL;
    });
  }
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: "Enter OTP",
      inputs: [
        {
          name: "OTP",
          type: "text",
          id: "name2-id",
          placeholder: "Enter OTP"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          }
        },
        {
          text: "Ok",
          handler: data => {
            const otpdata = {
              otp: data.OTP
            };
            this.apiService.validateotp(otpdata).subscribe(
              res => {
                if (res["status"] == true) {
                  this.presentToast(res["message"]);
                  this.navCtrl.navigateRoot("/resetpassword", { queryParams: { nextURL: this.nextURL }});
                } else {
                  this.presentToast(res["message"]);
                }
              },
              err => {
                this.presentToast(err.error.message);
                console.log(err.error.message);
              }
            );
          }
        }
      ]
    });

    await alert.present();
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
  goto(url) {
    this.navCtrl.navigateBack('/' + url, { queryParams: { nextURL: this.nextURL }});
  }
  goalready(url) {
    this.onAddForm.reset();
    this.router.navigate(["/resetpassword"], { queryParams: { nextURL: this.nextURL }});
  }
  forgotPassword() {
    const data = {
      email: this.onAddForm.value.email
    };
    this.apiService.forgotpassword(data).subscribe(
      res => {
        if (res["status"] == true) {
          this.presentToast(res["message"]);
          this.router.navigate(["/resetpassword"], {
            queryParams: { email: this.onAddForm.value.email, nextURL: this.nextURL }
          });
        } else {
          this.presentToast(res["message"]);
        }
      },
      err => {
        this.presentToast(err.error.message);
        console.log(err.error.message);
      }
    );
  }
}
