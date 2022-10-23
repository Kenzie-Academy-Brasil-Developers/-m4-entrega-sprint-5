import { Router } from "express";

import { createCategoriesController, ListCategoriesController, ListCategoriesPropertiesController } from "../controllers/categories/categories.controlle";
import ensureAdmin from "../middlewares/ensureAdmin.middleware";
import ensureAuth from "../middlewares/ensureAuth.middleware";

const categoriesRouter = Router();

categoriesRouter.post("", ensureAuth, ensureAdmin, createCategoriesController);
categoriesRouter.get("", ListCategoriesController);
categoriesRouter.get("/:id/properties", ListCategoriesPropertiesController);

export default categoriesRouter;
