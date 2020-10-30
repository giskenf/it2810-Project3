const express = require("express");
const router = express.Router();
const Players = require("../models/Players.ts");

router.get("/", async (req, res) => {
  try {
    const name = req.query.name;
    const teamIn = req.query.team;
    const limit = 15;
    const skip = (req.query.page - 1) * limit; //Ganger sidetall med limit for å hente neste "batch"" spillere.
    let sort = {};
    const filter = {
      //bruker regex for å søke på match i strenger. Dersom en av verdiene ikke er satt, vises alle innenfor denne verdien.
      name: { $regex: name, $options: "i" },
      team: { $regex: teamIn, $options: "i" },
    };

    // Sjekker sortingvariable for hva det skal sorteres på
    if (req.query.sortingVariable == "name") {
      sort = {
        name: req.query.sortingOrder,
      };
    } else if (req.query.sortingVariable == "goalsScored") {
      sort = {
        goals_scored: req.query.sortingOrder,
      };
    } else {
      const sort = { null: null }; //Ingen spesifikke søk gir hele datasettet
    }
    const count = await Players.countDocuments(filter); //Trenger total mengde spillere for å vite hvor mange sider et søk gir.

    const players = await Players.find(filter)
      .sort(sort)
      .limit(15) //statisk grense satt til 15 per side
      .skip(skip);
    const res1 = {
      players: players,
      count: count,
    };
    res.json(res1);
  } catch (err) {
    res.json({ message: err });
  }
});

//Rout for å inkrementere eller dekrementere votes på en spiller.
router.put("/:id", async (req, res) => {
  try {
    const updatedPlayer = await Players.findOneAndUpdate(
      { _id: req.params.id },
      { votes: req.query.votes } //i frontend hentes votes og så legges det enten til eller trekkes fra én, før den nye verdien legges inn i votes på nytt.
    );
    res.json(updatedPlayer);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
