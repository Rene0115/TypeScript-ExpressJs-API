import express from 'express';
import {ObjectSchema} from 'joi';
const validator =
    (schema: ObjectSchema, reqbody = 'body') =>
    async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const validated = await schema.validateAsync(req.body);
        try {
            if (reqbody === 'body') {
                req.body = validated;
            } else {
                req.query = validated;
            }
            next();
        } catch (err) {
            return res.status(422).send({
                success: false,
                error: err
            });
        }
    };

export default validator;
