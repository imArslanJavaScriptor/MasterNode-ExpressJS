const express = require("express");

const app = express();

app.get("", (req, res) => {
  const getName = req.query.name
  res.send(`<h1>Hello ${getName || "World"}</h1>`);
});

app.listen(2000, () => {
  console.log("App is listening on PORT:2000");
});