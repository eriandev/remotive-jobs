import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'relativeDate' })
export class RelativeDatePipe implements PipeTransform {
  private readonly DATE_UNITS = {
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  transform(stringDate: string, locales: string | string[] = 'en'): string {
    const date = new Date(stringDate);
    const rtf = new Intl.RelativeTimeFormat(locales);
    const secondsElapsed = this.getSecondsDiff(date.getTime());
    const { value, unit } = this.getUnitAndValueDate(secondsElapsed);

    return rtf.format(value, unit);
  }

  private getSecondsDiff(timestamp: number) {
    return (Date.now() - timestamp) / 1000;
  }

  private getUnitAndValueDate(secondsElapsed: number) {
    for (const [unit, secondsInUnit] of Object.entries(this.DATE_UNITS)) {
      if (secondsElapsed >= secondsInUnit || unit === 'second') {
        const value = Math.floor(secondsElapsed / secondsInUnit) * -1;
        return { value, unit: unit as Intl.RelativeTimeFormatUnit };
      }
    }
    return { value: 0, unit: 'second' as Intl.RelativeTimeFormatUnit };
  }
}
