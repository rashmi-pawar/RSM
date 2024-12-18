import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {SettingService} from './service/setting.service';
import {Events, NavController} from '@ionic/angular';
export const baseUrl = 'https://rsm.sweetbits.com.au/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, public settingService: SettingService, public events: Events, public navCtrl: NavController) { }

  login(postData: any) {
    return this.http.post<any>(baseUrl + '/login', postData).map(response => {
      return response;
    });
  }

  signup(postData: any) {
    return this.http.post<any>(baseUrl + '/user', postData).map(response => {
      return response;
    });
  }

  azureLogin(postData: any) {
    const formData = new FormData();
    formData.append('access_token', postData.access_token);
    formData.append('deviceId', postData.deviceId);
    formData.append('userToken', postData.userToken);
    return this.http.post<any>('https://rsm.sweetbits.com.au/sso_authentication/', formData).map(response => {
      return response;
    });
  }

  checkemail(postData: any) {
    return this.http.post<any>(baseUrl + '/user/checkemail', postData).map(response => {
      return response;
    });
  }

  updateprofile(postData: any, id: any) {
    return this.http.put<any>(baseUrl + '/user/' + id, postData,
      { headers: new HttpHeaders().set('Authorization', postData.auth_token) }).map(response => {
        return response;
      });
  }

  deleteProfilePic(postData: any, id: any) {
    return this.http.delete<any>(baseUrl + '/user/profilepicdelete/' + id,
      { headers: new HttpHeaders().set('Authorization', postData.auth_token) }).map(response => {
        return response;
      });
  }
  
  deleteUser(postData: any, id: any) {
    return this.http.delete<any>(baseUrl + '/user/userdelete/' + id,
      { headers: new HttpHeaders().set('Authorization', postData.auth_token) }).map(response => {
        return response;
      });
  }

  addEventAttendees(postData: any) {
    return this.http.post<any>(baseUrl + '/event/attend', postData,
      { headers: new HttpHeaders().set('Authorization', postData.auth_token) }).map(response => {
        return response;
      });
  }

  getAttendeesStatusCheck(user_id: any, event_id: any) {
    const authToken = this.settingService.getToken();
    return this.http.get<any>(baseUrl + `/event/attend_status_check?user_id=${user_id}&event_id=${event_id}`,
      { headers: new HttpHeaders().set('Authorization', authToken) }).map(response => {
        return response;
      });
  }

  updateprofilePic(postData: any, id: any) {
    let header = new HttpHeaders();
    header = header.append('Content-Type', 'multipart/form-data');
    header = header.append('Authorization', postData.auth_token);
    return this.http.post<any>(baseUrl + '/user/profilepic/' + id, postData,
        { headers: header }).map(response => {
      return response;
    });
  }

  updatepassword(postData: any, id: any) {
    let header = new HttpHeaders();
    // header = header.append('Content-Type', 'application/x-www-form-urlencoded');
    header = header.append('Accept','application/json');
    header = header.append('Authorization', postData.auth_token);
    return this.http.put<any>(baseUrl + '/user/password/' + id, postData, { headers: header }).map(response => {
      return response;
    });
  }

  forgotpassword(postData: any) {
    return this.http.post(baseUrl + '/user/forgetpassword', postData).map(response => {
      return response;
    });
  }

  validateotp(postData: any) {
    return this.http.post(baseUrl + '/user/otp', postData).map(response => {
      return response;
    });
  }

  resetpassword(postData: any) {
    return this.http.post(baseUrl + '/user/resetpassword', postData).map(response => {
      return response;
    });
  }

  subscriptionlist(authToken: any) {
    return this.http.get(baseUrl + '/subscription/list', { headers: new HttpHeaders().set('Authorization', authToken) }).map(response => {
      return response;
    });
  }

  usersubscriptionlist(authToken: any) {
    return this.http.get(baseUrl + '/subscription/subscribed',
      { headers: new HttpHeaders().set('Authorization', authToken) }).map(response => {
        return response;
      });
  }

  subscribe(postData: any, authToken: any) {
    return this.http.post(baseUrl + '/subscription/subscribe', postData,
      { headers: new HttpHeaders().set('Authorization', authToken) }).map(response => {
        return response;
      });
  }

  sendEmail(postData: any) {
    return this.http.post(baseUrl + '/contacts', postData).map(response => {
      return response;
    });
  }

  branchlist(): any {
    return this.http.get(baseUrl + '/branchaddress').map(response => {
      return response;
    });
  }

  testBranchList(postData: any): any {
    return this.http.post(baseUrl + '/branchaddress', postData).map(response => {
      return response;
    });
  }

  calculatorlist(): any {
    return this.http.get(baseUrl + '/calculator/list').map(response => {
      return response;
    });
  }

  taxInformationList(): any {
    return this.http.get(baseUrl + '/taxes').map(response => {
      return response;
    });
  }
  taxInformationDetail(id): any {
    return this.http.get(baseUrl + '/taxes/details/' + id).map(response => {
      return response;
    });
  }
  investmentsInformationList(): any {
    return this.http.get(baseUrl + '/investment/list').map(response => {
      return response;
    });
  }
  getRSSFeedList(): any {
    return this.http.get(baseUrl + '/rssurl/list').map(response => {
      return response;
    });
  }
  getRSSFeedDetail(url): any {
    return this.http.get(baseUrl + '/rssurl/details/' + url).map(response => {
      return response;
    });
  }
  getPaymenturls(): any {
    return this.http.get(baseUrl + '/paymenturls').map(response => {
      return response;
    });
  }

  getBannerurls(): any {
    return this.http.get(baseUrl + '/banners').map(response => {
      return response;
    });
  }

  getNotificationCount(): any {
    const authToken = this.settingService.getToken();
    return this.http.get(baseUrl + '/Snotification/unread_notification_count', { headers: new HttpHeaders().set('Authorization', authToken) }).map(response => {
      return response;
    });
  }
  getNotificationList(postData): any {
    const authToken = this.settingService.getToken();
    return this.http.post(baseUrl + '/Snotification/index', postData, { headers: new HttpHeaders().set('Authorization', authToken) }).map(response => {
      return response;
    });
  }

  markAllAsReadNotification(): any {
    const authToken = this.settingService.getToken();
    return this.http.get(baseUrl + '/Snotification/notification_read_by_userid', { headers: new HttpHeaders().set('Authorization', authToken) }).map(response => {
      return response;
    });
  }

  clearAllNotification(): any {
    const authToken = this.settingService.getToken();
    return this.http.post(baseUrl + '/Snotification/clear_all_by_userid', { is_deleted: 1 }, { headers: new HttpHeaders().set('Authorization', authToken) }).map(response => {
      return response;
    });
  }

  updateDeviceToken(postData: any): any {
    return this.http.post(baseUrl + '/device', postData).map(response => {
      return response;
    });
  }

  getUpcomingEventList(): any {
    const authToken = this.settingService.getToken();
    return this.http.get(baseUrl + '/user/userupcomingevents', { headers: new HttpHeaders().set('Authorization', authToken) }).map(response => {
      return response;
    });
  }
  getPastEventList(): any {
    const authToken = this.settingService.getToken();
    return this.http.get(baseUrl + '/user/userpastevents', { headers: new HttpHeaders().set('Authorization', authToken) }).map(response => {
      return response;
    });
  }
  getCurrentEventList(sort_by, order_by): any {
    const authToken = this.settingService.getToken();
    return this.http.get(baseUrl + `/user/currenteventslist?sort_by=${sort_by}&order_by=${order_by}`, { headers: new HttpHeaders().set('Authorization', authToken) }).map(response => {
      return response;
    });
  }

  getMyEventList(): any {
    const authToken = this.settingService.getToken();
    return this.http.get(baseUrl + '/user/userevents', { headers: new HttpHeaders().set('Authorization', authToken) }).map(response => {
      return response;
    });
  }

  getMyEventDetail(id): any {
    const authToken = this.settingService.getToken();
    return this.http.get(baseUrl + '/user/usereventdetails/' + id, { headers: new HttpHeaders().set('Authorization', authToken) }).map(response => {
      return response;
    });
  }
  getEventSpeakerList(event_id): any {
      const authToken = this.settingService.getToken();
      return this.http.get(baseUrl + '/event/speakerlist?event_id=' + event_id, { headers: new HttpHeaders().set('Authorization', authToken) }).map(response => {
        return response;
      });
    }

  getEventAttendeesList(event_id): any {
    const authToken = this.settingService.getToken();
    return this.http.get(baseUrl + '/event/attendeessharelist?event_id=' + event_id, { headers: new HttpHeaders().set('Authorization', authToken) }).map(response => {
      return response;
    });
  } 

  getSimilarEventList(id): any {
    const authToken = this.settingService.getToken();
    return this.http.get(baseUrl + '/user/usersimilarevent/' + id, { headers: new HttpHeaders().set('Authorization', authToken) }).map(response => {
      return response;
    });
  }

  addEventCode(postData: any){
    return this.http.post(baseUrl + '/grad', postData).map(response => {
      return response;
    });
  }

  getGradEventDetail(id): any {
    return this.http.get(baseUrl + '/grad/device/' + id).map(response => {
      return response;
    });
  }

  getGradStatus(): any {
    return this.http.get(baseUrl + '/grad/status').map(response => {
      return response;
    });
  }

  deviceNotification(postData){
    return this.http.post(baseUrl + '/admin/devicenotification', postData).map(response => {
      return response;
    });
  }

  logout(nextURL = '') {
    this.settingService.clear();
    this.events.publish('user:created', 'logout');
    localStorage.setItem('init', 'false');
    if(nextURL) {
      this.navCtrl.navigateRoot('/login', { queryParams: { nextURL }});
    } else {
      this.navCtrl.navigateRoot('/login');
    }
  }
}
