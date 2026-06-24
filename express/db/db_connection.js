const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Adding return ensures the resolved connection promise passes back to startServer
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); 
  }
};

module.exports = connectDB;

// If you want to debug here, put it inside a function or log it after dotenv loads.
// To safely log it here for debugging purposes:
// console.log("URI Check inside file:", process.env.MONGO_URI);