const user = require("../models/userModel");
const jwt = require("jsonwebtoken");
const tripModel = require("../models/tripsModel");

// Middleware
const authenticateUser = (req, res, next) => {
  // Getting token from user
  const token = req.headers["authorization"].split(" ")[1];
  // console.log(token)
  if (!token) {
    return res.status(401).send({ status: false, message: "unauthorized" });
  }
  jwt.verify(token, process.env.SECERET_KEY, (err, user) => {
    if (err) {
      return res.status(403).send({ message: "invalid token" });
    }
    req.user = user;
    // console.log(user)
  });
  next();
};

const tripController = async (req, res) => {
  try {
    const { place, country, tripDate } = req.body;
    const userEmail = req.user;
    // Checking user in present or not
    const currentUser = await user.findOne({ email: userEmail });

    const post = await tripModel({
      place,
      country,
      tripDate,
      postedBy: currentUser._id,
    }).save();
    res.status(201).send({
      status: true,
      message: "Post Created Successfully",
      post,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: false, message: "Server side error" });
  }
};

// Get all trips

const getAllTrip = async (req, res) => {
  try {
    const trips = await tripModel
      .find()
      .populate("postedBy", "_id name")
      .sort({ createdAt: -1 });
    res
      .status(201)
      .send({ status: true, message: "Get all data successfully", trips });
    console.log(trips);
  } catch (error) {
    console.log("Something wents wrong");
    res.status(500).send({ status: false, message: "Server side error" });
  }
};

// get user router || GET

const getUserTrip = async (req, res) => {
  try {
    const userEmail = req.user;
    const oldUser = await user.findOne({ email: userEmail });
    const userId = oldUser._id;

    const userTrip = await tripModel
      .find({ postedBy: userId })
      .populate("postedBy", "_id name")
      .sort({ createdAt: -1 });
    res.status(201).send({
      status: true,
      message: "Get all trips of specific user",
      userTrip,
    });
    // console.log(userTrip)
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Error in getusertrip api",
    });
  }
};

// Delete Trip
const deleteTrip = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteTrip = await tripModel.findByIdAndDelete(id);
    if (!deleteTrip) {
      return res.status(404).send({ status: false, message: "Trip not found" });
    }
    res
      .status(201)
      .send({ status: true, message: "Trip delete successfully", deleteTrip });
  } catch (error) {
    console.log("Error in Delete API", error);
    res.status(500).send({
      status: false,
      message: "Error in Delete api",
    });
  }
};

module.exports = {
  authenticateUser,
  tripController,
  getAllTrip,
  getUserTrip,
  deleteTrip,
};
