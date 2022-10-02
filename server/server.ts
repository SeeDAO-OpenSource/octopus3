import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import expressPino from 'express-pino-logger';
import pino from 'pino';
import apiRoute from './api';

require('./db');

import { ignoreFavicon } from './utils';

/**
 * Function to create create Express server
 */
async function create() {
  // server
  const app = express();

  // Middleware
  app.use(bodyParser.json());

  app.use(cors());

  // Logger
  const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
  const expressLogger = expressPino({ logger });
  app.use(expressLogger);

  // configure nonFeature
  app.use(ignoreFavicon);

  app.use('/api', apiRoute);

  // root route - serve static file
  app.use(express.static(path.join(__dirname, '../public/')));

  app.get(/.*/, (req: any, res: any) => {
    return res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // Error handler
  /* eslint-disable no-unused-vars */
  // app.use((err, req, res, next) => {
  //   console.error(err.stack);
  //   res.status(500).send('Something broke!');
  // });
  return app;
}

export default {
  create,
};
