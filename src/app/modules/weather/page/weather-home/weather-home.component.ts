import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { BehaviorSubject, combineLatest, map, ReplaySubject, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherHomeComponent implements OnDestroy {
  private _weatherService = inject(WeatherService);

  formData = {
    cityName: '',
  }
  searchIcon = faMagnifyingGlass;

  submit$ = new Subject<string>();
  destroy$ = new Subject<void>();

  weatherData$ = this.submit$.pipe(
    takeUntil(this.destroy$),
    switchMap((cityName) => {
      return this._weatherService.getWeatherData(cityName);
    }),
  );

  handleSubmit() {
    this.submit$.next(this.formData.cityName);
    this.reset();
  }

  reset() {
    this.formData.cityName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
