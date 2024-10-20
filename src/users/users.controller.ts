import { Body, Controller, Get, Post } from '@nestjs/common';

import { UserTypes } from './types';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() body: UserTypes): Promise<User> {
    return this.usersService.create({
      ...body,
    });
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
