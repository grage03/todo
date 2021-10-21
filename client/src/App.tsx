import React from 'react';
import { InputBlock, TaskBlock } from "./tasks/components";
import {observer} from "mobx-react-lite";
import {useFilterKey} from "./tasks/hooks";

export const App = observer(() => {
  const { filterKey, onUserSetFilterKey } = useFilterKey();

  return (
    <React.Fragment>
      <InputBlock
        filterKey={filterKey}
        onUserSetFilterKey={onUserSetFilterKey}
      />

      <TaskBlock
        filterKey={filterKey}
      />
    </React.Fragment>
  );
});

export default App;
