const express = require("express");
const router = express.Router();
const {registerController , loginUser} = require("../controllers/userController")

router.post('/register',registerController);
router.post('/login',loginUser)

module.exports = router;