var express = require('express');

var app = express();

// "/" => "hi there"
app.get('/', function (req, res) {
  res.send('Hi there, welcome to my Assignment');
});

// "/" => "animals"
app.get('/speak/:animal', function (req, res) {
  var sounds = {
    pig: 'oink',
    cow: 'moo',
    dog: 'woof',
    cat: 'I love fish',
    silverFish: '...',
  }
  var animal = req.params.animal;
  var sound = sounds[animal];
  res.send('The ' + animal + 'says "' + sound + '"');
});

// "*" => "hello there"
app.get('*', function (req, res) {
  res.send('Sorry page not found, what are yoou doing with your life');
});

// tell express to listen for request (start server)
app.listen(process.env.PORT, process.env.IP, function () {
  console.log('serving app.js');
});
