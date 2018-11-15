var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var noteSchema = new Schema({

  _topicId: {
    type: Schema.Types.ObjectId,
    ref: "Topics"
  },

  date: String,

  noteText: String
});

var Note = mongoose.model("Note", noteSchema);

module.exports = Note;