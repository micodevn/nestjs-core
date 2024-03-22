import { Column, Entity } from 'typeorm';
import { EntitySql } from '@app/common';

@Entity('users')
export class User extends EntitySql<User> {
  @Column()
  username: string;

  @Column()
  password: string;
}
