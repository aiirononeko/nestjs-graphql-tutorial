import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';
import { CreateTaskInput } from './dto/createTask.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateTaskInput } from './dto/updateTask.input';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async getTasks(): Promise<Task[]> {
    return await this.prisma.task.findMany();
  }

  async createTask(createTaskInput: CreateTaskInput): Promise<Task> {
    const { name, dueDate, description } = createTaskInput;
    const newTask = await this.prisma.task.create({
      data: {
        name,
        dueDate,
        description,
      },
    });
    return newTask;
  }

  async updateTask(updateTaskInput: UpdateTaskInput): Promise<Task> {
    const { id, name, dueDate, status, description } = updateTaskInput;
    const updatedTask = await this.prisma.task.update({
      where: { id },
      data: {
        name,
        dueDate,
        status,
        description,
      },
    });
    return updatedTask;
  }

  async deleteTask(id: number): Promise<Task> {
    const deletedTask = await this.prisma.task.delete({
      where: { id },
    });
    return deletedTask;
  }
}
