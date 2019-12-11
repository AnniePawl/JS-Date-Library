class Dates {
  constructor(...args) {
    this.date = new Date(...args);
  }

  // year()
  // Returns full year (4 digits)
  fullYear() {
    return this.date.getFullYear();
  }

  // shortYear()
  // Returns short-hand year (2 digits)
  shortYear() {
    return this.date.getYear();
  }

  // monthName()
  // Returns month
  monthName() {
    const m = this.date.getMonth();
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    return months[m]
  }

  // dayName()
  // Returns day of week
  dayName() {
    const d = this.date.getDay()
    const days = [
      'Sunday',
      'Monday',
      'Tuesdays',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
    return days[d]
  }

  // hrs()
  // Returns hours 
  hr() {
    return this.date.getHours()
  }

  // min()
  // Returns minutes 
  min() {
    return this.date.getMinutes();
  }

  // sec()
  // Returns seconds 
  sec() {
    return this.date.getSeconds()
  }

  // ms() 
  // Returns milliseconds
  ms() {
    return this.date.getMilliseconds()
  }

  // Formatting
  mask(maskString) {
    // Year
    const fullYear = this.fullYear().toString()
    const shortYear = fullYear.slice(0, 2)
    maskString = maskString.replace('Y', fullYear)
    maskString = maskString.replace('y', shortYear)

    // Month (Name)
    const monthName = this.monthName().toString()
    const shortMonthName = monthName.slice(0, 2)
    maskString = maskString.replace('M', monthName)
    maskString = maskString.replace('m', shortMonthName)

    // Day (Name)
    const day = this.dayName().toString()
    const shortDay = day.slice(0, 1)
    maskString = maskString.replace('D', day)
    maskString = maskString.replace(d, shortDay)

    // Hour 
    const hr = this.hr().toString()
    const shortHr = hr.slice(0, 1)
    maskString = maskString.replace('H', hr)
    maskString = maskString.replace('h', shortHr)

    // Minutes 
    const min = this.min().toString()
    const shortMin = min.slice(0, 1)
    maskString = maskString.replace('I', min)
    maskString = maskString.replace('i', shortMin)

    // Second
    const sec = this.sec().toString()
    const shortSec = sec.slice(0, 2)
    maskString = maskString.replace('S', sec)
    maskString = maskString.replace('s', shortSec)

    return maskString
  }
}

const d = new Dates(2017, 0, 2, 3, 4, 5)
console.log(d.mask('')) // 2017 January 02
console.log(d.mask('y/m/d')) // 17/Jan/2
console.log(d.mask('h:i:s')) // 3:4:5
console.log(d.mask('H:I:S')) // 03:04:05
console.log(d.mask('Y-M-D h:I:S')) // 

// when()
// Returns when a date will occur (hrs, min, sec)
// when() {
//   const now = new Dates()


// }


module.exports = Dates;