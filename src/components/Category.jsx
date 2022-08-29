import { Todo } from './Todo';
import { getColorClass } from "../helpers/getColorClass";


export const Category = (props) => {
    return (
        <div className="category-container">
            <h1 className="category-container__title">
                <span className={`${getColorClass(props.color, 'title')}`}># </span> 
                { props.title }
            </h1>

            <hr className="category-container__separator"/>
            
            {
                props.todos.map(todo => {
                    const todo_props = {color: props.color,...todo};
                    return <Todo key={ todo.id } {...todo_props} />
                })
            }
        </div>
    )
}
