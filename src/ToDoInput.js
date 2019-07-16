import React, { useState } from 'react';

const ToDoInput = ({ onAddToDo }) => {
  const [toDoName, setToDoName] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    onAddToDo(toDoName.trim());
    setToDoName('');
  };

  const onChange = e => {
    if (e.target.value.length > 25) {
      return;
    }
    setToDoName(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={toDoName} />
    </form>
  );
};

export default ToDoInput;
