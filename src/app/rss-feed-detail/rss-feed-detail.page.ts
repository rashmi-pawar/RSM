import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {ApiService} from '../api.service';
import {BackStackService} from '../service/back-stack.service';
import {ActivatedRoute} from '@angular/router';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {Platform} from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-rss-feed-detail',
  templateUrl: './rss-feed-detail.page.html',
  styleUrls: ['./rss-feed-detail.page.scss'],
})
export class RssFeedDetailPage implements OnInit {
  back;
  title;
  isProgress = false;
  feedDetail: any = {};
  constructor(
      private iab: InAppBrowser,
      private backStack: BackStackService,
      private route: ActivatedRoute,
      private apiService: ApiService,
      public platform: Platform
  ) {
    this.back = this.backStack.getBackStack('rss-feed-detail');
    this.route.queryParams.subscribe(params => {
      this.rssFeddDetail(params.url);
    });
  }

  ngOnInit() {
  }
  rssFeddDetail(url) {
    this.isProgress = false;
    this.apiService.getRSSFeedDetail(url).subscribe(result => {
      if (result.status) {
        this.feedDetail = JSON.parse(result.data);
      }
      this.isProgress = true;
    }, error => {
      console.log(error);
    });
  }

  openUrl(url) {
    this.iab.create(url, '_blank', {
      location: this.platform.is('android') ? 'yes' : 'no',
      hideurlbar: 'yes',
      hidenavigationbuttons: 'yes',
      closebuttoncaption: 'Back'
    });
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