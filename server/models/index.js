var db = require('../db');

module.exports = {
  messages: {
    //want to get all messages from database
    //use query
    //use callback 
    get: function (callback) {
      var queryString = 'select User.username, Messages.message, Room.roomname \
                         from Messages left outer join User on (messages.userID = user.ID)';
      db.query(queryString, (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(results);
        }
      })
    }, // a function which produces all the messages
    post: function (param, callback) {
    

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = 'select User.username from User'
      db.query(queryString, (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(results);
        }
      })
    },
    post: function () {}
  }
};

