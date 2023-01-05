import express from 'express';
import authorController from '../controllers/author.controller';

const authorRouter = express.Router();

authorRouter.post("/create", authorController.create);
authorRouter.get("/read", authorController.read);
authorRouter.patch("/updatename", authorController.update);
export default authorRouter;
