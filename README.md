# JavaScript Date Library 
![GitHub repo size](https://img.shields.io/github/repo-size/AnniePawl/JS-Date-Library?style=flat-square)
![npm](https://img.shields.io/npm/v/@annapawl/date_library?style=flat-square)
[![Build Status](https://travis-ci.com/AnniePawl/JS-Date-Library.svg?branch=master)](https://travis-ci.com/AnniePawl/JS-Date-Library)
[![Coverage Status](https://coveralls.io/repos/github/AnniePawl/JS-Date-Library/badge.svg?branch=master)](https://coveralls.io/github/AnniePawl/JS-Date-Library?branch=master)


This is a date library wrapper that extends the functionality of the built-in javascript Date object. 

## Getting Started
Run the following command in your project folder: <br/>
```
npm install @annapawl/date_library --save
``` 
Then add this to your index.js file <br/>
```
require('@annapawl/src/date_library')
```

## Creating a Date
const d = new Date('04/11/1993')

## Date & Time Methods
**fullYear()** </br> 
This method returns a date's full year (4 digits) </br> 
`d.fullYear()` &#8594; 1993

**shortYear()** </br> 
This method returns a date's abbreviated year (2 digits) </br> 
`d.shortYear()` &#8594; 93

**monthName()** </br> 
This method returns a date's month name (January-December)</br> 
`d.monthName()` &#8594; "April"

**dayName()** </br> 
This method returns a date's day name (Mon-Sun) </br> 
`d.dayName()` &#8594; "Sunday"

**hr()** </br> 
This method returns hr date was created</br> 
`d.hr()` &#8594; "String cheese"

**min()** </br> 
This method returns a date's day </br> 
`d.min()` &#8594; "String cheese"

**sec()** </br> 
This method capitalizes the first letter of an entire string </br> 
`d.sec()` &#8594; "String cheese"

**ms()** </br> 
this method returns time's min </br> 
`'d.ms()` &#8594; "String cheese"


## Date Formatting Methods


## 'When' Method 
Returns human readble description of 'when' a date will occur. Compares date owned by class instance with current date. 



