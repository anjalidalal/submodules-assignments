import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";


const TodoInput = ({ handleAddTodo }) => {
  const [text, setText] = useState("");
  const handleChange = ({ target }) => {
    setText(target.value);
  };

  const handleClicked = () => {
    const data = {
      id: nanoid(4),
      title: text,
      status: false,
    };
    handleAddTodo(data);
    setText("")
  };

  return (
    <div className="todoinput">
      <input
        type="text"
        className="task"
        value={text}
        placeholder="Enter Task"
        onChange={handleChange}
      />
      <button className="add" onClick={handleClicked}>Add Task</button>
    </div>
  );
};

export default TodoInput;
