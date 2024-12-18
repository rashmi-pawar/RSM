import { Injectable } from '@angular/core';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  pushObject: PushObject;
  constructor(
  private push: Push
  ) {
      this.push.hasPermission()
      .then((res: any) => {

          if (res.isEnabled) {
              console.log('We have permission to send push notifications');
          } else {
              console.log('We do not have permission to send push notifications');
          }

      });
      const options: PushOptions = {
          android: { forceShow: true },
          ios: {
              alert: 'true',
              badge: true,
              sound: 'false'
          }
      };

      this.pushObject = this.push.init(options);
  }
}

