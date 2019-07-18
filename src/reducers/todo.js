import generateId from '../utils/generateId';
import { setToDosInStorage } from '../utils/localStorage';

// TODO ACTIONS
export const TODO_ADD = 'TODO_ADD';
export const TODO_TOGGLE = 'TODO_TOGGLE';
export const TODO_DELETE = 'TODO_DELETE';

export const toDoReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case TODO_ADD:
      if (action.payload) {
        newState = [
          ...state,
          {
            id: generateId(),
            name: action.payload,
            completed: false
          }
        ];
        setToDosInStorage(newState);
      }
      return newState;
    case TODO_TOGGLE:
      newState = state.map(toDo => {
        if (toDo.id === action.payload) {
          return {
            ...toDo,
            completed: !toDo.completed
          };
        }
        return toDo;
      });
      setToDosInStorage(newState);
      return newState;
    case TODO_DELETE:
      newState = state.filter(toDo => toDo.id !== action.payload);
      setToDosInStorage(newState);
      return newState;
    default:
      console.error('Use the action constants bro.');
      return state;
  }
};
