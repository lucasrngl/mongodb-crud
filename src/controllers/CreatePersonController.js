const People = require("../models/peopleSchema");

class CreatePersonController {
  async handle(req, res) {
    try {
      const { name, email } = req.body;
      const person = new People({ name, email });

      await person.save();

      return res.status(201).json(person);
    } catch (error) {
      console.error(error);

      return res.status(404).json({ error: "Request failed" });
    }
  }
}

module.exports = CreatePersonController;
