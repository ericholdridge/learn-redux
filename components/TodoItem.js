import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/actions/deleteTodo";
import { updateTodo } from "../store/actions/updateTodo";

const TodoItem = ({ todo }) => {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  let dispatch = useDispatch();
  return (
    <div>
      <div>
        {editable ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          todo.name
        )}
      </div>
      <button
        onClick={() => {
          dispatch(
            updateTodo({
              ...todo,
              name: name,
            })
          );
          if (editable) {
            setName(todo.name);
          }
          setEditable(!editable);
        }}
      >
        {editable ? "Update" : "Edit"}
      </button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  );
};

export default TodoItem;
