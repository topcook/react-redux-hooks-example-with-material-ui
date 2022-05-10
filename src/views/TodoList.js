import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, TextField, Typography, Button, Grid, List } from '@mui/material';
import TodoItem from '../components/TodoItem';
import { TodoAction } from '../action/TodoAction';
import { Box } from '@mui/system';


const TodoList = () => {

  //#2 Used to get a single attribute or object inside the Reducer

  //Get todoList from todoReducer
  const todoList = useSelector(state => state.todos.todoList);

  const { handleTodo } = TodoAction()

  //Local state for the input
  const [inputTodo, setInputTodo] = useState('');
  //Local state for the input error message
  const [errMsg, setErrMsg] = useState('');

  //Handle onClick event
  const addNewTodo = () => {
    //Valid input value
    if (inputTodo.trim().length > 1) {
      setErrMsg('');
      let newTodoObject = {
        id: Math.random(),
        content: inputTodo
      }
      //Add new todo item into List with the action
      handleTodo('ADD_TODO', newTodoObject);
      //Empty input 
      setInputTodo('');
    }
    else {
      //Display Error message
      setErrMsg('Please input something...');
    }


  }

  return (
    <Container maxWidth='xl' sx={{ marginTop: 2, marginBottom: 2 }}>
      <Typography variant='h4' align='center' padding={0.5} sx={{ color: 'white', bgcolor: '#2196F3' }} className="center-align white-text blue">Todo List</Typography>
      {
        todoList.length > 0 ?
          (
            <List spacing={3} >
              {todoList.map(item => (
                <TodoItem key={item.id} item={item} />
              ))}
            </List>
          ) :
          (<Typography align='center'>You don't have anything to do! Awesome!</Typography>)
      }

      <Grid container spacing={1} padding={2}>
        <Grid item xs={12} sm={4} sx={{ color: 'red', marginTop: '14.5px' }} align='center'>
          {errMsg}
        </Grid>
        <Grid item xs={12} sm={4} >
          <TextField fullWidth
            variant='standard'
            label="New Todo"
            value=' '
            placeholder="Add todo..."
            value={inputTodo}
            onChange={e => setInputTodo(e.target.value)}
            type="text"
          />
        </Grid>
        <Grid item xs={12} sm={4} >
          <Button sx={{ marginTop: '12px', bgcolor: '#2196F3', color: '#212529', '&:hover': { bgcolor: '#ff9800' } }} onClick={addNewTodo} fullWidth>Add</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TodoList;