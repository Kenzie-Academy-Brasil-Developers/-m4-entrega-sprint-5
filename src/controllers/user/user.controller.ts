import { Request, Response } from 'express';
import { instanceToPlain } from 'class-transformer';

import { IUserRequest, IUserUpdate } from '../../interfaces/users';
import createUserService from '../../services/user/createUser.service';
import listUsersService from '../../services/user/listUsers.service';
import deleteUserService from '../../services/user/deleteUser.service';
import updateUserService from '../../services/user/updateUser.service';

export const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const newUser = await createUserService(userData);
  return res.status(201).json(instanceToPlain(newUser));
};

export const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.status(200).json(instanceToPlain(users));
};

export const updateUserController = async (req: Request, res: Response) => {
  const { name, email, password }: IUserUpdate = req.body;
  const { id } = req.params;
  const user = await updateUserService({ name, email, password }, id);
  return res.status(200).json({ message: 'User Updated', user });
};

export const deleteUserController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  await deleteUserService(id);
  return res.status(204).json({ message: 'User deleted with success!' });
};
