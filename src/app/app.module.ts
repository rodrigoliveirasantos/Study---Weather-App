import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherHomeComponent } from './modules/weather/page/weather-home/weather-home.component';
import { WeatherFormComponent } from './modules/weather/components/weather-form/weather-form.component';
import { WeatherCardComponent } from './modules/weather/components/weather-card/weather-card.component';
import { WeatherCardHeaderComponent } from './modules/weather/components/weather-card-header/weather-card-header.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherHomeComponent,
    WeatherFormComponent,
    WeatherCardComponent,
    WeatherCardHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
