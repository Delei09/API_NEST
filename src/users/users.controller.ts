import { Body, Controller, Get, Post } from '@nestjs/common';

import { UserTypes } from './types';
import { User } from './users.entity';
import { UsersService } from './users.service';
import { Public } from 'src/utils/Decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post()
  create(@Body() body: UserTypes): Promise<User> {
    return this.usersService.create({
      ...body,
    });
  }

  @Public()
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
