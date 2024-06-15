import { ConfigModule } from '@nestjs/config';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import * as request from 'supertest';

import { validationPipeOptions } from '@/main';
import { APP_PIPE } from '@nestjs/core';
import { AuthModule } from '@/auth/auth.module';

describe('[Feature] Auth - /auth', () => {
  let app: INestApplication;
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), AuthModule],
    }).compile();

    app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe(validationPipeOptions));

    await app.init();
  });

  it('POST /api/auth/register - invalid credentials', async () => {
    return await request(app.getHttpServer())
      .post('/api/auth/register')
      .send({ name: 'John Doe', email: 'invalid-email', password: '1234' })
      .expect(400);
  });

  afterAll(async () => {
    await module.close();
    await app.close();
  });
});
