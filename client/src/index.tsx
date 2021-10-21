import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {TasksStore} from "./tasks/store/TasksStore";

export const Context = createContext({
  tasksList: new TasksStore(),
});

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      tasksList: new TasksStore(),
    }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
