import authorServices from "../services/author.services";
import express from "express";
import _ from "lodash";
import { IAuthorModel } from "../models/author.model";
 class AuthorController {
    async create (req: express.Request,res: express.Response) {
        const author:object = await authorServices.create(req.body);
        res.status(200).send({
            data: author
        })
    }
    async read (req: express.Request, res: express.Response)  {
        const author:any = await authorServices.findById(req.body.id);
        res.status(200).send({
            data: author
        })
    }
    async update (req: express.Request, res: express.Response) {
        const author:any = await authorServices.findById(req.body.id)
        const newname:string = req.body.name;
        await author.updateOne({name: newname});
        await author.save();
        res.status(200).send({
            data: author
        })
    }
 }

 export default new AuthorController();

