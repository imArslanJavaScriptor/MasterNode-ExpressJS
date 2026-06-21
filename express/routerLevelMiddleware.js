const express = require("express");
const reqFilter = require("./middleware");

const app = express();

app.get("/", (req, res) => res.send("Home Page"));
app.get("/about", (req, res) => res.send("About Page"));

// Router Level Middleware
app.get("/services", reqFilter, (req, res) => res.send("Services Page"));

app.listen(3000, () => console.log("App is listening on PORT:3000"));