import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Role } from "../../auth/types/roles.enum";

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

    @Field({ defaultValue: Role.Guest })
    role?: Role;

    @Field()
    updatedAt: Date;

    @Field()
    createdAt: Date;
}
