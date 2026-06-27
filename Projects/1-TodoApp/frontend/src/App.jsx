import React, { useState, useEffect } from 'react';
import './index.css';

const API_URL = 'http://localhost:5000/api/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState(null);

  // 1. READ (GET) - Load data from Database
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTodos(data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  // 2. CREATE (POST) & UPDATE (PUT) Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (isEditing) {
      // PUT Method Use Case: Complete text edit upgrade
      try {
        const res = await fetch(`${API_URL}/${currentTodoId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: inputValue }),
        });
        const updatedTodo = await res.json();
        
        setTodos(todos.map(todo => todo._id === currentTodoId ? updatedTodo : todo));
        setInputValue('');
        setIsEditing(false);
        setCurrentTodoId(null);
      } catch (err) {
        console.error(err);
      }
    } else {
      // POST Method Use Case: Fresh addition
      try {
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: inputValue }),
        });
        const newTodo = await res.json();
        setTodos([newTodo, ...todos]);
        setInputValue('');
      } catch (err) {
        console.error(err);
      }
    }
  };

  // 3. PARTIAL UPDATE (PATCH) - Toggle Completion
  const handleToggleComplete = async (id) => {
    // PATCH Method Use Case: Only changing 'isCompleted' flag state
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'PATCH' });
      const updatedTodo = await res.json();
      setTodos(todos.map(todo => todo._id === id ? updatedTodo : todo));
    } catch (err) {
      console.error(err);
    }
  };

  // Setup Edit Form Mode
  const handleEditSetup = (todo) => {
    setIsEditing(true);
    setInputValue(todo.title);
    setCurrentTodoId(todo._id);
  };

  // 4. DELETE (DELETE) - Remove permanently
  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="app-container">
      <h1>MERN Todo App</h1>
      
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className={`btn ${isEditing ? 'btn-edit' : 'btn-primary'}`}>
          {isEditing ? 'Update' : 'Add Todo'}
        </button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo._id} className="todo-item">
            <div className="todo-content">
              <input
                type="checkbox"
                className="checkbox"
                checked={todo.isCompleted}
                onChange={() => handleToggleComplete(todo._id)}
              />
              <span className={`todo-text ${todo.isCompleted ? 'completed' : ''}`}>
                {todo.title}
              </span>
            </div>
            <div className="action-buttons">
              <button onClick={() => handleEditSetup(todo)} className="btn btn-edit">
                Edit
              </button>
              <button onClick={() => handleDelete(todo._id)} className="btn btn-danger">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;