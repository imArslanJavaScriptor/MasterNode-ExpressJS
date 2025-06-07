// const index = require("./greet/index")
// console.log(index.EngFunc())
// console.log(index.UrduFunc())

const {EngFunc, UrduFunc} = require("./greet/index")
console.log(EngFunc())
console.log(UrduFunc())

// const JSONGreet = require("./greet/greeting.json")
// console.log(JSONGreet.English)
// console.log(JSONGreet.Urdu)


const {English, Urdu} = require("./greet/greeting.json")
console.log(English)
console.log(Urdu)
