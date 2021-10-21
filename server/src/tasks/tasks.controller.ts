import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TasksService } from "./tasks.service";

@Controller('tasks')
export class TasksController {

  constructor(private taskService: TasksService) {
  }

  @Post()
  createTask(@Body() taskDto: CreateTaskDto) {
    return this.taskService.createTask(taskDto);
  }

  @Get()
  getAllTask() {
    return this.taskService.getAllTask();
  }

  @Put(':id')
  updateCompletedTask(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.updateTask(id);
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.deleteTask(id);
  }
}
