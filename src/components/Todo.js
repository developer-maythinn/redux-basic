import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../redux/todoSlice";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (inputValue) {
      dispatch(addItem(inputValue));
      setInputValue("");
    }
  };
  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a todo"
        value={inputValue}
      />
      <button onClick={handleAdd}>Add</button>
      {todos?.length > 0 &&
        todos.map((item) => {
          console.log("iii", item);
          return (
            <React.Fragment key={item.id}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h2>{item.text}</h2>
                <button onClick={() => dispatch(deleteItem(item.id))}>
                  Delete
                </button>
              </div>
            </React.Fragment>
          );
        })}
    </>
  );
}

export default Todo;
