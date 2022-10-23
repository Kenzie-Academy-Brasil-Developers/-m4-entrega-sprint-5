import { Request, Response } from 'express';

import { IPropertyRequest } from '../../interfaces/properties';
import listPropertiesService from '../../services/properties/propertiesList.service';
import createPropertiesService from '../../services/properties/createProperties.service';

export const createPropertiesController = async (
  req: Request,
  res: Response
) => {
  const properties: IPropertyRequest = req.body;
  const createProperty = await createPropertiesService(properties);
  return res.status(201).json(createProperty);
};

export const listPropertiesController = async (req: Request, res: Response) => {
  const listProperties = await listPropertiesService();
  return res.status(200).json(listProperties);
};
