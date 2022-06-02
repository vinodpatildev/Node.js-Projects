const fs = require('fs')

// const book = {
//     title:'Dooing epick shit',
//     author:'Ankur Warikoo'
// }

// const bookJSON = JSON.stringify(book)
// const bookObj = JSON.parse(bookJSON)

// fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(data.author)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "Vinod"
data.planet = "Marse"
data.age = 22

const newDataJSON = JSON.stringify(data)

fs.writeFileSync('1-json.json',newDataJSON)

console.log(newDataJSON)