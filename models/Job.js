var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
  agent: String,
  description: String,
  instructions: String,
  scheduled_time: String,
  expire_date: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', JobSchema);
