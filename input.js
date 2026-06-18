import fs from "fs"

// console.log("Process", process.argv)
// console.log(process.argv[2])


// argv = Argument Vector.
const action = process.argv[2]
const fileName = process.argv[3]
const fileData = process.argv[4]

if(action == "create") {
    fs.writeFileSync(fileName, fileData)
} else if(action == "delete") {
    fs.unlinkSync(fileName)
}else {
    console.log("Invalid Action")
}