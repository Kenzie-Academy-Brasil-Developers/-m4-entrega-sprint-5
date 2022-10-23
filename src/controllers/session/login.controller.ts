import { Request, Response } from 'express';

import { ILoginRequest } from '../../interfaces/session/login.interfaces';
import sessionLoginService from '../../services/session/sessionLogin.service';

const sessionLoginController = async (req: Request, res: Response) => {
  const data: ILoginRequest = req.body;
  const token = await sessionLoginService(data);
  return res.status(200).json({ token: token });
};

export default sessionLoginController;
