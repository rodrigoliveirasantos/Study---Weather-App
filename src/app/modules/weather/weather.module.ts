import { NgModule } from "@angular/core";

import { WeatherCardInfoComponent } from "./components/weather-card-info/weather-card-info.component";
import { WeatherCardComponent } from "./components/weather-card/weather-card.component";
import { WeatherFormComponent } from "./components/weather-form/weather-form.component";
import { WeatherHomeComponent } from "./page/weather-home/weather-home.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ButtonComponentModule } from "../shared/components/button/button.component";
import { TemperaturePipeModule } from "../shared/pipes/temperature/temperature.pipe";
import { CommonModule } from "@angular/common";
import { WeatherBgComponent } from "./components/weather-bg/weather-bg.component";
import { WeatherIconComponent } from "./components/weather-icon/weather-icon.component";

@NgModule({
  declarations: [
    WeatherHomeComponent,
    WeatherFormComponent,
    WeatherCardComponent,
    WeatherCardInfoComponent,
    WeatherBgComponent,
    WeatherIconComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ButtonComponentModule,
    TemperaturePipeModule
  ],
  exports: []
})
export class WeatherModule { }
