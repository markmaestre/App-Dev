const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../Middleware/authMiddleware');

router.post('/register', async (req, res) => {
  try {
    const { username, email, password, bod, gender, address } = req.body;

   
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

   
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      bod,
      gender,
      address
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});


router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;


    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

 
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

   
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ message: 'Login successful', token });

  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/profile', authMiddleware, async(req, res) => {
    try{
        const user = await User.findOne(req.userId).select('-password');
        res.json(user);

    } catch(error){
        res.status(500).json({ error: 'Server error'});

    }
})

module.exports = router;


