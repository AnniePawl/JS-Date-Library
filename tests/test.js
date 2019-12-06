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

