import {useContext, useEffect} from "react";
import {Context} from "../../../index";
import {getAllTasks, userChangeTaskCompleted, userCreateTask, userDeleteTask} from "../../../http";

export const useTaskList = () => {
  const { tasksList } = useContext(Context);

  const onUserAddTask = async (value: string) => {
    try {
      const data = await userCreateTask(value);

      const updateTasksList = [...tasksList.getTasksList(), data];
      tasksList.setTasksList(updateTasksList);
    } catch (e) {
      console.log(e);
    }
  };

  const onUserDeleteTask = async (id: number) => {
    try {
      await userDeleteTask(id);

      const updateTasksList = tasksList.getTasksList().filter(item => item.id !== id);
      tasksList.setTasksList(updateTasksList);
    } catch (e) {
      console.log(e);
    }
  };

  const onUserChangeCompleted = async (id: number) => {
    try {
      await userChangeTaskCompleted(id);

      const updateTasksList = tasksList.getTasksList().map(item => {
        return item.id === id ? { ...item, completed: !item.completed } : item
      });
      tasksList.setTasksList(updateTasksList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    async function getTask() {
      try {
        const data = await getAllTasks();

        tasksList.setTasksList(data);
      } catch (e) {
        console.log(e);
      }
    }

    getTask();
  }, []);

  return {
    onUserAddTask,
    onUserDeleteTask,
    onUserChangeCompleted
  }
};