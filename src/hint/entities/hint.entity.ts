import { Admin } from 'src/admin/entities/admin.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { Treasure } from './treasure.entity';

@Entity()
export class Hint {
  @PrimaryGeneratedColumn()
  agency_id: number;

  @Column()
  agency_name: string;

  @Column()
  url: string;

  @Column()
  coin_name: string;

  @Column()
  coin_ammount: number;

  @Column()
  agency_unique_number: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @ManyToOne(() => Admin, (Admin) => Admin.admin_id)
  Admin: Admin;
}
