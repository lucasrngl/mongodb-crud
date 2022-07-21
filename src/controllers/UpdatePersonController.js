const People = require("../models/peopleSchema");

class UpdatePersonController {
  async handle(req, res) {
    const { id } = req.params;
    const { name, email } = req.body;

    await People.updateOne({ _id: id }, { $set: { name, email } });

    const person = await People.findById(id);

    return res.status(201).json(person);
  }
}

module.exports = UpdatePersonController;
