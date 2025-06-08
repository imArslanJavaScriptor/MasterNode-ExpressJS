const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Chal ra ha ")
})

// app.get("/home", (req, res) => {
//     const userObj = {
//         name: "Arslan",
//         age: 20,
//         email: "imArslan@gmail.com"
//     }
//     // res.send("<h1>This is Home Route</h1>")
//     res.send(userObj)
// })


app.get("/api/v1/user/home", (req, res) => {
    res.send("<h1>This is Home Route</h1>")
})

app.get("/api/v1/user/profile", (req, res) => {
    res.status(200).json({
        success: true,
        user: {
            userName: "Arslan",
            age:20
        }
    })
    res.send("<h1>This is Home Route</h1>")
})

function callBack(req, res ) {
    res.send(`This is My Product ID: ${req.params.productId}`)
}
app.get("/api/v1/product/:productId", callBack)


app.get("/api/v1/blog/:blogID/comment/:commentID", (req, res) => {
    const {blogID, commentID} = req.params
    res.send(`
        <h1>This is Blog id: ${blogID}</h1>
        <h2>This is Comment id: ${commentID}</h2>
        `)
})
app.listen(3000) 