const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  name: String
})

const Card = mongoose.model('Card', CardSchema);

module.exports = Card
