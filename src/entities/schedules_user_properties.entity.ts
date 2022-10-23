import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Properties from './properties.entity';
import User from './user.entity';

@Entity('schedules')
class Schedule {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'time' })
  hour: Date;

  @ManyToOne(() => Properties)
  @JoinColumn()
  property: Properties;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;
}

export default Schedule;
