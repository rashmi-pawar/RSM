import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {BackStackService} from '../service/back-stack.service';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import {error} from 'selenium-webdriver';
import {IonContent, Platform} from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tax-information-detail',
  templateUrl: './tax-information-detail.page.html',
  styleUrls: ['./tax-information-detail.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaxInformationDetailPage implements OnInit {
  back;
  title;
  isProgress = false;
  taxDetail: any;
  @ViewChild(IonContent) content: IonContent;
  constructor(
      private backStack: BackStackService,
      private sanitizer: DomSanitizer,
      private route: ActivatedRoute,
      private apiService: ApiService,
      private iab: InAppBrowser,
      private platform: Platform,
      private elementRef : ElementRef
  ) {
    this.back = this.backStack.getBackStack('tax-information-detail');
    this.route.queryParams.subscribe(params => {
      this.title = params.title;
      this.taxInformationDetail(params.id);

    });
  }

  ngOnInit() {
  }
  scrollTo(element: string) {
    const yOffset = document.getElementById(element).offsetTop;
    this.content.scrollByPoint(0, yOffset, 400);
  }
  taxInformationDetail(id) {
    this.isProgress = false;
    this.apiService.taxInformationDetail(id).subscribe(result => {
      this.isProgress = true;
      if (result.status) {
        this.taxDetail = result.data;
      }
      this.linkClick();
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
