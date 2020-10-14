export{}; //using TypeScript modules to solve problem regarding redeclaring express
const express = require('express');
const router = express.router();
const Players = require('../models/Players')


//get all
router.get('/', async (req,res) => {

    try{
        const players = await Players.find();
        res.json(players)
    } catch(err){
        res.json({ message: err })
    }
})

//get one

router.get('/:id', async (req,res) => {

    try{
        const player = Players.findById(req.params.id)
        if(player == null){
            return res.json({ message: 'Kunne ikke finne spilleren'})
        }
    } catch(err){
        res.json ({ message: err })
    }

})

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