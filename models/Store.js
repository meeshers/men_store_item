const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  name: {type: String , required: true},
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  }]
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;