import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyEventsPage } from './my-events.page';
import {SharedModule} from '../shared.module';

const routes: Routes = [
  {
    path: '',
    component: MyEventsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [MyEventsPage]
})
export class MyEventsPageModule {}
