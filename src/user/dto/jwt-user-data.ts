import { Field, InputType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class JwtUserData {
    @Field()
    userId: string;

    @Field()
    @MaxLength(100)
    email: string;

    @Field()
    @MaxLength(100)
    role: string;
}
