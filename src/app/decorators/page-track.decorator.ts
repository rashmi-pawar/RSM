import { AnalyticsService } from "../service/analytics.service";
import { AppModule } from "../app.module";

export function PageTrack(pageName: string): ClassDecorator {
  return function(constructor: any) {
    const analytics: AnalyticsService = AppModule.injector.get(
      AnalyticsService
    );

    const ionViewDidEnter = constructor.prototype.ionViewDidEnter;

    constructor.prototype.ionViewDidEnter = function(...args: any[]) {
      analytics.funtiontrack(pageName);
      ionViewDidEnter && ionViewDidEnter.apply(this, args);
    };
  };
}
