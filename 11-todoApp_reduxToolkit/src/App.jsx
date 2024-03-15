import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="w-full min-h-screen p-5 bg-slate-950">
      <div className="w-3/4 mx-auto mt-12 px-4 py-8 border border-white/10 bg-slate-700 rounded-lg shadow-lg">
        <TodoInput />
        <hr className='mt-4 mb-8' />
        <TodoList />
      </div>
    </div>
  )
}

export default App;