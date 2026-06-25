const express = require('express');
const connectDB = require("./db/db_connection")
const dotenv = require("dotenv").config()

const PORT = process.env.PORT

const app = express()

connectDB()

const user = require("./models/userModel")

const addUser = async () => {
  await user.create({
    name: "Arslan",
    email: "arslan@gmail.com"
  })
}

addUser()

app.listen(PORT, () => {
  console.log(`App is listening on PORT:${PORT}`)
})