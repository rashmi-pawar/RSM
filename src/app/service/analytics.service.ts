import { Injectable } from "@angular/core";
import { GoogleAnalytics } from "@ionic-native/google-analytics/ngx";

@Injectable({
  providedIn: "root"
})
export class AnalyticsService {
  constructor(private googleAnalytics: GoogleAnalytics) {}

  funtiontrack(value) {
    this.googleAnalytics.trackView(value);
  }
}
