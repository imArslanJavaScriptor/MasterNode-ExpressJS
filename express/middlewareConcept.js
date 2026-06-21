const express = require("express");
const app = express();

const reqFilter = (req, res, next) => {
    const salary = req.query.salary
    if(!salary) {
        res.send("Salary is not provided")
    } else if(salary < 50000) {
        res.send("Your salary is below 50000")
    } else {
        next()
    }
}

// Application Level Middleware
app.use(reqFilter)

app.get("/", (req, res) => {
  res.send("This is Home Page");
});

app.get("/about", (req, res) => {
  res.send("This is About Page");
});

app.listen(3000, () => {
  console.log("App is Listening on PORT:3000");
});
