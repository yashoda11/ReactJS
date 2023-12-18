// src/components/Todo.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../features/todoSlice';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <span>{todo.text}</span>
    </div>
  );
};

export default Todo