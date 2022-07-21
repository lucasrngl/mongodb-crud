const People = require("../models/peopleSchema");

class ListPersonController {
  async handle(req, res) {
    const result = await People.find();

    return res.status(200).json(result);
  }
}

module.exports = ListPersonController;
