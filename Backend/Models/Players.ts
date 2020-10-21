const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
  id: String,
  first_name: String,
  last_name: String,
  goals_scored: Number,
  assists: Number,
});

module.exports = mongoose.model("players", PlayerSchema);