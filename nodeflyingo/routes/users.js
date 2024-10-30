const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const userSchema = new mongoose.Schema({
    username: String,
    mail: String,
    pwd: String
});
const User = mongoose.model('User', userSchema);

router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router; 
