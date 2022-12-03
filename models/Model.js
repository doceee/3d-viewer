const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  extention: { type: String, required: true },
});

module.exports = Model = mongoose.model('model', modelSchema);
