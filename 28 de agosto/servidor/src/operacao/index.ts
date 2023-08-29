import { Request, Response } from "express";

export function sum(req: Request, res: Response) {
  const { x, y } = req.params;
  let r = parseFloat(x) + parseFloat(y);
  res.send({ r });
}

export function dif(req: Request, res: Response) {
  const { x, y } = req.body;
  let r = parseFloat(x) - parseFloat(y);
  res.send({ r });
}

//export {sum}
