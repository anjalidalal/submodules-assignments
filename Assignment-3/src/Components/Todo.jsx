import React from "react";
import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";


const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (todo) => {
    setTodoList([...todoList, todo]);
  };

  const handleDelete = (id) => {
    const updateList = todoList.filter((e) => e.id !== id);
    setTodoList(updateList);
  };

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList list={todoList} handleDelete={handleDelete} />
    </>
  );
};

export default Todo;
