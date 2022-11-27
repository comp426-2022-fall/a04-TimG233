#!/usr/bin/env node

// import express
import express from 'express';
const app = express();

// bodyParser to parse URLencoded data
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

// import roll
import { roll } from "./lib/roll.js";

// get input args and server port
import minimist from 'minimist';
const args = minimist(process.argv.slice(2));
const port = args.port || 5000

// /app/ endpoint
app.get('/app/', (req, res) => {
    res.status(200);
    res.send('200 OK');
})

// /app/roll/ endpoint - default roll
app.get('/app/roll/', (req, res) => {
    res.send(JSON.stringify(roll(6, 2, 1))); 
})

// /app/roll/ endpoint - random dice 
app.post('/app/roll/', (req, res) => {
    res.status(200);
         
    res.send(JSON.stringify(roll(parseInt(req.body.sides), parseInt(req.body.dice), parseInt(req.body.rolls))));

})

// /app/roll/:sides/ endpoint
app.get('/app/roll/:sides/', (req, res) => {
    res.status(200);

    // var dice = req.body.dice
    // var rolls = req.body.rolls

    res.send(JSON.stringify(roll(parseInt(req.params['sides']), 2, 1)));
})

// /app/roll/:sides/:dice/ endpoint
app.get('/app/roll/:sides/:dice/', (req, res) => {
    res.status(200);

    // var rolls = req.body.rolls
    
    res.send(JSON.stringify(roll(parseInt(req.params['sides']), parseInt(req.params['dice']), 1)));
})

// /app/roll/:sides/:dice/:rolls/ endpoint
app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    res.status(200);

    res.send(JSON.stringify(roll(parseInt(req.params['sides']), parseInt(req.params['dice']), parseInt(req.params['rolls']))));
})

// default endpoint should be in the end
app.get('*', (req, res) => {
    res.status(404);
    res.send('404 NOT FOUND');
})

app.listen(port);






