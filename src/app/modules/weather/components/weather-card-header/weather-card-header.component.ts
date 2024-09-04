import { Component, Input, OnInit } from '@angular/core';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { WeatherReport } from 'src/app/models/interface/weather';

@Component({
  selector: 'app-weather-card-header',
  templateUrl: './weather-card-header.component.html',
  styleUrls: ['./weather-card-header.component.scss']
})
export class WeatherCardHeaderComponent implements OnInit {

  @Input() report!: WeatherReport

  sunIcon = faSun;

  constructor() { }

  ngOnInit() {
  }

}
