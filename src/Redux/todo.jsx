import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addTodoText, removeList } from "./todoSlice";
import { v4 as uuidv4 } from 'uuid';
import './todo.css'

function Todo() {
  const lists = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();
  const [inpVal, setInpVal] = useState("");
  return (
    <div className="todo-container">
      <div className="input-container">
        <input
          className="todo-input"
          type="text"
          value={inpVal}
          onChange={(e) => setInpVal(e.target.value)}
        />
        <button
          className="add-button"
          onClick={() => {
            dispatch(addTodoText({ list: inpVal, id: uuidv4() }));
            setInpVal('');
          }}
        >
          Add Todo
        </button>
      </div>
      <ul className="todo-list">
        {lists.map((x) => (
          <li key={x.id} className="todo-item">
            {x.list}
            <span className="remove-button" onClick={() => dispatch(removeList(x.id))}>
              x
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
