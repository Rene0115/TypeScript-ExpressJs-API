import express from 'express';
import authorRouter from './author.routes';

const router = express.Router();

router.use("/author", authorRouter);

export default router;