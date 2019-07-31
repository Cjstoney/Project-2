var db = require("../models/index.js");
var moment = require('moment');
moment().format();

module.exports = function (app) {

  //remove event
  app.post("/api/")

  // Create a new event

  app.post("/api/new-todo", function (req, res) {
    db.Event.create({
      event: req.eventName,
      year: req.eventYear,
      month: req.eventMonth,
      day: req.eventDay
    })
      .then(function (dbExample) {
        res.json(dbExample);
      });
  });

  // still needs work!!!!!
  app.get("api/todo", function (req, res) {
    db.Event.selectAll({
      where: {
        day: 30
      }
    })
  })

  // crossout an item on the todo list
  app.put("/api/update", function (req, res) {
    db.Event.update(req.body.important,
      {
        where: {
          event: req.body.event
        }
      }).then(function (dbPost) {
        res.json(dbPost);
      });
  });

  // Delete an event
  app.delete("/api/delete-event", function (req, res) {
    db.Event.destroy(
      {
        where: {
          event: req.eventName,
          year: req.eventYear,
          month: req.eventMonth,
          day: req.eventDay
        }
      }).then(function (db) {
        res.json(db);
      });
  });
};
