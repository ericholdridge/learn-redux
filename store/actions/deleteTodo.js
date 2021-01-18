export const DELETE_TODO = "DELETE_TODO";

export let deleteTodo = (todoId) => {
  return {
    type: "DELETE_TODO",
    payload: todoId,
  };
};