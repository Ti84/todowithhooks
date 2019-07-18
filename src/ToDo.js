import React from 'react';
const ToDo = ({ id, name, completed, onToggleCompleted, onDeleteToDo }) => {
  const toggleCompleted = () => {
    onToggleCompleted(id);
  };
  const deleteToDo = () => {
    onDeleteToDo(id);
  };
  return (
    <tr className="todo">
      <td className="todo__field--large todo__field--left app__content__text--secondary">
        {name}
      </td>
      <td className="todo__field--small">
        <button className="todo__delete" onClick={deleteToDo}>
          X
        </button>
      </td>
      <td className="todo__field--small">
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
