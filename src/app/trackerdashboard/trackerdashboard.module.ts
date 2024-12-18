import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrackerdashboardPage } from './trackerdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: TrackerdashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrackerdashboardPage]
})
export class TrackerdashboardPageModule {}
