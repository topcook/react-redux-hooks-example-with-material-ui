import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Grid, Button, Box, Typography, Card, CardContent, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import { Create as CreateIcon, Clear as ClearIcon } from '@material-ui/icons';
import EditNameCard from '../components/EditNameCard';

const NameCard = () => {

    // useSelector function for getting the specific reducer we need Used to get the
    // whole reducer object like getting characterReducer Get the whole state from
    // characterReducer
    const person = useSelector(state => state.characters);

    //Create local state for trigger edit form
    const [isEdit,
        setEdit] = useState(false);

    //Handle edit button onclick in name card
    const toggleEditBtn = () => {
        setEdit(!isEdit);
    }

    const Iconify = ({ icon, sx, ...other }) => {
        return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
    }

    Iconify.propTypes = {
        icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
        sx: PropTypes.object,
    };

    return (
        <>
            <Container maxWidth='xl' sx={{ position: 'relative', marginTop:2, marginBottom:2 }}>
                <Typography align='center' padding={1} sx={{ color: 'white', bgcolor: '#2196F3' }} variant='h4' gutterBottom>
                    Name Card
                </Typography>
                <Card sx={{ bgcolor: '#757575', color: 'white', padding: 1, align: 'left' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: '24px' }}>{person.name}</Typography>
                        <Typography sx={{ fontSize: '14px' }}>Occupation: {person.occupation}</Typography>
                        <Typography sx={{ fontSize: '14px' }}>Age: {person.age}</Typography>
                        <IconButton onClick={toggleEditBtn} sx={{ position: 'absolute', right: '48px', bottom: '-20px', '&:hover': { bgcolor: '#ff9800' }, bgcolor: '#ff9800', color: 'white', borderRadius: '50%' }}>
                            {isEdit
                                ? (
                                    <ClearIcon />
                                )
                                : (
                                    <CreateIcon />
                                )
                            }
                        </IconButton>
                    </CardContent>
                </Card>
            </Container>
            {isEdit && <EditNameCard />
            }
        </>

    );
}

export default NameCard;