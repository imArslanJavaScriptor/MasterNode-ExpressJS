// 1. ALWAYS load environment variables first!
const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const connectDB = require("./db/db_connection");
const User = require("./models/userModel");

const app = express();
app.use(express.json());

const startServer = async () => {
  try {
    // 2. Await the database connection
    await connectDB();
    console.log("Database connection established successfully.");

    // 3. Test seeding data
    const testUser = await User.create({
      name: "Arslan",
      email: "arslan@gmail.com",
    });
    console.log("Test user created successfully with ID:", testUser._id);

    // 4. Start listening
    app.listen(3000, () => {
      console.log("Server is Running on PORT: 3000");
    });

  } catch (error) {
    console.error("Initialization failed:", error.message || error);
    process.exit(1); 
  }
};

startServer();