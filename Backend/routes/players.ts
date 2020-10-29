const express = require("express");
const router = express.Router();
const Players = require("../models/Players.ts");


//get all
router.get("/", async (req, res) => {
  try {
    const name = req.query.name; //Hvordan skal vi søke etter de forskjellige kombinasjonene av navn
    const teamIn = req.query.team;
    const limit = 15;
    const skip = (req.query.page - 1) * limit; //Ganger sidetall med limit for å hente neste "batch"" spillere
    let sort = {};

    const filter = {
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
    const count = await Players.countDocuments(filter)

    const players = await Players.find(filter)
        .sort(sort)
        .limit(15) //as Player[];
    const res1 = {
      players: players,
      count: count,
    }
    res.json(res1);
  } catch (err) {
    res.json({ message: err });
  }
});

router.put("/:_id", async (req, res) => {
  try {
    console.log(req.query.votes);
    console.log(req.query.id);
    const updatedPlayer = await Players.findOneAndUpdate(
      { _id: req.params.id },
      { votes: req.query.votes }
    );
    res.json(updatedPlayer);
  } catch (err) {
    res.json(err);
  }
});

//get one
/*
router.get("/:_id", async (req, res) => {
  try {
    const player = await Players.findById(req.params._id);
    res.json(player);
    if (player == null) {
      return res.json({ message: "Kunne ikke finne spilleren" });
    } else {
      res.json(player);
    }
  } catch (err) {
    console.log(res.json({ message: err }));
  }
});
*/

module.exports = router;
