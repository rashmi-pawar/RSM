import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { constant } from './_helper/constant';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private db: SQLiteObject;
  constructor(
    private uniqueDeviceID: UniqueDeviceID,
    private sqlite: SQLite) {
  }

  openDatabase() {
    return this.uniqueDeviceID
      .get()
      .then((uuid: any) => {
        console.log("uuid",uuid);
        return this.sqlite.create({ name: 'ionicdb.db', location: 'default', key: uuid+':'+constant.secretKey }).then((db: SQLiteObject) => {
          return this.db = db;
        });
      })
  }

  createTable() {
    return this.openDatabase().then(res => {
      this.db.executeSql('CREATE TABLE IF NOT EXISTS trips(id INTEGER PRIMARY KEY, origin TEXT,destination TEXT, notes TEXT, distance TEXT, unit TEXT, vehicleType TEXT, vehicleName TEXT, startdate TEXT, enddate TEXT, starttime TEXT, endtime TEXT,userid TEXT, photoStart TEXT, photoEnd TEXT)', [])
        .then(res => {
          return res;
        })
        .catch(e => console.log(e));
    });
  }

  createOcrTable() {
    return this.openDatabase().then(res => {
      this.db.executeSql('CREATE TABLE IF NOT EXISTS ocr(id INTEGER PRIMARY KEY, image TEXT,amount TEXT, description TEXT,date TEXT, claim_status TEXT, expense_type TEXT, filepath TEXT,totalgst TEXT,claim_tax_return TEXT,payment_type TEXT,userid TEXT,claimtaxvalue TEXT,claimtaxtype TEXT)', [])
        .then(res => {
          return res;
        })
        .catch(e => console.log(e));
    });
  }

  createLocTable() {
    return this.openDatabase().then(res => {
      this.db.executeSql('CREATE TABLE IF NOT EXISTS locations(id INTEGER PRIMARY KEY, name TEXT,address TEXT,date TEXT,userid TEXT)', [])
        .then(res => {
          return res;
        })
        .catch(e => console.log(e));
    });
  }

  createSettingTable() {
    return this.openDatabase().then(res => {
      this.db.executeSql('CREATE TABLE IF NOT EXISTS usersettings(id INTEGER PRIMARY KEY, unit TEXT,date TEXT,userid TEXT)', [])
        .then(res => {
          return res;
        })
        .catch(e => console.log(e));
    });
  }

  addTrip(origin, destination, notes, distance, unit, vehicleType, vehicleName, startdate, enddate, starttime, endtime, userid, photoStart, photoEnd) {
    let newdistance;
    if (unit == 'km') {
      newdistance = parseFloat(distance);
    } else {
      newdistance = parseFloat(distance) * 1.60934;
      unit = 'km';
    }

    startdate = new Date(startdate).toISOString();
    enddate = new Date(enddate).toISOString();
    starttime = new Date(starttime).toISOString();
    endtime = new Date(endtime).toISOString();

    return this.db.executeSql('INSERT INTO trips VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [origin, destination, notes, newdistance, unit, vehicleType, vehicleName, startdate, enddate, starttime, endtime, userid, photoStart, photoEnd])
      .then(res => {
        return res;
      })
      .catch(e => {
        return e;
      });

  }

  getVehicleName(vehicle) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('SELECT * FROM vehicles WHERE platenumber = ?', [vehicle])
        .then(function(res) {
          return res;
        })
        .catch(function(e) {
          return '';
        });
    });
  }

  monthChart(userid, vehicleType) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('SELECT userid,vehicleType,ifnull(SUM(distance),0) as distance, strftime("%d", startdate) as day FROM trips WHERE userid = ? AND vehicleType = ? AND strftime("%Y", startdate) = strftime("%Y", "now") AND strftime("%m", startdate) = strftime("%m", "now") GROUP BY startdate,vehicleType', [userid, vehicleType])
        .then(function(res) {
          return res;
        })
        .catch(function(e) {
          return e;
        });
    });
  }

  weekChart(userid, vehicleType) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('SELECT userid,vehicleType,ifnull(SUM(distance),0) as distance, strftime("%Y", startdate) as year,strftime("%m",startdate) as month,strftime("%d",startdate) as day,strftime("%w", startdate) as week FROM trips WHERE userid = ? AND vehicleType = ? AND year = strftime("%Y", "now") GROUP BY startdate,vehicleType', [userid, vehicleType])
        .then(function(res) {
          return res;
        })
        .catch(function(e) {
          return e;
        });

    });
  }

  yearChart(userid, vehicleType) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('SELECT userid,vehicleType,ifnull(SUM(distance),0) as distance, strftime("%m", startdate) as month ,strftime("%Y", startdate) as year FROM trips WHERE userid = ? AND vehicleType = ? AND strftime("%Y", startdate) = strftime("%Y", "now") GROUP BY strftime("%m", startdate),vehicleType', [userid, vehicleType])
        .then(res => {
          return res;
        })
        .catch(e => {
          return e;
        });
    });
  }

  editTrip(origin, destination, notes, distance, unit, vehicleType, vehicleName, startdate, enddate, starttime, endtime, userid, id, photoStart, photoEnd) {
    let newdistance;
    if (unit == 'km') {
      newdistance = parseFloat(distance);
    } else {
      newdistance = parseFloat(distance) * 1.60934;
      unit = 'km';
    }
    startdate = new Date(startdate).toISOString();
    enddate = new Date(enddate).toISOString();
    starttime = new Date(starttime).toISOString();
    endtime = new Date(endtime).toISOString();
    return this.db.executeSql('UPDATE trips SET origin = ?, destination = ?,notes =? , distance = ?,unit = ?,vehicleType =? ,vehicleName = ?,startdate = ?,enddate = ?,starttime = ?,endtime = ? ,userid =?, photoStart = ?, photoEnd = ? WHERE id = ?', [origin, destination, notes, newdistance, unit, vehicleType, vehicleName, startdate, enddate, starttime, endtime, userid, photoStart, photoEnd, id])
      .then(ress => {
        console.log(ress);
        return ress;
      })
      .catch(eee => {
        console.log(eee);
        return eee;
      });
  }

  viewTrip(userid) {
    return this.uniqueDeviceID
      .get()
      .then((uuid: any) => {
        console.log("uuid",uuid);
        return this.sqlite.create({
          name: 'ionicdb.db',
          location: 'default',
          key: uuid+':'+constant.secretKey
        }).then((db: SQLiteObject) => {
          return db.executeSql('SELECT * FROM trips WHERE userid = ? ORDER BY id DESC', [userid])
            .then(res => {
              return res;
            })
            .catch(e => {
              return e;
            });
        }).catch(ee => {
          console.log(ee);
          return ee;
        });
      });
  }

  viewTripByVehicleType(userid: any, vehicleType: any, limit: any) {
    return this.uniqueDeviceID
      .get()
      .then((uuid: any) => {
        console.log("uuid",uuid);
        return this.sqlite.create({
          name: 'ionicdb.db',
          location: 'default',
          key: uuid+':'+constant.secretKey
        }).then((db: SQLiteObject) => {
          return db.executeSql('SELECT * FROM trips WHERE userid = ? AND vehicleType = ? ORDER BY id DESC LIMIT ?',
            [userid, vehicleType, limit])
            .then(res => {
              return res;
            })
            .catch(e => {
              return e;
            });
        }).catch(ee => {
          console.log(ee);
          return ee;
        });
      })
  }

  createVehicleTable() {
    return this.openDatabase().then(res => {
      return this.db.executeSql('CREATE TABLE IF NOT EXISTS vehicles(id INTEGER PRIMARY KEY, name TEXT,type TEXT,platenumber TEXT, date TEXT,userid TEXT)', [])
        .then(res => {
          return res;
        })
        .catch(e => {
          return e;
        });
    });
  }

  getVehicleById(id) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('SELECT * FROM vehicles WHERE id = ? LIMIT 1', [id])
        .then(result => {
          return result;
        }).catch(e => {
          return e;
        });
    }).catch(e => {
      console.log(e);
    });
  }

  getLastVehicle() {
    return this.openDatabase().then(res => {
      return this.db.executeSql('SELECT * FROM vehicles ORDER BY id DESC LIMIT 1 ')
        .then(result => {
          return result;
        }).catch(e => {
          return e;
        });
    }).catch(e => {
      console.log(e);
    });
  }


  addVehicle(name, type, platenumber, date, userid) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('SELECT * FROM vehicles WHERE platenumber = ?', [platenumber])
        .then(res => {
          if (res.rows.length > 0) {
            const resp = {
              status: 0,
              message: 'Licence Plate Number already exist'
            };
            return resp;
          } else {
            return this.db.executeSql('INSERT INTO vehicles VALUES(NULL,?,?,?,?,?)', [name, type, platenumber, date, userid])
              .then(res => {
                const resp = {
                  status: 1,
                  data: res
                };
                return resp;

              })
              .catch(e => {
                return e;
              });
          }

        }).catch(e => {
          return e;
        });

    });
  }

  addLocation(data) {
    return this.openDatabase().then(res => {
      if (data.id == '') {
        return this.db.executeSql('INSERT INTO locations VALUES(NULL,?,?,?,?)', [data.name, data.address, new Date(), data.userid])
          .then(res => {
            const resp = {
              status: 1,
              data: res,
              message: 'Location added successfully!'
            };
            return resp;
          })
          .catch(e => {
            return e;
          });
      } else {
        return this.db.executeSql('UPDATE locations SET name = ?, address = ?,date = ?, userid = ? WHERE id = ?', [data.name, data.address, data.date, data.userid, data.id])
          .then(res => {
            const resp = {
              status: 1,
              data: res,
              message: 'Location updated successfully'
            };
            return resp;
          })
          .catch(e => {
            return e;
          });
      }
    });
  }

  viewLocation(userid) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('SELECT * FROM locations WHERE userid = ? ORDER BY id DESC', [userid])
        .then(res => {
          return res;
        })
        .catch(e => e);
    }).catch(e => {
      console.log(e);
    });
  }

  removeLocation(id) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('DELETE FROM locations WHERE id = ?', [id])
        .then(res => {
          return res;
        })
        .catch(e => {
          return e;
        });
    });
  }

  viewVehicle(userid) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('SELECT * FROM vehicles WHERE userid = ? ORDER BY id DESC', [userid])
        .then(res => {
          return res;
        })
        .catch(e => e);
    }).catch(e => {
      console.log(e);
    });
  }

  removeVehicle(id) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('DELETE FROM vehicles WHERE id = ?', [id])
        .then(res => {
          return res;
        })
        .catch(e => {
          return e;
        });
    });
  }

  updateVehicle(data) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('SELECT * FROM vehicles WHERE platenumber = ?', [data.platenumber])
        .then(res => {
          if (res.rows.length > 0) {
            if (res.rows.item(0).id == data.id) {
              return this.db.executeSql('UPDATE vehicles SET name = ?, platenumber = ? WHERE id = ?', [data.name, data.platenumber, data.id])
                .then(res => {
                  const resp = {
                    status: 1,
                    data: res
                  };
                  return resp;
                })
                .catch(e => {
                  return e;
                });
            } else {
              const resp = {
                status: 0,
                message: 'Licence Plate Number already exist'
              };
              return resp;
            }

          } else {
            return this.db.executeSql('UPDATE vehicles SET name = ?, platenumber = ? WHERE id = ?', [data.name, data.platenumber, data.id])
              .then(res => {
                const resp = {
                  status: 1,
                  data: res
                };
                return resp;
              })
              .catch(e => {
                return e;
              });
          }


        });
    });
  }

  // new code
  createFavouritesTable() {
    return this.openDatabase().then(res => {
      this.db.executeSql('CREATE TABLE IF NOT EXISTS favourites(id INTEGER PRIMARY KEY,name TEXT,url TEXT,icon TEXT,userid TEXT,status INTEGER)', [])
        .then(res => {
        })
        .catch(e => console.log('error', e));
    });
  }

  addFavourites(name, url, icon, userid, status) {
    return this.openDatabase().then(res => {
      return this.createFavouritesTable().then(res => {
        return this.removeFavourites(url, userid).then(res => {
          return this.db.executeSql('INSERT INTO favourites VALUES(NULL,?,?,?,?,?)', [name, url, icon, userid, status])
            .then(function(res) {
              return res;
            })
            .catch(function(e) {
              console.log('error', e);
              return e;
            });
        })
          .catch(e => {
            console.log('error', e);
            return e;
          });
      })
        .catch(e => {
          console.log('error', e);
          return e;
        });
    });
  }

  favouritesList(userid) {
    return this.openDatabase().then(res => {
      return this.createFavouritesTable().then(res => {
        return this.db.executeSql('SELECT * FROM favourites WHERE status = 1 ORDER BY id DESC')
          .then(res => {
            return res;
          })
          .catch(e => { console.log('error', e); return e; });
      }).catch(e => {
        console.log('error', e);
      });
    })
      .catch(e => {
        console.log('error', e);
        return e;
      });
  }

  getfavourites(url, userid) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('SELECT id FROM favourites WHERE url = ? AND status = 1', [url])
        .then(res => {
          return res;
        })
        .catch(e => { console.log('error', e); return e; });
    }).catch(e => {
      console.log('error', e);
    });
  }

  removeFavourites(url, userid) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('DELETE FROM favourites WHERE url = ? AND status = 1', [url])
        .then(res => {
          return res;
        })
        .catch(e => {
          return e;
        });
    });
  }

  viewOcr(userid) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('SELECT * FROM ocr WHERE userid = ? ORDER BY id DESC', [userid]).then(data => {
        return data;
      });
    });
  }

  getOcrCount(userid) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('SELECT COUNT(*) as totalReceipt FROM ocr WHERE userid = ? ORDER BY id DESC', [userid]).then(data => {
        return data;
      });
    });
  }

  viewOcrYear(userid, year) {
    const yearSpited = year.split('-', 2);
    console.log(yearSpited);
    return this.openDatabase().then(res => {
      // ORDER BY id DESC
      return this.db.executeSql('SELECT *,strftime("%m",DATE(date)) AS month,strftime("%Y",DATE(date, "localtime", "-6 months", "start of year", "+6 months")) AS startFinYear, strftime("%Y",DATE(date, "localtime", "-6 months", "start of year", "+1 year", "+6 months", "-1 day")) AS endFinYear FROM ocr WHERE startFinYear =? AND endFinYear =? AND userid = ? ORDER BY id DESC', [yearSpited[0], yearSpited[1], userid]).then(data => {
        return data;
      });
    });
  }

  viewOcrMonth(userid, year) {
    const yearSpited = year.split('-', 2);
    return this.openDatabase().then(res => {
      return this.db.executeSql('SELECT userid,SUM(amount) AS amount,date,strftime("%m",DATE(date)) AS month,strftime("%Y",DATE(date, "localtime", "-6 months", "start of year", "+6 months")) AS startFinYear, strftime("%Y",DATE(date, "localtime", "-6 months", "start of year", "+1 year", "+6 months", "-1 day")) AS endFinYear FROM ocr WHERE startFinYear =? AND endFinYear =? AND userid = ? GROUP BY month', [yearSpited[0], yearSpited[1], userid]).then(data => {
        return data;
      });
    });
  }

  viewOcrByMonth(userid, year, month) {
    const yearSpited = year.split('-', 2);
    return this.openDatabase().then(res => {
      return this.db.executeSql('SELECT id,userid,description,amount,date,strftime("%m",DATE(date)) AS month,strftime("%Y",DATE(date, "localtime", "-6 months", "start of year", "+6 months")) AS startFinYear, strftime("%Y",DATE(date, "localtime", "-6 months", "start of year", "+1 year", "+6 months", "-1 day")) AS endFinYear FROM ocr WHERE startFinYear =? AND endFinYear =? AND userid = ? AND month = ?', [yearSpited[0], yearSpited[1], userid, month]).then(data => {
        return data;
      });
    });
  }

  viewOcrExpense(userid, year) {
    const yearSpited = year.split('-', 2);
    return this.openDatabase().then(res => {
      return this.db.executeSql('SELECT userid,image,expense_type,SUM(amount) AS amount,date,strftime("%Y",DATE(date, "localtime", "-6 months", "start of year", "+6 months")) AS startFinYear, strftime("%Y",DATE(date, "localtime", "-6 months", "start of year", "+1 year", "+6 months", "-1 day")) AS endFinYear FROM ocr WHERE startFinYear =? AND endFinYear =? AND userid = ? GROUP BY expense_type', [yearSpited[0], yearSpited[1], userid]).then(data => {
        return data;
      });
    });
  }

  viewOcrByExpense(userid, year, expenseType) {
    const yearSpited = year.split('-', 2);
    return this.openDatabase().then(res => {
      return this.db.executeSql('SELECT id,userid,description,expense_type,amount,date,strftime("%Y",DATE(date, "localtime", "-6 months", "start of year", "+6 months")) AS startFinYear, strftime("%Y",DATE(date, "localtime", "-6 months", "start of year", "+1 year", "+6 months", "-1 day")) AS endFinYear FROM ocr WHERE startFinYear =? AND endFinYear =? AND userid = ? AND expense_type = ?', [yearSpited[0], yearSpited[1], userid, expenseType]).then(data => {
        return data;
      });
    });
  }

  viewReceiptbyid(id) {
    return this.openDatabase().then(res => {
      // ORDER BY id DESC
      return this.db.executeSql('SELECT * FROM ocr WHERE id = ?', [id]).then(data => {
        return data;
      });
    });
  }

  getRecords(tablename, url, userid) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('SELECT * FROM ' + tablename + ' WHERE url = ? AND userid = ?', [url, userid]).then(data => {
        return data;
      });
    });
  }

  updateUserid(userid) {
    return this.openDatabase().then(res => {

      return this.db.executeSql('UPDATE ocr SET userid = ?  WHERE userid = ?', [userid, 0])
        .then(res => {
          return this.updateUseridtrip(userid);
        })
        .catch(e => {
          return this.updateUseridtrip(userid);
        });
    });
  }

  updateUseridtrip(userid) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('UPDATE trips SET userid = ?  WHERE userid = ?', [userid, 0])
        .then(res => {
          return this.updateUseridlocation(userid);
        })
        .catch(e => {
          return this.updateUseridlocation(userid);
        });
    });
  }

  updateUseridlocation(userid) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('UPDATE locations SET userid = ?  WHERE userid = ?', [userid, 0])
        .then(res => {
          return this.updateUseridveh(userid);
        })
        .catch(e => {
          return this.updateUseridveh(userid);
        });
    });
  }

  updateUseridveh(userid) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('UPDATE vehicles SET userid = ?  WHERE userid = ?', [userid, 0])
        .then(res => {
          return this.updateUseridsettings(userid);
        })
        .catch(e => {
          return this.updateUseridsettings(userid);
        });
    });
  }

  updateUseridsettings(userid) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('UPDATE usersettings SET userid = ?  WHERE userid = ?', [userid, 0]);

    });
  }

  removeReceipt(id) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('DELETE FROM ocr WHERE id = ?', [id])
        .then(res => {
          return res;
        })
        .catch(e => {
          return e;
        });
    });
  }

  removeTrip(id) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('DELETE FROM trips WHERE id = ?', [id])
        .then(res => {
          return res;
        })
        .catch(e => {
          return e;
        });
    });
  }

  updateReceipt(data) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('UPDATE ocr SET image = ?, description = ?, claim_status = ?, expense_type = ?, amount = ?, filepath = ?, totalgst = ?, claim_tax_return = ?, payment_type = ?,claimtaxvalue =?,claimtaxtype=?, date=? WHERE id = ?', [data.image, data.description, data.claim_status, data.expense_type, data.amount, data.filepath, data.totalgst, data.claim_tax_return, data.payment_type, data.tax_claim_value, data.tax_claim_type, data.date, data.id])
        .then(res => {
          return res;
        })
        .catch(e => {
          return e;
        });
    });
  }

  updateSettings(data) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('SELECT * FROM usersettings WHERE userid = ?', [data.userid])
        .then(res => {
          if (res.rows.length > 0) {
            return this.db.executeSql('UPDATE usersettings SET unit = ? WHERE userid = ?', [data.unit, data.userid])
              .then(res => {
                return res;
              })
              .catch(e => {
                return e;
              });
          } else {
            return this.db.executeSql('INSERT INTO usersettings VALUES(NULL,?,?,?)', [data.unit, new Date(), data.userid])
              .then(res => {
                return res;
              })
              .catch(e => {
                return e;
              });
          }
        });
    });
  }

  getbyid(tablename, userid) {
    return this.openDatabase().then(res => {
      return this.db.executeSql('SELECT * FROM ' + tablename + ' WHERE userid = ?', [userid]).then(data => {
        return data;
      });
    });
  }

}
