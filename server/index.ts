import './config/dotenv';
import logger from './config/pino';
import server from './server';

const port = process.env.PORT || 8000;

server
  .create()
  .then((app) => {
    app.listen(port, () => {
      logger.info(`Server has started on http://localhost:${port} !`);
    });
  })
  .catch((err) => logger.error(err));
