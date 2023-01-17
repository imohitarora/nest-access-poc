import { Controller } from '@nestjs/common';
import { Role } from './roles.entity';
import { BaseController } from '../base/base.controller';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController extends BaseController<Role> {
  constructor(private readonly service: RolesService) {
    super(service);
  }
}
