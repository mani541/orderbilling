var mongoose = require('mongoose');

var Billschema = new mongoose.Schema({
  name: String,
  items: [],
  discount: Number,
  tax: Number,
  total: Number,
  salesman: String,
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Bill', Billschema);
