const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

//@route POST api/auth/register
//@desc Register user
//@access Public

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  //Simple validation
  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Missing username or password" });
  }
  try {
    //check for existing user
    const user = await User.findOne({ username: username });

    if (user)
      return res.status(400).json({ success: false, message: "User already" });

    // All good day
    const hashPassword = await argon2.hash(password);
    const newUser = new User({ username: username, password: hashPassword });

    await newUser.save();

    // Return token - When user login just receive one access token.
    //When user send request for server, request of user apply token into header -> Then server check token into header, server conclusive that user is truth or fasly
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.json({
      success: true,
      message: "User created successful",
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//@route POST api/auth/login
//@desc Login user
//@access Public

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  //Simple validation Login
  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Missing username or password" });
  }
  //
  try {
    //check existing usernames
    const user = await User.findOne({ username: username });

    //If not existing
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username or password" });
    }

    // If existing
    // check password
    const passwordValid = await argon2.verify(user.password, password);
    // IF password incorrect
    if (!passwordValid)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username or password" });
    //All good
    const accessToken = jwt.sign(
      {
        userId: user._id,
      },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({success: true,message: "Loggin successful", accessToken: accessToken})
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
