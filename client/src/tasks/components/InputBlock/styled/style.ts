import styled from "styled-components";
import {Button, DropdownButton} from "react-bootstrap";

export const InputItem = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const AddButton = styled(Button)`
  margin-left: 10px;
`;

export const DropDown = styled(DropdownButton)`
  margin-right: 10px;
`;