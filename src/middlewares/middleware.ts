import express from 'express';
import cors from 'cors';
import database from '../config/db.config';
import errorHandler from './error.middleware';
import router from '../routes/index.routes';

const middleware = (app:any) => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors());
    app.use(router);
    database();
    app.use('*', (req: express.Request, res: express.Response) => {
        res.status(200).send('Server is Running Check API docs');
    });
    app.use(errorHandler);
};
export default middleware;
