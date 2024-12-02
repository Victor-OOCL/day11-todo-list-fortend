export const initialState = [];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return action.payload
    case 'ADD':
      return [
        ...state,
        action.payload
      ];
    case 'DONE':
      return state.map((todo) =>
        todo.id === action.payload
          ? {
            ...todo,
            done: !todo.done
          }
          : todo
      );
    case 'DELETE':
      return state.filter(todo => todo.id !== action.payload);
    case 'UPDATE':
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
            ...todo,done: action.payload.done,text:action.payload.text
          }
          : todo
      );
  }
  return state;
};