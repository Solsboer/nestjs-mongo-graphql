import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { Role } from "../types/roles.enum";
import { RolesGuard } from '../guards/roles.guard';
import { GqlAuthGuard } from "../guards/gql-auth.guard";

export function Auth(...roles: Role[]) {
    return applyDecorators(
        SetMetadata('roles', roles),
        UseGuards(GqlAuthGuard, RolesGuard),
    );
}
