export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        todos: [...state.todos].filter((item) => item.id !== payload),
      };

    default:
      return state;
  }
};