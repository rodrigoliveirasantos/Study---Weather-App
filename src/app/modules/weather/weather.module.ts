import { NgModule } from "@angular/core";
import { WeatherCardHeaderComponent } from "./components/weather-card-header/weather-card-header.component";
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

@NgModule({
  declarations: [
    WeatherHomeComponent,
    WeatherFormComponent,
    WeatherCardComponent,
    WeatherCardHeaderComponent,
    WeatherCardInfoComponent,
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
