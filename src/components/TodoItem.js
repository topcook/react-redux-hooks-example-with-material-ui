import React from 'react';
import { useSelector } from 'react-redux';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import { Cancel as CancelIcon } from '@material-ui/icons';
import { TodoAction } from '../action/TodoAction';

//Single todo item component
const TodoItem = (props) => {
    //Get todoList from todoReducer
    const todoList = useSelector(state => state.todos.todoList)

    const { handleTodo } = TodoAction();

    //Remove single todo in the list
    const removeTodoItem = (todoId) => {
        //filter to get the todoId which need to be remove
        let newTodoList = todoList.filter(item => item.id !== todoId);
        handleTodo('REMOVE_TODO', newTodoList)
    }

    return (
        <ListItem
            key={props.item.id}
            sx={{borderBottom:'1px solid #e0e0e0'}}
            secondaryAction={
                <IconButton aria-label="comment" onClick={() => removeTodoItem(props.item.id)}>
                    <CancelIcon />
                </IconButton>
            }
        >
            <ListItemText primary={props.item.content} />
        </ListItem>
    );
}

export default TodoItem;