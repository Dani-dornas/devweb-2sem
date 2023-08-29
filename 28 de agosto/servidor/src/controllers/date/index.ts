import { Request, Response } from "express";

export function dayOfMonth(req: Request, res: Response) {
    const day = new Date().getDate();
    res.send({day});
}

export function month(req: Request, res: Response) {
    const month = new Date().getMonth()+1;
    res.send({month});
}

export function year(req: Request, res: Response) {
    const year = new Date().getFullYear();
    res.send({year});
}