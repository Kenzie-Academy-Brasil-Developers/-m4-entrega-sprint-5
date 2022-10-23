import Properties from '../../entities/properties.entity';
import AppDataSource from '../../data-source';

const listPropertiesService = async (): Promise<Properties[]> => {
  const propertyRepository = AppDataSource.getRepository(Properties);
  const properties = await propertyRepository.find();
  return properties;
};

export default listPropertiesService;
