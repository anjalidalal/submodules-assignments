import React from "react";
import logo from './logo.png'

const TodoList = ({ list, handleDelete }) => {
  return (
    <div className="todolist">
     
      {list.map((e) => (
        <p key={e.id} className="list">
          {e.title}
          <button
            className="delete"
            onClick={() => {
              handleDelete(e.id);
            }}
          ><img src={logo} alt="" className="logo" />
          </button>
        </p>
      ))}
    </div>
  );
};

export default TodoList;
