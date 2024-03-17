import { Module } from '@nestjs/common';
import {  TodoSqlService } from './todo.service';
import { TodoSqlController } from './todo.controller';
import { TodoEntitySql } from './entities/todo.entity';
import { MysqlModule } from '@app/common';
import { TodoSqlRepository } from './todo.repository';

@Module({
  imports: [MysqlModule.forFeature([TodoEntitySql])],
  controllers: [TodoSqlController],
  providers: [TodoSqlService, TodoSqlRepository],
})
export class TodoSqlModule {}
