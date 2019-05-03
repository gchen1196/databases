var models = require('../models');

//controller: 
module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          res.statusCode(400);
          res.end();
        } else {
          //send the res back to route 
          console.log(results);
          res.send(JSON.stringify(results));
          res.end(); 
        }
      }) 
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post([req.body.username, req.body.message, req.body.roomname], (err, result) => {
        if (err) {
          
        }
      })
    } // a function which handles posting a message to the database

    //models.message.post([req.username, req.message, req.roomname], (err,result) => {

    //})
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          res.statusCode(400);
          res.end();
        } else {
          res.write(JSON.stringify(results));
          res.end();
        }
      })
    },
    post: function (req, res) {}
  }
};

 