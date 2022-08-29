import { useState } from "react";
import { getColorClass } from "../helpers/getColorClass";
import { startCompleteTodo, startDeleteTodo } from "../store/thunks";
import { useDispatch } from "react-redux";

export const Todo = (props) => {
    
    const [completed, setCompleted] = useState(props.completed);
    const dispatch = useDispatch();


    const completeTodo = (category_id, todo_id) => {
        setCompleted(!completed);
        dispatch(startCompleteTodo(category_id, todo_id, !completed))
    }

    return (
        <div className={`${ (completed) && 'todo-completed' } ${getColorClass(props.color, 'background')} todo-container`}>
            <p className={`todo-container__todo ${ (completed) && 'text-completed' }` }>{ props.text }</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <i style={{
                    marginRight: '20px',
                    color: '#000',
                    cursor: 'pointer',
                }} onClick={ () => dispatch(startDeleteTodo(props.category_id, props.todo_id)) } className="fas fa-trash"></i>
                <div onClick={ () => completeTodo(props.category_id, props.todo_id) } className="todo-container__complete">
                    {
                        (completed) && <i className="fas fa-check"></i>    
                    }
                </div>
            </div>
            
        </div>
    )
}
