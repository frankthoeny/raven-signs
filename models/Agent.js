var mongoose = require('mongoose');

var AgentSchema = new mongoose.Schema({
  fullname: {
    type:String,
    default: '',
    required: 'Please fill Contact Name',
    trim: true
  },
  company: {
    type:String,
    default: '',
    required: 'Please fill Company',
    trim: true
  },
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Agent', AgentSchema);
