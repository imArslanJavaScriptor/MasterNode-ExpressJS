const express = require("express")
const path = require("path")


const app = express()

const public = path.join(__dirname, "public")
// app.use(express.static(public))

app.get("/", (req, res) => {
    res.sendFile(`${public}/index.html`)
})

app.get("/home", (req, res) => {
    res.sendFile(`${public}/home.html`)
}) 

// Express v5 syntax for catch-all routes
app.get('/*filePath', (req, res) => {
    res.sendFile(`${public}/pageNotFound.html`)
})
app.listen(3000)