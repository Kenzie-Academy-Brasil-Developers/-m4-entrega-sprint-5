import Categories from '../../entities/categories.entity';
import AppDataSource from '../../data-source';
import AppError from '../../errors/AppError';
import { ICategoryRequest } from '../../interfaces/categories';

const createCategoriesService = async ({
  name,
}: ICategoryRequest): Promise<Categories> => {
  const categoryRepository = AppDataSource.getRepository(Categories);
  const findCategory = await categoryRepository.findOneBy({ name });

  if (findCategory) {
    throw new AppError('Category Already Exists', 400);
  }

  const newCategory = categoryRepository.create({ name });
  await categoryRepository.save(newCategory);
  return newCategory;
};

export default createCategoriesService;
