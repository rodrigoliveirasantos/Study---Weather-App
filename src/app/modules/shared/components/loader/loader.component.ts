import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBolt, faCloud, faDroplet, faSnowflake, faSun, faTornado, faWind } from '@fortawesome/free-solid-svg-icons';
import { interval, map, mapTo, scan, startWith } from 'rxjs';
import { arrayUpdated } from 'src/app/helpers/array';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  readonly iconsCount = 3;
  readonly updateInterval = 1000;
  readonly initialIcons = [0, 1, 2];

  readonly icons = [
    faCloud,
    faSun,
    faBolt,
    faDroplet,
    faSnowflake,
    faWind,
    faTornado,
  ];

  iconsIndex$ = interval(this.updateInterval).pipe(
    scan((icons, i) => {
      const index = i % this.iconsCount;
      return arrayUpdated(icons, index, () => this.getRandomIndex(icons))
    }, this.initialIcons),
    startWith(this.initialIcons)
  )

  constructor() { }

  ngOnInit() {
  }

  getRandomIndex(exclude: number[]) {
    let result: number;

    do {
      result = Math.round(Math.random() * (this.icons.length - 1));
    } while (exclude.includes(result));

    return result;
  }
}

@NgModule({
  declarations: [LoaderComponent],
  imports: [FontAwesomeModule, CommonModule],
  exports: [LoaderComponent],
})
export class LoaderComponentModule { }
