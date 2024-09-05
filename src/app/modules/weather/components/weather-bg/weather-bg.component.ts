import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WeatherConditionTypes } from '../../types';

@Component({
  selector: 'app-weather-bg',
  templateUrl: './weather-bg.component.html',
  styleUrls: ['./weather-bg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherBgComponent implements OnDestroy {
  readonly bgByCondition = new Map<WeatherConditionTypes, string[]>([
    [WeatherConditionTypes.Clear, ['#3FD8ED', '#10A4C5']],
    [WeatherConditionTypes.Rain, ['#284E7B', '#0D2F57']],
    [WeatherConditionTypes.Thunderstorm, ['#3A2E5C', '#251A45']],
    [WeatherConditionTypes.Snow, ['#7DC6EF', '#81ABC2']],
    [WeatherConditionTypes.Clouds, ['#F1C31D', '#5F90A5']],
    [WeatherConditionTypes.Fog, ['#7FD2D8', '#6DB090']],
    [WeatherConditionTypes.None, ['#AAAAAA', '#999999']]
  ]);

  @Input() set condition(value: WeatherConditionTypes) {
    this.condition$.next(this.bgByCondition.has(value) ? value : WeatherConditionTypes.None);
  };

  condition$ = new BehaviorSubject(WeatherConditionTypes.None);

  ngOnDestroy(): void {
    this.condition$.complete();
  }
}
