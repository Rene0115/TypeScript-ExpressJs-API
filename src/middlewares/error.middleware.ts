import { NextFunction } from 'express';
import pino from 'pino';
import express from 'express';

const logger = pino();

const errorHandler = (err:Error, req:express.Response, res:express.Response, next:NextFunction) => {
    logger.error(err);
    return res.status(500).send({ success: false, message: err.message });
};

export default errorHandler;
