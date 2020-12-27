import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Role } from "../types/roles.enum";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {
    }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return true;
        }
        const ctx = GqlExecutionContext.create(context);
        const user = ctx.getContext().req.user;
        console.log(user, 'roles user');
        return requiredRoles.some((role) => user.role?.includes(role));
        // const ctx = GqlExecutionContext.create(context);
        // const user = ctx.getContext().req.user;
        // console.log(ctx.getContext().req.user, 'roles user');
        // return true;
    }
}
