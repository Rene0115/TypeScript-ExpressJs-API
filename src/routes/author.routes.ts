import express from 'express';
import authorController from '../controllers/author.controller';

const authorRouter = express.Router();

authorRouter.post("/create", authorController.create);

export default authorRouter;