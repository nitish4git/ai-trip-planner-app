
const mongoose = require("mongoose");
const tripSchema = new mongoose.Schema({
    place:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    tripDate:{
        type:String,
        required:true
    },
    postedBy:{
        type:mongoose.Schema.ObjectId,
        ref:"user",
        required:true
    }
} ,{timestamps:true})

const trip = new mongoose.model("trip" , tripSchema);

module.exports = trip;