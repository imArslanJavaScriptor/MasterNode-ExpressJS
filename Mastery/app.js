import os from "node:os"
console.log("CPU's", os.cpus())
console.log("Total Memorey:", (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2))
console.log("Free Memorey:", os.freemem() / (1024 * 1024 * 1024))
console.log("Uptime:", os.uptime() / (60 * 60))
console.log("HostName:", os.hostname())
console.log("UserInfo:", os.userInfo())
console.log("Architecture:", os.machine())




// // Common JS
// // const getGreetings = require("./greeter");

// // ESM
// import getGreetings from "./greeter.js";

// const name = process.argv[2];
// const hours = new Date().getHours();


// const greetings = getGreetings(hours)
// console.log(`${greetings}, ${name}!`)
