import bcrypt from 'bcryptjs';

import { IUserUpdate } from '../../interfaces/users';
import AppDataSource from '../../data-source';
import User from '../../entities/user.entity';
import AppError from '../../errors/AppError';

const updateUserService = async (
  { name, email, password }: IUserUpdate,
  id: string
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ id });

  if (!findUser) {
    throw new AppError('User not found', 404);
  }

  if (password) {
    if (bcrypt.compareSync(password!, findUser.password)) {
      throw new AppError('Inform a different password', 403);
    }
  }

  await userRepository.update(id, {
    name: name ? name : findUser.name,
    email: email ? email : findUser.email,
    password: password ? bcrypt.hashSync(password!, 10) : findUser.password,
  });

  const user = await userRepository.findOneBy({ id });

  return user!;
};

export default updateUserService;
