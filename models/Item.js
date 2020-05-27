const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {type: String , required: true},
  stores: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Store'
  }]
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;