const dotenv = require("dotenv").config()

const express = require("express")
const connectDB = require("./db/db_connection")
const Employess = require("./models/employeeModel")

const app = express()
const PORT = process.env.PORT
connectDB()

app.get('/employees', async (req, res) => {
    try {
        const employees = await Employess.find()
        res.json(employees)
    } catch (error) {
        console.log("Error Fetching Data:", error)
        res.status(500).send("Server Error")
    }
})


app.get("/employees/:id", async (req, res) => {
    try {
        const employee = await Employess.findById(req.params.id)
        if(!employee) res.status(404).json({msg: "Employee Not Found"})
        res.json(employee)
    } catch (error) {
        console.error("Error fetching Employee Data: ", error)
        res.status(500).send("Server Error")
    }
})



app.listen(PORT,  () => {
    console.log(`App is running on PORT:${PORT}`)
})