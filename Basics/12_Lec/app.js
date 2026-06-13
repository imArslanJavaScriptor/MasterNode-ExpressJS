import express from "express"
import dotenv from "dotenv"
import userRout from "./routes/user.route.js"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api/v1/user", userRout)

app.listen(PORT, () => {
    console.log(`App is Listening on PORT: ${PORT}`)
})
