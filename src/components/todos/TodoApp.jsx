import React, { useState, useEffect, useCallback } from "react";
import TodoList from "./TodoList";

const ENDPOINT = "https://jsonplaceholder.typicode.com/todos/";

function TodoApp() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [state, setState] = useState([]);
  // const [num, setNum] = useState(0)

  const getTodos = useCallback(async (abortController) => {
    setLoading(true)
    try {
      const response = await fetch(ENDPOINT, {
        signal: abortController.signal
      });

      if(!response.ok) throw new Error('Failed to fetch');

      const data = await response.json();
      console.log(data);
      setState(data);

    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [setState]);

  useEffect(() => {
    let abortController = new AbortController();
    if(!isLoading) {
      getTodos(abortController);
    }
    return () => {
      // abortController.abort();
    };
  }, []);

  // newTodo: {n: 4}
  // [{ n: 1}, { n: 2}, { n: 3}]
  // [...state, newTodo]
  // [{ n: 1}, { n: 3}]

  const deleteFn = (i) => {
    const newState = [...state.slice(0, i), ...state.slice(i + 1)];
    setState(newState);
  };

  const addTodo = () => {
    const newTodo = { title: "I was added!" };

    const newState = [...state, newTodo];

    setState(newState);
  };

  if(isLoading) return <p>Loading...</p>

  if(error) return (<p>Error: {error.message}</p>)

  return (
    <TodoList
      todos={state}
      title="Todo App"
      deleteHandler={deleteFn}
      addTodo={addTodo}
    />
  );
}

export default TodoApp;
