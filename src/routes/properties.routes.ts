import { Router } from 'express';

import {
  createPropertiesController,
  listPropertiesController,
} from '../controllers/properties/properties.controller';
import ensureAdmin from '../middlewares/ensureAdmin.middleware';
import ensureAuth from '../middlewares/ensureAuth.middleware';

const propertiesRouter = Router();

propertiesRouter.post('', ensureAuth, ensureAdmin, createPropertiesController);
propertiesRouter.get('', listPropertiesController);

export default propertiesRouter;
