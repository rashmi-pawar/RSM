import {Component, ElementRef, Input, NgZone, OnInit, Pipe, PipeTransform} from '@angular/core';
import {BackStackService} from '../service/back-stack.service';
import {LoadingController, NavController, NavParams, Platform, ToastController} from '@ionic/angular';
import {ApiService} from '../api.service';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {AppAvailability} from '@ionic-native/app-availability/ngx';
import {ActivatedRoute, NavigationExtras} from '@angular/router';
import {CallNumber} from '@ionic-native/call-number/ngx';
import { ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { SettingService } from '../service/setting.service';
import { isEmpty } from 'lodash';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {
  back;
  @Input() eventId: any;
  @Input() isModal: any;
  upcomingEventURL: any;
  segmentFilter = '';
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  isLoading = false;
  eventDetail: any = {};
  similarEvents: any = [];
  agendaList: any = [];
  items = [
    { expanded: false },
    { expanded: false },
    { expanded: false },
    { expanded: false },
    { expanded: false }
  ];
  speakerList: any = [];
  attendeesList: any = [];
  constructor(
      public toastCtrl: ToastController,
      private apiService: ApiService,
      public platform: Platform,
      public iab: InAppBrowser,
      public appAvailability: AppAvailability,
      private route: ActivatedRoute,
      private backStack: BackStackService,
      private callNumber: CallNumber,
      public loadingController: LoadingController,
      public navCtrl: NavController,
      private sanitizer: DomSanitizer,
      public modalController: ModalController,
      public settingService: SettingService,
      private elementRef : ElementRef
  ) {
    this.back = this.backStack.getBackStack('my-events');
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          // listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  formatDate(date) {
    return moment(date).format('dddd DD MMM yy');
  }
  async presentModal(event) {
    const modal = await this.modalController.create({
      component: EventDetailPage,
      cssClass: 'my-custom-detail-modal',
      componentProps: {
        eventId: event.id,
        isModal: true
      }
    });
    return await modal.present();
  }
  dismissModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
  async presentLoading() {
    this.isLoading = true;
    const loading = await this.loadingController.create({
      message: 'loading',
      duration: 3000
    });
    await loading.present();
    await loading.onDidDismiss();
  }
  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingController
        .dismiss()
        .then(() => console.log('dismissed'));
  }

  ngOnInit() {
    
  }

  ionViewDidEnter() {
    console.log('init detail');
    this.pullToRefresh(null);
  }

  async pullToRefresh(event){
    const userData = this.settingService.getUserData();
    this.route.queryParams.subscribe(params => {
      const eid = (this.isModal && this.eventId) ? this.eventId : params.id;
      if(userData && userData.id){
        this.getMyEventDetails(eid);
        this.getSimilarEventList(eid);
        this.getEventSpeakerList(eid);
        this.getEventAttendeesList(eid);
      } else {
        this.apiService.logout('/event-detail?id=' + eid);
      }
    });
    this.getUpcomingEventURL();
    setTimeout(() => {
      if (event) {
        event.target.complete();  
      }
    }, 1000);
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

  async getUpcomingEventURL() {
    this.apiService.getPaymenturls().subscribe((response: any) => {
      if (response.data) {
        const event = response.data.find(n => n.title === 'Event_API');
        if (event && event.content) {
          this.upcomingEventURL = event.content;
        } else {
          this.presentToast('No upcoming event url found');
        }
      }
    });
  }

  getEventSpeakerList(id) {
    this.apiService.getEventSpeakerList(id).subscribe(result => {
      console.log(result);
      if (result.status && result.data) {
        this.speakerList = result.data;
      }
    }, error => {
      if (error && error.error) {
        this.presentToast(error.error.message);
      }
      if (error.status === 401) {
        this.apiService.logout();
      }
    });
  }
  getEventAttendeesList(id) {
    this.apiService.getEventAttendeesList(id).subscribe(result => {
      console.log(result);
      if (result.status && result.data) {
        this.attendeesList = result.data;
      }
    }, error => {
      if (error && error.error) {
        this.presentToast(error.error.message);
      }
      if (error.status === 401) {
        this.apiService.logout();
      }
    });
  }

  isDisplayCard(attendees){
    if(attendees.is_agree_share_detail === '1') {
      return (attendees.is_share_first_name === '1' && attendees.first_name) ||
      (attendees.is_share_last_name === '1' && attendees.last_name) ||
      (attendees.is_share_email === '1' && attendees.email) ||
      (attendees.is_share_mobile === '1' && attendees.mobile) ||
      (attendees.is_share_post_code === '1' && attendees.post_code) ||
      (attendees.is_share_linkedin_url === '1' && attendees.linkedin_url)
    }
    else false;
  }
  isJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  timeConvert(time) {
    // Check correct time format and split into components
    if(!time){
      return '';
    }
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }
  getMyEventDetails(id) {
    this.presentLoading();
    this.apiService.getMyEventDetail(id).subscribe(result => {
      if (result.status && result.events) {
        // result.events.agenda = this.sanitizer.bypassSecurityTrustHtml(result.events.agenda);
        this.eventDetail = result.events;
        const agenda = this.isJson(result.events.agenda) ? JSON.parse(result.events.agenda) : [];
        console.log(agenda);
        if (agenda && agenda.length > 0) {
          const userData = this.settingService.getUserData();
          const usetType = userData.user_types.map(n => n.user_type);
          this.agendaList = agenda.filter(n => usetType.includes(n.user_type) || n.user_type === 'all' || !n.user_type);
          this.segmentFilter = this.agendaList[0].title;
        }
        if (this.eventDetail.other_image) {
          this.eventDetail.other_description = `
            <div class="image"><img src="${this.eventDetail.other_image}" /></div> ` + this.eventDetail.other_description;
        }
        this.dismissLoading();
      }
      this.linkClick();
    }, error => {
      this.dismissLoading();
      if (error && error.error) {
        this.presentToast(error.error.message);
      }
      if (error.status === 401) {
        this.apiService.logout();
      }
    });
  }

  getSimilarEventList(id) {
    this.apiService.getSimilarEventList(id).subscribe(result => {
      if (result.status) {
        this.similarEvents = result.events;
      } else {
        this.similarEvents = [];
      }
    }, error => {
      if (error && error.error) {
        this.presentToast(error.error.message);
        this.similarEvents = [];
      }
    });
  }

  launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string) {
    let app: string;

    if (this.platform.is('ios')) {
      app = iosSchemaName;
    } else if (this.platform.is('android')) {
      app = androidPackageName;
    } else {
      const browser = this.iab.create(httpUrl, '_system', {
        location: this.platform.is('android') ? 'yes' : 'no',
        hideurlbar: 'yes',
        hidenavigationbuttons: 'yes',
        closebuttoncaption: 'Back'
      });
      return;
    }

    this.appAvailability.check(app).then(
        (yes: boolean) => { // success callback
          const browser = this.iab.create(appUrl, '_system', {
            location: this.platform.is('android') ? 'yes' : 'no',
            hideurlbar: 'yes',
            hidenavigationbuttons: 'yes',
            closebuttoncaption: 'Back'
          });
        },
        (no: boolean) => { // error callback
          const browser = this.iab.create(httpUrl, '_system', {
            location: this.platform.is('android') ? 'yes' : 'no',
            hideurlbar: 'yes',
            hidenavigationbuttons: 'yes',
            closebuttoncaption: 'Back'
          });
        }
    );
  }

  openLinkedIn(url: string) {
    if (url) {
      this.launchExternalApp('linkedin://', 'com.linkedin.android', url, url);
    } else {
      this.presentToast('Not found profile url');
    }
  }

  openMap() {
    let URL = '';
    if (this.platform.is('ios')) {
      URL = 'maps://maps.apple.com/?q=';
    } else {
      URL = 'https://maps.google.com/?q=';
    }
    URL += this.eventDetail.venue_street ? this.eventDetail.venue_street + ',' : '';
    URL += this.eventDetail.venue_city ? this.eventDetail.venue_city + ',' : '';
    URL += this.eventDetail.venue_state ? this.eventDetail.venue_state + ',' : '';
    URL += this.eventDetail.venue_country ? this.eventDetail.venue_country + ',' : '';
    URL += this.eventDetail.venue_zip ? this.eventDetail.venue_zip + ',' : '';
    URL += '/@' + this.eventDetail.venue_latitude + ',' + this.eventDetail.venue_longitude;

    if ((this.eventDetail.venue_longitude && this.eventDetail.venue_latitude) || this.eventDetail.venue_street || this.eventDetail.venue_city || this.eventDetail.venue_state) {
      const browser = this.iab.create(URL, '_system', {
        location: this.platform.is('android') ? 'yes' : 'no',
        hideurlbar: 'yes',
        hidenavigationbuttons: 'yes',
        closebuttoncaption: 'Back'
      });
    } else {
      this.presentToast('Not found address');
    }
  }

  openUrl(url) {
    if (url) {
      this.iab.create(url, '_blank', {
        location: this.platform.is('android') ? 'yes' : 'no',
        hideurlbar: 'yes',
        hidenavigationbuttons: 'yes',
        closebuttoncaption: 'Back'
      });
    } else {
      this.presentToast('No url found');
    }
  }

  callNow(callNumber) {
    this.callNumber.callNumber(callNumber, true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
  }
  isEmpty(string) {
    if(string) {
      return isEmpty(string.trim());
    }
    return true;
  }

  linkClick(){
    setTimeout(() =>  {
      const urls : any    = this.elementRef.nativeElement.querySelectorAll('a');
      urls.forEach((url) => 
      {
         url.addEventListener('click', (event) => 
         {
            event.preventDefault();
            this.iab.create(event.target.href, '_blank', {
              location: this.platform.is('android') ? 'yes' : 'no',
              hideurlbar: 'yes',
              hidenavigationbuttons: 'yes',
              closebuttoncaption: 'Back'
            });
         }, false);
      });
    }, 1000)
  }
}

/**
 * Generated class for the SafeHtmlPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
