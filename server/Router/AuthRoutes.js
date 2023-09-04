const express = require('express');
const mongoose = require('mongoose');
const Usermodels = require('../Models')
const router = express.Router();
// Register
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await Usermodels.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already registered" });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(200).json({ success: true, message: "Sign Up Complete" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred" });
    }
});
// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Usermodels.findOne({ email, password });

        if (user) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

module.exports = router;