import generateId from '../utils/generateId';

export const TODO_ADD = 'TODO_ADD';

export const toDoReducer = (state, action) => {
  switch (action.type) {
    case TODO_ADD:
      if (action.payload) {
        const newState = [
          ...state,
          {
            id: generateId(),
            name: action.payload,
            completed: false
          }
        ];
        return newState;
      }
      return state;
    default:
      console.error('Use the action constants bro.');
      return state;
  }
};
