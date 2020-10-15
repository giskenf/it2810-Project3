const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .catch((err) => console.log(err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to db");
});

//importere routes
const playerRoutes = require("./routes/players.ts");
app.use("/players", playerRoutes);

//Forsøk på la lage et schema i databasen (funker ikke):
const TestSchema = mongoose.Schema({
  id: Number,
  name: String,
});

const TestModel = mongoose.model("TestModel", TestSchema);

//const small = new Tank({ size: 'small' })
TestModel.create({ id: 1, name: "markus" });

//module.exports = TestModel = db.model('TestModel', TestSchema)
