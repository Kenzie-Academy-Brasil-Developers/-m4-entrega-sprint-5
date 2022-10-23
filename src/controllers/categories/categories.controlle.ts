import { Request, Response } from 'express';

import createCategoriesService from '../../services/categories/createCategory.service';
import ListCategoriesService from '../../services/categories/listCategories.service';
import ListCategoriesPropertiesService from '../../services/categories/listCategoriesProperties.service';

export const createCategoriesController = async (
  req: Request,
  res: Response
) => {
  const { name } = req.body;
  const newCategory = await createCategoriesService({ name });
  return res.status(201).json(newCategory);
};

export const ListCategoriesPropertiesController = async (
  req: Request,
  res: Response
) => {
  const id: string = req.params.id;
  const categoryProperties = await ListCategoriesPropertiesService(id);
  return res.status(200).json(categoryProperties);
};

export const ListCategoriesController = async (req: Request, res: Response) => {
  const categories = await ListCategoriesService();

  return res.status(200).json(categories);
};
