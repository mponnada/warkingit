var express = require('express');
var fs = require('fs');
var Sendgrid = require("sendgrid-web");


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

app.get('/the-fun-side-of-programming', function(request, response) {
      var data = fs.readFileSync('the_fun_side_of_programming.html').toString();
      response.send(data);
    });

app.get('/the-frontend-ui-developer', function(request, response) {
      var data = fs.readFileSync('the_frontend_ui_developer.html').toString();
      response.send(data);
    });

app.get('/the-server-side-ninja', function(request, response) {
      var data = fs.readFileSync('the_server_side_ninja.html').toString();
      response.send(data);
    });

app.get('/mobile-app-in-3-days', function(request, response) {
      var data = fs.readFileSync('mobile_app_in_3_days.html').toString();
      response.send(data);
    });

app.get('/contact', function(request, response) {
      var data = fs.readFileSync('contact.html').toString();
      response.send(data);
    });

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

