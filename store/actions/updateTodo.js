export const UPDATE_TODO = "UPDATE_TODO";

export const updateTodo = (todo) => {
  return {
    type: "UPDATE_TODO",
    payload: todo,
  };
};