import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { Role } from './roles.entity';
import { RolesRepository } from './roles.repository';

@Injectable()
export class RolesService extends BaseService<Role> {
  constructor(private readonly repository: RolesRepository) {
    super(repository);
  }
}
