const DATE_UNITS = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
} as const

export function getLocationIcon(requiredLocation: string) {
  return requiredLocation === 'Worldwide' || requiredLocation === 'Anywhere'
    ? 'worldwide-symbol.webp'
    : 'remote-symbol.webp'
}

export function getRelativeDate(stringDate: string, locales: string | string[] = 'en') {
  const date = new Date(stringDate)
  const rtf = new Intl.RelativeTimeFormat(locales)
  const secondsElapsed = getSecondsDiff(date.getTime())
  const { value, unit } = getUnitAndValueDate(secondsElapsed)

  return rtf.format(value, unit as Intl.RelativeTimeFormatUnit)
}

const getSecondsDiff = (timestamp: number) => (Date.now() - timestamp) / 1000

const getUnitAndValueDate = (secondsElapsed: number) => {
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondsElapsed >= secondsInUnit || unit === 'second') {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1
      return { value, unit }
    }
  }

  return { value: 0, unit: 'second' }
}
