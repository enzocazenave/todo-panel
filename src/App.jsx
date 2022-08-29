import { Category } from './components/Category';

export const App = () => {
    
    const props = {
        title: 'Facultad',
        color: 'red',
        todos: [{text: 'Hacer tp2 para el martes', completed: false, id: 1}, {text: 'Hacer tp2 para el martes',completed: false, id: 2}, {text: 'Hacer tp2 para el martes',completed: false, id: 3}]
    }

    const props1 = {
        title: 'Rutina',
        color: 'purple',
        todos: [{text: 'Hacer la comida', completed: false, id: 1}]
    }

    return (
        <>
            <Category {...props} />
            <Category {...props1} />
        </>
    )
}
