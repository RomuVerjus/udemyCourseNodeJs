const fs = require('fs')
const utils = require('./utils.js')
const validator = require('validator')
const chalk = require('chalk')

fs.writeFileSync("notes.txt", utils.name + "\n")

fs.appendFileSync("notes.txt", "a second message");


const colorize = chalk.blue.underline 
console.log(colorize(utils.add(1, 2)))
