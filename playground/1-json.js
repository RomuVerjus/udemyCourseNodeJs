const fs = require('fs');

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

const secondBook = {
    title: 'Maurice is the enemy',
    author: 'Maurice Holiday'
}

const bookJson = JSON.stringify(book)
const secondBookJson = JSON.stringify(secondBook)

fs.writeFileSync("1-json.json", bookJson)
fs.appendFileSync("1-json.json", "," + secondBookJson)

const dataBuffer = fs.readFileSync("1-JSON.json")
const dataJson = "{\"notes\":[" + dataBuffer.toString() + "]}"
const data = JSON.parse(dataJson)

console.log(data);