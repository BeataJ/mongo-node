const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connect() {
    const clinet = await MongoClient.connect('mongodb://localhost:27017');
    database = clinet.db('blog');
}

function getDb() {
    if(!database) {
        throw { message: 'Database connection not established!' }
    }
    return database;
}

