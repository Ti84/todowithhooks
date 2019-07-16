export const getToDosFromStorage = () => {
  return localStorage.getItem('todo-state') ? JSON.parse('todo-state') : [];
};
