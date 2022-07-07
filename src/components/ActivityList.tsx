import React, { ReactElement, useState } from 'react';
import { Container, Checkbox, Button, TableContainer, Table, TableRow, Paper, TableHead, TableCell, TableBody } from '@mui/material';
import { Add } from '@mui/icons-material';
import ActivityForm from './ActivityForm';

export interface Hike {
    hike: string;
    city: string;
    state: string;
    done: boolean;
    length?: number;
}

function createHike(hike: string, city: string, state: string, done: boolean, length?: number){
    return({
        hike,
        city,
        state,
        done,
        length
    });
}

export default function ActivityList(): ReactElement {
    const [ hikes, setHikes ] = useState<Array<Hike>>([
        createHike("Wildwood Trail", "Portland", "OR", false, 34),
        createHike("McDowell Preserve", "Scottsdale", "AZ", true),
        createHike("Prairie Path", "Wheaton", "IL", false),
        createHike("Multnomah Falls", "Hood River", "OR", true, 3),
        createHike("A very very very looooooooooooooooooong hiiiiiiiiike", "Somewhere very faaaar away", "in some state", false, 1000000000)
    ]);
    const [ formOpen, setFormOpen ] = useState<boolean>(false);

    function handleFormOpen(){
        setFormOpen(true);
    }
    
    function handleSubmitForm(hike: Hike){
        setHikes([...hikes, hike]);
        setFormOpen(false);
    }

    function handleCheckboxClick(name: string){
        setHikes(
            hikes.map((hike) => (
                {
                    ...hike, 
                    done: hike.hike === name ? !hike.done : hike.done
                }))
        );
    }

    return (
        <Container>
        <TableContainer component={Paper} sx={{ mt: 3, mb: 2 }}>
            <Table aria-label="activities-table">
                <TableHead>
                    <TableRow>
                        <TableCell>Hike</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>State</TableCell>
                        <TableCell>Length (mi)</TableCell>
                        <TableCell>Visited?</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {hikes.map((hike) => (
                        <TableRow key={hike.hike}>
                            <TableCell component="th" scope="row">{hike.hike}</TableCell>
                            <TableCell align="left">{hike.city}</TableCell>
                            <TableCell align="left">{hike.state}</TableCell>
                            <TableCell align="left">{hike.length}</TableCell>
                            <TableCell align="left"><Checkbox checked={hike.done} onChange={() => handleCheckboxClick(hike.hike)} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Button onClick={handleFormOpen} color="primary" variant="contained"><Add />Add Hike</Button>
        <ActivityForm onClose={handleSubmitForm} open={formOpen} />
        </Container>
    );
}