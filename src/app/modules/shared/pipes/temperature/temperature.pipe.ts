import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: string | number, decimals = 0): any {
    return Number(value).toFixed(decimals) + "˚C";
  }
}
