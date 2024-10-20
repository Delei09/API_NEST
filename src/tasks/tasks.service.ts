import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { TaskTypes } from './types';
import { Task } from './tasks.entity';
import { User } from 'src/users/users.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

  ) { }

  async create(data: TaskTypes): Promise<Task> {
    const user = await this.userRepository.findOneBy({ id: data.user.id });
    const task = this.tasksRepository.create({
      ...data,
      user: user
    });
    return this.tasksRepository.save(task);
  }

  async getTasksByUser(id: number): Promise<Task[]> {
    const user = await this.userRepository.findOneBy({ id });
    console.log(user);
    return this.tasksRepository.find({ where: { user } });
  }

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  findOne(id: number): Promise<Task | null> {
    return this.tasksRepository.findOneBy({ id });
  }



  async remove(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
