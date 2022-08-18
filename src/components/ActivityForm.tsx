import React, { ReactElement, useState, ChangeEvent } from 'react';
import { Grid, Button, TextField, Checkbox, Autocomplete, Dialog, DialogTitle, Typography, Box } from '@mui/material';
import { AddBoxRounded } from '@mui/icons-material';
import { Hike }  from './ActivityList';
import "../App.css";

export interface ActivityFormProps{
    open: boolean;
    onClose(hike: Hike): void;
}

export default function ActivityForm({ onClose, open }: ActivityFormProps) : ReactElement {
    const states = ['AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 
                    'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 
                    'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 
                    'MP', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 
                    'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 
                    'SD', 'TN', 'TX', 'UM', 'UT', 'VA', 'VI', 'VT', 'WA', 
                    'WI', 'WV', 'WY'];
    const [ hike, setHike ] = useState<string>("");
    const [ city, setCity ] = useState<string>("");
    const [ state, setState ] = useState<string | null>(null);
    const [ length, setLength ] = useState<number>();
    const [ completed, setCompleted ] = useState<boolean>(false);

    function handleChangeHike(event: React.ChangeEvent<HTMLInputElement>) {
        setHike(event.target.value);
    }

    function handleChangeCity(event: React.ChangeEvent<HTMLInputElement>){
        setCity(event.target.value);
    }

    function handleChangeState(event: React.SyntheticEvent<Element, Event>, value: string | null){
        console.log("state: ", value);
        setState(value);
    }

    function handleChangeLength(event: React.ChangeEvent<HTMLInputElement>){
        setLength(parseFloat(event.target.value));
    }

    function handleCheckboxClick(){
        setCompleted(!completed);
    }

    function handleClose(){
        if(hike === "" || city === "" || state === null){
            return;
        }
        const newHike = {
            hike,
            city,
            state,
            length,
            done: completed,
        }
        setHike("");
        setCity("");
        setState("");
        setLength(undefined);
        setCompleted(false);
        onClose(newHike);
    }

    return (
            <Dialog onClose={handleClose} open={open} >
                <Grid container spacing={2} sx={{ padding: 2 }}>
                <Grid item sm={12} ><Typography variant="h5">Enter hike details</Typography></Grid>
                <Grid item sm={12} >
                <TextField
                    onChange={handleChangeHike}
                    value={hike}
                    id="hike"
                    name="hike"
                    label="Hike"
                    fullWidth
                    required
                />
                </Grid>
                <Grid item sm={8} >
                <TextField
                    onChange={handleChangeCity}
                    value={city}
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                />
                </Grid>
                <Grid item sm={4} >
                <Autocomplete
                    onChange={handleChangeState}
                    value={state}
                    id="state"
                    options={states}
                    getOptionLabel={(option) => option ? option : ""}
                    renderInput={(params) => <TextField {...params} label="State" required fullWidth />}
                />
                </Grid>
                <Grid item sm={6} >
                <TextField
                    type="number"
                    onChange={handleChangeLength}
                    value={length}
                    required
                    id="length"
                    name="length"
                    label="Length (mi)"
                    fullWidth
                />
                </Grid>
                <Grid item sm={3} >
                <Typography>Done?</Typography>

                <Checkbox checked={completed} onChange={handleCheckboxClick} />
                </Grid>
                <Grid item sm={12} >
                <Button variant="contained" color="primary" onClick={handleClose} fullWidth >Submit</Button>
                </Grid>
                </Grid>
           
            
        </Dialog>
    );
}