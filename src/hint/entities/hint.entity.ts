import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hint {
  @PrimaryGeneratedColumn()
  founder_id: number;

  @Column()
  description: string;
}