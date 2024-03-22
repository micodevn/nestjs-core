import { MySqlRepository } from '@app/common';
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UserRepository extends MySqlRepository<User> {
  constructor(
    @InjectRepository(User)
    itemsRepository: Repository<User>,
    entityManager: EntityManager,
  ) {
    super(itemsRepository, entityManager);
  }
}
