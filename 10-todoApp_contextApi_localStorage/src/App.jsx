import React, { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm.jsx';
import TodoItem from './components/TodoItem.jsx';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo])
  }
  const updateTodo = (id, newTodo) => {
    setTodos((prev) => prev.map(prevTodo => prevTodo.id === id ? newTodo : prevTodo));
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter(prevTodo => prevTodo.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodos((prev) => prev.map(prevTodo => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem("todos"))
    if (getTodos && getTodos.length > 0) {
      setTodos(getTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}>
      <div className="min-h-screen p-8 bg-slate-900">
        <div className="max-w-2xl mx-auto px-4 py-8 rounded-xl shadow-2xl text-white">
          <h1 className="font-bold text-2xl text-center mt-2 mb-5">
            Manage Your Todos
          </h1>
          <div className="mb-10">
            <TodoForm />
            <hr className='mt-5'/>
          </div>

          <div className="flex flex-col gap-y-4">
            {todos.map(todo=><TodoItem key={todo.id} todo={todo}/>)}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App