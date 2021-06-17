var mongoose = require('mongoose');

var OrdersSchema = new mongoose.Schema({
  agents: {
    type:String,
    default: '',
    required: 'Please fill Agents',
    trim: true
  },
  listing_address: {
    type:String,
    default: '',
    required: 'Please fill Agents',
    trim: true
  },
  city: {
    type:String,
    default: '',
    required: 'Please fill Agents',
    trim: true
  },
  state: {
    type:String,
    default: '',
    required: 'Please fill Agents',
    trim: true
  },
  zipcode: {
    type:String,
    default: '',
    required: 'Please fill Agents',
    trim: true
  },
  cross_street: {
    type:String,
    default: '',
    required: 'Please fill Agents',
    trim: true
  },
  map_code: {
    type:String,
    default: '',
    required: 'Please fill Agents',
    trim: true
  }
});

module.exports = mongoose.model('Orders', OrdersSchema);
