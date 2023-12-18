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
    <div>
      <h1>TODO App</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default App;