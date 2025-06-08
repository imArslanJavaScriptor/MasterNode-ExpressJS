// const Emitter = require("./emmiter") // this is custom events
const Emitter = require("./events") // this is core node js events
const events = require("./config").events

const emiter = new Emitter()
// console.log(emiter)

// Good Practice
emiter.on(events.GREET, function() {
    console.log("Hello")
})
emiter.on(events.GREET, function() {
    console.log("Kushamdeed")
})
emiter.on(events.FILEOPEN, function() {
    console.log("File Open Successfully")
})
emiter.on(events.FILESAVED, function() {
    console.log("File Saved Successfully")
})

emiter.emit(events.GREET)
emiter.emit(events.FILEOPEN)
emiter.emit(events.FILESAVED)


// Bad Practice
emiter.on("Welcome", function() {
    console.log("Hello")
})
emiter.on("Welcome", function() {
    console.log("Hello 2")
})
emiter.on("age", function() {
    console.log("my age is 20")
})
emiter.emit("Welcome")
emiter.emit("age")