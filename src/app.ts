/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import express from 'express';
import pino from 'pino';
import middleware from './middlewares/middleware';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const logger = pino();


middleware(app);

let port = process.env.PORT || 3000;

app.listen(port, () => {
    if (port == null || port === '' || port === undefined) {
      port = 8000;
    }

    logger.info(`Server is running on port ${port}`);
});

export default logger;
