// @ts-check
import { Router } from "express";
import * as catsController from "./cats/cats.controller.js";
import { routesStringTable } from "./utils/routes-prints.js";

const router = Router();

router.get("/cats", catsController.findCats);
router.post("/cats", catsController.createCat);
router.get("/cats/:id", catsController.findCatById);
router.put("/cats/:id", catsController.updateCatById);

routesStringTable(router);
export default router;
