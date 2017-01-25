var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Home Page');
});

app.get('/about', function(req, res){
  res.send('About Us');
});

app.listen(3000);
