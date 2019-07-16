import React, { useReducer } from 'react';
import './App.css';
import ToDoInput from './ToDoInput';
import {
  toDoReducer,
  TODO_ADD,
  TODO_TOGGLE,
  TODO_DELETE
} from './reducers/todo';
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

  const toggleCompleted = id => {
    toDoDispatch({
      type: TODO_TOGGLE,
      payload: id
    });
  };

  const deleteToDo = id => {
    toDoDispatch({
      type: TODO_DELETE,
      payload: id
    });
  };

  return (
    <main className="App">
      <h1>ToDo</h1>
      <ToDoInput onAddToDo={addToDo} />
      <ToDoList
        onToggleCompleted={toggleCompleted}
        onDeleteToDo={deleteToDo}
        toDoListData={toDoState}
      />
    </main>
  );
};

export default App;

// Color toggle using css variables ::root**
// Local storage**
// Unit tests**
// Accessible**

// eventually drag / droppable?
// useContext?
