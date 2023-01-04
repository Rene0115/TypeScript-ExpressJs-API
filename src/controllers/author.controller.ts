import authorServices from "../services/author.services";
import express from "express";
import _ from "lodash";
 class AuthorController {
    async create (req: express.Request,res: express.Response) {
        const author:any = await authorServices.create(req.body);
        res.status(200).send({
            data: author
        })
    }
 }

 export default new AuthorController();

