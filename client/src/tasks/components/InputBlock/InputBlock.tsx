import React, {useState} from 'react';
import {ContainerBlock} from "../../../styled/styled";
import { InputItem, AddButton, DropDown } from './styled/style';
import {Dropdown, FormControl} from "react-bootstrap";
import {FilterKeyType} from "../../hooks/useFilterKey/useFilterKey";
import {useTaskList} from "../../hooks";

type InputBlockProps = {
  filterKey: FilterKeyType,
  onUserSetFilterKey(value: FilterKeyType): void
};

const allFiltersKeys: FilterKeyType[] = [
  'All',
  'Open',
  'Close'
];

export const InputBlock = ({ filterKey, onUserSetFilterKey }: InputBlockProps) => {
  const [ taskName, setTaskName ] = useState<string>('');
  const { onUserAddTask } = useTaskList();

  const onUserClickButton = () => {
    if (!taskName) return alert('You cannot add an empty task.');

    onUserAddTask(taskName);
    setTaskName('');
  };

  const onUserInputTask = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTaskName(event.target.value);
  };

  return (
    <ContainerBlock direction='row'>
      <InputItem>
        <DropDown variant='secondary' title={filterKey}>
          {
            allFiltersKeys.map((item: FilterKeyType) => {
              return <Dropdown.Item
                id={item}
                key={item}
                onClick={() => onUserSetFilterKey(item)}
              >
                {item}
              </Dropdown.Item>
            })
          }
        </DropDown>

        <FormControl
          type='text'
          placeholder='Add new task'
          value={taskName}
          onChange={onUserInputTask}
        />

        <AddButton
          variant='secondary'
          onClick={onUserClickButton}
        >
          Add
        </AddButton>
      </InputItem>
    </ContainerBlock>
  );
};