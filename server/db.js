import logger from './config/pino';

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
  useFindAndModify: false,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', (err) => {
  logger.error('MongoDB error: ', err.message);
  process.exit(1);
});
db.once('open', () => {
  logger.info('MongoDB connection established');
});

module.exports = mongoose;
