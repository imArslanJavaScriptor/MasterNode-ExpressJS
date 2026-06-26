const dotenv = require("dotenv").config();

const express = require("express");
const connectDB = require("./db/db_connection");
const Employee = require("./models/employeeModel");

connectDB();
// Frontend sa data JSON ki form ma ata ha
// So Makue sure 
// Backedn pe jb bhi database ma value store kra yani ho JS  Object ma convert kro 
// then DB ma save krwao so for this we use this middleware.
const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.get("/", async (req, res) => {
  try {
    const employess = await Employee.find();
    res.json(employess);
  } catch (err) {
    console.log("Error", error);
  }
});

app.post("/employee", async (req, res) => {
  try {
    const { name, email, position, department } = req.body;
    const newEmployee = new Employee({
      name,
      email,
      position,
      department,
    });
    const employee = await newEmployee.save();
    res.status(201).json(employee);
    console.log("Employee added Successfully");
  } catch (err) {
    console.log("Error Saving Data", err);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT: ${PORT}`);
});
