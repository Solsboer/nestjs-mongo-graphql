import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from "./user.service";
import { User } from "./models/user.model";
import { NewUserInput } from "./dto/new-user.input";

@Resolver()
export class UserResolver {
    constructor(
        private readonly userService: UserService
    ){}

    @Query(() => [User])
    async getUsers() {
        return this.userService.findAll();

    }
    @Mutation(() => User)
    async createUser (@Args('input') input: NewUserInput) {
        return this.userService.create(input)
    }
}
