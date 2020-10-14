export {};
const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  goalsScored: Number,
  assists: Number,
});
