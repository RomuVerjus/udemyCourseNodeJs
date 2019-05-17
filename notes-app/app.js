const fs = require('fs')
const utils = require('./utils.js')

fs.writeFileSync("notes.txt", utils.name + "\n")

fs.appendFileSync("notes.txt", "a second message");

console.log(utils.add(1, 2))