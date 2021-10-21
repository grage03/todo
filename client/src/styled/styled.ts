import styled from "styled-components";

type FlexDirectionType = {
  direction: 'column' | 'row',
  top?: null
};

export const ContainerBlock = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: ${(props: FlexDirectionType) => props.top === null ? 0 : '40px'};
  flex-direction: ${(props: FlexDirectionType) => props.direction};
`;