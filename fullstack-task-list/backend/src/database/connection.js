const mongoose = require('mongoose');

const uri = 'mongodb://localhost/task';

const db = mongoose.connection;

mongoose.connect(uri, { useNewUrlParser: true });

db.on('connected', () => {
  console.log('Successfully connected');
});

db.on('error', () => {
  console.log('Connection error');
});

module.exports = db;