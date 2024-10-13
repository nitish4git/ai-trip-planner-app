const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Dotenv config
dotenv.config();
// DataBase Connection
connectDB();


//MiddleWares
server.use(cors());
server.use(bodyParser.json());
server.use(express.urlencoded({extended:false}));

// Routes
server.use("/api/auth/" , require("./routes/userRoutes"));
server.use("/api/trip/" , require("./routes/tripRoutes"));
server.use("/api/user-trip/" , require("./routes/tripRoutes"));
server.use("/api/trip/" , require('./routes/tripRoutes'))





// Server Listen
const PORT = process.env.PORT;
server.listen(PORT,()=>{
    console.log(`server is started at port ${PORT}`);
})


