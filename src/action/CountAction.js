import { useDispatch } from 'react-redux';

export const CountAction = () => {
    const dispatch = useDispatch();
    const handleClick = (type) => {
        dispatch({ type })
    }

    return { handleClick }
}
