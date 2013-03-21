var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 5000;
var addr = process.env.OPENSHIFT_NODEJS_IP || process.env.ADDR || "localhost";

app.listen(port, addr, function() {
  console.log("Listening on " + port);
});
