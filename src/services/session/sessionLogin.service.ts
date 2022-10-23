import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import AppDataSource from '../../data-source';
import User from '../../entities/user.entity';
import AppError from '../../errors/AppError';
import { ILoginRequest } from '../../interfaces/session/login.interfaces';

const sessionLoginService = async ({
  email,
  password,
}: ILoginRequest): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ email });

  if (!user) {
    throw new AppError('Wrong email/password', 403);
  }
  if (!bcrypt.compareSync(password, user!.password)) {
    throw new AppError('Wrong email/password', 403);
  }
  const token = jwt.sign(
    { email: email, isAdm: user.isAdm, id: user.id },
    String(process.env.SECRET_KEY),
    {
      expiresIn: '24h',
      subject: user.id,
    }
  );

  return token;
};

export default sessionLoginService;
