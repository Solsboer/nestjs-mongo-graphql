import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserResolver } from './resolvers/user.resolver';
import { UserService } from './services/user.service';
import { UserSchema } from "./schemas/user.schema";
import { UserController } from './user.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
    ],
    providers: [UserResolver, UserService],
    exports: [UserService],
    controllers: [UserController],
})
export class UserModule {}
