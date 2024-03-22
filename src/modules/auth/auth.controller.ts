import { Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { GetCurrentUserDecorator } from './decorators/get-current-user.decorator';
import { Response } from 'express';
import { User } from '../user/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(
    @GetCurrentUserDecorator() user: User,
    @Res({ passthrough: true }) res: Response,
  ) {
    const access_token = await this.authService.login(user, res);

    res.json({
      user,
      access_token,
    });
  }
}
