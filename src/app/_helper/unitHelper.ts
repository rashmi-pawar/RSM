
export class UnitHelper {
   public defaultDistanceUnit = 'km';

   public meterToMiles(distance) {
      let finalDistance = 0;
      // tslint:disable-next-line: radix
      finalDistance = Math.round(parseInt(distance) * 0.0006213712);
      if (isNaN(finalDistance)) {
         finalDistance = 0;
      }
      return finalDistance;
   }

   public meterToKm(distance) {
      let finalDistance = 0;
      // tslint:disable-next-line: radix
      finalDistance = Math.round(parseInt(distance) / 1000);
      if (isNaN(finalDistance)) {
         finalDistance = 0;
      }
      return finalDistance;
   }

   public kmTomiles(distance) {
      let finalDistance = 0;
      // tslint:disable-next-line: radix
      finalDistance = Math.round(parseInt(distance) * 0.62137);
      if (isNaN(finalDistance)) {
         finalDistance = 0;
      }
      return finalDistance;
   }
}
