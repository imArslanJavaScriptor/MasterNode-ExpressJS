const dotenv = require("dotenv").config();
const express = require("express");
const multer = require("multer");
const fs = require("fs"); // 1. Import the file system module
const connectDB = require("./db/db_connection");
const File = require("./models/fileModel");

connectDB();
const app = express();
const PORT = process.env.PORT || 3000;

const fileUpload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, callBack) {
      const dir = 'uploads';
      
      // 2. Check if the directory exists, if not, create it
      if (!fs.existsSync(dir)){
          fs.mkdirSync(dir);
      }
      
      callBack(null, dir);
    },
    filename: function (req, file, callBack) {
      const uniqueName = `${file.fieldname}-${Date.now()}.png`;
      callBack(null, uniqueName);
    },
  }),
}).single("my_file");

app.post("/file-upload", fileUpload, (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded");
  }

  const newFile = new File({
    filePath: req.file.path,
  });

  newFile
    .save()
    .then(() => res.send("File Uploaded Successfully"))
    .catch((err) => res.status(500).send("Error Saving File to DB: " + err.message));
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT: ${PORT}`);
});