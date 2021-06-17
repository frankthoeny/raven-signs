const User = require("../models/User");
const settings = require('../config/settings.js');
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../config/passport')(passport);
const express = require('express');
const app = express();

// APP USE ROUTES //
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/register', function(req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({success: false, msg: 'Please pass username and password.'});
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});

app.post('/login', function(req, res) {
console.log(req, res);
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;
    console.log(user)
    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), settings.secret);
          // return the information including token as JSON
          console.log(req.body)
          res.json({success: true, uid: 'UID ' + req.body.username, token: 'JWT ' + token});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

module.exports = app;
