const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function initDatabase() {
  const client = await MongoClient.connect(`${process.env.DB_URL}?retryWrites=true&w=majority&appName=Cluster0`);
  database = client.db('deployment');
}

function getDb() {
  if (!database) {
    throw new Error('No database connected!');
  }

  return database;
}

module.exports = {
  initDatabase: initDatabase,
  getDb: getDb,
};
