import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bublesort'
})

export class BublesortPipe implements PipeTransform {
  transform(value: number[], ascending: boolean = true): number[] {
    const arr = [...value];
    const n = arr.length;

    if (!ascending) {
      arr.sort((a, b) => b - a);
      return arr;
    } else {
      arr.sort((a, b) => a - b);
    }
    return arr;
  }
}
