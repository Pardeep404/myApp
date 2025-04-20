const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, address, message } = req.body;

    // Simple validation
    if (!name || !email || !phone || !address || !message) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    const newContact = new Contact({ name, email, phone, address, message });
    await newContact.save();

    res.status(201).json({ success: true, message: "Message saved successfully." });
  } catch (err) {
    console.error("❌ Error in contact form:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

module.exports = router;
