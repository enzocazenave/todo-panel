import { Todo } from './Todo';
import { getColorClass } from "../helpers/getColorClass";


export const Category = (props) => {

    const todos = props.todos;

    return (
        <div className="category-container">
            <h1 className="category-container__title">
                <span className={`${getColorClass(props.color, 'title')}`}># </span> 
                { props.title }
            </h1>

            <hr className="category-container__separator"/>
            
            {
                Object.keys(todos).map((key) => {
                    const todo_props = { color: props.color, category_id: props.id, todo_id: key,...todos[key] }
                    return <Todo key={ key } { ...todo_props } />
                })
            }
        </div>
    )
}
