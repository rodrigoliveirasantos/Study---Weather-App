import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeolocationGetPositionResult } from 'src/app/models/classes/GeolocationGetPositionResult';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  getPosition() {
    return new Observable<GeolocationGetPositionResult>((subscriber) => {
      if (!('geolocation' in navigator)) {
        subscriber.next(
          new GeolocationGetPositionResult(
            GeolocationGetPositionResult.codes.MISSING_FEATURE,
            [0, 0]
          )
        );
        subscriber.complete();
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          subscriber.next(
            new GeolocationGetPositionResult(
              GeolocationGetPositionResult.codes.OK,
              [position.coords.latitude, position.coords.longitude]
            )
          );
          subscriber.complete();
        },
        (error) => {
          console.log(error);
          subscriber.next(
            new GeolocationGetPositionResult(
              error.code,
              [0, 0]
            )
          );
          subscriber.complete();
        },
        {
          enableHighAccuracy: true,
        }
      )
    });
  }
}
