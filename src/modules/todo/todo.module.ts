import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TodoRepository } from './todo.repository';
import { TodoEntity, TodoSchema } from './entities/todo.entity';
import { MongoModule } from '@app/common';

@Module({
  imports: [
    MongoModule.forFeature([{ name: TodoEntity.name, schema: TodoSchema }]),
  ],
  controllers: [TodoController],
  providers: [TodoService, TodoRepository],
})
export class TodoModule {}
