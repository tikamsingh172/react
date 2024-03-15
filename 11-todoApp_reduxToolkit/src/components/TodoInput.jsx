import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo, changeEditTodoId } from '../features/todo/todoSlice';

function TodoInput() {
    const { todos, editTodoId } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [id,setId]=useState('');
    const [isEdit, setIsEdit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && isEdit) {
            dispatch(updateTodo({id,title}));
            setTitle('');
            setIsEdit(false);
        } else {
            title && dispatch(addTodo(title));
        }
        setTitle('');
    }

    useEffect(() => {
        if (editTodoId) {
            const todo = (todos.find((todo) => todo.id == editTodoId));
            setTitle(todo.title);
            setId(todo.id);
            setIsEdit(true)
            dispatch(changeEditTodoId(null))
        }
    }, [editTodoId])

    return (
        <div className="w-4/5 mx-auto">
            <form onSubmit={handleSubmit} >
                <div className="flex bg-slate-400 border border-white/10 rounded-lg overflow-hidden">
                    <input
                        type="text"
                        placeholder='Enter Todo...'
                        className="w-full bg-transparent outline-none px-5 py-2 font-bold text-white text-xl"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="shrink-0 px-4 py-1.5 outline-none text-white font-bold bg-blue-600 hover:bg-blue-800"
                    >{isEdit ? "Edit Todo" : "Add Todo"}</button>
                </div>
            </form>
        </div>
    )
}

export default TodoInput