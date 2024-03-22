import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const user = new User(createUserDto);

    return this.userRepo.create(user);
  }

  async verifyUser(username: string, password: string): Promise<User> {
    // getUser
    const user: User = await this.userRepo.findOne({ username });

    if (!user) throw new UnauthorizedException();
    // check password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) throw new UnauthorizedException();

    return user;
  }

  async getUser(username: string): Promise<User> {
    return this.userRepo.findOne({ username });
  }

  findAll() {
    return this.userRepo.find({});
  }

  findOne(username: string) {
    return this.userRepo.findOne({ username });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepo.findOneAndUpdate({ id }, updateUserDto);
  }

  remove(id: number) {
    return this.userRepo.findOneAndDelete({ id });
  }
}
