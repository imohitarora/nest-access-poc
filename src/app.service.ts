import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApplicationName(): string {
    return 'Hello World!';
  }
}
