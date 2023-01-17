import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseModule } from './base/base.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [TypeOrmModule.forRoot(), BaseModule, UsersModule, RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
