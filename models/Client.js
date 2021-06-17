var mongoose = require('mongoose');

var ClientSchema = new mongoose.Schema({
  contactname: {
    type:String,
    default: '',
    required: 'Please fill Contact Name',
    trim: true
  },
  phone: {
    type:String,
    default: '',
    required: 'Please fill Phone Nunmber',
    trim: true
  },
  email: {
    type:String,
    default: '',
    required: 'Please fill Email',
    trim: true
  },
  company: {
    type:String,
    default: '',
    required: 'Please fill Company',
    trim: true
  },
  address: {
    type:String,
    default: '',
    required: 'Please fill Address',
    trim: true
  },
  city: {
    type:String,
    default: '',
    required: 'Please fill City',
    trim: true
  },
  state: {
    type:String,
    default: '',
    required: 'Please fill State',
    trim: true
  },
  zipcode: {
    type:String,
    default: '',
    required: 'Please fill Zip Code',
    trim: true
  },
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Client', ClientSchema);
