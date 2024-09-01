import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-weather-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './weather-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherHomeComponent { }
