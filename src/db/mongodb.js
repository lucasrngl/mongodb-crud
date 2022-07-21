const mongoose = require("mongoose");

class Mongo {
  init() {
    mongoose.connect(process.env.URL);
  }
}

module.exports = Mongo;
