import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { PageTrack } from '../decorators/page-track.decorator';
import { ApiService } from '../api.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { LaunchNavigatorService } from '../service/launch-navigator.service';
import { LoadingController } from '@ionic/angular';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { BackStackService } from '../service/back-stack.service';


declare var google;
@Component({
  selector: 'app-findus',
  templateUrl: './findus.page.html',
  styleUrls: ['./findus.page.scss']
})
@PageTrack('Find Us Screen')
export class FindusPage implements OnInit {
  @ViewChild('map1') mapElement: ElementRef;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();

  image = 'assets/img/contact-us/marker-blue.png';
  image_new = 'assets/icon/marker-green.png';
  map: any;
  searchList: any;
  filteredSearchList: any;
  selectBranch: any;
  showSearchList = false;
  showAutoList = false;
  back;
  filterBranch: any;
  markers = [];
  isNotAllowLocation = false;

  markerTitle;
  markerLatitude;
  markerLongitude;


  styledMapType = new google.maps.StyledMapType(
    [
      {
        elementType: 'geometry',
        stylers: [
          {
            color: '#212121'
          }
        ]
      },
      {
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#757575'
          }
        ]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#212121'
          }
        ]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [
          {
            color: '#757575'
          }
        ]
      },
      {
        featureType: 'administrative.country',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9e9e9e'
          }
        ]
      },
      {
        featureType: 'administrative.land_parcel',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#bdbdbd'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#757575'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
          {
            color: '#181818'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#616161'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#1b1b1b'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#2c2c2c'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#8a8a8a'
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          {
            color: '#373737'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          {
            color: '#3c3c3c'
          }
        ]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry',
        stylers: [
          {
            color: '#4e4e4e'
          }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#616161'
          }
        ]
      },
      {
        featureType: 'transit',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#757575'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#3d3d3d'
          }
        ]
      }
    ],
    { name: 'Styled Map' });

  autocompleteItems;
  autocomplete;
  title;
  latitude = 0;
  longitude = 0;
  geo: any;
  service = new google.maps.places.AutocompleteService();
  loader;
  geocoder = new google.maps.Geocoder();
  marker: any;
  gmarkers: any = [];
  infowindow: any = [];

  constructor(
    private launchNavigatorService: LaunchNavigatorService,
    private geolocation: Geolocation,
    private callNumber: CallNumber,
    private api: ApiService,
    private backStack: BackStackService,
    private zone: NgZone,
    private locationAccuracy: LocationAccuracy,
    public loadingController: LoadingController
  ) {
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
    this.back = this.backStack.getBackStack('findus');
  }
  ngOnInit() {
    // this.resetMap();
    this.autocomplete = {
      query: ''
    };
    this.getBranchList();
  }

  ionViewWillEnter() {
    this.askToTurnOnGPS();
    this.dismiss();
  }

  initMap() {
    this.geolocation.getCurrentPosition().then(resp => {
      this.addMap(resp.coords.latitude, resp.coords.longitude);
      this.addMarker('Current Location', resp.coords.latitude, resp.coords.longitude, '');
    }).catch(error => {
      this.isNotAllowLocation = true;
      console.log('Error in get current position');
      console.log(error);
    });
  }
  showAuto() {
    this.showAutoList = true;
  }

  updateSearch() {
    if (this.autocomplete.query === '') {
      this.autocompleteItems = [];
      this.showAutoList = true;
      return;
    }

    const me = this;
    this.service.getPlacePredictions({
      input: this.autocomplete.query,
      // types: ['(regions)'],
      componentRestrictions: {
        country: 'au'
      }
    }, (predictions, status) => {
      me.autocompleteItems = [];

      me.zone.run(() => {
        if (predictions != null) {
          predictions.forEach((prediction) => {
            me.autocompleteItems.push(prediction.description);
          });
        }
      });
    });
  }

  // convert Address string to lat and long
  geoCode(address: any) {
    const context = this;
    try {
      this.geocoder.geocode({ address }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          context.latitude = results[0].geometry.location.lat();
          context.longitude = results[0].geometry.location.lng();
          context.autocomplete = {
            query: results[0].formatted_address
          };
          console.log(context.latitude, context.longitude, results[0].formatted_address);
          this.addMap(context.latitude, context.longitude);
          this.addMarker('Current Location', context.latitude, context.longitude, results[0].formatted_address, this.image);
          this.dismiss();
          this.getBranch();
        } else {
          alert('Map location not found.  Please adjust address.');
        }
      });
    } catch (error) {
      alert('Map location not found.  Please adjust address.');
    }
  }

  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
        this.resetMap();
      },
      error => {
        alert('Error requesting location permissions ' + JSON.stringify(error));
      }
    );
  }


  resetMap() {
    this.latitude = 0;
    this.longitude = 0;
    this.markerTitle = '';
    this.markerLatitude = 0;
    this.markerLongitude = 0;
    this.showSearchList = false;
    this.initMap();
  }

  getCurrentNear() {
    this.dismiss();
    this.geolocation.getCurrentPosition().then(resp => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log(this.latitude, this.longitude);
      this.addMarker('Current Location', this.latitude, this.longitude, '', this.image);
      this.autocomplete = {
        query: ''
      };
      const myLatLng = { lat: Number(this.latitude), lng: Number(this.longitude) };
      this.map.setCenter(myLatLng);
      // this.mapCenter(this.latitude, this.longitude);
      this.getBranch();
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'loading...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }
  getBranchList() {
    this.api.branchlist().subscribe((res) => {
      if (res.data) {
        console.log(res.data);
        for (let i = 0; i < res.data.length; i++) {
          this.addMarker(res.data[i].title, res.data[i].latitude, res.data[i].longitude, res.data[i].address, this.image_new);
        }
      }
    });
  }
  getBranch() {
    this.showSearchList = false;
    this.presentLoading();
    this.filterBranch = {
      latitude: this.latitude,
      longitude: this.longitude,
    };
    for (let j = 0; j < this.infowindow.length; j++ ) {  //I assume you have your infoboxes in some array
      this.infowindow[j].close();
    }
    const that = this;
    this.api.testBranchList(this.filterBranch).subscribe((res) => {
      that.searchList = res.data;
      // that.addMap(res.data[0].latitude, res.data[0].longitude);
      this.gmarkers = [];
      this.infowindow = [];
      for (let i = 0; i < res.data.length; i++) {
        this.addMarker(res.data[i].title, res.data[i].latitude, res.data[i].longitude, res.data[i].address, this.image_new);
      }
      this.loadingController.dismiss();
    });

    if (this.searchList) {
      this.showSearchList = true;
    }

  }

  addMap(latitude, longitude) {
    const myLatLng = { lat: Number(latitude), lng: Number(longitude) };

    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 20,
      center: myLatLng,
      disableDefaultUI: true,
    });

    // Associate the styled map with the MapTypeId and set it to display.
    this.map.mapTypes.set('styled_map', this.styledMapType);
    this.map.setMapTypeId('styled_map');
  }

  addMarker(markerTitle, latitude, longitude, contentString, icon = this.image) {
    console.log(icon);
    console.log(markerTitle, latitude, longitude, contentString);
    const myLatLng = { lat: Number(latitude), lng: Number(longitude) };
    const marker = new google.maps.Marker({
      position: myLatLng,
      title: markerTitle,
      icon,
      map: this.map,
      animation: google.maps.Animation.DROP,
    });

    const infowindow = new google.maps.InfoWindow({
      content: `<h5>${markerTitle}</h5><p>${contentString}</p>`
    });

    marker.addListener('click', () => {
      infowindow.open(this.map, marker);
    });
    this.gmarkers.push(marker);
    this.infowindow.push(infowindow);
  }

  mapCenter(latitude, longitude, i) {
    console.log("Location Click");
    console.log(latitude, longitude);
    for (let j = 0; j < this.infowindow.length; j++ ) {  //I assume you have your infoboxes in some array
      this.infowindow[j].close();
    }
    console.log(this.gmarkers[i]);
    console.log(this.gmarkers[i].getPosition());
    // setTimeout(() => {
      this.map.setCenter(this.gmarkers[i].getPosition());
      google.maps.event.trigger(this.gmarkers[i], 'click');
    // }, 200);
    this.gmarkers[i].addListener('click', () => {
      this.infowindow[i].open(this.map, this.gmarkers[i]);
    });
  }


  addMarkers() {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.searchList.length; i++) {
      const myLatLng = { lat: Number(this.searchList[i].latitude), lng: Number(this.searchList[i].longitude) };

      const marker = new google.maps.Marker({
        position: myLatLng,
        title: this.searchList[i].title,
        icon: this.image,
        map: this.map,
        animation: google.maps.Animation.DROP,
      });
      // marker.addListener('click', (e) => {
      //   this.openMap();
      // });
    }
  }


  dismiss() {
    this.searchList = [];
    this.autocompleteItems = [];
    this.showAutoList = false;
  }

  callNow(callNumber) {
    this.callNumber.callNumber(callNumber, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  openMap(item) {
    this.launchNavigatorService.open(item.latitude, item.longitude);
  }

  zoomMap(data) {
    this.autocomplete = {
      query: ''
    };
    this.addMap(data.latitude, data.longitude);
    this.addMarker(data.title, data.latitude, data.longitude, data.address);
  }

}
