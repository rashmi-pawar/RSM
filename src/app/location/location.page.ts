import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../storage.service";
import { ToastController, NavController } from "@ionic/angular";
import { Router } from "@angular/router";
import { PageTrack } from "../decorators/page-track.decorator";

declare var google;
@Component({
  selector: "app-location",
  templateUrl: "./location.page.html",
  styleUrls: ["./location.page.scss"]
})
@PageTrack("Location Screen")
export class LocationPage implements OnInit {
  @ViewChild("map") mapElement: ElementRef;
  locationArray: any = [];
  watch: any = "";
  originPlaceid: any = "";
  destinationPlaceid: any = "";
  autocompleteItems: any = [];
  autocompleteItems1: any = [];
  autocomplete: any;
  isSubmit: any;
  map: any;
  start = "";
  end = "";
  unit: any = "";
  isSave: any;
  distance: any = "";
  mode = "DRIVING";
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  GoogleAutocomplete: any = "";
  constructor(
    private geolocation: Geolocation,
    private http: HttpClient,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public router: Router
  ) {
    this.startTracking();
    this.isSubmit = false;
    this.isSave = false;

    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: "", input1: "" };
    this.autocompleteItems = [];
    this.autocompleteItems1 = [];
  }

  ngOnInit() {
    this.initMap();
  }
  initMap() {
    this.geolocation.getCurrentPosition().then(resp => {

      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 7,
        center: { lat: resp.coords.latitude, lng: resp.coords.longitude }
      });
      this.directionsDisplay.setMap(this.map);
    });
  }
  updateSearchResults1() {
    if (this.autocomplete.input1 == "") {
      this.autocompleteItems1 = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions(
      { input: this.autocomplete.input1 },
      (predictions, status) => {
        this.autocompleteItems1 = [];
        predictions.forEach(prediction => {
          this.autocompleteItems1.push(prediction);
          //console.log(this.autocompleteItems1);
        });
      }
    );
  }
  selectSearchResult1(item1) {
    this.autocompleteItems1 = [];
    this.autocomplete = {
      input1: item1.description,
      input: this.autocomplete.input
    };
  }
  updateSearchResults() {
    if (this.autocomplete.input == "") {
      this.autocompleteItems = [];
      this.end = "";
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions(
      { input: this.autocomplete.input },
      (predictions, status) => {
        this.autocompleteItems = [];
        predictions.forEach(prediction => {
          this.autocompleteItems.push(prediction);
          console.log(this.autocompleteItems);
        });
      }
    );
  }
  selectSearchResult(item) {
    this.autocompleteItems = [];
    this.autocomplete = {
      input: item.description,
      input1: this.autocomplete.input1
    };
    this.end = item.description;
  }
  startTracking() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        this.http
          .get(
            "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            resp.coords.latitude +
            "," +
            resp.coords.longitude +
            "&key=AIzaSyAYOzcfZjH3aS-CHF8LtMCQP6iMWYyabJc"
          )
          .subscribe(res => {
            if (res["status"] == "OK") {
              this.autocomplete = {
                input1: res["results"][0].formatted_address,
                input: this.autocomplete.input
              };
            }
          });
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }
  stopTracking() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        this.http
          .get(
            "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            resp.coords.latitude +
            "," +
            resp.coords.longitude +
            "&key=AIzaSyCt8clz3WQHwnTi3FGWIbrEhbqqKI9lcv4"
          )
          .subscribe(res => {
            if (res["status"] == "OK") {
              this.autocomplete = {
                input: res["results"][0].formatted_address,
                input1: this.autocomplete.input1
              };
              this.end = res["results"][0].formatted_address;
            } else {
              console.log(res);
            }
          });
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }
  calculateAndDisplayRoute() {
    this.isSubmit = true;
    this.directionsService.route(
      {
        origin: this.autocomplete.input1,
        destination: this.autocomplete.input,
        travelMode: this.mode,
        unitSystem: google.maps.UnitSystem.IMPERIAL
      },
      (response, status) => {
        if (status === "OK") {
          this.distance = response.routes[0].legs[0].distance.text.split(
            " "
          )[0];
          this.unit = response.routes[0].legs[0].distance.text.split(" ")[1];
          this.initMap();
          this.isSave = true;
          this.directionsDisplay.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }
  travelmode(mode) {
    this.mode = mode;
  }

  save() {
    this.router.navigate(["/manualtrip"], {
      queryParams: { distance: this.distance, unit: this.unit }
    });
  }
}