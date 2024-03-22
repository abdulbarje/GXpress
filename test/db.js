const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb+srv://abidb2:eiyjeKr3PXGPdd80@cluster0.aptjiio.mongodb.net/'
);

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const UserModel = mongoose.Model('users', UserSchema);

app.get('/getUsers', (req, res) => {
  UserModel.find({})
    .then(function (users) {
      res.json(users);
    })
    .catch(function (err) {
      console.log(err);
    });
});

// tell express to listen for request (start server)
app.listen(process.env.PORT, process.env.IP, function () {
  console.log('serving db.js');
});
