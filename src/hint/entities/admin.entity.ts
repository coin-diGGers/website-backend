import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Hint } from './hint.entity';
// import { chromeExtension } from './chromeExtension.entity';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  admin_id: number;
}