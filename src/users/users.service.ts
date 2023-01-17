import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { BaseService } from '../base/base.service';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService extends BaseService<User> {
  constructor(private readonly repository: UsersRepository) {
    super(repository);
  }
}
