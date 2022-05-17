import { Request, Response } from "express";

/**
 * Calculate.
 * @route POST /
 */
export const calculate = (operation: string) => {
    console.log('operation:', operation)
    return eval(operation);
};