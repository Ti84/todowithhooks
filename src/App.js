import React, { useReducer, Fragment } from 'react';
import './App.css';
import ToDoInput from './ToDoInput';
import {
  toDoReducer,
  TODO_ADD,
  TODO_TOGGLE,
  TODO_DELETE
} from './reducers/todo';
import { getToDosFromStorage } from './utils/localStorage';
import ToDoList from './ToDoList';
import Footer from './Footer';

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
    <Fragment>
      <div className="app">
        <div className="app__wrap">
          <main>
            <h1>Ye Ol' ToDo</h1>
            <ToDoInput onAddToDo={addToDo} />
            <section className="app__content">
              <ToDoList
                onToggleCompleted={toggleCompleted}
                onDeleteToDo={deleteToDo}
                toDoListData={toDoState}
              />
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default App;

// Color toggle using css variables ::root**
// Local storage**
// Unit tests**
// Accessible**

// eventually drag / droppable?
// useContext?

// Credit https://favicon.io/emoji-favicons/white-heavy-check-mark/
// CRA
