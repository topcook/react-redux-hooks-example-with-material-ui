import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { CountAction } from '../action/CountAction';

const SimpleCounter = () => {
  //Get counter from counterReducer
  const { handleClick } = CountAction()
  const counter = useSelector(state => state.myCounter.counter);

  return (
    <Container maxWidth="xl" sx={{ marginTop:2, marginBottom:2 }}>
      <Typography variant='h4' padding= {0.5} align='center' sx={{ color: 'white', bgcolor: '#2196F3' }} gutterBottom>Simple Counter</Typography>
      <Typography align='center' padding= {0.5}>{counter}</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={2}>
          <Button onClick={() => handleClick('DOUBLE_COUNT')} variant='contained' fullWidth sx={{ bgcolor: '#2196F3'}}>
            x2
          </Button>
        </Grid>

        <Grid item xs={12} sm={4} md={2} fullWidth>
          <Button onClick={() => handleClick('INCREMENT_COUNT_TEN')} variant='contained' fullWidth sx={{ bgcolor: '#2196F3'}}>
            +10
          </Button>
        </Grid>

        <Grid item xs={12} sm={4} md={2}>
          <Button onClick={() => handleClick('INCREMENT_COUNT')} variant='contained' fullWidth sx={{ bgcolor: '#2196F3'}}>
            +1
          </Button>
        </Grid>

        <Grid item xs={12} sm={4} md={2}>
          <Button onClick={() => handleClick('DECREMENT_COUNT')} variant='contained' fullWidth sx={{ bgcolor: '#2196F3'}}>
            -1
          </Button>
        </Grid>

        <Grid item xs={12} sm={4} md={2}>
          <Button onClick={() => handleClick('DECREMENT_COUNT_TEN')} variant='contained' fullWidth sx={{ bgcolor: '#2196F3'}}>
            -10
          </Button>
        </Grid>

        <Grid item xs={12} sm={4} md={2}>
          <Button onClick={() => handleClick('RESET_COUNT')} variant='contained' fullWidth sx={{ bgcolor: '#2196F3'}}>
            Reset
          </Button>
        </Grid>
      </Grid>

    </Container>
  );
}

export default SimpleCounter;