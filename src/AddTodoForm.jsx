// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

// import { addTodo } from '../features/todo/todoSlice';

import './addtodoform.css';
import { addTodo } from './features/todoSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddTodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() === '') return;
    dispatch(addTodo({ id: nanoid(), text }));
    setText('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-header">Add Todo</h2>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter todo"
        className="todo-input"
      />
      <button type="submit" className="submit-button">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
