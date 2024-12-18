import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddfavouritesPage } from './addfavourites.page';

const routes: Routes = [
  {
    path: '',
    component: AddfavouritesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddfavouritesPage]
})
export class AddfavouritesPageModule {}
