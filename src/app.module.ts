import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';

@Module({
  imports: [
      GraphQLModule.forRoot({
          autoSchemaFile: 'schema.gql',
          debug: true,
          playground: true,
      }),
      ConfigModule.forRoot(),
      MongooseModule.forRoot('mongodb://nest-mongo-db/nest-mongo'),
      UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
