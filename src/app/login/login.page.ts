import { StorageService } from '../storage.service';
import { Component, OnInit } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import {LoadingController, NavController, ToastController, MenuController, Events, Platform} from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import {
  SignInWithApple, AppleSignInResponse, AppleSignInErrorResponse, ASAuthorizationAppleIDRequest
} from '@ionic-native/sign-in-with-apple/ngx';
import { PageTrack } from '../decorators/page-track.decorator';
import { SettingService } from '../service/setting.service';
import {Device} from '@ionic-native/device/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
@PageTrack('Login Screen')
export class LoginPage implements OnInit {
  public onAddForm: FormGroup;
  fbId: any = '';
  url: any = '';
  nextURL: any = '';
  isLoading = false;
  deviceId: any = '';
  azureOptions = {
    authorities: [
      {
          type: 'AAD',
          audience: 'AzureADMyOrg',
          authorityUrl: '',
          cloudInstance: 'MSALAzurePublicCloudInstance',
          default: true
      }
    ],
    clientId: '7b2719c4-a838-49c3-96f3-f7c0442af897', //DEV
    tenantId: 'ba5539d8-8587-43e9-a52f-f47044618afc' //DEV

    // clientId: '5099458b-e22c-4b85-8dbb-58076ff114c3', //PROD
    // tenantId: '6ebe720a-6a71-4cd3-9180-ab62d28abc89' //PROD
}

  constructor(
    private platform: Platform,
    private device: Device,
    private formBuilder: FormBuilder,
    private fb: Facebook,
    public toastCtrl: ToastController,
    private googlePlus: GooglePlus,
    public navCtrl: NavController,
    private apiService: ApiService,
    public events: Events,
    public activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    private storageService: StorageService,
    private settingService: SettingService,
    public menuCtrl: MenuController,
    private signInWithApple: SignInWithApple,
    private router: Router) {
    this.menuCtrl.enable(false);

    this.onAddForm = this.formBuilder.group({
      email: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.pattern(
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ])
      ),
      password: new FormControl('', Validators.compose([Validators.required]))
    });
  }
  updateid(userid) {
    this.storageService.updateUserid(userid).then(res => {
    }).catch(error => {
      console.log(error);
    });
  }

  isAppleSignIn() {
    if (this.platform.is('ios')) {
      return parseFloat(this.device.version) >= 13;
    }
    return false;
  }

  ngOnInit() {
    // console.log(this.activatedRoute);
    this.activatedRoute.queryParams.subscribe(params => {
      this.url = params.data;
      console.log("params.data",params.nextURL);
      this.nextURL = params.nextURL;
    });
    this.settingService.getDeviceId().then(res => {
      this.deviceId = res;
    }
    ).catch(error => {
      console.log(error);
    });
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
  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      mode: 'md',
      cssClass: 'customToast'
    });
    toast.present();
  }
  fbLogin() {
    this.fb
      .login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => {
        if (res.status === 'connected') {
          this.fbId = res.authResponse.userID;
          this.fb
            .api('me?fields=id,name,email,first_name,last_name', [])
            .then(profile => {
              this.signUp(profile, 'facebook');
            });
        } else {
          this.presentToast(res["message"]);
        }
      })
      .catch(e => {
        console.log('Error logging into Facebook', e);
        this.presentToast(e.errorMessage);
      });
  }
  googleLogin() {
    this.googlePlus
      .login({})
      .then(res => {
        this.signUp(res, 'google');
      })
      .catch(err => {
        console.error('err', err);
        this.presentToast(err);
      });
  }
  appleLogin() {
    this.signInWithApple.signin({
      requestedScopes: [
        ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
        ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail
      ]
    })
        .then((res: AppleSignInResponse) => {
          // https://developer.apple.com/documentation/signinwithapplerestapi/verifying_a_user
          console.log(res);
          if (res.email) {
            localStorage.setItem('appleResponse', JSON.stringify(res));
          } else {
            if (localStorage.getItem('appleResponse')) {
              const detail = JSON.parse(localStorage.getItem('appleResponse'));
              res.fullName.givenName = detail.fullName.givenName;
              res.fullName.familyName = detail.fullName.familyName;
            }
          }
          this.signUp(res, 'apple');
        })
        .catch((error: AppleSignInErrorResponse) => {
          this.presentToast(error.code + ' ' + error.localizedDescription);
          console.error(error);
        });
  }
  msalLogin(data){
    this.presentLoading();
    data.deviceId = this.deviceId;
    data.userToken= localStorage.getItem('registrationId'),
    this.apiService.azureLogin(data).subscribe(resp => {
      console.log(resp);
      if (resp && resp.status === true) {
        this.settingService.setUserData(resp.user);
        this.settingService.setToken(resp.token);
        this.updateid(resp.user.id);
        localStorage.setItem('init', 'false');
        this.events.publish('user:created', Date.now());
        this.presentToast('You have successfully logged in.');
        this.dismissLoading();
        if(this.nextURL) {
          this.navCtrl.navigateRoot(this.nextURL);
        } else {
          this.navCtrl.navigateRoot('/tabs/dashboard');
        }
      } else {
        this.presentToast(resp.message);
        this.dismissLoading();
      }
    },
      err => {
        console.log(err);
        this.presentToast(err.error.message);
        console.log(err.error.message);
        this.dismissLoading();
      }
    );
  }

  azureLogin() {
    const that = this;
    that.presentLoading();
    (window as any).cordova.plugins.msalPlugin.msalInit(function() {
      (window as any).cordova.plugins.msalPlugin.signOut(
        function(msg) {
          console.log(msg);
          // Success logic goes here
          (window as any).cordova.plugins.msalPlugin.signInInteractive(
            function(resp) {
                console.log(resp);
                console.log(JSON.stringify(resp));
                if(resp && resp.token) {
                  that.msalLogin({ access_token: resp.token})
                } else {
                  that.presentToast('Something went wring!.');
                }
                this.dismissLoading();
                // alert(JSON.stringify(resp))
                // resp is an object containing information about the signed in user, see below.
            }, 
            function(err) {
                that.dismissLoading();
                console.log(err);
                // Usually if we get an error it just means the user cancelled the
                // signin process and closed the popup window. Handle this however
                // you want, depending again if you want guest access or not.
            }
          );
        }, 
        function(err) {
          that.dismissLoading();
          console.log(err);
            // An error here usually either means you accidentally tried to
            // sign out someone who wasn't signed in, or there was a problem
            // communicating with the server.
        }
      );
    },
    function (err) {
        that.dismissLoading();
        console.log(err);
        // err has your exception message
    }, this.azureOptions);
  }

  
  goo(url) {
    this.settingService.unsetSignUpData();
    this.navCtrl.navigateForward('/' + url, { queryParams: { nextURL: this.nextURL }});
  }
  signIn() {
    this.presentLoading();

    const data = {
      email: this.onAddForm.value.email,
      password: this.onAddForm.value.password,
      deviceId: this.deviceId,
      userToken: localStorage.getItem('registrationId'),
    };
    this.apiService.login(data).subscribe(res => {

      if (res.status === true) {

        this.settingService.setUserData(res.user);
        this.settingService.setToken(res.token);

        this.updateid(res.user.id);
        this.events.publish('user:created', Date.now());
        this.presentToast('You have successfully logged in.');
        localStorage.setItem('init', 'false');
        console.log(this.url);
        if (this.url) {
          this.navCtrl.navigateRoot('/' + this.url);
        } else {
          if(this.nextURL) {
            this.navCtrl.navigateRoot(this.nextURL);
          } else {
            this.navCtrl.navigateRoot('/tabs/dashboard');
          }
          
        }
      } else {
        this.presentToast('LoggedIn Unsuccessful');
      }
    },
      err => {
        this.presentToast(err.error.message);
        console.log(err.error.message);
      }
    );
  }
  goto(url) {
    this.navCtrl.navigateRoot('/' + url);
  }
  signUp(res, type) {
    this.presentLoading();
    let data = {};
    if (type === 'google') {
      data = {
        first_name: res.givenName,
        last_name: res.familyName,
        email: res.email,
        deviceId: this.deviceId, // this.device_token
        userToken: localStorage.getItem('registrationId'),
        mobile_no: '',
        googleId: res.userId
      };
    } else if (type === 'apple') {
      data = {
        ...(res.fullName.givenName ? { first_name: res.fullName.givenName } : {}),
        ...(res.fullName.familyName ? { last_name: res.fullName.familyName } : {}),
        ...(res.email ? { email: res.email } : {}),
        appleUserId: res.user,
        authorizationCode: res.authorizationCode,
        identityToken: res.identityToken,
        deviceId: this.deviceId,
        userToken: localStorage.getItem('registrationId'),
      };
    } else {
      data = {
        first_name: res.first_name,
        last_name: res.last_name,
        email: res.email,
        deviceId: this.deviceId,
        userToken: localStorage.getItem('registrationId'),
        mobile_no: '',
        facebookId: this.fbId
      };
    }
    this.apiService.signup(data).subscribe(resp => {

      if (resp.status === true) {
        this.settingService.setUserData(resp.user);
        this.settingService.setToken(resp.token);
        this.updateid(resp.user.id);
        localStorage.setItem('init', 'false');
        this.events.publish('user:created', Date.now());
        this.presentToast('You have successfully logged in.');
        if(this.nextURL) {
          this.navCtrl.navigateRoot(this.nextURL);
        } else {
          this.navCtrl.navigateRoot('/tabs/dashboard');
        }
      } else {
        this.presentToast(resp.message);
      }
    },
      err => {
        console.log(err);
        this.presentToast(err.error.message);
        console.log(err.error.message);
      }
    );
  }
}
