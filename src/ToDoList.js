import React from 'react';
import ToDo from './ToDo';
const ToDoList = ({ toDoListData, onToggleCompleted, onDeleteToDo }) => {
  const toDos =
    toDoListData &&
    toDoListData.length > 0 &&
    toDoListData.map(toDo => (
      <ToDo
        key={toDo.id}
        id={toDo.id}
        name={toDo.name}
        completed={toDo.completed}
        onToggleCompleted={id => onToggleCompleted(id)}
        onDeleteToDo={id => onDeleteToDo(id)}
      />
    ));
  return (
    <table>
      <tbody>
        {toDos ? (
          toDos
        ) : (
          <tr>
            <td>Nothing ToDo Yet!</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ToDoList;
