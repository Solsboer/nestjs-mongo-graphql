import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
      GraphQLModule.forRoot({
          autoSchemaFile: 'schema.gql',
          debug: true,
          playground: true,
          context: ({req}) => ({headers: req.headers})
      }),
      ConfigModule.forRoot({ isGlobal: true }),
      MongooseModule.forRoot('mongodb://nest-mongo-db/nest-mongo'),
      UserModule,
      AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
