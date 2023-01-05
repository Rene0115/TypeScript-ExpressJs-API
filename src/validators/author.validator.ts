import { IAuthor } from "../models/author.model";
import Joi from "joi";

interface IAuthorUpdate {
    id: string;
    name: string;
}

interface IAuthorRead {
    id: string;
}


export const validateAuthor = Joi.object<IAuthor>().keys({
    name: Joi.string().required()
});

export const validateUpdateAuthor = Joi.object<IAuthorUpdate>().keys({
    id: Joi.string().required(),
    name: Joi.string().required()
});

export const validateReadAuthor = Joi.object<IAuthorRead>().keys({
    id: Joi.string().required()
});



export default { validateAuthor,validateUpdateAuthor, validateReadAuthor }