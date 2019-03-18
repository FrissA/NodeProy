/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var path = require('path');

var app = express();

app.get("/", function(req,res){
  res.send("bai");
});

app.get("/amor", function(req,res){
  res.sendFile(path.join(__dirname + '/index.html'))
});

var server = app.listen(6543, function(){
  console.log("Server listening on port 6543.")
});
