import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todoSlice';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className='flex rounded-lg mb-3 p-3 w-96 gap-4 justify-between text-2xl border border-lime-100'>
      <span>{todo.text}</span>
      <button 
      className='text-rose-900'
      onClick={() => dispatch(removeTodo(todo.id))}
      >X</button>
    </div>
  );
};

export default Todo;
