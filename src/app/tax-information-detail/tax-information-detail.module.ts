import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import {SafeHtmlPipe, TaxInformationDetailPage} from './tax-information-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TaxInformationDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TaxInformationDetailPage, SafeHtmlPipe]
})
export class TaxInformationDetailPageModule {}
