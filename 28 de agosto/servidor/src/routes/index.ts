import { Router } from "express";
import matematica from "./matematica";
import data from "./data";

const routes = Router();

routes.use("/matematica", matematica);
routes.use("/data", data);

export default routes;