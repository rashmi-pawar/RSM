import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackStackService {

  constructor() { }

  setBackStack(url, source) {
    switch (url) {
      case "tripsetting": {
        localStorage.setItem("back-trip-settings", source);
        break;
      }
      case "home": {
        localStorage.setItem("back-add-receipt", source);
        break;
      }
      case "logtrip": {
        localStorage.setItem("back-log-trip", source);
        break;
      }
      case "calculator": {
        localStorage.setItem("back-calculator", source);
        break;
      }
      case "triplogbook": {
        localStorage.setItem("back-trip-logbook", source);
        break;
      }
      case "viewreceipt": {
        localStorage.setItem("back-receipt-manager", source);
        break;
      }
      case "sendmessage": {
        localStorage.setItem("back-send-message", source);
        break;
      }
      case "findus": {
        localStorage.setItem("back-find-us", source);
        break;
      }
    }
  }


  getBackStack(url) {
    let back: any;
    switch (url) {
      case "tripsetting": {
        back = localStorage.getItem("back-trip-settings");
        break;
      }
      case "home": {
        back = localStorage.getItem("back-add-receipt");
        break;
      }
      case "logtrip": {
        back = localStorage.getItem("back-log-trip");
        break;
      }
      case "calculator": {
        back = localStorage.getItem("back-calculator");
        break;
      }
      case "triplogbook": {
        back = localStorage.getItem("back-trip-logbook");
        break;
      }
      case "viewreceipt": {
        back = localStorage.getItem("back-receipt-manager");
        break;
      }
      case "sendmessage": {
        back = localStorage.getItem("back-send-message");
        break;
      }
      case "findus": {
        back = localStorage.getItem("back-find-us");
        break;
      }
    }
    return back;
  }

  setBackFromMenu(url) {
    if (url === 'updateprofile' || url === 'updatepassword' || url === 'contactus' ||
      url === 'tripsetting' || url.includes('http')) {
      localStorage.setItem("open-menu", 'true');
    }
  }
  resetBackFromMenu() {
    localStorage.setItem("open-menu", 'false');
  }
  getBackFromMenu() {
    const back = localStorage.getItem("open-menu");
    if (back === 'true') {
      return true;
    } else {
      return false;
    }
  }
}
