var express = require('express');
var fs = require('fs')

var app = express.createServer(express.logger());
var line = fs.readFileSync('index.html','utf8',function(err,data){
    if(err) throw err;
    console.log(data);
});

var linebuf = new Buffer(line,'utf8');

//Render homepage (note trailing slash): example.com/
app.get('/', function(request, response) {
  var data = fs.readFileSync('index.html').toString();
  response.send(data);
});


app.get('/courses', function(request, response) {
      var data = fs.readFileSync('courses.html').toString();
      response.send(data);
    });


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
