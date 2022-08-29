import { useState } from "react";
import { getColorClass } from "../helpers/getColorClass";

export const Todo = (props) => {

    const [completed, setCompleted] = useState(props.completed);

    console.log(props)

    const completeTodo = (id) => {
        setCompleted(!completed)
    }

    return (
        <div className={`${ (completed) && 'todo-completed' } ${getColorClass(props.color, 'background')} todo-container`}>
            <p className={`todo-container__todo ${ (completed) && 'text-completed' }` }>{ props.text }</p>
            <div onClick={ () => completeTodo(props.id) } className="todo-container__complete">
                {
                    (completed) && <i className="fas fa-check"></i>    
                }
            </div>
        </div>
    )
}
