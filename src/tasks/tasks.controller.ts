import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { Task } from './tasks.entity';
import { TasksService } from './tasks.service';
import { TaskTypes } from './types';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() body: TaskTypes): Promise<Task> {
    return await this.tasksService.create({
      ...body,
    });
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return await this.tasksService.findAll();
  }

  @Get('user/:id')
  async getTasksByUserId(@Param('id') id: number): Promise<Task[]> {
    return await this.tasksService.getTasksByUser(id);
  }
}
