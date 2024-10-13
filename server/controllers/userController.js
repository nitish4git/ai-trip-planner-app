const user = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const  { expressjwt: jwt1 } = require("express-jwt");

// Middleware

// const requireSignIn = ()=> jwt1({
//   secret:process.env.SECERET_KEY,
//   algorithms:["HS256"]
// })

// User Registraion.
const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Checking user already exist or not
    const existingUser = await user.findOne({ email: email });
    if (existingUser) {
      return res
        .status(500)
        .send({ status: "failed", message: "Email is already registerd" });
    }
    // hashing password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Saving user
    const newUser = await user({
      name,
      email,
      password: hashedPassword,
    }).save();
    return res
      .status(201)
      .send({ status: true, message: "Registration successfull" });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, message: "Internal Server Error", error });
  }
};

// User Login

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Checking user is registered or not
    const existingUser = await user.findOne({ email: email });
    if (!existingUser) {
      return res
        .status(400)
        .send({ status: false, message: `${email} is not registered` });
    }
    // checking password is correct or not
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res
        .status(400)
        .send({ status: false, message: "Incorrect email or password" });
    }
    // Generation token
    const token = await jwt.sign(email, process.env.SECERET_KEY);
    return res.status(201).send({
      status: true,
      message: "Logged in successfull",
      existingUser,
      token,
    });
  } catch (error) {
    return res
      .status(400)
      .send({ status: false, message: "something went wrong.Try Again" });
  }
};

module.exports = {  registerController, loginUser };
