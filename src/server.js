require("dotenv").config();

const express = require("express");
const router = require("./routes");
const Mongo = require("./db/mongodb");

const app = express();

app.use(express.json());

app.use("/person", router);

const mongo = new Mongo();

mongo.init();

app.listen(3000, () => {
  console.log("Server is running");
});
