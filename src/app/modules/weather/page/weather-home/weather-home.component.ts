import { ChangeDetectionStrategy, Component, inject, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { WeatherService } from '../../services/weather/weather.service';
import { combineLatest, map, merge, share, shareReplay, startWith, Subject, switchMap, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
})
export class WeatherHomeComponent implements OnDestroy {
  private _weatherService = inject(WeatherService);

  cityName = '';

  submit$ = new Subject<string>();
  coords$ = new Subject<[number, number]>();

  weatherData$ = this.submit$.pipe(
    switchMap((cityName) => {
      return this._weatherService.getWeatherData({
        city: cityName
      });
    }),

    shareReplay(1)
  );

  loadingWeatherData$ = merge(
    this.submit$.pipe(map(() => true)),
    this.weatherData$.pipe(map(() => false))
  );

  vm$ = combineLatest({
    weatherData: this.weatherData$.pipe(startWith(false as const)),
    loading: this.loadingWeatherData$.pipe(startWith(false)),
    submitted: this.submit$.pipe(map(() => true), take(1), startWith(false))
  });

  handleSubmit() {
    this.submit$.next(this.cityName);
  }

  ngOnDestroy(): void {
    this.submit$.complete();
  }
}
