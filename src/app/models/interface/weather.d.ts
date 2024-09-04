type WeatherConditions =
  'Thunderstorm' |
  'Drizzle' |
  'Rain' |
  'Snow' |
  'Mist' |
  'Smoke' |
  'Dust' |
  'Fog' |
  'Sand' |
  'Dust' |
  'Ash' |
  'Squall' |
  'Tornado' |
  'Clear' |
  'Clouds'


export interface WeatherReport {
  coord: {
    lon: number,
    lat: number
  },
  weather: [
    {
      id: number,
      main: WeatherConditions,
      description: string,
      icon: string
    }
  ],
  base: string,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    sea_level: number,
    grnd_level: number,
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
  },

  timezone: number,
  id: number,
  name: string,
  cod: number
}
