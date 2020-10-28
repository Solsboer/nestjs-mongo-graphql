import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class NewUserInput {
    @Field()
    @MaxLength(30)
    name: string;

    @Field()
    @MaxLength(100)
    email: string;

    @Field({ nullable: true })
    @IsOptional()
    @Length(30, 255)
    phone?: string;

    @Field()
    @MaxLength(100)
    password: string;
}
