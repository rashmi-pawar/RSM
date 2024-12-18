import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RssFeedDetailPage, SafeHtmlPipe } from './rss-feed-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RssFeedDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RssFeedDetailPage, SafeHtmlPipe]
})
export class RssFeedDetailPageModule {}
