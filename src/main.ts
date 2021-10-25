import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://bootview.info'],
    methods: 'GET,PATCH,POST,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Authorization',
    exposedHeaders: ['Authorization','Set-Cookie']
  })
  await app.listen(8888);
}
bootstrap();
