// src/App.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './features/todoSlice';
import Todo from './Components/Todos';

const App = () => {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo({ id: Date.now(), text: newTodo, completed: false }));
      setNewTodo('');
    }
  };

  return (
    <div className='flex justify-center items-center flex-col gap-6' >
      <h1 className='text-3xl font-bold mt-10 text-red-900'>TODO APP</h1>
      <div className='flex justify-between w-4/12 border border-slate-900 p-3 rounded'>
        <input
          className='border-none text-2xl bg-orange-200'
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
        className='rounded w-24 bg-lime-400 p-2 px-6 text-xl' 
        onClick={handleAddTodo}
        >Add
        </button>
      </div>
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo}/>
        ))}
      </div>
    </div>
  );
};

export default App;