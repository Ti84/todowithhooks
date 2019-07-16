import React, { useReducer } from 'react';
import './App.css';
import ToDoInput from './ToDoInput';
import { toDoReducer, TODO_ADD } from './reducers/todo';
import { getToDosFromStorage } from './utils/getFromStorage';
import ToDoList from './ToDoList';

const App = () => {
  const [toDoState, toDoDispatch] = useReducer(
    toDoReducer,
    getToDosFromStorage()
  );

  const addToDo = newToDoName => {
    toDoDispatch({
      type: TODO_ADD,
      payload: newToDoName
    });
  };

  return (
    <main className="App">
      <h1>ToDo List</h1>
      <ToDoInput onAddToDo={addToDo} />
      <ToDoList toDoListData={toDoState} />
    </main>
  );
};

export default App;

// Color toggle using css variables ::root
// Local storage.
// Unit tests
// Accessible

// eventually drag / droppable.
