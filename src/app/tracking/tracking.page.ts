import { Component, OnInit } from "@angular/core";
import { Geolocation, Geoposition } from "@ionic-native/geolocation/ngx";
import { Subscription } from "rxjs/Subscription";
import { ToastController } from "@ionic/angular";
import { PageTrack } from "../decorators/page-track.decorator";

import "rxjs/add/operator/filter";
declare var google;
declare var navigator: any;
@Component({
  selector: "app-tracking",
  templateUrl: "./tracking.page.html",
  styleUrls: ["./tracking.page.scss"]
})
@PageTrack("Tracking Screen")
export class TrackingPage implements OnInit {
  path: any = [];
  distance: any = "";
  positionSubscription: Subscription;
  watch: any;
  constructor(
    public toastCtrl: ToastController,
    private geolocation: Geolocation
  ) {
    this.path = [];
  }

  ngOnInit() { }
  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      mode: 'md',
      cssClass: 'customToast'
    });
    toast.present();
  }
  startLiveTracking() {
    this.path = [];

    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        this.presentToast("Start tracking");
        this.path.push({
          lat: resp.coords.latitude,
          lng: resp.coords.longitude
        });
      })
      .catch(error => {
        console.log("Error getting location", error);
      });

    const options = {
      frequency: 3000,
      enableHighAccuracy: true
    };

    this.watch = this.geolocation
      .watchPosition(options)
      .subscribe((position: Geoposition) => {

        this.path.push({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
  }
  stopLiveTracking() {

    let total = 0;
    for (let i = 0; i < this.path.length - 1; i++) {
      const pos1 = new google.maps.LatLng(this.path[i].lat, this.path[i].lng);
      const pos2 = new google.maps.LatLng(
        this.path[i + 1].lat,
        this.path[i + 1].lng
      );
      total += google.maps.geometry.spherical.computeDistanceBetween(
        pos1,
        pos2
      );
      this.distance = (total / 1609.34).toFixed(1) + " mi";
    }
    this.watch.unsubscribe();
    navigator.geolocation.clearWatch(this.watch);
    this.presentToast("Stop tracking");
  }
}
