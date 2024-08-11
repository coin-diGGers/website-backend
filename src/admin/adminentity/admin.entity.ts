import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { chromeExtension } from './chromeExtension.entity';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  admin_id: number;
  
  @Column()
  id: string;

  @Column()
  pw: string;
}