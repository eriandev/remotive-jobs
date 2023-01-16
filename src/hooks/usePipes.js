export default function usePipes () {
  const DATE_UNITS = {
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  }

  /**
   * @param {string} requiredLocation
  */
  const getLocationIcon = (requiredLocation) => {
    switch (requiredLocation) {
      case 'Worldwide':
        return 'worldwide-symbol.png'
      case 'Anywhere':
        return 'worldwide-symbol.png'
      default:
        return 'remote-symbol.png'
    }
  }

  /**
   * @param {string} stringDate
   * @param {string|string[]} locales
  */
  const getRelativeDate = (stringDate, locales = 'en') => {
    const date = new Date(stringDate)
    const rtf = new Intl.RelativeTimeFormat(locales)
    const secondsElapsed = getSecondsDiff(date.getTime())
    const { value, unit } = getUnitAndValueDate(secondsElapsed)

    return rtf.format(value, unit)
  }

  /**
   * @param {number} timestamp
  */
  const getSecondsDiff = (timestamp) => (Date.now() - timestamp) / 1000

  /**
   * @param {number} secondsElapsed
  */
  const getUnitAndValueDate = (secondsElapsed) => {
    for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
      if (secondsElapsed >= secondsInUnit || unit === 'second') {
        const value = Math.floor(secondsElapsed / secondsInUnit) * -1
        return { value, unit }
      }
    }
    return { value: 0, unit: 'second' }
  }

  return { getLocationIcon, getRelativeDate }
}
