import React, { useRef, useState } from 'react'
import { useTodo } from '../contexts';

function TodoItem({ todo }) {

    const [isEdit, setIsEdit] = useState(false);
    const [outputText, setOutputText] = useState(todo.title);

    const { updateTodo, deleteTodo, toggleCompleted } = useTodo();

    const handleUpdate = () => {
        if (!outputText) {
           setOutputText(todo.title);
        } else {
            updateTodo(todo.id, { ...todo, title: outputText });
        }
        setIsEdit(false);
    }

    const handleEnterKey = (e) => {
        if (e.keyCode === 13) {
            handleUpdate();
        }
    }

    return (
        <div className={`flex items-center gap-x-3 border border-black/20 rounded-lg px-3 shadow-sm shadow-white/50 text-black ${todo.completed ? 'bg-lime-300' : 'bg-violet-300'}`}>
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={() => toggleCompleted(todo.id)}
            />
            <input
                type="text"
                className={`w-full outline-none rounded-lg bg-transparent ${isEdit && "border border-black/10 px-3"} ${todo.completed && "line-through"}`}
                readOnly={!isEdit}
                value={outputText}
                onChange={(e) => setOutputText(e.target.value)}
                onKeyDown={(e) => isEdit && handleEnterKey(e)}
            />
            <button
                className={`flex justify-center items-center w-8 h-8 p-1.5 rounded-lg bg-gray-100 ${!todo.completed && 'hover:bg-gray-300'} text-bold`}
                disabled={todo.completed}
                onClick={() => isEdit ? handleUpdate() : setIsEdit(!isEdit)}
            >
                {isEdit ? '📁' : '✏️'}</button>
            <button
                className="flex justify-center items-center w-8 h-8 p-1.5 rounded-lg bg-gray-100 hover:bg-gray-300"
                onClick={() => deleteTodo(todo.id)}
            >❌</button>
        </div>
    )
}

export default TodoItem