import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdatepasswordPage } from './updatepassword.page';
import { SharedModule } from '../shared.module';

const routes: Routes = [
  {
    path: '',
    component: UpdatepasswordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [UpdatepasswordPage]
})
export class UpdatepasswordPageModule {}
