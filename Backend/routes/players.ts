const express = require("express");
const router = express.Router();
const Players = require("../models/Players.ts");

//get all
router.get("/", async (req, res) => {
  try {
    const players = await Players.find();
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
router.get("/:team", async (req, res) => {
  try {
    console.log(req.params);
    //const player = await Players.find(req.params.first_name);
    const player = await Players.find({team:req.params.team})

    if (player == null) {
      return res.json({ message: "Kunne ikke finne spilleren" });
    } else {
      res.json(player);
    }
  } catch (err) {
    console.log(res.json({ message: err }));
  }
});




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
