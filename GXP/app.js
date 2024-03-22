var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.get('/contact', function (req, res) {
  res.render('contact');
});

app.get('/skills', function (req, res) {
  res.render('skills');
});

app.get('/projects', function (req, res) {
  res.render('projects');
});

// tell express to listen for request (start server)
app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Serving GXpress');
});
