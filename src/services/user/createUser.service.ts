import { hash } from 'bcryptjs';

import User from '../../entities/user.entity';
import { IUserRequest } from '../../interfaces/users/index';
import AppDataSource from '../../data-source';
import AppError from '../../errors/AppError';

const createUserService = async ({
  name,
  email,
  password,
  isAdm,
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const findEmail = await userRepository.findOneBy({ email });

  if (findEmail) {
    throw new AppError('User Already exists', 400);
  }

  const hashedPassword = await hash(password, 10);
  const user = userRepository.create({
    name,
    email,
    isAdm,
    password: hashedPassword,
  });
  await userRepository.save(user);

  return user;
};

export default createUserService;
