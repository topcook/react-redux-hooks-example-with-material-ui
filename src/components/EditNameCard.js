import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid, TextField } from '@mui/material'
import { CharacterAction } from '../action/CharacterAction'

const EditNameCard = () => {
    //Get the whole state from characterReducer
    const person = useSelector(state => state.characters);

    const { handleCharacter } = CharacterAction()

    return (
        <Container maxWidth='xl'>
            <Grid container padding={2} spacing={2}>
                <Grid item xs={12} sm={6} md={4} >
                    <TextField fullWidth
                        label="Name"
                        variant="standard"
                        value={person.name}
                        onChange={e => handleCharacter('CHANGE_NAME', e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField fullWidth
                        label="Occupation"
                        variant="standard"
                        value={person.occupation}
                        onChange={e => handleCharacter('CHANGE_OCCUPATION', e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField fullWidth
                        label="Age"
                        variant="standard"
                        value={person.age}
                        onChange={e => handleCharacter('CHANGE_AGE', e.target.value)}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default EditNameCard;