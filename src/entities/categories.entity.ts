import { Exclude } from 'class-transformer';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import Properties from './properties.entity';

@Entity('category')
class Categories {
  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  readonly id: string;

  @Column()
  name: string;

  @OneToMany(() => Properties, (properties) => properties.category, {
    eager: true,
  })
  properties: Properties[];
}

export default Categories;
