import classNames from "classnames";
import TodoItemCSS from './TodoItem.module.css';
import {Icon} from "@iconify/react";

function TodoItem({todo, deleteTodo, doneTodo}) {

    return (
        <div className={classNames( TodoItemCSS.containerTodo,TodoItemCSS.borderRadius,"container")}>
            <Icon className={classNames(TodoItemCSS.doneIcon, {[TodoItemCSS.doneIconCompleted] : todo.completed})} onClick={()=>doneTodo(todo)} icon="fluent-mdl2:accept" />
            <div className={classNames(TodoItemCSS.todoTextContainer,  {[TodoItemCSS.completedTodo] : todo.completed})}>{todo.text}</div>
            <Icon className={classNames(TodoItemCSS.deleteButton)} onClick={()=>deleteTodo(todo)} icon={"material-symbols:delete"}/>
        </div>
    );
}

export default TodoItem;