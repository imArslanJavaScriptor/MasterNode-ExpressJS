import express from "express";
import dotenv  from "dotenv"
import bodyParser from "body-parser"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

// Compulsary Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true})) 
// app.use(bodyParser.urlencoded({extended: true})) 

app.post("/api/v1/user/register", (req, res) => {
    const obj = req.body
    console.log(obj)
    res.status(200).json({
        success: true,
        message: "Account Created Successfully"
    })
})

app.get("/", (req, res) => {
    res.send("<h1>Chal Raha ha</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`Port is Liseting on PORT: ${PORT}`)
})