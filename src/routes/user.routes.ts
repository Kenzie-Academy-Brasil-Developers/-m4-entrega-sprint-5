import { Router } from 'express';

import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from '../controllers/user/user.controller';
import ensureAdmin from '../middlewares/ensureAdmin.middleware';
import ensureAuth from '../middlewares/ensureAuth.middleware';
import verifyUpdateFieldsMiddleware from '../middlewares/verifyUpdateFields.middleware';

const userRouter = Router();

userRouter.post('', createUserController);
userRouter.get('', ensureAuth, ensureAdmin, listUsersController);
userRouter.patch(
  '/:id',
  ensureAuth,
  ensureAdmin,
  verifyUpdateFieldsMiddleware,
  updateUserController
);
userRouter.delete('/:id', ensureAuth, ensureAdmin, deleteUserController);

export default userRouter;
