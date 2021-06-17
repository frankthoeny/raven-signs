'use strict';

// EXPRESS & PATH //
const path = require('path')
const express = require('express')

// DATABASE //
const mongoose  = require('mongoose')
const mongoDB = 'mongodb://localhost:27017/listing_database'

module.exports = {
 app: function () {
    const app = express()

    // MIDDLEWARE //
    app.use(express.static(path.join(__dirname, 'dist')));

    // LOGGER //
    const logger = require('morgan');
    app.use(logger('dev'));

    // BODY PARSER //
    const bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({'extended':'false'}));

    // APP USE ROUTES //
    const agent = require('./routes/agent.js')
    const auth = require('./routes/auth.js')
    const book = require('./routes/book.js')
    const client = require('./routes/client.js')
    const order = require('./routes/order.js')
    //const company = require('./routes/company.js')
    //const job = require('./routes/job.js')
    const user = require('./routes/user.js')
    const sign = require('./routes/sign.js')

    app.use('/api/agent', agent)
    app.use('/api/auth', auth)
    app.use('/api/book/front/page', book)
    app.use('/api/client', client)
    app.use('/api/order', order)
    //app.use('/api/company', company)
    //app.use('/api/job', job)
    app.use('/api/user', user)
    app.use('/api/sign', sign)

    return app;
  },
  db: function () {

     // CONNECT TO MONGODB
      mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
      });

      // GET MONGOOSE USING THE GLOBAL PROMISE LIBRARY //
      mongoose.Promise = global.Promise;

      // GET THE DEFAULT CONNECTION //
      const db = mongoose.connection;

      // BIND CONNECTION TO SUCCESS EVENT //
      db.on('success', function(){
        console.log('Mongoose connection successful')
      });

     // BIND CONNECTION TO ERROR EVENT (to get notification of connection errors) //
     db.on('error', console.error.bind(console, 'MongoDB connection error:'));

     // BIND CONNECTION TO DISCONNECTED EVENT //
     // db.on('disconnected', function(){
     //     console.log("Mongoose default connection is disconnected");
     // });
  }
}
