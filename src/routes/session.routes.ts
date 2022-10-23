import { Router } from 'express';

import sessionLoginController from '../controllers/session/login.controller';

const sessionRouter = Router();

sessionRouter.post('', sessionLoginController);

export default sessionRouter;
