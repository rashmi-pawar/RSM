import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { BackStackService } from '../service/back-stack.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private menuCtrl: MenuController,
              public navCtrl: NavController,
              private backStack: BackStackService) { }

  ngOnInit() {
  }

  openMenu() {
    this.menuCtrl.enable(true, 'menu');
    this.menuCtrl.open('menu');
  }
  // Start the slide autoplay when the view will enter
  public ionViewWillEnter() {
    if (this.backStack.getBackFromMenu()) {
      this.backStack.resetBackFromMenu();
      this.openMenu();
    }
  }

  goTo(url) {
    this.backStack.setBackStack(url, 'tabs/dashboard');
  }

}
