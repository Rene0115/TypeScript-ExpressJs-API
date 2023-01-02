import express from 'express';
import cors from 'cors';
import database from '../config/db.config';
import errorHandler from './error.middleware';

const middleware = (app: any) => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());;
    app.use(cors());
    database();
    app.use(errorHandler);
    app.use('*', (req: any, res: any) => {
        res.status(200).send('Server is Running Check API docs');
    });    
};

export default middleware;
