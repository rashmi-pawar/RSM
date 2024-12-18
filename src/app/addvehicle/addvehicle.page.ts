import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { StorageService } from "../storage.service";
import { SettingService } from "../service/setting.service";
import { ToastController, Events } from "@ionic/angular";
import { PageTrack } from "../decorators/page-track.decorator";

@Component({
  selector: "app-addvehicle",
  templateUrl: "./addvehicle.page.html",
  styleUrls: ["./addvehicle.page.scss"]
})
@PageTrack("Vehicle Screen")
export class AddvehiclePage implements OnInit {
  public onAddForm: FormGroup;
  userid: any = '';
  constructor(
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private settingService: SettingService,
    public toastCtrl: ToastController,
    public events: Events
  ) {
    this.events.subscribe('user:created', (time) => {
      this.userid = this.settingService.getUserId();
    });
  }

  ngOnInit() {
    this.userid = this.settingService.getUserId();
    this.createTable();
    this.onAddForm = this.formBuilder.group({
      vehiclename: new FormControl("", Validators.compose([Validators.required])
      ),
      vehicletype: new FormControl("", Validators.compose([Validators.required]))
    });
  }

  addVehicle(){
    console.log('addVehicle');
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: "Vehicle added successfully.",
      duration: 2000
    });
    toast.present();
  }

  createTable() {
    this.storageService
      .createVehicleTable()
      .then(res => {
      })
      .catch(error => {
        console.log(error);
      });
  }
}
