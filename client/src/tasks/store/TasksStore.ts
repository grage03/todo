import {makeAutoObservable} from "mobx";

export type TaskType = {
  id: number,
  value: string,
  completed: boolean,
  createdAt?: string,
  updatedAt?: string,
};

export class TasksStore {
  private tasksList: TaskType[];

  constructor() {
    this.tasksList = [];

    makeAutoObservable(this);
  }

  public setTasksList(value: TaskType[]): void {
    this.tasksList = value;
  }

  public getTasksList(): TaskType[] {
    return this.tasksList;
  }
}