import React, { useState, useEffect } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    // Retrieve from local storage on initial load
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [input, setInput] = useState("");

  // Save to local 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add 
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput(""); // Clear input 
    }
  };

  // Toggle completion status
  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Delete a todo
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: "10px", width: "250px", marginRight: "10px" }}
        />
        <button onClick={addTodo} style={{ padding: "10px 20px" }}>
          Add
        </button>
      </div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              margin: "10px 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                marginRight: "10px",
                cursor: "pointer",
                flex: 1,
                textAlign: "center",
              }}
              onClick={() => toggleComplete(index)}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(index)}
              style={{
                padding: "5px 10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
