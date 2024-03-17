import { Column, Entity } from 'typeorm';
import { EntitySql } from '@app/common';

@Entity('cms')
export class TodoEntitySql extends EntitySql<TodoEntitySql> {
  @Column()
  name: string;
}
