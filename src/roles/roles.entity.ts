import { BaseEntity } from '../base/base.entity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'role_master' })
export class Role extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: true })
  rolename: string;
}
