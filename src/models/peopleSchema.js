const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const peopleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const People = mongoose.model("People", peopleSchema);

module.exports = People;
