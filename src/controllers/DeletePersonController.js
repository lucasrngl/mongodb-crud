const People = require("../models/peopleSchema");

class DeletePersonController {
  async handle(req, res) {
    const { id } = req.params;

    await People.deleteOne({ _id: id });

    return res.status(204).json();
  }
}

module.exports = DeletePersonController;
