const express = require("express")
const path = require("path")
const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
    res.send("Home Page")
})

app.get("/about/:name/:id", (req, res) => {
    const userInfo = {
        id: req.params.id,
        name: req.params.name,
        favHobbies: ["Reading", "Content Creation", "Coding"]
    }
    res.render("About", {userInfo})
})

app.listen(3000)