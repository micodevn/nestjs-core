import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
// import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoSqlRepository } from './todo.repository';
import { TodoEntitySql } from './entities/todo.entity';

@Injectable()
export class TodoSqlService {
  constructor(private readonly todoRepo: TodoSqlRepository) {}
  create(createTodoDto: CreateTodoDto) {
    const reservation = new TodoEntitySql(createTodoDto);

    return this.todoRepo.create(reservation);
  }

  findAll() {
    return this.todoRepo.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: any) {
    return `This action updates a #${id} todo` + updateTodoDto;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
