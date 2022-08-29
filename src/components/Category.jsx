import { Todo } from './Todo';
import { getColorClass } from "../helpers/getColorClass";
import { useDispatch } from 'react-redux';
import { startCreateTodo, startDeleteCategory } from '../store/thunks';
import Swal from 'sweetalert2';

export const Category = (props) => {

    const dispatch = useDispatch()
    const todos = props.todos;

    const createTodo = async() => {
        const { value: task } = await Swal.fire({
            title: 'Enter todo task',
            input: 'text',
            inputLabel: 'Your todo task',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        });
          
        if (task) {
            dispatch(startCreateTodo(task, props.id));
        }
    }

    return (
        <div className="category-container animate__animated animate__fadeIn">
            <h1 className="category-container__title">
                <span className={`${getColorClass(props.color, 'title')}`}># </span> 
                { props.title }
            </h1>

            <hr className="category-container__separator"/>

            <button className="category-action" onClick={ createTodo }>Add todo</button>
            <button onClick={ () => dispatch(startDeleteCategory(props.id)) } className="category-action">Delete category</button>

            <hr className="category-container__separator"/>

            
            {
                (todos) &&
                    Object.keys(todos).map((key) => {
                        const todo_props = { color: props.color, category_id: props.id, todo_id: key,...todos[key] }
                        return <Todo key={ key } { ...todo_props } />
                    })
            }
        </div>
    )
}
