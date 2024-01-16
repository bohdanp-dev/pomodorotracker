import {useEffect, useState} from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import classNames from "classnames";
import TodoListCSS from "./TodoList.module.css";

function TodoList() {
    const [todos, setTodos] = useState(()=>{
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])
    const addTodo = (text) =>{
        setTodos([...todos, {text, completed: false}]);
    }

    const deleteTodo = (todoToRemove) =>{
        const updatedTodos = todos.filter((todo)=>{
            return todo !== todoToRemove
        });
        setTodos(updatedTodos);
    }

    const doneTodo = (todoToComplete) => {
        const updatedTodos = todos.map((todo)=>{
            //improve by putting it not to the very last place, but to the first place between completed ones
            if(todo === todoToComplete){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    const sortedTodos = todos.slice().sort((a, b) => {
        if (a.completed && !b.completed) {
            return 1;
        }
        if (!a.completed && b.completed) {
            return -1;
        }
        return 0;
    });

    return (
        <>
            <TodoForm addTodo={addTodo}/>
            <div className={classNames(TodoListCSS.listContainer,"container")}>
                {
                    sortedTodos.map((todo, index)=>{
                        return <TodoItem key={index} todo={todo} deleteTodo={deleteTodo} doneTodo={doneTodo}/>
                    })
                }
            </div>
        </>
    );
}

export default TodoList;