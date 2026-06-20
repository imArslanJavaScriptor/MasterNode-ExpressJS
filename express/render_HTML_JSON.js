const express = require("express")

const app = express()

app.get("", (req, res) => {
    res.send(
        `
        <input type='text' placeholder="Enter Your Name"/>
        <br/>
        <a href='/contact'>Go to Contact Page</a>
        `
    )    
})

app.get("/contact", (req, res) => {
    res.send(
        `
        <h1>Contact Page</h1>
        <br/>
        <a href='/about'>Go To About Page</a>
        `
    )    
})

app.get("/about", (req, res) => {
    res.send([
        {name: "Arslan", age: 20},
        {name: "Ali", age: 45},
        {name: "Atif", age: 42},
    ])    
})

app.listen(3000, () => {
    console.log("App is listening on PORT:3000")
})