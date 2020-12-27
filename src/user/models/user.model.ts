import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
    @Field(type => ID)
    id: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    name: string;

    @Field({ nullable: true })
    phone?: string;

    @Field()
    updatedAt: Date;

    @Field()
    createdAt: Date;
}
