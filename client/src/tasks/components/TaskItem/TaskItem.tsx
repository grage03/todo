import React from 'react';
import {Alert, Button, FormControl, InputGroup} from 'react-bootstrap';
import { ContainerBlock } from '../../../styled/styled';
import { TaskGroup } from "./style/style";
import {observer} from "mobx-react-lite";
import {useTaskList} from "../../hooks";

type TaskItemProps = {
  id: number,
  value: string,
  completed: boolean,
};

export const TaskItem = observer((
  { id, value, completed }: TaskItemProps
) => {
  const { onUserDeleteTask,
    onUserChangeCompleted
  } = useTaskList();

  return (
    <ContainerBlock direction='row' top={null}>
      <TaskGroup>
        <InputGroup.Checkbox
          onClick={() => onUserChangeCompleted(id)}
          checked={completed}
          readOnly
        />

        <h5>{value}</h5>

        <Button
          variant="secondary"
          onClick={() => onUserDeleteTask(id)}
        >Delete</Button>
      </TaskGroup>
    </ContainerBlock>
  );
});