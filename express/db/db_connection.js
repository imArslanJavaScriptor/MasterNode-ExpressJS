const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI)
    console.log("DB Connect Successfully")
  } catch (error) {
    console.log("Connection Failed", error.message)
    
  }
}

module.exports = connectDB