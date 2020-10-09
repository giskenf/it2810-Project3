const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//import {Testdb} from "./Models/Testdb";

const app = express();

app.use(bodyParser.json());

mongoose
    .connect('mongodb://myusername:mypassword@it2810-76.idi.ntnu.no:27017/test?authSource=test&readPreference=primary&appname=MongoDB%20Compass&ssl=false', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to db');
});

//Forsøk på la lage et schema i databasen (funker ikke):
const TestSchema = mongoose.Schema({
    id: Number,
    name: String,
})

mongoose.model('TestModel', TestSchema);


//module.exports = TestModel = db.model('TestModel', TestSchema)
