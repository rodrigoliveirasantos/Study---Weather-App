import { ChangeDetectionStrategy, Component, inject, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { WeatherService } from '../../services/weather/weather.service';
import { combineLatest, map, merge, share, shareReplay, startWith, Subject, switchMap, take, takeUntil } from 'rxjs';
import { GeolocationService } from '../../services/geolocation/geolocation.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
})
export class WeatherHomeComponent implements OnDestroy {
  private _weatherService = inject(WeatherService);
  private _geolocationService = inject(GeolocationService);

  cityName = '';

  submit$ = new Subject<string>();
  coords$ = new Subject<[number, number]>();

  weatherDataQuery$ = merge(
    this.submit$.pipe(map((cityName) => {
      return { cityName }
    })),
    this.coords$.pipe(map((latlon) => {
      return { latlon }
    }))
  )

  weatherData$ = this.weatherDataQuery$.pipe(
    switchMap((query) => {
      return this._weatherService.getWeatherData(query);
    }),
    shareReplay(1)
  );

  loadingWeatherData$ = merge(
    this.weatherDataQuery$.pipe(map(() => true)),
    this.weatherData$.pipe(map(() => false))
  );

  vm$ = combineLatest({
    weatherData: this.weatherData$.pipe(startWith(false as const)),
    loading: this.loadingWeatherData$.pipe(startWith(false)),
    submitted: this.weatherDataQuery$.pipe(map(() => true), take(1), startWith(false))
  });

  getCoords() {
    this._geolocationService.getPosition().pipe(
      takeUntil(this.submit$),
    ).subscribe((location) => {
      if (location instanceof GeolocationPosition) {
        this.coords$.next([location.coords.latitude, location.coords.longitude])
      }
    })
  }

  handleSubmit() {
    this.submit$.next(this.cityName);
  }

  ngOnDestroy(): void {
    this.submit$.complete();
  }
}
