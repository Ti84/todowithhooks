export const getToDosFromStorage = () => {
  return localStorage.getItem('todo-state')
    ? JSON.parse(localStorage.getItem('todo-state'))
    : [];
};

export const setToDosInStorage = toDoData => {
  localStorage.setItem('todo-state', JSON.stringify(toDoData));
};
