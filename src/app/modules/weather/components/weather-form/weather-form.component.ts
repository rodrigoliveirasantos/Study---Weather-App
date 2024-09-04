import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.scss']
})
export class WeatherFormComponent {
  @Input() cityName!: string;
  @Output() cityNameChange = new EventEmitter<string>();

  searchIcon = faMagnifyingGlass;

  constructor() { }

  handleChange(event: string) {
    this.cityNameChange.emit(event);
  }

  handleSubmit() {
    this.reset();
  }

  reset() {
    this.cityNameChange.emit('');
  }
}
