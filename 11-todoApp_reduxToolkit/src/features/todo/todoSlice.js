import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    editTodoId: null
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload,
            }
            state.todos.push(todo);
        },

        changeEditTodoId: (state, action) => {
            state.editTodoId = action.payload
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id == action.payload.id ? { ...todo, title: action.payload.title } : todo)
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
    },
})

export const { addTodo, updateTodo, deleteTodo, changeEditTodoId } = todoSlice.actions;
export default todoSlice.reducer;