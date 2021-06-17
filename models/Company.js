var mongoose = require('mongoose');

var CompanySchema = new mongoose.Schema({
  company: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Company', CompanySchema);
