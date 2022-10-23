import { Router } from 'express';

import {
  createSchedulesController,
  listSchedulesController,
} from '../controllers/schedules/schedules.controller';
import ensureAdmin from '../middlewares/ensureAdmin.middleware';

import ensureAuth from '../middlewares/ensureAuth.middleware';

const schedulesRouter = Router();

schedulesRouter.post('', ensureAuth, createSchedulesController);
schedulesRouter.get(
  '/properties/:id',
  ensureAuth,
  ensureAdmin,
  listSchedulesController
);

export default schedulesRouter;
