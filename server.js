// import express
const express = require('express')
const app = express()
const app_port = 5000;

// get input args and server port
const args = require('minimist')(process.argv.slice(2));
const port = args.port || 5000

// set up /app/ endpoint
app.get('/app/', (req, res) => {
    res.send('200 OK');
})