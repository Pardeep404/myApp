// index.js

// 🌐 Import required packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// 🚀 Initialize the app
const app = express();
const PORT = process.env.PORT || 5000;

// 🛡️ Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse incoming JSON requests

// 🔗 Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// 📦 Sample Route
app.get('/', (req, res) => {
  res.send('✅ Backend is running!');
});

// 📩 Contact form route
app.use('/api/contact', require('./routes/contact'));

// 📩 popupContact form route
const popupContactRoutes = require('./routes/popupContactRoute');
app.use('/api/popup-contact', popupContactRoutes); // ✅ this is crucial


// 🟢 Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server started at: http://localhost:${PORT}`);
});
