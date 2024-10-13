const mongoose = require("mongoose");

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected Succesfully");
    } catch (error) {
        console.log("DB Connection Failed" , error);
    }
}

module.exports = connectDB;