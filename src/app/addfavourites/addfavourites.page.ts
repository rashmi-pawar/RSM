import { Component, OnInit } from "@angular/core";
import { StorageService } from "../storage.service";
import { NavController, Events } from "@ionic/angular";
import { PageTrack } from "../decorators/page-track.decorator";
import { SettingService } from '../service/setting.service';
@Component({
  selector: "app-addfavourites",
  templateUrl: "./addfavourites.page.html",
  styleUrls: ["./addfavourites.page.scss"]
})
@PageTrack("Favourites Screen")
export class AddfavouritesPage implements OnInit {
  list: any = [];
  userid: any;
  favitems = [];
  constructor(
    public navCtrl: NavController,
    public storageService: StorageService,
    public settingService: SettingService,
    public events: Events
  ) {
    this.events.subscribe('user:created', (time) => {
      this.userid = this.settingService.getUserId();
      this.viewFav();
    });
    this.events.subscribe('fav:created', (time) => {
      this.viewFav();
    });

  }

  ngOnInit() {
    this.userid = this.settingService.getUserId();
    this.viewFav();
  }
  viewFav() {
    this.favitems = [];
    this.storageService
      .favouritesList(this.userid)
      .then(res => {
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            this.favitems.push({
              id: res.rows.item(i).id,
              name: res.rows.item(i).name,
              url: res.rows.item(i).url,
              icon: res.rows.item(i).icon,
            });
          }
        } else {
          this.favitems = [];
        }
      })
      .catch(e => {
        this.favitems = [];
        console.log(e);
      });
  }
  goTo(url) {
    this.navCtrl.navigateRoot("/" + url);
  }
  pressed(event) {
    console.log("presses");
    console.log(event);
  }
}
