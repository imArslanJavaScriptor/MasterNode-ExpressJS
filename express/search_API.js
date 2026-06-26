const dotenv = require("dotenv").config();

const express = require("express");
const connectDB = require("./db/db_connection");
const Employee = require("./models/employeeModel");

connectDB();
const app = express();
const PORT = process.env.PORT;

// Search API
app.get("/search-emp/:value", async (req, res) => {
  const searchValue = req.params.value;
  const result = await Employee.find({
    // To Search From Database and the $option to remove case sensitvity restriction
    $or: [{ name: { $regex: searchValue , $options: "i"} }],
    $or: [{ email: { $regex: searchValue , $options: "i"} }],
    $or: [{ position: { $regex: searchValue, $options: "i" } }],
  });
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT: ${PORT}`);
});