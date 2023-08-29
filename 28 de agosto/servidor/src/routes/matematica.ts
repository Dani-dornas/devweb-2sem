import { Router } from "express";
import { dif, sum } from "../controllers/operacao";

const routes = Router();

routes.get("/somar/:x/:y", sum);
routes.post("/subtrair", dif);

export default routes;