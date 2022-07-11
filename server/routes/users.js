const express = require('express');
const recordRoutes = express.Router();

const dbo = require('../db/conn');
const ObjectID = require('mongodb').ObjectId;

// All users
recordRoutes.route('/users').get(function(req, res) {
  let db_connect = dbo.getDb('users');
  db_connect
    .collection('users')
    .find({})
    .limit(10)
    .toArray(function(err, result) {
      if(err) throw err;
      res.json(result)
    });
});

//All post users
recordRoutes.route('/post').get(function(req, res) {
  let db_connect = dbo.getDb('users');
  db_connect
    .collection('post')
    .find({})
    .toArray(function(err, result) {
      if(err) throw err;
      res.json(result)
    });
});

// Single user
recordRoutes.route("/users/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let query = { _id: ObjectID( req.params.id )};
  db_connect
      .collection("users")
      .findOne(query, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

module.exports = recordRoutes;