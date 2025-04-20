// models/PopupContact.js

const mongoose = require('mongoose');

const PopupContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  country: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  message: { type: String, required: true },
});

const PopupContact = mongoose.model('PopupContact', PopupContactSchema);
module.exports = PopupContact;
