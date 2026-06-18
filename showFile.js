const fs = require("fs")
const path = require("path")

const myFolder = path.join(__dirname, "myFolder")

for(let i = 1; i < 5; i++) {
    fs.writeFileSync(`${myFolder}/file${i}.txt`, `This is File: file${i}`)
}

fs.readdir(myFolder, (err, items) => {
    // console.log(items)
    items.forEach(file => console.log(file))
}) 