import React, { useState } from 'react';
import { useTodo } from '../contexts';

function TodoForm() {
    const { addTodo } = useTodo();
    const [inputText, setInputText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!inputText) return

        addTodo({
            id: Date.now(),
            title: inputText,
            completed: false
        })
        setInputText('');
    }

    const handleEnterKey = (e) => {
        if ((e.keyCode === 13) && (inputText)) {
            addTodo({
                id: Date.now(),
                title: inputText,
                completed: false
            })
            setInputText('');
        }
    }


    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Write todo...'
                className="w-full outline-none border border-black/10 bg-white/20 rounded-l-lg px-3 py-3 duration-200"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleEnterKey}
            />
            <button type="submit" className="bg-green-500 hover:bg-green-700 px-3 py-1.5 rounded-r-lg shrink-0 font-semibold">Add</button>
        </form>
    )
}
export default TodoForm;