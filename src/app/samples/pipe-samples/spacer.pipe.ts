import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spacer',
  standalone: true
})
export class SpacerPipe implements PipeTransform {

  transform(value: string): string {
    if ( value.trim().length > 0) {
      return value.split('').join(' ');
    }
    return value;
  }

}
