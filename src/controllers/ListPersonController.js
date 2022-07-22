const People = require("../models/peopleSchema");

class ListPersonController {
  async handle(req, res) {
    try {
      const result = await People.find();

      return res.status(200).json(result);
    } catch (error) {
      console.error(error);

      return res.status(404).json({ error: "Request failed" });
    }
  }
}

module.exports = ListPersonController;
