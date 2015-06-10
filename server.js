var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 3000

// database set up
// var mongojs = require("mongojs");
// var mongoose = require('mongoose')
// var inventoryUri = 'mongodb://styd:1234@ds043982.mongolab.com:43982/shop-till-you-drop'
// var database = mongoose.connect(inventoryUri)

// var Inventory = mongoose.model('Inventory', {
//   name: String,
//   facebookID: String,
//   image: String,
//   friends: Array,
// });

 app.use(express.static(__dirname + '/'));

app.get('/', function(request, response){
  response.sendfile('index.html')
});

server.listen(3000, function(){
  console.log("Server listening on port " + port);
});

module.exports = server;