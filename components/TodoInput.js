import React, { useState } from "react";
import { addTodo } from "../store/actions/addTodo";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch(
            addTodo({
              id: uuidv4(),
              name: inputValue,
            })
          )
        }
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
