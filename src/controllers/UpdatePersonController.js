const People = require("../models/peopleSchema");

class UpdatePersonController {
  async handle(req, res) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;

      await People.updateOne({ _id: id }, { $set: { name, email } });

      const person = await People.findById(id);

      return res.status(201).json(person);
    } catch (error) {
      console.error(error);

      return res.status(404).json({ error: "Request failed" });
    }
  }
}

module.exports = UpdatePersonController;
