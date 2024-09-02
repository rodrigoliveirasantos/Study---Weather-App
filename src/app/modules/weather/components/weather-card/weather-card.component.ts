import { Component, Input, OnInit } from '@angular/core';
import { faCloud, faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherReport } from 'src/app/models/interface/weather';


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
})
export class WeatherCardComponent {
  @Input() weatherReport!: WeatherReport;

  /* Imagens */

  sunImg = {
    src: '/assets/img/sun.jpg',
    alt: 'Céu claro e ensolarado.'
  };
  coldImg = {
    src: '/assets/img/cold.jpg',
    alt: 'Floresta com pinheiros. Gramados e árvore estão cobertos por neve.'
  }

  /* Icones */
  minTempIcon = faTemperatureLow;
  maxTempIcon = faTemperatureHigh;
  windIcon = faWind;
  humidityIcon = faDroplet;
}
