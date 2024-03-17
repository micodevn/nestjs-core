import { Module } from '@nestjs/common';
import { TodoModule } from './modules/todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { MongoModule, MysqlModule } from '../libs/common/database';
import { TodoSqlModule } from './modules/todo-mysql/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongoModule,
    MysqlModule,
    TodoModule,
    TodoSqlModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
