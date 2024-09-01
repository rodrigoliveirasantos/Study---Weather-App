import { ChangeDetectionStrategy, Component, inject, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Subject, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
})
export class WeatherHomeComponent implements OnDestroy {
  private _weatherService = inject(WeatherService);

  cityName = '';

  submit$ = new Subject<string>();
  destroy$ = new Subject<void>();

  weatherData$ = this.submit$.pipe(
    takeUntil(this.destroy$),
    switchMap((cityName) => {
      return this._weatherService.getWeatherData(cityName);
    }),
  );

  handleSubmit() {
    this.submit$.next(this.cityName);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.submit$.complete();
    this.destroy$.complete();
  }
}
