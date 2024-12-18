import { Injectable } from '@angular/core';
import {UniqueDeviceID} from '@ionic-native/unique-device-id/ngx';
import { Events } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  userId;
  userData;
  signUpData;
  constructor(private uniqueDeviceID: UniqueDeviceID, public events: Events) { }

  getUserId() {
    if (JSON.parse(localStorage.getItem('userData')) !== undefined && JSON.parse(localStorage.getItem('userData'))) {
      this.userId = JSON.parse(localStorage.getItem('userData')).id;
    } else {
      this.userId = 0;
    }
    return this.userId;
  }

  getUserData() {
    if (JSON.parse(localStorage.getItem('userData')) !== undefined && JSON.parse(localStorage.getItem('userData'))) {
      this.userData = JSON.parse(localStorage.getItem('userData'));
    } else {
      this.userData = undefined;
    }
    return this.userData;
  }

  setSignUpData(data) {
    localStorage.setItem('signUpData', JSON.stringify(data));
  }

  unsetSignUpData() {
    localStorage.removeItem('signUpData');
  }

  getSignUpData() {
    if (JSON.parse(localStorage.getItem('signUpData')) !== undefined && JSON.parse(localStorage.getItem('signUpData'))) {
      this.signUpData = JSON.parse(localStorage.getItem('signUpData'));
    } else {
      this.signUpData = undefined;
    }
    return this.signUpData;
  }

  setUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  getFirebaseToken() {
    return localStorage.getItem('firebaseToken');
  }

  setFirebaseToken(token) {
    localStorage.setItem('firebaseToken', token);
  }

  setDisclaimer(value) {
    localStorage.setItem('disclaimer', value);
  }

  getDisclaimer() {
    if (localStorage.getItem('disclaimer') && localStorage.getItem('disclaimer') !== undefined
      && localStorage.getItem('disclaimer') !== 'false') {
      return true;
    } else {
      return false;
    }
  }

  clear() {
    // localStorage.clear();
    localStorage.removeItem('userData');
    localStorage.removeItem('upcomingEventURL');
    localStorage.removeItem('token');
    localStorage.removeItem('init');
    localStorage.removeItem('open-menu');
  }

  getDeviceId() {
    return this.uniqueDeviceID
        .get()
        .then((uuid: any) => uuid)
        .catch((error: any) => {
          console.log('uniqueDeviceID error');
          console.log(error);
        });
  }

  logout(){
    this.clear();
    this.events.publish('user:created', 'logout');
    localStorage.setItem('init', 'false');
  }

}
