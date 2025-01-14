import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserTypes } from 'src/users/types';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(user: UserTypes): Promise<any> {
    const userDB = await this.usersService.findOne(user.username);
    if (userDB?.password !== user.password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
