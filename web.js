var express = require('express');
var app = express();
var fs = require('fs');
buf = new buffer(256);
var file = fs.readFileSync(index.html);
var text = buf.toString(file);

app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World 2!'); 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
