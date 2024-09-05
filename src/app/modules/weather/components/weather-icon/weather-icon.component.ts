import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { WeatherConditionTypes } from '../../types';
import { faCloudRain, faCloudSun, faSmog, faSnowflake, faSun, faThunderstorm, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherIconComponent {

  readonly icons = new Map<WeatherConditionTypes, IconDefinition>([
    [WeatherConditionTypes.Clear, faSun],
    [WeatherConditionTypes.Rain, faCloudRain],
    [WeatherConditionTypes.Thunderstorm, faThunderstorm],
    [WeatherConditionTypes.Snow, faSnowflake],
    [WeatherConditionTypes.Clouds, faCloudSun],
    [WeatherConditionTypes.Fog, faSmog],
    [WeatherConditionTypes.None, faSun]
  ])

  @Input() condition: WeatherConditionTypes = WeatherConditionTypes.None;

  constructor() { }
}
