import "./App.css";
import { useState, useMemo, useCallback, memo } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleAddTodo = () => {
    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: currentTodos.length + 1,
        title: `TODO ${currentTodos.length + 1}`,
        completed: false,
      },
    ]);
  };

  const handleTodoClick = useCallback((id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  }, []);
  const filterTodo = (todo, filter) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "uncompleted") return !todo.completed;
    return true;
  };

  const visibleTodos = useMemo(() => todos.filter((todo) => filterTodo(todo, filter)), [todos, filter]);

  const TodoItem = memo(function TodoItem({ id, completed, title, onTodoChange }) {
    return (
      <div>
        <input type="checkbox" checked={completed} onChange={() => onTodoChange(id)} />
        <span>{title}</span>
      </div>
    );
  });

  return (
    <>
      <h1>Todo App</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={() => setFilter("all")}>Show all</button>
      <button onClick={() => setFilter("completed")}>Show Completed Todo</button>
      <button onClick={() => setFilter("uncompleted")}>Show Uncompleted Todo</button>

      <div>
        <h2>TodoList</h2>
        {visibleTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onTodoChange={handleTodoClick}
          />
        ))}
      </div>
    </>
  );
}

export default App;
