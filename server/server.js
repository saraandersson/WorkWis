var express = require('express');
const bodyParser = require('body-parser');
var http = require('http');
var Sim = require('./simulator.js');
var app = express();
var PORT = 8000;

var cookieParser = require('cookie-parser');
var session = require('express-session');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Hello world\n");
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});