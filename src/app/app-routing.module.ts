import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherHomeComponent } from './modules/weather/page/weather-home/weather-home.component';

const routes: Routes = [
  {
    path: 'weather',
    component: WeatherHomeComponent
  },
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
