import { Transport, ClientOptions } from '@nestjs/microservices';
export const microserviceOptions: ClientOptions = {
  transport: Transport.REDIS,
  options: {
    url: 'redis://127.0.0.1:6379',
  },
};
