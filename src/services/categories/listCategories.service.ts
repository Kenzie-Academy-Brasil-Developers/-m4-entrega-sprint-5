import Categories from '../../entities/categories.entity';
import AppDataSource from '../../data-source';

const ListCategoriesService = async (): Promise<Categories[]> => {
  const categoryRepository = AppDataSource.getRepository(Categories);
  const category = await categoryRepository.find();
  return category;
};

export default ListCategoriesService;
