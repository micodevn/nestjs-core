import { MongoRepository } from '@app/common';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TodoEntity } from './entities/todo.entity';
@Injectable()
export class TodoRepository extends MongoRepository<TodoEntity> {
  constructor(@InjectModel(TodoEntity.name) todoModel: Model<TodoEntity>) {
    console.log('todoModel', todoModel);
    super(todoModel);
  }
}
