import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
// import { LocationPage } from '../location/location.page';
import { IonicModule } from '@ionic/angular';

import { ManualtripPage } from './manualtrip.page';

const routes: Routes = [
  {
    path: '',
    component: ManualtripPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManualtripPage]
})
export class ManualtripPageModule {}
