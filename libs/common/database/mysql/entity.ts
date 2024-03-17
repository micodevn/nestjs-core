import { PrimaryGeneratedColumn } from 'typeorm';

export class Entity<T> {
  @PrimaryGeneratedColumn()
  id: number;

  constructor(entity: Partial<T>) {
    Object.assign(this, entity);
  }
}
