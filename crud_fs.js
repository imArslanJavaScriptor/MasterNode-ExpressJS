const fs = require("fs")
const path = require("path")


const curdPath = path.join(__dirname, "CRUD")
const filePath = `${curdPath}/crud.txt`

// Create File
fs.writeFileSync(filePath, "CRUD: Create, Read, Update & Delete")

// Read File
fs.readFile(filePath, "utf-8", (err, file) => {
    console.log(file)
})

// Update File
// fs.appendFile(filePath, " in Node.js", (err) => {
//     if(!err) {
//         console.log("File Updated Successfully")
//     }
// })

// Delete File
// fs.unlinkSync(filePath)

// Rename File
fs.rename(filePath, `${curdPath}/CRUD.txt`, (err) => {
    if(!err) {
        console.log("File Renamed Successfully")
    }
})