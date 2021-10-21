import React, {useContext} from 'react';
import { ContainerBlock } from '../../../styled/styled';
import {Context} from "../../../index";
import {TaskItem} from "../TaskItem/TaskItem";
import {observer} from "mobx-react-lite";
import {TaskType} from "../../store/TasksStore";
import {FilterKeyType} from "../../hooks/useFilterKey/useFilterKey";

type TaskBlockProps = {
  filterKey: FilterKeyType
};

export const TaskBlock = observer(({ filterKey }: TaskBlockProps) => {
  const { tasksList } = useContext(Context);

  const filtersByKey = (): TaskType[] => {
    if (filterKey === 'All') return tasksList.getTasksList();

    return tasksList.getTasksList().filter(item => filterKey === 'Open' ? !item.completed : item.completed);
  };

  return (
    <ContainerBlock direction='column'>
      {
        filtersByKey().map(item => {
          return <TaskItem
            key={item.id}
            id={item.id}
            value={item.value}
            completed={item.completed}
          />
        })
      }
    </ContainerBlock>
  );
});