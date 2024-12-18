import { Component, OnInit, NgZone } from '@angular/core';
import { ToastController, NavController, LoadingController, Events, MenuController, Platform, AlertController } from '@ionic/angular';
import { StorageService } from '../../storage.service';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { File } from '@ionic-native/file/ngx';
import { UnitHelper } from 'src/app/_helper/unitHelper';
import { DateFormat } from 'src/app/_helper/date-format';
import { SettingService } from 'src/app/service/setting.service';
import * as _ from 'lodash';
import { PageTrack } from "../../decorators/page-track.decorator";
import * as moment from 'moment';
import { remove } from 'lodash';
import { BackStackService } from 'src/app/service/back-stack.service';

/* JSZip Legacy Function for creating ZIP : not useful */
// import { saveAs } from 'file-saver';

declare var JJzip;
declare var JSZip; // ZIP file
// declare var JSZipUtils; // ZIP file utils : not useful
declare var $: any;
declare var window;

@Component({
  selector: 'app-triphistory',
  templateUrl: './triphistory.page.html',
  styleUrls: ['./triphistory.page.scss'],
})

@PageTrack("Trip History Screen")
export class TriphistoryPage implements OnInit {
  buisnesslist: any = [];
  selectedTrips = [];
  personallist: any = [];
  isFav: any;
  userid: any = '';
  items: any = [];
  name: any = '';
  date: any = '';
  userData: any = '';
  showfiler = false;
  isLoading = false;
  segmentFilter = 'buisness';
  unit: any = 'km';
  unitHelper = new UnitHelper();
  zip: any;
  dateFormat = new DateFormat();
  back;
  constructor(public navCtrl: NavController,
    private storageService: StorageService,
    public menuCtrl: MenuController,
    public router: Router,
    private events: Events,
    public loadingController: LoadingController,
    private socialSharing: SocialSharing,
    private settingService: SettingService,
    private sqliteDbCopy: SqliteDbCopy,
    public file: File,
    private webview: WebView,
    public platform: Platform,
    public toastCtrl: ToastController,
    private alertController: AlertController,
    private backStack: BackStackService,
    private zone: NgZone) {
    this.back = this.backStack.getBackStack('triphistory');

    this.menuCtrl.enable(false);

    this.events.subscribe('trip:updated', (id) => {
      this.buisnesslist = [];
      this.personallist = [];
      this.viewtrips();
    });

    this.events.subscribe('user:created', (time) => {
      this.userid = this.settingService.getUserId();
    });

    // init in Constructor
    this.zip = new JSZip();
  }

  copyDB() {
    this.sqliteDbCopy.copyDbToStorage('ionicdb.db', 0, this.file.documentsDirectory + 'RSMTRIP/', true)
      .then(res => {
        console.log('db backup created');
      })
      .catch(error => console.error(error));
  }

  ngOnInit() {
    this.userid = this.settingService.getUserId();
    this.viewtrips();

    if (this.platform.is('ios')) {
      this.copyDB();
    }

    if (this.platform.is("android")) {
      this.platform.ready().then(() => {
        this.platform.backButton.subscribeWithPriority(9999, () => {
          console.log("Back press handler!");
        });
      });
    }
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  goTo(url) {
    this.navCtrl.navigateRoot('/' + url);
  }

  details(data) {
    localStorage.setItem('backstatus', '0');
    localStorage.setItem('tripdata', JSON.stringify(data));
    this.navCtrl.navigateForward('/viewtrip');
  }

  async viewtrips() {
    this.storageService.getbyid('usersettings', this.userid)
      .then(res => {
        if (res.rows.length > 0) {
          this.unit = res.rows.item(0).unit;
        } else {
          this.unit = 'km';
        }
      });

    this.personallist = [];
    this.buisnesslist = [];
    await this.storageService
      .viewTrip(this.userid)
      .then(res => {
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {

            let finalDistance;
            if (this.unit === 'km') {
              finalDistance = res.rows.item(i).distance;
            } else {
              finalDistance = this.unitHelper.kmTomiles(res.rows.item(i).distance);
            }
            const viewStartImage = this.webview.convertFileSrc(this.file.dataDirectory + res.rows.item(i).photoStart);
            const viewEndImage = this.webview.convertFileSrc(this.file.dataDirectory + res.rows.item(i).photoEnd);
            if (res.rows.item(i).vehicleType == 'business') {
              this.buisnesslist.push({
                id: res.rows.item(i).id,
                distance: finalDistance,
                unit: this.unit,
                origin: res.rows.item(i).origin,
                destination: res.rows.item(i).destination,
                vehicleType: res.rows.item(i).vehicleType,
                vehicleName: res.rows.item(i).vehicleName,
                startdate: res.rows.item(i).startdate,
                enddate: res.rows.item(i).enddate,
                starttime: res.rows.item(i).starttime,
                endtime: res.rows.item(i).endtime,
                userid: res.rows.item(i).userid,
                notes: res.rows.item(i).notes,
                photoStart: res.rows.item(i).photoStart,
                photoEnd: res.rows.item(i).photoEnd,
                viewStartImage,
                viewEndImage,
              });
            } else {
              this.personallist.push({
                id: res.rows.item(i).id,
                distance: finalDistance,
                unit: this.unit,
                origin: res.rows.item(i).origin,
                destination: res.rows.item(i).destination,
                vehicleType: res.rows.item(i).vehicleType,
                vehicleName: res.rows.item(i).vehicleName,
                startdate: res.rows.item(i).startdate,
                enddate: res.rows.item(i).enddate,
                starttime: res.rows.item(i).starttime,
                endtime: res.rows.item(i).endtime,
                userid: res.rows.item(i).userid,
                notes: res.rows.item(i).notes,
                photoStart: res.rows.item(i).photoStart,
                photoEnd: res.rows.item(i).photoEnd,
                viewStartImage,
                viewEndImage
              });
            }
          }
          // get base64 data
          if (this.platform.is('ios')) {
            this.prepareAllImages();
          }
        } else {
          this.personallist = [];
          this.buisnesslist = [];
        }
      })
      .catch(e => {
        this.personallist = [];
        this.buisnesslist = [];
        console.log(e);
      });
  }

  // process Image for export data
  async prepareAllImages() {
    // copy database
    const context = this;
    await _.map(this.personallist, async function (img, index) {
      console.log('init processing ...', context.file.dataDirectory + img.photoStart);
      if(img.photoStart) {
        context.getFileContent(context.personallist.length, context.file.dataDirectory + img.photoStart, 'dataURL', function (base64Image) {
          console.log('init image processed');
          // context.isImageProcessed = true;
          context.personallist[index].imageDataStart = base64Image.split(',')[1];
        });
      }
      if(img.photoEnd) {
        context.getFileContent(context.personallist.length, context.file.dataDirectory + img.photoEnd, 'dataURL', function (base64Image) {
          console.log('init image processed');
          // context.isImageProcessed = true;
          context.personallist[index].imageDataEnd = base64Image.split(',')[1];
        });
      }
    });
    await _.map(this.buisnesslist, async function (img, index) {
      console.log('init processing ...', context.file.dataDirectory + img.photoStart);
      if(img.photoStart) {
        context.getFileContent(context.buisnesslist.length, context.file.dataDirectory + img.photoStart, 'dataURL', function(base64Image) {
          console.log('init image processed');
          // context.isImageProcessed = true;
          context.buisnesslist[index].imageDataStart = base64Image.split(',')[1];
        });
      }
      if(img.photoEnd) {
        context.getFileContent(context.buisnesslist.length, context.file.dataDirectory + img.photoEnd, 'dataURL', function (base64Image) {
          console.log('init image processed');
          // context.isImageProcessed = true;
          context.buisnesslist[index].imageDataEnd = base64Image.split(',')[1];
        });
      }
    });
  }

  // process Image for export data
  async prepareImgData(callback) {
    const imgData = [];
    const context = this;
    let cnt = 0;
    const tripList = [ ...this.personallist, ...this.buisnesslist];
    const companyResp = await Promise.all(tripList.map(
        async img => {
          // if (!img.imageDataStart && !img.photoStart) {
          //   context.getFileContent(tripList.length, context.file.dataDirectory + img.photoStart, 'dataURL', function (base64Image) {
          //     cnt++;
          //     // console.log('image processed');
          //     imgData.push({ name: img.photoStart, data: base64Image.split(',')[1] });
          //     if(!img.imageDataEnd && img.photoEnd) {
          //       context.getFileContent(tripList.length, context.file.dataDirectory + img.photoEnd, 'dataURL', function (base64ImageEnd) {
          //         imgData.push({ name: img.photoEnd, data: base64ImageEnd.split(',')[1] });
          //       })
          //     }
          //     if (tripList.length == cnt) {
          //       context.getFileContent(tripList.length, context.file.documentsDirectory + 'RSM/ionicdb.db', 'dataURL', function (dbData) {
          //         // console.log('db result');
          //         // console.log(dbData);
          //         imgData.push({ name: 'ionicdb.db', data: dbData.split(',')[1] });
          //         callback(imgData);
          //       });
          //     }
          //   });
          // } else {
            cnt++;
            console.log('base64 found');
            imgData.push({ name: img.photoStart, data: img.imageDataStart });
            imgData.push({ name: img.photoEnd, data: img.imageDataEnd });
            if (tripList.length == cnt) {
              context.getFileContent(tripList.length, context.file.documentsDirectory + 'RSMTRIP/ionicdb.db', 'dataURL', function (dbData) {
                // console.log('db result');
                // console.log(dbData);
                imgData.push({ name: 'ionicdb.db', data: dbData.split(',')[1] });
                callback(imgData);
              });
            }
          // }
        })
    );
    // this.getFileContent(1, this.file.documentsDirectory + 'RSM/ionicdb.db', 'dataURL', function (dbData) {
    //   imgData.push({ name: 'ionicdb.db', data: dbData.split(',')[1] });
    //   callback(imgData);
    // });
  }

  async presentToast(msg) {
    this.dismissLoadingNew();
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      mode: 'md',
      cssClass: 'customToast'
    });
    toast.present();
  }

  convertToCSV(datalist) {
    let arr = [];
    // if (this.segmentFilter === 'personal') {
    //   arr = this.personallist;
    // } else {
    //   arr = this.buisnesslist;
    // }
    arr = datalist;
    const array = typeof arr != 'object' ? arr : arr;

    // add header
    const header = {
      id: 'Id', distance: 'Distance', unit: 'Unit', origin: 'Origin', destination: 'Destination', vehicleType: 'Trip Category',
      vehicleName: 'Vehicle Name', startdate: 'Start Date', enddate: 'End Date', starttime: 'Start Time',
      endtime: 'End Time', userid: 'User Id', notes: 'Notes', photoStart: 'Start trip photo', photoEnd: 'End trip photo'
    };
    let line = '';
    for (const index in header) {
      if (line != '') { line += ','; }
      line += header[index];
    }
    let str = line + '\r\n';

    // add rows
    for (let i = 0; i < array.length; i++) {
      let line = '';
      for (const index in array[i]) {
        if (line != '') { line += ','; }
        let value = array[i][index];
        try {
          if (index == 'startdate' || index == 'enddate') {
            value = this.dateFormat.dateFormatter(value, 'date');
          }
          if (index == 'starttime' || index == 'endtime') {
            value = this.dateFormat.dateFormatter(value, 'time');
          }
        } catch (e) {
          value = array[i][index];
        }
        if (value != null) {
          value = value.toString().replace(/,/g, '-');
        } else {
          value = '';
        }
        if(['viewStartImage', 'viewEndImage', 'imageDataStart', 'imageDataEnd'].indexOf(index) > -1){
          value = '';
        }

        line += value;
      }
      str += line + '\r\n';
    }
    return str;
  }

  checklogin(pageurl, func) {
    this.userData = this.settingService.getUserData();
    if (this.userData != undefined && this.userData) {
      if (this.platform.is('ios')) {
        this.exportShare();
      } else {
        if(this.personallist.length > 0){
          this.exportAndroidPersonalCSV();
        } else if(this.buisnesslist.length > 0){
          this.exportAndroidBusinessCSV();
        } else {
          this.presentToast("No trip found");
        }
      }
    } else {
      this.router.navigate(['/login'], {
        queryParams: { data: pageurl }
      });
    }
  }

  async filerdata() {
    this.personallist = [];
    this.buisnesslist = [];
    await this.viewtrips();
    if (this.segmentFilter == 'personal') {
      if (this.date != '') {
        this.personallist = this.personallist.filter(list => {
          this.showfiler = false;
          return moment(list.startdate).format('DD/MM/yy') == moment(this.date).format('DD/MM/yy') || moment(list.enddate).format('DD/MM/yy') == moment(this.date).format('DD/MM/yy');
        });
      }

    } else {
      if (this.date != '') {
        this.buisnesslist = this.buisnesslist.filter(list => {
          this.showfiler = false;
          return moment(list.startdate).format('DD/MM/yy') == moment(this.date).format('DD/MM/yy') || moment(list.enddate).format('DD/MM/yy') == moment(this.date).format('DD/MM/yy');
        });
      }
    }

    this.showfiler = false;
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Processing...',
      duration: 2000
    });
    await loading.present();
    await loading.onDidDismiss();
  }

  // custom loader show
  async presentLoadingNew() {
    this.isLoading = true;
    return await this.loadingController
      .create({
      })
      .then(a => {
        a.present().then(() => {
          // console.log('presented');
          if (!this.isLoading) {
            a.dismiss().then(() => console.log('abort presenting'));
          }
        });
      });
    setTimeout(function () {
      this.dismissLoadingNew();
    }, 15000);
  }

  // custom loader hide
  async dismissLoadingNew() {
    this.isLoading = false;
    return await this.loadingController
      .dismiss()
      .then(() => console.log('dismissed'));
  }

  cancel() {
    this.name = '';
    this.date = '';
    this.showfiler = false;
    this.viewtrips();
  }


  // Android Export

  exportAndroidPersonalCSV() {
    console.log("exportAndroidPersonalCSV");
    this.presentLoading();
    const csv: any = this.convertToCSV(this.personallist);
    this.file.createFile(this.file.externalDataDirectory + "RSMTRIP/", "triphistory-personal.csv", true)
      .then(
        success => {
          this.file.writeFile(this.file.externalDataDirectory + "RSMTRIP/", "triphistory-personal.csv", csv, { replace: true })
            .then(
              success => {
                console.log("writeFile success", success);
                if(this.buisnesslist.length > 0){
                  this.exportAndroidBusinessCSV();
                } else {
                  this.backupdbAndroid();
                }
              },
              error => {
                console.log("writeFile error", error);
                console.log(error);
              }
            );
        },
        error => {
          console.log("createFile error");
          console.log(JSON.stringify(error));
        }
      );
  }

  exportAndroidBusinessCSV() {
    console.log("exportAndroidBusinessCSV");
    this.presentLoading();
    const csv: any = this.convertToCSV(this.buisnesslist);
    this.file.createFile(this.file.externalDataDirectory + "RSMTRIP/", "triphistory-business.csv", true)
      .then(
        success => {
          this.file.writeFile(this.file.externalDataDirectory + "RSMTRIP/", "triphistory-business.csv", csv, { replace: true })
            .then(
              success => {
                this.backupdbAndroid();
              },
              error => {
                console.log("writeFile error", error);
              }
            );
        },
        error => {
          console.log("createFile error", error);
        }
      );
  }

  backupdbAndroid() {
    console.log("backupdbAndroid");
    this.sqliteDbCopy.copyDbToStorage("ionicdb.db", 1, this.file.externalDataDirectory + "RSMTRIP/", true)
      .then(res => {
        this.createZipAndroid();
      })
      .catch(error => console.error(error));
  }

  createZipAndroid() {
    console.log("createZipAndroid");
    const context = this;
    this.file.checkFile(this.file.externalDataDirectory, "RSMTRIP.zip").then(
      success => {
        this.file.removeFile(this.file.externalDataDirectory, "RSMTRIP.zip").then(
          success => {

            const PathToFileInString = this.file.externalDataDirectory + "RSMTRIP",
              PathToResultZip = this.file.externalDataDirectory;
              console.log("PathToFileInString");
            JJzip.zip(PathToFileInString, { target: PathToResultZip, name: "RSMTRIP" },
              function (data) {
                context.uploadAndroid(PathToResultZip);
              },
              function (error) {
                context.presentToast(error.message);
                console.log("error", error);
              }
            );
          },
          error => {
            console.log("error", error);
          }
        );
      },
      error => {

        const PathToFileInString = this.file.externalDataDirectory + "RSMTRIP",
          PathToResultZip = this.file.externalDataDirectory;

        JJzip.zip(PathToFileInString, { target: PathToResultZip, name: "RSMTRIP" },
          function (data) {
            context.uploadAndroid(PathToResultZip);
          },
          function (error) {
            console.log("err", error);
          }
        );
      }
    );
  }

  uploadAndroid(data) {
    const context = this;
    this.file.checkFile(this.file.externalDataDirectory, 'RSMTRIP.zip').then(function (success) {
      const filePath = context.file.externalDataDirectory + 'RSMTRIP.zip';
      window.resolveLocalFileSystemURL(filePath, function gotFile(fileEntry) {
        fileEntry.file(function (file) {
          const reader = new FileReader();
          reader.onloadend = function (e) {
            const content: any = this.result;
            context.socialSharing.share('', `Trip details`, content).then(function (res) {

            }).catch(function (e) {
              console.log("error", e);
            });
          };
          reader.readAsDataURL(file);
        });
      },
        function fail(e) {
          console.log("FileSystem Error", e);
        }
      );

    });
  }


  // IOS Export

  // Create directory : TODO - common for crossplatform
  createDirIOSNew() {
    this.file.checkDir(this.file.documentsDirectory, 'RSMTRIP').then((success) => {
      console.log('directory already created');
    }, error => {
      this.file.createDir(this.file.documentsDirectory, 'RSMTRIP', true).then((success) => {
        console.log('directory created');
      }, err => {
        console.log('createDir error', JSON.stringify(err));
      });
    });
  }

  // ZONE.js unpatch file
  noZonePatch(status, cb: () => void) {
    // console.log('noZonePatch', status);
    if (status === 1 && localStorage.getItem('init') === 'true') {
      try {
        (window as any).FileReader = ((window as any).FileReader as any).__zone_symbol__OriginalDelegate;
        cb();
      } catch (err) {
        console.log('noZonePatch error if');
        (window as any).FileReader = FileReader;
        cb();
      } finally {
        (window as any).FileReader = FileReader;
        cb();
      }
    } else {
      try {
        (window as any).FileReader = FileReader;
        cb();
      } catch (e) {
        console.log('noZonePatch error else');
        const unpatched = ((window as any).FileReader as any).__zone_symbol__OriginalDelegate;
        (window as any).FileReader = unpatched;
        cb();
      } finally {
        (window as any).FileReader = FileReader;
        cb();
      }
    }
  }

  // get file Data
  getFileContent(status, path, mode = 'dataURL', callback) {
    const context = this;
    window.resolveLocalFileSystemURL(path, gotFile, fail);

    function fail(e) {
      console.log('FileSystem Error');
      console.log(e);
    }

    function gotFile(fileEntry) {
      fileEntry.file(function (file) {

        context.noZonePatch(status, () => {
          const reader = new FileReader();
          reader.onerror = (evt) => {
            context.zone.run(() => console.log('Error', evt));
          };
          reader.onprogress = (evt) => {
            context.zone.run(() => {
              if (evt.lengthComputable) {
                const percentLoaded = Math.round((evt.loaded / evt.total) * 100);
                // console.log(percentLoaded);
              }
            });
          };
          reader.onloadend = function (e) {
            const content = this.result;
            callback(content);
          };
          switch (mode) {
            case "text":
              reader.readAsText(file);
              break;
            case "arrayBuffer":
              reader.readAsArrayBuffer(file);
              break;
            case "binaryString":
              reader.readAsBinaryString(file);
              break;
            case "dataURL":
              reader.readAsDataURL(file);
              break;
          }
        });

      });
    }
  }


  // Export for iOS : TODO - make common for cross platform
  async exportShare() {
    let callFun = true;
    console.log('exportShare called...');
    const context = this;
    try {
      this.presentLoadingNew();

      this.createDirIOSNew();
      this.copyDB();

      const csv: any = this.convertToCSV(this.buisnesslist);
      const pcsv: any = this.convertToCSV(this.personallist);

      // get BASE64 data of images
      this.prepareImgData(function (imageData) {

        // 1. CSV data buisness
        context.zip.file("triphistorybusiness.csv", csv);

        // 2. CSV data personal
        context.zip.file("triphistorypersonal.csv", pcsv);

        // 3. Images/DB
        imageData.forEach(img => {
          context.zip.file(img.name, img.data, { base64: true });
        });

        context.zip.generateAsync({
          type: "blob",
          compression: "DEFLATE",
          compressionOptions: {
            level: 1
          },
          streamFiles: true
        }).then(function (content) {
          // console.log('generateAsync');
          if(content){
            if(callFun){
              console.log('generateAsync');
              context.writeFileiOS(content);
              callFun = false;
            }
          }
        });
      });
    } catch (e) {
      // console.log('err', e);
      context.presentToast('Something went wrong');
    }
  }

  // Create Files
  writeFileiOS(content) {
    const context = this;

    this.file.createFile(this.file.documentsDirectory + 'RSMTRIP/', 'RSMTRIP.zip', true).then(
      success => {
        // console.log('success', success, this.file.documentsDirectory);
        context.file.writeFile(this.file.documentsDirectory + 'RSMTRIP/', 'RSMTRIP.zip', content, { replace: true }).then(
          success => {
            context.openZipiOS(success.nativeURL);
          },
          error => {
            context.presentToast('Failed to export the file');
          }
        );
      },
      (error) => {
        context.presentToast('Failed to export the file');
      }
    );
  }

  // Open sharing dialog
  openZipiOS(filePath) {
    const context = this;
    // console.log(filePath);
    this.dismissLoadingNew();
    this.socialSharing.share('', 'Trip details', filePath).then(function (res) {
      console.log(res);
    }).catch(function (e) {
      // console.log('err', e);
      context.presentToast('Failed to export the file');
    });
  }

  selectTrip(event, item){
    if(event.target.checked){
      this.selectedTrips.push(item)
    } else {
      remove(this.selectedTrips, { id: item.id })
    }
  }

  async deleteReceipt(){
    if(this.selectedTrips.length > 0) {
      
      const alert = await this.alertController.create({
        header: 'Confirm!',
        message: 'Are you sure you want to delete this trips?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Yes',
            handler: () => {
              console.log('Confirm Yes');
              for(let trip of this.selectedTrips){
                console.log(trip);
                this.storageService.removeTrip(trip.id).then(async res => {
                  console.log('deleted successfully')
                  console.log(res)
                  const toast = await this.toastCtrl.create({
                    message: 'Trip deleted successfully',
                    duration: 2000,
                    mode: 'md',
                    cssClass: 'customToast'
                  });
                  toast.present();
                  this.viewtrips();
                })
              }
            }
          }
        ]
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Alert!',
        message: 'Please select atleast one trip',
        buttons: [
          {
            text: 'Okay',
            role: 'cancel',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }
        ]
      });
      await alert.present();
    }
  }

}
