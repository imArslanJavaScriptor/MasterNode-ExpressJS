const dotenv = require("dotenv").config();

const express = require("express");
const connectDB = require("./db/db_connection");
const Employees = require("./models/employeeModel");

connectDB();

const app = express();
const PORT = process.env.PORT;

const getEmployess = async () => {
  const employess = await Employees.find();
  console.log("Employess Data: ", employess);
};

const updateEmployess = async (id, updatedData) => {
  const result = await Employees.updateOne({ _id: id }, { $set: updatedData });
  console.log(
    result.nModified === 0
      ? `No Updates for employee: ${id}`
      : "Updated Employee Data:", result,
  );
};

const deleteEmployee = async (id) => {
    await Employees.findByIdAndDelete(id)
    console.log(`Employee ${id} Deleted`)
}

const main = async () => {
    await getEmployess()
    const empId = "6a3cab7d7f676df663f8d63d"
    const updatedData = {
        name: "King Arslan",
        position: "Team Lead",
        department: "Dev"
        
    }
    await updateEmployess(empId, updatedData)
    await getEmployess()

    await deleteEmployee("6a3cab6e8d0ac448dd6b22dc")
    await getEmployess()
}

main()

app.listen(PORT, () => {
  console.log(`App is listening on PORT:${PORT}`);
});
