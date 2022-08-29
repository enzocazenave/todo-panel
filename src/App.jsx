import { Category } from './components/Category';
import { useDispatch, useSelector } from 'react-redux';
import { startCreateCategory, startLogin } from './store/thunks';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

export const App = () => {

    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.app);

    useEffect(() => {
        dispatch(startLogin())
    }, [])
    
    const addCategory = async() => {
        const { value: categoryName } = await Swal.fire({
            title: 'Enter category name',
            input: 'text',
            inputLabel: 'Your category name',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
          
        if (categoryName) {
            dispatch(startCreateCategory(categoryName));
            Swal.fire(`Category ${categoryName} created!`)
        }
    }

    return (
        <>
            <button onClick={ addCategory } className="add-category-button">
                Add todos category
            </button>


            {
                categories.map(props => {
                    const properties = { id: props.key, ...props }
                    return <Category key={ props.key } { ...properties }/>
                })
            }
        </>
    )
}
