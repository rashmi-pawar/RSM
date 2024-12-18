import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import {ExpandableComponent} from './components/expandable/expandable.component';
import {EventDetailPage} from './event-detail/event-detail.page';
import { ShowHidePasswordComponent } from "./updatepassword/show-hide-password.component";

@NgModule({
  declarations: [ExpandableComponent, ShowHidePasswordComponent],
  entryComponents: [ExpandableComponent, ShowHidePasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  exports: [ExpandableComponent, ShowHidePasswordComponent],
  providers: [],
})
export class SharedModule {}
