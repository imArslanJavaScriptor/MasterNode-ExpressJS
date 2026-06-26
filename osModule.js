const os = require("os")
// IMP: OS module ki help sa ap System ki infromation nikal skte ho like RAM, ROM etc
console.log(os.hostname())
console.log(os.arch())
console.log(os.platform())
console.log(os.homedir())
console.log(os.userInfo())
console.log(os.freemem() / (1024 * 1024 * 1024))
console.log(os.totalmem() / (1024 * 1024 * 1024))