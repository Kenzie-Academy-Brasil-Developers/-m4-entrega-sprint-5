import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('addresses')
class Addresses {
  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  readonly id: string;

  @Column()
  district: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column()
  number: string;

  @Column()
  city: string;

  @Column({ length: 2 })
  state: string;
}

export default Addresses;
