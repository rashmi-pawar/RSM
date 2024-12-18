import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { BackStackService } from '../service/back-stack.service';
import { PageTrack } from '../decorators/page-track.decorator';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.page.html',
  styleUrls: ['./tools.page.scss'],
})
@PageTrack('Tools And Calculators Screen')
export class ToolsPage implements OnInit {

  constructor(public navCtrl: NavController, private backStack: BackStackService) { }

  ngOnInit() {
  }

  goTo(url) {
    this.backStack.setBackStack(url, 'tools');
    this.navCtrl.navigateRoot('/' + url);
  }
  pagePush(url) {
    this.navCtrl.navigateForward('/' + url);
  }
}
