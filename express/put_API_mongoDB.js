const dotenv = require("dotenv").config();

const express = require("express");
const connectDB = require("./db/db_connection");
const Employee = require("./models/employeeModel");

connectDB();
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

// kab or konsa Method
// PUT: agr existing data ki sari values ko update krna ho
// PATCH: agr existing data ki kuch fields ko update krna ho

app.put("/employee/:id", async (req, res) => {
    try {
        const employeeId = req.params.id
        const { name, email, position, department } = req.body;
        const updateEmployee = await Employee.findByIdAndUpdate(employeeId, {
            name,
            email,
            position,
            department
            // IMP: Ye  {new : true} apko newly update data retunr krta ha,
            //  agr ye new: true na ho to apko purana data return krta ha.
            // {new : true} is Deprecated now we use this: {returnDocument: "after"}
        }, {returnDocument: "after"})
        if(!updateEmployee) res.status(404).json({message: "Employee not found"});
        res.json(updateEmployee);
        console.log("Employee Data Updated Successfully")
    } catch (err) {
        console.log("Error Updating Employee Data", err);
        res.status(500).send("Server Error")
    }

})

app.listen(PORT, () => {
  console.log(`App is listening on PORT: ${PORT}`);
});