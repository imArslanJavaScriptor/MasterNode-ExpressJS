const dotenv = require("dotenv").config();

const express = require("express");
const connectDB = require("./db/db_connection");
const Employee = require("./models/employeeModel");

connectDB();
const app = express();
const PORT = process.env.PORT;

app.get("/", async (req, res) => {
  try {
    const employess = await Employee.find();
    res.json(employess);
  } catch (err) {
    console.log("Error", error);
  }
});

app.delete("/employees/:id", async (req, res) => {
  try {
    const employeeId = req.params.id
    const deletedEmployee = await Employee.findByIdAndDelete(employeeId)
    if(!deletedEmployee) res.status(404).json({msg: "Employee Not Found" })
    res.json({msg: "Employee Deleted Successfully"})

  } catch (err) {
    console.error("Error while deleting employee", err)
    res.status(500).send("Server Error")
  }
})

app.listen(PORT, () => {
  console.log(`App is listening on PORT: ${PORT}`);
});
