var topicsController = require("../controllers/topics");
var notesController = require("../controllers/notes");

module.exports = function(router) {
 
  router.get("/", function(req, res) {
    res.render("home");
  });

  router.get("/saved", function(req, res) {
    res.render("saved");
  });

  router.get("/api/fetch", function(req, res) {
 
    topicsController.fetch(function(err, docs) {

      if (!docs || docs.insertedCount === 0) {
        res.json({
          message: "No new articles!"
        });
      }
      else {
      
        res.json({
          message: "Added " + docs.insertedCount + " new articles!"
        });
      }
    });
  });

  router.get("/api/topics", function(req, res) {

    topicsController.get(req.query, function(data) {

      res.json(data);
    });
  });

  router.delete("/api/topics/:id", function(req, res) {

    var query = { _id: req.params.id };

      topicsController.delete(query, function(err, data) {
   
      res.json(data);
    });
  });

  router.put("/api/topics", function(req, res) {
  
    topicsController.update(req.body, function(err, data) {
 
      res.json(data);
    });
  });

  router.get("/api/notes/", function(req, res) {

    notesController.get({}, function(err, data) {

      res.json(data);
    });
  });

  router.get("/api/notes/:topic_id", function(req, res) {
    var query = { _id: req.params.topic_id };

     notesController.get(query, function(err, data) {
   
      res.json(data);
    });
  });

  router.delete("/api/notes/:id", function(req, res) {
    var query = { _id: req.params.id };

    notesController.delete(query, function(err, data) {
   
      res.json(data);
    });
  });


  router.post("/api/notes", function(req, res) {
    notesController.save(req.body, function(data) {

      res.json(data);
    });
  });
};