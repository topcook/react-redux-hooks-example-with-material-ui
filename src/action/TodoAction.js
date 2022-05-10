import { useDispatch } from 'react-redux';

export const TodoAction = () => {
    const dispatch = useDispatch();
    const handleTodo = (type, payload) => {
        dispatch({ type, payload })
    }

    return { handleTodo }
}
