const express = require("express");

const router = express.Router();

const User = require("../models/user");

// SIGNUP
router.post("/signup", async (req, res) => {

  try {

    const { name, email, password, role } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      role
    });

    res.json({
      message: "Signup successful ✅",
      user
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: err.message
    });

  }

});

// LOGIN
router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
        password
      }
    });

    if (!user) {

      return res.status(400).json({
        message: "Invalid email or password ❌"
      });

    }

    res.json({
      message: "Login successful ✅",
      user
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: err.message
    });

  }

});

module.exports = router;