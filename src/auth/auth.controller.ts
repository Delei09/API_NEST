import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Public } from 'src/utils/Decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn({
      username: signInDto.username,
      password: signInDto.password,
    });
  }

  @UseGuards(AuthGuard) /// Usa para cada rota que deseja ser protegida
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
