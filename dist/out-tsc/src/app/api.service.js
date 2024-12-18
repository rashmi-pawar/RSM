import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
var baseUrl = 'http://rsm.technowand.biz/api';
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.login = function (postData) {
        return this.http.post(baseUrl + '/login', postData).map(function (response) {
            return response;
        });
    };
    ;
    ApiService.prototype.signup = function (postData) {
        return this.http.post(baseUrl + '/user', postData).map(function (response) {
            return response;
        });
    };
    ;
    ApiService.prototype.updateprofile = function (postData, id) {
        console.log(postData);
        return this.http.put(baseUrl + '/user/' + id, postData, { headers: new HttpHeaders().set('Authorization', postData.auth_token) }).map(function (response) {
            return response;
        });
    };
    ;
    ApiService.prototype.updatepassword = function (postData, id) {
        console.log(postData);
        var header = new HttpHeaders();
        header = header.append('Content-Type', 'application/x-www-form-urlencoded');
        // header = header.append('Accept','application/json');
        header = header.append('Authorization', postData.auth_token);
        return this.http.put(baseUrl + '/user/password/' + id, postData, { headers: header }).map(function (response) {
            return response;
        });
    };
    ;
    ApiService.prototype.forgotpassword = function (postData) {
        return this.http.post(baseUrl + '/user/forgetpassword', postData).map(function (response) {
            return response;
        });
    };
    ;
    ApiService.prototype.validateotp = function (postData) {
        return this.http.post(baseUrl + '/user/otp', postData).map(function (response) {
            return response;
        });
    };
    ;
    ApiService.prototype.resetpassword = function (postData) {
        return this.http.post(baseUrl + '/user/resetpassword', postData).map(function (response) {
            return response;
        });
    };
    ;
    ApiService.prototype.subscriptionlist = function (authToken) {
        console.log(authToken);
        return this.http.get(baseUrl + '/subscription/list', { headers: new HttpHeaders().set('Authorization', authToken) }).map(function (response) {
            return response;
        });
    };
    ;
    ApiService.prototype.usersubscriptionlist = function (authToken) {
        console.log(authToken);
        return this.http.get(baseUrl + '/subscription/subscribed', { headers: new HttpHeaders().set('Authorization', authToken) }).map(function (response) {
            return response;
        });
    };
    ;
    ApiService.prototype.subscribe = function (postData, authToken) {
        console.log(postData);
        return this.http.post(baseUrl + '/subscription/subscribe', postData, { headers: new HttpHeaders().set('Authorization', authToken) }).map(function (response) {
            return response;
        });
    };
    ;
    ApiService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=api.service.js.map