// Builtin event listeners
// const fs = require("fs")
// const myRead = fs.createReadStream("./coreModule.txt")

// myRead.on("open", () => {
//     console.log("coreModule.txt is opened")
// })


// Customize event listeners
const event = require("events")
const eventEmmiter = new event.EventEmitter()

eventEmmiter.on("sport", (type) => {
    console.log(`I'm Playing ${type}`)
})

eventEmmiter.emit("sport", "Cricket")