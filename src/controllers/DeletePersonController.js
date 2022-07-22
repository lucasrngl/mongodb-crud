const People = require("../models/peopleSchema");

class DeletePersonController {
  async handle(req, res) {
    try {
      const { id } = req.params;

      await People.deleteOne({ _id: id });

      return res.status(204).json();
    } catch (error) {
      console.error(error);

      return res.status(404).json({ error: "Request failed" });
    }
  }
}

module.exports = DeletePersonController;
