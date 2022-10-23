import { Request, Response } from 'express';

import createSchedulesService from '../../services/schedules/listSchedules.service';
import listSchedulesService from '../../services/schedules/schedulesList.service';

export const createSchedulesController = async (
  req: Request,
  res: Response
) => {
  const { date, hour, propertyId } = req.body;
  const userId = req.user.id;
  const schedule = await createSchedulesService({
    date,
    hour,
    propertyId,
    userId,
  });
  return res.status(201).json({ message: 'Visit Created', schedule });
};

export const listSchedulesController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const schedules = await listSchedulesService(id);
  return res.status(200).json({ schedules: schedules });
};
