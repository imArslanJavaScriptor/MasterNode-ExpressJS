// 1. Always load environment variables first
require("dotenv").config(); 

const express = require("express");
const connectDB = require("./db/db_connection");
const Employee = require("./models/employeeModel");

const app = express();
const PORT = process.env.PORT

// 2. Connect to the Database
connectDB();

const addEmployee = async () => {
    try {
        await Employee.create({
            name: "Ali Zafar",
            email: "ali@zafar.com",
            position: "Singer/Actor",
            department: "Entertainment" // Fixed the spelling typo here
        });        
        console.log("Employee added successfully!");
    } catch (error) {
        console.error("Error adding employee:", error.message);
    }
};


addEmployee();

const getEmployees = async () => {
    const employees = await Employee.find();
    console.log(employees);
};

getEmployees()
 
// 5. Start server
app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
});