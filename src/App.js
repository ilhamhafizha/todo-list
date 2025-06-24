import "./App.css";
import { useState, useMemo } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleClick = () => {
    setTodos((currrentTodos) => [
      ...currrentTodos,
      {
        id: currrentTodos.length + 1,
        title: `TODO ${currrentTodos.length + 1}`,
        complated: false,
      },
    ]);
  };

  const handleClickItemClick = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complated: !todo.complated };
        }
        return todo;
      });
    });
  };

  const filterTodo = (todo, filter) => {
    if (filter === "all") {
      return true;
    }
    if (filter === "complated") {
      return todo.complated;
    }
    if (filter === "uncomplated") {
      return !todo.complated;
    }
  };

  // const visibleTodos = todos.filter((todo) => filterTodo(todo, filter));
  const memoizedFilterTodos = useMemo(() => filterTodo(todos, filter), [todos.filter]);

  return (
    <>
      <h1>Todo App</h1>
      <button onClick={handleClick}>Add Todo</button>
      <button onClick={() => setFilter("all")}>Show all</button>
      <button onClick={() => setFilter("complated")}>Show Complated Todo</button>
      <button onClick={() => setFilter("uncomplated")}>Show Uncomplated Todo</button>

      <div>
        <h2>TodoList</h2>
        {visibleTodos.map((todo) => {
          return (
            <div key={todo.id}>
              <input type="checkbox" checked={todo.complated} onChange={() => handleClickItemClick(todo.id)} />
              <span>{todo.title}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
