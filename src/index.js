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


// Instantiate 
const d = new Dates('4/11/1993')
console.log(d.fullYear())
console.log(d.shortYear())
console.log(d.monthName())
console.log(d.dayName())
console.log(d.hr())
console.log(d.min())
console.log(d.sec())
console.log(d.ms())




// // date()
// // Returns date of month (number)
// date() {
//   return this.date.getDate();
// }












// mask = {

// }

module.exports = Dates;