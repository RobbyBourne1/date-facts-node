const moment = require('moment')
const chalk = require('chalk')

console.log('It is ' + moment().format('LLLL'))

console.log('It is the ' + chalk.cyan(moment().format('DDD') + 'th ') + 'day of the year')

console.log('It is ' + chalk.yellow(moment().diff(moment().startOf('day')), 'seconds') + ' into the day')

var DST =
  moment().isDST() === true
    ? console.log('It ' + chalk.green('is ') + 'Daylight Savings Time')
    : console.log('It ' + chalk.red("isn't") + 'Daylight Savings Time')

var LeapYear =
  moment().isLeapYear() === true
    ? console.log('It ' + chalk.green('is ') + 'a leap year')
    : console.log('It ' + chalk.red("isn't ") + 'a leap year')
