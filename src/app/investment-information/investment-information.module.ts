import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InvestmentInformationPage } from './investment-information.page';

const routes: Routes = [
  {
    path: '',
    component: InvestmentInformationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InvestmentInformationPage]
})
export class InvestmentInformationPageModule {}
