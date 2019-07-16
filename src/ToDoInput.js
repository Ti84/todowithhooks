import React, { useState } from 'react';

const ToDoInput = ({ onAddToDo }) => {
  const [toDoName, setToDoName] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    onAddToDo(toDoName.trim());
    setToDoName('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={e => setToDoName(e.target.value)}
        value={toDoName}
      />
    </form>
  );
};

export default ToDoInput;
