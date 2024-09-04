import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-weather-bg',
  templateUrl: './weather-bg.component.html',
  styleUrls: ['./weather-bg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherBgComponent implements OnDestroy {
  readonly bgByCondition = new Map([
    ['Clear', ['#3FD8ED', '#10A4C5']],
    ['Rain', ['#284E7B', '#0D2F57']],
    ['Thunderstorm', ['#3A2E5C', '#251A45']],
    ['Snow', ['#7DC6EF', '#81ABC2']],
    ['Clouds', ['#F1C31D', '#5F90A5']],
    ['Fog', ['#7FD2D8', '#6DB090']],
    ['Default', ['#AAAAAA', '#999999']]
  ]);

  @Input() set condition(value: string) {
    this.condition$.next(this.bgByCondition.has(value) ? value : 'Default');
  };

  condition$ = new BehaviorSubject('Default');

  ngOnDestroy(): void {
    this.condition$.complete();
  }
}
