import { useDispatch } from 'react-redux';

export const CharacterAction = () => {
    const dispatch = useDispatch();
    const handleCharacter = (type, payload) => {
        dispatch({ type, payload })
    }

    return { handleCharacter }
}
