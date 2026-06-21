const express = require("express")
const path = require("path")
const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))


const empInfo = {
    name: "Arslan",
    age: 20,
    profession: "Software Engineer"
}
    

app.get("/", (req, res) => {
    res.send('Welcome Home')
})

app.get("/welcome", (req, res) => {
    res.render('Welcome', {empInfo})
})

app.get("/about", (req, res) => {
    res.render('about', {empInfo})
})

app.listen(3000, () => {
    console.log("App is Listening on PORT:3000")
})