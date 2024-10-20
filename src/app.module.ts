import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Task } from './tasks/tasks.entity';
import { TasksModule } from './tasks/tasks.module';
import { User } from './users/users.entity';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'my_tasks',
      entities: [User, Task],
      synchronize: true,
    }),
    UsersModule,
    TasksModule,
  ],
})
export class AppModule {}
