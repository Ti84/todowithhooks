import React from 'react';
const ToDoList = ({ toDoListData }) => {
  const toDos =
    toDoListData &&
    toDoListData.length > 0 &&
    toDoListData.map(toDo => (
      <tr>
        <td>{toDo.id}</td>
        <td>{toDo.name}</td>
        <td>{toDo.completed.toString()}</td>
      </tr>
    ));
  return (
    <table>
      <tbody>{toDos ? toDos : 'Nothing ToDo Yet!'}</tbody>
    </table>
  );
};

export default ToDoList;
