import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Tasks } from "./tasks.model";
import { CreateTaskDto } from "./dto/create-task.dto";

@Injectable()
export class TasksService {
  constructor(@InjectModel(Tasks) private tasksRepository: typeof Tasks) {

  }

  async createTask(dto: CreateTaskDto) {
    const task = await this.tasksRepository.create(dto);
    return task;
  }

  async getAllTask() {
    const task = await this.tasksRepository.findAll();
    return task;
  }

  async updateTask(id: number) {
    const task = await this.tasksRepository.findByPk(id);
    task.completed = !task.completed;
    await task.save();

    return task;
  }

  async deleteTask(id: number) {
    const task = await this.tasksRepository.findByPk(id);
    await task.destroy();

    return task;
  }
}
