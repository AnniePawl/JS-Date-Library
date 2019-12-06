const Dates = require('../src/index')
const d = new Dates('04/11/1993')

// fullYear() Test 
// Returns full year (4 digits)
test('year', () => {
  expect(d.fullYear()).toBe(1993)
})

// yearShort() Test
// Returns short year (2 digits)
test('shortYear', () => {
  expect(d.shortYear()).toBe(93)
})

// monthName() Test 
// Returns the name of the month
test('monthName', () => {
  expect(d.monthName()).toBe('April')
})

// dayName() Test 
// Returns day of the week 
test('dayName', () => {
  expect(d.dayName()).toBe('Sunday')
})

// hr() Test 
// Returns hours
test('hr', () => {
  expect(d.hr()).toBe(0)
})

// min() Test 
// Returns minutes
test('min', () => {
  expect(d.min()).toBe(0)
})

// sec() Test
// Returns seconds
test('sec', () => {
  expect(d.sec()).toBe(0)
})

// ms() Test
// Returns milliseconds
test('ms', () => {
  expect(d.ms()).toBe(0)
})

// Formatting Tests 


// Date Formatting Tests
test('date', () => {
  expect(new Dates('04/11/1993 13:15:30').format('y/m/d')).toBe('93/Apr/11')
  expect(new Dates('06/12/1998 13:15:30').format('Y-m/d')).toBe('1998-Jun/12')
  expect(new Dates('03/07/1953 13:15:30').format('M/D/Y')).toBe('March/07/1953')
  expect(new Dates('03/07/1953 13:15:30').format('y/m/d')).toBe('53/Mar/7')
  expect(new Dates('03/07/1953 13:15:30').format('M d, Y')).toBe('March 7, 1953')
})

// Time Formatting Tests



// when() Test


const d = new D(2017, 0, 2, 3, 4, 5)
test
console.log(d.format()) // 2017 January 02
console.log(d.format('y/m/d')) // 17/Jan/2
console.log(d.format('H:I:S')) // 03:04:05
console.log(d.format('h:i:s')) // 3:4:5
console.log(d.format('Y-M-D h:I:S')) // 2017-January-02 3:04:05 

