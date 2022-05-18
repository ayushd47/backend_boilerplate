const config = require('../config/app');
const mongoose = require('mongoose');

const URL = config.DATABASE.MONGO.URL;
const PORT = config.DATABASE.MONGO.PORT;
const DATABASE_NAME = config.DATABASE.MONGO.DATABASE

const CONNECTION_STRING = `${URL}:${PORT}/${DATABASE_NAME}`

mongoose.connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTropology: true
})

console.log(`Establishing connection for database: ${DATABASE_NAME} with ${CONNECTION_STRING}`);