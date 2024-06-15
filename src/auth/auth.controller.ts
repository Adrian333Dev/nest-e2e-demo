import { Body, Controller, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInInput, SignUpInput } from '@/dtos';
import { User } from '@/types';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  async register(@Body() input: SignUpInput): Promise<boolean> {
    return this.authService.register(input);
  }

  @Post('login')
  async login(@Body() input: SignInInput): Promise<User | null> {
    return this.authService.login(input.email, input.password);
  }
}
