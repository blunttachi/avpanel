var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Reminder = require('../Reminder.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Reminder.find(function (err, reminders) {
    if (err) return next(err);
    res.json(reminders);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  Reminder.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Reminder.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Reminder.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
