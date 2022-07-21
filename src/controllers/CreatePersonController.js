const People = require("../models/peopleSchema");

class CreatePersonController {
  async handle(req, res) {
    const { name, email } = req.body;
    const person = new People({ name, email });

    await person.save();

    return res.status(201).json(person);
  }
}

module.exports = CreatePersonController;
