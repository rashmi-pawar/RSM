import { Injectable } from '@angular/core';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Injectable({
  providedIn: 'root'
})
export class LaunchNavigatorService {

  constructor(private launchNavigator: LaunchNavigator, private geolocation: Geolocation) { }

  open(latitude, longitude) {
    this.geolocation.getCurrentPosition().then((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      this.launchNavigator.navigate([latitude, longitude], {
        app: this.launchNavigator.APP.USER_SELECT,
        start: [data.coords.latitude, data.coords.longitude]
      });
    });


  }

}
