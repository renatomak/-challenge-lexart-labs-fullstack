const { MongoClient } = require('mongodb');

const DB_NAME = process.env.DB_NAME || "lexart-labs";
const MONGO_URL =
  process.env.MONGO_URL || `mongodb://localhost:27017/${DB_NAME}`;


// const MONGO_URL = `mongodb://mongodb:27017/${DB_NAME}`;

// mongodb+srv://root:<password>@cluster0.mkm8g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const connection = () =>
  MongoClient.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(conn => conn.db(DB_NAME))
    .catch(err => {
      console.error(err);
      process.exit(1);
    });

module.exports = { connection, DB_NAME };
