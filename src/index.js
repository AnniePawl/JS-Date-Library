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
    return this.date.getMinutes()
  }

  // ms() 
  // Returns milliseconds
  ms() {
    return this.date.getMilliseconds()
  }
}


// Formatting
mask = () => {
  // Year
  const fullYear = this.getYear().toString()
  const shortYear = clipString(fullYear, 2, true)
  mask = mask.replace('Y', fullYear)
  mask = mask.replace('y', shortYear)

  // Month
  const month = this.getMonth().toString()
  const paddedMonth = leftPad(month, 2)
  mask = mask.replace('M', paddedMonth)
  mask = mask.replace('m', month)



}

const d = new Dates(2017, 0, 2, 3, 4, 5)
console.log(d.format()) // 2017 January 02
console.log(d.format('y/m/d')) // 17/Jan/2
console.log(d.format('H:I:S')) // 03:04:05
console.log(d.format('h:i:s')) // 3:4:5
console.log(d.format('Y-M-D h:I:S')) // 2017-January-02 3:04:05


// when()
// Returns when a date will occur (hrs, min, sec)
when() {
  const now = new Dates()

  const years = 

  
}


module.exports = Dates;