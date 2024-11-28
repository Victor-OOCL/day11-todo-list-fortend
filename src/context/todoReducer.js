export const initialState = [
  {
    id: Date.now(),
    text: "the first todo",
    done: false
  },
  {
    id: Date.now(),
    text: "the second todo",
    done: false
  },
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          done: false
        }
      ];
    case 'DONE':
      return state.map((todo, index) =>
        index === action.payload
          ? {
            ...todo,
            done: !todo.done
          }
          : todo
      );
  }
  return state;
};