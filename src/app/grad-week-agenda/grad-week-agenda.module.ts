import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GradWeekAgendaPage, SafeHtmlPipe } from './grad-week-agenda.page';
import {PinchZoomModule} from 'ngx-pinch-zoom';

const routes: Routes = [
  {
    path: '',
    component: GradWeekAgendaPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        PinchZoomModule,
    ],
  declarations: [GradWeekAgendaPage, SafeHtmlPipe]
})
export class GradWeekAgendaPageModule {}
