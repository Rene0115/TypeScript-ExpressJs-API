import pino from 'pino';

const logger = pino();

const errorHandler = (err:any, req:any, res:any, next:any) => {
    logger.error(err);
    return res.status(500).send({ success: false, message: err.message });
};

export default errorHandler;
