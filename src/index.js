declare global {
  interface D {
    date: string;
  }
}

class D {
  constructor(...args) {
    this.date = new Date(...args);
    this.monthMap = {
      0: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'November',
      11: 'December',
    }
  }
}


// Instantiate class 
const d = new Date('9/26/1965')
const e = new Date(1970, 1, 1, 0, 0, 0)

