import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, title, deleteHandler, addTodo }) {
  return (
    <>
      <h1>{title}</h1>
      <button onClick={addTodo}>Add Todo</button>
      {todos.length ? null : (<p>You have no todos</p>)}
      <ul>
        {todos.map((todo, i) => (
          <TodoItem key={i} todo={todo} deleteFn={() => deleteHandler(i)} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
