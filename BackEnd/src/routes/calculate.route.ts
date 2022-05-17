import express from 'express'
import { Request, Response } from "express";
import { calculate } from '../controllers/calculate.controller';

const calculateRouter = express.Router();

calculateRouter.post('/', (req: Request, res: Response) => {
    const result = calculate(req.body.data);
    res.send({result});
});

export default calculateRouter;