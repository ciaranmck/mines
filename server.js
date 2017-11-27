var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
});

app.use(express.static('client/public'));
app.use(express.static('client/build'));
app.use(express.static('client/public/img'));

var server = app.listen(3000, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("app listening at", host, port);   
});