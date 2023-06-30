import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import nextId from 'react-id-generator';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function TodoListContainer() {
    const [todos, setTodos] = useState([]);
    const id = nextId();
    const todoNameRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(storedTodos) setTodos(storedTodos)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function handleAllTodos() {
        const allTodos = [...todos]
        allTodos.filter(todo => !todo.complete ? todo.complete = true : todo.complete = true)
        setTodos(allTodos)
    }

    function toggleTodo(id) {
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id === id);
        todo.complete = !todo.complete;
        setTodos(newTodos);
    }

    function handleClearTodos() {
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }

    function handleAddTodo(e) {
        const inputValue = todoNameRef.current.value;
        if(inputValue === '') return;

        setTodos(prevTodos => {
            return [...prevTodos, { id: id, inputValue: inputValue, complete: false}]
        })
        todoNameRef.current.value = null;
        document.querySelector('.todo-list__input').focus()
    }

    return (
        <div className='todo-list'>
            <div className='wrap'>
                <h1 className='todo-list__title'>Add your Todos</h1>
                <h2 className='todo-list__subtitle'>{todos.filter(todo => !todo.complete).length} left Todos</h2>
                <div className='todo-list__form'>
                    <input ref={todoNameRef} type='text' className='todo-list__input' />
                    <div className='todo-list__btn-holder'>
                        <button type='button' className='todo-list__btn' onClick={handleAddTodo}>Add Todo</button>
                        <button type='button' className='todo-list__btn todo-list__btn--delete' onClick={handleClearTodos}>Delete Completed</button>
                    </div>
                </div>
                <div className='todo-list__holder'>
                    <h2 className='todo-list__holder-title'>My Todos</h2>
                    <TodoList todos={todos} toggleTodo={toggleTodo} />
                    <button type='button' className='todo-list__holder-btn' onClick={handleAllTodos}>Select All Todos</button>
                </div>
            </div>
        </div>
    )
}
