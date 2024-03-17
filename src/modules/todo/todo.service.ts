import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
// import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepo: TodoRepository) {}
  create(createTodoDto: CreateTodoDto) {
    return this.todoRepo.create({
      ...createTodoDto,
    });
  }

  findAll() {
    return `This action returns all todo`;
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
