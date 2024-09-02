import { Component, Input, OnInit } from '@angular/core';
import { WeatherReport } from 'src/app/models/interface/weather';

@Component({
  selector: 'app-weather-card-header',
  templateUrl: './weather-card-header.component.html',
})
export class WeatherCardHeaderComponent implements OnInit {

  @Input() cityName!: string;
  @Input() temp!: WeatherReport['main']['temp'];
  @Input() tempFeelsLike!: WeatherReport['main']['feels_like'];

  /* Imagens */

  sunImg = {
    src: '/assets/img/sun.jpg',
    alt: 'Céu claro e ensolarado.'
  };
  coldImg = {
    src: '/assets/img/cold.jpg',
    alt: 'Floresta com pinheiros. Gramados e árvore estão cobertos por neve.'
  }

  constructor() { }

  ngOnInit() {
  }

}
