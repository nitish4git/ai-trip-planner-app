const express = require("express");
const { tripController, authenticateUser, getAllTrip  , getUserTrip , deleteTrip} = require("../controllers/tripController");
const router = express.Router();

//Create Trip || Post
router.post("/create-trip", authenticateUser,tripController);

// Get Trips || GET
router.get("/get-all-trip" , getAllTrip)

// Get user trips || GET
router.get("/get-user-trip/" , authenticateUser , getUserTrip);

// Delete trip || DELETE

router.delete('/delete-trip/:id' , deleteTrip)

module.exports = router;
