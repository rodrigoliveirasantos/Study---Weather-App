import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { WeatherReport } from 'src/app/models/interface/weather';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private _apiKey = environment.openWeatherApiKey;
  private _apiBaseUrl = `${environment.openWeatherApiUrl}/${environment.openWeatherApiVersion}`;

  private _http = inject(HttpClient);

  constructor() { }

  public getWeatherData(city: string): Observable<WeatherReport | false> {
    const url = `${this._apiBaseUrl}/weather`;

    return this._http.get<WeatherReport>(url, {
      params: {
        q: city,
        appid: this._apiKey,
        units: "metric",
        mode: "json",
      }
    }).pipe(
      catchError(() => of(false as const))
    )
  }
}
