import {Component, ElementRef, OnInit, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ApiService} from '../api.service';
import {SettingService} from '../service/setting.service';
import {NavController, Platform} from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-grad-week-faq',
  templateUrl: './grad-week-faq.page.html',
  styleUrls: ['./grad-week-faq.page.scss'],
})
export class GradWeekFaqPage implements OnInit {
  back;
  isProgress = false;
  gradWeekFaq: any;
  constructor(
      private apiService: ApiService,
      private settingService: SettingService,
      public navCtrl: NavController,
      private sanitizer: DomSanitizer,
      private elementRef : ElementRef,
      public iab: InAppBrowser,
      public platform: Platform,
  ) { }

  ngOnInit() {
    this.settingService.getDeviceId().then((id: any) => {
      this.gradWeekDetail(id);
      // this.gradWeekDetail('bafa706f-448d-f5d3-8697-830312657488');
    });
  }

  gotoAgenda(){
    this.navCtrl.navigateRoot('/grad-week-agenda');
  }

  gradWeekDetail(id) {
    this.isProgress = false;
    this.apiService.getGradEventDetail(id).subscribe(result => {
      this.isProgress = true;
      if (result.status) {
        this.gradWeekFaq = result.response[0];
        this.linkClick();
      }
    });
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
