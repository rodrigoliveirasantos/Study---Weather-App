import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { objectHasKey } from 'src/app/helpers/object';
import { WeatherReport } from 'src/app/models/interface/weather';
import { environment } from 'src/environments/environment';


type WeatherDataQuery = {
  cityName?: string,
  latlon?: [number, number]
}


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private _apiKey = environment.openWeatherApiKey;
  private _apiBaseUrl = `${environment.openWeatherApiUrl}/${environment.openWeatherApiVersion}`;

  private _http = inject(HttpClient);

  constructor() { }


  public getWeatherData(query: WeatherDataQuery): Observable<WeatherReport | false> {
    const url = `${this._apiBaseUrl}/weather`;

    let params = new HttpParams({
      fromObject: {
        appid: this._apiKey,
        units: "metric",
        mode: "json",
        lang: 'pt_br'
      }
    });

    if (query.latlon) {
      params = params
        .append('lat', query.latlon[0])
        .append('lon', query.latlon[1]);
    } else if (query.cityName) {
      params = params.append('q', query.cityName);
    }

    return this._http.get<WeatherReport>(url, {
      params
    }).pipe(
      catchError(() => of(false as const))
    )
  }
}
