import { Admin } from 'src/admin/entities/admin.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, ManyToOne, Decimal128 } from 'typeorm';
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

  @Column('decimal', { precision: 10, scale: 6, 
    transformer: {
    to: (value: number) => value,  // 저장할 때 그대로 저장
    from: (value: string) => parseFloat(value) // 가져올 때 parseFloat로 변환하여 3.00 -> 3
  }})
  coin_ammount: number;

  @Column()
  agency_unique_number: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @ManyToOne(() => Admin, (Admin) => Admin.admin_id)
  Admin: Admin;
}
