const { error } = require("console")
const fs = require("fs")

// console.log(fs)

// readFile ✅
// console.log("Before Reading")
// fs.readFile("./read.txt", "utf-8", (err, data) => { // Non-Blocking Asynchrounous Code
//     if(err) console.log(err) 
//     console.log(data)
// })
// console.log("After Reading")

// console.log("Before Reading")
// const fileData = fs.readFileSync("./read.txt", "utf-8") // Blocking Synchronous Code
// console.log(fileData)
// console.log("After Reading")

// writeFile ✅
// fs.writeFile("./read.txt", "My Name is Arslan & i'm a Good Boy", (err) => {
//     if(err) throw (err)
// } )

// appendFile for updating the file ✅
// fs.appendFile("./read.txt", "\n Arslan is a Hero", (err) => {
//     if(err) throw (err)
// })

// unlink for Delete/Remove File ✅
// fs.unlink("./read.txt", (err) => {
//     if(err) throw (err)
// })

// Recommended ✅
// const readStreame = fs.createReadStream("./read.txt", "utf-8")
// // Events
// readStreame.on("data", (chunk) => {
//     console.log(chunk)
// })
// readStreame.on("end", () => {
//     console.log("Reading Completed")
// })

// const writeStreame = fs.createWriteStream("./read.txt", "utf-8")
// writeStreame.write("This is the updated .txt file content")

// Pipe: Transfer Data from 1 file to another file
const readStreame = fs.createReadStream("./read.txt")
const writeStreame = fs.createWriteStream("./receiver.txt")
readStreame.pipe(writeStreame)