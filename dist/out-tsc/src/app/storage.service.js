import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SQLite } from '@ionic-native/sqlite/ngx';
var StorageService = /** @class */ (function () {
    function StorageService(http, sqlite) {
        this.http = http;
        this.sqlite = sqlite;
    }
    StorageService.prototype.openDatabase = function () {
        var _this = this;
        return this.sqlite.create({ name: 'ionicdb.db', location: 'default' }).then(function (db) {
            return _this.db = db;
        });
    };
    ;
    StorageService.prototype.createTable = function () {
        var _this = this;
        return this.openDatabase().then(function (res) {
            _this.db.executeSql('CREATE TABLE IF NOT EXISTS trips(id INTEGER PRIMARY KEY, origin TEXT,destination TEXT, mode TEXT, distance TEXT, unit TEXT, vehicleType TEXT, date TEXT)', [])
                .then(function (res) {
                console.log('Epppppppppppppppp');
                return res;
            })
                .catch(function (e) { return console.log(e); });
        });
    };
    ;
    StorageService.prototype.createOcrTable = function () {
        var _this = this;
        return this.openDatabase().then(function (res) {
            _this.db.executeSql('CREATE TABLE IF NOT EXISTS ocr(id INTEGER PRIMARY KEY, image TEXT,amount TEXT, description TEXT,date TEXT, claim_status TEXT, expense_type TEXT, filepath TEXT)', [])
                .then(function (res) {
                console.log('Epppppppppppppppp');
                return res;
            })
                .catch(function (e) { return console.log(e); });
        });
    };
    ;
    StorageService.prototype.addTrip = function (origin, destination, mode, distance, unit, vehicleType, date) {
        return this.db.executeSql('INSERT INTO trips VALUES(NULL,?,?,?,?,?,?,?)', [origin, destination, mode, distance, unit, vehicleType, date])
            .then(function (res) {
            return res;
        })
            .catch(function (e) {
            return e;
        });
    };
    ;
    StorageService.prototype.viewTrip = function () {
        return this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            return db.executeSql('SELECT * FROM trips ORDER BY id DESC', [])
                .then(function (res) {
                return res;
            })
                .catch(function (e) { return e; });
        }).catch(function (e) {
            console.log(e);
        });
    };
    ;
    StorageService.prototype.createVehicleTable = function () {
        var _this = this;
        return this.openDatabase().then(function (res) {
            return _this.db.executeSql('CREATE TABLE IF NOT EXISTS vehicles(id INTEGER PRIMARY KEY, name TEXT,type TEXT, date TEXT)', [])
                .then(function (res) {
                return res;
            })
                .catch(function (e) {
                return e;
            });
        });
    };
    ;
    StorageService.prototype.addVehicle = function (name, type, date) {
        var _this = this;
        return this.openDatabase().then(function (res) {
            return _this.db.executeSql('INSERT INTO vehicles VALUES(NULL,?,?,?)', [name, type, date])
                .then(function (res) {
                return res;
            })
                .catch(function (e) {
                return e;
            });
        });
    };
    ;
    StorageService.prototype.viewVehicle = function () {
        var _this = this;
        return this.openDatabase().then(function (res) {
            return _this.db.executeSql('SELECT * FROM vehicles ORDER BY id DESC', [])
                .then(function (res) {
                return res;
            })
                .catch(function (e) { return e; });
        }).catch(function (e) {
            console.log(e);
        });
    };
    ;
    StorageService.prototype.createFavTable = function () {
        var _this = this;
        return this.openDatabase().then(function (res) {
            _this.db.executeSql('CREATE TABLE IF NOT EXISTS favourites(id INTEGER PRIMARY KEY,name TEXT,url TEXT,date TEXT)', [])
                .then(function (res) {
                console.log('Epppppppppppppppp');
                return res;
            })
                .catch(function (e) { return console.log(e); });
        });
    };
    ;
    StorageService.prototype.addFav = function (name, url, date) {
        var _this = this;
        return this.openDatabase().then(function (res) {
            return _this.db.executeSql('INSERT INTO favourites VALUES(NULL,?,?,?)', [name, url, date])
                .then(function (res) {
                return res;
            })
                .catch(function (e) {
                return e;
            });
        });
    };
    ;
    StorageService.prototype.favList = function () {
        var _this = this;
        return this.openDatabase().then(function (res) {
            return _this.db.executeSql('SELECT * FROM favourites ORDER BY id DESC', [])
                .then(function (res) {
                return res;
            })
                .catch(function (e) { return e; });
        }).catch(function (e) {
            console.log(e);
        });
    };
    ;
    StorageService.prototype.viewOcr = function () {
        var _this = this;
        return this.openDatabase().then(function (res) {
            return _this.db.executeSql('SELECT * FROM ocr ORDER BY id DESC', [])
                .then(function (res) {
                return res;
            })
                .catch(function (e) { return e; });
        }).catch(function (e) {
            console.log(e);
        });
    };
    ;
    StorageService.prototype.getRecords = function (tablename, url) {
        var _this = this;
        return this.openDatabase().then(function (res) {
            return _this.db.executeSql('SELECT * FROM ' + tablename + ' WHERE url = ?', [url]).then(function (data) {
                return data;
            });
        });
    };
    ;
    StorageService.prototype.removeFav = function (name, url) {
        var _this = this;
        return this.openDatabase().then(function (res) {
            return _this.db.executeSql('DELETE FROM favourites WHERE url = ?', [url])
                .then(function (res) {
                return res;
            })
                .catch(function (e) {
                return e;
            });
        });
    };
    ;
    StorageService.prototype.removeReceipt = function (id) {
        var _this = this;
        return this.openDatabase().then(function (res) {
            return _this.db.executeSql('DELETE FROM ocr WHERE id = ?', [id])
                .then(function (res) {
                return res;
            })
                .catch(function (e) {
                return e;
            });
        });
    };
    ;
    StorageService.prototype.updateReceipt = function (data) {
        var _this = this;
        return this.openDatabase().then(function (res) {
            return _this.db.executeSql('UPDATE ocr SET image = ?, description = ?, claim_status = ?, expense_type = ?, amount = ?, filepath = ? WHERE id = ?', [data.image, data.description, data.claim_status, data.expense_type, data.amount, data.filepath, data.id])
                .then(function (res) {
                return res;
            })
                .catch(function (e) {
                return e;
            });
        });
    };
    ;
    StorageService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            SQLite])
    ], StorageService);
    return StorageService;
}());
export { StorageService };
//# sourceMappingURL=storage.service.js.map