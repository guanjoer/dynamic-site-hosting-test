const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function initDatabase() {
  const client = await MongoClient.connect(`youDbUri`);
  database = client.db('youDbNmae');
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
