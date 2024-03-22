var express = require('express');

var app = express();

// "/" => "hello there"
app.get('/', function (req, res) {
  res.send('Hello there');
});

// "/" => "bye there"
app.get('/bye', function (req, res) {
  res.send('bye!!');
});

// "/" => "meow"
app.get('/dog', function (req, res) {
  console.log('Someone made a request to/dog');
  res.send('meow!!!');
});

// "/" => "r"
app.get('/r/:subredditName/comment/:id/:title/', function (req, res) {
  console.log('Someone made a request to Subreddit reddit comment');
  res.send('Welcome to comment');
});

// "/" => "r"
app.get('/r/:subredditName', function (req, res) {
  var subreddit = req.params.subredditName;
  res.send('Welcome to the ' + subreddit.toUpperCase() + 'subreddit');
});

// "*" => "hello there"
app.get('*', function (req, res) {
  res.send('You na stew');
});

// tell express to listen for request (start server)
app.listen(process.env.PORT, process.env.IP, function () {
  console.log('servser has started');
});
