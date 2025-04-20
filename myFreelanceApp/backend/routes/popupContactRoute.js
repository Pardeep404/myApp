// routes/contact.js

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log("Request Body:", req.body);

  const { name, email, country, phone, service, message } = req.body;

  // Basic validation
  if (!name || !email || !country || !phone || !service || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  console.log("Received contact data:", req.body);

  // Respond with received data
  res.status(200).json({ message: 'Contact received' });
});

module.exports = router;
