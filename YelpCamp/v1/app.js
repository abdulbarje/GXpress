var express = require('express');
var app = express();                                                             
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

var campgrounds = [
  {
    name: 'Dubai',
    Image:
      'https://media.istockphoto.com/id/177363280/photo/social-network-in-wood-type.jpg?s=612x612&w=0&k=20&c=V__XxRKZ7Kc3WXV4kOzTBE2bH_9YrgSsHDi2D7HoI-U=',
  },
  {
    name: 'Alaska',
    Image:
      'https://images.pexels.com/photos/2603681/pexels-photo-2603681.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'Paris',
    Image:
      'https://images.pexels.com/photos/4555613/pexels-photo-4555613.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'Dubai',
    Image:
      'https://media.istockphoto.com/id/177363280/photo/social-network-in-wood-type.jpg?s=612x612&w=0&k=20&c=V__XxRKZ7Kc3WXV4kOzTBE2bH_9YrgSsHDi2D7HoI-U=',
  },
  {
    name: 'Alaska',
    Image:
      'https://images.pexels.com/photos/2603681/pexels-photo-2603681.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'Paris',
    Image:
      'https://images.pexels.com/photos/4555613/pexels-photo-4555613.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'Dubai',
    Image:
      'https://media.istockphoto.com/id/177363280/photo/social-network-in-wood-type.jpg?s=612x612&w=0&k=20&c=V__XxRKZ7Kc3WXV4kOzTBE2bH_9YrgSsHDi2D7HoI-U=',
  },
  {
    name: 'Alaska',
    Image:
      'https://images.pexels.com/photos/2603681/pexels-photo-2603681.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'Paris',
    Image:
      'https://images.pexels.com/photos/4555613/pexels-photo-4555613.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'Dubai',
    Image:
      'https://media.istockphoto.com/id/177363280/photo/social-network-in-wood-type.jpg?s=612x612&w=0&k=20&c=V__XxRKZ7Kc3WXV4kOzTBE2bH_9YrgSsHDi2D7HoI-U=',
  },
  {
    name: 'Alaska',
    Image:
      'https://images.pexels.com/photos/2603681/pexels-photo-2603681.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'Paris',
    Image:
      'https://images.pexels.com/photos/4555613/pexels-photo-4555613.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

app.get('/', function (req, res) {
  res.render('landing');
});

app.get('/campgrounds', function (req, res) {
  res.render('campgrounds', { campgrounds: campgrounds });
});

app.post('/campgrounds', function (req, res) {
  // get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = { name: name, image: image };
  campgrounds.push(newCampground);
  // redirect back to campgrounds page
  res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function (req, res) {
  res.render('new.ejs');
});
// tell express to listen for request (start server)
app.listen(process.env.PORT, process.env.IP, function () {
  console.log('serving YelpCamp');
});
