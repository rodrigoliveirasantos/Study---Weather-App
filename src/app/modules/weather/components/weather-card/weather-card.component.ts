import { Component, Input, OnInit } from '@angular/core';
import { faCloud, faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherReport } from 'src/app/models/interface/weather';


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.styles.scss']
})
export class WeatherCardComponent {
  @Input() weatherReport!: WeatherReport;

  /* Icones */
  minTempIcon = faTemperatureLow;
  maxTempIcon = faTemperatureHigh;
  windIcon = faWind;
  humidityIcon = faDroplet;
}
