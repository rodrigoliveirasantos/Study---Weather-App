import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  getPosition() {
    return new Observable<
      GeolocationPosition |
      GeolocationPositionError
    >((subscriber) => {
      if (!('geolocation' in navigator)) {
        subscriber.error();
        subscriber.complete();
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          subscriber.next(position);
          subscriber.complete();
        },
        (error) => {
          subscriber.error(error);
          subscriber.complete();
        },
        {
          enableHighAccuracy: true,
        }
      )
    });
  }
}
