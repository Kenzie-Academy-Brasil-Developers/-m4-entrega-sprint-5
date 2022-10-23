import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import Addresses from './addresses.entity';
import Categories from './categories.entity';

@Entity('properties')
class Properties {
  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  readonly id: string;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  value: number;

  @Column()
  size: number;

  @CreateDateColumn({ type: Date })
  createdAt: Date;

  @UpdateDateColumn({ type: Date })
  updatedAt: Date;

  @OneToOne(() => Addresses, { eager: true })
  @JoinColumn()
  address: Addresses;

  @ManyToOne(() => Categories)  
  category: Categories;
}

export default Properties;
