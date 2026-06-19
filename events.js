const fs = require("fs")
const myRead = fs.createReadStream("./coreModule.txt")

myRead.on("open", () => {
    console.log("coreModule.txt is opened")
})

const event = require("events")
const eventEmmiter = new event.EventEmitter()

eventEmmiter.on("play", (type) => {
    console.log(`I'm Playing ${type}`)
})

eventEmmiter.emit("play", "Cricket")