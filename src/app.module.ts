import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './modules/todo/todo.module';
import { ConfigService } from "@nestjs/config";

@Module({
  imports: [TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
