import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'locationIcon' })
export class LocationIconPipe implements PipeTransform {
  transform(requiredLocation: string): string {
    switch (requiredLocation) {
      case 'Worldwide':
        return 'assets/icons/worldwide-symbol.png';
      case 'Anywhere':
        return 'assets/icons/worldwide-symbol.png';
      default:
        return 'assets/icons/remote-symbol.png';
    }
  }
}
