import * as React from 'react';
import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import SimpleCounter from './views/SimpleCounter';
import TodoList from './views/TodoList';
import NameCard from './views/NameCard';

export default function App() {
  return (
    <Grid container maxWidth="xl" rowSpacing={3}>
      <Grid item xs={12} align='center'>
        <SimpleCounter />
      </Grid>
      <Grid item xs={12}>
        <NameCard />
      </Grid>
      <Grid item xs={12}>
        <TodoList />
      </Grid>
    </Grid>
  );
}
