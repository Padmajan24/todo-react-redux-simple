import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteTodo } from '../features/todo/todoSlice';

import './TodoList.css';
import { deleteTodo } from './features/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [selectedTodos, setSelectedTodos] = useState([]);

  const handleToggleSelect = (id) => {
    const selectedIndex = selectedTodos.indexOf(id);
    if (selectedIndex === -1) {
      setSelectedTodos([...selectedTodos, id]);
    } else {
      const updatedSelectedTodos = [...selectedTodos];
      updatedSelectedTodos.splice(selectedIndex, 1);
      setSelectedTodos(updatedSelectedTodos);
    }
  };

  const handleDeleteSelected = () => {
    selectedTodos.forEach(id => dispatch(deleteTodo(id)));
    setSelectedTodos([]);
  };

  return (
    <div className="todo-container">
      <h2 className="todo-header">All Todos</h2>
      {todos.length === 0 ? (
        <p>No todos</p>
      ) : (
        <>
          <button className="delete-button" onClick={handleDeleteSelected}>Delete Selected</button>
          <ul className="todo-list">
            {todos.map(todo => (
              <li key={todo.id} className="todo-item">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={selectedTodos.includes(todo.id)}
                    onChange={() => handleToggleSelect(todo.id)}
                  />
                </label>
                {todo.text}
                <button className="delete-button" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TodoList;
