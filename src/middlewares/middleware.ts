import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import database from '../config/db.config';

const middleware = (app: any) => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
    database();
    app.use('*', (req: any, res: any) => {
        res.status(200).send('Server is Running Check API docs');
    });    
};

export default middleware;
