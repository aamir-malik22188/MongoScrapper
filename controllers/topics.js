var scrape = require("../scripts/scrape");
var makeDate = require("../scripts/date");

var Topics = require("../models/topics");

module.exports = {
  fetch: function(cb) {

    scrape(function(data) {

      var articles = data;
 
      for (var i = 0; i < articles.length; i++) {
        articles[i].date = makeDate();
        articles[i].saved = false;
      }

      Topics.collection.insertMany(articles, { ordered: false }, function(err, docs) {
        cb(err, docs);
      });
    });
  },
  delete: function(query, cb) {
    Topics.remove(query, cb);
  },
  get: function(query, cb) {
   
    Topics.find(query)
      .sort({
        _id: -1
      })

      .exec(function(err, doc) {
   
        cb(doc);
      });
  },
  update: function(query, cb) {
 
    Topics.update({ _id: query._id }, {
      $set: query
    }, {}, cb);
  }
};