import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetCurrentUserDecorator } from '../auth/decorators/get-current-user.decorator';
import { AppLogger } from '../../common/logger/logger.service';

@Controller('user')
export class UserController {
  private readonly logger = new AppLogger(UserController.name);

  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    this.logger.log('Logger Test');
    this.logger.warn('Logger Test');
    this.logger.error('Logger Test');

    return this.userService.findAll();
  }

  @Get(':username')
  @UseGuards(JwtAuthGuard)
  async findOne(
    @Param('username') username: string,
    @Req() req: Request,
    @GetCurrentUserDecorator() user: User,
  ) {
    return await this.userService.findOne(username);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}
