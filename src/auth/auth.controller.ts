import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from "./guards/auth.guard";
import { AuthService } from "./services/auth.service";

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        console.log(req.user, 'user');
        return this.authService.login(req.user);
    }
}
