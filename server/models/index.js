var db = require('../db');

module.exports = {
  messages: {
    //want to get all messages from database
    //use query
    //use callback 
    get: function (callback) {
      db.query('SELECT message FROM Messages', (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(results);
        }
      })
    }, // a function which produces all the messages
    post: function (callback) {
    

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT username FROM User', (err, results) => {
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

