const mongoose = require('mongoose');
const { Schema } = mongoose;

const siteDataSchema = new Schema({
  website: { type: String, allowNull: false },
  name: { type: String, allowNull: false},
  selector: { type: String, allowNull: false},
  country: { type: String, allowNull: false},
});

module.exports = mongoose.model('siteData', siteDataSchema);