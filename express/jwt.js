// JWT ?
// JWT ==> JsonWeToken secure way to trasmit/send/communicate your information between 2 parties securely
// JWT Divided into 3 Parts
// 1- Header: Contain Metadata of your Token
// 2- Payload: Actual data jo transfer/send krwar rhe ho.
// 3- Signature: Basicaly protect your data

const dotenv = require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const secretKey = "2dwwiojfeoivrehw8eruphfiugp";
const PORT = process.env.PORT;

app.post("/login", (req, res) => {
  const user = {
    userName: "Arslan",
    email: "arslan@gmail.com",
  };
  const token = jwt.sign({ user }, secretKey, { expiresIn: "500s" });
  res.json({ token });
});

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader) {
    const token = bearerHeader.split(" ")[1];
    req.token = token;
    next();
  } else {
    res.status(403).json({ result: "Token in not valid" });
  }
};

app.post("/protected", verifyToken, (req, res) => {
  jwt.verify(req.token, secretKey, (err, authData) => {
    if (err) {
      res.status(403).json({ result: "Unauthorized User" });
    } else {
      res.json({
        message: "You're an authorized user",
        authData,
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});


