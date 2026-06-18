// Core Modules
// 1- Global Core Module (Jin ko use krne ke liye imprkrt krwane ki zarora nhi prti like console)
// 2- Local Core Module (Import krwana prt ha use krne keliyia.)
const myFile = require("fs").writeFileSync
myFile("./coreModule.txt", "Core Modules in JS")