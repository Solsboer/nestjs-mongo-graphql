import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from "../services/user.service";
import { User } from "../models/user.model";
import { NewUserInput } from "../dto/new-user.input";
import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "../../auth/guards/gql-auth.guard";
import { CurrentUser } from "../decorator/current-user.decorator";
import { JwtUserData } from "../dto/jwt-user-data";
import { Role } from "../../auth/types/roles.enum";
import { Auth } from "../../auth/decorator/auth.decorator";

@Resolver()
export class UserResolver {
    constructor(
        private readonly userService: UserService
    ) {
    }

    @Query(() => [User])
    @Auth(Role.Admin)
    async getUsers() {
        return this.userService.findAll();

    }

    @Query(() => User)
    @UseGuards(GqlAuthGuard)
    async me(@CurrentUser() user: JwtUserData) {
        return this.userService.findById(user.userId);
    }

    @Mutation(() => User)
    async createUser(@Args('input') input: NewUserInput) {
        return this.userService.create(input)
    }
}
