import { Admin } from 'src/admin/entities/admin.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { Hint } from './hint.entity';

@Entity()
export class Treasure {
  @PrimaryGeneratedColumn()
  founder_id: number;

  @Column()
  agency_name: string;

  @Column()
  coin_name: string;

  @Column()
  coin_ammount: number;

  @Column()
  coin_address: string;

  @Column()
  agency_unique_number: number;

  @Column()
  found: boolean;

  @Column()
  withdraw_status: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
