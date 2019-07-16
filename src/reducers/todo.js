import generateId from '../utils/generateId';

// TODO ACTIONS
export const TODO_ADD = 'TODO_ADD';
export const TODO_TOGGLE = 'TODO_TOGGLE';
export const TODO_DELETE = 'TODO_DELETE';

export const toDoReducer = (state, action) => {
  switch (action.type) {
    case TODO_ADD:
      if (action.payload) {
        return [
          ...state,
          {
            id: generateId(),
            name: action.payload,
            completed: false
          }
        ];
      }
      return state;
    case TODO_TOGGLE:
      return state.map(toDo => {
        if (toDo.id === action.payload) {
          return {
            ...toDo,
            completed: !toDo.completed
          };
        }
        return toDo;
      });
    case TODO_DELETE:
      return state.filter(toDo => toDo.id !== action.payload);
    default:
      console.error('Use the action constants bro.');
      return state;
  }
};
