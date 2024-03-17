import { PrimaryGeneratedColumn } from 'typeorm';

export class EntitySql<T> {
  @PrimaryGeneratedColumn()
  id: number;
  constructor(entity: Partial<T>) {
    Object.assign(this, entity);
  }
}
