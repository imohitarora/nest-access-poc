import { Controller } from '@nestjs/common';
import { BaseController } from '../base/base.controller';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController extends BaseController<User> {
  constructor(private readonly service: UsersService) {
    super(service);
  }
}
