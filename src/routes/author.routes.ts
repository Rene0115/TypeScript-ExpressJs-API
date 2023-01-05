import express from 'express';
import authorController from '../controllers/author.controller';
import {validateAuthor, validateUpdateAuthor, validateReadAuthor} from '../validators/author.validator';
import validator from '../validators/validator';

const authorRouter = express.Router();

authorRouter.post("/create", [validator(validateAuthor)] , authorController.create);
authorRouter.get("/read", [validator(validateReadAuthor)] , authorController.read);
authorRouter.patch("/updatename", [validator(validateUpdateAuthor)] , authorController.update);
export default authorRouter;
