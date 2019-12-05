class Date {
  constructor(...args) {
    this.date = new Date(...args);
    // this.monthMap = {
    //   0: 'January',
    //   2: 'February',
    //   3: 'March',
    //   4: 'April',
    //   5: 'May',
    //   6: 'June',
    //   7: 'July',
    //   8: 'August',
    //   9: 'September',
    //   10: 'November',
    //   11: 'December',
    // }
  }
}


// Instantiate class 
const d = new Date('9/26/1965')

// year()
// Returns full year (4 digits)
Date.prototype.year = function () {
  return d.getFullYear(this);
}

// shortYear()
// Returns short-hand year (2 digits)
Date.prototype.shortYear = function () {
  return d.getYear(this);
}

// month()
// Returns month
Date.prototype.month = function () {
  return d.getMonth(this);
}

// date()
// Returns date
Date.prototype.date = function () {
  return d.getDate();
}

// day()
// Returns day of week
Date.prototype.day = function () {
  return d.getDay(this);
}

// hrs()
// Returns hours 
Date.prototype.hrs = function () {
  return d.getHours(this);
}

// min()
// Returns minutes 
Date.prototype.min = function () {
  return d.getMinutes(this);
}

// sec()
// Returns seconds 
Date.prototype.sec = function () {
  return d.getSeconds(this);
}

// ms() 
// Returns milliseconds
Date.prototype.ms = function () {
  return d.getMilliseconds(this)
}


