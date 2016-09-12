var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cors = require('cors');
var request = require('request');
var qs = require("querystring");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin: 'http://localhost:9000',
    optionsSuccessStatus: 200
}));

app.get('/driving-time', function(req, res) {
    var options = {
        hostname: 'maps.googleapis.com',
        port: 80,
        path: '/maps/api/distancematrix/json?' + qs.stringify(req.query),
        method: 'GET',
        json: true
    };

    request(options, function(error, response, body) {
        console.log(body);
        res.send(body);
    }).on("error", function(e) {
        console.log("Got error: " + e.message);
    });
});

var server = app.listen(3000, function() {
    console.log("Listening on port %s...", server.address().port);
});