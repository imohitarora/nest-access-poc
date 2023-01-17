import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { microserviceOptions } from './config/options/microservice.options';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
