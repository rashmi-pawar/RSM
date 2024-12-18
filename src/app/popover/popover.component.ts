import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';
import { Events, NavController, PopoverController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  data: any;
  show: any;
  constructor(
    private popoverController: PopoverController,
    private storageService: StorageService,
    private navCtrl: NavController,
    private events: Events,
    private navParams: NavParams,
    private router: Router) {
    console.log(JSON.parse(this.navParams.get('key')));
    this.data = JSON.parse(this.navParams.get('key'));
  }

  ngOnInit() { }
  goTo(url) {
    this.popoverController.dismiss();
    this.navCtrl.navigateRoot('/' + url);
  }
  pop(){
    console.log('pop');
  }
  delete(id) {
    this.storageService.removeReceipt(id).then(val => {
      this.events.publish('receipt:deleted', Date.now());
      this.navCtrl.navigateRoot('/viewreceipt');
    }).catch(err => {
      console.log(err);
    });
  }

  edit(data) {
    this.popoverController.dismiss();
    this.router.navigate(['/editreceipt'], {
      queryParams: { data: JSON.stringify(data) },
    });
  }

}
