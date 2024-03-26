import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { MysqlModule } from '@app/common';
import { UserRepository } from './user.repository';
import { UserEventEmit } from './events/user.events.emit';

@Module({
  imports: [MysqlModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, UserRepository, UserEventEmit],
  exports: [UserService, UserRepository],
})
export class UserModule {}
