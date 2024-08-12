import { Admin } from 'src/admin/entities/admin.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Treasure {
  @PrimaryGeneratedColumn()
  founder_id: number;

  @Column()
  agency_unique_number: number;

  @Column()
  agency_name: string;

  @Column()
  coin_name: string;

  @Column()
  coin_ammount: number;

  @Column()
  coin_address: string;

  @Column()
  found: boolean;

  @Column()
  withdraw_status: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @ManyToOne(() => Admin, (Admin) => Admin.admin_id)
  Admin: Admin;
}