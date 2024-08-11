import { Admin } from 'src/admin/admin.entity.ts/admin.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Hint {
  @PrimaryGeneratedColumn()
  agency_id: number;

  @Column()
  agency_unique_number: number;

  @Column()
  agency_name: string;

  @Column()
  url: string;

  @Column()
  coin_name: string;

  @Column()
  coin_ammount: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @ManyToOne(() => Admin, (Admin) => Admin.admin_id)
  Admin: Admin;
}