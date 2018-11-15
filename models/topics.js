var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var topicsSchema = new Schema({

  topics: {
    type: String,
    required: true,
  },
 
  summary: {
    type: String,
    required: true
  },

  url: {
    type: String,
    required: true
  },
 
  date: String,
  saved: {
    type: Boolean,
    default: false
  }
});

var Topics = mongoose.model("Topics", topicsSchema);

module.exports = Topics;