import React from 'react';
const ToDo = ({ id, name, completed, onToggleCompleted, onDeleteToDo }) => {
  const toggleCompleted = () => {
    onToggleCompleted(id);
  };
  const deleteToDo = () => {
    onDeleteToDo(id);
  };
  return (
    <tr>
      <td>{name}</td>
      <td>
        <button onClick={deleteToDo}>DELETE</button>
      </td>
      <td>
        <input
          type="checkbox"
          aria-label={'complete ' + name}
          aria-checked={completed}
          onChange={toggleCompleted}
          checked={completed}
        />
      </td>
    </tr>
  );
};

export default ToDo;
