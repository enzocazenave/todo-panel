import { Category } from './components/Category';
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from './store/thunks';
import { useEffect } from 'react';

export const App = () => {

    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.app);

    useEffect(() => {
        dispatch(startLogin())
    }, [])
    
    return (
        <>
            {
                categories.map(props => {
                    const properties = { id: props.key, ...props }
                    return <Category key={ props.key } { ...properties }/>
                })
            }
        </>
    )
}
