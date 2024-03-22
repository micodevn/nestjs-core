import { Module } from '@nestjs/common';
import { TodoModule } from './modules/todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { MongoModule, MysqlModule } from '../libs/common/database';
import { TodoSqlModule } from './modules/todo-mysql/todo.module';
import { AuthModule } from './modules/auth/auth.module';
import { RedisModule } from './common/caching/redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongoModule,
    MysqlModule,
    RedisModule,
    TodoModule,
    TodoSqlModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
