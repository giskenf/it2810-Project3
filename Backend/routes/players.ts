const express = require("express");
const router = express.Router();
const Players = require("../models/Players.ts");

//get all
router.get("/", async (req, res) => {
  try {
    const name = req.query.name; //Hvordan skal vi søke etter de forskjellige kombinasjonene av navn
    const teamIn = req.query.team;
    const limit = 25;
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

    const players = await Players.find(filter)
      .sort(sort)
      .limit(limit)
      .skip(skip);
    res.json(players);
  } catch (err) {
    res.json({ message: err });
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

//get all

//get team

//get nationality

//insert player
/* router.put('/', async (req, res) => {

    const player = new Players({
        //hva enn vi vil ha med
    })

    try{
        const newPlayer = await player.save();
        res.status(201).json(player);
    } catch(err){
        res.status(400).json(err);
    }

}); */
