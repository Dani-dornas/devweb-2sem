import { Router } from "express";
import { dayOfMonth, month, year } from "../controllers/date";

const routes = Router();

routes.get("/dia", dayOfMonth);
routes.get("/mes", month);
routes.get("/ano", year);

export default routes;