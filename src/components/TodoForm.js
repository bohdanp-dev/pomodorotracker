import {useState} from "react";
import TodoFormCSS from "./TodoForm.module.css";
import classNames from "classnames";
import {Icon} from "@iconify/react";

function TodoForm({addTodo}) {
    const [todoText, setTodoText] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(todoText !== ''){
            addTodo(todoText);
        }
        setTodoText('');
    }

    return (
        <div className={classNames(TodoFormCSS.containerTodo, TodoFormCSS.borderRadius, "container")}>
            <label className={classNames(TodoFormCSS.taskLabel)}>Tasks</label>
            <form className={classNames(TodoFormCSS.formTodo)} onSubmit={(e)=>handleFormSubmit(e)}>
                <input className={classNames(TodoFormCSS.underlineInput)} value={todoText} onChange={(e)=>setTodoText(e.target.value)}/>
                <button className={classNames(TodoFormCSS.buttonForm)} type="Submit"><Icon className={classNames(TodoFormCSS.addIcon)} icon={"gg:add"}/></button>
            </form>
        </div>
    );
}

export default TodoForm;