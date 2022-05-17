import { Request, Response } from "express";

/**
 * Calculate.
 * @route POST /
 */
export const calculate = (req: string) => {
    return eval(req);
};