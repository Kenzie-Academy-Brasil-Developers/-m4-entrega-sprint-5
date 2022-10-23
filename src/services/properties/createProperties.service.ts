import Properties from '../../entities/properties.entity';
import Addresses from '../../entities/addresses.entity';
import Categories from '../../entities/categories.entity';
import AppDataSource from '../../data-source';
import { IPropertyRequest } from '../../interfaces/properties';
import AppError from '../../errors/AppError';

const createPropertiesService = async ({
  value,
  size,
  address,
  categoryId,
}: IPropertyRequest): Promise<Properties> => {
  if (address.state.length > 2 || address.zipCode.length > 8) {
    throw new AppError('Invalid Address Information', 400);
  }

  const propertyRepository = AppDataSource.getRepository(Properties);
  const addressRepository = AppDataSource.getRepository(Addresses);
  const categoryRepository = AppDataSource.getRepository(Categories);

  const category = await categoryRepository.findOneBy({ id: categoryId });

  if (!category) {
    throw new AppError("Category don't Exists", 404);
  }

  const addressExist = await addressRepository.findOneBy({
    zipCode: address.zipCode,
    number: address.number,
  });

  if (addressExist) {
    throw new AppError('Existing Address', 400);
  }

  const newAddress = await addressRepository.save(address);

  const newProperty = await propertyRepository.save({
    value,
    size,
    address: newAddress,
    category: category,
  });

  return newProperty;
};

export default createPropertiesService;
