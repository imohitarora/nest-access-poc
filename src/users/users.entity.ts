import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../base/base.entity';
import { Role } from '../roles/roles.entity';

@Entity({ name: 'user_master' })
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  username: string;

  @Column({ type: 'varchar', length: 300 })
  status: string;

  @Column({ type: 'varchar', length: 300 })
  email: string;

  @Column({ type: 'varchar', length: 300 })
  loginId: string;

  @Column({ type: 'varchar', length: 300 })
  phone: string;

  @Column('point', { nullable: true })
  location: string;

  @Column({ type: 'boolean', default: true })
  fullDataAccess: boolean;

  @OneToOne(type => User)
  @JoinColumn()
  relationshipManager: User;

  @OneToOne(type => Role)
  @JoinColumn()
  role: Role;

  //   @OneToOne(type => Location)
  //   @JoinColumn()
  //   role: Location;
}
