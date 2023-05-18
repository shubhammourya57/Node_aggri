const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    property_name: {type: String},
    property_type: {type: String},
    property_category: {type: String},
    latitude: {type: String},
    longitude: {type: String},
    property_price: {type: Number},
    property_description: {type: String},
    property_images : [],
    created_date: {
      type: Date,
      default: Date.nows
    },
    status: {type: String}
  });
  
  // Create a model for the property table
  module.exports = mongoose.model('Property', propertySchema);