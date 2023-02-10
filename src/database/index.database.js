const mongoose = require("mongoose");
module.exports = {
  connectDatabase: (mongoURL) => {
    mongoose.connect(mongoURL, (err) => {
      console.log(
        "Wohoo .. Database for the mongodb Server is connected to the database"
      );
    });
  },
};
