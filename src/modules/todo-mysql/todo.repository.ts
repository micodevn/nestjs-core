import { MySqlRepository } from '@app/common';
import { Injectable } from '@nestjs/common';
import { TodoEntitySql } from './entities/todo.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class TodoSqlRepository extends MySqlRepository<TodoEntitySql> {
  constructor(
    @InjectRepository(TodoEntitySql)
    itemsRepository: Repository<TodoEntitySql>,
    entityManager: EntityManager,
  ) {
    super(itemsRepository, entityManager);
  }
}
