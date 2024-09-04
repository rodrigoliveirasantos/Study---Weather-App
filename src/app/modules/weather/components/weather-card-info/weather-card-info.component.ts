import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-weather-card-info',
  templateUrl: './weather-card-info.component.html',
  styleUrls: ['./weather-card-info.component.scss']
})
export class WeatherCardInfoComponent {
  @Input() label: string = '';
  @Input() value: string | number = '';
  @Input() icon!: IconProp;
}
