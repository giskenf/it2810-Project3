import { OPENSSL_VERSION_NUMBER } from "constants";

const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
  id: Number,
  votes: Number,
  news: String,
  goals_scored: Number,
  assists: Number,
  clean_scheets: Number,
  goals_conceded: Number,
  own_goals: Number,
  yellow_cards: Number,
  red_cards: Number,
  name: String,
  team: String,
});

module.exports = mongoose.model("players", PlayerSchema);
