import { TaskType } from "../tasks/store/TasksStore";
import API from "./API";

enum urls {
  TASKS = '/tasks',
}

export const getAllTasks = async () => {
  const { data } = await API.get<TaskType[]>(`${urls.TASKS}`);

  return data;
};

export const userDeleteTask = async (id: number) => {
  const { data } = await API.delete<TaskType[]>(`${urls.TASKS}/${id}`);

  return data;
};

export const userCreateTask = async (value: string) => {
  const { data } = await API.post<TaskType>(`${urls.TASKS}`, {value});

  return data;
};

export const userChangeTaskCompleted = async (id: number) => {
  const { data } = await API.put<TaskType[]>(`${urls.TASKS}/${id}`);

  return data;
};