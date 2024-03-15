import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeEditTodoId, deleteTodo } from '../features/todo/todoSlice';

function TodoList() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleUpdate = (id) => {
        dispatch(changeEditTodoId(id));
    }
    return (
        <div className="">
            <ul className="text-orange-400 ">
                {
                    todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex my-2 justify-between items-center bg-zinc-500 px-4 py-1.5 rounded-md"
                        >
                            {todo.title}
                            <span className='flex gap-x-2'>
                                <button
                                    className='px-2 py-1 bg-slate-100 rounded-md'
                                    onClick={() => handleUpdate(todo.id)}
                                >✏️</button>
                                <button
                                    className='px-2 py-1 bg-slate-100 rounded-md'
                                    onClick={() => dispatch(deleteTodo(todo.id))}
                                >❌</button>
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div >
    )
}

export default TodoList