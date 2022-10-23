import Categories from '../../entities/categories.entity';
import AppDataSource from '../../data-source';
import AppError from '../../errors/AppError';

const ListCategoriesPropertiesService = async (
  id: string
): Promise<Categories> => {
  const categoriesRepository = AppDataSource.getRepository(Categories);
  const category = await categoriesRepository.findOneBy({ id });

  if (!category) {
    throw new AppError('Category does not exist.', 404);
  }
  return category;
};

export default ListCategoriesPropertiesService;
